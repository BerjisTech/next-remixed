import { executeQuery } from "../database/mysql/queryHelper";

// GETS
export const getAllApplications = async (): Promise<any> => {
  try {
    const sql_query = `SELECT * FROM proz.career_applications`;
    const result = await executeQuery(sql_query, "master");
    return result;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while fetching applications", error };
  }
};

export const getAllJobs = async (): Promise<any> => {
  try {
    const sql_query = `SELECT * FROM proz.career_jobs`;
    const result = await executeQuery(sql_query, "master");
    return result;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while fetching jobs", error };
  }
};

export const getJobRequirements = async (job_id: number): Promise<any> => {
  try {
    const sql_query = `SELECT * FROM proz.career_job_requirements WHERE job_id = ?`;
    const result = await executeQuery(sql_query, "master", [job_id]);
    return result;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while fetching job requirements", error };
  }
};

// POSTS
export const newApplication = async (params: any): Promise<any> => {
  try {
    const requiredFields = [
      "job_id",
      "name",
      "email",
      "phone",
      "linkedIn",
      "otherLink",
      "whyProZ",
      "whyHire",
      "about",
      "workingFrom",
      "compensation",
      "cv",
      "cv_file_type",
    ];

    for (const field of requiredFields) {
      if (!params.hasOwnProperty(field)) {
        return { message: `Missing required field: ${field}` };
      }
    }

    const sql_query = `
            INSERT INTO career_applications 
            (job_id, full_name, email, phone, linkedin, other_link, reason_for_working, why_hire_you, about_yourself, working_from, compensation, cv, cv_file_type) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const values = [
      params.job_id,
      params.name,
      params.email,
      params.phone,
      params.linkedIn,
      params.otherLink,
      params.whyProZ,
      params.whyHire,
      params.about,
      params.workingFrom,
      params.compensation,
      params.cv,
      params.cv_file_type,
    ];

    const result = await executeQuery(sql_query, "master", values);
    return result;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while applying", error };
  }
};

export const newJob = async (params: any): Promise<any> => {
  try {
    const requiredFields = ["title", "description", "type"];

    for (const field of requiredFields) {
      if (!params.hasOwnProperty(field)) {
        return { message: `Missing required field: ${field}` };
      }
    }

    const sql_query = `
            INSERT INTO proz.career_jobs 
            (title, description, type, is_full_time) 
            VALUES (?, ?, ?, ?)
        `;

    const values = [
      params.title,
      params.description,
      params.type,
      params.is_full_time ? params.is_full_time : "y",
    ];

    const result = await executeQuery(sql_query, "master", values);
    return result;
  } catch (error) {
    // Return an object with the error message
    return { message: "An error occurred while adding job", error };
  }
};
