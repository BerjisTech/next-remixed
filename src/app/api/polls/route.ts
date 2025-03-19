// src/app/api/polls/route.ts

import { NextResponse } from "next/server";
import {
  getPolls,
  // getPollById,
  createPoll,
  updatePoll,
  deletePoll,
} from "@/server/data/polls";

export async function GET(request: Request) {
  // Extract limit and offset from query parameters, defaulting to 10 and 0 respectively
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  try {
    const polls = await getPolls(limit, offset);
    return NextResponse.json({ success: true, data: polls });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}

export async function POST(request: Request) {
  // Creates a new poll
  try {
    const body = await request.json();
    const pollId = await createPoll(body);
    return NextResponse.json({ success: true, pollId });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}

export async function PUT(request: Request) {
  // Updates an existing poll
  try {
    const body = await request.json();
    const { pollId, ...pollData } = body;
    const updated = await updatePoll(pollId, pollData);
    return NextResponse.json({ success: true, updated });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}

export async function DELETE(request: Request) {
  // Deletes a poll based on pollId passed as query parameter
  try {
    const url = new URL(request.url);
    const pollId = parseInt(url.searchParams.get("pollId") || "0", 10);
    if (!pollId) {
      return NextResponse.json({ success: false, error: "Missing pollId" });
    }
    const deleted = await deletePoll(pollId);
    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
