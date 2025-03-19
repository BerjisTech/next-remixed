import { parseAndValidateId } from "@/server/data/common";
import { eventsOrganized, getEntityConferencesAttended } from "@/server/data/events";
import { getPowwowsInfo } from "@/server/data/powwow";
import { getEntityTrainings } from "@/server/data/trainings";
import { MoodleService } from "@/server/services/Moodle";
import { TvService } from "@/server/services/Tv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  try {
    let rData: Record<string, any> = {};
    const tvService = new TvService();
    const mdlService = new MoodleService();
    const conferences = await getEntityConferencesAttended(entityId);
    const tvCredentials = await tvService.getEntityTvCredentials(entityId, { credit_earned: "y" });
    const userEventsOrganized = await eventsOrganized(entityId);
    const userTrainings = await getEntityTrainings(entityId);
    const mdlCerts = await mdlService.getCertificatesInfo({ entity_id: entityId });
    const powwowAttendance = await getPowwowsInfo(entityId);
    const powwowsOrganized = await getPowwowsInfo(entityId, true);
    rData = {
      ...(conferences ? { conferences } : {}),
      ...(tvCredentials ? { tv_credentials: tvCredentials } : {}),
      ...(userEventsOrganized ? { conferences_organized: userEventsOrganized } : {}),
      ...(userTrainings ? { user_trainings: userTrainings } : {}),
      ...(mdlCerts ? { moodle_certifications: mdlCerts } : {}),
      ...(powwowAttendance ? { powwow_attended: powwowAttendance } : {}),
      ...(powwowsOrganized ? { powwows_organized: powwowsOrganized } : {}),
    };
    return NextResponse.json(rData);
  } catch (error) {
    console.error("Error fetching pairs :", error);
    return NextResponse.json({ error: "Error fetching pairs" }, { status: 500 });
  }
}
