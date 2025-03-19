import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a list of active communities.
 * @async
 * @returns {Promise<any[]>} - A promise that resolves to the list of active communities.
 */
export const getCommunities = async (): Promise<any[]> => {
  const query = 'SELECT * FROM proz.communities WHERE is_removed = "n" ';
  const result = (await executeQuery(query)) as any[];
  return result;
};

/**
 *
 * @param data
 * @returns
 */
export const createCommunity = async (data: {
  name: string;
  description: string;
  created_by_eid: number;
}) => {
  const { name, description, created_by_eid } = data;
  const query = `
        INSERT INTO proz.communities (name, description, created_by_eid)
        VALUES (?, ?, ?)
    `;
  const result = await executeQuery(query, "master", [name, description, created_by_eid]);
  return result;
};

/**
 *
 * @param communityId
 * @param entityIds
 * @returns
 */
export const addUserToCommunity = async (communityId: number, entityIds: number[]) => {
  const errors: string[] = [];
  const successfulInsertions: number[] = [];

  for (const entityId of entityIds) {
    try {
      // Check if the user is already in the community
      const queryCheck = `
                SELECT * FROM proz.communities_entities
                WHERE community_id = ? AND entity_id = ?
            `;
      const resultCheck = (await executeQuery(queryCheck, "master", [
        communityId,
        entityId,
      ])) as any[];

      if (resultCheck.length > 0) {
        // If the entity is already in the community and is_removed is "y", update it to "n"
        if (resultCheck[0].is_removed === "y") {
          const queryUpdate = `
                        UPDATE proz.communities_entities
                        SET is_removed = "n"
                        WHERE community_id = ? AND entity_id = ?
                    `;
          await executeQuery(queryUpdate, "master", [communityId, entityId]);
          successfulInsertions.push(entityId); // Add to successfulInsertions if the update is successful
        } else {
          errors.push(`Entity ID ${entityId} is already in the community.`);
        }
        continue; // Skip further steps for this entityId
      }

      // Insert user into the community if not already there
      const query = `
                INSERT INTO proz.communities_entities (community_id, entity_id)
                VALUES (?, ?)
            `;
      await executeQuery(query, "master", [communityId, entityId]);
      successfulInsertions.push(entityId); // Only add to successfulInsertions if the insert is successful
    } catch (error) {
      const errorMessage = (error as Error).message;
      errors.push(`Error adding Entity ID ${entityId}: ${errorMessage}`);
    }
  }

  return {
    successfulInsertions,
    errors,
  };
};

/**
 * Remove a user from the community
 * @param communityId
 * @param entityId
 * @returns
 */
export const removeUserFromCommunity = async (communityId: number, entityId: number) => {
  const query = `
        UPDATE proz.communities_entities
        SET is_removed = "y"
        WHERE community_id = ? AND entity_id = ?
    `;
  const result = (await executeQuery(query, "master", [communityId, entityId])) as any[];
  return result;
};

/**
 * Get users of the communities and which community they belong to with pagination
 * @param criteria
 * @param page
 * @param limit
 * @param download_csv
 * @returns
 */
export const getUsersCommunities = async (
  criteria: { community_id?: number; entity_id?: number },
  page: number,
  limit: number,
  download_csv: boolean = false
) => {
  const offset = (page - 1) * limit;
  const filters: string[] = [];
  const values: (number | string)[] = [];

  if (criteria.community_id !== undefined && criteria.community_id > 0) {
    filters.push("ce.community_id = ?");
    values.push(criteria.community_id);
  }

  if (criteria.entity_id !== undefined && criteria.entity_id > 0) {
    filters.push("ce.entity_id = ?");
    values.push(criteria.entity_id);
  }

  const whereClause = filters.length > 0 ? `AND ${filters.join(" AND ")}` : "";

  // Get the total count of users in communities
  const countQuery = `
        SELECT COUNT(DISTINCT ce.entity_id) as total
        FROM proz.communities_entities ce
        WHERE ce.is_removed = "n" ${whereClause}
    `;
  const countResult = (await executeQuery(countQuery, "master", values)) as any[];
  const totalUsers = countResult[0].total;
  const totalPages = Math.ceil(totalUsers / limit);

  // Get the paginated users and their communities
  let query = `
        SELECT ce.entity_id, GROUP_CONCAT(ce.community_id) as communities
        FROM proz.communities_entities ce
        WHERE ce.is_removed = "n" ${whereClause}
        GROUP BY ce.entity_id
    `;
  if (!download_csv) {
    query += ` LIMIT ? OFFSET ?`;
  }

  const result = (await executeQuery(query, "master", [...values, limit, offset])) as any[];

  return {
    totalPages,
    totalUsers,
    users: result || [],
  };
};

/**
 * Get members of a community for landing pages.
 * @async
 * @param {number} community_id - The unique identifier of the community.
 * @returns {Promise<any>} - A promise that resolves to the list of community members.
 */
export const getCommunityMembers = async (community_id: number) => {
  if (community_id <= 0) {
    return [];
  }

  const query = `
        SELECT DISTINCT
            ce.entity_id AS "id",
            CONCAT(e.contact_first, ' ', e.contact_last) AS "name",
            IFNULL(GROUP_CONCAT(DISTINCT iso_language), '') AS "languages",
            IFNULL(e.contact_country, '') AS "country",
            COALESCE(em.membership_type, 'free') as "membership",
            em.time_start as "timeStart",
            em.time_end as "timeEnd",
            CASE 
                WHEN em.time_end >= NOW() THEN 'active'
                ELSE 'expired'
            END as "membershipStatus",
            CASE
                WHEN em.time_end >= NOW() THEN TRUE
                ELSE FALSE
            END as "isActive",
            CASE
                WHEN em2.entity_id IS NOT NULL THEN TRUE
                ELSE FALSE
            END as "isProfessionalMember"
        FROM proz.communities_entities ce
        JOIN entities e ON ce.entity_id = e.entity_id
        LEFT JOIN entity_languages_known elk ON e.entity_id = elk.entity_id
        LEFT JOIN iso_codes ic ON elk.language_code = ic.iso_three
        LEFT JOIN entity_memberships em ON e.entity_id = em.entity_id 
            AND NOW() BETWEEN em.time_start AND em.time_end
        LEFT JOIN entity_memberships em2 ON e.entity_id = em2.entity_id
            AND em2.membership_type IN ('platinum', 'pro_plus', 'pro_premium', 'pro_premium_yearly')
            AND NOW() BETWEEN em2.time_start AND em2.time_end
        WHERE ce.community_id = ? 
        AND ce.is_removed = "n"
        GROUP BY ce.entity_id;
    `;

  const result = await executeQuery(query, "slave", [community_id]);
  console.log("Community members query result:", result); // Add this for debugging
  return result;
};

/**
 * Retrieves the community participation details for a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<Record<string, any> | null>} - A promise that resolves to the community participation details, or null if not available.
 */
export const entityCommunityParticipation = async (
  entityId: number
): Promise<Record<string, any> | null> => {
  let returnObj: Record<string, any> = {};
  const query = `
        SELECT *
        FROM proz.communities_entities
        WHERE entity_id = ?
        AND is_removed = 'n'
        GROUP BY community_id
    `;

  const result = (await executeQuery(query, "slave", [entityId])) as any[];
  if (result.length > 0) {
    returnObj.entity_participation = result;
    const query = `
        SELECT COUNT(entity_id) AS total_members, community_id
        FROM proz.communities_entities
        GROUP BY community_id
        `;

    const resultCount = await executeQuery(query, "slave");
    // Convert to a Map object
    // const totalMembersMap = new Map(
    //     resultCount.map(({ community_id, total_members }) => {
    //         console.log("Community ID:", community_id, "Total Members:", total_members); // Debug log
    //         return [community_id, total_members]; // Return key-value pair for Map
    //     })
    // );

    returnObj.total_members = resultCount;
  }

  return returnObj ?? null;
};
