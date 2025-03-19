import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }
  try {
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching pending balance:", error);
    return NextResponse.json({ error: "Failed to pending balance" }, { status: 500 });
  }
}
