export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { searchBlueBoardEntries } from "@/server/data/blueboard";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("q") || "";

    console.log("API: Received search request with term:", search);

    const entries = await searchBlueBoardEntries(search);

    console.log("API: Query returned:", entries ? entries.length : 0, "results");

    if (!entries) {
      return NextResponse.json([]);
    }

    return NextResponse.json(entries);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to search Blue Board entries" }, { status: 500 });
  }
}
