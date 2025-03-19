import { DisciplineService } from "../services/DisciplineLookup";
import { executeQuery } from "../database/mysql/queryHelper";
import { capitalize, entityGetDatum } from "./common";
import { DiscSpec, ParentDiscipline } from "@/interfaces/account";
import { StringRepository } from "@/i18n/Translation";

/**
 * Get the specialty disciplines that a user has.
 *
 * @param {number} entityId - Entity ID.
 * @param {boolean} [type] - Optional filter by discipline type (specialty, working, interest).
 * @param {boolean} [justDiscIds] - Optional flag to return only discipline IDs.
 * @returns {Promise<SpecDiscipline[] | [] | number[]>} - Returns an array of specialty disciplines or discipline IDs, or an empty array if no disciplines are found.
 */
export const entityGetDiscSpecs = async (
  entityId: number,
  type?: "specialty" | "working" | "interest",
  justDiscIds: boolean = false
): Promise<DiscSpec[] | [] | number[]> => {
  const discLookupService = new DisciplineService();
  const generalDiscIds = await discLookupService.getDiscGenIds();

  if (!generalDiscIds || generalDiscIds.length === 0) return [];

  // Create the base SQL query
  let sqlQuery = `
        SELECT entity_disc_specs.disc_spec_id, disc_specs.disc_spec_name, entity_disc_specs.type, entity_disc_specs.sort_order, disc_specs.disc_gen_mask, entity_disc_specs.entity_disc_spec_id
        FROM proz.entity_disc_specs
        LEFT JOIN proz.disc_specs ON entity_disc_specs.disc_spec_id = disc_specs.disc_spec_id
        WHERE entity_disc_specs.entity_id = ?
    `;
  const params: any[] = [entityId];

  // Add filtering by type if provided
  if (type) {
    sqlQuery += ` AND entity_disc_specs.type = ?`;
    params.push(type);
  }

  // Order the results
  sqlQuery += `
        ORDER BY FIELD(entity_disc_specs.type, 'specialty', 'working', 'interest'), entity_disc_specs.sort_order ASC, entity_disc_specs.entity_disc_spec_id ASC
    `;

  // Execute the query
  const result = (await executeQuery(sqlQuery, "slave", params)) as any[];

  // Return an empty array if no results are found
  if (!result || result.length === 0) {
    return [];
  }

  // If only discipline IDs are requested, return an array of IDs
  if (justDiscIds) {
    return result.map((item: { disc_spec_id: number }) => item.disc_spec_id);
  }

  let sortOrder = 1;
  let lastType = "";
  const entityDiscSpecs: DiscSpec[] = [];

  for (const row of result) {
    const parentGenDiscs: ParentDiscipline[] = [];

    // Generate parent disciplines from the bitmask
    for (const discId of generalDiscIds) {
      if (row.disc_gen_mask & Math.pow(2, discId - 1)) {
        parentGenDiscs.push({
          disciplineId: discId,
          disciplineName: await discLookupService.getDiscGenName(discId.toString()),
        });
      }
    }

    // Reset the sort order when the type changes
    if (lastType !== row.type) {
      lastType = row.type;
      sortOrder = 1;
    }

    entityDiscSpecs.push({
      disc_spec_id: row.disc_spec_id,
      disc_spec_name: capitalize(row.disc_spec_name),
      type: row.type,
      sort_order: sortOrder,
      parent_gen_discs: parentGenDiscs,
    });

    sortOrder++;
  }

  return entityDiscSpecs;
};

/**
 * Get a member's fields of expertise (general).
 *
 * Members can enter general categories of expertise. Use this function
 * to pull an array of the ones they have selected. Note that by default
 * a profile includes all fields. (The function entityGetFields gets
 * detailed fields of expertise; this one gets general).
 *
 * @param {number} entityId - The member's entity_id.
 * @returns {number[] | null} - Returns an array of integers corresponding to general field codes or null on error.
 */
export const entityGetDisciplines = async (entityId: number): Promise<number[] | []> => {
  // Fetch the disciplines_mask from the database (assuming a function fetchEntityDatum exists)
  const disciplinesMask: number = await entityGetDatum(entityId, "disciplines_mask");
  const fieldsGeneral: number[] = [];
  for (let i = 1; i < 10; i++) {
    // As of mar 2005, there were 9 fields. But we might add more later.
    if (disciplinesMask & Math.pow(2, i - 1)) {
      fieldsGeneral.push(i);
    }
  }
  return fieldsGeneral ? fieldsGeneral : [];
};

/**
 * Get the localized human name of a broad field of expertise
 *
 * @param id The number of the field
 * @param lang The language the discipline name should be translated into (default is 'eng')
 * @param strings An instance of StringRepository for string retrieval
 * @return The name of the field or false if the ID is invalid
 */
export const getDisciplineName = async (
  id: number = 0,
  lang: string = "eng"
): Promise<string | false> => {
  const cacheKey = `disc_name_${id}_${lang}`;

  let name: string;
  const stringRepo = new StringRepository();
  if (id < 1) {
    name = await stringRepo.get("_broad_fields", "unspecified", lang);
  } else {
    name = await stringRepo.get("_broad_fields", id.toString(), lang); // Assuming get method takes string id
  }

  return name;
};

/**
 * Get an array of all detailed fields (disc_specs)
 *
 * @param lang The language into which to translate the field names (defaults to `siteLang`)
 * @param siteLang The site's default language (fallback if lang is not provided)
 * @returns An array of detailed fields (id => Translated name)
 */
export async function getSpecificDisciplines(
  lang?: string | undefined,
  siteLang: string = "eng"
): Promise<Record<string, string> | null> {
  // Use provided lang or fallback to siteLang
  const language = lang || siteLang;

  const query = `
        SELECT disc_spec_id, disc_spec_name
        FROM proz.disc_specs
        WHERE disc_spec_id = disc_counter_id -- only get "base" categories
        ORDER BY disc_spec_name
    `;

  // Execute the query and fetch results with caching enabled
  const result = await executeQuery(query, "slave");
  if (Array.isArray(result) && result.length > 0) {
    // Transform the result into a key-value object
    return result.reduce(
      (acc, row) => {
        acc[row.disc_spec_id] = row.disc_spec_name;
        return acc;
      },
      {} as Record<number, string>
    );
  }
  return null;
  // Return an empty array if no results or an error occurs
}

/**
 * Get an array of all broad disciplines (general fields).
 *
 * @param lang The language into which to translate the field names (defaults to `siteLang`).
 * @param siteLang The site's default language (fallback if lang is not provided).
 * @returns An object mapping discipline IDs to their localized names.
 */
export async function getGeneralDisciplines(
  lang?: string | undefined,
  siteLang: string = "eng"
): Promise<Record<string, string> | null> {
  // Validate the language or fallback to the site language
  const language = lang || siteLang;

  // Query to fetch discipline IDs and names
  const query = `
        SELECT discipline_id, discipline_name
        FROM proz.disciplines
    `;
  // Execute query to fetch disciplines
  const result = await executeQuery(query, "slave", [], { useCache: true });

  if (Array.isArray(result) && result.length > 0) {
    // Transform the result into a key-value object with localized names
    const disciplineNames = result.reduce(
      (acc, row) => {
        // const localizedDisciplineName = localize('_broad_fields', row.discipline_id, language);
        acc[row.discipline_id] = row.discipline_name;
        return acc;
      },
      {} as Record<string, string>
    );
    return disciplineNames;
  }
  return null;
}
