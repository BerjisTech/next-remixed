import { TestimonialMembership, WebsiteFeedBack } from "@/interfaces/testimonial";
import { executeQuery } from "../database/mysql/queryHelper";
import { convertBufferToStr } from "./common";

/**
 * Retrieves testimonials based on the specified area and limit.
 * @async
 * @param {string} area - The area or category of testimonials to retrieve.
 * @param {number} limit - The maximum number of testimonials to retrieve.
 * @returns {Promise<TestimonialMembership[] | null>} - A promise that resolves to an array of testimonials or null if no data is found.
 */
export async function getTestimonials(
  area: string,
  limit: number
): Promise<TestimonialMembership[] | null> {
  const sqlQuery = `
        SELECT 
            t.*,
            CONCAT(e.contact_first, ' ', 
                   COALESCE(e.contact_middle, ''), ' ', 
                   e.contact_last) AS name
        FROM proz.testimonials t
        LEFT JOIN proz.entities e ON t.entity_id = e.entity_id
        WHERE t.visibility = "y"
        ${area === "membership" ? 'AND t.show_in_membership_page = "y"' : ""}
        LIMIT ?
    `;

  // Execute the query using the executeQuery function
  const results = (await executeQuery(sqlQuery, "slave", [limit || 20], {
    useCache: true,
  })) as any[];

  for (const result of results) {
    if (Buffer.isBuffer(result.testimonial)) {
      // Convert Buffer to a readable UTF-8 string
      result.message = convertBufferToStr(result.testimonial);
      delete result.testimonial;
    }
  }
  return results.length > 0 ? results : null;
}

/**
 *
 * @param entityId
 * @param data
 * @returns
 */
export async function addWebsiteFeedback(
  entityId: number,
  data: WebsiteFeedBack
): Promise<boolean> {
  const sqlQuery = `
        INSERT INTO proz.website_feedback 
           (entity_id, suggestion, url, rating, time_created)  
        VALUES (?, ?, ?, ?, NOW())`;

  // Execute the query using the executeQuery function
  const result = await executeQuery(sqlQuery, "master", [
    entityId,
    data.suggestion,
    data.url,
    data.rating,
  ]);
  return result ? true : false;
}
