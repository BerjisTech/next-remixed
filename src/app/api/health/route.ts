import { NextResponse } from "next/server";

// Add basic GET route that returns 200 with a JSON body
export async function GET() {
  return new NextResponse(JSON.stringify({ message: "Health check OK" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
