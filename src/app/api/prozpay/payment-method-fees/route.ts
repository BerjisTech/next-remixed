import { NextRequest, NextResponse } from "next/server";
import { getPaymentMethodFeesAPi } from "@/server/data/prozpay";

export async function GET(request: NextRequest) {
  try {
    const paymentMethodFeePercent = await getPaymentMethodFeesAPi();
    return NextResponse.json(paymentMethodFeePercent);
  } catch (error) {
    console.error("Error fetching payment method fees:", error);
    return NextResponse.json({ error: "Failed to get payment method fees" }, { status: 500 });
  }
}
