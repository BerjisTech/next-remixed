import { NextResponse } from "next/server";
import { hasUserVoted } from "@/server/data/polls";
import { auth } from "../../../../../../auth.config";

export async function GET(request: Request, { params }: { params: { pollId: string } }) {
  try {
    const session = await auth();
    if (!session?.user?.entity_id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const pollId = Number(params.pollId);
    if (!pollId) {
      return NextResponse.json({ error: "Invalid poll ID" }, { status: 400 });
    }

    const hasVoted = await hasUserVoted(pollId, session.user.entity_id);
    return NextResponse.json({ hasVoted });
  } catch (error) {
    console.error("Error checking vote status:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
