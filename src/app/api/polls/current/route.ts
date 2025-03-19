import { NextResponse } from "next/server";
import { getCurrentFeaturedPoll } from "@/server/data/polls";

export async function GET() {
  try {
    const featuredPoll = await getCurrentFeaturedPoll();

    if (!featuredPoll) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    return NextResponse.json({
      success: true,
      data: featuredPoll,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
