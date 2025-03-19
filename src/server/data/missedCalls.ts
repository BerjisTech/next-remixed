import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves all missed calls from the database.
 *
 * @returns {Promise<any>} A promise that resolves to the result of the query, which contains the language and total_calls fields.
 */
export const getAllMissedCalls = async (): Promise<any> => {
  const sql_query = `SELECT language, total_calls FROM proz.interpreters_network_missed_calls`;
  const result = await executeQuery(sql_query, "master");
  return result;
};

/**
 * Updates the missed calls in the database.
 *
 * This function deletes all previous records in the `proz.interpreters_network_missed_calls` table and inserts new records provided in the `data` parameter.
 *
 * @param {any} data - The data containing the items to be inserted. Each item should have `language` and `total_calls` properties.
 * @returns {Promise<any>} A promise that resolves to an object with a success message or an error message if an error occurs.
 */
export const updateMissedCalls = async (data: any): Promise<any> => {
  try {
    // Delete all previous records
    const delete_query = `DELETE FROM proz.interpreters_network_missed_calls`;
    await executeQuery(delete_query, "master");

    // Insert new records
    const insert_query = `INSERT INTO proz.interpreters_network_missed_calls (language, total_calls) VALUES (?, ?)`;
    for (const item of data.items) {
      await executeQuery(insert_query, "master", [item.language, item.total_calls]);
    }

    // Return a success message
    return { message: "Missed calls updated successfully" };
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while updating missed calls", error };
  }
};
