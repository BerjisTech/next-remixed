import { executeQuery } from "../database/mysql/queryHelper";

export class MoodleService {
  /**
   * Get certificates information based on given criteria and options.
   *
   * @param criteria - Object containing filter criteria (key-value pairs).
   * @param options - Options for the query (e.g., limit, offset).
   * @returns A promise resolving to the list of certificates matching the criteria.
   */
  public async getCertificatesInfo(
    criteria: Record<string, any>,
    options: { limit?: number; start?: number } = {}
  ): Promise<any[] | null> {
    let sql = `SELECT * FROM trainings.entity_mdl_certificates WHERE 1 `;
    const params: any[] = [];

    // Add criteria to the SQL query
    for (const [key, val] of Object.entries(criteria)) {
      sql += `AND \`${key}\` = ? `;
      params.push(val);
    }

    // Add limit and offset if specified
    if (options.limit) {
      if (options.start) {
        sql += `LIMIT ?, ? `;
        params.push(options.start, options.limit);
      } else {
        sql += `LIMIT ? `;
        params.push(options.limit);
      }
    }

    const result = (await executeQuery(sql, "slave", params)) as any[];
    return result.length > 0 ? result : null;
  }

  /**
   * Get all the curses from the proz php API
   *
   * @param access_token - The access token of the user
   *
   * @returns A promise resolving to the list of courses
   *
   **/
  public async getCourses(access_token: string): Promise<any[] | null> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PHP_API_BASE_URL}/getCourses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const courses = await response.json();
      return courses;
    } catch (error) {
      throw new Error(`Error fetching courses: ${error}`);
    }
  }

  /**
   * Get a specific curse from the proz php API
   *
   * @param course_id - The id of the course
   * @param access_token - The access token of the user
   *
   * @returns A promise resolving to the list of courses
   *
   **/
  public async getCourse(course_id: number, access_token: string): Promise<any[] | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PHP_API_BASE_URL}/getCourses/${course_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const course = await response.json();

      return course;
    } catch (error) {
      throw new Error(`Error fetching course ${course_id}: ${error}`);
    }
  }

  public async getCourseMembershipTypesAllowed(course_id: number): Promise<any[]> {
    const query = `SELECT membership_types FROM trainings.mdl_course_offers WHERE course_id = ? AND sort_order = 1 LIMIT 1`;
    const params = [course_id];

    const result = (await executeQuery(query, "slave", params)) as any[];
    return result.length > 0 ? result : [];
  }

  // public async getCourseTrainer(course_id: number): Promise<any[]> {
  //     const query = `SELECT entity_id FROM trainings.entity_trainer_mdl_courses WHERE mdl_course_id = ? AND status = "active" GROUP BY entity_id`;
  //     const params = [course_id];

  //     const result = await executeQuery(query, 'slave', params) as any[];
  //     return result.length > 0 ? result : [];
  // }

  public async getCoursesFromDB(
    is_active = "all",
    tags = [],
    search = ""
  ): Promise<{ course: any; pricing: any[] } | any> {
    try {
      let params: any[] = [];
      let courseIdsWithTheseTags: any[] = [];
      if (tags.length > 0) {
        let tagsQuery = `SELECT course_id FROM trainings.learn_courses_tags WHERE tag_id IN (?)`;
        let tagsParams = [tags];
        courseIdsWithTheseTags = (await executeQuery(tagsQuery, "slave", tagsParams)) as any[];
      }

      let courseQuery = `SELECT * FROM trainings.learn_courses WHERE 1 `;
      if (is_active === "y" || is_active === "n") {
        params.push(is_active);
        courseQuery += `AND active = ? `;
      }

      if (tags.length > 0) {
        if (courseIdsWithTheseTags.length === 0) {
          courseQuery += `AND learn_course_id = 0 `;
        } else {
          courseQuery += `AND learn_course_id IN (?) `;
          params.push(courseIdsWithTheseTags.map((course: any) => course.course_id));
        }
      }

      if (search !== "") {
        courseQuery += `AND title LIKE ? `;
        params.push(`%${search}%`);
      }
      const courseResult = (await executeQuery(courseQuery, "slave", params, {
        useCache: false,
      })) as any[];

      if (courseResult.length === 0) {
        return { courses: [] };
      }

      const coursesWithPricing = await Promise.all(
        courseResult.map(async (course) => {
          const pricingQuery = `
                        SELECT store_item_id, IFNULL(store_items.price, 0) AS price, membership
                        FROM trainings.learn_courses_pricing
                        LEFT JOIN wallet.store_items ON learn_courses_pricing.store_item_id = store_items.item_id
                        WHERE learn_courses_pricing.active = "y" AND learn_courses_pricing.learn_course_id = ?;
                    `;
          const pricing = await executeQuery(pricingQuery, "slave", [course.learn_course_id], {
            useCache: false,
          });
          return {
            ...course,
            pricing,
          };
        })
      );

      return { courses: coursesWithPricing };
    } catch (error: any) {
      console.error("Error fetching courses from DB:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  public async getCourseDataFromDb(
    course_id: number,
    is_active: string | any = "all",
    tags: any = [],
    debugErrors: boolean = false
  ): Promise<{ course: any; pricing: any[] } | any> {
    try {
      let params = [course_id];

      let courseQuery = `SELECT * FROM trainings.learn_courses WHERE mdl_course_id = ? `;

      if (is_active === "y" || is_active === "n") {
        params.push(is_active);
        courseQuery += `AND active = ? `;
      }

      courseQuery += `LIMIT 1;`;

      const courseResult = (await executeQuery(courseQuery, "slave", params)) as any[];

      let pricingQuery = `SELECT store_item_id, IFNULL(store_items.price, 0) AS price, membership
                                  FROM trainings.learn_courses_pricing
                                  JOIN trainings.learn_courses ON learn_courses_pricing.learn_course_id = learn_courses.learn_course_id
                                  LEFT JOIN wallet.store_items ON learn_courses_pricing.store_item_id = store_items.item_id
                                  WHERE learn_courses.mdl_course_id = ? AND learn_courses_pricing.active = "y" `;

      if (is_active === "y" || is_active === "n") {
        pricingQuery += `AND learn_courses.active = ? `;
      }

      const pricingResult = (await executeQuery(pricingQuery, "slave", params)) as any[];

      return {
        course: courseResult[0] || {},
        pricing: pricingResult,
      };
    } catch (error) {
      if (debugErrors) {
        return error;
      }
      return {
        success: false,
      };
    }
  }

  /**
   * Create a new course in the database.
   *
   * @param params - An object containing the course details:
   *   @param params.mdl_course_id - The Moodle course ID.
   *   @param params.title - The title of the course.
   *   @param params.description - The description of the course.
   *   @param params.trainer_id - The ID of the trainer.
   *   @param params.image_link - The link to the course image.
   *   @param params.duration_total - The total duration of the course.
   *   @param params.duration_unit - The unit of the course duration (e.g., hours, days).
   *   @param params.course_content - The content of the course.
   *   @param params.link_to_event - The link to the course event.
   *   @param params.selectedMemberships - An array of allowed membership types.
   *   @param params.created_by - The ID of the user who created the course.
   *
   * @returns A promise resolving to the result of the insert operation, or false if the operation failed.
   */
  public async createCourse(params: any) {
    let sql = `
        INSERT INTO trainings.learn_courses (
            mdl_course_id, 
            title,
            description,
            trainer_id, 
            image_link, 
            duration_total, 
            duration_unit, 
            course_content, 
            link_to_event, 
            allowed_memberships,
            created_by
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    let queryParams = [
      params.mdl_course_id,
      params.title,
      params.description,
      params.trainer_id,
      params.image_link,
      params.duration_total,
      params.duration_unit,
      params.course_content,
      params.link_to_event,
      "NULL",
      params.created_by,
    ];

    try {
      const result = await executeQuery(sql, "master", queryParams);

      if (result) {
        const lastInsertIdQuery = `SELECT LAST_INSERT_ID() as id;`;
        const lastInsertResult = (await executeQuery(lastInsertIdQuery, "master")) as any[];
        const learnCourseId = lastInsertResult[0]?.id;

        for (const pricing of params.pricing) {
          const pricingSql = `
                    INSERT INTO trainings.learn_courses_pricing (
                        learn_course_id,
                        store_item_id,
                        membership
                    ) VALUES (?, ?, ?)`;

          const pricingParams = [
            learnCourseId,
            pricing.store_item_id || 0, // Usa 0 si no está definido
            pricing.membership,
          ];

          await executeQuery(pricingSql, "master", pricingParams);
        }

        for (const tag of params.tags) {
          const tagSql = `
                    INSERT INTO trainings.learn_courses_tags (
                        course_id,
                        tag_id
                    ) VALUES (?, ?)`;

          const tagParams = [learnCourseId, tag];

          await executeQuery(tagSql, "master", tagParams);
        }
      }

      return result || false;
    } catch (error) {
      console.error("Error creating course:", error);
      return error;
    }
  }

  /**
   * Update an existing course in the database.
   *
   * @param params - An object containing the course details:
   *   @param params.learn_course_id - The ID of the course.
   *   @param params.title - The title of the course.
   *   @param params.description - The description of the course.
   *   @param params.mdl_course_id - The Moodle course ID.
   *   @param params.trainer_id - The ID of the trainer.
   *   @param params.image_link - The link to the course image.
   *   @param params.duration_total - The total duration of the course.
   *   @param params.duration_unit - The unit of the course duration (e.g., hours, days).
   *   @param params.course_content - The content of the course.
   *   @param params.link_to_event - The link to the course event.
   *   @param params.created_by - The ID of the user who created the course.
   *
   * @returns A promise resolving to the result of the update operation, or false if the operation failed.
   */
  public async updateCourse(params: any) {
    let sql = `
        UPDATE trainings.learn_courses 
        SET 
            title = ?,
            description = ?,
            trainer_id = ?, 
            image_link = ?, 
            duration_total = ?, 
            duration_unit = ?, 
            course_content = ?, 
            link_to_event = ?
        WHERE mdl_course_id = ?`;

    let queryParams = [
      params.title,
      params.description,
      params.trainer_id,
      params.image_link,
      params.duration_total,
      params.duration_unit,
      params.course_content,
      params.link_to_event,
      params.mdl_course_id,
    ];

    try {
      const result = await executeQuery(sql, "master", queryParams);

      // delete all pricing first before the new insert
      const deletePricingSql = `DELETE FROM trainings.learn_courses_pricing WHERE learn_course_id = ?`;
      const deletePricingParams = [params.learn_course_id];
      await executeQuery(deletePricingSql, "master", deletePricingParams);

      // update pricing
      for (const pricing of params.pricing) {
        const pricingSql = `
                INSERT INTO trainings.learn_courses_pricing (
                    learn_course_id,
                    store_item_id,
                    membership
                ) VALUES (?, ?, ?)`;

        const pricingParams = [
          params.learn_course_id,
          pricing.store_item_id || 0,
          pricing.membership,
        ];

        await executeQuery(pricingSql, "master", pricingParams);
      }

      // delete all tags first before the new insert
      const deleteTagsSql = `DELETE FROM trainings.learn_courses_tags WHERE course_id = ?`;
      const deleteTagsParams = [params.learn_course_id];
      await executeQuery(deleteTagsSql, "master", deleteTagsParams);

      for (const tag of params.tags) {
        const tagSql = `
                INSERT INTO trainings.learn_courses_tags (
                    course_id,
                    tag_id
                ) VALUES (?, ?)`;

        const tagParams = [params.learn_course_id, tag];

        await executeQuery(tagSql, "master", tagParams);
      }

      return result ? result : false;
    } catch (error) {
      console.error("Error creating course:", error);
      return error;
    }
  }

  public async updateVisibilityCourse(params: any) {
    let sql = `
        UPDATE trainings.learn_courses 
        SET 
            active = ?
        WHERE mdl_course_id = ?`;

    let queryParams = [params.active, params.mdl_course_id];

    try {
      const result = await executeQuery(sql, "master", queryParams);
      return result ? result : false;
    } catch (error) {
      console.error("Error creating course:", error);
      return error;
    }
  }

  public async getPurchaseData(
    course_id: number,
    user_id: number,
    store_item_id: number
  ): Promise<any> {
    // User purchased the course
    const queryPurchase = `
            SELECT * FROM wallet.transactions 
            WHERE entity_id = ? AND item_id = ? AND type = "training_moodle" LIMIT 1
        `;
    const paramsPurchase = [user_id, store_item_id];

    // User is enrolled in the course
    const queryEnrolled = `
            SELECT * FROM trainings.entity_mdl_courses 
            WHERE mdl_course_id = ? AND entity_id = ? AND status = "active" 
        `;
    const paramsEnrolled = [course_id, user_id];

    const [resultPurchase, resultEnrolled] = await Promise.all([
      executeQuery(queryPurchase, "slave", paramsPurchase) as Promise<any[]>,
      executeQuery(queryEnrolled, "slave", paramsEnrolled) as Promise<any[]>,
    ]);

    return {
      is_purchased: resultPurchase.length > 0 ? true : false,
      is_enrolled: resultEnrolled.length > 0 ? true : false,
    };
  }

  public async getDashboardCourses(user_id: number): Promise<any> {
    if (!user_id) {
      return [];
    }

    const queryOngoing = `
            SELECT lc.*
            FROM 
                trainings.entity_mdl_courses emc
            JOIN 
                trainings.learn_courses lc ON emc.mdl_course_id = lc.mdl_course_id
            LEFT JOIN 
                trainings.entity_mdl_certificates emct ON emc.mdl_course_id = emct.mdl_course_id 
                AND emc.entity_id = emct.entity_id
            WHERE 
                emc.entity_id = ?
                AND emc.status = 'active'
                AND emct.mdl_course_id IS NULL
        `;

    const queryFinished = `
            SELECT *
            FROM 
                trainings.entity_mdl_certificates emct
            JOIN 
                trainings.learn_courses lc ON emct.mdl_course_id = lc.mdl_course_id
            JOIN 
                trainings.entity_mdl_courses emc ON emc.mdl_course_id = emct.mdl_course_id
            JOIN 
                proz.media_files ON emct.proz_media_id = media_files.media_file_id
            WHERE 
                emct.entity_id = ?
                AND emc.status = "active"
            GROUP BY emct.mdl_course_id
            ORDER BY 
                emct.time_created DESC
        `;

    const params = [user_id];
    const [ongoingCourses, finishedCourses] = await Promise.all([
      executeQuery(queryOngoing, "slave", params),
      executeQuery(queryFinished, "slave", params),
    ]);

    return {
      courses_ongoing: ongoingCourses || [],
      courses_finished: finishedCourses || [],
    };
  }

  public async getCertificatesMoodle(user_id: number): Promise<any> {
    if (!user_id) {
      return [];
    }

    const query = `
            SELECT * FROM trainings.entity_mdl_certificates
            JOIN proz.media_files ON entity_mdl_certificates.proz_media_id = media_files.media_file_id
            JOIN trainings.learn_courses ON learn_courses.mdl_course_id = entity_mdl_certificates.mdl_course_id
            WHERE entity_mdl_certificates.entity_id = ?
            ORDER BY entity_mdl_certificates.mdl_course_id DESC
        `;

    const params = [user_id];
    const result = (await executeQuery(query, "slave", params)) as any[];
    return result;
  }

  public async getCoursePurchasesForAdmin(
    filters: any,
    page: number = 1,
    limit: number = 10
  ): Promise<any> {
    const validPage = Number.isInteger(page) && page > 0 ? page : 1;
    const offset = (validPage - 1) * limit;
    let query = `
            SELECT entity_mdl_courses.entity_id, entities.contact_first, entities.contact_last, entity_mdl_courses.mdl_course_id, entity_mdl_courses.time_purchased, entity_mdl_courses.wallet_txn_id, transactions.debited_from, learn_courses.title
            FROM trainings.entity_mdl_courses
            JOIN wallet.transactions ON entity_mdl_courses.wallet_txn_id = transactions.transaction_id
            JOIN trainings.learn_courses ON entity_mdl_courses.mdl_course_id = learn_courses.mdl_course_id
            JOIN proz.entities ON entity_mdl_courses.entity_id = entities.entity_id
            WHERE 1
        `;
    const params: any[] = [];

    if (filters.entity_id) {
      query += ` AND entity_mdl_courses.entity_id = ?`;
      params.push(filters.entity_id);
    }

    if (filters.mdl_course_id) {
      query += ` AND entity_mdl_courses.mdl_course_id = ?`;
      params.push(filters.mdl_course_id);
    }

    query += ` ORDER BY entity_mdl_courses.wallet_txn_id DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    const result = (await executeQuery(query, "slave", params)) as any[];
    return result;
  }
}
