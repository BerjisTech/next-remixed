import { NextRequest, NextResponse } from "next/server";
import { getAllMissedCalls, updateMissedCalls } from "@/server/data/missedCalls";

export async function GET(request: NextRequest) {
  const response = await getAllMissedCalls();
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await updateMissedCalls(body);
  return NextResponse.json(response, { status: 200 });
}
