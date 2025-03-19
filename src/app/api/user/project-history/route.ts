import { parseAndValidateId } from "@/server/data/common";
import { getProjectHistory } from "@/server/data/projects";
import { ProjectService } from "@/server/services/Project";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const projectHistories = await getProjectHistory(entityId);
    return NextResponse.json(projectHistories);
  } catch (error) {
    console.error("Error fetching project history:", error);
    return NextResponse.json({ error: "Error fetching project history" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const projectService = new ProjectService();
    const body = await request.json();
    const data = await projectService.saveProject(body);
    return NextResponse.json(body);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ error: "Error fetching services" }, { status: 500 });
  }
}
