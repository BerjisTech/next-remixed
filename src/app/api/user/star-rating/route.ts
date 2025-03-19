import { NextRequest, NextResponse } from "next/server";
import { getUserStarRating } from "@/server/data/user";
import { parseAndValidateId } from "@/server/data/common";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const starRating = await getUserStarRating(entityId);
    return NextResponse.json(starRating);
  } catch (error) {
    console.error("Error fetching star rating:", error);
    return NextResponse.json({ error: "Error fetching start rating" }, { status: 500 });
  }
}
