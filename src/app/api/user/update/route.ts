import { NextRequest, NextResponse } from "next/server";
import { parseAndValidateId, validateFields } from "@/server/data/common";
import { updateUserSeoData, updateUserTaglines } from "@/server/data/taglines";
import { updateUserBio } from "@/server/data/bio";
import { updateFields } from "@/server/data/user";

export async function POST(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  const body = await request.json();
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  let returnData: any = null;
  switch (body.section) {
    case "tagline-seo":
      await updateUserTaglines(entityId, body.serviceId, body.tagline, body.poolId);
      await updateUserSeoData(entityId, body.profile_title, body.meta_description, body.serviceId);
      break;
    case "bio":
      updateUserBio(entityId, body.serviceId, body.value, body.poolId);
      break;
    case "profile-fields":
      if (!body.fields) {
        return NextResponse.json({ error: "Validation failed" }, { status: 400 });
      }
      // Validate only profile fields
      const { validFields, validationErrors } = await validateFields(body.fields, entityId);

      console.log(validFields);
      if (validationErrors.length > 0) {
        return NextResponse.json(
          { error: "Validation failed", errors: validationErrors },
          { status: 400 }
        );
      }
      returnData = validFields;
      // Update valid fields in the database
      await updateFields(validFields, entityId);
      break;
    default:
      returnData = null;
      break;
  }

  try {
    // const starRating = await getStarRating(entityId);
    return NextResponse.json(returnData);
  } catch (error) {
    console.error("Failed to update data:", error);
    return NextResponse.json({ error: "Error updating data" }, { status: 500 });
  }
}
