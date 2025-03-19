import { parseAndValidateId } from "@/server/data/common";
import { addUserTranslationSample, getUserTranslationSamples } from "@/server/data/portfolio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const portfolioData = await getUserTranslationSamples(entityId);
    return NextResponse.json(portfolioData);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ error: "Error fetching services" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await addUserTranslationSample(body.entity_id, body);
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error saving sample:", error);
    return NextResponse.json({ error: "Error saving sample" }, { status: 500 });
  }
}
