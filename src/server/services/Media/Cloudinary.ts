import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { Readable } from "stream";

export class CloudinaryService {
  constructor() {
    // Configure Cloudinary with credentials
    cloudinary.config({
      cloud_name: "proz", // Replace with your Cloudinary cloud name
      api_key: "995616466868694", // Replace with your Cloudinary API key
      api_secret: "ZkvZ33HVK2JQBu_csTVhuzBT1hI", // Replace with your Cloudinary API secret
    });
  }

  /**
   * Uploads an image to Cloudinary
   * @param {Buffer} file - The temporary file path of the image
   * @param {string} folder - The Cloudinary folder to store the image (optional)
   * @returns {Promise<Object>} - The result of the upload
   */
  async uploadImage(file: Buffer, folder: string = "uploads"): Promise<object> {
    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        // { folder }, // Options
        (error, result) => {
          if (error) return reject(error);
          resolve(result as UploadApiResponse);
        }
      );
      // Convert Buffer to Readable Stream and pipe it to Cloudinary
      Readable.from(file).pipe(uploadStream);
    });

    return {
      success: true,
      publicId: result.public_id,
      url: result.url,
      secureUrl: result.secure_url,
      width: result.width,
      height: result.height,
    };
  }

  /**
   * Deletes an image from Cloudinary
   * @param {string} publicId - The public ID of the image to delete
   * @returns {Promise<Object>} - The result of the delete operation
   */
  async deleteImage(publicId: string) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return {
        success: true,
        result,
      };
    } catch (error) {
      console.error("Cloudinary delete error:", error);
      return {
        success: false,
        error: "An error occurred while deleting the image from Cloudinary",
      };
    }
  }
}
