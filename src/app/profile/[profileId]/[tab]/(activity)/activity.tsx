import React from "react";
import OutsourcerFeedback from "../../../(partialsCommon)/_clientsFeedback";
import { ProzUser } from "@/interfaces/account";
import SideNav from "./_sideNav";
import ProjectSummary from "./_projectSummary";
import ProjectHistory from "./_projectHistory";
import RatingsGiven from "./_ratingsGiven";
import KudozActivity from "./_kudozActivity";
import { parseSerializedPhp } from "@/utils/helpers";
import Events from "./_events";
import Glossaries from "./_glossaries";
import Articles from "./_articles";
import Samples from "./_samples";

export default function ActivityPage({ user }: { user: ProzUser }) {
  const prefs = parseSerializedPhp(user.prof_prefs.about_me_module);
  const getSideNavigationLinks = (): { name: string; link: string }[] | [] => {
    if (user) {
      return [
        { name: "Project history", link: `/profile/${user.entity_id}/activity#project-history` },
        { name: "Ratings received", link: `/profile/${user.entity_id}/activity#ratings-received` },
        { name: "Reviews given", link: `/profile/${user.entity_id}/activity#ratings-given` },
        { name: "Community", link: `/profile/${user.entity_id}/activity#community` },
        {
          name: "Membership history",
          link: `/profile/${user.entity_id}/activity#membership-history`,
        },
      ];
    }
    return [];
  };
  return (
    <div className="flex flex-col md:flex-row justify-start items-start flex-grow-0 flex-shrink-0 gap-4 mt-5 min-h-screen">
      <div className="flex flex-col justify-start items-start flex-grow gap-4 w-full md:w-auto">
        <div
          id="project-history"
          className="w-full flex flex-col xl:flex-row justify-start items-start gap-4"
        >
          {(user.can_edit || (prefs && prefs.ph === "on")) && <ProjectSummary user={user} />}
          {(user.can_edit || (prefs && prefs.kudoz === "on")) && <KudozActivity user={user} />}
        </div>

        {(user.can_edit || user.prof_prefs.show_project_history_tab === "y") && (
          <ProjectHistory user={user} />
        )}
        {(user.can_edit || user.prof_prefs.show_wwa_ratings === "y") && (
          <OutsourcerFeedback user={user} />
        )}
        {(user.can_edit || user.prof_prefs.show_bb_tab) && <RatingsGiven user={user} />}
        <Glossaries user={user} />
        <Articles user={user} />
        <Events user={user} />
        <Samples user={user} />
      </div>
      <div className="sticky top-[175px] hidden md:flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-48 gap-14 min-h-full">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          {getSideNavigationLinks().length > 0 && <SideNav navs={getSideNavigationLinks()} />}
        </div>
      </div>
    </div>
  );
}
