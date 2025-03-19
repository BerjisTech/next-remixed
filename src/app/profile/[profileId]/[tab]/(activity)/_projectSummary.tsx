"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { JOB_TYPES } from "@/constants/jobs";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser } from "@/interfaces/account";
import { useGetUserProjectSummaryQuery } from "@/lib/store/features/profile/profileApiSlice";
import { parseSerializedPhp } from "@/utils/helpers";
import { CircleDot, CircleMinus, CirclePlus } from "lucide-react";
import React from "react";

const ProjectSummary = ({ user }: { user: ProzUser }) => {
  const { getLanguagePair } = useContentHook();
  const {
    data: projectsSummary,
    error: servicesError,
    isLoading: projectsSummaryLoading,
  } = useGetUserProjectSummaryQuery(user.entity_id, { skip: !user.entity_id });

  const prefs = parseSerializedPhp(user.prof_prefs.about_me_module);
  return (
    <div className="w-full">
      {projectsSummaryLoading && <Skeleton className="!h-[125px]" />}
      {!projectsSummaryLoading && (
        <div
          id="project-history"
          className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-custom bg-accent min-h-[150px]"
        >
          <div className="flex flex-row justify-between w-full">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-dark-blue-hue">
              Project summary
            </p>
            {user.is_owner && prefs && (
              <div className="flex flex-row gap-3">
                <PersonalPrefs
                  category="about_me_module"
                  prefName="ph"
                  value={prefs.ph === "on" ? "y" : "n"}
                  entityId={user.entity_id}
                  defaultSetting={user.prof_prefs.about_me_module}
                />
              </div>
            )}
          </div>
          {projectsSummary ? (
            <div className="flex flex-col justify-start items-center w-full relative gap-1 rounded-[9px] bg-accent text-left">
              <p className="text-primary mb-4">
                This user has reported completing projects in the following job categories, language
                pairs, and fields:
              </p>
              <div className="w-full">
                <p className="text-left bg-primary text-accent-foreground rounded px-3">
                  Project History Summary
                </p>
                <div>
                  <p className="flex justify-between text-sm">
                    <span>Total projects</span>
                    <span>{projectsSummary?.project_total}</span>
                  </p>
                  <p className="flex justify-between text-sm">
                    <span>With client feedback</span>
                    <span>{projectsSummary?.total_with_feedback}</span>
                  </p>
                  <p className="flex justify-between text-sm">
                    <span>Corroborated</span>
                    <span>{projectsSummary?.corr_total}</span>
                  </p>
                  <p className="flex justify-between text-sm">
                    {projectsSummary?.total_with_feedback &&
                    projectsSummary?.total_with_feedback > 0
                      ? Math.floor(
                          (projectsSummary?.total_pos / projectsSummary?.total_with_feedback) * 1000
                        ) /
                          10 +
                        "%"
                      : 0}{" "}
                    positive ({projectsSummary?.total_pos}) entries
                  </p>
                  <p className="flex justify-between text-sm text-green-500">
                    <span className="flex gap-1 items-center">
                      <CirclePlus /> positive
                    </span>
                    <span>{projectsSummary?.total_with_feedback}</span>
                  </p>
                  <p className="flex justify-between text-sm">
                    <span className="flex gap-1 items-center">
                      <CircleMinus />
                      neutral
                    </span>
                    <span>{projectsSummary?.total_with_feedback}</span>
                  </p>
                  <p className="flex justify-between text-sm text-destructive">
                    <span className="flex gap-1 items-center">
                      <CircleDot />
                      negative
                    </span>
                    <span>{projectsSummary?.total_with_feedback}</span>
                  </p>
                </div>
              </div>

              <div className="w-full">
                <p className="text-left bg-primary text-accent-foreground rounded px-3">Job type</p>
                {projectsSummary?.job_types &&
                  Object.keys(projectsSummary?.job_types).length > 0 &&
                  Object.keys(projectsSummary?.job_types).map((item, index) => (
                    <p key={index} className="flex justify-between text-sm">
                      <span>{JOB_TYPES[item]}</span>
                      <span>{projectsSummary?.job_types[item]}</span>
                    </p>
                  ))}
              </div>
              <div className="w-full">
                <p className="text-left bg-primary text-accent-foreground rounded px-3">
                  Language pairs
                </p>
                {projectsSummary?.languages &&
                  Object.keys(projectsSummary?.languages).length > 0 &&
                  Object.keys(projectsSummary?.languages).map((item, index) => (
                    <p key={index} className="flex justify-between text-sm">
                      <span>{getLanguagePair(item)}</span>
                      <span>{projectsSummary?.languages[item]}</span>
                    </p>
                  ))}
              </div>
              <div className="w-full">
                <p className="text-left bg-primary text-accent-foreground rounded px-3">
                  Specialty fields
                </p>
                {projectsSummary?.spec_arr &&
                  Object.keys(projectsSummary?.spec_arr).length > 0 &&
                  Object.keys(projectsSummary?.spec_arr).map((item, index) => (
                    <p key={index} className="flex justify-between text-sm">
                      <span>{item}</span>
                      <span>{projectsSummary?.spec_arr[item]}</span>
                    </p>
                  ))}
              </div>
              <div className="w-full">
                <p className="text-left bg-primary text-accent-foreground rounded px-3">
                  Other fields
                </p>
                {projectsSummary?.other_spec_arr &&
                  Object.keys(projectsSummary?.other_spec_arr).length > 0 &&
                  Object.keys(projectsSummary?.other_spec_arr).map((item, index) => (
                    <p key={index} className="flex justify-between text-sm">
                      <span>{item}</span>
                      <span>{projectsSummary?.other_spec_arr[item]}</span>
                    </p>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No project history available!{" "}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectSummary;
