import { NextRequest, NextResponse } from "next/server";
import { getApiBaseUrl } from "@/utils/helpers";
import { fetchAccessToken } from "@/server/php-api/apiAuth";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();

  try {
    const url = getApiBaseUrl("pay/request", true);

    let accessToken = await fetchAccessToken(requestBody.payee_eid);
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
        { error: "Failed to send payment request", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send payment request", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
