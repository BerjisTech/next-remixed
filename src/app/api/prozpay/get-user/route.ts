import { NextRequest, NextResponse } from "next/server";
import { findUser } from "@/server/data/prozpay";

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get("searchQuery");
  if (!searchQuery) {
    return NextResponse.json({ error: "Invalid search query" }, { status: 400 });
  }
  try {
    const users = await findUser(searchQuery);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to get users" }, { status: 500 });
  }
}
