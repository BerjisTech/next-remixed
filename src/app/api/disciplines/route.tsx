import { NextRequest, NextResponse } from "next/server";
import { getGeneralDisciplines, getSpecificDisciplines } from "@/server/data/discipline";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams?.get("category");

  try {
    let specDisciplines = null;
    if (!category || category === "specific") {
      specDisciplines = await getSpecificDisciplines();
    } else {
      specDisciplines = await getGeneralDisciplines();
    }
    return NextResponse.json(specDisciplines);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
