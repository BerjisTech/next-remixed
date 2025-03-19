"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { useFetchUserFieldOfExpertiseQuery } from "@/lib/store/features/profile/profileApiSlice";
import React, { useState } from "react";

const Discipline = ({ entityId }: { entityId: number | undefined }) => {
  const { getSpecDisciplinesStr } = useContentHook();
  const {
    data: specDisciplines,
    error: servicesError,
    isLoading: servicesLoading,
  } = useFetchUserFieldOfExpertiseQuery(entityId, { skip: !entityId });
  const [showAllDisciplines, setShowAllDisciplines] = useState(false);

  // Use an empty array if specDisciplines is undefined
  const specDisciplinesArray = specDisciplines ?? [];
  const specDisciplinesToDisplay = showAllDisciplines
    ? specDisciplinesArray
    : specDisciplinesArray.slice(0, 3);

  return (
    <React.Fragment>
      {servicesLoading && <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />}

      {!servicesLoading && (
        <div className="w-full flex flex-col justify-start items-start flex-grow gap-4 px-6 py-4 rounded-custom bg-accent dark:bg-black min-h-[150px]">
          <div className="w-full flex justify-start items-center relative gap-4">
            <p className="w-full text-lg font-semibold text-dark-blue-hue text-left ">
              Subject matter expertise
            </p>
          </div>
          {specDisciplines && specDisciplines?.length > 0 ? (
            <div className="w-full flex justify-start items-center relative gap-4">
              <p className="w-full text-left text-dark dark:text-white">
                <span className="min-w-[120px] font-bold text-dark-blue-hue">Specializes in</span>
                <span className="w-full flex justify-between items-start text-base text-left text-black dark:text-accent-foreground">
                  {specDisciplinesToDisplay.length > 0 && (
                    <span>{getSpecDisciplinesStr(specDisciplinesToDisplay)}</span>
                  )}
                  {specDisciplinesArray.length > 3 && (
                    <button
                      className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                      onClick={() => setShowAllDisciplines((prev) => !prev)}
                    >
                      {showAllDisciplines
                        ? "Show less"
                        : `Show all (${specDisciplinesArray.length})`}
                    </button>
                  )}
                </span>
              </p>
            </div>
          ) : (
            <span className="w-full text-sm font-medium text-left text-primary-900">
              No specialty fields reported yet.
            </span>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Discipline;
