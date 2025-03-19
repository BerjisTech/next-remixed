import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { addWebsiteFeedback } from "@/server/data/testimonials";

export async function POST(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  const body = await request.json();
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    await addWebsiteFeedback(entityId, body);
    return NextResponse.json({ mesagge: "Feedback added successfully" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json({ error: "Error saving feedback" }, { status: 500 });
  }
}
