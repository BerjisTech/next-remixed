import type { Metadata } from "next";
import React, { Suspense } from "react";
import { getUserInfo } from "@/server/data/user";
import { DEFAULT_USER_INFO_COLS } from "@/constants/common";
import { ProzUser } from "@/interfaces/account";
import ProfileSidebar from "../../(partialsCommon)/_profileSidebar";
import AccountUserCard from "../../(partialsCommon)/_accountUserCard";
import TabsSection from "../../(partialsCommon)/_tabsSection";
import OverviewPage from "./(overview)/overview";
import ActivityPage from "./(activity)/activity";
import MoreServices from "./(more)/more";
import InterpretingPage from "./(interpreting)/interpreting";
import TranslatingPage from "./(translating)/translating";
import SubtitlingPage from "./(subtitling)/subtitling";
import { auth } from "../../../../../auth.config";
import { Skeleton } from "@/components/shadcn/skeleton";
import ClientData from "./_clientData";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const ProfileUpdaterDrawer = dynamic(() => import("../../(profileUpdater)/_profileUpdaterDrawer"), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: Readonly<{ params: { profileId: number; tab: string } }>): Promise<Metadata> {
  let user = await getUserInfo({
    ...DEFAULT_USER_INFO_COLS,
    entity_id: params?.profileId,
    include_entity_resources_table: true,
  });
  if (!user) return notFound();
  // const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = user.entity_id > 0;

  return {
    title: user.profile_title || "Translator Profile",
    description:
      user.meta_description ||
      "Translation service and translation jobs for freelance translators and translation agencies",
    keywords: user.keywords || "",
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
  };
}

export default async function ProfileLayout({
  params,
}: Readonly<{ params: { profileId: number; tab: string } }>) {
  const session = await auth();
  let user = await getUserInfo({
    ...DEFAULT_USER_INFO_COLS,
    entity_id: params?.profileId,
    include_entity_resources_table: true,
    include_rating_data: true,
    include_pro_bono_data: true,
    include_membership_data: true,
    include_pro_tag_data: true,
    include_completeness_data: true,
    include_entity_about_me_table: true,
    include_pools_data: true,
    include_user_services: true,
    include_taglines: true,
    include_preferences: true,
    include_user_pass_table: true,
  });
  user = JSON.parse(JSON.stringify(user));
  // Set permissions here which actions user/visitor can perform
  if (!user) {
    return notFound();
  } else {
    user.is_owner = session?.user.entity_id === Number(params?.profileId) ? true : false;
    user.is_admin = session?.user.is_admin === true && user.is_owner ? true : false;
    user.is_pseudo = session?.user.is_pseudo === true ? true : false;
    user.can_edit = session?.user.is_admin || user.is_owner;
  }

  return (
    <Suspense fallback={<Skeleton className="min-h-screen max-h-screen m-auto p-20" />}>
      {/* To avoid separate query to set profile data in redux this component is added to set data in redux. @fawad */}
      {user && <ClientData user={user} />}
      <main className=" pb-[100px] dark:bg-dark">
        <div className="flex items-start justify-start p-5 gap-3 container">
          <div className="w-full xl:w-[300px] fixed md:sticky top-[75px] pt-4 hidden md:flex flex-col gap-3">
            {user && <ProfileSidebar user={user} />}
          </div>
          <div className="w-full xl:w-[calc(100%-300px)]">
            {user && (
              <React.Fragment>
                <AccountUserCard user={user} />
                <TabsSection user={user} />
              </React.Fragment>
            )}
            {user && params?.tab === "overview" && <OverviewPage user={user} />}
            {user && params?.tab === "translating" && <TranslatingPage user={user} />}
            {user && params?.tab === "interpreting" && <InterpretingPage user={user} />}
            {user && params?.tab === "subtitling" && <SubtitlingPage user={user} />}
            {user && params?.tab === "more" && <MoreServices user={user} />}
            {user && params?.tab === "activity" && <ActivityPage user={user} />}
            {user && <ProfileUpdaterDrawer user={user as ProzUser} />}
          </div>
        </div>
      </main>
    </Suspense>
  );
}
