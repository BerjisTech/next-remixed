import { executeQuery } from "../database/mysql/queryHelper";

export const getAllPopups = async (): Promise<any> => {
  try {
    const sql_query = `SELECT * FROM proz.promotions ORDER BY created_at DESC`;
    const result = await executeQuery(sql_query, "master");
    return result;
  } catch (error) {
    return { message: "An error occurred while fetching pop-ups", error };
  }
};

export const createPopup = async (params: any): Promise<any> => {
  try {
    const { title, message, video_url, image_url } = params;
    const sql_query = `
            INSERT INTO proz.promotions (title, message, video_url, image_url)
            VALUES (?, ?, ?, ?)
        `;
    const result = await executeQuery(sql_query, "master", [title, message, video_url, image_url]);
    return result;
  } catch (error) {
    return { message: "An error occurred while creating the pop-up", error };
  }
};

export const updatePopup = async (params: any): Promise<any> => {
  try {
    const { promotion_id, title, message, video_url, image_url } = params;
    const sql_query = `
            UPDATE proz.promotions
            SET title = ?, message = ?, video_url = ?, image_url = ?, updated_at = NOW()
            WHERE promotion_id = ?
        `;
    const result = await executeQuery(sql_query, "master", [
      title,
      message,
      video_url,
      image_url,
      promotion_id,
    ]);
    console.log("SQL Update Result:", result);
    return result;
  } catch (error) {
    console.error("Error in updatePopup function:", error);
    return { message: "An error occurred while updating the pop-up", error };
  }
};

export const deletePopup = async (promotion_id: number): Promise<any> => {
  try {
    const sql_query = `DELETE FROM proz.promotions WHERE promotion_id = ?`;
    const result = await executeQuery(sql_query, "master", [promotion_id]);
    return result;
  } catch (error) {
    return { message: "An error occurred while deleting the pop-up", error };
  }
};
