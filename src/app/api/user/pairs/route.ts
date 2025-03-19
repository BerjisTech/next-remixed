import { parseAndValidateId } from "@/server/data/common";
import { thisGetPairOptions } from "@/server/data/languages";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const pairs = await thisGetPairOptions(entityId);
    return NextResponse.json(pairs);
  } catch (error) {
    console.error("Error fetching pairs :", error);
    return NextResponse.json({ error: "Error fetching pairs" }, { status: 500 });
  }
}
