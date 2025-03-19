import { executeQuery } from "../database/mysql/queryHelper";
import {
  entityGetNativeLangCodes,
  getHasBeenNlvVerified,
  getNlvSubmissionStatus,
} from "./nativeLanguage";
import { LanguageService } from "../services/Language";

/**
 * Get languages known for a given entity.
 * @param {number} entityId - Entity ID
 * @param {object} options - Additional options for the query
 * @returns {Promise<object | null>} - Returns an object with languages known or null on error
 */
export const profileGetLanguagesKnown = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<object> => {
  // Get native languages
  const nativeLangs: string[] | null = await entityGetNativeLangCodes(entityId);
  // Get languages known
  const sqlKnown = `
            SELECT * 
            FROM proz.entity_languages_known 
            WHERE entity_id = ? 
            ORDER BY level DESC, entity_languages_known_id ASC
        `;
  const knownRows: Record<string, any>[] = (await executeQuery(sqlKnown, "slave", [
    entityId,
  ])) as any[];
  const result: { [key: string]: any } = {};

  // Loop through the results twice, so we can put the native languages on top.
  for (const row of knownRows) {
    if (Array.isArray(nativeLangs) && nativeLangs.includes(row.language_code)) {
      row.is_native = true;

      // Await the results of the async functions
      row.is_verified = Boolean(await getHasBeenNlvVerified(entityId, row.language_code));
      row.nlv_status = await getNlvSubmissionStatus(entityId, row.language_code);
      result[row.language_code] = row;
    }
  }

  knownRows.forEach((row) => {
    if (!Array.isArray(nativeLangs) || !nativeLangs.includes(row.language_code)) {
      result[row.language_code] = row;
    }
  });

  // Get variants
  const sqlVariants = `
            SELECT * 
            FROM proz.entity_languages_known_variants 
            WHERE entity_id = ? 
            ORDER BY familiarity
        `;
  const variantRows: Record<string, any>[] = (await executeQuery(sqlVariants, "slave", [
    entityId,
  ])) as any[];

  variantRows.forEach((row) => {
    if (result[row.language_code]) {
      if (!Array.isArray(result[row.language_code].variants)) {
        result[row.language_code].variants = {};
      }
      result[row.language_code].variants[row.variant_code] = row;
    }
  });
  return Object.keys(result).length > 0 ? result : {};
};

/**
 * Fetch the language pairs of a user in sort_order
 * @param {number} entityId - The entity ID.
 * @returns {Promise<object | null>} - Returns an object with language pairs as keys or null if no data is found.
 */
export const entityGetPairsData = async (entityId: number): Promise<object | null> => {
  const sqlQuery = `
        SELECT * 
        FROM proz.entity_languages 
        WHERE entity_id = ? 
        ORDER BY sort_order ASC;
        `;

  const results = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  const data =
    results.length > 0
      ? results.reduce((acc: Record<string, any>, row: any) => {
          acc[row.language_pair] = row;
          return acc;
        }, {})
      : null;

  return data;
};

/**
 * Process language pairs and organize data based on entity pairs.
 * @param {number} entityId - The entity ID.
 * @returns {Promise<object | null>} - Returns structured data containing pairs, working pairs, languages, and other details, or null if no pairs exist.
 */
export const entityGetPairs = async (entityId: number): Promise<Record<string, any> | null> => {
  const pairsData = await entityGetPairsData(entityId);

  if (!pairsData) {
    return null;
  }

  const pairs: string[] = [];
  const workingPairs: string[] = [];
  const workingPairsTop3: string[] = [];
  const languagesSource: string[] = [];
  const languagesTarget: string[] = [];
  let count = 0;

  Object.values(pairsData).forEach((row: any) => {
    pairs.push(row.language_pair);

    if (row.show_in_profile === "yes") {
      workingPairs.push(row.language_pair);

      if (count < 3) {
        workingPairsTop3.push(row.language_pair);
      }
    }

    const [source, target] = row.language_pair.split("_");
    if (!languagesSource.includes(source)) {
      languagesSource.push(source);
    }
    if (!languagesTarget.includes(target)) {
      languagesTarget.push(target);
    }

    count++;
  });

  const languages = Array.from(new Set([...languagesSource, ...languagesTarget]));

  const data = {
    pairs,
    workingPairs,
    workingPairsTop3,
    languagesSource,
    languagesTarget,
    languages,
  };

  return data || null;
};

/**
 * Get language pair options for a given entity.
 * @param {number} entityId - The entity ID.
 * @returns {Promise<object | null>} - Returns an object mapping language pairs to their descriptions or null if no pairs are found.
 */
export const thisGetPairOptions = async (entityId: number): Promise<object | null> => {
  const langService = new LanguageService();
  const pairsData = await entityGetPairs(entityId);

  const pairOptions: Record<string, string> | null = {};
  for (const row of pairsData?.pairs) {
    // pairOptions[row] = await langService.getLanguagePair(row);
    pairOptions[row] = "";
  }

  return pairOptions ?? null;
};
