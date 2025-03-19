export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getAllTrainers } from "@/server/data/trainers";

// Handle GET requests
export async function GET(req: Request) {
  try {
    // Extract query parameters safely
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    let start = parseInt(searchParams.get("start") || "0", 10);
    let limit = parseInt(searchParams.get("limit") || "20", 10);

    // Validate pagination values
    if (isNaN(start) || start < 0) start = 0;
    if (isNaN(limit) || limit <= 0 || limit > 50) limit = 20;

    // Fetch trainers with pagination
    const trainers = await getAllTrainers(start, limit);

    if (!trainers || trainers.length === 0) {
      return NextResponse.json({ message: "No trainers found", trainers: [] }, { status: 200 });
    }

    //console.log("Trainers Count:", trainers.length);
    //console.log("Trainers Result:", trainers);

    return NextResponse.json(trainers);
  } catch (err) {
    console.error("Error fetching trainers:", err);
    return NextResponse.json(
      { message: "An error occurred while fetching trainers", error: err },
      { status: 500 }
    );
  }
}
