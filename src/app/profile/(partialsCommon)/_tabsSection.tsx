"use client";
import React, { useEffect, useState } from "react";
import AppTabsLinks from "@/components/shared/appTabsLinks";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "@/components/shadcn/skeleton";
import { ProzUser } from "@/interfaces/account";

interface TabsData {
  name: string;
  link: string;
}

const TabsSection = ({ user }: { user: ProzUser }) => {
  const [profileTabs, setProfileTabs] = useState<TabsData[]>();
  const [activeTab, setActiveTab] = useState<string>("");
  let pathname = usePathname() ?? "";
  const router = useRouter();

  useEffect(() => {
    if (user.entity_id) {
      // Base tabs for all users
      const baseTabs: TabsData[] = [
        { name: "Overview", link: "overview" },
        { name: "More services", link: "more" },
        { name: "Activity", link: "activity" },
      ];

      // Conditional tabs based on user.services
      const conditionalTabs: TabsData[] = [];
      if (user.services["1"]) {
        conditionalTabs.push({ name: "Translating", link: "translating" });
      }
      if (user.services["2"]) {
        conditionalTabs.push({ name: "Interpreting", link: "interpreting" });
      }
      if (user.services["7"]) {
        conditionalTabs.push({ name: "Subtitling", link: "subtitling" });
      }

      // Combine base and conditional tabs, adding full paths
      // Insert conditional tabs after "About me"
      const formattedTabs = [
        { ...baseTabs[0], link: `/profile/${user.entity_id}/${baseTabs[0].link}` }, // "About me"
        ...conditionalTabs.map((tab) => ({
          ...tab,
          link: `/profile/${user.entity_id}/${tab.link}`,
        })), // Conditional tabs
        ...baseTabs.slice(1).map((tab) => ({
          ...tab,
          link: `/profile/${user.entity_id}/${tab.link}`,
        })), // Remaining base tabs
      ];

      setProfileTabs(formattedTabs);
    }
  }, [user.entity_id, user.services]);

  useEffect(() => {
    if (pathname && profileTabs) {
      const active = profileTabs.find((tab) => pathname === tab.link);
      setActiveTab(active ? active.link : "");
    }
  }, [pathname, profileTabs]);

  useEffect(() => {
    const pathArr = pathname.split("/").filter((ele) => ele !== "");
    if (pathArr.length === 1 || pathArr.length === 2) {
      router.push(pathname + "/overview");
    }
  }, [pathname, router]);

  return (
    <>
      {!profileTabs && <Skeleton className="w-full !min-h-[2.5rem]" />}
      {profileTabs && (
        <div className="z-[40] overflow-x-auto lg:overflow-x-hidden sticky top-[70px] flex items-center justify-start border-b border-secondary pt-5 dark:bg-dark bg-white w-full border-b-primary">
          {profileTabs.map((item, index) => (
            <AppTabsLinks
              key={`${index}-${pathname}`}
              index={index}
              tab={item}
              isActive={activeTab === item.link}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TabsSection;
