import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a list of outsourcers based on the provided search criteria and pagination.
 * @async
 * @param {Object} params - The parameters for the search query.
 * @param {string} [params.search=''] - The search term to filter outsourcers.
 * @param {string} [params.membershipType=''] - The membership type to filter outsourcers.
 * @param {string} [params.sortBy='rating'] - The field by which to sort the results.
 * @param {number} [params.page=1] - The page number for pagination.
 * @param {number} [params.limit=10] - The number of results per page.
 * @returns {Promise<any>} - A promise that resolves to the list of outsourcers.
 */
export async function getOutsourcers({
  search = "",
  membershipType = "",
  sortBy = "rating",
  page = 1,
  limit = 10,
}) {
  const offset = (page - 1) * limit;

  // Build the WHERE clause conditionally
  const whereConditions = ["a.suspend_status != ?"];
  const params = ["suspended"];

  if (search) {
    whereConditions.push("LOWER(a.name) LIKE LOWER(?)");
    params.push(`%${search}%`);
  }

  if (membershipType) {
    whereConditions.push("a.cached_membership_type = ?");
    params.push(membershipType);
  }

  const whereClause = whereConditions.join(" AND ");

  // Build the ORDER BY clause
  const orderClause =
    sortBy === "rating"
      ? "a.cached_avg_lwa_five_year DESC"
      : sortBy === "entries"
        ? "a.cached_total_entries DESC"
        : "a.name ASC";

  const query = `
    SELECT 
      a.agency_id,
      a.name,
      a.country,
      a.city_text,
      a.cached_avg_lwa_five_year,
      a.cached_total_entries,
      a.cached_membership_type,
      a.email_address,
      a.phone,
      a.uri,
      a.cached_latest_entry_date,
      a.suspend_status
    FROM proz.agencies a
    WHERE ${whereClause}
    ORDER BY ${orderClause}
    LIMIT ? OFFSET ?
  `;

  const countQuery = `
    SELECT COUNT(*) as total
    FROM proz.agencies a
    WHERE ${whereClause}
  `;

  const results = (await executeQuery(query, "slave", [...params, limit, offset])) as any[];
  const countResults = (await executeQuery(countQuery, "slave", params)) as any[];

  const total = countResults[0].total;

  return {
    outsourcers: results,
    total: Number(total),
    pages: Math.ceil(Number(total) / limit),
  };
}
