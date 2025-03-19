import { NextResponse } from "next/server";
import { getEntityBbEntries } from "@/server/data/blueboard";

export async function GET(request: Request, { params }: { params: { entityId: string } }) {
  try {
    const entityId = parseInt(params.entityId);
    // Replace with actual auth checks
    const isAdmin = false;
    const isJobMod = false;

    const entries = await getEntityBbEntries(entityId, isAdmin, isJobMod);

    if (!entries) {
      return NextResponse.json({ message: "No entries found" }, { status: 404 });
    }

    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching Blue Board entries:", error);
    return NextResponse.json({ error: "Failed to fetch Blue Board entries" }, { status: 500 });
  }
}
