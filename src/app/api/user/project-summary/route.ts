import { parseAndValidateId } from "@/server/data/common";
import { makeProjectSummary } from "@/server/data/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const userServices = await makeProjectSummary(entityId);
    return NextResponse.json(userServices);
  } catch (error) {
    console.error("Error fetching project summary:", error);
    return NextResponse.json({ error: "Error fetching project summary" }, { status: 500 });
  }
}
