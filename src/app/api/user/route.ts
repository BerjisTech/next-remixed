import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId } from "@/server/data/common";
import { getUserInfo } from "@/server/data/user";
import { DEFAULT_USER_INFO_COLS } from "@/constants/common";
// import { getAllCollections } from '@/server/database/mongodb/mongoQueryHelper';

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  const options = { ...DEFAULT_USER_INFO_COLS, entity_id: entityId };
  if (request.nextUrl.searchParams.has("include_membership_data")) {
    options.include_membership_data = true;
  }

  if (request.nextUrl.searchParams.has("include_language_pairs")) {
    options.include_language_pairs = true;
  }

  if (request.nextUrl.searchParams.has("include_entity_resourses")) {
    options.include_entity_resources_table = true;
  }

  if (request.nextUrl.searchParams.has("include_field_of_expertise")) {
    options.include_field_of_expertise = true;
  }

  // Language credentials, necesary to quoting system in Opportunities marketplace (Jobs)
  // https://www.proz.com/settings/languages#credentials
  if (request.nextUrl.searchParams.has("include_language_credentials")) {
    options.include_language_credentials = true;
  }

  // options.include_entity_about_me_table = true;
  // options.include_entities_table = false
  // options.include_membership_data = true;
  // options.include_pools_data = true;
  // options.include_entity_resources_table = true;
  // options.include_taglines = true;
  // options.include_preferences = true

  try {
    const user = await getUserInfo(options);
    return NextResponse.json([user]);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "POST request received" });
}
