import { getTestimonials } from "@/server/data/testimonials";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const getArea = request.nextUrl.searchParams.get("area");
  const limit = request.nextUrl.searchParams.get("limit");
  try {
    const testimonials = await getTestimonials(getArea as string, parseInt(limit as string) ?? 20);
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {}
