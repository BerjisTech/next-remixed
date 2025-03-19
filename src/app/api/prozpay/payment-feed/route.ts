import { NextRequest, NextResponse } from "next/server";
import { getPaymentFeedData } from "@/server/data/prozpay";

export async function GET(request: NextRequest) {
  try {
    const paymentFeed = await getPaymentFeedData();
    return NextResponse.json(paymentFeed);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to get payment feed", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to get payment feed", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
