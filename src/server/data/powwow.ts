import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves powwow information for a given entity ID, optionally filtering by organizer status.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {boolean} [isOrganizer=false] - Optional flag to filter results by organizer status.
 * @returns {Promise<any[] | null>} - A promise that resolves to an array of powwow information or `null` if no data is found.
 */
export const getPowwowsInfo = async (
  entityId: number,
  isOrganizer = false
): Promise<any[] | null> => {
  let sqlQuery: string;
  const params = [entityId, entityId, entityId]; // Common placeholders for `:eid_s`

  if (isOrganizer) {
    sqlQuery = `
            SELECT powwows.powwow_id, powwow_theme, powwow_city, powwow_date, organizer_id, powwow_note
            FROM events.powwows
            JOIN events.entity_powwows 
              ON entity_powwows.powwow_id = powwows.powwow_id
            WHERE powwows.organizer_id = ?
              AND entity_powwows.entity_id = ?
              OR (entity_powwows.entity_id = ? 
                  AND entity_powwows.organizer IN ("volunteer", "ok"))
        `;
  } else {
    sqlQuery = `
            SELECT p.powwow_id, powwow_theme, powwow_city, powwow_date, organizer_id, powwow_note
            FROM events.powwows p
            JOIN events.entity_powwows ep 
              ON p.powwow_id = ep.powwow_id
            JOIN events.powwow_attendance pa 
              ON ep.powwow_id = pa.powwow_id
            WHERE ep.entity_id = ?
              AND pa.entity_id = ?
              AND p.organizer_id != ?
              AND ep.organizer NOT IN ("volunteer", "ok")
            GROUP BY p.powwow_id
        `;
  }

  // Execute the query using the `executeQuery` helper
  const rows = (await executeQuery(sqlQuery, "slave", params)) as any[];
  return rows.length > 0 ? rows : null;
};

/**
 * Checks if the given entity is an attendant of any powwows.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the entity is an attendant, `false` otherwise.
 */

export const isPowwowAttendant = async (entityId: number): Promise<boolean> => {
  const sqlQuery = `
        SELECT COUNT(pa.entity_id) AS powwows_attended
        FROM events.powwows p
        JOIN events.entity_powwows ep ON p.powwow_id = ep.powwow_id
        JOIN events.powwow_attendance pa ON ep.powwow_id = pa.powwow_id
        WHERE ep.entity_id = ?
        AND pa.entity_id = ?
        AND p.organizer_id != ?
        AND ep.organizer NOT IN ("volunteer", "ok")
        GROUP BY p.powwow_id
    `;
  const params = [entityId, entityId, entityId];

  const rows = (await executeQuery(sqlQuery, "slave", params)) as any[];

  return rows.length > 0 && rows[0].powwows_attended > 0;
};

/**
 * Checks if the given entity is an organizer of any powwows.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the entity is an organizer, `false` otherwise.
 */
export const isPowwowOrganizer = async (entityId: number): Promise<boolean> => {
  let sqlQuery: string;
  let params: any[];

  // Check if the user is a primary organizer in `events.powwows`
  sqlQuery = `
        SELECT powwow_id 
        FROM events.powwows 
        WHERE organizer_id = ? 
        LIMIT 1
    `;
  params = [entityId];
  const primaryOrganizer = (await executeQuery(sqlQuery, "slave", params)) as any[];

  if (primaryOrganizer.length > 0) {
    return true;
  }

  // Check if the user is a volunteer or 'ok' organizer in `events.entity_powwows`
  sqlQuery = `
        SELECT powwow_id 
        FROM events.entity_powwows 
        WHERE entity_id = ? 
        AND organizer IN ("volunteer", "ok") 
        LIMIT 1
    `;
  const additionalOrganizer = (await executeQuery(sqlQuery, "slave", params)) as any[];

  return additionalOrganizer.length > 0;
};
