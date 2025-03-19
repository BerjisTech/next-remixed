import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Get all user calender events
 * @param {number} entityId - The ID of the entity.
 * @param {number} month - Month number.
 * @param {object} options - Options for the function.
 * @returns {Promise<object[] | null>} - Returns an array of WWA entries or null on error.
 */
export const getUserCalendarEvents = async (
  entityId: number,
  month: number,
  options: Record<string, any> = {}
): Promise<object[] | null> => {
  const sqlQuery = `
        SELECT * 
        FROM proz.entity_calendar 
        WHERE entity_id = ? 
        AND MONTH(date) = ? 
        AND date >= CURDATE()
        ORDER BY date ASC;
    `;
  const results = (await executeQuery(sqlQuery, "slave", [entityId, month + 1])) as any[];
  return results.length > 0 ? results : [];
};
