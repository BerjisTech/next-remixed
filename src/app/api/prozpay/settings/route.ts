import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { getProzPaySettingsAPi } from "@/server/data/prozpay";

export async function GET(req: NextRequest) {
  const payeeEid = parseAndValidateId(req.nextUrl.searchParams.get("payeeEid"));
  if (!payeeEid) {
    return NextResponse.json({ error: `Invalid user id: ${payeeEid}` }, { status: 400 });
  }

  try {
    const paymentsReceived = await getProzPaySettingsAPi(payeeEid);
    return NextResponse.json(paymentsReceived);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to ProZ*Pay settings", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to ProZ*Pay settings", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
