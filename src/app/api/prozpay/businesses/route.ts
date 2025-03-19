import { NextRequest, NextResponse } from "next/server";
import { getEntityBusinesses } from "@/server/data/prozpay";

export async function GET(request: NextRequest) {
  const entityId = request.nextUrl.searchParams.get("entityId");
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }
  try {
    const users = await getEntityBusinesses(parseInt(entityId));
    return NextResponse.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to get businesses", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to get businesses", message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
