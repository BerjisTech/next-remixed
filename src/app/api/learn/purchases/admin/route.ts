import { NextRequest, NextResponse } from "next/server";
import { MoodleService } from "@/server/services/Moodle";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // get params
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "50", 10);

  // const storeItemId = parseInt(searchParams.get('storeItemId') || '0', 10); TODO: Implement this
  const courseId = parseInt(searchParams.get("courseId") || "0", 10);
  const entityId = parseInt(searchParams.get("entityId") || "0", 10);

  const filters: { entity_id?: number; mdl_course_id?: number } = {};
  if (entityId) {
    filters.entity_id = entityId;
  }
  if (courseId) {
    filters.mdl_course_id = courseId;
  }

  const mdlService = new MoodleService();
  const response = await mdlService.getCoursePurchasesForAdmin(filters, page, limit);
  if (!response) {
    return NextResponse.json(
      { message: "No purchases found for admin dashboard" },
      { status: 404 }
    );
  }

  return NextResponse.json(response, { status: 200 });
}
