"use client";

import { Skeleton } from "@/components/shadcn/skeleton";
import { ProzUser } from "@/interfaces/account";
import { useGetUserEventsQuery } from "@/lib/store/features/profile/profileApiSlice";
import { capitalize } from "@/utils/helpers";
import Link from "next/link";
import React, { useState } from "react";

const Events = ({ user }: { user: ProzUser }) => {
  const { data: events, isLoading: eventsLoading } = useGetUserEventsQuery(user.entity_id, {
    skip: !user.entity_id,
  });
  const [showAllKeys, setShowAllKeys] = useState<Record<string, boolean>>({});
  const toggleShowAll = (key: string) => {
    setShowAllKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const MAX_VISIBLE_ITEMS = 3;
  return (
    <div className="w-full">
      {eventsLoading && <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />}
      {!eventsLoading && (
        <div className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-xl bg-accent">
          {events && Object.keys(events).length > 0 ? (
            Object.entries(events).map(([key, value]) => {
              if (Array.isArray(value)) {
                const isShowAll = showAllKeys[key];
                const visibleItems = isShowAll ? value : value.slice(0, MAX_VISIBLE_ITEMS);
                return (
                  <div key={key} className="flex flex-col gap-2 w-full">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-dark-blue-hue">
                      {capitalize(key.replace(/_/g, " "))}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {visibleItems.map((item, index) => {
                        if (key === "conferences") {
                          let url =
                            item.event_type === "online" ? "/virtual-conferences/" : "/conference/";
                          url += item.event_id;
                          return (
                            <li key={index} className="p-2 rounded-md text-sm">
                              <Link
                                href={url}
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                {item.event_name}
                              </Link>
                            </li>
                          );
                        } else if (item.entity_tv_credential_id && key === "tv_credentials") {
                          let url = "/tv/";
                          url += item.event_custom_url_slug
                            ? item.event_custom_url_slug
                            : "?sp_mode=details&event=";
                          url += item.tv_event_id;
                          return (
                            <li key={index} className="p-2 rounded-md text-sm">
                              <Link
                                href={url}
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                {item.title}
                              </Link>
                            </li>
                          );
                        } else if (key === "conferences_organized") {
                          let url = "/conference/" + item.event_id;
                          return (
                            <li key={index} className="p-2 rounded-md text-sm">
                              <Link
                                href={url}
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                {item.event_name}{" "}
                                {item.organizer_id === user.entity_id
                                  ? "(organizer)"
                                  : "(co-organizer)"}
                              </Link>
                            </li>
                          );
                        } else if (key === "user_trainings" || key === "moodle_certifications") {
                          const courseLink =
                            item["mdl_course_id"] > 0
                              ? "https://lms.proz.com/course/view.php?id=" + item["mdl_course_id"]
                              : "/translator-training/course/" + item.training_id;
                          const trainingName =
                            item.mdl_course_id > 0 ? item.certificate_name : item.training_name;
                          return (
                            <li key={index} className="p-2 rounded-md text-sm">
                              <Link
                                href={courseLink}
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                {trainingName}
                              </Link>
                            </li>
                          );
                        } else if (key === "powwows_organized" || key === "powwow_attended") {
                          const powwowId = "/powwow/" + item["powwow_id"];
                          return (
                            <li key={index} className="p-2 rounded-md text-sm">
                              <Link
                                href={powwowId}
                                className="text-primary hover:underline"
                                target="_blank"
                              >
                                {item["powwow_theme"] ? item["powwow_theme"] : item["powwow_city"]}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                    {value.length > MAX_VISIBLE_ITEMS && (
                      <div className="flex justify-end">
                        <button
                          className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                          onClick={() => toggleShowAll(key)}
                        >
                          {isShowAll ? `Show Less` : `Show All (${value.length})`}
                        </button>
                      </div>
                    )}
                  </div>
                );
              }
              return null; // Skip keys that aren't arrays
            })
          ) : (
            <div className="">
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-dark-blue-hue">
                Events
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark mt-5">
                <span className="w-full text-sm font-medium text-left text-primary">
                  Events organized and attended Powwows will we listed here{" "}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
