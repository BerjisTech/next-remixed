import { NextRequest, NextResponse } from "next/server";
import { getMentors } from "@/server/data/mentors";

export async function GET(request: NextRequest) {
  try {
    let response = await getMentors();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching mentors:", error);
    return NextResponse.json({ error: "Failed to fetch mentors" }, { status: 500 });
  }
}
