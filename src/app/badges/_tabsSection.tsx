"use client";
import React, { useEffect, useState } from "react";
import AppTabsLinks from "@/components/shared/appTabsLinks";
import { usePathname, useRouter } from "next/navigation";

interface TabsData {
  name: string;
  link: string;
}

const TabsSection = () => {
  // const [profileTabs, setProfileTabs] = useState<TabsData[]>();
  const [activeTab, setActiveTab] = useState<string>("");
  let pathname = usePathname() ?? "";
  const router = useRouter();

  const baseTabs: TabsData[] = [
    { name: "Home", link: "/badges" },
    { name: "Screening", link: "/badges/screening" },
    { name: "Verification", link: "/badges/verification" },
    { name: "My dashboard", link: "/badges/dashboard" },
  ];

  useEffect(() => {
    if (pathname && baseTabs) {
      const active = baseTabs.find((tab) => pathname === tab.link);
      setActiveTab(active ? active.link : "/badges");
    }
  }, [pathname, baseTabs]);

  return (
    <>
      {baseTabs && (
        <div className="z-[40] overflow-x-auto lg:overflow-x-hidden sticky top-[70px] flex items-center justify-start border-b border-secondary pt-5 w-full border-b-primary">
          {baseTabs.map((item, index) => (
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
