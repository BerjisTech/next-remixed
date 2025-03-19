import { NextRequest } from "next/server";
import { createPollVote } from "@/server/data/polls";

export async function POST(req: NextRequest) {
  console.log("=== API Route: Starting vote handler ===");

  try {
    const body = await req.json();
    console.log("Request body received:", body);

    const { pollId, optionId, ipAddr, host, agent, entityId } = body;

    // Validate required fields
    if (!pollId || !optionId) {
      console.error("Missing required fields:", { pollId, optionId });
      return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
        status: 400,
      });
    }

    console.log("Calling createPollVote with params:", {
      pollId,
      optionId,
      ipAddr,
      host,
      agent,
      entityId,
    });

    await createPollVote(pollId, optionId, ipAddr, host, agent, entityId);

    console.log("Vote created successfully");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("API Route error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to create vote" }), {
      status: 500,
    });
  }
}
