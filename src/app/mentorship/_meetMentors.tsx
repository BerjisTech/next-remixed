"use client";

import React from "react";
import { useContentHook } from "@/hooks/useContentHook";
import { useMentors } from "@/hooks/useMentorsHook";
import MentorCard from "@/app/mentorship/_mentorCard";
import { Skeleton } from "@/components/shadcn/skeleton";

const MeetMentors = () => {
  const { getCountryNameCountryCode, getFlagFromCountryCode, getLanguageFromCode } =
    useContentHook();
  const { mentors, loading, error } = useMentors();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 py-12 px-8">
      <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
        Meet some of the mentors
      </h2>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} className="h-48 rounded-xl" />
          ))}
        </div>
      )}
      {error && <div className="text-center py-8 text-red-500">{error.toString()}</div>}
      {!loading && !error && mentors && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.slice(0, 12).map((mentor, index) => (
            <MentorCard
              key={`${mentor.site_name}-${index}`}
              mentor={mentor}
              getCountryNameCountryCode={getCountryNameCountryCode}
              getFlagFromCountryCode={getFlagFromCountryCode}
              getLanguageFromCode={getLanguageFromCode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetMentors;
