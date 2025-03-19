import { executeQuery } from "../../database/mysql/queryHelper";

export class TagsService {
  /**
   * Get all tags from the database.
   *
   * @returns a promise that contains an array of tags or null if no tags are found.
   */
  public async getTags(courseId: string | number, search: string = ""): Promise<any[] | null> {
    let sql = ``;
    let params: any[] = [];
    if (Number(courseId) > 0) {
      sql = "SELECT * FROM trainings.learn_tags ";
      sql +=
        "LEFT JOIN trainings.learn_courses_tags ON learn_tags.learn_tag_id = learn_courses_tags.tag_id ";
      sql += "WHERE learn_tags.is_active = 'y' AND learn_courses_tags.course_id = ? ";
      params = [courseId];
    } else {
      sql = `
            SELECT
                t.learn_tag_id,
                t.tag_title,
                t.is_active,
                COUNT(sub.course_id) AS total_courses
            FROM
                trainings.learn_tags t
            LEFT JOIN (
                SELECT
                    ct.tag_id,
                    c.learn_course_id AS course_id
                FROM
                    trainings.learn_courses_tags ct
                LEFT JOIN
                    trainings.learn_courses c ON ct.course_id = c.learn_course_id
                WHERE
                    c.title LIKE ? OR ? = ''
            ) AS sub ON t.learn_tag_id = sub.tag_id
            WHERE
                t.is_active = 'y'
            GROUP BY
                t.learn_tag_id,
                t.tag_title,
                t.is_active
            ORDER BY
                total_courses DESC;
            `;

      params = [`%${search}%`, search];
    }

    const result = (await executeQuery(sql, "slave", params)) as any[];
    return result.length > 0 ? result : null;
  }

  /**
   * Create a new tag in the database.
   *
   * @param tag_title - the title of the tag to be created.
   * @returns a promise that contains the new tag or null if the tag could not be created.
   */
  public async createTag(tag_title: string): Promise<any | null> {
    let sql = `INSERT INTO trainings.learn_tags (tag_title) VALUES (?)`;

    const result = await executeQuery(sql, "master", [tag_title]);
    return result ? true : false;
  }

  public async updateTag(body: any): Promise<any | null> {
    let sql = `UPDATE trainings.learn_tags SET tag_title = ? WHERE learn_tag_id = ?`;
    try {
      const result = await executeQuery(sql, "master", [body.tag_title, body.tag_id]);
      return result ? true : false;
    } catch (error) {
      return [error];
    }
  }

  public async updateTagStatus(body: any): Promise<any | null> {
    let is_active = "y";
    if (!body.is_active) is_active = "n";

    let sql = `UPDATE trainings.learn_tags SET is_active = ? WHERE learn_tag_id = ?`;

    try {
      const result = await executeQuery(sql, "master", [is_active, body.tag_id]);
      return result ? true : false;
    } catch (error) {
      return [error];
    }
  }
}
