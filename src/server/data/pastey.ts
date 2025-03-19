import { executeQuery } from "@/server/database/mysql/queryHelper";

/**
 * Retrieves reviews for the given software based on its ID.
 * @async
 * @param {number} softwareId - The unique identifier of the software.
 * @returns {Promise<any>} - A promise that resolves to the reviews data.
 */
export async function getPasteyReviews(softwareId: number): Promise<any> {
  const sqlQuery = `
        SELECT ssr.software_review_id as id,
               ssr.title,
               ssr.review             as message,
               ssr.entity_id,
               es.sitename_standard   as name
        FROM soft_comp.software_reviews as ssr
                 JOIN entities.sitenames as es ON es.entity_id = ssr.entity_id
        WHERE ssr.software_id = ?
        ORDER BY ssr.software_review_id ASC LIMIT 0 , 3
    `;

  let reviews = (await executeQuery(sqlQuery, "slave", [softwareId])) as any[];
  const updatedReviews = reviews.map((review) => ({
    ...review,
    language: "English",
    type: "pastey",
    // avatar: entityGetPhoto(review.entity_id, 'square')
  }));

  return updatedReviews;
}
