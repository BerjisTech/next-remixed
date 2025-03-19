import { POOL_CATEGORIES } from "@/constants/pool";
import InterpreterModel from "../models/Mongoose/Pools/Interpreter";
import SubtitlerModel from "../models/Mongoose/Pools/Subtitlers";
import { IPoolProfile } from "../models/Mongoose/Pools/Common";
import { findDocuments } from "../database/mongodb/mongoQueryHelper";

/**
 * Retrieves the user's pool profiles based on the given entity ID and options.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {Record<string, any>} [options] - Optional parameters for customizing the pool profiles retrieval.
 * @returns {Promise<Record<keyof typeof POOL_CATEGORIES, IPoolProfile> | null>} - A promise that resolves to a record of pool profiles or `null` if no profiles are found.
 */

export async function getUserPoolsProfiles(
  entityId: number,
  options?: Record<string, any>
): Promise<Record<keyof typeof POOL_CATEGORIES, IPoolProfile> | null> {
  // Initialize the pools map
  let projection: string = options?.specific_fields ?? "";
  const poolsMap: Record<keyof typeof POOL_CATEGORIES, IPoolProfile> = {};

  // Fetch interpreters and subtitlers
  const interpreters = await findDocuments(InterpreterModel, { entity_id: entityId }, projection);
  const subtitlers = await findDocuments(SubtitlerModel, { entity_id: entityId }, projection);

  // Assign the first interpreter or null if none found
  if (interpreters.length > 0) {
    poolsMap.interpreters = interpreters[0];
  }

  // Assign the first subtitler or null if none found
  if (subtitlers.length > 0) {
    poolsMap.subtitlers = subtitlers[0];
  }

  return Object.keys(poolsMap).length > 0 ? poolsMap : null;
}
