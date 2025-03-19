"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import StarRating from "@/components/shared/starRating";
import { useGetUserStarRatingQuery } from "@/lib/store/features/profile/profileApiSlice";
import { getFormattedDate } from "@/utils/helpers";
import Link from "next/link";
import React from "react";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser } from "@/interfaces/account";
import { Button } from "@/components/shadcn/button";
import { MessageSquareDiff } from "lucide-react";
import ProzTooltip from "@/components/shared/prozTooltip";
import PersonalPrefs from "@/components/shared/preferences/personalPref";

const OutsourcerFeedback = ({ user }: { user: ProzUser }) => {
  const { data: outsourceFeedback, isLoading: outsourceFeedbackLoading } =
    useGetUserStarRatingQuery(user.entity_id, { skip: !user.entity_id });
  const { setDrawerVisibility } = useContentHook();

  return (
    <React.Fragment>
      {outsourceFeedbackLoading && <Skeleton className="h-[125px] w-full" />}
      {!outsourceFeedbackLoading && (
        <div
          id="ratings-received"
          className="flex flex-col justify-start items-start self-stretch gap-4 p-6 rounded-custom bg-accent dark:bg-black"
        >
          <div className="flex justify-between items-start self-stretch  relative">
            <p className="text-lg font-semibold text-left text-dark-blue-hue">
              Feedback from clients
            </p>
            {user.is_owner && (
              <div className="flex flex-row gap-3">
                <ProzTooltip message="Give feedback">
                  <Button
                    size="icon"
                    className="font-bold"
                    onClick={() => setDrawerVisibility("review")}
                  >
                    <MessageSquareDiff />
                  </Button>
                </ProzTooltip>
                <PersonalPrefs
                  prefName="show_wwa_ratings"
                  value={user.prof_prefs.show_wwa_ratings}
                  entityId={user.entity_id}
                />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-center items-start w-full gap-2">
            {outsourceFeedback &&
              outsourceFeedback.length > 0 &&
              outsourceFeedback.slice(0, 3).map((feedback, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-lg flex flex-col justify-start items-start flex-grow h-auto relative gap-3 p-5 rounded-custom bg-white dark:bg-dark border border-accent-light basis-1/2 text-ellipsis overflow-hidden"
                  >
                    <div className="flex justify-between items-center w-full relative">
                      <StarRating size="small" rating={feedback.wwa_rating.toString()} />
                      <p className="flex-grow-0 flex-shrink-0 text-xs italic text-left text-dark-blue-hue dark:text-accent-foreground">
                        {feedback.record_created_at
                          ? getFormattedDate(feedback.record_created_at)
                          : feedback.record_created_at}
                      </p>
                    </div>
                    <div className="min-h-[122px]">
                      <p className="text-dark-blue-hue dark:text-accent-foreground break-all text-justify text-ellipsis pb-3">
                        {feedback.comment}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          {(!outsourceFeedback || outsourceFeedback.length == 0) && (
            <div className="flex justify-start relative gap-1 px-3 py-2 rounded-[9px] bg-secondary">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No feedback available!{" "}
              </span>
            </div>
          )}
          {outsourceFeedback && outsourceFeedback.length > 2 && (
            <div className="flex justify-end items-center w-full relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-primary">
                <Link href={`/reviews/outsourcers?entity_id=1`}>
                  See all {outsourceFeedback.length} reviews
                </Link>
              </p>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6 12.5L10 8.5L6 4.5"
                  stroke="#4D9D9D"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default OutsourcerFeedback;
