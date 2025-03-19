import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves the total count of CPD (Continuing Professional Development) records per year for a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {Record<string, any>} options - Additional options for filtering or configuring the CPD records retrieval.
 * @returns {Promise<any[] | null>} - A promise that resolves to the yearly CPD counts, or null if none are found.
 */
export async function getTotalCountsCpdsPerYearByEid(
  entityId: number,
  options: Record<string, any>
): Promise<any[] | null> {
  const params: any[] = [entityId];

  // Base SQL query
  let sqlQuery = `
      SELECT YEAR(cpds.completion_date) AS year,
    `;

  // SELECT clause options
  if (options.isVolunteer) {
    sqlQuery += `SUM(cpds.words_translated) AS words, `;
  } else {
    sqlQuery += `COUNT(cpds.cpd_id) AS entries, `;
  }

  sqlQuery += `SUM(cpds.total_hours) AS total_hours
      FROM proz.cpds
      WHERE cpds.entity_id = ?
    `;

  // WHERE clause options
  if (options.isVolunteer) {
    sqlQuery += `AND cpds.type_cpd = 4 `;
  } else if (options.publicationsAndPresentations) {
    sqlQuery += `AND cpds.type_cpd IN (5, 6, 8) `;
  } else if (options.mentorships) {
    sqlQuery += `AND cpds.type_cpd = 7 `;
  } else {
    sqlQuery += `AND cpds.type_cpd NOT IN (4, 5, 6, 7, 8) `;
  }

  if (!options.isAdmin && !options.isOwner) {
    sqlQuery += `AND cpds.visible = 1 `;
  }

  sqlQuery += `AND cpds.active_cpd = 1
      GROUP BY year
      ORDER BY year DESC
    `;

  // Execute the query

  const result = (await executeQuery(sqlQuery, "slave", params)) as any[];
  return result.length > 0 ? result : null;
}

/**
 * Retrieves CPD (Continuing Professional Development) records for a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {Record<string, any>} options - Additional options for filtering or configuring the CPD records retrieval.
 * @returns {Promise<any[] | null>} - A promise that resolves to the list of CPD records, or null if none are found.
 */
export async function getCpdsByEid(
  entityId: number,
  options: Record<string, any>
): Promise<any[] | null> {
  const params: any[] = [entityId];

  // Base SQL query with fields to select, including subqueries for specialties and language pairs
  let sqlQuery = `
      SELECT 
        cpd_id, entity_id, type_cpd, points, words_translated, provider, title, 
        link_course, start_date, completion_date, total_hours, mentorship_months, 
        language, certificate_link, file_path, visible, verified, active_cpd, 
        (SELECT GROUP_CONCAT(" ", specialty) 
         FROM proz.cpd_specialties 
         WHERE cpd_specialties.cpd_id = cpds.cpd_id) AS specialties, 
        (SELECT lang_pair 
         FROM proz.cpd_languages 
         WHERE cpd_languages.cpd_id = cpds.cpd_id) AS lang_pair 
      FROM proz.cpds 
      WHERE 1 AND cpds.entity_id = ?
    `;

  // Apply filters based on options
  if (options.year) {
    // Filter by the specified year
    sqlQuery += `AND YEAR(cpds.completion_date) = ? `;
    params.push(options.year);
  }

  if (options.isVolunteer) {
    // Filter by CPD type 4 (volunteer)
    sqlQuery += `AND cpds.type_cpd = 4 `;
  } else if (options.publicationsAndPresentations) {
    // Filter by CPD types 5, 6, and 8 (publications and presentations)
    sqlQuery += `AND cpds.type_cpd IN (5, 6, 8) `;
  } else if (options.mentorships) {
    // Filter by CPD type 7 (mentorships)
    sqlQuery += `AND cpds.type_cpd = 7 `;
  } else {
    // Exclude specific CPD types not relevant to other filters
    sqlQuery += `AND cpds.type_cpd NOT IN (4, 5, 6, 7, 8) `;
  }

  if (!options.isAdmin && !options.isOwner) {
    // Filter for visible CPDs if the user is not an admin or the owner
    sqlQuery += `AND cpds.visible = 1 `;
  }

  // Include only active CPDs
  sqlQuery += `AND cpds.active_cpd = 1 `;

  // Sort results by completion date in descending order
  sqlQuery += `ORDER BY cpds.completion_date DESC`;

  // Execute the query

  const result = (await executeQuery(sqlQuery, "slave", params)) as any[];
  return result ?? null;
}
