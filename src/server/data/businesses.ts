import { executeQuery } from "../database/mysql/queryHelper";
import { BusinessFilters, BusinessProfile } from "@/interfaces/business";

/**
 * Retrieves a list of businesses based on the provided filters, page, and page size.
 * @async
 * @param {BusinessFilters} [filters={}] - Optional filters to apply when fetching businesses.
 * @param {number} [page=1] - The page number for pagination.
 * @param {number} [pageSize=10] - The number of businesses to fetch per page.
 * @returns {Promise<{ data: BusinessProfile[], total: number } | null>} - A promise that resolves to an object containing the list of businesses and total count, or null if no businesses are found.
 */
export const getBusinesses = async (
  filters: BusinessFilters = {},
  page: number = 1,
  pageSize: number = 10
): Promise<{ data: BusinessProfile[]; total: number } | null> => {
  // Validate pagination inputs
  page = Math.max(page, 1);
  pageSize = Math.max(pageSize, 1);

  // Prepare filters
  const { queryConditions, params } = prepareFilters(filters);

  // Get total count
  const countQuery = `
        SELECT COUNT(*) AS total
        FROM business.businesses b
        INNER JOIN business.business_data bd ON b.business_id = bd.business_id
        ${queryConditions}
    `;
  const countResult = (await executeQuery(countQuery, "slave", params)) as any[];
  const total = countResult[0]?.total || 0;

  if (total === 0) return { data: [], total }; // Early return if no records found

  // Main query for data
  const offset = (page - 1) * pageSize;
  const dataQuery = `
        SELECT 
            b.business_id, b.account_manager_eid, b.time_account_manager_assigned, 
            b.time_created, b.entered_by_eid, b.main_profile_eid, b.current_membership_package, 
            b.time_membership_expires, b.expired_membership_package, b.time_membership_expired, 
            b.hubspot_company_id, b.cached_avg_lwa_five_year, b.cached_total_entries_five_year, 
            b.completeness_score, b.cached_total_jobs_posted_6_month,
            bd.business_data_id, bd.business_id AS bd_business_id, bd.common_name, bd.legal_name, 
            bd.is_cpn, bd.slogan, bd.country_code, bd.city, bd.address, bd.website_url, bd.logo_url, 
            bd.logo_original_url, bd.logo_cloudinary_id, bd.is_end_client, bd.contact_phone, 
            bd.contact_email, bd.year_established, bd.size_employees, bd.capacity_words_per_day, 
            bd.description, bd.location_latitude, bd.location_longitude
        FROM 
            business.businesses b
        INNER JOIN 
            business.business_data bd ON b.business_id = bd.business_id
        ${queryConditions}
        LIMIT ? OFFSET ?
    `;
  const dataParams = [...params, pageSize, offset];
  const results = (await executeQuery(dataQuery, "slave", dataParams)) as any[];

  const data = results.map((row) => ({
    business_id: row.business_id,
    account_manager_eid: row.account_manager_eid,
    time_account_manager_assigned: row.time_account_manager_assigned,
    time_created: row.time_created,
    entered_by_eid: row.entered_by_eid,
    main_profile_eid: row.main_profile_eid,
    current_membership_package: row.current_membership_package,
    time_membership_expires: row.time_membership_expires,
    expired_membership_package: row.expired_membership_package,
    time_membership_expired: row.time_membership_expired,
    hubspot_company_id: row.hubspot_company_id,
    cached_avg_lwa_five_year: row.cached_avg_lwa_five_year,
    cached_total_entries_five_year: row.cached_total_entries_five_year,
    completeness_score: row.completeness_score,
    cached_total_jobs_posted_6_month: row.cached_total_jobs_posted_6_month,
    business_data: {
      business_data_id: row.business_data_id,
      business_id: row.bd_business_id,
      common_name: row.common_name,
      legal_name: row.legal_name,
      is_cpn: row.is_cpn,
      slogan: row.slogan,
      country_code: row.country_code,
      city: row.city,
      address: row.address,
      website_url: row.website_url,
      logo_url: row.logo_url,
      logo_original_url: row.logo_original_url,
      logo_cloudinary_id: row.logo_cloudinary_id,
      is_end_client: row.is_end_client,
      contact_phone: row.contact_phone,
      contact_email: row.contact_email,
      year_established: row.year_established,
      size_employees: row.size_employees,
      capacity_words_per_day: row.capacity_words_per_day,
      description: row.description,
      location_latitude: row.location_latitude,
      location_longitude: row.location_longitude,
    },
  }));

  return { data, total };
};

/**
 * Retrieves a business profile by its unique ID.
 * @async
 * @param {number} businessId - The unique identifier of the business.
 * @returns {Promise<BusinessProfile | null>} - A promise that resolves to the business profile, or null if no business is found.
 */
export const getBusinessById = async (businessId: number): Promise<BusinessProfile | null> => {
  const query = `
            SELECT 
                b.*,
                bd.*
            FROM 
                business.businesses b
            INNER JOIN 
                business.business_data bd ON b.business_id = bd.business_id
            WHERE 
                b.business_id = ?
        `;

  const results = (await executeQuery(query, "slave", [businessId])) as any[];

  if (!results.length) return null;

  const row = results[0];

  return {
    business_id: row.business_id,
    account_manager_eid: row.account_manager_eid,
    time_account_manager_assigned: row.time_account_manager_assigned,
    time_created: row.time_created,
    entered_by_eid: row.entered_by_eid,
    main_profile_eid: row.main_profile_eid,
    current_membership_package: row.current_membership_package,
    time_membership_expires: row.time_membership_expires,
    expired_membership_package: row.expired_membership_package,
    time_membership_expired: row.time_membership_expired,
    hubspot_company_id: row.hubspot_company_id,
    cached_avg_lwa_five_year: row.cached_avg_lwa_five_year,
    cached_total_entries_five_year: row.cached_total_entries_five_year,
    completeness_score: row.completeness_score,
    cached_total_jobs_posted_6_month: row.cached_total_jobs_posted_6_month,

    business_data: {
      business_data_id: row.business_data_id,
      business_id: row.business_id,
      common_name: row.common_name,
      legal_name: row.legal_name,
      is_cpn: row.is_cpn,
      slogan: row.slogan,
      country_code: row.country_code,
      city: row.city,
      address: row.address,
      website_url: row.website_url,
      logo_url: row.logo_url,
      logo_original_url: row.logo_original_url,
      logo_cloudinary_id: row.logo_cloudinary_id,
      is_end_client: row.is_end_client,
      contact_phone: row.contact_phone,
      contact_email: row.contact_email,
      year_established: row.year_established,
      size_employees: row.size_employees,
      capacity_words_per_day: row.capacity_words_per_day,
      description: row.description,
      location_latitude: row.location_latitude,
      location_longitude: row.location_longitude,
    },
  };
};

/**
 * Updates a business profile with the provided data.
 * @async
 * @param {Partial<BusinessProfile>} data - The partial data to update the business profile.
 * @returns {Promise<BusinessProfile | null>} - A promise that resolves to the updated business profile, or null if the update fails.
 */
export const updateBusiness = async (
  data: Partial<BusinessProfile>
): Promise<BusinessProfile | null> => {
  if (!data.business_id) {
    throw new Error("Business ID is required");
  }

  let query = `
            UPDATE business.businesses
            SET 
                account_manager_eid = ?,
                time_account_manager_assigned = ?,
                main_profile_eid = ?,
                current_membership_package = ?,
                time_membership_expires = ?,
                expired_membership_package = ?,
                time_membership_expired = ?,
                hubspot_company_id = ?,
                cached_avg_lwa_five_year = ?,
                cached_total_entries_five_year = ?,
                completeness_score = ?,
                cached_total_jobs_posted_6_month = ?
            WHERE business_id = ?
        `;

  const businessParams = [
    data.account_manager_eid,
    data.time_account_manager_assigned,
    data.main_profile_eid,
    data.current_membership_package,
    data.time_membership_expires,
    data.expired_membership_package,
    data.time_membership_expired,
    data.hubspot_company_id,
    data.cached_avg_lwa_five_year,
    data.cached_total_entries_five_year,
    data.completeness_score,
    data.cached_total_jobs_posted_6_month,
    data.business_id,
  ];

  await executeQuery(query, "slave", businessParams);

  if (data.business_data) {
    query = `
                UPDATE business.business_data
                SET 
                    common_name = ?,
                    legal_name = ?,
                    is_cpn = ?,
                    slogan = ?,
                    country_code = ?,
                    city = ?,
                    address = ?,
                    website_url = ?,
                    logo_url = ?,
                    logo_original_url = ?,
                    logo_cloudinary_id = ?,
                    is_end_client = ?,
                    contact_phone = ?,
                    contact_email = ?,
                    year_established = ?,
                    size_employees = ?,
                    capacity_words_per_day = ?,
                    description = ?,
                    location_latitude = ?,
                    location_longitude = ?
                WHERE business_id = ?
            `;

    const businessDataParams = [
      data.business_data.common_name,
      data.business_data.legal_name,
      data.business_data.is_cpn,
      data.business_data.slogan,
      data.business_data.country_code,
      data.business_data.city,
      data.business_data.address,
      data.business_data.website_url,
      data.business_data.logo_url,
      data.business_data.logo_original_url,
      data.business_data.logo_cloudinary_id,
      data.business_data.is_end_client,
      data.business_data.contact_phone,
      data.business_data.contact_email,
      data.business_data.year_established,
      data.business_data.size_employees,
      data.business_data.capacity_words_per_day,
      data.business_data.description,
      data.business_data.location_latitude,
      data.business_data.location_longitude,
      data.business_id,
    ];

    await executeQuery(query, "slave", businessDataParams);
  }

  return await getBusinessById(data.business_id);
};

/**
 *
 * @param filters
 * @returns
 */
const prepareFilters = (filters: BusinessFilters) => {
  let queryConditions = "WHERE 1";
  const params: any[] = [];

  if (filters.business_id) {
    queryConditions += ` AND b.business_id = ?`;
    params.push(filters.business_id);
  }
  if (filters.common_name) {
    queryConditions += ` AND bd.common_name LIKE ?`;
    params.push(`%${filters.common_name}%`);
  }
  if (filters.country_code) {
    queryConditions += ` AND bd.country_code = ?`;
    params.push(filters.country_code);
  }
  if (filters.completeness_score_min) {
    queryConditions += ` AND b.completeness_score >= ?`;
    params.push(filters.completeness_score_min);
  }

  return { queryConditions, params };
};
