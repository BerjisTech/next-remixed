import { NextRequest, NextResponse } from "next/server";
import { getSoftwareNames } from "@/server/data/common";

export async function GET(request: NextRequest) {
  try {
    const specDisciplines = await getSoftwareNames();
    return NextResponse.json(specDisciplines);
  } catch (error) {
    console.error("Error fetching softwares:", error);
    return NextResponse.json({ error: "Failed to fetch softwares" }, { status: 500 });
  }
}
