import { executeQuery } from "@/server/database/mysql/queryHelper";
import { MediaFile } from "./MediaFile";

export class MediaService {
  constructor() {}

  /**
   * Retrieves a MediaFile instance by media ID.
   * @param mediaId - The ID of the media file to retrieve.
   * @param useMasterDb - Optional; determines if the master database should be used.
   * @returns A MediaFile instance or null if no media data is found.
   */
  public async getMediaById(
    mediaId: number,
    useMasterDb: boolean = false
  ): Promise<MediaFile | null> {
    const data = await this.getMediaDataById(mediaId, useMasterDb);

    if (!data) {
      return null;
    }

    return MediaFile.createFromDbData(data);
  }

  /**
   * Retrieves media data by media ID.
   * @param mediaId - The ID of the media file.
   * @param useMasterDb - Optional; determines if the master database should be used.
   * @returns Media data in object format or an empty object if not found.
   */
  private async getMediaDataById(mediaId: number, useMasterDb: boolean = false): Promise<any> {
    const rows = await this.getMediaDataByIds([mediaId], useMasterDb);
    return rows[mediaId] || {};
  }

  /**
   * Retrieves media data for multiple media IDs using executeQuery method.
   * @param mediaIds - An array of media file IDs.
   * @param useMasterDb - Optional; determines if the master database should be used.
   * @returns An object mapping media file IDs to their corresponding data.
   */
  public async getMediaDataByIds(
    mediaIds: number[],
    useMasterDb: boolean = false
  ): Promise<Record<number, any>> {
    const data: Record<number, any> = {};
    const sanitizedIds = mediaIds.map((id) => Number(id));

    const db = useMasterDb ? "master" : "slave";
    const params = sanitizedIds; // Assuming the parameterized query uses the array of IDs
    const businessQuery = `
            SELECT * FROM proz.media_files WHERE media_file_id IN (${sanitizedIds.map(() => "?").join(", ")})`;

    // Assuming executeQuery is available to use as a query function
    const rows: Record<string, any>[] = (await executeQuery(businessQuery, db, params)) as any[];

    for (const row of rows) {
      data[row.media_file_id] = row;
    }

    return data;
  }
}

export default MediaService;
