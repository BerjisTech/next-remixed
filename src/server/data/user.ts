import { EntityAiPreference, ProBonoData, ProzUser, VolunteerSetting } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import {
  dbCleanColumnName,
  entityGetPhoto,
  getEntityPreferences,
  prozHtmlSpecialChars,
} from "./common";
import { entityGetDisciplines, entityGetDiscSpecs, getDisciplineName } from "./discipline";
import { ProzMembershipManager } from "../services/Membership";
import { entityGetProfileCompletenessData } from "./profileCompleteness";
import { entityIsProfessionalMember } from "./membership";
import { getUserPoolsTaglines, getUserSeoData, getUserTaglines } from "./taglines";
import { entityGetServices } from "./services";
import { getUserPoolsProfiles } from "./pools";
import iconv from "iconv-lite";
import { getUserPoolsAboutMe } from "./bio";

/**
 * Get gender and pronouns for a given entity.
 * @param {number} entityId - Entity ID
 * @param {object} options - Options for the function.
 * @returns {Promise<object | null>} - Returns gender and pronouns or null if not found
 */
export const getUserGenderAndPronouns = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<object | null> => {
  const sqlQuery = `
        SELECT * 
        FROM entities.gender_pronouns 
        WHERE entity_id = ?
        LIMIT 1
        `;

  // Execute the query using the executeQuery function
  const results: object[] = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];
  // Use ternary to return the first result or null if no results found
  return results.length > 0 ? results[0] : null;
};

/**
 * Get gender and pronouns for a given entity.
 * @param {number} entityId - Entity ID
 * @param {object} options - Options for the function.
 * @returns {Promise<object | null>} - Returns start rating or null if not found
 */
export const getUserStarRating = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<object[] | null> => {
  const sqlQuery = `
        SELECT *, "entity_ratings" as table_name FROM proz.entity_ratings 
        WHERE feedbackee_id = ? 
        AND wwa_rating > 0 
        ORDER BY record_created_at desc
        `;

  // Execute the query using the executeQuery function
  const results: object[] = (await executeQuery(sqlQuery, "slave", [entityId], {
    useCache: true,
    ttl: 60 * 60 * 4,
  })) as any[];
  // Use ternary to return the first result or null if no results found
  return results.length > 0 ? results : null;
};

/**
 * Retrieves user information based on the provided email address.
 * @async
 * @param {string} email - The email address to search for.
 * @param {Record<string, any>} [options={}] - Additional query options.
 * @returns {Promise<object | null>} - A promise that resolves to the user information object, or null if no user is found.
 */
export const getUserByEmail = async (
  email: string,
  options: Record<string, any> = {}
): Promise<object | null> => {
  const sqlQuery = `
        SELECT * 
        FROM proz.entities 
        WHERE contact_email = ?
        LIMIT 1
        `;

  // Execute the query using the executeQuery function
  const results: object[] = (await executeQuery(sqlQuery, "slave", [email])) as any[];
  // Use ternary to return the first result or null if no results found
  return results.length > 0 ? results[0] : null;
};

/**
 * Get user's field of expertise (general and specific disciplines).
 * @param {number} entityId - The ID of the entity.
 * @param {object} options - Additional options.
 * @returns {Promise<object | null>} - Returns an object with general and specific disciplines or null in case of error.
 */
export const getUserFieldOfExpertise = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<object> => {
  // Fetch general and specific disciplines for the entity
  const generalFields = await entityGetDisciplines(entityId);
  const specificDisciplines = await entityGetDiscSpecs(entityId);

  // Map discipline codes to names
  const generalFieldsWithNames = await Promise.all(
    generalFields.map(async (field: number) => ({
      [field]: await getDisciplineName(field),
    }))
  );

  // const specificDisciplinesWithNames = await Promise.all(
  //     specificDisciplines.map(async (field: number) => ({
  //         [field]: await getDisciplineName(field),
  //     }))
  // );

  // Combine fields into one object
  const fields = {
    general_fields: generalFieldsWithNames,
    // specific_disciplines: specificDisciplinesWithNames,
  };

  // Return utf-8 safe object
  return fields;
};

/**
 * Fetch the count of volunteer settings for a specific entity.
 *
 * @param entityId - The ID of the entity
 * @returns The count of volunteer settings for the entity
 */
export const getEntityVolunteerSettings = async (
  entityId: number
): Promise<VolunteerSetting | null> => {
  const sql = `
        SELECT *
        FROM proz.entity_volunteer_settings
        WHERE entity_id = ?
    `;

  const params = [entityId];

  // Execute the query on the master database and return the result
  const result = (await executeQuery(sql, "master", params)) as any[];
  return result.length > 0 ? result[0] : null;
};

/**
 * Retrieves AI preferences for a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<EntityAiPreference | null>} - A promise that resolves to the entity's AI preferences, or null if none are found.
 */
export const getEntityAiPreferences = async (
  entityId: number
): Promise<EntityAiPreference | null> => {
  const sql = `
        SELECT preference, visible
        FROM proz.entity_ai_preference
        WHERE entity_id = ?
        `;

  const params = [entityId];

  // Execute the query and return the result as an array of preferences
  const result = (await executeQuery(sql, "slave", params)) as any[];
  return result.length > 0 ? result[0] : null;
};

/**
 * Retrieves pro bono volunteer records and calculates total word count and interpreting hours.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<ProBonoData | null>} - A promise that resolves to an object containing total word count and interpreting hours, or null if no data is found.
 */
export const getProBonoVolunteerData = async (entityId: number): Promise<ProBonoData | null> => {
  const sqlQuery = `
        SELECT entity_id, language, total_words, interpreting_hours
        FROM proz.pro_bono_volunteers_records
        WHERE entity_id = ?
        `;

  const rows = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  let totalWordsCount = 0;
  let interpretingHours = 0;

  if (rows.length > 0) {
    rows.forEach((row) => {
      totalWordsCount += parseInt(row.total_words || "0", 10);
      interpretingHours += parseInt(row.interpreting_hours || "0", 10);
    });

    return {
      total_words_count: totalWordsCount,
      interpreting_hours: interpretingHours,
    };
  }
  return null;
};

/**
 * Retrieves user information based on specified options.
 * @async
 * @param {Record<string, any>} [options={}] - Object containing query parameters, including `fields_entities_table` and `entity_id`. Defaults to `DEFAULT_USER_INFO_COLS`.
 * @returns {Promise<ProzUser | null>} - A promise that resolves to an object with user information or null if no data is found.
 */
export const getUserInfo = async (options: Record<string, any> = {}): Promise<ProzUser | null> => {
  // Initialize the result object
  const resultData: Record<string, any> = {};

  // Check if 'fields_entities_table' is provided and not set false
  if (options.include_entities_table) {
    // Sanitize columns for SQL query
    let columnsToReturn = "";
    const sanitizedCols: string[] = [];

    if (Array.isArray(options.fields_entities_table)) {
      for (let col of options.fields_entities_table) {
        col = col.trim();
        // Sanitize and wrap columns with backticks
        if (!/^`.*`$/.test(col)) {
          col = "`" + dbCleanColumnName(col) + "`";
        }
        sanitizedCols.push(col);
      }
      columnsToReturn = sanitizedCols.length > 0 ? sanitizedCols.join(", ") : "*";
    } else {
      columnsToReturn = "*";
    }

    // Build the SQL query
    const sqlQuery = `
                SELECT ${columnsToReturn}
                FROM proz.entities
                WHERE entity_id = ?
                LIMIT 1
            `;

    // Execute the query with `entity_id` as a parameter
    const results = (await executeQuery(sqlQuery, "slave", [options.entity_id])) as any[];

    if (results.length > 0) {
      const entityData = results[0];

      // Add the result to `resultData`
      Object.assign(resultData, entityData);

      // Process 'contact_country' and add it to the result
      if (entityData.contact_country) {
        resultData.country_name = entityData.contact_country.replace(/^ /, "");
      }
    } else {
      return null;
    }
  }

  if (true) {
    resultData.image_url = await entityGetPhoto(options.entity_id, "square");
    resultData.entity_volunteer_settings = await getEntityVolunteerSettings(options.entity_id);
    resultData.entity_ai_preference = await getEntityAiPreferences(options.entity_id);
  }

  if (options.include_preferences) {
    // Execute the query with `entity_id` as a parameter
    const results = await getEntityPreferences(options.entity_id);
    resultData.prof_prefs = results ?? null;
  }

  if (options.include_taglines) {
    resultData.service_specific_taglines = await getUserTaglines(options.entity_id);
    // Make a separate condition if required
    resultData.service_specific_seo = await getUserSeoData(options.entity_id);
  }

  if (options.include_pools_data) {
    const poolsProfiles =
      (await getUserPoolsProfiles(options.entity_id, {
        specific_fields: "pool_tagline bio pool_status",
      })) ?? null;
    resultData.pools_data = {};
    // For now pools taglines are separate so get taglines for service id 0 and fetch pools taglines from mongo db

    resultData.pools_data.pools_profiles = poolsProfiles ?? null;
    resultData.pools_data.pools_taglines =
      (await getUserPoolsTaglines(options.entity_id, poolsProfiles)) ?? null;
    resultData.pools_data.pools_about_me =
      (await getUserPoolsAboutMe(options.entity_id, poolsProfiles)) ?? null;
  }

  if (options.include_membership_data) {
    const membershipService = new ProzMembershipManager();
    const mem_type = await membershipService.getMembershipTypesByEntityIds([options.entity_id]);
    resultData.membership_type = mem_type[options.entity_id] ?? "";
    resultData.is_professional_member = await entityIsProfessionalMember(options.entity_id);
  }

  if (options.include_completeness_data) {
    const completeness = await entityGetProfileCompletenessData(
      options.entity_id,
      resultData.account_type
    );
    resultData.profile_completeness_data = completeness;
  }

  if (options.include_user_services) {
    resultData.services = await entityGetServices(options.entity_id);
  }

  // Check for fields_user_pass_table option is set to false
  if (options.include_user_pass_table) {
    // Sanitize columns for SQL query
    let columnsToReturn = "";
    const sanitizedCols: string[] = [];

    if (Array.isArray(options.fields_user_pass_table)) {
      for (let col of options.fields_user_pass_table) {
        col = col.trim();
        if (!/^`.*`$/.test(col)) {
          col = "`" + dbCleanColumnName(col) + "`";
        }
        sanitizedCols.push(col);
      }
      columnsToReturn = sanitizedCols.length > 0 ? sanitizedCols.join(", ") : "";
    } else {
      columnsToReturn = "*";
    }

    // Build the SQL query
    const sqlQueryUserPass = `
                SELECT ${columnsToReturn}
                FROM proz.user_pass
                WHERE entity_id = ?
                LIMIT 1
            `;

    // Execute the query with `entity_id` as a parameter
    const resultsUserPass = (await executeQuery(sqlQueryUserPass, "slave", [
      options.entity_id,
    ])) as any[];

    if (resultsUserPass.length > 0) {
      const userPassData = resultsUserPass[0];
      Object.assign(resultData, userPassData);
    }
  }

  // Check if 'fields_entity_about_me_table' is provided and not set to false
  if (options.include_entity_about_me_table) {
    // Sanitize columns for SQL query
    let columnsToReturn = "";
    const sanitizedCols: string[] = [];

    if (Array.isArray(options.fields_entity_about_me_table)) {
      for (let col of options.fields_entity_about_me_table) {
        col = col.trim();
        // Sanitize and wrap columns with backticks
        if (!/^`.*`$/.test(col)) {
          col = "`" + dbCleanColumnName(col) + "`";
        }
        sanitizedCols.push(col);
      }
      columnsToReturn = sanitizedCols.length > 0 ? sanitizedCols.join(", ") : "";
    } else {
      columnsToReturn = "*";
    }

    // Build the SQL query
    const sqlQuery = `
                SELECT ${columnsToReturn}
                FROM entities.about_me
                WHERE entity_id = ?
                AND lang = ?
            `;

    // Execute the query with `entity_id` as a parameter
    const results = (await executeQuery(sqlQuery, "slave", [options.entity_id, "eng"])) as any[];

    if (results.length > 0) {
      const aboutMeArray: any[] = [];

      // Loop through the results and decode blob data
      for (const aboutMe of results) {
        if (Buffer.isBuffer(aboutMe.value)) {
          // Convert Buffer to a readable UTF-8 string
          aboutMe.value = iconv.decode(Buffer.from(aboutMe.value, "binary"), "utf-8");
        }
        aboutMeArray.push(aboutMe);
      }

      if (Array.isArray(aboutMeArray)) {
        // Merge about me localizations into the result
        Object.assign(resultData, { service_specific_about_me: aboutMeArray });
      }
    }
  }

  // Check if 'fields_entity_resources_table' is provided and not set false
  if (options.include_entity_resources_table) {
    // Sanitize columns for SQL query
    let columnsToReturn = "";
    const sanitizedCols: string[] = [];

    if (Array.isArray(options.fields_entity_resources_table)) {
      for (let col of options.fields_entity_resources_table) {
        col = col.trim();
        // Sanitize and wrap columns with backticks
        if (!/^`.*`$/.test(col)) {
          col = "`" + dbCleanColumnName(col) + "`";
        }
        sanitizedCols.push(col);
      }
      columnsToReturn = sanitizedCols.length > 0 ? sanitizedCols.join(", ") : "";
    } else {
      columnsToReturn = "*";
    }

    // Build the SQL query
    const sqlQuery = `
            SELECT ${columnsToReturn}
            FROM proz.entity_resources
            WHERE entity_id = ?
            LIMIT 1
        `;

    // Execute the query with `entity_id` as a parameter
    const results = (await executeQuery(sqlQuery, "slave", [options.entity_id])) as any[];
    if (results.length > 0) {
      const profileResourcesArray = results[0];
      if (profileResourcesArray.meta_description) {
        if (Buffer.isBuffer(profileResourcesArray.meta_description)) {
          // Convert Buffer to a readable UTF-8 string
          profileResourcesArray.meta_description =
            iconv.decode(Buffer.from(profileResourcesArray.meta_description, "binary"), "utf-8") ??
            "";
        }
      }

      // Check conditions for site_name
      if (
        profileResourcesArray.showname === "yes" &&
        (resultData.contact_first || resultData.contact_last)
      ) {
        profileResourcesArray.site_name = "";
        profileResourcesArray.site_name += resultData.contact_first
          ? resultData.contact_first + " "
          : "";
        profileResourcesArray.site_name += resultData.contact_middle
          ? resultData.contact_middle + " "
          : "";
        profileResourcesArray.site_name += resultData.contact_last
          ? resultData.contact_last + " "
          : "";
      } else {
        profileResourcesArray.site_name = resultData.username;
      }

      profileResourcesArray.site_name = prozHtmlSpecialChars(profileResourcesArray.site_name);
      profileResourcesArray.name = profileResourcesArray.site_name;
      profileResourcesArray.tagline = profileResourcesArray.my_tagline; // TODO: Fetch tagline data separately if needed
      profileResourcesArray.image = profileResourcesArray.resource_image_url;

      // Merge profile resources into the result
      Object.assign(resultData, profileResourcesArray);
    }
  }

  if (options.include_rating_data) {
    // Get positive feedback count
    const countQuery = `
            SELECT COUNT(*) as count
            FROM proz.entity_feedback
            WHERE feedbackee_id = ?
            AND visible = "y"
            AND vet = "ok"
            AND wwa = "yes"
            AND fb_type = "public"
            AND has_associated_rating_record = "n"
        `;

    const countResult = (await executeQuery(countQuery, "slave", [options.entity_id])) as any[];
    const positiveFeedbackCount = countResult.length > 0 ? countResult[0].count : 0;

    // Get average ratings
    const ratingsQuery = `
            SELECT TRUNCATE(AVG(wwa_rating), 2) as avg, COUNT(wwa_rating) as count
            FROM proz.entity_ratings
            WHERE feedbackee_id = ?
            AND private = "n"
            AND vet = "ok"
            AND edit_status = "main"
            AND wwa_rating > 0
            ${options.enableManagedServicesFeedbackEntries ? 'AND (record_created_at < "2023-07-03" OR (record_created_at >= "2023-07-03" AND external_rating_source != "boostlingo"))' : ""}
        `;

    const ratingsResult = (await executeQuery(ratingsQuery, "slave", [options.entity_id])) as any[];
    const ratings = ratingsResult.length > 0 ? ratingsResult[0] : { avg: null, count: 0 };

    resultData.positive_feedback_count = positiveFeedbackCount;
    resultData.avg_rating = ratings.avg;
    resultData.rating_count = ratings.count;
  }

  // Check if 'pro_tags' information should be retrieved
  if (options.include_pro_tag_data) {
    const proTagsQuery = `
                SELECT qualified, language_pair, service, tag_type
                FROM credentials.pro_tags
                WHERE entity_id = ?
                AND NOW() BETWEEN time_start AND time_end
                AND status = "active"
                AND opt_out = "n"
                AND qualified IN ("yes", "yes_provisional")
            `;
    const proTagsResult = (await executeQuery(proTagsQuery, "slave", [options.entity_id])) as any[];
    if (proTagsResult.length > 0) {
      resultData.pro_tag_data = proTagsResult;
    }
  }

  // Pro Bono Volunteers Records condition
  if (options.include_pro_bono_data) {
    resultData.pro_bono_data = await getProBonoVolunteerData(options.entity_id);
  }

  if (options.include_field_of_expertise) {
    resultData.field_of_expertise = await getUserFieldOfExpertise(options.entity_id);
  }

  // Language credentials condition - necessary for quoting system in Opportunities marketplace (Jobs)
  // https://www.proz.com/settings/languages#credentials
  if (options.include_language_credentials) {
    const languageCredentialsQuery = `
            SELECT * FROM proz.certifications
            WHERE entity_id = ?
        `;
    const languageCredentialsResult = (await executeQuery(languageCredentialsQuery, "slave", [
      options.entity_id,
    ])) as any[];
    if (languageCredentialsResult.length > 0) {
      resultData.language_credentials = languageCredentialsResult;
    }
  }

  if (options.include_language_pairs) {
    const languagePairsQuery = `
            SELECT language_pair
            FROM proz.entity_languages
            WHERE entity_id = ?
        `;
    const languagePairsResult = (await executeQuery(languagePairsQuery, "slave", [
      options.entity_id,
    ])) as any[];
    if (languagePairsResult.length > 0) {
      resultData.language_pairs = languagePairsResult.map((row: any) => row.language_pair);
    }
  }

  // Return accumulated result data or null if empty
  return Object.keys(resultData).length > 0 ? (resultData as ProzUser) : null;
};

/**
 * Updates specific fields for a given entity.
 * @async
 * @param {Record<string, any>} fields - An object containing the fields to update and their new values.
 * @param {number} entityId - The unique identifier of the entity to update.
 * @returns {Promise<void>} - A promise that resolves when the update is complete.
 */
export async function updateFields(fields: Record<string, any>, entityId: number) {
  for (const [fieldType, fieldData] of Object.entries(fields)) {
    switch (fieldType) {
      case "birthday": {
        const birthday =
          fieldData || `${fieldData.year}-${fieldData.month}-${fieldData.day} 00:00:00`;
        const query = `UPDATE proz.entities SET birthday = ? WHERE entity_id = ?`;
        await executeQuery(query, "master", [birthday, entityId]);
        break;
      }
      case "username": {
        const query = `UPDATE proz.user_pass SET username = ? WHERE entity_id = ?`;
        await executeQuery(query, "master", [fieldData, entityId]);
        break;
      }
      case "contact_first": {
        const query = `
                    UPDATE proz.entities 
                    SET contact_first = ?, prof_updated = NOW() 
                    WHERE entity_id = ?
                `;
        await executeQuery(query, "master", [fieldData, entityId]);
        break;
      }

      case "contact_middle": {
        const query = `
                    UPDATE proz.entities 
                    SET contact_middle = ?, prof_updated = NOW() 
                    WHERE entity_id = ?
                `;
        await executeQuery(query, "master", [fieldData, entityId]);
        break;
      }

      case "contact_last": {
        const query = `
                    UPDATE proz.entities 
                    SET contact_last = ?, prof_updated = NOW() 
                    WHERE entity_id = ?
                `;
        await executeQuery(query, "master", [fieldData, entityId]);
        break;
      }

      // Add more cases as needed
      default:
        throw new Error(`Unsupported field type '${fieldType}'.`);
    }
  }
}

/**
 * Creates a new entity account in the database.
 * @async
 * @param {Record<string, any>} accountData - An object containing the account details.
 * @returns {Promise<number>} - A promise that resolves to the ID of the newly created entity.
 */
export const createEntityAccount = async (accountData: Record<string, any>): Promise<number> => {
  const { contact_email, password, account_type = "2", created_at = new Date() } = accountData;

  // Insert into `proz.entities` table
  const entityInsertQuery = `
        INSERT INTO proz.entities (contact_email, account_type, created_at)
        VALUES (?, ?, ?)
    `;
  const entityResult: any = await executeQuery(entityInsertQuery, "master", [
    contact_email,
    account_type,
    created_at,
  ]);

  const entityId = entityResult?.insertId;
  const username = "user-" + entityId;
  // Insert into `proz.user_pass` table
  const userPassInsertQuery = `
        INSERT INTO proz.user_pass (entity_id, username, password)
        VALUES (?, ?, ?)
    `;
  await executeQuery(userPassInsertQuery, "master", [entityId, username, password]);

  return entityId;
};
