import { Article, Glossary } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves a list of glossaries for a given user.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @param {Record<string, any>} [options={}] - Optional filter or configuration options for retrieving glossaries.
 * @returns {Promise<Glossary[] | null>} - A promise that resolves to the list of glossaries, or null if none are found.
 */
export const getUserGlossaries = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<Glossary[] | null> => {
  // Fetch data from the database
  const sqlQuery = `
        SELECT * FROM glosses.glossaries
        WHERE entity_id = ? 
        AND glossary_visibility = "y"
        AND visible_to = "all" 
        ORDER BY glossary_name ASC
        `;
  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];
  return result.length > 0 ? result : null;
};

/**
 * Retrieves a list of articles authored by a given user.
 * @async
 * @param {number} entityId - The unique identifier of the user.
 * @returns {Promise<Article[] | null>} - A promise that resolves to the list of articles, or null if none are found.
 */
export const getUserArticles = async (entityId: number): Promise<Article[] | null> => {
  const sqlQuery = `
        SELECT ArticleID AS articleId, Title AS title
        FROM articlelive.ArticleLive_articles
        WHERE authorid_is_proz_entity_id = "y"
        AND AuthorID = ?
        AND Visible = 1
        AND Status = 1
        AND article_is_call != "y"
        ORDER BY Score DESC
    `;

  const rows: Article[] = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  return rows.length > 0 ? rows : null;
};
