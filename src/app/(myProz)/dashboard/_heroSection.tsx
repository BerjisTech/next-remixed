"use client";
import React, { useEffect, useState } from "react";
import TabsSection from "./_tabsSection";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Overview", link: "/dashboard/account/overview" },
  { name: "Account", link: "/dashboard/account/account" },
  { name: "Notifications", link: "/dashboard/account/notifications" },
  { name: "Communication", link: "/dashboard/account/communication" },
  { name: "Data & Privacy", link: "/dashboard/account/data-and-privacy" },
  { name: "Profile Updater", link: "/dashboard/account/update" },
];

const HeroSection = () => {
  let pathname = usePathname() ?? "";
  const [headerText, setHeaderText] = useState("Overview");
  useEffect(() => {
    if (pathname) {
      const matchingTab = tabs.find((tab) => pathname === tab.link);
      if (matchingTab) {
        setHeaderText(matchingTab.name);
      }
    }
  }, [pathname]);

  return (
    <section className="w-full min-h-32 flex flex-col bg-primary-50 mb-10 gap-4 pt-6">
      <div className="text-center">
        <h1 className="text-primary-500 text-4xl font-bold">{headerText}</h1>
      </div>
      <div className="text-center">
        <p className="mb-0">Monitor your ProZ.com account’s status and activity at a glance.</p>
      </div>
      <TabsSection dashboardTabs={tabs} />
    </section>
  );
};

export default HeroSection;
