import { executeQuery } from "@/server/database/mysql/queryHelper";
import { AgencyRating } from "@/interfaces/blueboard";

/**
 * Retrieves Blue Board entries (agency ratings) for a given entity.
 *
 * This function fetches Blue Board entries, which represent agency ratings,
 * based on the specified entity ID. It also considers user roles such as
 * admin and job moderator to determine access level.
 *
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {boolean} [isAdmin] - Optional flag indicating if the user has admin privileges.
 * @param {boolean} [isJobMod] - Optional flag indicating if the user has job moderator privileges.
 * @returns {Promise<AgencyRating[] | null>} - A promise that resolves to an array of agency ratings, or null if no entries are found.
 */
export const getEntityBbEntries = async (
  entityId: number,
  isAdmin?: boolean,
  isJobMod?: boolean
): Promise<AgencyRating[] | null> => {
  let sql = `
        SELECT 
            agencies.agency_id,
            agency_rating_id,
            avg_lwa,
            name,
            pwd,
            country,
            agencies.entity_id,
            agency_ratings.rater_id,
            would_work_for,
            comment,
            comment_reply,
            vet_reply,
            reply_visibility,
            rating_visibility,
            request_reply_time,
            agency_ratings.would_work_for_reply,
            agency_ratings.time_reply
        FROM 
            proz.agencies, 
            proz.agency_ratings
        WHERE 
            agencies.agency_id = agency_ratings.agency_id
            AND rater_id = ?
            AND (edit_status = "main" OR edit_status = "dr")
    `;

  if (!(isAdmin || isJobMod)) {
    sql += ` AND rating_visibility = "y" AND vet = "ok"`;
  } else {
    sql += ` AND rating_visibility != "td"`;
  }

  const result = (await executeQuery(sql, "slave", [entityId])) as any[];
  return result.length > 0 ? result : null;
};

/**
 * Searches Blue Board entries (agency ratings) based on the provided criteria.
 *
 * This function performs a search for Blue Board entries using a search term,
 * entity ID, and user roles to filter the results. The Blue Board entries represent
 * agency ratings submitted by users.
 *
 * @async
 * @param {string} [search] - An optional search term to filter entries by keywords.
 * @param {number} [entityId] - An optional entity ID to filter entries for a specific entity.
 * @param {boolean} [isAdmin] - An optional flag indicating if the user has admin privileges.
 * @param {boolean} [isJobMod] - An optional flag indicating if the user has job moderator privileges.
 * @returns {Promise<AgencyRating[] | null>} - A promise that resolves to an array of agency ratings, or null if no entries match the criteria.
 */
export const searchBlueBoardEntries = async (
  search?: string,
  entityId?: number,
  isAdmin?: boolean,
  isJobMod?: boolean
): Promise<AgencyRating[] | null> => {
  let sql = `
        SELECT 
            agencies.agency_id,
            agency_rating_id,
            avg_lwa,
            name,
            pwd,
            country,
            agencies.entity_id,
            agency_ratings.rater_id,
            would_work_for,
            comment,
            comment_reply,
            vet_reply,
            reply_visibility,
            rating_visibility,
            request_reply_time,
            agency_ratings.would_work_for_reply,
            agency_ratings.time_reply
        FROM 
            proz.agencies
        INNER JOIN 
            proz.agency_ratings ON agencies.agency_id = agency_ratings.agency_id
        WHERE 
            (edit_status = "main" OR edit_status = "dr")
    `;

  const params: any[] = [];

  if (search) {
    sql += ` AND (
            agencies.name LIKE ? OR 
            agencies.country LIKE ? OR 
            agency_ratings.comment LIKE ?
        )`;
    const searchTerm = `%${search}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  if (entityId) {
    sql += ` AND rater_id = ?`;
    params.push(entityId);
  }

  if (!(isAdmin || isJobMod)) {
    sql += ` AND rating_visibility = "y" AND vet = "ok"`;
  } else {
    sql += ` AND rating_visibility != "td"`;
  }

  sql += ` ORDER BY agency_ratings.time_rated DESC LIMIT 50`;

  const result = (await executeQuery(sql, "slave", params)) as any[];
  return result.length > 0 ? result : null;
};
