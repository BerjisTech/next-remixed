import { NextRequest, NextResponse } from "next/server";
import { MoodleService } from "@/server/services/Moodle";
import { fetchAccessToken } from "@/server/php-api/apiAuth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // get params
  const course_id = parseInt(searchParams.get("courseId") || "0", 10);
  const entity_id = searchParams.get("entityId") || "0";
  let db_courses = searchParams.get("dbCourses") || false;
  const is_active = searchParams.get("isActive") || "all";
  const tags = JSON.parse(searchParams.get("tags") || "[]");
  const search = searchParams.get("search") || "";

  if (Number(db_courses) == 0) {
    db_courses = false;
  }

  let newToken = null;
  if (!db_courses) {
    newToken = await fetchAccessToken(entity_id);

    if (!newToken) {
      return NextResponse.json({ message: "Error fetching courses" }, { status: 500 });
    }
  }

  const mdlService = new MoodleService();
  let response: any = [];
  if (course_id > 0) {
    if (db_courses) {
      response = await mdlService.getCourseDataFromDb(course_id, is_active);
    } else {
      response = await mdlService.getCourse(course_id, newToken);

      if (response && response.id) {
        // Membership restriction and pricing from mdl_course_offers
        const memberships_types_allowed = (await mdlService.getCourseMembershipTypesAllowed(
          course_id
        )) as any[];
        response.membership_types_allowed =
          memberships_types_allowed.length > 0 ? memberships_types_allowed[0].membership_types : "";

        // Database info
        const db_data_course = await mdlService.getCourseDataFromDb(course_id, is_active);
        if (db_data_course) {
          response.db_data_course = db_data_course.course || null;
          response.db_data_pricing = db_data_course.pricing || null;
        }
      }
    }
  } else {
    if (db_courses) {
      response = await mdlService.getCoursesFromDB(is_active, tags, search);
    } else {
      response = await mdlService.getCourses(newToken);
    }
  }

  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const params = await request.json();
  if (!params) {
    return NextResponse.json({ message: "Invalid course data" }, { status: 400 });
  }

  const mdlService = new MoodleService();
  const response = await mdlService.createCourse(params);

  return NextResponse.json(typeof response === "object" ? response : { data: response }, {
    status: 200,
  });
  if (!response) {
    return NextResponse.json({ message: "Error creating course" }, { status: 500 });
  }

  return NextResponse.json(response, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const params = await request.json();

  if (!params) {
    return NextResponse.json({ message: "Invalid course data" }, { status: 400 });
  }

  const mdlService = new MoodleService();
  let response: any;

  switch (params.action) {
    case "hideCourse":
      response = await mdlService.updateVisibilityCourse(params);
      break;
    default:
      response = await mdlService.updateCourse(params);
      break;
  }

  if (!response) {
    return NextResponse.json({ message: "Error updating course" }, { status: 500 });
  }

  return NextResponse.json(response, { status: 200 });
}
