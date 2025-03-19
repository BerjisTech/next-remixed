import { EntityTvCredentials } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import { dbCleanColumnName } from "../data/common";

export class TvService {
  /**
   * Retrieves the credentials that an entity has logged for a ProZ/TV event
   * @param entityId - The entity ID
   * @param criteria - Criteria for filtering TV credentials
   * @param options - Additional options (e.g., show_hidden)
   * @returns An array of TV credentials
   */
  public async getEntityTvCredentials(
    entityId: number,
    criteria: Record<string, any> = {},
    options: Record<string, any> = {}
  ): Promise<EntityTvCredentials[] | null> {
    const params: any[] = [entityId];
    let sql = `
            SELECT entity_tv_credentials.*, event_custom_url_slug, tv_events.title
            FROM proz.entity_tv_credentials 
            INNER JOIN proz.tv_events 
            ON entity_tv_credentials.tv_event_id = tv_events.tv_event_id 
            WHERE entity_id = ?
        `;

    if (!options.show_hidden) {
      sql += ' AND tv_events.visible = "y"';
    }

    Object.entries(criteria).forEach(([key, value]) => {
      sql += ` AND entity_tv_credentials.\`${dbCleanColumnName(key)}\` = ?`;
      params.push(value);
    });

    const rows = (await executeQuery(sql, "slave", params)) as any[];
    return rows.length > 0 ? rows : null;
  }

  /**
   * Get ProZ.tv presenter information
   * Matches the items of the Conferences presentations array with ProZ TV Presenter items,
   * as they are displayed in the same list on the user's profile.
   * @param entityId - Entity ID
   * @returns List of ProZ.tv presenter data
   */
  public async getProzTvPresenterData(entityId: number): Promise<any[] | null> {
    // Query the database if cache is not available
    const sql = `
        SELECT 
            tv_event_id AS event_id,
            title AS event_name,
            tv_program_item_id AS session_id,
            description AS session_name,
            1 AS tv_presenter
        FROM proz.tv_program_items
        WHERE presenter_id = ?
        `;

    const params = [entityId]; // Parameterized value
    const prozTvPresenter = (await executeQuery(sql, "slave", params)) as any[];

    return prozTvPresenter.length > 0 ? prozTvPresenter : null;
  }
}
