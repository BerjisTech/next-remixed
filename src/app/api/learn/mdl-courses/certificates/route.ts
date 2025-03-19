import { NextRequest, NextResponse } from "next/server";
import { MoodleService } from "@/server/services/Moodle";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const entity_id = parseInt(searchParams.get("entityId") || "0", 10);

  const mdlService = new MoodleService();

  if (!entity_id) {
    return NextResponse.json({ message: "Missing entity ID" }, { status: 500 });
  }

  const response = await mdlService.getCertificatesMoodle(entity_id);
  if (!response) {
    return NextResponse.json({ message: "No courses found" }, { status: 404 });
  }

  return NextResponse.json(response, { status: 200 });
}
