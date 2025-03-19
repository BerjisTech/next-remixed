import { mdl_course, mdl_course_categories } from "@/interfaces/learning";
import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a list of courses with a specified limit.
 * @async
 * @param {number} [limit=4] - The maximum number of courses to retrieve (default is 4).
 * @returns {Promise<mdl_course[] | []>} - A promise that resolves to an array of courses or an empty array if no courses are found.
 */
export const courses = async (limit: number = 4): Promise<mdl_course[] | []> => {
  const sql = `
    SELECT c.*, cat.name as category_name
    FROM moodle.mdl_course c
    LEFT JOIN moodle.mdl_course_categories cat ON c.category = cat.id
    ORDER BY c.timemodified DESC
    LIMIT ${limit};
  `;

  const result = (await executeQuery(sql, "slave")) as any[];

  if (result && result.length > 0) {
    return result;
  }
  return [];
};

/**
 * Retrieves a course by its ID.
 * @async
 * @param {number} courseId - The ID of the course to retrieve.
 * @returns {Promise<mdl_course | null>} - A promise that resolves to the course object if found, or null if no course is found.
 */
export const getCourseById = async (courseId: number): Promise<mdl_course | null> => {
  const sql = `
    SELECT c.*, cat.name as category_name
    FROM moodle.mdl_course c
    LEFT JOIN moodle.mdl_course_categories cat ON c.category = cat.id
    WHERE c.id = ?
  `;

  const result = (await executeQuery(sql, "slave", [courseId])) as any[];

  if (result && result.length > 0) {
    return result[0];
  }
  return null;
};

/**
 * Retrieves a list of courses by category.
 * @async
 * @param {number} categoryId - The ID of the category to retrieve courses for.
 * @param {number} [limit=10] - The maximum number of courses to retrieve (default is 10).
 * @returns {Promise<mdl_course[] | []>} - A promise that resolves to an array of courses or an empty array if no courses are found.
 */
export const getCoursesByCategory = async (
  categoryId: number,
  limit: number = 10
): Promise<mdl_course[] | []> => {
  const sql = `
    SELECT c.*, cat.name as category_name
    FROM moodle.mdl_course c
    LEFT JOIN moodle.mdl_course_categories cat ON c.category = cat.id
    WHERE c.category = ?
    ORDER BY c.timemodified DESC
    LIMIT ${limit};
  `;

  const result = (await executeQuery(sql, "slave", [categoryId])) as any[];

  if (result && result.length > 0) {
    return result;
  }
  return [];
};

/**
 * Retrieves a list of course categories.
 * @async
 * @returns {Promise<mdl_course_categories[]>} - A promise that resolves to an array of course categories.
 */
export const getCategories = async (): Promise<mdl_course_categories[]> => {
  const sql = `
    SELECT * FROM moodle.mdl_course_categories;
  `;

  const result = (await executeQuery(sql, "slave")) as any[];

  if (result && result.length > 0) {
    return result;
  }
  return [];
};

/**
 * Retrieves the count of courses grouped by categories.
 * @async
 * @returns {Promise<{ [key: number]: number }>} - A promise that resolves to an object with category IDs as keys and course counts as values.
 */
export const getCourseCountByCategories = async (): Promise<{ [key: number]: number }> => {
  const sql = `
    SELECT category, COUNT(*) as count FROM moodle.mdl_course GROUP BY category;
  `;

  const result = (await executeQuery(sql, "slave")) as any[];

  if (result && result.length > 0) {
    return result.reduce((acc, curr) => {
      acc[curr.category] = curr.count;
      return acc;
    }, {});
  }
  return {};
};
