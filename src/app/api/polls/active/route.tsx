import { NextResponse } from "next/server";
import { getPollsWithData } from "@/server/data/polls";

/**
 * GET active polls with their poll data
 * -- {{ Handles requests for active polls with pagination }}
 * -- Author : brian-proz <brian@proz.com>
 * -- Date : 2025-03-07
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    const polls = await getPollsWithData(limit, offset);

    return NextResponse.json({
      success: true,
      data: polls,
      pagination: {
        limit,
        offset,
        count: polls.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
