"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { useGetUserKnownLanguagesQuery } from "@/lib/store/features/profile/profileApiSlice";
import React, { useState } from "react";

const Languages = ({ entityId }: { entityId: number | undefined }) => {
  const {
    getLanguagesStr,
    getFilteredNonNativeLanguages,
    getFilteredNativeLanguages,
    getLanguagesStrTruncated,
  } = useContentHook();
  const {
    data: languages,
    error: languagesError,
    isLoading: languagesLoading,
  } = useGetUserKnownLanguagesQuery(entityId, { skip: !entityId });
  const [showAllLangs, setShowAllLangs] = useState({ nonNative: false, native: false });

  const filteredNativeLanguages = getFilteredNativeLanguages(languages);
  const filteredNonNativeLanguages = getFilteredNonNativeLanguages(languages);
  console.log("Setting user languages");

  const renderLanguagesSection = (
    isNative: boolean,
    languagesArray: string[],
    showAll: boolean,
    toggleShowAll: () => void
  ) => {
    const prefix = isNative ? "Native in:" : "Works in:";

    return (
      <span className="flex w-full text-base text-left text-dark dark:text-accent-foreground">
        <span className="min-w-20 font-bold text-dark-blue-hue">{prefix}</span>
        {languages && languagesArray && languagesArray.length > 0 && (
          <React.Fragment>
            {languagesArray.length > 3 ? (
              <span className="flex justify-between items-start w-full">
                {showAll ? (
                  <React.Fragment>
                    {getLanguagesStr(languages, isNative, languagesArray)}
                    <button
                      className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                      onClick={toggleShowAll}
                    >
                      Show less
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getLanguagesStrTruncated(languages, isNative, languagesArray)}
                    <button
                      className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                      onClick={toggleShowAll}
                    >
                      Show all ({languagesArray.length})
                    </button>
                  </React.Fragment>
                )}
              </span>
            ) : (
              <span>{getLanguagesStr(languages, isNative, languagesArray)}</span>
            )}
          </React.Fragment>
        )}
      </span>
    );
  };

  return (
    <React.Fragment>
      {languagesLoading ? (
        <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />
      ) : (
        <div className="w-full flex flex-col justify-start items-start flex-grow gap-4 px-6 py-4 rounded-custom bg-accent dark:bg-black min-h-[150px]">
          <div className="w-full flex justify-start items-center relative gap-4">
            <span className="w-full text-lg font-semibold text-left text-dark-blue-hue">
              Languages
            </span>
          </div>
          {languages && Object.keys(languages).length > 0 ? (
            <div className="w-full flex justify-start items-center relative gap-1">
              <p className="w-full text-base text-left text-black dark:text-accent-foreground">
                {renderLanguagesSection(true, filteredNativeLanguages, showAllLangs.native, () =>
                  setShowAllLangs((prev) => ({ ...prev, native: !prev.native }))
                )}
                <br />
                {renderLanguagesSection(
                  false,
                  filteredNonNativeLanguages,
                  showAllLangs.nonNative,
                  () => setShowAllLangs((prev) => ({ ...prev, nonNative: !prev.nonNative }))
                )}
              </p>
            </div>
          ) : (
            <span className="w-full text-sm font-medium text-left text-primary-900">
              No languages reported yet.
            </span>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Languages;
