import { executeQuery } from "../database/mysql/queryHelper";

export const getAllTrainers = async (start: number, limit: number): Promise<any> => {
  try {
    const sql_query = `
            SELECT DISTINCT
                trainers.trainer_id,
                trainers.entity_id,
                trainers.is_active,
                trainers.vetted,
                trainers.ranking_visibility,
                entities.contact_first,
                entities.contact_middle,
                entities.contact_last,
                entities.contact_country,
                entities.contact_city,
                MAX(entity_resources.square_resource_image_url) AS square_resource_image_url
            FROM trainings.trainers
                     LEFT JOIN proz.entities ON trainers.entity_id = entities.entity_id
                     LEFT JOIN proz.entity_resources ON trainers.entity_id = entity_resources.entity_id
            WHERE trainers.removed = 'n'
            GROUP BY trainers.trainer_id, trainers.entity_id, trainers.is_active, trainers.vetted,
                     trainers.ranking_visibility, entities.contact_first, entities.contact_middle,
                     entities.contact_last, entities.contact_country, entities.contact_city
            ORDER BY trainers.trainer_id DESC
                LIMIT ? OFFSET ?;
        `;

    // Ensure valid values for start & limit
    if (start < 0) start = 0;
    if (limit <= 0) limit = 20;

    // Execute the query
    const result = await executeQuery(sql_query, "master", [limit, start]);
    return result;
  } catch (error) {
    console.error("Error fetching trainers:", error);
    return { message: "An error occurred while fetching trainers", error };
  }
};
