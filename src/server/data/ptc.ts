import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Get all WWA (Willingness to Work Again) entries for a given entity.
 * @param {number} entityId - The ID of the entity.
 * @param {object} options - Options for the function.
 * @returns {Promise<object[] | null>} - Returns an array of WWA entries or null on error.
 */
export const entityGetWwaEntries = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<object[] | null> => {
  const sqlQuery = `
            SELECT * 
            FROM proz.entity_feedback 
            WHERE feedbackee_id = ? 
            AND visible = 'y' 
            AND vet = 'ok'
        `;

  const results = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];
  return results.length > 0 ? results : null;
};
