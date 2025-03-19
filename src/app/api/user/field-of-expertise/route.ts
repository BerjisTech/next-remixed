import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { entityGetDiscSpecs } from "@/server/data/discipline";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const specDisciplines = await entityGetDiscSpecs(entityId);
    return NextResponse.json(specDisciplines);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json({ error: "Error fetching feedback" }, { status: 500 });
  }
}
