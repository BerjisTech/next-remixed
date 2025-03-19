"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import AppTabsLinks from "@/components/shared/appTabsLinks";
import { useAppSelector } from "@/lib/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface tabsData {
  name: string;
  link: string;
}

interface TabsSectionProps {
  dashboardTabs: tabsData[];
}

const TabsSection: React.FC<TabsSectionProps> = ({ dashboardTabs }) => {
  const { entityId } = useAppSelector((state) => state.profile);
  const [profileTabs, setProfileTabs] = useState<tabsData[]>();
  const [activeTab, setActiveTab] = useState<string>("");
  let pathname = usePathname() ?? "";
  const router = useRouter();

  useEffect(() => {
    setProfileTabs(dashboardTabs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId]);

  useEffect(() => {
    if (pathname && profileTabs) {
      const active = profileTabs.find((tab) => pathname === tab.link); // Strict match
      if (active) {
        setActiveTab(active.link);
      } else {
        setActiveTab("");
      }
    }
  }, [pathname, profileTabs, entityId]);

  return (
    <React.Fragment>
      {!profileTabs ? (
        <Skeleton className="w-full !min-h-[2.5rem]" />
      ) : (
        <div className="z-[100] mb-0 overflow-x-auto lg:overflow-x-hidden sticky top-[70px] flex items-center justify-center bg-primary-50 border-b border-secondary dark:bg-dark w-full ">
          {profileTabs.map((item, index) => (
            <AppTabsLinks key={index} index={index} tab={item} isActive={activeTab === item.link} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default TabsSection;
