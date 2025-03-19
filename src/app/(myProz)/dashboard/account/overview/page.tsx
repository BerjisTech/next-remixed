"use client";
import React from "react";
import WebsiteCard from "./_websiteCard";
import { useAppSelector } from "@/lib/store/hooks";
import {
  useFetchUserGenderPronounsQuery,
  useFetchUserWixWebsitesQuery,
} from "@/lib/store/features/profile/profileApiSlice";
import ProzPayPending from "./_prozpayPending";
import BlueboardAffiliation from "./_blueboardAffiliation";
import Courses from "./_courses";
import PoolProfiles from "./_poolProfiles";
import WorkHiring from "./_workHiring";
import CommunityResources from "./_communityResources";
import Wallet from "./_wallet";
import MembershipCard from "@/components/shared/account/membershipCard";
import AccountUserCard from "../../_accountUserCard";
import { Skeleton } from "@/components/shadcn/skeleton";

export default function Overview() {
  const { user, canEdit } = useAppSelector((state) => state.profile);
  const {
    data: websites,
    error: websitesError,
    isLoading: websitesLoading,
  } = useFetchUserWixWebsitesQuery(user?.entity_id, { skip: !user });
  const {
    data: userGenderPronouns,
    error: userGenderPronounsError,
    isLoading: userGenderPronounsLoading,
  } = useFetchUserGenderPronounsQuery(user?.entity_id, { skip: !user });
  const {
    data: membership,
    error: membershipError,
    isLoading: membershipLoading,
  } = useFetchUserGenderPronounsQuery(user?.entity_id, { skip: !user });

  return (
    <main className="">
      <div className="grid grid-cols-4 gap-2 max-sm:block">
        {userGenderPronounsLoading || !user ? (
          <Skeleton className="col-span-3 max-sm:w-full !h-[15rem]" />
        ) : (
          <div className="col-span-3 max-sm:w-full ">
            <AccountUserCard
              user={user}
              canEdit={canEdit}
              userGenderPronouns={userGenderPronouns}
            />
          </div>
        )}

        {membershipLoading || !membership ? (
          <Skeleton className="col-span-1 max-sm:w-full !h-[15rem]" />
        ) : (
          <div className="col-span-1 max-sm:w-full ">
            <MembershipCard />
          </div>
        )}
      </div>
      {websitesLoading || !websites ? (
        <Skeleton className="block mx-1 !h-[15rem] w-full mt-5" />
      ) : (
        <Wallet />
      )}
      <section className="md:flex sm:block items-start justify-between flex-wrap gap-2 mt-5">
        {websitesLoading || !websites ? (
          <Skeleton className="block mx-1 !h-[10rem] w-full " />
        ) : (
          <WebsiteCard websites={websites} />
        )}
        {websitesLoading ? (
          <Skeleton className="block mx-1 !h-[10rem] w-full " />
        ) : (
          <ProzPayPending />
        )}
        {websitesLoading ? (
          <Skeleton className="block mx-1 !h-[10rem] w-full " />
        ) : (
          <BlueboardAffiliation />
        )}
        {websitesLoading ? (
          <Skeleton className="block mx-1 !h-[10rem] w-full " />
        ) : (
          <PoolProfiles />
        )}
        {websitesLoading ? <Skeleton className="block mx-1 !h-[10rem] w-full " /> : <WorkHiring />}
        {websitesLoading ? <Skeleton className="block mx-1 !h-[10rem] w-full " /> : <Courses />}
        {websitesLoading ? (
          <Skeleton className="block mx-1 !h-[10rem] w-full " />
        ) : (
          <CommunityResources />
        )}
      </section>
    </main>
  );
}
