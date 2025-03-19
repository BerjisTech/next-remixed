export class MediaFile {
  private static useCdnIfAvailable: boolean = true; // Replace with the actual CDN usage setting

  protected static s3BucketCdns: Record<string, string> = {
    "proz-media-img-dev": "https://dwiog59i685ex.cloudfront.net",
    "proz-media-img": "https://d30v1l0pe4hkha.cloudfront.net",
  };

  public id: number = 0;
  public ownerEid: number = 0;
  public originalName: string = "";
  public size: number = 0;
  public mimeType: string = "";
  public mediaType: string = "";
  public imageWidth: number = 0;
  public imageHeight: number = 0;
  public imageType: string = "";
  public s3Key: string = "";
  public s3Bucket: string = "";
  public s3Url: string = "";
  public publicUrl: string = "";

  // Converts a URL to a CDN URL if possible; falls back to the original URL if `fallbackToNonCdn` is true
  public convertToCdnUrl(url: string, fallbackToNonCdn: boolean = true): string | null {
    let cdnUrl = MediaFile.convertS3UrlToCdnUrl(url);
    if (cdnUrl) {
      return cdnUrl;
    }

    cdnUrl = MediaFile.convertProzUrlToCdnUrl(url);
    if (cdnUrl) {
      return cdnUrl;
    }

    return fallbackToNonCdn ? url : null;
  }

  // Converts an S3 URL to a CDN URL if a matching CDN base URL is found
  public static convertS3UrlToCdnUrl(s3Url: string): string | null {
    if (!this.useCdnIfAvailable) {
      return null;
    }

    // Extract the bucket name from the S3 URL
    const matches = s3Url.match(/^https:\/\/s3\.amazonaws\.com\/([^/]+)\//);
    const s3Bucket = matches ? matches[1] : null;

    // Find the CDN base URL for the bucket and replace the base URL if available
    if (s3Bucket && this.s3BucketCdns[s3Bucket]) {
      const cdnBaseUrl = this.s3BucketCdns[s3Bucket];
      const regex = new RegExp(`^https://s3.amazonaws.com/${s3Bucket}`);
      return s3Url.replace(regex, cdnBaseUrl);
    }

    return null;
  }

  public static convertProzUrlToCdnUrl(prozUrl: string): string | null {
    const cdnBaseUrl = "https://cfcdn.proz.com";

    // Pattern for 'http' base URL
    let baseUrl = "http://www.proz.com";
    const httpPattern = new RegExp(`^${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
    if (httpPattern.test(prozUrl)) {
      return prozUrl.replace(httpPattern, cdnBaseUrl);
    }

    // Pattern for 'https' base URL
    baseUrl = "https://www.proz.com";
    const httpsPattern = new RegExp(`^${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
    if (httpsPattern.test(prozUrl)) {
      return prozUrl.replace(httpsPattern, cdnBaseUrl);
    }

    // If the URL starts with '/', prepend cdnBaseUrl
    if (prozUrl.startsWith("/")) {
      return `${cdnBaseUrl}${prozUrl}`;
    }

    // Return null if none of the patterns match
    return null;
  }

  public static createFromDbData(data: any): MediaFile {
    const mediaFile = new MediaFile();

    mediaFile.id = data.media_file_id || 0;
    mediaFile.ownerEid = data.owner_eid || 0;
    mediaFile.originalName = data.original_name || "";
    mediaFile.size = data.size || 0;
    mediaFile.mimeType = data.mime_type || "";
    mediaFile.mediaType = data.media_type || "";
    mediaFile.imageWidth = data.image_width || 0;
    mediaFile.imageHeight = data.image_height || 0;
    mediaFile.imageType = data.image_type || "";
    mediaFile.s3Key = data.s3_key || "";
    mediaFile.s3Bucket = data.s3_bucket || "";
    mediaFile.s3Url = data.public_url || "";

    // Optionally modify the public URL if necessary
    MediaFile.setPublicUrl(mediaFile);

    return mediaFile;
  }

  // Static method to set the public URL
  public static setPublicUrl(mediaFile: MediaFile): void {
    // Assuming $_USE_LOAD_CLOUDFRONT_OPTIMIZED_PROFILE_PHOTO is a global variable in your application

    // Use the S3 URL by default
    mediaFile.publicUrl = mediaFile.s3Url;

    // Use CDN if there is one.
    const cdnUrl = MediaFile.convertS3UrlToCdnUrl(mediaFile.s3Url);
    if (cdnUrl) {
      mediaFile.publicUrl = cdnUrl;
    }
  }
}
