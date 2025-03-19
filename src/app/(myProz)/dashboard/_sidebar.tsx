"use client";

import { NavItem } from "@/interfaces/navigation/menu-items";
import { useAppSelector } from "@/lib/store/hooks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MyProzSidebar = () => {
  let pathname = usePathname() ?? "";
  const [activeTab, setActiveTab] = useState("");
  const { myProzNavs, navItems } = useAppSelector((state) => state.navigation);
  const { user } = useAppSelector((state) => state.profile);

  const switchTab = (myProzLink: string) => {
    setActiveTab(myProzLink);
  };

  const getChildren = (navItem: NavItem): NavItem[] => {
    const children = navItems.filter((item: NavItem) => {
      // return items whose comma separated parent ids include the current nav item id
      let parent_ids = item.parent_ids.split(",").map((id) => parseInt(id));
      return parent_ids.includes(parseInt(navItem.nav_item_id));
    });
    return children;
  };
  return (
    <div className="flex flex-col justify-start items-start w-[300px] h-[calc(100vh-50px)] overflow-y-auto relative gap-6 px-4 pt-6 pb-2.5 bg-primary-700">
      {myProzNavs &&
        myProzNavs.map((myProzLink, index) => {
          const children = getChildren(myProzLink);
          return (
            <div key={index} className="flex flex-col justify-start items-start gap-6 w-full ">
              <div className="flex flex-col justify-start items-start gap-3 w-full ">
                {children.length > 0 ? (
                  <div
                    onClick={() => switchTab(activeTab == myProzLink.name ? "" : myProzLink.name)}
                    role="button"
                    className="flex justify-start items-center relative gap-2.5 my-proz-link"
                  >
                    <p className="flex-grow w-[205px] text-lg font-semibold text-left text-white">
                      {myProzLink.name}
                    </p>
                    {activeTab === myProzLink.name ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="  w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="  w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    )}
                  </div>
                ) : (
                  <Link
                    href={
                      myProzLink.link.includes("profile")
                        ? myProzLink.link + "/" + user?.entity_id
                        : myProzLink.link
                    }
                    className="flex justify-start items-center relative gap-2.5 my-proz-link"
                  >
                    <p className="flex-grow w-[205px] text-lg font-semibold text-left text-white">
                      {myProzLink.name}
                    </p>
                  </Link>
                )}
                <div
                  className={clsx(
                    "flex-col justify-start items-start gap-2 w-full",
                    { flex: activeTab === myProzLink.name },
                    { hidden: activeTab !== myProzLink.name }
                  )}
                >
                  {children &&
                    children.map((subLink, index) => {
                      return (
                        <Link
                          key={index}
                          href={("/" + subLink.link).replace("//", "/")}
                          className={clsx(
                            "w-full flex justify-start items-center gap-2 px-4 py-3 rounded-xl",
                            {
                              "bg-accent text-primary":
                                pathname ===
                                (!subLink.link.startsWith("/") ? "/" + subLink.link : subLink.link),
                            }
                          )}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="  w-6 h-6 relative"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <path
                              d="M15.9984 9V6C15.9984 3.79086 14.2076 2 11.9984 2C9.78928 2 7.99842 3.79086 7.99842 6V9M3.59042 10.352L2.99042 16.752C2.81982 18.5717 2.73452 19.4815 3.03647 20.1843C3.30171 20.8016 3.76653 21.3121 4.35643 21.6338C5.02794 22 5.94178 22 7.76946 22H16.2274C18.055 22 18.9689 22 19.6404 21.6338C20.2303 21.3121 20.6951 20.8016 20.9604 20.1843C21.2623 19.4815 21.177 18.5717 21.0064 16.752L20.4064 10.352C20.2624 8.81535 20.1903 8.04704 19.8448 7.46616C19.5404 6.95458 19.0908 6.54511 18.553 6.28984C17.9424 6 17.1707 6 15.6274 6L8.36946 6C6.82611 6 6.05443 6 5.44383 6.28984C4.90608 6.54511 4.45642 6.95458 4.15208 7.46616C3.80651 8.04704 3.73448 8.81534 3.59042 10.352Z"
                              stroke="#4D9D9D"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <span
                            className={clsx(
                              "text-base font-semibold ",
                              {
                                "text-primary-200":
                                  pathname !==
                                  (!subLink.link.startsWith("/")
                                    ? "/" + subLink.link
                                    : subLink.link),
                              },
                              {
                                "text-primary":
                                  pathname ===
                                  (!subLink.link.startsWith("/")
                                    ? "/" + subLink.link
                                    : subLink.link),
                              }
                            )}
                          >
                            {subLink.name}
                          </span>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyProzSidebar;
