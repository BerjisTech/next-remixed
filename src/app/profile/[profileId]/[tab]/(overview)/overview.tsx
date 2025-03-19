import React from "react";
import OutsourcerFeedback from "../../../(partialsCommon)/_clientsFeedback";
import ConsiderMembers from "../../../(partialsCommon)/_considerMembers";
import Languages from "../../../(partialsCommon)/_languages";
import Services from "./_services";
import Compliance from "./_compliance";
import Bio from "../../../(partialsCommon)/_bio";
import ProbonoWork from "../../../(partialsCommon)/_probonoWork";
import CommunityParticipation from "./_communityParticipation";
import Discipline from "./_discipline";
import { ProzUser } from "@/interfaces/account";

export default function OverviewPage({ user }: { user: ProzUser }) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mt-[24px]">
      <div className="w-full flex flex-col xl:flex-row justify-start items-start gap-4">
        <Languages entityId={user?.entity_id} />
        <Services entityId={user?.entity_id} />
      </div>

      <div className="w-full flex flex-col xl:flex-row justify-start items-start gap-4">
        <Discipline entityId={user?.entity_id} />
        <Compliance user={user} />
      </div>

      <Bio user={user} />
      {(user.can_edit || user.prof_prefs.show_wwa_ratings === "y") && (
        <OutsourcerFeedback user={user} />
      )}
      {(user.can_edit ||
        (user.entity_volunteer_settings && user.entity_volunteer_settings.visible === "y")) && (
        <CommunityParticipation user={user} />
      )}
      {(user.can_edit ||
        (user.entity_volunteer_settings && user.entity_volunteer_settings.is_willing === "y")) && (
        <ProbonoWork user={user} />
      )}
      {(!user.is_professional_member || user.is_owner) && <ConsiderMembers user={user} />}
    </div>
  );
}
