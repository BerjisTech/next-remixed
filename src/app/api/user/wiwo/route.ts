import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { WiwoService } from "@/server/services/Wiwo";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }
  const wiwoService = new WiwoService();
  try {
    const userWiwos = await wiwoService.getWiwos({ entity_id: entityId });
    return NextResponse.json(userWiwos);
  } catch (error) {
    console.error("Error fetching websites:", error);
    return NextResponse.json({ error: "Failed to fetch websites" }, { status: 500 });
  }
}
