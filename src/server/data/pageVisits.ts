//src\server\data\pageVisits.ts
import { executeQuery } from "../database/mysql/queryHelper";
import { ADMINS, PSEUDO_USERS } from "@/constants/common";
import { entityIsProfessionalMember } from "./membership";

// Ensure ADMINS and PSEUDO_USERS are arrays of numbers
const adminIds = ADMINS.map(Number);
const pseudoUserIds = Object.keys(PSEUDO_USERS).map(Number);

// Function to log page visits
export const logPageVisit = async (
  entityId: number,
  page: string,
  browser: string,
  ip: string
): Promise<{ success: boolean; sessionId?: string; error?: string }> => {
  const sessionId = `${page}_${Math.random().toString(36).substring(2, 15)}`;
  const sql = `
        INSERT INTO proz.page_visits (entity_id, time_visited, session_id, browser_id, ip, created_at, updated_at)
        VALUES (?, NOW(), ?, ?, ?, NOW(), NOW())
    `;
  const params = [entityId, sessionId, browser, ip];

  const result = await executeQuery(sql, "master", params);
  return result ? { success: true, sessionId } : { success: false };
};

export const fetchPageVisitCount = async (
  startDate: string = "",
  endDate: string = "",
  includeAdmins: boolean = false
): Promise<number> => {
  let sql = `
    SELECT page_visits.entity_id
    FROM proz.page_visits
    JOIN entities ON page_visits.entity_id = entities.entity_id
  `;

  const params: any[] = [];

  if (!includeAdmins) {
    sql += ` WHERE page_visits.entity_id NOT IN (${adminIds.concat(pseudoUserIds).join(", ")}) `;
  } else {
    sql += ` WHERE 1 `;
  }

  if (startDate) {
    sql += ` AND DATE(time_visited) >= ? `;
    params.push(startDate);
  }

  if (endDate) {
    sql += ` AND DATE(time_visited) <= ? `;
    params.push(endDate);
  }

  sql += ` GROUP BY page_visits.entity_id `;

  try {
    const res = (await executeQuery(sql, "slave", params)) as any[];
    return res.length > 0 ? res.length : 0;
  } catch (error) {
    console.error("Error fetching page visit count:", error);
    return 0;
  }
};

export const fetchPageVisits = async (
  limit: number = 2,
  offset: number = 0,
  startDate: string = "",
  endDate: string = "",
  includeAdmins: boolean = false
): Promise<any[]> => {
  let sql = `
    SELECT 
      page_visits.entity_id,
      entities.contact_first,
      entities.contact_last,
      COUNT(*) AS total_pages_all_time,
      SUM(CASE WHEN DATE(time_visited) = CURDATE() THEN 1 ELSE 0 END) AS total_pages_today,
      SUM(CASE WHEN MONTH(time_visited) = MONTH(CURDATE()) AND YEAR(time_visited) = YEAR(CURDATE()) THEN 1 ELSE 0 END) AS total_pages_this_month,
      GROUP_CONCAT(
        CASE 
            WHEN DATE(time_visited) = CURDATE() THEN session_id 
            ELSE NULL 
        END 
        ORDER BY time_visited
        SEPARATOR ', '
    ) AS pages_visits_today
    FROM 
      proz.page_visits
    JOIN entities ON page_visits.entity_id = entities.entity_id
  `;

  const params: any[] = [];

  if (!includeAdmins) {
    sql += ` WHERE page_visits.entity_id NOT IN (${adminIds.concat(pseudoUserIds).join(", ")}) `;
  } else {
    sql += ` WHERE 1 `;
  }

  if (startDate) {
    sql += ` AND DATE(time_visited) >= ? `;
    params.push(startDate);
  }

  if (endDate) {
    sql += ` AND DATE(time_visited) <= ? `;
    params.push(endDate);
  }

  sql += ` GROUP BY page_visits.entity_id ORDER BY pages_visits_today DESC LIMIT ? OFFSET ? `;
  params.push(limit, offset);

  try {
    const res = (await executeQuery(sql, "slave", params)) as any[];
    if (res.length > 0) {
      await Promise.all(
        res.map(async (visit) => {
          visit.is_member = await entityIsProfessionalMember(visit.entity_id);
        })
      );
    }
    return res.length > 0 ? res : [];
  } catch (error) {
    console.error("Error fetching page visits:", error);
    return [];
  }
};

export const fetchDailyUserCount = async (includeAdmins: boolean = false): Promise<number> => {
  let sql = `
    SELECT page_visits.entity_id
    FROM proz.page_visits
    JOIN entities ON page_visits.entity_id = entities.entity_id
    WHERE DATE(time_visited) = CURDATE()
  `;

  if (!includeAdmins) {
    sql += ` AND page_visits.entity_id NOT IN (${adminIds.concat(pseudoUserIds).join(", ")}) `;
  }

  sql += ` GROUP BY page_visits.entity_id `;

  try {
    const res = (await executeQuery(sql, "slave")) as any[];
    return res.length > 0 ? res.length : 0;
  } catch (error) {
    console.error("Error fetching daily user count:", error);
    return 0;
  }
};

export const fetchUsersByDaysForChartJs = async (
  includeAdmins: boolean = false
): Promise<any[]> => {
  let sql = `
    SELECT 
      dates.date AS date,
      COALESCE(COUNT(DISTINCT p.entity_id), 0) AS totalUsers
    FROM 
      (
        SELECT DATE(NOW()) - INTERVAL n DAY AS date
        FROM (SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6) AS days
      ) AS dates
    LEFT JOIN 
      proz.page_visits p ON DATE(p.time_visited) = dates.date
  `;

  if (!includeAdmins) {
    sql += ` WHERE p.entity_id NOT IN (${adminIds.concat(pseudoUserIds).join(", ")}) `;
  }

  sql += `
    GROUP BY 
      dates.date
    ORDER BY 
      dates.date;
  `;

  try {
    const res = (await executeQuery(sql, "slave")) as any[];
    return res.length > 0 ? res : [];
  } catch (error) {
    console.error("Error fetching daily user count:", error);
    return [];
  }
};
