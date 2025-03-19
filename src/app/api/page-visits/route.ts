// src/app/api/page-visits/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  logPageVisit,
  fetchPageVisitCount,
  fetchPageVisits,
  fetchDailyUserCount,
  fetchUsersByDaysForChartJs,
} from "@/server/data/pageVisits";

// POST handler for logging page visits
export async function POST(req: NextRequest) {
  const { entityId, page, browser, ip } = await req.json();

  try {
    const result = await logPageVisit(entityId, page, browser, ip);
    return NextResponse.json(result);
  } catch (error) {
    // console.error("Failed to log page visit :", error);
    return NextResponse.json({ error: "Failed to log page visit" }, { status: 500 });
  }
}

// GET handler for fetching page visit data
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const includeAdmins = searchParams.get("includeAdmins") === "true";
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  try {
    const pageVisits = await fetchPageVisits(limit, offset, startDate, endDate, includeAdmins);
    const pageVisitCounts = await fetchPageVisitCount(startDate, endDate, includeAdmins);
    const dailyUserCount = await fetchDailyUserCount(includeAdmins);
    const usersByDays = await fetchUsersByDaysForChartJs(includeAdmins);
    return NextResponse.json({ pageVisitCounts, pageVisits, dailyUserCount, usersByDays });
  } catch (error) {
    // console.error("Failed to fetch page visits :", error);
    return NextResponse.json({ error: "Failed to fetch page visits" }, { status: 500 });
  }
}
