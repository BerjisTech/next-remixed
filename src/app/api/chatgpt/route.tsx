import { NextRequest, NextResponse } from "next/server";
import { sendRequestToChatgptApi } from "@/server/data/chatgpt";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const prompt = searchParams?.get("prompt");
    const response = prompt
      ? await sendRequestToChatgptApi(prompt)
      : { error: "No prompt provided" };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred", error_msj: error }, { status: 500 });
  }
}
