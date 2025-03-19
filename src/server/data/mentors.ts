/**
 * Retrieves a list of mentors from the database.
 * @returns A promise that resolves to an array of Mentor objects.
 */
import { executeQuery } from "@/server/database/mysql/queryHelper";
import { Mentor } from "@/interfaces/pool";
import { getUserInfo } from "@/server/data/user";

/**
 * Retrieves a list of active mentors from the ProZ.com mentorship program.
 *
 * @async
 * @function getMentors
 * @description Fetches active mentors from the entity_pools_cache table and enriches their data with user information.
 * First queries the pools database for active mentor IDs, then fetches detailed user information for each mentor.
 *
 * @returns {Promise<Mentor[]>} A promise that resolves to an array of Mentor objects containing:
 *   - entity_id: The unique identifier of the mentor
 *   - site_name: The mentor's display name (or first + last name if site_name not available)
 *   - profile_picture: URL to the mentor's profile image (empty string if none)
 *   - country_code: The mentor's country code (empty string if none)
 */
export const getMentors = async (): Promise<Mentor[]> => {
  const sqlQuery = `
       SELECT entity_id
       FROM pools.entity_pools_cache
       WHERE pool_id = 'mentors'
         AND status = 'active'
   `;

  const mentorResults = (await executeQuery(sqlQuery, "slave")) as { entity_id: string }[];
  if (!mentorResults.length) return [];

  const mentors = await Promise.all(
    mentorResults.map(async ({ entity_id }) => {
      const userInfo = await getUserInfo({
        entity_id,
        include_entities_table: true,
        include_language_pairs: true,
      });

      if (!userInfo) return null;

      return {
        entity_id,
        site_name: userInfo.site_name || `${userInfo.contact_first} ${userInfo.contact_last}`,
        profile_picture: userInfo.image_url || "",
        country_code: userInfo.contact_country_code || "",
      } as Mentor;
    })
  );

  return mentors.filter((mentor): mentor is Mentor => mentor !== null);
};
