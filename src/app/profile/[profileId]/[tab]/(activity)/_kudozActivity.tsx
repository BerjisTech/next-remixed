"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser } from "@/interfaces/account";
import { useGetUserKudozActivityQuery } from "@/lib/store/features/profile/profileApiSlice";
import { parseSerializedPhp } from "@/utils/helpers";
import React from "react";

const KudozActivity = ({ user }: { user: ProzUser }) => {
  const prefs = parseSerializedPhp(user.prof_prefs.about_me_module);
  const { getLanguagePair } = useContentHook();
  const {
    data: kudozActivity,
    error: servicesError,
    isLoading: kudozActivityLoading,
  } = useGetUserKudozActivityQuery(user.entity_id, { skip: !user.entity_id });
  return (
    <div className="w-full">
      {kudozActivityLoading && <Skeleton className="!h-[125px]" />}
      {!kudozActivityLoading && (
        <div
          id="project-summary"
          className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-custom bg-accent min-h-[150px]"
        >
          <div className="flex flex-row justify-between w-full">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-dark-blue-hue">
              KudoZ activity
            </p>
            {user.is_owner && prefs && (
              <div className="flex flex-row gap-3">
                <PersonalPrefs
                  category="about_me_module"
                  prefName="kudoz"
                  value={prefs.kudoz === "on" ? "y" : "n"}
                  entityId={user.entity_id}
                  defaultSetting={user.prof_prefs.about_me_module}
                />
              </div>
            )}
          </div>
          {kudozActivity &&
          (kudozActivity.count_fields ||
            kudozActivity.count_fields_detailed ||
            kudozActivity.count_pairs) ? (
            <React.Fragment>
              <div className="flex flex-col justify-start items-center w-full relative gap-1 rounded-[9px] bg-accent text-left">
                <p className="text-primary mb-4">
                  This user has earned KudoZ points by helping other translators with terminology
                  questions in the following languages and fields:
                </p>
                <div className="w-full text-sm">
                  <p className="text-left bg-primary text-accent-foreground rounded py-1 px-2 text-sm">
                    Top languages (PRO)
                  </p>
                  <div>
                    {kudozActivity.top_language_pairs &&
                      Object.keys(kudozActivity.top_language_pairs).map((item, index) => (
                        <p className="flex justify-between text-sm px-2" key={index}>
                          <span>{getLanguagePair(item)}</span>
                          <span>{kudozActivity.top_language_pairs[item]}</span>
                        </p>
                      ))}
                  </div>
                </div>

                <div className="w-full text-sm">
                  <p className="text-left bg-primary text-accent-foreground rounded py-1 px-2 text-sm">
                    Top general fields (PRO)
                  </p>
                  <div>
                    {kudozActivity.top_fields &&
                      Object.keys(kudozActivity.top_fields).map((item, index) => (
                        <p className="flex justify-between text-sm px-2" key={index}>
                          <span>{item}</span>
                          <span>{kudozActivity.top_fields[item]}</span>
                        </p>
                      ))}
                  </div>
                </div>

                <div className="w-full text-sm">
                  <p className="text-left bg-primary text-accent-foreground rounded py-1 px-2 text-sm">
                    Top specific fields fields (PRO)
                  </p>
                  <div>
                    {kudozActivity.top_detailed_fields &&
                      Object.keys(kudozActivity.top_detailed_fields).map((item, index) => (
                        <p className="flex justify-between text-sm px-2" key={index}>
                          <span>{item}</span>
                          <span>{kudozActivity.top_detailed_fields[item]}</span>
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No kudoz activity found!{" "}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KudozActivity;
