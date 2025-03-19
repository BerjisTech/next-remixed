import { NextRequest, NextResponse } from "next/server";
import { getPasteyReviews } from "@/server/data/pastey";

export async function GET(request: NextRequest) {
  const softwareId = request.nextUrl.searchParams.get("softwareId");
  if (!softwareId) {
    return NextResponse.json({ error: "Invalid software id" }, { status: 400 });
  }
  try {
    const users = await getPasteyReviews(parseInt(softwareId));
    return NextResponse.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to get Pastey reviews", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to get Pastey reviews", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
