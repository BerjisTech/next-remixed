import { StringRepository } from "@/i18n/Translation";
import { Wiwo } from "@/interfaces/wiwo";
import { executeQuery } from "../database/mysql/queryHelper";
import MediaService from "./Media/MediaService";

export class WiwoService {
  protected strings: StringRepository;

  public constructor() {
    this.strings = new StringRepository();
  }

  /**
   * Escapes a string to prevent SQL injection.
   * @param value The value to escape.
   * @returns The escaped string.
   */
  private escapeString(value: string): string {
    // Simple SQL escape implementation (you may need a more robust solution)
    return `'${value.replace(/'/g, "''")}'`;
  }

  /**
   * Fetch Wiwos based on criteria and options.
   * @param {Record<string, any>} criteria - Filtering criteria
   * @param {Record<string, any>} options - Options for fetching Wiwos
   * @returns {Promise<Wiwo[]>} - Array of Wiwo objects
   */
  public async getWiwos(
    criteria: Record<string, any> = {},
    options: Record<string, any> = {}
  ): Promise<Wiwo[]> {
    // Fetch the data
    const data = await this.getWiwoData(criteria, options);

    // Initialize services
    // const projectService = new ProjectService();
    // const currencyConverter = new CurrencyConverter();

    // Initialize Wiwos array
    const wiwos: Wiwo[] = [];

    for (const row of data) {
      let project = null;

      // // Handle project histories if not ignored
      // if (!options.ignore_project_histories && row.project_history_id) {
      //     project = await projectService.getProjectById(Number(row.project_history_id));
      //     row.payment_amount_usd = project.pricing_currency
      //         ? parseFloat(
      //             currencyConverter.convert(
      //                 project.pricing_total_amount,
      //                 project.pricing_currency,
      //                 'usd'
      //             ).toFixed(2)
      //         )
      //         : 0;
      // }

      // Create a Wiwo instance and push to the array
      wiwos.push(row as Wiwo);
    }

    return wiwos;
  }

  /**
   * Fetch Wiwo data from the database with related details.
   * @param {Record<string, any>} criteria - Filtering criteria
   * @param {Record<string, any>} options - Options for fetching data
   * @returns {Promise<Record<string, any>[]>} - Wiwo data with related details
   */
  public async getWiwoData(
    criteria: Record<string, any> = {},
    options: Record<string, any> = {}
  ): Promise<Record<string, any>[]> {
    const start = options.start || 0;
    const limit = options.limit || 50;

    // Generate common SQL and params
    const { sql: commonSql, params } = this.getWiwoCommonSql(criteria, options);

    // Construct the SQL query
    const sqlQuery = `
        SELECT wiwos.* 
        ${commonSql}
        ORDER BY time DESC 
        LIMIT ?, ?
        `;

    // Add pagination params
    params.push(start, limit);

    // Determine the database to use
    const dbName = options.use_master_db ? "master" : "slave";

    // Execute the main query
    const rows = (await executeQuery(sqlQuery, dbName, params)) as any[];

    const data: Record<string, any> = {};

    // Organize rows by `wiwo_id`
    rows.forEach((row: any) => {
      data[row.wiwo_id] = row;
    });

    const wiwoIds = Object.keys(data).map(Number);

    if (wiwoIds.length > 0) {
      // Remove pagination options for other queries
      const { start, limit, ...remainingOptions } = options;

      // Fetch replies data
      const replies = await this.getRepliesData({ wiwo_ids: wiwoIds }, remainingOptions);
      replies.forEach((reply: any) => {
        if (!data[reply.wiwo_id].replies) {
          data[reply.wiwo_id].replies = [];
        }
        data[reply.wiwo_id].replies.push(reply);
      });

      // Fetch media data
      const mediaService = new MediaService();
      const mediaIds = Array.from(
        new Set(
          Object.values(data)
            .map((wiwoData: any) => wiwoData.image_media_id)
            .filter((id: number) => id)
        )
      );

      if (mediaIds.length > 0) {
        const mediaData = await mediaService.getMediaDataByIds(mediaIds, options.use_master_db);
        Object.values(data).forEach((wiwoData: any) => {
          if (wiwoData.image_media_id && mediaData[wiwoData.image_media_id]) {
            wiwoData.image_media = mediaData[wiwoData.image_media_id];
          }
        });
      }
    }

    return Object.values(data);
  }

  /**
   * Fetches reply data based on criteria and options.
   * @param criteria Object containing filtering criteria.
   * @param options Object containing additional options.
   * @returns Promise resolving to the fetched replies data.
   */
  public async getRepliesData(
    criteria: Record<string, any>,
    options: Record<string, any> = {}
  ): Promise<any[]> {
    const orderBy = options.order_by || "time";
    const orderDir =
      (options.order_dir || "asc").toString().toLowerCase() === "desc" ? "DESC" : "ASC";
    const start = options.start || 0;
    const limit = options.limit || null;

    // Destructure the SQL and params from the common SQL generator function
    const { sql: commonSql, params } = this.getRepliesCommonSql(criteria, options);

    // Construct the complete SQL query
    let sql = `SELECT wiwo_replies.* ${commonSql}`;
    sql += `ORDER BY "${orderBy}" "${orderDir}" `;
    if (limit) {
      sql += `LIMIT ?, ? `;
      params.push(start, limit);
    }

    // Decide which database to query
    const dbName = options.use_master_db ? "master" : "slave";

    // Execute the query using the helper function
    return (await executeQuery(sql, dbName, params)) as any[];
  }

  /**
   * Generates the common SQL query for fetching replies.
   * @param criteria Criteria to filter the replies.
   * @param options Additional options for the query, including sorting and pagination.
   * @returns An object containing the SQL query string and the parameters to bind.
   */
  protected getRepliesCommonSql(
    criteria: Record<string, any> = {},
    options: Record<string, any> = {}
  ): { sql: string; params: any[] } {
    const params: any[] = [];

    let wiwoIds: number[] = [];
    if (Array.isArray(criteria.wiwo_ids) && criteria.wiwo_ids.length > 0) {
      wiwoIds = criteria.wiwo_ids.map((id: any) => parseInt(id, 10));
    }
    if (criteria.wiwo_id) {
      wiwoIds.push(parseInt(criteria.wiwo_id, 10));
    }

    let replyIds: number[] = [];
    if (Array.isArray(criteria.reply_ids) && criteria.reply_ids.length > 0) {
      replyIds = criteria.reply_ids.map((id: any) => parseInt(id, 10));
    }
    if (criteria.reply_id) {
      replyIds.push(parseInt(criteria.reply_id, 10));
    }

    let sql = "FROM proz.wiwo_replies ";

    if (Array.isArray(criteria.membership_type) && criteria.membership_type.length > 0) {
      const membershipTypes = criteria.membership_type.map((type: string) =>
        this.escapeString(type)
      );
      sql +=
        "JOIN proz.entity_memberships ON wiwo_replies.entity_id = entity_memberships.entity_id ";
      sql += "AND NOW() BETWEEN time_start AND time_end ";
      sql += "AND membership_type IN (" + membershipTypes.join(", ") + ") ";
    }

    sql += "WHERE 1 ";

    if (wiwoIds.length > 0) {
      sql += `AND wiwo_id IN (${wiwoIds}) `;
    }
    if (replyIds.length > 0) {
      sql += `AND wiwo_reply_id IN (${replyIds}) `;
    }
    if (criteria.entity_id) {
      sql += "AND entity_id = ? ";
      params.push(criteria.entity_id); // Add entity_id to params
    }
    if (criteria.message_contains) {
      sql += "AND message LIKE ? ";
      params.push(`%${criteria.message_contains}%`); // Add message_contains value to params
    }
    if (criteria.message_language) {
      sql += "AND message_language = ? ";
      params.push(criteria.message_language); // Add message_language value to params
    }
    if (!options.include_hidden) {
      sql += 'AND hidden = "n" ';
    }
    if (criteria.min_time) {
      sql += "AND time >= ? ";
      params.push(criteria.min_time); // Add min_time value to params
    }

    return { sql, params };
  }

  /**
   * Generates the common SQL query and its parameters.
   * @param criteria Object containing filter criteria.
   * @param options Object containing additional options.
   * @returns SQL string and an array of parameters.
   */
  public getWiwoCommonSql(
    criteria: Record<string, any>,
    options: Record<string, any>
  ): { sql: string; params: any[] } {
    const params: any[] = [];

    // Assemble a list of WIWO IDs to filter by, if requested.
    let wiwoIds: number[] = [];
    if (criteria.wiwo_ids) wiwoIds = criteria.wiwo_ids;
    if (criteria.wiwo_id) wiwoIds.push(criteria.wiwo_id);
    wiwoIds = wiwoIds.filter((id) => Number.isInteger(id));

    let sql = `FROM proz.wiwos `;

    if (!options.ignore_project_histories) {
      sql += `
                LEFT JOIN proz.project_histories ON wiwos.project_history_id = project_histories.project_history_id 
                LEFT JOIN project_history_pairs ON wiwos.project_history_id = project_history_pairs.project_history_id 
            `;
    }

    if (criteria.is_member || !!criteria.payment_status) {
      sql += `
                JOIN proz.entity_memberships 
                ON wiwos.entity_id = entity_memberships.entity_id 
                AND NOW() BETWEEN time_start AND time_end 
            `;
    }

    if (criteria.membership_types) {
      sql += `
                JOIN proz.entity_memberships 
                ON wiwos.entity_id = entity_memberships.entity_id 
                AND NOW() BETWEEN time_start AND time_end 
                AND membership_type IN (${criteria.membership_types}) 
            `;
    }

    sql += `WHERE 1 `;

    if (criteria.representative_term) {
      sql += `AND project_histories.sample_text LIKE ? `;
      params.push(`%${criteria.representative_term}%`);
    }

    if (wiwoIds.length) {
      sql += `AND wiwo_id IN (${wiwoIds}) `;
    }

    if (criteria.entity_id) {
      sql += `AND wiwos.entity_id = ? `;
      params.push(criteria.entity_id);
    }

    if (criteria.message_contains) {
      sql += `AND message LIKE ? `;
      params.push(`%${criteria.message_contains}%`);
    }

    if (criteria.min_time) {
      sql += `AND time >= ? `;
      params.push(criteria.min_time);
    }

    if (criteria.max_time) {
      sql += `AND time <= ? `;
      params.push(criteria.max_time);
    }

    if (!options.include_hidden) {
      sql += `AND hidden = 'n' `;
    }

    if (criteria.public !== undefined) {
      sql += `AND public = ? `;
      params.push(criteria.public ? "y" : "n");
    }

    if (!options.include_nonpublic) {
      sql += `AND public = 'y' `;
    } else if (options.eid_v) {
      sql += `AND (public = 'y' OR wiwos.entity_id = ?) `;
      params.push(options.eid_v);
    }

    if (criteria.message_language) {
      sql += `AND message_language = ? `;
      params.push(criteria.message_language);
    }

    if (criteria.source_language && criteria.target_language) {
      sql += `AND project_history_pairs.language_pair = ? `;
      params.push(`${criteria.source_language}_${criteria.target_language}`);
    }

    if (criteria.from_platform) {
      sql += `AND from_platform = ? `;
      params.push(criteria.from_platform);

      if (criteria.platform_specific_id) {
        sql += `AND platform_specific_id = ? `;
        params.push(criteria.platform_specific_id);
      }
    }

    if (criteria.min_wordcount) {
      sql += `AND project_histories.wordcount >= ? `;
      params.push(criteria.min_wordcount);
    }

    if (criteria.discipline_contains) {
      sql += `AND discipline LIKE ? `;
      params.push(`%${criteria.discipline_contains}%`);
    }

    if (criteria.min_percent_complete) {
      sql += `AND percent_complete >= ? `;
      params.push(criteria.min_percent_complete);
    }

    if (criteria.max_percent_complete) {
      sql += `AND percent_complete <= ? `;
      params.push(criteria.max_percent_complete);
    }

    if (criteria.has_image !== undefined) {
      sql += `AND image_media_id ${criteria.has_image ? ">" : "="} 0 `;
    }

    if (criteria.payment_status === "paid") {
      sql += `AND (paid_cash > 0 OR paid_cash_EURO > 0) `;
    }

    if (criteria.payment_status === "free") {
      sql += `AND (paid_cash <= 0 AND paid_cash_EURO <= 0) AND payment_type != 'commission_based' `;
    }

    if (criteria.payment_status === "commission_based") {
      sql += `AND payment_type = 'commission_based' `;
    }

    if (criteria.excluded_entities_ids) {
      sql += `AND wiwos.entity_id NOT IN (${criteria.excluded_entities_ids}) `;
    }

    return { sql, params };
  }
}
