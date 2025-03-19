import { parseAndValidateId } from "@/server/data/common";
import { getUserGlossaries } from "@/server/data/glossaries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const userGlossaries = await getUserGlossaries(entityId);
    return NextResponse.json(userGlossaries);
  } catch (error) {
    console.error("Error fetching glossaries:", error);
    return NextResponse.json({ error: "Error fetching glossaries" }, { status: 500 });
  }
}
