import { executeQuery } from "../database/mysql/queryHelper";
import { entityGetDatum } from "./common";

/**
 * Retrieves profile completeness data for a given entity ID and account type.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {number} [accountType] - An optional account type to filter the completeness data.
 * @returns {Promise<Record<string, string>>} - A promise that resolves to a record containing profile completeness data.
 */
export async function entityGetProfileCompletenessData(
  entityId: number,
  accountType?: number
): Promise<Record<string, string>> {
  // If accountType is not provided, fetch it from the entity data
  if (!accountType) {
    accountType = await entityGetDatum(entityId, "account_type");
  }

  // Get the account field completeness based on account type
  const accountFieldCompleteness = getAccountFieldCompleteness(accountType as number);

  // Create a default object dynamically using the values from accountFieldCompleteness
  const defaultObj: { [key: string]: string } = accountFieldCompleteness.reduce(
    (acc, field) => {
      acc[field] = "n"; // Set the default value 'n' for each field
      return acc;
    },
    {} as { [key: string]: string }
  );

  // Construct the SQL query to get profile completeness data
  const sqlQuery = `
        SELECT ${accountFieldCompleteness[0]}, ${accountFieldCompleteness[1]}
        FROM proz.profile_completeness
        WHERE entity_id = ?
    `;

  // Execute the query and fetch the rows
  const rows = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  // Return the raw query result (the rows)
  return rows.length > 0 ? rows[0] : defaultObj;
}

/**
 * Retrieves the fields that need to be completed based on the account type.
 * @param {number} accountType - The type of account to check for completeness.
 * @returns {string[]} - An array of field names that need to be completed for the given account type.
 */
function getAccountFieldCompleteness(accountType: number): string[] {
  let fields: string[] = [];

  // Account types: 1=agency, 2=freelancer, 3=both, 4=neither, 5=student, 6=end_customer
  if (accountType === 1) {
    fields = ["all_req_corp_fields", "all_enc_corp_fields"];
  } else {
    fields = ["all_req_pro_fields", "all_enc_pro_fields"];
  }

  return fields;
}
