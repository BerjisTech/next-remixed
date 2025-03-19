import { parseAndValidateId } from "@/server/data/common";
import { getUserArticles } from "@/server/data/glossaries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const userArticles = await getUserArticles(entityId);
    return NextResponse.json(userArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error: "Error fetching articles" }, { status: 500 });
  }
}
