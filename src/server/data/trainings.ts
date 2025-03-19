import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves the list of training sessions attended by a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<any[] | null>} - A promise that resolves to an array of training sessions or null if no data is found.
 */
export const getEntityTrainings = async (entityId: number): Promise<any[] | null> => {
  const sql = `
        SELECT 
            training_id, 
            training_name, 
            training_entities_id, 
            certificate
        FROM trainings.training_entities
        JOIN trainings.trainings USING(training_id)
        WHERE attended_session = ?
          AND paid = ?
          AND entity_id = ?
    `;

  const params = ["y", "yes", entityId]; // Parameterized values
  const res = (await executeQuery(sql, "slave", params)) as any[];
  return res.length > 0 ? res : null;
};
