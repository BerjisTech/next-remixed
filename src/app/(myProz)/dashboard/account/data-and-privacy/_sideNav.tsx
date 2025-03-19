"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const SideNav = () => {
  const [activeSubNav, setActiveSubNav] = useState<string>("overview");
  const [activeSubNavChild, setActiveSubNavChild] = useState<string>("overview");
  const [showMobileSubMenu, setShowMobileSubMenu] = useState<boolean>(false);

  const activateSubNav = (parent: string, child: string = "") => {
    setShowMobileSubMenu(false);
    setActiveSubNav(parent);
    setActiveSubNavChild(child);
  };

  return (
    <div className="mt-5">
      <div
        className={clsx(
          "w-[300px] p-3 md:sticky bottom-3 right-3 md:top-[75px] border-[1px] rounded-xl",
          { "fixed right-[-300px] bottom-[-300px]": showMobileSubMenu },
          { "fixed right-3 bottom-3 z-[200000]": showMobileSubMenu }
        )}
      >
        <div className="bg-white dark:bg-black rounded-xl p-4 w-full ps-2 flex flex-col items-start justify-start gap-1">
          <p className="text-primary font-semibold">Account</p>
          <Link
            onClick={() => {
              activateSubNav("overview");
            }}
            href="/dashboard/account/data-and-privacy#overview"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "overview",
              }
            )}
          >
            Overview
          </Link>
          <Link
            onClick={() => {
              activateSubNav("cookies");
            }}
            href="/dashboard/account/data-and-privacy#cookies"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
              { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "cookies" }
            )}
          >
            Cookies
          </Link>
          <Link
            onClick={() => {
              activateSubNav("profile_publishing");
            }}
            href="/dashboard/account/data-and-privacy#profile_publishing"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "profile_publishing",
              }
            )}
          >
            Profile publishing
          </Link>
          <Link
            onClick={() => {
              activateSubNav("third_party_apps");
            }}
            href="/dashboard/account/data-and-privacy#third_party_apps"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "third_party_apps",
              }
            )}
          >
            Third party apps
          </Link>
          <Link
            onClick={() => {
              activateSubNav("opt_out");
            }}
            href="/dashboard/account/data-and-privacy#opt_out"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
              { "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "opt_out" }
            )}
          >
            Opt-out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
