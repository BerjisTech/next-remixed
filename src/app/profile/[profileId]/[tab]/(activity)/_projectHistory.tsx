"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import ProjectHistoryCard from "@/components/shared/cards/projectHistoryCard";
import { ProzUser } from "@/interfaces/account";
import {
  useGetUserProjectHistoryQuery,
  useGetUserWiwosQuery,
} from "@/lib/store/features/profile/profileApiSlice";
import React, { useEffect, useState } from "react";
import { AddProjectHistory } from "./_addProjectHistory";
import { Button } from "@/components/shadcn/button";
import { SquarePlus } from "lucide-react";
import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";

// Utility function to shuffle the array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const ProjectHistory = ({ user }: { user: ProzUser }) => {
  const dispatch = useAppDispatch();
  const { refetchPh } = useAppSelector((state) => state.content);
  const {
    data: projectsHistory,
    isLoading: projectsHistoryLoading,
    refetch,
  } = useGetUserProjectHistoryQuery(user.entity_id, { skip: !user.entity_id });
  const { data: userWiwos } = useGetUserWiwosQuery(user.entity_id, { skip: !user.entity_id });

  useEffect(() => {
    if (refetchPh) {
      refetch();
      dispatch(setContentSliceBits({ bitToSet: "refetchPh", value: false }));
    }
  }, [refetchPh]);

  const projects = projectsHistory?.projects || [];
  const wiwos = userWiwos ? userWiwos : [];
  const [showAll, setShowAll] = useState(false);
  // Merge projects and wiwos, randomly shuffle them
  // const mergedItems = shuffleArray([...wiwos, ...projects]);
  const mergedItems = [...projects];
  const visibleProjects = showAll ? mergedItems : mergedItems.slice(0, 3);

  return (
    <div className="w-full">
      {projectsHistoryLoading && <Skeleton className="!h-[125px]" />}
      {!projectsHistoryLoading && (
        <div
          id="project-history"
          className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-xl bg-accent"
        >
          <div className="flex flex-row justify-between w-full">
            <p className="flex justify-between text-base font-semibold text-left text-dark-blue-hue">
              Project history
            </p>
            {user.is_owner && (
              <div className="flex flex-row gap-3">
                <AddProjectHistory>
                  <Button
                    size="icon"
                    onClick={() => {
                      dispatch(setContentSliceBits({ bitToSet: "showDrawerPh", value: true }));
                    }}
                  >
                    <SquarePlus />
                  </Button>
                </AddProjectHistory>
                <PersonalPrefs
                  value={user.prof_prefs.show_project_history_tab}
                  prefName="show_project_history_tab"
                  entityId={user.entity_id}
                />
              </div>
            )}
          </div>
          {true && (
            <React.Fragment>
              {mergedItems.length > 0 ? (
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 rounded-[9px] w-full">
                  {visibleProjects.map((item, index) => (
                    <div key={index} className="flex flex-col w-full">
                      {/* {item.wiwo_id ? (
                                                <WiwoCard data={item} />
                                            ) : (
                                                <ProjectHistoryCard data={item} /> // Render ProjectHistoryCard if project_history_id exists
                                            )} */}
                      {false ? (
                        // <WiwoCard data={item} />
                        <></>
                      ) : (
                        <ProjectHistoryCard canEdit={user.is_owner} data={item} /> // Render ProjectHistoryCard if project_history_id exists
                      )}
                    </div>
                  ))}
                  {mergedItems.length > 3 && (
                    <button
                      className="min-w-20 text-sm text-primary hover:underline hover:text-primary flex self-end"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show less" : "Show all" + " " + "(" + mergedItems.length + ")"}
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
                  <span className="w-full text-sm font-medium text-left text-primary">
                    {" "}
                    No project history found!{" "}
                  </span>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectHistory;
