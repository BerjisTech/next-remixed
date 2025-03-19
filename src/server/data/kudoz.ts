import {
  KudozActivity,
  KudozNotificationPreference,
  PointsInTopFields,
  PointsInTopFieldsDetailed,
  PointsInTopPairs,
} from "@/interfaces/kudoz";
import { executeQuery } from "../database/mysql/queryHelper";
import { DisciplineService } from "../services/DisciplineLookup";

export const getKudozPreferences = async (
  entityId: number
): Promise<KudozNotificationPreference | {}> => {
  const sql = `
      SELECT * 
      FROM proz.kudoz_notify_prefs 
      WHERE entity_id = ?
    `;
  const result = (await executeQuery(sql, "slave", [entityId])) as any[];

  return result.length > 0 ? result[0] : {};
};

/**
 * kudozGetPointsInTopPairs - Gets specified entity's point totals in the "top pairs"
 *
 * @param entityId - The entity ID
 * @param depth - The maximum number of pairs to fetch
 * @param level - The level of kudoz points ('pro' or 'non-pro')
 * @param period - The time period for the points
 * @param showHiddenPoints - Whether to include hidden points
 * @returns An object containing pairs and their respective point totals
 */
export const kudozGetPointsInTopPairs = async (
  entityId: number,
  depth: number = 3,
  level: string = "pro",
  period: string = "all",
  showHiddenPoints: boolean = false
): Promise<PointsInTopPairs> => {
  // Validate entityId
  if (!Number.isInteger(entityId) || entityId <= 0) {
    throw new Error("Invalid entity ID");
  }

  // Initialize query and parameters
  let query = `
    SELECT 
      entity_kudoz.pair, 
      SUM(points) AS tally 
    FROM 
      proz.entity_kudoz
  `;
  const params: (string | number)[] = [period];

  // Add LEFT JOIN if hidden points should not be shown
  if (!showHiddenPoints) {
    query += `
      LEFT JOIN proz.entity_points_exclude_pairs 
      ON entity_kudoz.entity_id = entity_points_exclude_pairs.entity_id 
      AND entity_kudoz.pair = entity_points_exclude_pairs.pair
    `;
  }

  // Add WHERE clause
  query += `
    WHERE 
      entity_kudoz.period = ? 
      AND entity_kudoz.entity_id = ?
  `;
  params.push(entityId);

  // Add level condition if specified and not 'all'
  if (level && level !== "all") {
    query += ` AND entity_kudoz.level = ? `;
    params.push(level);
  }

  // Add condition to exclude hidden points
  if (!showHiddenPoints) {
    query += ` AND entity_points_exclude_pairs.entity_id IS NULL `;
  }

  // Add GROUP BY and ORDER BY clauses
  query += `
    GROUP BY 
      entity_kudoz.pair 
    ORDER BY 
      tally DESC
  `;

  // Add LIMIT clause if depth is greater than 0
  if (depth > 0) {
    query += ` LIMIT ? `;
    params.push(depth);
  }

  // Execute the query
  const result: { pair: string; tally: number }[] = (await executeQuery(
    query,
    "slave",
    params
  )) as any[];

  // Transform result into PointsInTopPairs object
  const pointsInTopPairs: PointsInTopPairs = {};
  for (const { pair, tally } of result) {
    pointsInTopPairs[pair] = tally;
  }

  return pointsInTopPairs;
};

/**
 * kudozGetPointsInTopFields - Gets specified entity's point totals in the "top fields"
 *
 * @param entityId - The entity ID
 * @param depth - The maximum number of fields to fetch
 * @param level - The level of kudoz points ('pro' or 'non-pro')
 * @param period - The time period for the points
 * @param showHiddenPoints - Whether to include hidden points
 * @returns An object containing fields and their respective point totals
 */
export const kudozGetPointsInTopFields = async (
  entityId: number,
  depth: number = 3,
  level: string = "pro",
  period: string = "all",
  showHiddenPoints: boolean = false
): Promise<PointsInTopFields> => {
  if (!Number.isInteger(entityId) || entityId <= 0) {
    throw new Error("Invalid entity ID");
  }

  let query = `
    SELECT 
      entity_kudoz.field, 
      SUM(points) AS total_in_field
    FROM 
      proz.entity_kudoz
  `;

  const params: (string | number)[] = [entityId];

  if (!showHiddenPoints) {
    query += `
      LEFT JOIN proz.entity_points_exclude_fields 
      ON entity_kudoz.entity_id = entity_points_exclude_fields.entity_id 
      AND entity_points_exclude_fields.field_type = "broad" 
      AND entity_kudoz.field = entity_points_exclude_fields.field_id
    `;
  }

  query += ` 
    WHERE 
      entity_kudoz.entity_id = ? 
  `;

  if (level && level !== "all") {
    query += ` AND entity_kudoz.level = ? `;
    params.push(level);
  }

  query += ` AND entity_kudoz.period = ? `;
  params.push(period);

  if (!showHiddenPoints) {
    query += ` AND entity_points_exclude_fields.entity_id IS NULL `;
  }

  query += `
    GROUP BY entity_kudoz.field 
    ORDER BY total_in_field DESC
  `;

  if (depth > 0) {
    query += ` LIMIT ? `;
    params.push(depth);
  }

  const result: { field: string; total_in_field: number }[] = (await executeQuery(
    query,
    "slave",
    params
  )) as any[];

  const pointsInTopFields: PointsInTopFields = {};
  result.forEach(({ field, total_in_field }) => {
    pointsInTopFields[field] = total_in_field;
  });

  return pointsInTopFields;
};

/**
 * Fetches the point totals for an entity in the "top detailed fields."
 *
 * @param entityId - The entity ID
 * @param depth - The maximum number of detailed fields to fetch
 * @param level - The level of kudoz points ('pro' or 'non-pro')
 * @param period - The time period for the points (e.g., 'all')
 * @param showHiddenPoints - Whether to include hidden points
 * @returns A promise resolving to an object containing detailed fields and their respective point totals
 */
export const kudozGetPointsInTopFieldsDetailed = async (
  entityId: number,
  depth: number = 3,
  level: string = "pro",
  period: string = "all",
  showHiddenPoints: boolean = false
): Promise<PointsInTopFieldsDetailed> => {
  if (!Number.isInteger(entityId) || entityId <= 0) {
    throw new Error("Invalid entity ID");
  }

  // Initialize the SQL query
  let query = `
    SELECT 
      entity_kudoz_detailed.field_detailed, 
      SUM(points) AS total_in_field
    FROM 
      proz.entity_kudoz_detailed
  `;

  const params: (string | number)[] = [entityId];

  // Add JOIN if hidden points should not be included
  if (!showHiddenPoints) {
    query += `
      LEFT JOIN proz.entity_points_exclude_fields 
      ON entity_kudoz_detailed.entity_id = entity_points_exclude_fields.entity_id 
      AND entity_points_exclude_fields.field_type = "specific" 
      AND entity_kudoz_detailed.field_detailed = entity_points_exclude_fields.field_id
    `;
  }

  // Add WHERE conditions
  query += `
    WHERE 
      entity_kudoz_detailed.entity_id = ?
  `;

  if (level && level !== "all") {
    query += ` AND entity_kudoz_detailed.level = ? `;
    params.push(level);
  }

  query += ` AND entity_kudoz_detailed.period = ? `;
  params.push(period);

  if (!showHiddenPoints) {
    query += ` AND entity_points_exclude_fields.entity_id IS NULL `;
  }

  // Add GROUP BY, ORDER BY, and LIMIT clauses
  query += `
    GROUP BY entity_kudoz_detailed.field_detailed
    ORDER BY total_in_field DESC
  `;

  if (depth > 0) {
    query += ` LIMIT ? `;
    params.push(depth);
  }

  // Execute the query
  const result: { field_detailed: string; total_in_field: number }[] = (await executeQuery(
    query,
    "slave",
    params
  )) as any[];

  // Transform the result into the desired format
  const pointsInTopFieldsDetailed: PointsInTopFieldsDetailed = {};
  result.forEach(({ field_detailed, total_in_field }) => {
    pointsInTopFieldsDetailed[field_detailed] = total_in_field;
  });

  return pointsInTopFieldsDetailed;
};

/**
 *
 * @param entityId
 * @returns
 */
export async function getKudozPtsByCatProf(entityId: number): Promise<KudozActivity> {
  const countPairsToShow = 5;
  const pointTotalsByLevel: Record<string, number> = {};
  let totalPointsAllLevels = 0;
  let countPairs = 0;
  let countFields = 0;
  let countFieldsDetailed = 0;
  const topLanguagePairs: Record<string, number> = {};
  let topFields: Record<string, number> = {};
  let topDetailedFields: Record<string, number> = {};

  // Get point totals by level
  const levelQuery = `
    SELECT level, SUM(points) AS tally
    FROM proz.entity_kudoz
    WHERE period = 'all' AND entity_id = ?
    GROUP BY level
  `;
  const levelResults = (await executeQuery(levelQuery, "slave", [entityId])) as any[];
  levelResults.forEach((row: { level: string; tally: number }) => {
    pointTotalsByLevel[row.level] = row.tally;
  });
  totalPointsAllLevels = Object.values(pointTotalsByLevel).reduce((sum, val) => sum + val, 0);

  // Count language pairs
  const pairsQuery = `
    SELECT COUNT(DISTINCT(pair)) AS tally
    FROM proz.entity_kudoz
    WHERE level = 'pro' AND period = 'all' AND entity_id = ?
  `;
  const pairsResult = (await executeQuery(pairsQuery, "slave", [entityId])) as any[];
  countPairs = pairsResult[0]?.tally || 0;

  // Count fields
  const fieldsQuery = `
    SELECT COUNT(DISTINCT(field)) AS tally
    FROM proz.entity_kudoz
    WHERE level = 'pro' AND period = 'all' AND entity_id = ?
  `;
  const fieldsResult = (await executeQuery(fieldsQuery, "slave", [entityId])) as any[];
  countFields = fieldsResult[0]?.tally || 0;

  // Count detailed fields
  const detailedFieldsQuery = `
    SELECT COUNT(DISTINCT(field_detailed)) AS tally
    FROM proz.entity_kudoz_detailed
    WHERE level = 'pro' AND period = 'all' AND entity_id = ?
  `;
  const detailedFieldsResult = (await executeQuery(detailedFieldsQuery, "slave", [
    entityId,
  ])) as any[];
  countFieldsDetailed = detailedFieldsResult[0]?.tally || 0;

  // Get top language pairs
  const topPairs = await kudozGetPointsInTopPairs(entityId, 5, "pro", "all");
  Object.assign(topLanguagePairs, topPairs);

  // Get top fields
  const topFieldsRaw = await kudozGetPointsInTopFields(entityId, 0, "pro", "all");
  Object.entries(topFieldsRaw).forEach(([field, points]: [string, number]) => {
    if (points >= 1) topFields[field] = points;
  });

  // Get top detailed fields
  const topDetailedFieldsRaw = await kudozGetPointsInTopFieldsDetailed(entityId, 0, "pro", "all");
  Object.entries(topDetailedFieldsRaw).forEach(([field, points]: [string, number]) => {
    if (points >= 1) topDetailedFields[field] = points;
  });

  const discLookupService = new DisciplineService();

  if (topFields) {
    for (const [id, count] of Object.entries(topFields)) {
      const name = await discLookupService.getDiscGenName(id); // Fetch the name for the ID
      topFields[name] = count; // Replace ID with name
      delete topFields[id]; // Remove the original ID key
    }
  }

  if (topDetailedFields) {
    for (const [id, count] of Object.entries(topDetailedFields)) {
      const name = await discLookupService.getDiscSpecName(id); // Fetch the name for the ID
      topDetailedFields[name] = count; // Replace ID with name
      delete topDetailedFields[id]; // Remove the original ID key
    }
  }

  // Return the aggregated stats with snake_case keys
  return {
    point_totals_by_level: pointTotalsByLevel,
    total_points_all_levels: totalPointsAllLevels,
    count_pairs: countPairs,
    count_fields: countFields,
    count_fields_detailed: countFieldsDetailed,
    top_language_pairs: topLanguagePairs,
    top_fields: topFields,
    top_detailed_fields: topDetailedFields,
  };
}
