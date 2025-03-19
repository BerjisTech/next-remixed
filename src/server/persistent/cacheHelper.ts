import { convertBufferToStr } from "../data/common";
import { getMemcachedClient } from "./memchached";

const client = getMemcachedClient();

/**
 * Retrieves data from the cache.
 * @async
 * @param {string} key - The key to look up in the cache.
 * @returns {Promise<any | null>} - A promise that resolves to the cached data, or null if no data is found or the cache is unavailable.
 */
export const getCache = async (key: string): Promise<any | null> => {
  if (!client) return null;
  const cachedData = await client.get(key);
  return cachedData.value ? JSON.parse(convertBufferToStr(cachedData.value) ?? "") : null;
};

/**
 * Stores data in the cache with a specified time-to-live (TTL).
 * @async
 * @param {string} key - The key under which the data will be stored.
 * @param {any} data - The data to store in the cache.
 * @param {number} ttl - The time-to-live for the cached data in seconds.
 * @returns {Promise<void>} - A promise that resolves when the data is successfully stored in the cache.
 */
export const setCache = async (key: string, data: any, ttl?: number): Promise<void> => {
  if (!client) return;
  await client.set(key, JSON.stringify(data), { expires: ttl ?? 60 * 60 * 12 });
};

/**
 * Deletes a specific key from the cache.
 * @async
 * @param {string} key - The key to delete from the cache.
 * @returns {Promise<void>} - A promise that resolves when the key is successfully deleted.
 */
export const deleteCache = async (key: string): Promise<void> => {
  if (!client) return;
  await client.delete(key);
};
