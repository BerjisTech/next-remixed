// src/server/database/mysql/polls.php

import { executeQuery, getInsertedId } from "@/server/database/mysql/queryHelper";
import { FeaturedPoll, PollData, PollIndex } from "@/interfaces/polls";

/**
 * Create a new poll
 * -- {{ Inserts a new poll into the poll_index table }}
 * -- Author : @BerjisTech <ben@proz.com>
 * -- Date : 2025-02-28
 */
export const createPoll = async (
  poll: Omit<PollIndex, "poll_id" | "time_created" | "time_updated">
): Promise<number> => {
  const sql = `
    /* Inserts a new poll into the poll_index table */
    -- {{ Inserts a new poll into the poll_index table }}
    -- Author : @BerjisTech <ben@proz.com>
    -- Date : 2025-02-28
    INSERT INTO pollphp.poll_index 
      (question, timestamp, status, logging, exp_time, expire, comments, entity_id, can_be_featured, vetted, sort_order, link_url, credit_author, permission, time_created, time_updated, updated_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)
  `;
  const params = [
    poll.question,
    poll.timestamp,
    poll.status,
    poll.logging,
    poll.exp_time,
    poll.expire,
    poll.comments,
    poll.entity_id,
    poll.can_be_featured,
    poll.vetted,
    poll.sort_order,
    poll.link_url,
    poll.credit_author,
    poll.permission,
    poll.updated_by,
  ];
  const result = await executeQuery(sql, "master", params);
  return getInsertedId(result) as number;
};

/**
 * Read a poll by ID
 * -- {{ Retrieves a poll from poll_index table by poll_id }}
 * -- Author : @BerjisTech <ben@proz.com>
 * -- Date : 2025-02-28
 */
export const getPollById = async (pollId: number): Promise<PollIndex | null> => {
  const sql = `
    /* Retrieves a poll from poll_index table by poll_id */
    -- {{ Retrieves a poll from poll_index table by poll_id }}
    -- Author : @BerjisTech <ben@proz.com>
    -- Date : 2025-02-28
    SELECT * FROM pollphp.poll_index WHERE poll_id = ?
  `;
  const rows = (await executeQuery(sql, "slave", [pollId])) as any[];
  return rows.length ? (rows[0] as PollIndex) : null;
};

/**
 * Get current featured poll
 * -- {{ Retrieves the current featured poll that hasn't expired }}
 * -- Author : brian-proz <brian@proz.com>
 * -- Date : 2025-03-07
 */
// export const getCurrentFeaturedPoll = async (): Promise<
//   (FeaturedPoll & { pollData: PollData[]; totalVotes: number }) | null
// > => {
//   const sql = `
//       SELECT pi.*,
//              fp.expiration_date,
//              fp.topic_id,
//              pd.id as      data_id,
//              pd.option_id,
//              pd.option_text,
//              pd.color,
//              pd.votes,
//              SUM(pd.votes) OVER (PARTITION BY pi.poll_id) as total_votes
//       FROM pollphp.featured_poll fp
//                INNER JOIN pollphp.poll_index pi ON fp.poll_id = pi.poll_id
//                LEFT JOIN pollphp.poll_data pd ON pi.poll_id = pd.poll_id
//       WHERE fp.poll_id = (SELECT poll_id
//                           FROM pollphp.featured_poll
//                           ORDER BY date_set DESC
//           LIMIT 1
//           )
//         AND (fp.expiration_date IS NULL
//          OR NOW()
//           < fp.expiration_date);
//   `;
//
//   const rows = (await executeQuery(sql, "slave", [])) as any[];
//
//   if (!rows.length) return null;
//
//   const firstRow = rows[0];
//   const { data_id, option_id, option_text, color, votes, total_votes, ...featuredPoll } = firstRow;
//
//   const poll: FeaturedPoll & { pollData: PollData[]; totalVotes: number } = {
//     ...featuredPoll,
//     pollData: rows
//       .map((row) => ({
//         id: row.data_id,
//         poll_id: row.poll_id,
//         option_id: row.option_id,
//         option_text: row.option_text,
//         color: row.color,
//         votes: row.votes,
//       }))
//       .filter((data) => data.id !== null),
//     totalVotes: total_votes,
//   };
//
//   return poll;
// };
export const getCurrentFeaturedPoll = async (): Promise<
  (FeaturedPoll & { pollData: PollData[]; totalVotes: number }) | null
> => {
  const sql = `
      SELECT pi.*,
             fp.expiration_date,
             fp.topic_id,
             pd.id as data_id,
             pd.option_id,
             pd.option_text,
             pd.color,
             pd.votes,
             SUM(pd.votes) OVER (PARTITION BY pi.poll_id) as total_votes
      FROM pollphp.featured_poll fp
               INNER JOIN pollphp.poll_index pi ON fp.poll_id = pi.poll_id
               LEFT JOIN pollphp.poll_data pd ON pi.poll_id = pd.poll_id
      WHERE fp.poll_id = (SELECT poll_id
                          FROM pollphp.featured_poll
                          ORDER BY date_set DESC
                          LIMIT 1)
        AND (fp.expiration_date IS NULL OR NOW() < fp.expiration_date);
  `;

  const rows = (await executeQuery(sql, "slave", [])) as any[];

  if (!rows.length) return null;

  const firstRow = rows[0];
  const { data_id, option_id, option_text, color, votes, total_votes, ...featuredPoll } = firstRow;

  const poll: FeaturedPoll & { pollData: PollData[]; totalVotes: number } = {
    ...featuredPoll,
    pollData: rows
      .map((row) => ({
        id: row.data_id,
        poll_id: row.poll_id,
        option_id: row.option_id,
        option_text: row.option_text,
        color: row.color,
        votes: row.votes,
        percentage: total_votes ? (row.votes / total_votes) * 100 : 0, // Calculate percentage
      }))
      .filter((data) => data.id !== null),
    totalVotes: total_votes,
  };

  return poll;
};

/**
 * Get polls with poll data
 * -- {{ Retrieves polls with their poll data entries in a single query }}
 * -- Author : brian-proz <brian@proz.com>
 * -- Date : 2025-03-07
 */
export const getPollsWithData = async (limit: number = 10, offset: number = 0) => {
  const sql = `
    WITH RankedPolls AS (
      SELECT *
      FROM pollphp.poll_index
      WHERE status < 2
      ORDER BY time_created DESC
      LIMIT ? OFFSET ?
    )
    SELECT
      pi.*,
      pd.id as data_id,
      pd.option_id,
      pd.option_text,
      pd.color,
      pd.votes
    FROM RankedPolls pi
    LEFT JOIN pollphp.poll_data pd ON pi.poll_id = pd.poll_id
    ORDER BY pi.time_created DESC, pd.option_id ASC
  `;

  const rows = (await executeQuery(sql, "slave", [limit, offset])) as any[];

  // Group results by poll using interfaces
  const pollsMap = new Map<number, PollIndex & { pollData: PollData[] }>();

  rows.forEach((row) => {
    if (!pollsMap.has(row.poll_id)) {
      const { data_id, option_id, option_text, color, votes, ...pollIndex } = row;
      pollsMap.set(row.poll_id, {
        ...pollIndex,
        pollData: [],
      });
    }

    if (row.data_id) {
      const pollData: PollData = {
        id: row.data_id,
        poll_id: row.poll_id,
        option_id: row.option_id,
        option_text: row.option_text,
        color: row.color,
        votes: row.votes,
      };
      pollsMap.get(row.poll_id)!.pollData.push(pollData);
    }
  });

  return Array.from(pollsMap.values());
};

/**
 * Retrieve polls with pagination
 * -- {{ Retrieves polls from poll_index table with limit and offset for pagination }}
 * -- Author : @BerjisTech <ben@proz.com>
 * -- Date : 2025-02-28
 */
export const getPolls = async (limit: number = 10, offset: number = 0): Promise<PollIndex[]> => {
  const sql = `
      /* Retrieves polls from poll_index table with pagination */
      -- {{ Retrieves polls from poll_index table with limit and offset for pagination }}
      -- Author : @BerjisTech <ben@proz.com>
      -- Date : 2025-02-28
      SELECT * FROM pollphp.poll_index ORDER BY time_created DESC LIMIT ? OFFSET ?
    `;
  const rows = (await executeQuery(sql, "master", [limit, offset])) as any[];
  return rows as PollIndex[];
};

/**
 * Update a poll by ID
 * -- {{ Updates a poll in the poll_index table }}
 * -- Author : @BerjisTech <ben@proz.com>
 * -- Date : 2025-02-28
 */
export const updatePoll = async (pollId: number, poll: Partial<PollIndex>): Promise<boolean> => {
  // Dynamically build SET clause based on provided fields
  const fields = Object.keys(poll)
    .map((key) => `${key} = ?`)
    .join(", ");
  const params = [...Object.values(poll), pollId];

  const sql = `
    /* Updates a poll in the poll_index table by poll_id */
    -- {{ Updates a poll in the poll_index table by poll_id }}
    -- Author : @BerjisTech <ben@proz.com>
    -- Date : 2025-02-28
    UPDATE pollphp.poll_index SET ${fields}, time_updated = NOW() WHERE poll_id = ?
  `;
  await executeQuery(sql, "master", params);
  return true;
};

/**
 * Delete a poll by ID
 * -- {{ Deletes a poll from the poll_index table }}
 * -- Author : @BerjisTech <ben@proz.com>
 * -- Date : 2025-02-28
 */
export const deletePoll = async (pollId: number): Promise<boolean> => {
  const sql = `
    /* Deletes a poll from poll_index table */
    -- {{ Deletes a poll from poll_index table }}
    -- Author : @BerjisTech <ben@proz.com>
    -- Date : 2025-02-28
    DELETE FROM pollphp.poll_index WHERE poll_id = ?
  `;
  await executeQuery(sql, "master", [pollId]);
  return true;
};

/**
 * Create a new poll vote
 * -- {{ Inserts a new vote into the poll_log table and updates the poll_data table }}
 * -- Author : brian-proz <brian@proz.com>
 * -- Date : 2025-03-11
 *
 * @param pollId - The ID of the poll.
 * @param optionId - The ID of the selected option.
 * @param ipAddr - The IP address of the voter.
 * @param host - The host from which the vote is made.
 * @param agent - The user agent of the voter.
 * @param entityId - The entity ID associated with the vote.
 */
export const createPollVote = async (
  pollId: number,
  optionId: number,
  ipAddr: string,
  host: string,
  agent: string,
  entityId: number
): Promise<{ success: boolean; error?: string }> => {
  console.log("\n=== POLL VOTE START ===");
  console.log("Vote params:", { pollId, optionId, entityId });

  let connection;
  try {
    // Get a connection from the pool
    connection = await executeQuery("START TRANSACTION", "master");

    // Check if poll option exists with proper composite key
    const checkOptionSql = `
      SELECT votes 
      FROM pollphp.poll_data 
      WHERE poll_id = ? AND option_id = ? 
      LOCK IN SHARE MODE
    `;
    const optionResult = await executeQuery(checkOptionSql, "master", [pollId, optionId]);
    console.log("Current option data:", optionResult);

    if (!Array.isArray(optionResult) || optionResult.length === 0) {
      await executeQuery("ROLLBACK", "master");
      return { success: false, error: "Invalid poll option" };
    }

    // Log the vote first
    const logSql = `
      INSERT INTO pollphp.poll_log 
      (poll_id, option_id, ip_addr, host, agent, entity_id, timestamp) 
      VALUES (?, ?, ?, ?, ?, ?, UNIX_TIMESTAMP())
    `;

    await executeQuery(logSql, "master", [
      pollId,
      optionId,
      ipAddr.slice(0, 15),
      host.slice(0, 70),
      agent.slice(0, 80),
      entityId,
    ]);

    // Update vote count using composite key
    const updateSql = `
      UPDATE pollphp.poll_data 
      SET votes = votes + 1 
      WHERE poll_id = ? AND option_id = ?
    `;

    const updateResult = await executeQuery(updateSql, "master", [pollId, optionId]);
    console.log("Vote update result:", updateResult);

    // Verify the update
    const verifySql = `
      SELECT votes 
      FROM pollphp.poll_data 
      WHERE poll_id = ? AND option_id = ?
    `;
    const verifyResult = await executeQuery(verifySql, "master", [pollId, optionId]);
    console.log("Verification result:", verifyResult);

    await executeQuery("COMMIT", "master");
    console.log("Transaction committed successfully");
    return { success: true };
  } catch (error) {
    console.error("Error in createPollVote:", error);
    if (connection) {
      await executeQuery("ROLLBACK", "master");
    }
    return {
      success: false,
      error: (error as Error).message || "Failed to process vote",
    };
  }
};

export const hasUserVoted = async (pollId: number, entityId: number): Promise<boolean> => {
  const sql = `
    SELECT COUNT(*) as voted
    FROM pollphp.poll_log
    WHERE poll_id = ? AND entity_id = ?
    LIMIT 1
  `;

  const result = await executeQuery(sql, "slave", [pollId, entityId]);
  return Array.isArray(result) && result[0]?.voted > 0;
};
