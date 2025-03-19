import { NextRequest, NextResponse } from "next/server";
import { profileGetLanguagesKnown } from "@/server/data/languages";
import { parseAndValidateId } from "@/server/data/common";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const knownLangs = await profileGetLanguagesKnown(entityId);
    return NextResponse.json(knownLangs);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
