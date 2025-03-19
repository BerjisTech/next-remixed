import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { getEntityBbEntries } from "@/server/data/blueboard";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const starRating = await getEntityBbEntries(entityId);
    return NextResponse.json(starRating);
  } catch (error) {
    console.error("Error fetching bb entries:", error);
    return NextResponse.json({ error: "Error fetching bb entries" }, { status: 500 });
  }
}
