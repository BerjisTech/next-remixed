import { NextRequest, NextResponse } from "next/server";
import { getCommunities, createCommunity } from "@/server/data/communities";

export async function GET(request: NextRequest) {
  try {
    const communities = await getCommunities();
    return NextResponse.json(communities);
  } catch (error) {
    console.error("Error fetching communities:", error);
    return NextResponse.json({ error: "Failed to get communities" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newCommunity = await createCommunity(body);
    return NextResponse.json(newCommunity);
  } catch (error) {
    console.error("Error creating community:", error);
    return NextResponse.json({ error: "Failed to create community" }, { status: 500 });
  }
}
