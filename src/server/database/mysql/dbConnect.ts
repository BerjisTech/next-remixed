import { logToFile } from "@/lib/logger";
import mysql, { Pool } from "mysql2/promise";
import os from "os";

// Determine the environment (development or production)
const isLocal = process.env.NEXT_NODE_ENV === "development";

interface Config {
  uri: string;
}

// Master DB Configuration
// List of master DBs (Primary: PRIS, Fallback: LEON)
const masterDbConfigs: Config[] = isLocal
  ? [{ uri: process.env.DATABASE_URL_LOCAL ?? "" }]
  : [
      { uri: process.env.DATABASE_URL_LEON ?? "" }, // Primary Master
      { uri: process.env.DATABASE_URL_PRIS ?? "" }, // Fallback Master
    ];

// Slave DB Configurations
// TODO Add weight for each db in object config object and make selection on those basis.
const slaveDbConfigs: Config[] = isLocal
  ? [{ uri: process.env.DATABASE_URL_LOCAL as string }]
  : [
      { uri: (process.env.DATABASE_URL_TYRION as string) || "" },
      { uri: (process.env.DATABASE_URL_KRIEGER as string) || "" },
      { uri: (process.env.DATABASE_URL_SYR_DB2 as string) || "" },
      { uri: (process.env.DATABASE_URL_SYR_DB3 as string) || "" },
    ];

// Create a MySQL connection pool for master and slaves
let masterPool: Pool | null = null;
let slavePools: Pool[] = []; // Array to store slave pools
let slaveIndex: number = 0;

/**
 * Function to create the master pool with failover logic
 * @returns {Pool} - Returns a MySQL connection pool
 */
const createMasterPool = async (): Promise<Pool> => {
  if (masterPool) return masterPool; // Return existing pool if available

  console.log("Attempting to create master DB pool...");

  for (const config of masterDbConfigs) {
    if (!config.uri.trim()) continue; // Skip empty URIs

    try {
      console.log(`Trying master DB: ${config.uri}`);
      const pool = mysql.createPool(config.uri);
      await pool.getConnection(); // Test connection
      masterPool = pool;
      console.log("Master DB connected:", config.uri);
      return masterPool;
    } catch (error) {
      console.error(`Failed to connect to master DB: ${config.uri}`, error);
    }
  }

  throw new Error("🚨 All master DB connections failed!");
};

// Function to create slave pools (one per configuration)
const createSlavePools = (): void => {
  const serverIP = getServerIP();
  logToFile(`Server IP: ${serverIP}` + " HOSTED ON: " + os.hostname());
  if (!slavePools.length) {
    console.log("Initializing slave pools...");

    // Filter out configurations with empty URIs
    const validConfigs = slaveDbConfigs.filter((config) => {
      const isValid = config.uri.trim() !== "";
      console.log(`Config URI: ${config.uri}, Valid: ${isValid}`);
      return isValid;
    });
    // Create pools only for valid configurations
    slavePools = validConfigs.map((config) => {
      console.log("Creating pool for config:", config);
      return mysql.createPool(config.uri);
    });
  } else {
    console.log("Slave pools already initialized.");
  }
};

// Function to get a slave pool in a round-robin fashion
const getRoundRobinSlavePool = (): Pool => {
  const pool = slavePools[slaveIndex];
  slaveIndex = (slaveIndex + 1) % slavePools.length; // Round-robin selection
  return pool;
};

/**
 * Function to get a MySQL connection pool based on the query type (read/write)
 * @param {string} queryType - Type of query, either 'read' or 'write'
 * @returns {mysql.Pool} - Returns a MySQL connection pool
 */
export const getConnection = async (dbType: "master" | "slave" = "slave"): Promise<Pool> => {
  if (dbType === "master") {
    return createMasterPool();
  } else {
    createSlavePools(); // Ensure pools are created only once
    return getRoundRobinSlavePool();
  }
};

// Helper function to get the server IP
const getServerIP = (): string => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name] ?? []) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "unknown";
};
