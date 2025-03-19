// src/server/data/navigation.ts
import { NavItem } from "@/interfaces/navigation/menu-items";
import { executeQuery } from "../database/mysql/queryHelper";
import { convertToUTF8, isValidUTF8 } from "./common";

/**
 * Retrieves the navigation links for the application.
 * @async
 * @param {boolean} purgeCache - If true then it only remove cache against select query key and returns []
 * @returns {Promise<NavItem[]>} - A promise that resolves to an array of navigation items.
 */
export const getNavLinks = async (purgeCache: boolean = false): Promise<NavItem[]> => {
  const sql = "SELECT * FROM `proz`.`nav_items` ORDER BY `priority` ASC, `nav_item_id` ASC";
  const results = (await executeQuery(sql, "slave", [], { useCache: true, purgeCache })) as any[];
  const navLinks = results.map((row) => {
    for (const key in row) {
      if (typeof row[key] === "string" && !isValidUTF8(row[key])) {
        row[key] = convertToUTF8(row[key]);
      }
    }
    return row;
  });
  return navLinks.length > 0 ? navLinks : [];
};

/**
 * Creates a new navigation link.
 * @async
 * @param {any} navItem - The data for the new navigation item.
 * @returns {Promise<{ success: boolean; message: string }>} - A promise that resolves to an object indicating success and a message.
 */
export const createNewNavLink = async (
  navItem: any
): Promise<{ success: boolean; message: string }> => {
  const {
    name,
    parent_ids,
    tailwind,
    icon,
    link,
    target,
    location,
    access_type,
    level,
    priority,
    status,
    tags,
  } = navItem;
  // Ensure access_type matches allowed values
  const allowedAccessTypes = ["nliv", "liv_free", "liv_paid", "admin"];
  const validAccessType = allowedAccessTypes.includes(access_type) ? access_type : "nliv";

  const sql = `
        INSERT INTO proz.nav_items (name, parent_ids, tailwind, icon, link, target, location, access_type, level, priority, status, tags)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  const values = [
    name,
    parent_ids,
    tailwind,
    icon,
    link,
    target,
    location,
    validAccessType,
    level || 0,
    priority || 0,
    status || "active",
    tags,
  ];

  const result = await executeQuery(sql, "master", values);
  return result
    ? { success: true, message: "New nav link created" }
    : { success: false, message: "New nav link not created" };
};

/**
 * Updates an existing navigation link.
 * @async
 * @param {NavItem} navItem - The updated data for the navigation item.
 * @returns {Promise<{ success: boolean; message: string }>} - A promise that resolves to an object indicating success and a message.
 */
export const updateNavLink = async (
  navItem: NavItem
): Promise<{ success: boolean; message: string }> => {
  const {
    nav_item_id,
    name,
    parent_ids,
    tailwind,
    icon,
    link,
    target,
    location,
    access_type,
    level,
    priority,
    status,
    tags,
  } = navItem;
  // Ensure access_type matches allowed values
  const allowedAccessTypes = ["nliv", "liv_free", "liv_paid", "admin"];
  const validAccessType = allowedAccessTypes.includes(access_type) ? access_type : "nliv";

  const sql = `
        UPDATE proz.nav_items
        SET name = ?, parent_ids = ?, tailwind = ?, icon = ?, link = ?, target = ?, location = ?, access_type = ?, level = ?, priority = ?, status = ?, tags = ?
        WHERE nav_item_id = ?
    `;
  const values = [
    name,
    parent_ids,
    tailwind,
    icon,
    link,
    target,
    location,
    validAccessType,
    level || 0,
    priority || 0,
    status || "active",
    tags,
    nav_item_id,
  ];

  const result = await executeQuery(sql, "master", values);
  return result
    ? { success: true, message: "Nav link updated" }
    : { success: false, message: "Nav link not updated" };
};

/**
 * Deletes an existing navigation link by its ID.
 * @async
 * @param {number} navItemId - The unique identifier of the navigation item to be deleted.
 * @returns {Promise<{ success: boolean; message: string }>} - A promise that resolves to an object indicating success and a message.
 */
export const deleteNavLink = async (
  navItemId: number
): Promise<{ success: boolean; message: string }> => {
  const sql = `
        DELETE FROM proz.nav_items
        WHERE nav_item_id = ? OR FIND_IN_SET(?, parent_ids) > 0
    `;
  const values = [navItemId, navItemId];

  const result = await executeQuery(sql, "master", values);
  return result
    ? { success: true, message: "Nav link deleted" }
    : { success: false, message: "Nav link not deleted" };
};
