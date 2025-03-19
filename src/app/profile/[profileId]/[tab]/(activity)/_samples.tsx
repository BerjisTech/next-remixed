"use client";

import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser } from "@/interfaces/account";
import { useGetUserPortfolioQuery } from "@/lib/store/features/profile/profileApiSlice";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import AddSamples from "./_addSamples";
import { Button } from "@/components/shadcn/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { SquarePlus } from "lucide-react";

const Samples = ({ user }: { user: ProzUser }) => {
  const dispatch = useAppDispatch();
  const { getLanguagePair, getLanguageFromCode } = useContentHook();
  const { refetchSamples } = useAppSelector((state) => state.content);
  const {
    data: samples,
    isLoading: samplesLoading,
    refetch,
  } = useGetUserPortfolioQuery(user.entity_id, { skip: !user.entity_id });
  const [showAll, setShowAll] = useState(false);
  const MAX_VISIBLE_ROWS = 1;

  useEffect(() => {
    if (refetchSamples) {
      refetch();
      dispatch(setContentSliceBits({ bitToSet: "refetchSamples", value: false }));
    }
  }, [refetchSamples]);

  const handleEdit = (translation_id: number) => {
    const filteredSample = samples?.filter((item) => item.translation_id === translation_id);
    dispatch(
      setContentSliceBits({ bitToSet: "sample", value: filteredSample ? filteredSample[0] : null })
    );
    dispatch(setContentSliceBits({ bitToSet: "showDrawerSamples", value: true }));
  };

  return (
    <div className="w-full">
      {samplesLoading && <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />}
      {!samplesLoading && (
        <div className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-xl bg-accent">
          <div className="flex flex-row justify-between w-full">
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-dark-blue-hue">
              Samples
            </p>
            {user.is_owner && (
              <div className="flex flex-row gap-3">
                <AddSamples>
                  <Button
                    size="icon"
                    onClick={() => {
                      dispatch(setContentSliceBits({ bitToSet: "showDrawerSamples", value: true }));
                    }}
                  >
                    <SquarePlus />
                  </Button>
                </AddSamples>
                {/* <PersonalPrefs value={user.prof_prefs.show_project_history_tab} prefName='show_project_history_tab' entityId={user.entity_id} /> */}
              </div>
            )}
          </div>
          {samples && samples.length > 0 ? (
            <div className="w-full">
              {(showAll ? samples : samples.slice(0, MAX_VISIBLE_ROWS)).map((item, index) => (
                <div
                  className={clsx(
                    "bg-white dark:bg-dark border border-white flex flex-col text-sm shadow-lg rounded-xl p-3",
                    { "my-2": showAll }
                  )}
                  key={index}
                >
                  <div className="flex justify-between">
                    <div>
                      <p>
                        <span className="font-bold">
                          {getLanguagePair(item.language_pair)}: {item.title}
                        </span>
                      </p>
                      <p>
                        <span className="font-bold">General field:</span>
                        &nbsp;{item.general_field}
                      </p>
                      <p>
                        <span className="font-bold">Detailed field:</span>
                        &nbsp;{item.detailed_field}
                      </p>
                    </div>
                    {user.is_owner && (
                      <div>
                        <span
                          className="material-symbols-outlined text-primary"
                          role="button"
                          onClick={() => {
                            handleEdit(item.translation_id as number);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row border border-primary mt-3 rounded-xl">
                    <div className="basis-1/2 p-2">
                      <p className="font-bold">
                        Source - {getLanguageFromCode(item.language_pair.split("_")[0])}
                      </p>
                      {item.source_text}
                    </div>
                    <div className="basis-1/2 p-2">
                      <p className="font-bold">
                        Translation - {getLanguageFromCode(item.language_pair.split("_")[1])}
                      </p>
                      {item.target_text}
                    </div>
                  </div>
                </div>
              ))}
              {samples.length > MAX_VISIBLE_ROWS && (
                <div className="flex justify-self-end mt-2">
                  <button
                    className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    {showAll ? `Show Less` : `Show All (${samples.length})`}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No samples found!
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Samples;
