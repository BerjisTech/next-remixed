import { EventRegistrations, Event, Meetup } from "@/interfaces/events";
import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a list of events with pagination.
 * @async
 * @param {number} [limit=10] - The number of events to retrieve.
 * @param {number} [offset=0] - The number of events to skip.
 * @returns {Promise<Event[]>} - A promise that resolves to the list of events.
 */
export const getEvents = async (limit: number = 10, offset: number = 0): Promise<Event[]> => {
  const sql = `
    SELECT * FROM events.events 
    ORDER BY time_start DESC 
    LIMIT ?
    OFFSET ?
  `;

  const result = (await executeQuery(sql, "slave", [limit, offset])) as any;
  return result.length > 0 ? result : [];
};

/**
 * Retrieves a list of conferences attended by a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {boolean} [isAdmin] - Optional flag indicating if the user has admin privileges.
 * @returns {Promise<EventRegistrations[] | null>} - A promise that resolves to the list of event registrations, or null if none are found.
 */
export const getEntityConferencesAttended = async (
  entityId: number,
  isAdmin?: boolean
): Promise<EventRegistrations[] | null> => {
  const sqlQuery = `
        SELECT 
            events.event_id, 
            event_registrations.time_admitted, 
            events.event_type, 
            event_registrations.part_paid, 
            certificate, 
            event_name, 
            event_registration_visible, 
            date_start, 
            part_paid, 
            subtitle
        FROM events.event_registrations
        LEFT JOIN events.events USING(event_id)
        WHERE entity_id = ?
          AND event_visible = "y"
          ${!isAdmin ? 'AND event_registration_visible = "y"' : ""}
          AND date_end < NOW()
          AND part_paid = "y"
        GROUP BY events.event_id
        ORDER BY date_start
    `;

  const rows: EventRegistrations[] = (await executeQuery(sqlQuery, "slave", [entityId])) as any;

  // Additional filtering for "online" events
  const filteredRows = rows.filter((row) => {
    return row.part_paid === "y";
  });

  return filteredRows.length > 0 ? filteredRows : null;
};

/**
 * Retrieves a list of events organized by a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<Event[] | null>} - A promise that resolves to the list of events organized by the entity, or null if none are found.
 */
export const eventsOrganized = async (entityId: number): Promise<Event[] | null> => {
  const sql = `
        SELECT event_id, date_start, event_name, organizer_id
        FROM events.events
        WHERE (
            organizer_id = ? OR
            co_organizer_id = ? OR
            co_organizer_id2 = ? OR
            co_organizer_id3 = ? OR
            co_organizer_id4 = ? OR
            co_organizer_id5 = ?
        )
        AND event_visible = "y"
    `;

  const params = [entityId, entityId, entityId, entityId, entityId, entityId]; // Parameters for each placeholder

  const rows = (await executeQuery(sql, "slave", params)) as any; // Execute the query with the parameterized values
  return rows.length > 0 ? rows : null;
};

/**
 * Retrieves an event by its unique ID.
 * @async
 * @param {number} id - The unique identifier of the event.
 * @returns {Promise<Event>} - A promise that resolves to the event object.
 */
export const getEventById = async (id: number): Promise<Event> => {
  const sql = `
    SELECT * FROM events.events 
    WHERE event_id = ?
  `;

  const result = (await executeQuery(sql, "slave", [id])) as any;
  return result[0] as Event;
};

/**
 * Retrieves a list of meetups with pagination.
 * @async
 * @param {number} [limit=10] - The number of meetups to retrieve.
 * @param {number} [offset=0] - The number of meetups to skip.
 * @returns {Promise<Meetup[]>} - A promise that resolves to the list of meetups.
 */
export const getMeetups = async (limit: number = 10, offset: number = 0): Promise<Meetup[]> => {
  const sql = `
    SELECT * FROM proz.meetups 
    ORDER BY start_date DESC 
    LIMIT ?
    OFFSET ?
  `;

  const result = (await executeQuery(sql, "slave", [limit, offset])) as any;
  return result.length > 0 ? result : [];
};

/**
 * Retrieves a meetup by its unique ID.
 * @async
 * @param {number} id - The unique identifier of the meetup.
 * @returns {Promise<Meetup>} - A promise that resolves to the meetup object.
 */
export const getMeetupById = async (id: number): Promise<Meetup> => {
  const sql = `
    SELECT * FROM proz.meetups 
    WHERE meetup_id = ?
  `;

  const result = (await executeQuery(sql, "slave", [id])) as any;
  return result[0] as Meetup;
};
