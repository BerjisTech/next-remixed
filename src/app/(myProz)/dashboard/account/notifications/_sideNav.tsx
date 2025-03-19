"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

interface SideNavProps {
  setActiveSubNav: React.Dispatch<React.SetStateAction<any>>;
  activeSubNav: string;
}

const SideNav: React.FC<SideNavProps> = ({ setActiveSubNav, activeSubNav }) => {
  // const [activeSubNavChild, setActiveSubNavChild] = useState<string>('overview')
  const [showMobileSubMenu, setShowMobileSubMenu] = useState<boolean>(false);

  const activateSubNav = (parent: string, child: string = "") => {
    // setShowMobileSubMenu(false);
    setActiveSubNav(parent);
    // setActiveSubNavChild(child);
  };

  return (
    <div
      className={clsx(
        "min-w-[300px] p-3 md:sticky bottom-3 right-3 md:top-[75px] border-[1px] rounded-xl",
        { "fixed right-[-300px] bottom-[-300px]": showMobileSubMenu },
        { "fixed right-3 bottom-3 z-[200000]": showMobileSubMenu }
      )}
    >
      <div className="bg-white dark:bg-black rounded-xl p-4 w-full ps-2 flex flex-col items-start justify-start gap-1">
        <p className="text-primary font-semibold">Notification settings</p>
        <Link
          onClick={() => {
            activateSubNav("general");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "general" }
          )}
        >
          General notifications
        </Link>
        <Link
          onClick={() => {
            activateSubNav("browser");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "browser" }
          )}
        >
          Browser notifications
        </Link>
        <Link
          onClick={() => {
            activateSubNav("forums");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "forums" }
          )}
        >
          Forum notifications
        </Link>
        <Link
          onClick={() => {
            activateSubNav("history");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "history" }
          )}
        >
          Notification history
        </Link>
        <Link
          onClick={() => {
            activateSubNav("unsubscribe");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "unsubscribe",
            }
          )}
        >
          Unsubscribe
        </Link>
        <p className="text-primary font-semibold mt-5">Job notifications</p>
        <Link
          onClick={() => {
            activateSubNav("jobs_emails");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "jobs_emails",
            }
          )}
        >
          Emails about jobs
        </Link>
        <Link
          onClick={() => {
            activateSubNav("jobs_poster_flags_to_filter");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "jobs_poster_flags_to_filter",
            }
          )}
        >
          Poster flags and filter
        </Link>
        <Link
          onClick={() => {
            activateSubNav("jobs_filtered_providers");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "jobs_filtered_providers",
            }
          )}
        >
          Filtered providers
        </Link>
        <p className="text-primary font-semibold mt-5">KudoZ notifications</p>
        <Link
          onClick={() => {
            activateSubNav("kudoz_emails");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "kudoz_emails",
            }
          )}
        >
          Emails about KudoZ
        </Link>
        <Link
          onClick={() => {
            activateSubNav("kudoz_asker_flag_filter");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "kudoz_asker_flag_filter",
            }
          )}
        >
          Asker flags and filters
        </Link>
        <Link
          onClick={() => {
            activateSubNav("kudoz_answer_tracking");
          }}
          href="/dashboard/account/notifications"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                activeSubNav === "kudoz_answer_tracking",
            }
          )}
        >
          Answer tracking
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
