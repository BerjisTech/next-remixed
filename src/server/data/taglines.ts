import { SeoData, Taglines } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import { POOLS_MODELS_MAP } from "@/constants/pool";
import { updateDocument } from "../database/mongodb/mongoQueryHelper";
import { getUserPoolsProfiles } from "./pools";
import { IPoolProfile } from "../models/Mongoose/Pools/Common";
import { convertStrToBuffer } from "./common";

/**
 * Retrieves taglines for a given user, optionally filtered by service ID and language.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @param {number} [serviceId] - Optional service ID to filter the taglines.
 * @param {string} [lang] - Optional language code to filter the taglines.
 * @returns {Promise<Taglines[]>} - A promise that resolves to an array of taglines.
 */
export async function getUserTaglines(
  entityId: number,
  serviceId?: number,
  lang?: string
): Promise<Taglines[]> {
  let sql = `
        SELECT tagline_id, service_id, entity_id, lang, value, was_migrated_initially, time_created, time_updated
        FROM entities.taglines 
        WHERE entity_id = ?
    `;
  const params: any[] = [entityId];

  if (serviceId !== undefined) {
    sql += " AND service_id = ? LIMIT 1";
    params.push(serviceId);
  }

  if (lang !== undefined) {
    sql += " AND lang = ? ";
    params.push(lang);
  } else {
    sql += ` AND lang = 'eng' `;
  }

  const result: Taglines[] = (await executeQuery(sql, "slave", params)) as any[];

  return result.length > 0 ? result : [];
}

/**
 * Updates the taglines for a given user based on service ID and pool ID.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @param {number} serviceId - The service ID associated with the tagline.
 * @param {string} tagline - The new tagline to set for the user.
 * @param {string} poolId - The pool ID to associate with the tagline.
 * @returns {Promise<Taglines[]>} - A promise that resolves to an array of updated taglines.
 */
export async function updateUserTaglines(
  entityId: number,
  serviceId: number,
  tagline: string,
  poolId: string
): Promise<Taglines[]> {
  if (!poolId) {
    let checkSql = `
        SELECT *
        FROM entities.taglines 
        WHERE entity_id = ?
        AND service_id = ?
        `;

    // Only updating tagline with service id  0 others belong to pools
    const result: Taglines[] = (await executeQuery(checkSql, "master", [
      entityId,
      serviceId,
    ])) as any[];
    if (result.length > 0) {
      // Update the existing tagline if record is found
      const updateSql = `
            UPDATE entities.taglines
            SET value = ?
            WHERE entity_id = ? 
            AND service_id = ?
            `;

      await executeQuery(updateSql, "master", [tagline, entityId, serviceId]);
    } else {
      // Insert new tagline if no existing record is found
      const insertSql = `
            INSERT INTO entities.taglines (entity_id, service_id, value)
            VALUES (?, ?, ?)
            `;
      await executeQuery(insertSql, "master", [entityId, serviceId, tagline]);
    }
  } else {
    const poolModel = POOLS_MODELS_MAP[poolId];

    if (!poolModel) {
      throw new Error("Invalid poolId");
    }

    const filter = { entity_id: entityId };
    const update = { pool_tagline: tagline };

    // Use the updateDocument helper to perform the update
    const result = await updateDocument(poolModel, filter, update);
  }

  // Return the updated or newly inserted record for confirmation
  // const finalResult: Taglines[] = await executeQuery(checkSql, 'master', [entityId, serviceId]);
  return [];
}

/**
 * Updates the SEO data for a given user.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @param {string} profile_title - The title for the user's profile.
 * @param {string} meta_description - The meta description for the user's profile.
 * @param {number} serviceId - The service ID associated with the SEO data.
 * @returns {Promise<any[]>} - A promise that resolves to an array containing the updated SEO data or any result.
 */
export const updateUserSeoData = async (
  entityId: number,
  profile_title: string,
  meta_description: string,
  serviceId: number
): Promise<any[]> => {
  if (serviceId === 0) {
    const arrayBuffer = convertStrToBuffer(meta_description);
    const updateSql = `
        UPDATE proz.entity_resources
        SET profile_title = ?,
        meta_description = ?
        WHERE entity_id = ? 
        `;

    await executeQuery(updateSql, "master", [profile_title, arrayBuffer, entityId]);
  } else {
    const checkSql = `
        SELECT *
        FROM entities.profile_seo
        WHERE entity_id = ? AND service_id = ?;
        `;
    const result = (await executeQuery(checkSql, "master", [entityId, serviceId])) as any[];

    let insertOrUpdateSql = `
        INSERT INTO entities.profile_seo (entity_id, meta_title, meta_description, service_id, lang)
        VALUES (?, ?, ?, ?, 'eng')
        `;

    if (result.length > 0) {
      insertOrUpdateSql = `
            UPDATE entities.profile_seo
            SET  meta_title = ?, meta_description = ?
            WHERE entity_id = ? AND service_id =?
            `;
    }
    await executeQuery(insertOrUpdateSql, "master", [
      entityId,
      profile_title,
      meta_description,
      serviceId,
    ]);
  }
  return [];
};

/**
 * Retrieves taglines for a given user based on specific pools.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @param {Record<string, IPoolProfile> | null} [pools] - Optional object of pools to filter the taglines.
 * @returns {Promise<Record<string, string> | null>} - A promise that resolves to an object containing taglines by pool or null if no taglines are found.
 */
export async function getUserPoolsTaglines(
  entityId: number,
  pools?: Record<string, IPoolProfile> | null
): Promise<Record<string, string> | null> {
  // Use provided pools or fetch using entityId
  const poolsMap = pools ?? (await getUserPoolsProfiles(entityId));
  const poolTaglineMap: Record<string, string> = {};
  for (const poolType in poolsMap) {
    const profile = poolsMap[poolType]; // Assuming poolsMap[poolType] is an array
    if (profile) {
      // Extract the tagline of the first profile or use a default
      poolTaglineMap[poolType] = profile.pool_tagline || "";
    }
  }
  return Object.keys(poolTaglineMap).length > 0 ? poolTaglineMap : null;
}

export async function getUserSeoData(
  entityId: number,
  serviceId?: number,
  lang?: string
): Promise<SeoData[] | null> {
  let sql = `
        SELECT entity_id, lang, meta_title, meta_description, service_id
        FROM entities.profile_seo
        WHERE entity_id = ?
        `;
  const params: any[] = [entityId];

  if (serviceId !== undefined) {
    sql += " AND service_id = ? LIMIT 1";
    params.push(serviceId);
  }

  if (lang !== undefined) {
    sql += " AND lang = ? ";
    params.push(lang);
  }

  const result: SeoData[] = (await executeQuery(sql, "slave", params)) as any[];

  return result.length > 0 ? result : null;
}
