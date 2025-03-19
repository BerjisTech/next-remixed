"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavItem } from "@/interfaces/navigation/menu-items";
import { useAppSelector } from "@/lib/store/hooks";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, List } from "lucide-react";

const AdminSidebar = () => {
  let pathname = usePathname() ?? "";
  const [active_tab, setActiveTab] = useState<string>("");
  const [showFullSidebar, setShowFullSidebar] = useState<boolean>(false);
  // On component mount, fetch nav items from /next/api/nav-links and filter admin-specific navs
  const { admin_navs, subNavs } = useAppSelector((state) => state.navigation);

  // Function to get children of a nav item based on parent_ids
  const getChildren = (nav_item: NavItem) => {
    return subNavs.filter((item) => {
      const parentIds = item.parent_ids.split(",").map((id) => parseInt(id));
      return parentIds.includes(parseInt(nav_item.nav_item_id));
    });
  };

  // Handle tab switching
  const switchTab = (tab: string) => {
    setActiveTab(tab === active_tab ? "" : tab);
  };

  // Toggle full navbar, detect screenchange and set state in lg+ screens to true by default anything less than lg to false
  const toggleFullSidebar = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowFullSidebar(true);
      } else {
        setShowFullSidebar(false);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div
      className={`flex flex-col justify-start items-start ${showFullSidebar ? "w-[300px]" : "w-[50px]"} h-[calc(100vh-50px)] overflow-y-auto relative gap-6 px-4 pt-6 pb-2.5 bg-primary-700`}
    >
      <p className="hidden lg:block  text-xl font-semibold text-left text-white">Admin dashboard</p>
      <div
        role="button"
        onClick={toggleFullSidebar}
        className="lg:hidden flex justify-end items-center gap-2.5 text-white"
      >
        {showFullSidebar ? "Collapse" : ""}
        {showFullSidebar ? <ChevronLeft /> : <ChevronRight />}
      </div>
      {admin_navs.map((admin_link) => (
        <div
          key={admin_link.nav_item_id}
          className="flex flex-col justify-start items-start gap-6 w-full "
        >
          <div className="flex flex-col justify-start items-start gap-3 w-full ">
            {getChildren(admin_link).length > 0 ? (
              <div
                role="button"
                onClick={() => switchTab(admin_link.name)}
                className="flex justify-start items-center relative gap-2.5 admin-link"
              >
                <p
                  className={`flex-grow ${showFullSidebar ? "w-[205px]" : "hidden"} text-lg font-semibold text-left text-white`}
                >
                  {admin_link.name}
                </p>
                {active_tab === admin_link.name ? (
                  <ChevronDown className="text-white" />
                ) : (
                  <ChevronRight className="text-white" />
                )}
              </div>
            ) : (
              <Link href={admin_link.link ?? ""}>
                <p className="flex justify-start items-center relative gap-2.5 admin-link">
                  <span
                    className={`flex-grow ${showFullSidebar ? "w-[205px]" : "hidden"} text-lg font-semibold text-left text-white`}
                  >
                    {showFullSidebar && admin_link.name}
                  </span>
                </p>
              </Link>
            )}

            {/* Render children if active */}
            {active_tab === admin_link.name && showFullSidebar && (
              <div className="flex flex-col justify-start items-start gap-2 w-full ">
                {getChildren(admin_link).map((subLink) => {
                  return (
                    <Link
                      key={subLink.nav_item_id}
                      href={subLink.link}
                      className={clsx(
                        "w-full flex justify-start items-center gap-2 px-4 py-2 rounded-xl text-primary-400",
                        {
                          "bg-accent":
                            pathname ===
                            (!subLink.link.startsWith("/") ? "/" + subLink.link : subLink.link),
                        }
                      )}
                    >
                      <p className="w-full flex justify-start items-center gap-2 px-4 py-3 rounded-xl">
                        <List />
                        <span className="text-base font-semibold">
                          {showFullSidebar && subLink.name}
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
