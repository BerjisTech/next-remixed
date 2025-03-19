import { NextRequest, NextResponse } from "next/server";
import { newApplication, getAllApplications } from "@/server/data/careers";

export async function GET(request: NextRequest) {
  let response = await getAllApplications();
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const params = await request.json();
    let response = await newApplication(params);
    return NextResponse.json({ Response: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
