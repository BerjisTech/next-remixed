import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "dompurify";

/**
 *
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if a specific tag exists within a string of tags.
 *
 * @param {string} tag - The tag to check for.
 * @param {string} tags - A string containing multiple tags.
 * @returns {boolean} - Returns `true` if the tag exists in the tags string, otherwise `false`.
 */
export const hasTag = (tag: string, tags: string): boolean => {
  // Ensure both parameters are strings
  if (typeof tag !== "string" || typeof tags !== "string") {
    return false;
  }
  // Check if the tag is included in the tags string
  return tags.includes(tag);
};

/**
 * Helper to capitalize the first letter of a string.
 * @param {string} str - String to capitalize.
 * @returns {string}
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Helper to get api url and
 * @param path
 * @param useProzApi
 * @param params
 * @returns string
 */
export const getApiBaseUrl = (
  path: string,
  useProzApi: boolean = false,
  params?: { [key: string]: string | number | boolean | undefined }
): string => {
  let urlParams = "";
  if (params && Object.keys(params).length > 0) {
    const validParams = Object.keys(params)
      .filter((item) => params[item] !== null && params[item] !== undefined) // Filter out null/undefined
      .map((item) => `${item}=${params[item]}`); // Map to "key=value" format

    urlParams = validParams.join("&"); // Join with '&'
  }

  let apiUrl = "";
  if (process.env.NEXT_PUBLIC_API_BASE_URL && !useProzApi) {
    apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`;
    apiUrl = urlParams ? `${apiUrl}?${urlParams}` : apiUrl;
  } else {
    let protocol = "https:";
    let host = "api.proz.com";
    let apiVersion = "v2";
    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
      protocol = "https:";
      host = "localhost:8443/zf/api.php";
    }
    apiUrl = `${protocol}//${host}/${apiVersion}/${path}`;
  }
  return apiUrl;
};

export const getRedirectBaseUrl = (): string => {
  let host = "proz.com";
  let protocol = "https";

  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    protocol = "https"; // Corrected protocol format
    host = "localhost:8443";
  }

  // Ensure proper formatting of the base URL
  return `${protocol}://${host}`;
};

/**
 *
 * @param str
 * @returns
 */
export const getFormattedBioHtml = (str: string): string => {
  str = DOMPurify.sanitize(str.replace(/\n/g, "<br />"), {
    ALLOWED_TAGS: ["a", "br"],
    ALLOWED_ATTR: ["href", "rel", "target"],
  });
  console.log(str);
  return str;
};

/**
 * Takes date in format "2005-01-31T00:00:00.000Z" converts to format "Dec 31, 2003"
 * @param dateStr
 * @returns
 */
export const getFormattedDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formattedDate;
};

/**
 *
 * @param serialized
 * @returns
 */
export const parseSerializedPhp = (serialized: string): Record<string, string> | null => {
  if (!serialized) {
    return null;
  }
  const regex = /s:\d+:"(.*?)";s:\d+:"(.*?)";?/g;
  const matches = [...serialized.matchAll(regex)];

  return matches.reduce<Record<string, string>>((result, match) => {
    const [_, key, value] = match; // Extract key and value
    result[key] = value;
    return result;
  }, {});
};

/**
 * Creates a debounced version of a function, delaying its execution until after
 * a specified delay has elapsed since the last time the function was invoked.
 *
 * @template T - The type of the callback function.
 * @param {T} callback - The function to debounce.
 * @param {number} delay - The delay in milliseconds to wait before executing the callback.
 * @returns {(...args: Parameters<T>) => void} - A debounced version of the callback function.
 *
 * @example
 * const debouncedFunction = debounce((message: string) => {
 *   console.log(message);
 * }, 500);
 *
 */
export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => callback(...args), delay);
  };
};

/**
 *
 * @param name
 * @returns
 */
export const getInitials = (name: string): string => {
  if (!name) return "";
  const names = name.split(" ");
  const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
  return initials;
};
