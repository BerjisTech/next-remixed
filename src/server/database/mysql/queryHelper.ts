import { md5 } from "@/server/data/common";
import { getConnection } from "./dbConnect";
import { FieldPacket, QueryResult, ResultSetHeader } from "mysql2";
import { deleteCache, getCache, setCache } from "@/server/persistent/cacheHelper";

interface CacheConfig {
  useCache: boolean;
  ttl?: number; // Default ttl: 12 hours
  purgeCache?: boolean;
}

/**
 * Execute a query using the appropriate database connection (master or slave)
 * @param {string} sql - SQL query string
 * @param {Array} params - Query parameters
 * @returns {Promise<Object>}
 */
export const executeQuery = async (
  sql: string,
  db: "master" | "slave" = "slave",
  params: any[] = [],
  memCachedOptions: CacheConfig = { useCache: false, ttl: 60 * 60 * 12 },
  debug = false
): Promise<any[] | { rows: any[]; metadata: QueryResult }> => {
  if (process.env.NEXT_NODE_ENV === "development") {
    const fullQuery = buildQueryWithParams(sql, [...params]); // Create a copy of params
    const formattedQuery = fullQuery
      .replace(/\n/g, " ") // Replace newlines with spaces
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim(); // Trim leading and trailing spaces

    console.log("Executing query with params:\n", formattedQuery); // Log with a newline before the query
  }

  if (!debug) {
    const cacheKey = md5(sql + JSON.stringify(params)); // Unique cache key based on query and parameters
    if (memCachedOptions.useCache) {
      // If ttl is not provided, use default ttl
      const ttl = memCachedOptions.ttl || 60 * 60 * 12; // Default TTL: 12 hours

      if (memCachedOptions.purgeCache) {
        const res = await deleteCache(cacheKey);
        return [] as any[]; // Return empty rows if only need to delete cache then on next fetch it will update data
      }

      // Check if the data is already cached
      const cachedData = await getCache(cacheKey);
      if (cachedData) {
        console.log("Returning cached result");
        return cachedData as any[];
      }

      // Perform the query on the database
      const pool = await getConnection(db);
      const [rows, fields]: [any[], FieldPacket[]] = await pool.query(sql, params); // Destructure rows and fields

      // For INSERT/UPDATE/DELETE, rows is actually a ResultSetHeader or OkPacket
      if (rows && "insertId" in rows) {
        return { rows: [], metadata: rows as QueryResult }; // Return metadata and an empty array for rows
      }

      // Cache the result before returning only if results not empty
      if (rows.length > 0) {
        console.log("Caching result");
        await setCache(cacheKey, rows, ttl);
      }
      return rows as any[]; // Return rows for SELECT queries
    }

    // If caching is not enabled, execute the query and return results without caching
    try {
      const pool = await getConnection(db);
      const [rows, fields]: [any[], FieldPacket[]] = await pool.query(sql, params); // Destructure rows and fields

      // For INSERT/UPDATE/DELETE, rows is actually a ResultSetHeader or OkPacket
      if (rows && "insertId" in rows) {
        return { rows: [], metadata: rows as QueryResult }; // Return metadata and an empty array for rows
      }

      return rows as any[]; // Return rows for SELECT queries
    } catch (error) {
      console.log("Error executing query:", error);
    }

    return [] as any[]; // Return empty rows if only need to delete cache then on next fetch it will update data
  } else {
    return []; // Return empty array in debug mode
  }
};

/**
 * Build a query string with parameters
 * @param query
 * @param params
 * @returns
 */
const buildQueryWithParams = (query: string, params: any[]): string => {
  return query.replace(/\?/g, () => {
    const param = params.shift(); // Get the next parameter
    if (typeof param === "string") {
      // Escape single quotes in the parameter to avoid SQL injection
      return `'${param.replace(/'/g, "''")}'`;
    }
    return param; // For other types (numbers, etc.), just return as-is
  });
};

/**
 * Escape all parameters using the pool's escape method
 * @param pool Database connection pool
 * @param params Query parameters
 * @returns Escaped parameters
 */
const escapeParams = (pool: any, params: any[]): any[] => {
  return params.map((param) => {
    if (typeof param === "string") {
      return pool.escape(param).slice(1, -1); // Escape and remove surrounding quotes
    }
    return param; // Return as-is for non-string parameters
  });
};

/**
 *
 * @param res
 * @returns
 */
export const getInsertedId = (res: any): number | null => {
  if (res && !Array.isArray(res) && "metadata" in res) {
    const metadata = res.metadata as ResultSetHeader;
    if ("insertId" in metadata) {
      return metadata.insertId;
    }
  }
  return null;
};
