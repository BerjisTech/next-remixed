import { NextRequest, NextResponse } from "next/server";
import { getUserCalendarEvents } from "@/server/data/calendar";
import { parseAndValidateId } from "@/server/data/common";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  const currentMonth: number = parseInt(
    request.nextUrl.searchParams.get("currentMonth") ?? new Date().getMonth().toString(),
    10
  );

  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    const calendarEvents = await getUserCalendarEvents(entityId, currentMonth);
    return NextResponse.json(calendarEvents);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json({ error: "Error fetching feedback" }, { status: 500 });
  }
}
