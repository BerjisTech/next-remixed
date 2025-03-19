import { NextRequest, NextResponse } from "next/server";
import { entityGetWwaEntries } from "@/server/data/ptc";
import { parseAndValidateId } from "@/server/data/common";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const userFeedback = await entityGetWwaEntries(entityId);
    return NextResponse.json(userFeedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json({ error: "Error fetching feedback" }, { status: 500 });
  }
}
