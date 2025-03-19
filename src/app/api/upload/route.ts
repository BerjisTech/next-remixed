import { CloudinaryService } from "@/server/services/Media/Cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;
    const buffer = Buffer.from(await file.arrayBuffer());

    const cloudinaryService = new CloudinaryService();
    const res = await cloudinaryService.uploadImage(buffer);

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error uploading media:", error);
    return NextResponse.json({ error: "Failed to upload media" }, { status: 500 });
  }
}
