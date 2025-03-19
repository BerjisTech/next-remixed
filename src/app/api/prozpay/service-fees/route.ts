import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { getServiceFeePercentApi } from "@/server/data/prozpay";

export async function GET(request: NextRequest) {
  const payerEid = parseAndValidateId(request.nextUrl.searchParams.get("payerEid"));
  const payeeEid = parseAndValidateId(request.nextUrl.searchParams.get("payeeEid"));
  if (!payerEid || !payeeEid) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }
  try {
    const serviceFeePercent = await getServiceFeePercentApi(payerEid, payeeEid);
    return NextResponse.json(serviceFeePercent);
  } catch (error) {
    console.error("Error fetching service fees:", error);
    return NextResponse.json({ error: "Failed to get service fees" }, { status: 500 });
  }
}
