"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import ProBonoCard from "@/components/shared/cards/proBonoCard";
import TranslationMastermindCard from "@/components/shared/cards/translationMastermindCard";
import WitCard from "@/components/shared/cards/witCard";
import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { ProzUser } from "@/interfaces/account";
import { useGetUserCommunityParticipationQuery } from "@/lib/store/features/profile/profileApiSlice";
import React from "react";

const participation = [
  {
    name: "Women in Translation",
    link: "/community/women-in-translation",
  },
  {
    name: "Pro Bono",
    link: "/community/proz-pro-bono",
  },
  {
    name: "Interpreters Network",
    link: "/community/women-in-translation",
  },
];
const CommunityParticipation = ({ user }: { user: ProzUser }) => {
  const { data: participation, isLoading: participationLoading } =
    useGetUserCommunityParticipationQuery(user.entity_id, { skip: !user.entity_id });
  const { entity_volunteer_settings } = user;

  const renderCommunityCard = (communityId: number, membersCount: number) => {
    switch (communityId) {
      case 1:
        return <WitCard key={communityId} membersCount={membersCount} />;
      case 2:
        return <TranslationMastermindCard key={communityId} membersCount={membersCount} />;
      case 3:
        return <ProBonoCard key={communityId} membersCount={membersCount} />;
      default:
        return null;
    }
  };
  return (
    <React.Fragment>
      {participationLoading && (
        <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />
      )}
      {!participationLoading && (
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start relative gap-4 p-6 rounded-custom bg-accent dark:bg-black">
            <div className="flex flex-row justify-between w-full">
              <p className="w-full text-lg font-semibold text-left text-dark-blue-hue dark:text-white">
                Community participation
              </p>
              {user.is_owner && (
                <div className="flex flex-row gap-3">
                  <PersonalPrefs
                    category="entity_volunteer_settings"
                    prefName="visible"
                    value={
                      entity_volunteer_settings && entity_volunteer_settings.visible === "y"
                        ? "y"
                        : "n"
                    }
                    entityId={user.entity_id}
                  />
                </div>
              )}
            </div>
            {participation && Object.keys(participation).length > 0 ? (
              <React.Fragment>
                <p className="text-dark-blue-hue text-sm">
                  {user.site_name} is part of the following communities:
                </p>
                <div className="w-full flex justify-start items-center relative gap-1 py-2 rounded-[9px] text-primary">
                  {participation.entity_participation.map((item: any) => {
                    const totalMembers =
                      participation.total_members?.find(
                        (community: any) => community.community_id === item.community_id
                      )?.total_members || 0;
                    return renderCommunityCard(item.community_id, totalMembers);
                  })}
                </div>
              </React.Fragment>
            ) : (
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
                <span className="w-full text-sm font-medium text-left text-primary-900">
                  {user.site_name} is not a part of any communities.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CommunityParticipation;
