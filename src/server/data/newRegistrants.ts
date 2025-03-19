import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Fetch paginated registrants and total count.
 * @param {string} start_date - Start date for filtering.
 * @param {string} end_date - End date for filtering.
 * @param {number} page - Current page (default: 1).
 * @param {number} limit - Number of records per page (default: 15).
 * @returns {Promise<{ registrants: object[], totalRegistrants: number }>}.
 */
export const getAllNewRegistrants = async (
  start_date: string,
  end_date: string,
  page: number = 1,
  limit: number = 15
) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // default date logic

    let registrantsQuery = `
            SELECT
                e.entity_id,
                MIN(e.registered_date) AS registered_date,
                e.contact_first,
                e.contact_last,
                er.resource_image_url AS picture,
                er.my_tagline AS tagline
            FROM proz.entities e
            INNER JOIN proz.entity_resources er ON e.entity_id = er.entity_id
            WHERE 1=1
        `;

    // Handle end_date condition
    registrantsQuery += `
        AND (e.end_date = '0000-00-00 00:00:00' OR e.end_date >= ?)
    `;

    // Dynamic date conditions using start_date and end_date or default to today’s date
    if (start_date && end_date) {
      registrantsQuery += `
            AND DATE(e.registered_date) BETWEEN ? AND ?
        `;
    } else {
      const today = new Date().toISOString().split("T")[0];
      registrantsQuery += `
            AND DATE(e.registered_date) = '${today}'
        `;
    }

    // Finalize query (constructing LIMIT and OFFSET directly)
    const offsetValue = (page - 1) * limit;
    registrantsQuery += `
            GROUP BY e.entity_id 
            ORDER BY registered_date DESC 
            LIMIT ${limit} OFFSET ${offsetValue}
        `;

    // Execute the query (no LIMIT/OFFSET in parameters)
    const registrants = await executeQuery(
      registrantsQuery,
      "slave",
      start_date && end_date ? [end_date, start_date, end_date] : [today]
    );

    // Total count query
    let countQuery = `
            SELECT COUNT(DISTINCT e.entity_id) AS totalRegistrants
            FROM proz.entities e
        `;

    // Dynamic date conditions to include both cases
    if (start_date && end_date) {
      countQuery += ` WHERE DATE(e.registered_date) >= ? AND DATE(e.registered_date) <= ? `;
    } else {
      countQuery += ` WHERE DATE(e.registered_date) = CURDATE() `;
    }

    // Handle end dates in the count query
    countQuery += ` AND (e.end_date = '0000-00-00 00:00:00' OR e.end_date >= CURDATE()) `;

    // Execute the query
    const countResult: any = await executeQuery(
      countQuery,
      "slave",
      start_date && end_date ? [start_date, end_date] : []
    );

    const totalRegistrants = countResult.length > 0 ? countResult[0].totalRegistrants : 0;

    return { registrants, totalRegistrants };
  } catch (error) {
    console.error("Database query error:", error);
    return { registrants: [], totalRegistrants: 0 };
  }
};

/**
 * Fetch the count of profiles that have completed all required/encouraged fields.
 * @param {string} start_date - Start date for filtering.
 * @param {string} end_date - End date for filtering.
 * @returns {Promise<number>} - The count of completed profiles.
 */
export const getCompletedProfilesCount = async (
  start_date: string,
  end_date: string
): Promise<number> => {
  try {
    let completenessQuery = `
            SELECT COUNT(DISTINCT pc.entity_id) AS completedProfiles
            FROM proz.profile_completeness pc
                     INNER JOIN proz.entities e ON pc.entity_id = e.entity_id
            WHERE (
                      (pc.all_req_pro_fields = 'y' AND pc.all_enc_pro_fields = 'y')
                          OR (pc.all_req_corp_fields = 'y' AND pc.all_enc_corp_fields = 'y')
                      )
        `;

    // Apply dynamic date conditions
    if (start_date && end_date) {
      completenessQuery += ` AND DATE(e.registered_date) BETWEEN ? AND ? `;
    } else {
      completenessQuery += ` AND DATE(e.registered_date) = CURDATE() `;
    }

    const result: any = await executeQuery(
      completenessQuery,
      "slave",
      start_date && end_date ? [start_date, end_date] : []
    );

    return result.length > 0 ? result[0].completedProfiles : 0;
  } catch (error) {
    console.error("Error fetching completed profiles:", error);
    return 0;
  }
};
