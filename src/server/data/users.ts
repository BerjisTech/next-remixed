import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a paginated list of users based on the provided filters.
 * @async
 * @param {any} filters - The filters to apply when retrieving users.
 * @param {number} [page=1] - The page number for pagination.
 * @param {number} [pageSize=10] - The number of users to retrieve per page.
 * @returns {Promise<object | null>} - A promise that resolves to an object containing the list of users and pagination details, or null if no users are found.
 */
export const getAllUsers = async (
  filters: any,
  page: number = 1,
  pageSize: number = 10
): Promise<object | null> => {
  try {
    // Return null if filters are empty
    if (!filters || Object.keys(filters).length === 0) {
      return null;
    }

    // Prepare the base query
    let query = `
            SELECT 
                entities.entity_id, 
                contact_first, 
                contact_last, 
                contact_country, 
                contact_country_code, 
                contact_address, 
                contact_phone, 
                contact_email, 
                entity_resources.square_resource_image_url AS image_url_option_two, 
                entity_resources.resource_image_url AS image_url, 
                entity_resources.showname, 
                entity_resources.profile_title AS tagline_option_two, 
                entity_resources.my_tagline AS tagline,
                entity_kudoz_total_pro.points AS kudoz_points  
            FROM 
                proz.entities
            INNER JOIN 
                proz.entity_services ON entities.entity_id = entity_services.entity_id  
            INNER JOIN 
                proz.entity_languages ON entities.entity_id = entity_languages.entity_id
            INNER JOIN 
                proz.entity_resources ON entities.entity_id = entity_resources.entity_id
            INNER JOIN 
                proz.entity_kudoz_total_pro ON entities.entity_id = entity_kudoz_total_pro.entity_id
            INNER JOIN
                proz.entity_last_logins ON entities.entity_id = entity_last_logins.entity_id
            WHERE 
                time_last_login >= DATE_SUB( CURDATE( ) , INTERVAL 1 YEAR )
                AND entities.removed_by = 0  
        `;

    // Initialize an array to hold query parameters
    const queryParams: any[] = [];

    // Add conditions based on filters
    if (filters.services) {
      query += ` AND entity_services.service_id IN (?) `;
      queryParams.push(filters.services); // Add the services to parameters
    } else if (filters.service_id) {
      query += ` AND entity_services.service_id = ? `;
      queryParams.push(filters.service_id); // Add the service_id to parameters
    }

    if (filters.lang_pairs) {
      query += ` AND entity_languages.language_pair IN (?) AND entity_languages.show_in_profile = 'yes' `;
      queryParams.push(filters.lang_pairs); // Add the lang_pairs to parameters
    }

    query += " GROUP BY entities.entity_id ";
    query +=
      ' HAVING ((image_url is not null and image_url != "") OR (image_url_option_two is not null and image_url_option_two != "")) and (tagline != "" OR tagline_option_two != "") ';
    query += " ORDER BY entity_kudoz_total_pro.points DESC ";

    // Calculate the offset for pagination
    const offset = (page - 1) * pageSize;
    query += ` LIMIT ? OFFSET ? `;
    queryParams.push(pageSize, offset);

    // Execute the query using the executeQuery function
    const results: object[] = (await executeQuery(query, "slave", queryParams)) as any[];

    // If there are results, return the first result; otherwise, null
    return results.length > 0 ? results : null;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while fetching users", error };
  }
};
