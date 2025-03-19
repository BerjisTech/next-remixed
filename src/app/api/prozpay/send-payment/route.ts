import { NextRequest, NextResponse } from "next/server";
import { getApiBaseUrl } from "@/utils/helpers";
import { fetchAccessToken } from "@/server/php-api/apiAuth";
import { paymentMethods } from "@/constants/prozpay";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  let apiPath: string = "";

  if (requestBody) {
    if (requestBody.payment_method == paymentMethods.bank_transfer) {
      apiPath = "pay-via-bank-transfer";
    } else if (requestBody.payment_method == paymentMethods.credit_card) {
      apiPath = "pay-via-credit-card";
    } else if (requestBody.payment_method == paymentMethods.paypal) {
      apiPath = "pay-via-paypal";
    } else {
      return NextResponse.json({ error: "No valid payment method was selected" }, { status: 400 });
    }
  }
  try {
    const url = getApiBaseUrl(`pay/${apiPath}`, true);
    let accessToken = await fetchAccessToken(requestBody.viewer_eid);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    });

    let data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send payment via ProZ*Pay", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send payment via ProZ*Pay", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
