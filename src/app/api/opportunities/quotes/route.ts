import { NextRequest, NextResponse } from "next/server";
import { newQuote } from "@/server/data/opportunities";

export async function POST(request: NextRequest) {
  try {
    // Get the data from the request body
    const body = await request.json();

    const {
      entity_id,
      job_id,
      subject,
      selectedPair: lang_pair,
      description,
      ratePricing,
      rateUnit,
    } = body;

    // Check if all required fields are present
    if (subject && lang_pair && description && job_id && entity_id && ratePricing && rateUnit) {
      const quote = await newQuote(
        job_id,
        entity_id,
        subject,
        description,
        lang_pair,
        ratePricing,
        rateUnit
      );
      return NextResponse.json(quote, { status: 200 });
    } else {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
