// src/app/api/nav-links/route.ts
import {
  getNavLinks,
  createNewNavLink,
  updateNavLink,
  deleteNavLink,
} from "@/server/data/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const navLinks = await getNavLinks();
    return NextResponse.json(navLinks);
  } catch (error) {
    console.error("Error fetching nav links:", error);
    return NextResponse.json({ error: "Failed to fetch nav links" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const newNavItem = await request.json(); // Parse the request body
    const result = await createNewNavLink(newNavItem);
    await getNavLinks(true);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating nav link:", error);
    return NextResponse.json({ error: "Failed to create nav link" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedNavItem = await request.json(); // Parse the request body
    const result = await updateNavLink(updatedNavItem);
    await getNavLinks(true);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating nav link:", error);
    return NextResponse.json({ error: "Failed to update nav link" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json(); // Parse the request body to get `id`
    if (!id) {
      return NextResponse.json({ error: "Nav item ID is required" }, { status: 400 });
    }
    const result = await deleteNavLink(Number(id));
    await getNavLinks(true);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error deleting nav link:", error);
    return NextResponse.json({ error: "Failed to delete nav link" }, { status: 500 });
  }
}
