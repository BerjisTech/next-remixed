import { parseAndValidateId } from "@/server/data/common";
import { getUserGenderAndPronouns } from "@/server/data/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const genderPronouns = getUserGenderAndPronouns(entityId);
    return NextResponse.json(genderPronouns);
  } catch (error) {
    console.error("Error fetching gender pronouns:", error);
    return NextResponse.json({ error: "Error fetching gender pronouns" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    return NextResponse.json(body);
  } catch (error) {
    console.error("Error updating gender pronouns:", error);
    return NextResponse.json({ error: "Error updating gender pronouns" }, { status: 500 });
  }
}
