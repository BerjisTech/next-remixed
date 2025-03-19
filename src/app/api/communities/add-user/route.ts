import { NextRequest, NextResponse } from "next/server";
import { addUserToCommunity } from "@/server/data/communities";

export async function POST(req: NextRequest) {
  const { entityIds, communityId } = await req.json();

  try {
    if (!Array.isArray(entityIds) || entityIds.length === 0) {
      return NextResponse.json({ error: "Invalid or empty entityIds" }, { status: 400 });
    }

    const result = await addUserToCommunity(communityId, entityIds);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to add user to community:", error);
    return NextResponse.json({ error: "Failed to add user to community" }, { status: 500 });
  }
}
