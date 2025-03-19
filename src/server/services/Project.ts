import { StringRepository } from "@/i18n/Translation";
import { DisciplineService } from "./DisciplineLookup";
import { Project } from "@/interfaces/account";
import { executeQuery, getInsertedId } from "../database/mysql/queryHelper";

export class ProjectService {
  protected strings: StringRepository;
  protected disciplineLookup: DisciplineService;
  public constructor() {
    this.strings = new StringRepository();
    this.disciplineLookup = new DisciplineService();
  }

  /**
   * Save a project to the database.
   *
   * @param {Project} project - The project entity containing data to save.
   * @returns {Promise<{ success: boolean; id: number }>} - The result of the operation.
   */
  async saveProject(project: Project): Promise<boolean> {
    project.disc_mask = await this.calculateDiscMask(project);
    const isUpdate = project.project_history_id && project.project_history_id > 0 ? true : false;

    // job_type
    // short_description
    // sample_text
    // visible
    // pricing_amount

    let sql = `
        ${isUpdate ? "UPDATE" : "INSERT INTO"} proz.project_histories
        SET 
            pwd = ?,
            date_added = ?,
            entity_id = ?,
            job_id = ?,
            agency_id = ?,
            poster_id = ?,
            show_outsourcer = ?,
            show_outsourcer_perm = ?,
            outsourcer_email = ?,
            visible = ?,
            feedback = ?,
            outsourcer_comment = ?,
            comment_reply = ?,
            date_reply = ?,
            date_completed = ?,
            duration_start = ?,
            duration_end = ?,
            needs_ver = ?,
            verified = ?,
            date_reviewed = ?,
            review_ip = ?,
            email_sent = ?,
            review_method = ?,
            outsourcer_name = ?,
            outsourcer_city = ?,
            outsourcer_country = ?,
            short_description = ?,
            job_type = ?,
            disc_mask = ?,
            sample_text = ?,
            volume_amount = ?,
            volume_unit = ?,
            pricing_amount = ?,
            pricing_unit = ?,
            pricing_currency = ?,
            outsourcer_paid = ?,
            date_due = ?,
            comment = ?,
            private_comment = ?,
            met_via = ?,
            sort_order = ?,
            pfe_need_id = ?,
            connect_project = ?,
            leave_wwa = ?,
            cat_tool = ?,
            business_id = ?,
            show_in_project_history = ?,
            pricing_total_amount = ?
            `;

    const params = [
      project.pwd || this.makePwd(),
      project.date_added || new Date().toISOString(),
      project.entity_id || 0,
      project.job_id || 0,
      project.agency_id || 0,
      project.poster_id || 0,
      project.show_outsourcer ? "y" : "n",
      project.show_outsourcer_perm ? "y" : "n",
      project.outsourcer_email || "",
      project.visible ? "y" : "n",
      project.feedback || null,
      project.outsourcer_comment || "",
      project.comment_reply || "",
      project.date_reply || "0000-00-00 00:00:00",
      project.date_completed || "0000-00-00 00:00:00",
      project.duration_start || "0000-00-00 00:00:00",
      project.duration_end || "0000-00-00 00:00:00",
      project.needs_ver ? "y" : "n",
      project.verified ? "y" : "n",
      project.date_reviewed || "0000-00-00 00:00:00",
      project.review_ip || "",
      project.email_sent || "",
      project.review_method || "bb_id",
      project.outsourcer_name || "",
      project.outsourcer_city || "",
      project.outsourcer_country || "",
      project.short_description || "",
      project.job_type || 0,
      project.disc_mask || 65535,
      project.sample_text || "",
      project.volume_amount || 0,
      project.volume_unit || "",
      project.pricing_amount || 0,
      project.pricing_unit || "",
      project.pricing_currency || "",
      project.outsourcer_paid || "n",
      project.date_due || "0000-00-00 00:00:00",
      project.comment || "",
      project.private_comment || "",
      project.met_via || 0,
      project.sort_order || "",
      project.pfe_need_id || 0,
      project.connect_project || "n",
      project.leave_wwa || "n",
      project.cat_tool || "",
      project.business_id || 0,
      project.show_in_project_history ? "y" : "n",
      project.pricing_total_amount || 0,
    ];

    if (isUpdate && project.project_history_id) {
      sql += `WHERE project_history_id = ?`;
      params.push(project.project_history_id);
    }

    const res = await executeQuery(sql, "master", params);
    // Append project id to update disciplines and pairs
    if (!isUpdate) {
      const projectId = getInsertedId(res);
      project.project_history_id = projectId as number; // Replace with appropriate helper.
    }

    await this.saveLanguagePairs(project);
    await this.saveSpecificDisciplines(project);
    return true;
  }

  /**
   *
   * @param project
   * @returns
   */
  protected async calculateDiscMask(project: Project): Promise<number> {
    let mask = 65535;

    // Assuming `disciplineLookup.getDiscGenIds()` is an asynchronous method
    const discGenIds = await this.disciplineLookup.getDiscGenIds();

    for (const discGenId of discGenIds) {
      if (project.general_disciplines && !project.general_disciplines.includes(discGenId)) {
        mask -= Math.pow(2, discGenId - 1);
      }
    }

    return mask;
  }

  /**
   *
   * @returns
   */
  protected makePwd(): string {
    let pwd = "";
    const allow = "abcdefghijkmnpqrstuvwxyz234567891ABCDEFGHIJKLMNPQRSTUVWXYZ";

    // Using Math.random() for randomness
    for (let i = 0; i < 4; i++) {
      pwd += allow.charAt(Math.floor(Math.random() * allow.length));
    }

    return pwd;
  }

  /**
   * Save specific disciplines for a project.
   * Deletes existing disciplines and inserts new ones.
   * @param project - The project containing the disciplines to save.
   */
  public saveSpecificDisciplines = async (project: Project): Promise<void> => {
    // Step 1: Delete all existing discipline specifications for the project
    const deleteQuery = `
            DELETE FROM proz.project_history_disc_specs
            WHERE project_history_id = ?;
        `;
    await executeQuery(deleteQuery, "master", [project.project_history_id]);

    // Step 2: Insert new discipline specifications
    if (project.specific_disciplines) {
      const insertQuery = `
            INSERT INTO proz.project_history_disc_specs (project_history_id, disc_spec_id)
            VALUES (?, ?);
        `;
      for (const discSpecId of project.specific_disciplines) {
        await executeQuery(insertQuery, "master", [project.project_history_id, discSpecId]);
      }
    }
  };

  /**
   * Save language pairs for a project.
   * Parses, cleans, and inserts language pairs into the database.
   * @param project - The project containing the language pairs to save.
   */
  public saveLanguagePairs = async (project: Project): Promise<void> => {
    // Delete all existing project_history_pairs for the project
    const deleteQuery = `
                DELETE FROM proz.project_history_pairs
                WHERE project_history_id = ?;
                `;
    await executeQuery(deleteQuery, "master", [project.project_history_id]);

    // TODO for now one pair is added for multiple we need array and optimize query to insert once all records
    // const projectPairs = Array.from(
    //     new Set(
    //         project.language_pairs
    //             .split(',')
    //             .map(pair => pair.trim()) // Trim each pair
    //             .filter(pair => pair.length > 0) // Remove empty pairs
    //     )
    // );

    // Step 2: Insert each language pair

    if (project.language_pairs.length > 0) {
      // If single pair and string then convert to array other wise use array to iterate
      project.language_pairs = !Array.isArray(project.language_pairs)
        ? (project.language_pairs as string).split(",")
        : project.language_pairs;
      const insertQuery = `
            INSERT INTO proz.project_history_pairs (project_history_id, language_pair)
            VALUES (?, ?);
            `;
      for (const pair of project.language_pairs) {
        await executeQuery(insertQuery, "master", [project.project_history_id, pair]);
      }
    }
  };
}
