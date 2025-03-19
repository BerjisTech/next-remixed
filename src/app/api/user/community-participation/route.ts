import { parseAndValidateId } from "@/server/data/common";
import { entityCommunityParticipation } from "@/server/data/communities";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const participation = await entityCommunityParticipation(entityId);
    return NextResponse.json(participation);
  } catch (error) {
    console.error("Error fetching community participation:", error);
    return NextResponse.json({ error: "Error fetching community participation" }, { status: 500 });
  }
}
