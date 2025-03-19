"use client";
import { Button } from "@/components/shadcn/button";
import { Skeleton } from "@/components/shadcn/skeleton";
import AppTabsLinks from "@/components/shared/appTabsLinks";
import { useContentHook } from "@/hooks/useContentHook";
import { useAppSelector } from "@/lib/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface tabsData {
  name: string;
  link: string;
}
const reviewTabs = [
  { name: "Outsourcer reviews", link: "/reviews/outsourcers" },
  { name: "Service provider reviews", link: "/reviews/providers" },
  { name: "My reviews", link: "/reviews/my-reviews" },
  { name: "My business reviews", link: "/reviews/my-business" },
];
const TabsSection = ({ children }: { children: React.ReactNode }) => {
  const { entityId } = useAppSelector((state) => state.profile);
  const [activeTab, setActiveTab] = useState<string>("");
  let pathname = usePathname() ?? "";
  const router = useRouter();
  const { setDrawerVisibility } = useContentHook();

  useEffect(() => {
    if (pathname && reviewTabs) {
      const active = reviewTabs.find((tab) => pathname === tab.link); // Strict match
      if (active) {
        setActiveTab(active.link);
      } else {
        setActiveTab("");
      }
    }
  }, [pathname]);

  return (
    <React.Fragment>
      {!reviewTabs && <Skeleton className="w-full !min-h-[2.5rem]" />}
      <div className="z-[50] p-5 overflow-x-auto lg:overflow-x-hidden sticky top-[100px]  border-secondary  dark:bg-dark bg-white rounded-xl w-full shadow">
        <div className="flex flex-row items-center justify-between">
          <div className="flex">
            {reviewTabs && (
              <React.Fragment>
                {reviewTabs.map((item, index) => (
                  <AppTabsLinks
                    roundedTop={false}
                    rounded={true}
                    key={index}
                    index={index}
                    tab={item}
                    isActive={activeTab === item.link}
                  />
                ))}
              </React.Fragment>
            )}
          </div>
          <Button onClick={() => setDrawerVisibility("review")}>Write a review</Button>
        </div>
        <hr className="my-5" />
        {children}
      </div>
    </React.Fragment>
  );
};

export default TabsSection;
