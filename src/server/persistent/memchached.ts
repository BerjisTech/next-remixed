import memjs from "memjs";

// Determine the environment (development or production)
const isLocal = process.env.NEXT_NODE_ENV === "development";

// Configuration based on environment variables
const memcachedConfig = isLocal
  ? process.env.MEMCACHED_CONFIG_LOCAL
  : process.env.MEMCACHED_CONFIG_TWTELECOM;

let client: memjs.Client | null = null;

console.log(memcachedConfig);
// Initialize Memcached client only once
export const getMemcachedClient = () => {
  if (!memcachedConfig) {
    return null;
  }
  if (!client) {
    try {
      // Create a Memcached client using the configuration
      client = memjs.Client.create(memcachedConfig, {
        retries: 3,
        timeout: 1000,
        failover: true,
      });
    } catch (error) {
      console.error("Memcached connection failed:", error);
      return null;
    }
  }
  return client;
};
