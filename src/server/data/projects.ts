import {
  DiscSpec,
  ProjectDiscSpec,
  ProjectHistory,
  ProjectHistoryData,
  ProjectHistoryFeedback,
  ProjectSummary,
} from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import { DisciplineService } from "../services/DisciplineLookup";
import { entityGetDiscSpecs } from "./discipline";

/**
 * Adds a specified number of months to a given date.
 * @param {Date} date - The date to which months will be added.
 * @param {number} months - The number of months to add to the date.
 * @returns {Date} - The new date with the added months.
 */
function addMonthsToDate(date: Date, months: number) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Retrieves the project histories for a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {boolean} [convertBuffer=false] - Optional flag to convert buffer data.
 * @returns {Promise<ProjectHistory[]>} - A promise that resolves to an array of project histories.
 */

export async function getProjectHistories(
  entityId: number,
  convertBuffer?: boolean
): Promise<ProjectHistory[]> {
  const sql = `
      SELECT * 
      FROM proz.project_histories 
      WHERE entity_id = ? 
      AND visible = "y" 
      ORDER BY date_completed DESC
    `;
  let result = (await executeQuery(sql, "slave", [entityId])) as any[];

  if (result && convertBuffer) {
    const bufferArr = ["short_description", "comment", "private_comment", "sample_text"];
    result = result.map((item: any) => {
      const convertedItem = { ...item };
      for (const key in convertedItem) {
        if (bufferArr.includes(key) && convertedItem[key] && Buffer.isBuffer(convertedItem[key])) {
          convertedItem[key] = convertedItem[key].toString("utf-8");
        }
      }
      return convertedItem;
    });
  }

  return result;
}

/**
 * Retrieves the disk specifications for the given project history IDs.
 * @async
 * @param {number[]} projectHistoryIds - An array of project history IDs.
 * @returns {Promise<ProjectDiscSpec[]>} - A promise that resolves to an array of project disk specifications.
 */
export async function getProjectHistoryDiscSpecs(
  projectHistoryIds: number[]
): Promise<ProjectDiscSpec[]> {
  if (!projectHistoryIds.length) {
    return [];
  }
  const sql = `
      SELECT * 
      FROM project_history_disc_specs 
      WHERE project_history_id IN (${projectHistoryIds})
    `;
  const result = (await executeQuery(sql, "slave")) as any[];
  return result;
}

/**
 * Retrieves the collaborators for a given project history ID.
 * @async
 * @param {number} projectHistoryId - The unique identifier of the project history.
 * @returns {Promise<any[]>} - A promise that resolves to an array of collaborators.
 */
export async function getProjectHistoryCollaborators(projectHistoryId: number): Promise<any[]> {
  const sql = `
      SELECT * 
      FROM proz.project_history_collaborators 
      WHERE project_history_id = ? 
      AND display_perm = "y" 
      AND (feedback = "1" OR feedback = "0")
    `;
  const result = (await executeQuery(sql, "slave", [projectHistoryId])) as any[];
  return result;
}

/**
 * Retrieves the pairs associated with the given project history IDs.
 * @async
 * @param {number[]} projectHistoryIds - An array of project history IDs.
 * @returns {Promise<any[]>} - A promise that resolves to an array of project history pairs.
 */
export async function getProjectHistoryPairs(projectHistoryIds: number[]): Promise<any[]> {
  if (!projectHistoryIds.length) {
    return [];
  }

  const sql = `
      SELECT * 
      FROM proz.project_history_pairs 
      WHERE language_pair NOT LIKE "..."
      AND project_history_id IN (${projectHistoryIds})
    `;
  const result = (await executeQuery(sql, "slave")) as any[];
  return result;
}

/**
 * Generates a project summary for the given entity ID.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<ProjectSummary | null>} - A promise that resolves to the project summary or `null` if no data is found.
 */
export async function makeProjectSummary(entityId: number): Promise<ProjectSummary | null> {
  const count = {
    total_with_feedback: 0,
    total_pos: 0,
    total_neg: 0,
    total_neu: 0,
    twelve_mo_total: 0,
    twelve_mo_pos: 0,
    twelve_mo_neg: 0,
    twelve_mo_neu: 0,
    project_total: 0,
    corr_total: 0,
    total_spec: 0,
    total_others: 0,
  };

  const languagesArr: Record<string, number> = {};
  const jobTypeArr: Record<string, number> = {};
  let specArr: Record<string, number> = {};
  let otherSpecArr: Record<string, number> = {};
  const projectHistories = await getProjectHistories(entityId);

  // If no project histories found, return the count with zero values
  if (projectHistories.length === 0) {
    return null;
  }

  const discLookupService = new DisciplineService();
  const specialtyDiscSpecs = (await entityGetDiscSpecs(entityId)) as DiscSpec[];

  const specialtyDiscSpecMap = new Map<number, DiscSpec>(
    specialtyDiscSpecs.map((spec): [number, DiscSpec] => [spec.disc_spec_id, spec])
  );

  // Map all history ids and get all in one query to save multiple queries @fawad
  const projectHistoryIds = projectHistories.map((history) => history.project_history_id);
  const discSpecs = await getProjectHistoryDiscSpecs(projectHistoryIds);
  const pairs = await getProjectHistoryPairs(projectHistoryIds);
  for (const history of projectHistories) {
    let phCorroborated = false;

    for (const discSpec of discSpecs) {
      if (history.visible === "y") {
        if (specialtyDiscSpecMap.has(discSpec.disc_spec_id)) {
          specArr[discSpec.disc_spec_id] = +1;
          count.total_spec++;
        } else {
          otherSpecArr[discSpec.disc_spec_id] = +1;
          count.total_others++;
        }
      }
    }

    if (history.visible === "y") {
      if (history.feedback !== 0) {
        count.total_with_feedback++;
        if (history.feedback === 1) count.total_pos++;
        else if (history.feedback === -1) count.total_neg++;
        else count.total_neu++;

        const twelveMonthsAgo = addMonthsToDate(new Date(), -12);
        if (twelveMonthsAgo < new Date(history.date_reviewed)) {
          count.twelve_mo_total++;
          if (history.feedback === 1) count.twelve_mo_pos++;
          else if (history.feedback === -1) count.twelve_mo_neg++;
          else count.twelve_mo_neu++;
        }
      }

      if (history.verified === "y") {
        phCorroborated = true;
        count.corr_total++;
      }

      if (!phCorroborated) {
        const collaborators = await getProjectHistoryCollaborators(history.project_history_id);
        if (collaborators.length > 0) count.corr_total++;
      }

      count.project_total++;

      for (const pair of pairs) {
        languagesArr[pair.language_pair] = (languagesArr[pair.language_pair] || 0) + 1;
      }

      jobTypeArr[history.job_type] = (jobTypeArr[history.job_type] || 0) + 1;
    }
  }

  // For specArr
  if (specArr) {
    for (const [id, count] of Object.entries(specArr)) {
      const name = await discLookupService.getDiscSpecName(id); // Fetch the name for the ID
      specArr[name] = count; // Replace ID with name
      delete specArr[id]; // Remove the original ID key
    }
  }

  // For otherSpecArr
  if (otherSpecArr) {
    for (const [id, count] of Object.entries(otherSpecArr)) {
      const name = await discLookupService.getDiscSpecName(id); // Fetch the name for the ID
      otherSpecArr[name] = count; // Replace ID with name
      delete otherSpecArr[id]; // Remove the original ID key
    }
  }

  return {
    ...count,
    languages: languagesArr,
    job_types: jobTypeArr,
    spec_arr: specArr,
    other_spec_arr: otherSpecArr,
  };
}

/**
 * Retrieves the project history data for the given entity ID.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<ProjectHistoryData>} - A promise that resolves to the project history data.
 */
export const getProjectHistory = async (entityId: number): Promise<ProjectHistoryData> => {
  const feedback: ProjectHistoryFeedback = { neutral: 0, positive: 0, negative: 0 };
  let numProjects = 0;
  let numCorroborated = 0;
  let numFeedback = 0;
  let positivePct = 0;
  const feedbackDetails: string[] = [];
  const collaboratorFeedback: ProjectHistoryFeedback = { neutral: 0, positive: 0, negative: 0 };
  let numCollaborationFeedback = 0;

  const historyQuery = `
    SELECT feedback, verified 
    FROM proz.project_histories 
    WHERE entity_id = ? 
    AND visible = 'y' 
    AND show_in_project_history = 'y'
    `;

  const historyResult = (await executeQuery(historyQuery, "slave", [entityId])) as any[];

  historyResult.forEach((row: any) => {
    if (row.feedback === "0") feedback.neutral++;
    else if (row.feedback === "1") feedback.positive++;
    else if (row.feedback === "-1") feedback.negative++;
    if (row.verified === "y") numCorroborated++;
    numProjects++;
  });

  // Calculate positive percentage
  numFeedback = feedback.neutral + feedback.positive + feedback.negative;
  if (numFeedback > 0) {
    positivePct = Math.floor((feedback.positive / numFeedback) * 1000) / 10;
  }

  // Query 2: Get the collaborator feedback from project history collaborators
  const collaboratorQuery = `
        SELECT project_history_collaborators.feedback
        FROM proz.project_history_collaborators
        JOIN proz.project_histories 
        ON project_history_collaborators.project_history_id = project_histories.project_history_id
        WHERE project_history_collaborators.display_perm = 'y'
        AND project_history_collaborators.entity_id = ?
        AND project_histories.visible = 'y'
        `;

  const collaboratorResult = (await executeQuery(collaboratorQuery, "slave", [entityId])) as any[];

  collaboratorResult.forEach((row: any) => {
    if (row.feedback === "0") collaboratorFeedback.neutral++;
    else if (row.feedback === "1") collaboratorFeedback.positive++;
    else if (row.feedback === "-1") collaboratorFeedback.negative++;
    numCollaborationFeedback++;
  });

  let projectHistories = await getProjectHistories(entityId, true);
  const projectHistoryIds = projectHistories.map((history) => history.project_history_id);
  const discSpecs = await getProjectHistoryDiscSpecs(projectHistoryIds);
  const pairs = await getProjectHistoryPairs(projectHistoryIds);

  const discLookupService = new DisciplineService();
  for (const history of projectHistories) {
    let relatedPairs: string[] = [];
    let relatedDiscSpecs: string[] = [];
    let discSpecsIds: string[] = [];

    // Populate relatedPairs from pairs if available
    if (pairs && pairs.length > 0) {
      relatedPairs = pairs
        .filter((pair) => pair.project_history_id === history.project_history_id) // Match project_history_id
        .map((pair) => pair.language_pair); // Extract the language pairs as an array of strings
    }

    // Populate relatedDiscSpecs if discSpecs are available
    if (discSpecs && discSpecs.length > 0) {
      // Filter the discSpecs for the current project history
      for (const discSpec of discSpecs.filter(
        (d) => d.project_history_id === history.project_history_id
      )) {
        // Fetch the name for the discipline specification
        discSpecsIds.push(discSpec.disc_spec_id.toString());
        const discSpecName = await discLookupService.getDiscSpecName(
          discSpec.disc_spec_id.toString()
        );
        relatedDiscSpecs.push(discSpecName); // Add the name of the discipline specification
      }
    }

    // Update the history with the related language pairs and discipline specs
    history.language_pairs = relatedPairs;
    history.disc_specs = relatedDiscSpecs;
    history.disc_specs_ids = discSpecsIds;
  }

  // Return the data structure
  return {
    projects: projectHistories,
    feedback,
    num_projects: numProjects,
    num_corroborated: numCorroborated,
    num_feedback: numFeedback,
    positive_pct: positivePct > 0 ? `${positivePct}%` : 0,
    collaborator_feedback: collaboratorFeedback,
    num_collaboration_feedback: numCollaborationFeedback,
  };
};
