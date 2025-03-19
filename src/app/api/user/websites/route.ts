import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { entityWixWebsites } from "@/server/data/websites";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const websites = await entityWixWebsites(entityId);
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching websites:", error);
    return NextResponse.json({ error: "Failed to fetch websites" }, { status: 500 });
  }
}
