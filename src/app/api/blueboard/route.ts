export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { searchBlueBoardEntries } from "@/server/data/blueboard";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("q") || "";
    const entityId = searchParams.get("entityId")
      ? parseInt(searchParams.get("entityId")!)
      : undefined;

    const isAdmin = false;
    const isJobMod = false;

    const entries = await searchBlueBoardEntries(search, entityId, isAdmin, isJobMod);

    return NextResponse.json(entries || []);
  } catch (error) {
    console.error("Error searching Blue Board entries:", error);
    return NextResponse.json({ error: "Failed to search Blue Board entries" }, { status: 500 });
  }
}
