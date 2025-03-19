export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getAllNewRegistrants } from "@/server/data/newRegistrants";
import { getCompletedProfilesCount } from "@/server/data/newRegistrants";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    // Extract query parameters
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "15", 10);
    const start_date = searchParams.get("start_date") || "";
    const end_date = searchParams.get("end_date") || "";

    // Validate required filters
    if (!start_date || !end_date) {
      return NextResponse.json(
        {
          error: "Missing required filters: 'start_date' and 'end_date' are required.",
        },
        { status: 400 }
      );
    }
    // Ensure valid numbers for pagination
    if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
      return NextResponse.json(
        {
          error: "Invalid 'page' or 'limit'.",
        },
        { status: 400 }
      );
    }

    // Fetch registrants
    const { registrants, totalRegistrants } = await getAllNewRegistrants(
      start_date,
      end_date,
      page,
      limit
    );

    // Fetch completed profiles count
    const completedProfiles = await getCompletedProfilesCount(start_date, end_date);

    // Calculate completion percentage
    const completionPercentage =
      totalRegistrants > 0 ? ((completedProfiles / totalRegistrants) * 100).toFixed(2) : "0.00";

    return NextResponse.json(
      {
        registrants,
        totalRegistrants,
        completedProfiles,
        completionPercentage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
