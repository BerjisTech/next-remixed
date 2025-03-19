import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Check if an entity has been verified for a specific language.
 * @param {number} entityId - The ID of the entity.
 * @param {string} languageCode - The code of the language to check.
 * @returns {Promise<boolean>} - Returns true if verified, otherwise false.
 */
export const getHasBeenNlvVerified = async (
  entityId: number,
  languageCode: string
): Promise<boolean> => {
  // Prepare SQL query with placeholders for parameters
  const sqlQuery = `
            SELECT is_verified 
            FROM proz.nlv_verifications 
            WHERE entity_id = ? 
            AND language_code = ? 
            AND is_verified = "y"
        `;

  // Execute the query with parameters
  const result: any = await executeQuery(sqlQuery, "slave", [entityId, languageCode]);

  return !!result; // Return true if result exists, false otherwise
};

/**
 * Get the submission status for a specific entity and language.
 * @param {number} entityId - The ID of the entity.
 * @param {string} languageCode - The code of the language to check.
 * @returns {Promise<string | null>} - Returns the submission status or null if not found.
 */
export const getNlvSubmissionStatus = async (
  entityId: number,
  languageCode: string
): Promise<string | null> => {
  // Prepare SQL query with placeholders for parameters
  const sqlQuery = `
            SELECT status 
            FROM proz.nlv_submissions 
            WHERE entity_id = ? 
            AND language_code = ? 
            ORDER BY nlv_submission_id DESC
        `;

  // Execute the query with parameters
  const result: any = await executeQuery(sqlQuery, "slave", [entityId, languageCode]);

  return result || null; // Return the result or null if not found
};

/**
 * Get all declared native languages of a user.
 * @param {number} entityId - The ID of the entity.
 * @param {object} options - Options for the function.
 * @returns {Promise<string[] | null>} - Returns an array of native language codes or null on error.
 */
export const entityGetNativeLangCodes = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<string[]> => {
  const sqlQuery = `
            SELECT user_credentials.language_code 
            FROM credentials.user_credentials 
            WHERE entity_id = ? 
            AND (time_remove > NOW() OR time_remove = "0000-00-00 00:00:00") 
            AND display = "y" 
            GROUP BY user_credentials.language_code
        `;

  const results: { language_code: string }[] = (await executeQuery(sqlQuery, "slave", [
    entityId,
  ])) as any[];
  return results.length > 0 ? results.map((row) => row.language_code) : [];
};
