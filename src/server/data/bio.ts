import { executeQuery } from "../database/mysql/queryHelper";
import { convertStrToBuffer } from "./common";
import { IPoolProfile } from "../models/Mongoose/Pools/Common";
import { getUserPoolsProfiles } from "./pools";
import { AboutMe } from "@/interfaces/account";
import { POOLS_MODELS_MAP } from "@/constants/pool";
import { updateDocument } from "../database/mongodb/mongoQueryHelper";

/**
 * Updates an existing tagline or inserts a new one based on entity and service ID.
 * @param entityId - The entity ID to filter by.
 * @param serviceId - The service ID to filter by.
 * @param tagline - The tagline string to update or insert.
 * @returns Updated or newly inserted tagline record.
 */
export async function updateUserBio(
  entityId: number,
  serviceId: number,
  value: string,
  poolId?: string
): Promise<AboutMe[]> {
  if (!poolId) {
    let checkSql = `
        SELECT *
        FROM entities.about_me
        WHERE entity_id = ?
        AND service_id = ?
        AND lang = ?
    `;
    const lang = "eng";
    const result: AboutMe[] = (await executeQuery(checkSql, "master", [
      entityId,
      serviceId,
      lang,
    ])) as any[];

    const arrayBuffer = convertStrToBuffer(value);
    if (result.length > 0) {
      // Update the existing tagline if record is found
      const updateSql = `
            UPDATE entities.about_me
            SET value = ?
            WHERE entity_id = ? 
            AND service_id = ?
            AND lang = ?
            `;
      await executeQuery(updateSql, "master", [arrayBuffer, entityId, serviceId, lang]);
    } else {
      // Insert new tagline if no existing record is found
      const insertSql = `
            INSERT INTO entities.about_me (entity_id, service_id, value ,lang)
            VALUES (?, ?, ?, ?)
            `;
      await executeQuery(insertSql, "master", [entityId, serviceId, arrayBuffer, lang]);
    }
  } else {
    const poolModel = POOLS_MODELS_MAP[poolId];
    if (!poolModel) {
      throw new Error("Invalid poolId");
    }
    const filter = { entity_id: entityId };
    const update = { bio: value };
    // Use the updateDocument helper to perform the update
    const result = await updateDocument(poolModel, filter, update);
  }

  return [];
}

/**
 * Extracts about me from user pools using the map structure.
 *
 * @param entityId - The entity ID to fetch pools for.
 * @param pools - Optional pool profiles map.
 * @returns A record of pool types mapped to their taglines.
 */
export async function getUserPoolsAboutMe(
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
      poolTaglineMap[poolType] = profile.bio || "";
    }
  }
  return Object.keys(poolTaglineMap).length > 0 ? poolTaglineMap : null;
}
