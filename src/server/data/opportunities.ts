import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Creates a new quote for a job based on the provided details.
 * @async
 * @param {any} job_id - The unique identifier of the job.
 * @param {any} entity_id - The unique identifier of the entity creating the quote.
 * @param {string} subject - The subject of the quote.
 * @param {string} description - The description of the quote.
 * @param {string} lang_pair - The language pair associated with the quote.
 * @param {any} ratePricing - The pricing details for the quote.
 * @param {string} rateUnit - The unit of measurement for the rate.
 * @returns {Promise<any>} - A promise that resolves to the result of creating the new quote.
 */
export const newQuote = async (
  job_id: any,
  entity_id: any,
  subject: string,
  description: string,
  lang_pair: string,
  ratePricing: any,
  rateUnit: string
): Promise<any> => {
  try {
    // Return null if filters are empty
    if (
      !subject ||
      !description ||
      !lang_pair ||
      !job_id ||
      !entity_id ||
      !ratePricing ||
      !rateUnit
    ) {
      return null;
    }

    // Prepare the base query
    let checkQueryToPreventDuplicateQueries = `
            SELECT * FROM job_bids WHERE job_id = ? AND bidder_id = ?
            `;
    let queryParams: any[] = [];

    queryParams.push(job_id);
    queryParams.push(entity_id);

    // Execute the query using the executeQuery function
    const check = (await executeQuery(
      checkQueryToPreventDuplicateQueries,
      "slave",
      queryParams
    )) as any[];

    // If there are results, don't allow the user to quote again
    if (check.length > 0) {
      return {
        message: "You have already quoted for this job",
      };
    }

    // Prepare the base query
    let query = `
            INSERT INTO job_bids
            ( job_id, bid_date, bidder_id, team_id, bid_type_id, short_description, long_description, bid_amount, pricing, pricing_amount, pricing_unit, pricing_currency, time_proposed_completion, timing, point_total, language_pair, status, time_accepted, accepted_by_eid, decline_comment, accept_comment, info_mask, sample_translation, show_name, show_phone, show_fax, show_addr, show_email, show_cv, hidden, api_client_id) 
             VALUES (?,now(),?,0,null,?,?,null,'',?,?,'usd','0000-00-00 00:00:00','',0,?,'undecided','0000-00-00 00:00:00',0,'','',0,null,'n','n','n','n','n','n','n',0)
        `;

    // re-initialize the array to hold query parameters
    queryParams = [];

    // Add the query parameters to the array
    queryParams.push(job_id);
    queryParams.push(entity_id);
    queryParams.push(subject);
    queryParams.push(description);
    queryParams.push(ratePricing);
    queryParams.push(rateUnit);
    queryParams.push(lang_pair);

    // Execute the query using the executeQuery function
    const result = await executeQuery(query, "master", queryParams);

    // Retrieve the last inserted ID
    const lastInsertIdQuery = `SELECT LAST_INSERT_ID() as id;`;
    const lastInsertResult = (await executeQuery(lastInsertIdQuery, "master")) as any[];

    // If there are results, return the first result; otherwise, null
    return result
      ? {
          message: "Quote added successfully",
          quote_id: lastInsertResult[0]?.id || null,
        }
      : {
          message: "Failed to add quote",
        };
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while quoting", error };
  }
};
