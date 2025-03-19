import { NextRequest, NextResponse } from "next/server";
import { validateUserPassword } from "@/server/data/signin";

export async function GET(request: NextRequest) {}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const body = await request.json();
  const identifier = body.email_or_username;
  const password = body.password;

  try {
    if (identifier && password) {
      const entityId = await validateUserPassword(identifier, password);
      return NextResponse.json({ entityId }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Email or password is not correct" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
