import { INITIAL_STAFF, INITIAL_STAFF_DEV } from "@/constants/common";
import { executeQuery } from "../database/mysql/queryHelper";
import { MediaFile } from "../services/Media/MediaFile";
import { MediaService } from "../services/Media/MediaService";
import iconv from "iconv-lite";
import { fieldSchemas } from "@/validators/profileValidators";
import { ZodError } from "zod";
import {
  entityIsProfessionalMember,
  entityIsProfessionalMemberCommissionBased,
} from "./membership";
import { UserGeneralInfo } from "@/interfaces/account";
import { createHash } from "crypto";

/**
 * Converts a given string to a Buffer for blob storage.
 *
 * This function takes a string input, processes it, and returns a Buffer object.
 * It is useful for preparing string data to be stored in binary format, such as
 * in blob storage or databases.
 *
 * @param {string} aboutMeStr - The string to be converted to a Buffer.
 * @returns {Buffer | null} - The resulting Buffer object, or null if the input is empty.
 */
export const convertStrToBuffer = (aboutMeStr: string): Buffer | null => {
  // Convert the cleaned string to a Buffer for blob storage
  const buffer: Buffer = Buffer.from(aboutMeStr, "utf-8");
  return buffer;
};

/**
 * Generates an MD5 hash of the given string content.
 *
 * This function takes a string input, applies the MD5 hashing algorithm,
 * and returns the resulting hash in hexadecimal format. It utilizes the
 * built-in `crypto` module for secure and efficient hashing.
 *
 * @param {string} content - The string content to be hashed.
 * @returns {string} - The resulting MD5 hash in hexadecimal format.
 */
export const md5 = (content: string): string => {
  return createHash("md5").update(content).digest("hex");
};

/**
 * Converts a binary buffer to a UTF-8 string.
 * @param buffer The input buffer to convert.
 * @returns The converted string, or null if the input is invalid.
 */
export const convertBufferToStr = (buffer: any): string | null => {
  if (Buffer.isBuffer(buffer)) {
    return iconv.decode(buffer, "utf-8");
  } else if (buffer instanceof ArrayBuffer) {
    return iconv.decode(Buffer.from(buffer), "utf-8");
  }
  return null;
};

/**
 * Helper to capitalize the first letter of a string.
 * @param {string} str - String to capitalize.
 * @returns {string}
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Function to check if a string is valid UTF-8
 * @param value
 * @returns bool
 */
export const isValidUTF8 = (value: string): boolean => {
  const decoder = new TextDecoder("utf-8", { fatal: true });
  return decoder.decode(new TextEncoder().encode(value)) ? true : false;
};

/**
 * Function to convert a string to UTF-8
 * @param value
 * @returns string
 */
export const convertToUTF8 = (value: string): string => {
  // Here we use TextEncoder, adjust as necessary
  return new TextDecoder().decode(new TextEncoder().encode(value));
};

/**
 * Escapes a string for safe use in a SQL query, either as a general string or a column name.
 *
 * @param value - The value to sanitize.
 * @param isColumnName - If true, additional sanitization for column names is applied.
 * @returns The sanitized string.
 */
export const dbCleanColumnName = (value: string, isColumnName: boolean = false): string => {
  let sanitizedValue = value
    .replace(/\\/g, "\\\\") // Backslash
    .replace(/'/g, "\\'") // Single quote
    .replace(/"/g, '\\"') // Double quote
    .replace(/\n/g, "\\n") // Newline
    .replace(/\r/g, "\\r") // Carriage return
    .replace(/\x00/g, "\\x00") // Null byte
    .replace(/\x1a/g, "\\x1a"); // Substitute character

  // Additional escaping for column names
  if (isColumnName) {
    sanitizedValue = sanitizedValue.replace(/`/g, "\\`");
  }
  return sanitizedValue;
};

/**
 * Converts special characters to HTML entities and replaces &amp; back to &.
 *
 * @param str - The input string to sanitize.
 * @returns The sanitized string with HTML special characters converted.
 */
export const prozHtmlSpecialChars = (str: string): string => {
  return str
    ? str
        .replace(/&/g, "&amp;") // Encode ampersands first
        .replace(/</g, "&lt;") // Convert less than to HTML entity
        .replace(/>/g, "&gt;") // Convert greater than to HTML entity
        .replace(/"/g, "&quot;") // Convert double quotes to HTML entity
        .replace(/'/g, "&#039;") // Convert single quotes to HTML entity
        .replace(/&amp;/g, "&") // Finally, replace encoded ampersands back
    : "";
};

/**
 * Parses and validates an entity ID.
 * If the ID is a valid positive integer, it returns the parsed number.
 * Otherwise, it returns null.
 *
 * @param {string | number | null} entityId - The entity ID to be parsed and validated.
 * @returns {number | null} - The parsed ID if valid, otherwise null.
 */
export const parseAndValidateId = (entityId: string | number | null): number | null => {
  // If the input is a number, ensure it's a valid integer
  if (typeof entityId === "number") {
    return Number.isInteger(entityId) && entityId > 0 ? entityId : null;
  }
  // If the input is a string, attempt to parse it as a number
  const parsedId = entityId ? parseInt(entityId, 10) : NaN;
  // Check if the parsed ID is a valid positive integer
  return Number.isInteger(parsedId) && parsedId > 0 ? parsedId : null;
};

/**
 * Gets just one value from the entities table.
 *
 * @param {number} entityId - Use "entityId" for entity_id.
 * @param {string} columnName - Name of the column to be pulled from the entities table.
 * @param {string} dbToUse - Database to use, defaults to db_dynamic.
 * @param {boolean} useRowCache - Whether to use cache for rows.
 * @returns {Promise<any>} - The data from the row is returned as a scalar (string, number, etc.).
 */
export const entityGetDatum = async (
  entityId: number,
  columnName: string,
  dbToUse: "slave" | "master" = "slave",
  useRowCache: boolean = false
): Promise<any> => {
  // Set dbToUse to the appropriate database
  dbToUse = dbToUse === "master" ? dbToUse : "slave";

  // Return cached result if useRowCache is enabled and data exists in cache
  // if (useRowCache && arrayCache[entityId]) {
  //     return arrayCache[entityId][columnName];
  // }

  let sqlQuery: string;

  // Prepare SQL query based on the useRowCache and columnName
  if (useRowCache) {
    sqlQuery = `SELECT * FROM proz.entities WHERE entity_id = ? LIMIT 1`;
  } else if (columnName === "username") {
    sqlQuery = `SELECT username FROM proz.user_pass WHERE entity_id = ? LIMIT 1`;
  } else {
    sqlQuery = `SELECT ${columnName} FROM proz.entities WHERE entity_id = ? LIMIT 1`;
  }

  // Execute the query and fetch the result
  const result = (await executeQuery(sqlQuery, dbToUse, [entityId])) as any[];

  // Return the result based on whether caching is enabled
  if (result.length > 0) {
    const data = result[0];
    const datum = data[columnName];

    // // Cache the result if row caching is enabled
    // if (useRowCache) {
    //     arrayCache[entityId] = data;
    // }

    return datum;
  }
  return "";
};

/**
 * Retrieves an image URL based on the provided entity ID, image type, and optional placeholder setting.
 *
 * @param entityId - Unique identifier for the entity.
 * @param {imageType} - 'small' | 'medium' | 'large' | 'xlarge' | 'original' | 'square'.
 * @param supplyPlaceholder - Flag to indicate if a placeholder image should be returned if no result is found.
 * @returns A URL string for the entity's image or placeholder.
 */
export const entityGetPhoto = async (
  entityId = 0,
  imageType = "",
  supplyPlaceholder = false
): Promise<string> => {
  let size = "";
  let cropped = false;
  let squareOnly = false;

  // Determine size and cropping based on image type
  switch (imageType) {
    case "small":
      size = "small";
      break;
    case "med":
    case "medium":
      size = "medium";
      break;
    case "large":
      size = "large";
      break;
    case "square":
      size = "large";
      cropped = true;
      break;
    case "square_only":
      size = "large";
      cropped = true;
      squareOnly = true;
      break;
    case "original":
      size = "original";
      break;
    default:
      size = "xlarge";
  }
  const result = await entityGetModernizedPhoto(entityId, size, cropped, false, false, squareOnly);

  if (result && result.trim() !== "") {
    return result;
  } else if (supplyPlaceholder) {
    switch (size) {
      case "xlarge":
        return "/images/250_profile_placeholder.png";
      case "large":
        return "/images/128_profile_placeholder.png";
      case "medium":
        return "/images/64_profile_placeholder.png";
      case "small":
        return "/images/32_profile_placeholder.png";
      default:
        return "/images/250_profile_placeholder.png";
    }
  } else {
    return "";
  }
};

/**
 * Retrieves the modernized photo URL for a given entity.
 *
 * This function fetches the photo of an entity in a specified size and format.
 * It provides options to apply cropping, use the master database, and ensure
 * square dimensions if required.
 *
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {string} [imageSize='original'] - The desired image size (e.g., 'square', 'thumbnail', or 'original').
 * @param {boolean} [getCrop=false] - Whether to retrieve the cropped version of the image.
 * @param {boolean} [defaultToOriginal=true] - Whether to fall back to the original image if the requested size is unavailable.
 * @param {boolean} [useMasterDb=false] - Whether to query the master database instead of the slave database.
 * @param {boolean} [squareOnly=false] - Whether to return only square images.
 * @returns {Promise<string | null>} - A promise that resolves to the photo URL or null if not available.
 */
async function entityGetModernizedPhoto(
  entityId: number,
  imageSize: string = "original",
  getCrop: boolean = false,
  defaultToOriginal: boolean = true,
  useMasterDb: boolean = false,
  squareOnly: boolean = false
): Promise<string | null> {
  let imageId = 0;
  let dbToUse: "master" | "slave" = useMasterDb ? "master" : "slave";

  if (imageSize !== "original" && !squareOnly) {
    const sizeField = getCrop ? `cropped_${imageSize}` : imageSize;
    const query = `
        SELECT media_file_id
        FROM entities.profile_photo
        WHERE entity_id = ?
        AND size = ?
        `;
    const result = (await executeQuery(query, dbToUse, [entityId, sizeField])) as any[];

    if (result.length > 0 && result[0].media_file_id > 0) {
      imageId = result[0].media_file_id;
    }
  }

  if (imageId <= 0 && getCrop) {
    const query = `
        SELECT square_resource_image_url
        FROM proz.entity_resources
        WHERE entity_id = ?
        AND image_visible = 'y'
        `;
    const result = (await executeQuery(query, dbToUse, [entityId])) as any[];

    if (result.length > 0 && result[0].square_resource_image_url) {
      return MediaFile.convertS3UrlToCdnUrl(result[0].square_resource_image_url);
    }
  }

  if (imageId <= 0 && defaultToOriginal && !squareOnly) {
    const fieldSizeName = getCrop ? "cropped_original" : "original";
    const query = `
        SELECT media_file_id
        FROM entities.profile_photo
        WHERE entity_id = ?
        AND size = ?
        `;
    const result = (await executeQuery(query, dbToUse, [entityId, fieldSizeName])) as any[];

    if (result.length > 0 && result[0].media_file_id > 0) {
      imageId = result[0].media_file_id;
    }
  }

  if (imageId > 0 && !squareOnly) {
    const mediaService = new MediaService();
    const photoFile = await mediaService.getMediaById(imageId, useMasterDb);
    if (photoFile) {
      return photoFile.publicUrl;
    }
  }

  return squareOnly ? "" : await entityGetPhotoLegacy(entityId, imageSize, useMasterDb);
}

/**
 * TODO @fawad
 * @param entityId
 * @param imageSize
 * @param useMasterDb
 * @returns
 */
async function entityGetPhotoLegacy(
  entityId: number,
  imageSize: string,
  useMasterDb: boolean
): Promise<string> {
  return "";
}

/**
 * Get a list of all software names from the `proz.softwares` table.
 *
 * @param {boolean} onlyCatTools - Whether to retrieve only CAT tools.
 * @returns {Promise<Record<number, string>>} - An object of software names keyed by their software ID.
 */
export const getSoftwareNames = async (
  onlyCatTools: boolean = false
): Promise<Record<number, string>> => {
  const sqlQuery = `
        SELECT software_id, software_name 
        FROM proz.softwares 
        ${onlyCatTools ? 'WHERE is_cat_tool = "yes"' : ""} 
        ORDER BY software_name;
    `;

  const results = (await executeQuery(sqlQuery, "slave")) as any[];

  const softwareNames: Record<number, string> = {};
  results.forEach((row: { software_id: number; software_name: string }) => {
    softwareNames[row.software_id] = row.software_name;
  });

  return softwareNames;
};

/**
 *
 * @param sessionId
 * @returns
 */
export const getEntityIdFromSession = async (sessionId: string): Promise<number | null> => {
  const query = `
        SELECT *
        FROM proz.sessions
        WHERE session_id = ?
        LIMIT 1
        `;

  const result = (await executeQuery(query, "master", [sessionId])) as any[];
  return result.length > 0 ? result[0].entity_id : null;
};

/**
 * Get profile preferences for the specified member (from personal.prof_prefs database)
 *
 * @param entityId The member's entity_id
 * @param dbToUse Optional database to use; defaults to the primary database
 * @param refreshEidVData Optional flag to refresh the cached data; defaults to false
 * @returns A promise resolving to the member's profile preferences or null
 */
export async function getEntityPreferences(entityId: number): Promise<Record<string, any> | null> {
  // Parameterized query
  const sqlQuery = `
        SELECT * 
        FROM personal.prof_prefs
        WHERE entity_id = ?
        LIMIT 1
     `;

  // Execute query
  const result = (await executeQuery(sqlQuery, "master", [entityId])) as any[];
  return result.length > 0 ? standardizeTimezone(result[0]) : null;
}

/**
 * Standardize timezone code as stored in personal.prof_prefs.dtime_tzid
 *
 * @param prefs The preferences object
 * @returns The preferences object with standardized timezone
 */
export function standardizeTimezone(prefs: Record<string, any>): Record<string, any> {
  const mapUnsupportedTimezones: Record<string, string> = {
    "Asia/Yangon": "Indian/Cocos",
    "Europe/Saratov": "Europe/Samara",
    "America/Punta_Arenas": "America/Argentina/Buenos_Aires",
    "Asia/Famagusta": "Asia/Nicosia",
    "America/Ciudad_Juarez": "America/Chihuahua",
  };

  if (prefs.dtime_tzid && mapUnsupportedTimezones[prefs.dtime_tzid]) {
    prefs.dtime_tzid = mapUnsupportedTimezones[prefs.dtime_tzid];
  }
  return prefs;
}

/**
 *
 * @param entityId
 * @returns
 */
export const isSiteStaff = (entityId: number): boolean => {
  const staffList =
    process.env.NEXT_NODE_ENV === "development"
      ? [...INITIAL_STAFF, ...INITIAL_STAFF_DEV]
      : [...INITIAL_STAFF];
  return entityId === 1 || staffList.some((staff) => staff.id === entityId);
};

/**
 * Validates multiple fields against their respective Zod schemas.
 *
 * @param fields - The fields object containing key-value pairs of field types and data.
 * @param entityId - The entity ID to be passed to relevant field schemas (e.g., for agency_name).
 * @returns - An object containing `validFields` and `validationErrors`.
 */
export const validateFields = async (
  fields: Record<string, any>,
  entityId: number
): Promise<{ validationErrors: any[]; validFields: Record<string, any> }> => {
  const validationErrors = [];
  const validFields: Record<string, any> = {};

  for (const [fieldType, fieldData] of Object.entries(fields)) {
    const schema = fieldSchemas[fieldType];
    if (!schema) {
      // validationErrors.push({ field: fieldType, message: `Field type '${fieldType}' is not supported.` });
      continue;
    }
    // Add entity_id for schemas that require it (like 'agency_name')
    const dataToValidate = ["agency_name", "username"].includes(fieldType)
      ? { [fieldType]: fieldData, entity_id: entityId }
      : { [fieldType]: fieldData };

    try {
      // Use parseAsync for schemas with async refinements
      const parsedData = await schema.parseAsync(dataToValidate);
      validFields[fieldType] = parsedData[fieldType]; // Store only the value of the validated field
    } catch (error) {
      validationErrors.push({
        field: fieldType,
        message: (error as ZodError).errors.map((e) => e.message).join(", "),
      });
    }
  }

  return { validFields, validationErrors };
};

/**
 * Fetch professional tag data for an entity.
 *
 * @param {object} options - Options containing the entity_id and optional returnData flag.
 * @param {number} options.entity_id - The entity ID to query the professional tags.
 * @param {boolean} [options.returnData] - Flag to determine if the data should be returned.
 * @returns {Promise<any>} - Returns the professional tag data object or true/false based on the options.
 */
export const entityGetProTagData = async (
  options: Record<string, any>
): Promise<Record<string, any> | boolean> => {
  let resultData: Record<string, any> = {};

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

  // Check if options.returnData is true
  if (options.returnData) {
    return resultData;
  }

  // Return true if data was found, otherwise false
  return proTagsResult.length > 0;
};

/**
 * Retrieves the site name associated with a given entity ID.
 *
 * This function fetches the site name for the specified entity. Optional parameters
 * can be passed to customize the query behavior.
 *
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {Record<string, any>} [options={}] - Optional parameters to modify the query.
 * @returns {Promise<string>} - A promise that resolves to the site name as a string.
 */
export const entityGetSiteName = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<string> => {
  const sqlQuery = `
        SELECT username, showname
        FROM user_pass
        JOIN entity_resources ON user_pass.entity_id = entity_resources.entity_id
        WHERE user_pass.entity_id = ?
    `;
  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  if (result.length) {
    const dataInner = result[0];
    let name: string;

    if (dataInner.showname !== "yes") {
      name = dataInner.username;
    } else {
      const subQuery = `
                SELECT contact_first, contact_last
                FROM entities
                WHERE entity_id = ?
            `;
      const subResult = (await executeQuery(subQuery, "slave", [entityId])) as any[];

      if (subResult.length) {
        const dataSubInner = subResult[0];
        name = [dataSubInner.contact_first?.trim(), dataSubInner.contact_last?.trim()]
          .filter(Boolean)
          .join(" ");
      } else {
        return "";
      }
    }

    if (!name.trim()) {
      name = "n/a";
    }

    // if (!isUtf8(name)) {
    //     const utf8Result = await unicodeConvertText({
    //         text: name,
    //         languageGuess: await unicodeGuessEntitySourceLangs(entityId),
    //     });
    //     name = utf8Result.text;
    // }

    const cleanedName = prozHtmlSpecialChars(name);
    return cleanedName;
  }
  return "";
};

/**
 * Retrieves general information about a user based on the provided data object.
 *
 * This function gathers various details about a user entity, such as site name,
 * business membership status, professional certifications, and other attributes
 * depending on the specified flags in the `data` parameter. The information is
 * fetched asynchronously using multiple helper functions.
 * @async
 * @param {Record<string, any>} data
 * @returns {Promise<UserGeneralInfo>}
 */
export async function getUserGeneralInfo(data: Record<string, any>): Promise<UserGeneralInfo> {
  const entityId = data.entityId;
  const result: UserGeneralInfo = {
    entity_id: entityId,
    site_name: await entityGetSiteName(entityId),
    is_business_member: false,
    is_probono_volunteer: false,
    photo_url: data.hidePhoto ? null : await entityGetPhoto(entityId, "square"),
    company_name: data.showCompany ? await entityGetDatum(entityId, "agency_name") : null,
    is_professional_member: data.checkProMember
      ? await entityIsProfessionalMember(entityId)
      : false,
    is_secure_pro: data.showSecurePro ? await isEntitySecureProCardHolder(entityId) : false,
    is_commission_based: data.showCommissionBased
      ? await entityIsProfessionalMemberCommissionBased(entityId)
      : false,
    is_verified: data.showVid ? await entityGetDatum(entityId, "verification_seal_id") : null,
    is_certified_pro: data.showCertifiedPro ? await entityGetProTagData(entityId) : false,
    // vendor_icon: data.showManageVendorIcon ? await getManageVendorIcon(entityId) : null,
    // tagline: data.showTagline ? await getEntityTagline(entityId) : null,
    country: !data.showCountry ? await entityGetDatum(entityId, "contact_country_code") : null,
    // local_time: data.showLocalTime ? await getUserLocalTime(entityId) : null,
    // native_languages: data.showNativeLangs ? await getNativeLanguages(entityId) : null,
    account_type: data.showAccountType ? await entityGetDatum(entityId, "account_type") : null,
    // top_language_pair: data.showTopPair ? await getTopLanguagePair(entityId) : null,
  };

  return result;
}

/**
 * Check if the entity is a secure pro card holder.
 * @param {number} entityId - The ID of the entity.
 * @returns {Promise<boolean>} - Returns true if the entity is a secure pro card holder, otherwise false.
 */
export const isEntitySecureProCardHolder = async (entityId: number): Promise<boolean> => {
  if (entityId <= 0) {
    return false;
  }

  const sqlQuery = `
        SELECT COUNT(entity_security_procedures.entity_id) AS secure_pro_card_holder_count 
        FROM proz.entity_security_procedures 
        JOIN personal.prof_prefs ON entity_security_procedures.entity_id = prof_prefs.entity_id 
        WHERE entity_security_procedures.entity_id = ? 
        AND entity_security_procedures.security_procedures <> '' 
        AND entity_security_procedures.security_extra <> '' 
        AND prof_prefs.security_procedures_opt_out <> 'y' 
        AND prof_prefs.secure_pro_card_opt_out <> 'y'
    `;

  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  if (result.length > 0) {
    const data = result[0];
    return data.secure_pro_card_holder_count > 0;
  }

  return false;
};

/**
 * Fetches an access token using the provided email and password.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<string | null>} - The access token if successful, otherwise null.
 */
export const getAccessToken = async (email: string, password: string): Promise<string | null> => {
  const url = "https://www.proz.com/oauth/token/with-login";

  const headers = {
    Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const body = new URLSearchParams({
    client_id: "262738c1c5b233cb37af7271a77898053e8b929e",
    client_secret: "b837fb22d65de23406469a5abc839c398ff71dd4",
    scope:
      "public message.send message.read job.post job.quote user.email user.name profile.read profile.write kudoz.read kudoz.write kudoz.all availability quickpoll workstatus.post wiwo wiwo.post media.post follow userlist usernote action.read action.write action.all bb.all bb.read bb.write forum.all forum.read forum.write glossaries.all glossaries.read glossaries.write pools.all pools.read invoicing.read wwa.all wwa.post openid profile email interpreter.credentials pay.all pay.bulk",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error(`Failed to obtain token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
