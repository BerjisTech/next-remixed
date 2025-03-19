import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { getProzPayOverviewAPi } from "@/server/data/prozpay";

export async function GET(req: NextRequest) {
  const payeeEid = parseAndValidateId(req.nextUrl.searchParams.get("payeeEid"));
  if (!payeeEid) {
    return NextResponse.json({ error: `Invalid user id: ${payeeEid}` }, { status: 400 });
  }

  try {
    const paymentsReceived = await getProzPayOverviewAPi(payeeEid);
    return NextResponse.json(paymentsReceived);
  } catch (error) {
    console.error("Error fetching ProZ*Pay overview:", error);
    return NextResponse.json({ error: "Failed to ProZ*Pay overview" }, { status: 500 });
  }
}
