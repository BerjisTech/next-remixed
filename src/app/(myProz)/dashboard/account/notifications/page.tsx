"use client";
import React, { useState } from "react";
import SideNav from "./_sideNav";
import GeneralNotifications from "./(others)/_generalNotifications";
import BrowserNotifications from "./(others)/_browserNotifications";
import ForumNotifications from "./(others)/_forumNotifications";
import NotificationHistory from "./(others)/_notificationHistory";
import Unsubscribe from "./(others)/_unsubscribe";
import JobsNotifications from "./(jobs)/_jobsNotifications";
import FlagPoster from "./(jobs)/_flagPoster";
import FilteredProviders from "./(jobs)/_filteredProviders";
import AnswerTracking from "./(kudoz)/_answerTracking";
import FlagAsker from "./(kudoz)/_flagAsker";
import KudozNotifications from "./(kudoz)/_kudozNotifications";
import { useGetKudozPreferencesQuery } from "@/lib/store/features/kudoz/kudozApiSlice";
import { useAppSelector } from "@/lib/store/hooks";

const AccountNotifications = () => {
  const [activeSubNav, setActiveSubNav] = useState<string>("general");
  const { user } = useAppSelector((state) => state.profile);
  const { data: kudozNotificationPreferences, isLoading: kudozNotificationPreferencesLoading } =
    useGetKudozPreferencesQuery(user?.entity_id, { skip: !user });

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <section
        id="overview"
        className="dark:bg-black border-[1px] flex-grow rounded-xl p-5 bg-white flex flex-col gap-4 justify-start"
      >
        {activeSubNav === "general" && <GeneralNotifications />}
        {activeSubNav === "browser" && <BrowserNotifications />}
        {activeSubNav === "forums" && <ForumNotifications />}
        {activeSubNav === "history" && <NotificationHistory />}
        {activeSubNav === "unsubscribe" && <Unsubscribe />}
        {activeSubNav === "jobs_emails" && <JobsNotifications />}
        {activeSubNav === "jobs_poster_flags_to_filter" && <FlagPoster />}
        {activeSubNav === "jobs_filtered_providers" && <FilteredProviders />}
        {activeSubNav === "kudoz_answer_tracking" && <AnswerTracking />}
        {activeSubNav === "kudoz_asker_flag_filter" && <FlagAsker />}
        {activeSubNav === "kudoz_emails" && !kudozNotificationPreferencesLoading && (
          <KudozNotifications kudozNotificationPreferences={kudozNotificationPreferences} />
        )}
      </section>
      <SideNav setActiveSubNav={setActiveSubNav} activeSubNav={activeSubNav} />
    </div>
  );
};

export default AccountNotifications;
