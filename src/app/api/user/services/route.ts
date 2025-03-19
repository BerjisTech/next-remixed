import { parseAndValidateId } from "@/server/data/common";
import { entityGetServices } from "@/server/data/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const userServices = await entityGetServices(entityId);
    return NextResponse.json(userServices);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ error: "Error fetching services" }, { status: 500 });
  }
}
