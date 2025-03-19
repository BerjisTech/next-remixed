import { PortfolioEntry } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import { DisciplineService } from "../services/DisciplineLookup";
import { convertBufferToStr } from "./common";

/**
 * Retrieves translation samples from the user's portfolio based on the given entity ID.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<PortfolioEntry[] | null>} - A promise that resolves to an array of portfolio entries or `null` if no samples are found.
 */
export const getUserTranslationSamples = async (
  entityId: number
): Promise<PortfolioEntry[] | null> => {
  const sqlQuery = `
      SELECT translation_id, language_pair, title, source_text, target_text, discipline_id, detailed_field, content_type
      FROM proz.translations
      WHERE entity_id = ?
      ORDER BY sort_order;
    `;

  const translations = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  if (translations.length === 0) {
    return null;
  }

  const disciplineService = new DisciplineService();
  const portfolioEntries: PortfolioEntry[] = [];
  for (const row of translations) {
    const disciplineId = row.discipline_id
      ? await disciplineService.getDiscGenName(row.discipline_id)
      : undefined;
    const detailedField = row.detailed_field
      ? await disciplineService.getDiscSpecName(row.detailed_field)
      : undefined;

    const sourceTxt = convertBufferToStr(row.source_text);
    const targetTxt = convertBufferToStr(row.target_text);

    portfolioEntries.push({
      translation_id: row.translation_id,
      language_pair: row.language_pair,
      source_text: sourceTxt,
      target_text: targetTxt,
      title: row.title,
      general_field: disciplineId,
      general_field_id: row.discipline_id,
      detailed_field: detailedField,
      detailed_field_id: row.detailed_field,
    });
  }

  return portfolioEntries;
};

/**
 * Adds a translation sample to the user's portfolio.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {any} fieldData - The data for the translation sample to be added.
 * @returns {Promise<any>} - A promise that resolves to the result of the add operation.
 */
export const addUserTranslationSample = async (entityId: number, fieldData: any): Promise<any> => {
  const rowExists = fieldData.translation_id && fieldData.translation_id > 0;

  console.log(fieldData);
  // Base SQL query
  const baseQuery = rowExists
    ? `UPDATE proz.translations SET 
            title = ?, 
            language_pair = ?, 
            source_text = ?, 
            target_text = ?, 
            detailed_field = ?, 
            discipline_id = ?, 
            content_type = ? 
           WHERE entity_id = ? AND translation_id = ?`
    : `INSERT INTO proz.translations 
           (title, language_pair, source_text, target_text, detailed_field, discipline_id, content_type, entity_id) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  // Query parameters
  const queryParams = rowExists
    ? [
        fieldData.title,
        fieldData.language_pair,
        fieldData.source_text,
        fieldData.target_text,
        fieldData.specific_field,
        fieldData.discipline_id,
        fieldData.content_type,
        entityId,
        fieldData.translation_id,
      ]
    : [
        fieldData.title,
        fieldData.language_pair,
        fieldData.source_text,
        fieldData.target_text,
        fieldData.specific_field,
        fieldData.discipline_id,
        fieldData.content_type,
        entityId,
      ];

  const result = await executeQuery(baseQuery, "master", queryParams); // Assuming 'master' DB for writes
  return result;
};
