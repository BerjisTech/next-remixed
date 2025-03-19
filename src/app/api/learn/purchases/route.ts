import { NextRequest, NextResponse } from "next/server";
import { MoodleService } from "@/server/services/Moodle";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // get params
  const storeItemId = parseInt(searchParams.get("storeItemId") || "0", 10);
  const courseId = parseInt(searchParams.get("courseId") || "0", 10);
  const entityId = parseInt(searchParams.get("entityId") || "0", 10);

  if (courseId <= 0 || entityId <= 0 || storeItemId <= 0) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  const mdlService = new MoodleService();
  const response = await mdlService.getPurchaseData(courseId, entityId, storeItemId);
  if (!response) {
    return NextResponse.json({ message: "No purchase found" }, { status: 404 });
  }

  return NextResponse.json(response, { status: 200 });
}
