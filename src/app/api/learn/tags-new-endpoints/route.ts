import { NextRequest, NextResponse } from "next/server";
import { TagsService } from "@/server/services/learn/Tags";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // get id param
  const courseId = searchParams.get("courseId") || "0";
  const search = searchParams.get("search") || "";

  const tagsService = new TagsService();

  let response: any = await tagsService.getTags(courseId, search);
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const body = await request.json();

  const tagsService = new TagsService();

  let response: any = await tagsService.createTag(body.tag_title);
  return NextResponse.json(response, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const tagsService = new TagsService();

  if (body.update_status) {
    let response: any = await tagsService.updateTagStatus(body);
    return NextResponse.json(response, { status: 200 });
  } else {
    let response: any = await tagsService.updateTag(body);
    return NextResponse.json(response, { status: 200 });
  }
}
