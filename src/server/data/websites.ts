import { WixWebsites } from "@/interfaces/websites";
import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Fetches a list of Wix websites associated with a specific entity.
 *
 * @param {number} entity_id - The unique identifier for the entity whose Wix websites are to be fetched.
 * @returns {Promise<WixWebsites[] | []>} A promise that resolves to an array of `WixWebsites` objects, or an empty array if no websites are found.
 */
export const entityWixWebsites = async (entity_id: number): Promise<WixWebsites[] | []> => {
  var websites: WixWebsites[] = [];
  var sql = `SELECT wix_account_id FROM proz.entity_wix_accounts WHERE entity_id = ? limit 1 ;`;
  var result = (await executeQuery(sql, "slave", [entity_id])) as any[];
  if (result.length > 0) {
    const sqlWebsites = `SELECT * FROM proz.entity_wix_websites WHERE owner_account_id = ? limit 1 ;`;
    websites = (await executeQuery(sqlWebsites, "slave", [result[0].wix_account_id])) as any[];
  }
  return websites;
};
