"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import AppTabsLinks from "@/components/shared/appTabsLinks";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface TabsData {
  name: string;
  link: string;
}
const testimonialsTabs: TabsData[] = [
  { name: "Testimonials", link: "/testimonials" },
  { name: "Success Stories", link: "/testimonials?tab=user-stories" },
  { name: "Comments from new members", link: "/testimonials?tab=comments" },
];

const TabsSection: React.FC = () => {
  const urlParam = useSearchParams()?.get("tab");
  const [activeTab, setActiveTab] = useState<string>("");
  let pathname = usePathname() ?? "";

  useEffect(() => {
    if (pathname && testimonialsTabs) {
      const active = testimonialsTabs.find((tab) => pathname + "?tab=" + urlParam === tab.link); // Strict match
      if (active) {
        setActiveTab(active.link);
      } else {
        setActiveTab("/testimonials");
      }
    }
  }, [pathname, urlParam]);

  return (
    <React.Fragment>
      {!testimonialsTabs && <Skeleton className="w-full !min-h-[2.5rem]" />}
      <div className="container">
        <div className="flex flex-row items-center justify-between mt-10 bg-#F8F7F1 ">
          <div className="flex bg-#F8F7F1">
            {testimonialsTabs && (
              <React.Fragment>
                {testimonialsTabs.map((item, index) => (
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabsSection;
