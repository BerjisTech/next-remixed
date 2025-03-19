import React, { useState, MouseEvent as ReactMouseEvent } from "react";
import { NavItem } from "@/interfaces/navigation/menu-items";
import { ProzUser } from "@/interfaces/account";
import { NAV_LINK_PREFIX } from "@/constants/common";
import Link from "next/link";
import clsx from "clsx";
import NavItemEditIcon from "../navigation/navItemEditIcon/NavItemEditIcon";
import { hasTag } from "@/utils/helpers";

interface MegaMenuProps {
  subNavs: { sub_nav: NavItem; child_navs: NavItem[] }[];
  childNavPaneStyles: { [key: string]: string };
  onClose: () => void;
  user?: ProzUser;
  showNextPhase?: boolean;
  isAdmin?: boolean;
  showEditNavItemForm?: false;
  entityId?: number;
  isAllowedLinkEditors?: boolean;
  onEditItemSelected: (navItem: NavItem) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  subNavs,
  childNavPaneStyles,
  onClose,
  user,
  isAdmin = false,
  showNextPhase = false,
  entityId = 0,
  isAllowedLinkEditors = false,
  onEditItemSelected,
}) => {
  const [activeSubNav, setActiveSubNav] = useState<NavItem | null>(null);
  const [alwaysShowSubNavs, setAlwaysShowSubNavs] = useState<boolean>(true);

  const getLinkName = (name: string): string => {
    let finalName = name;
    if (name.startsWith("http")) {
      return name;
    } else if (name !== null && name !== undefined && name !== "" && !name.startsWith("http")) {
      if (!name.startsWith("/")) {
        finalName = `${NAV_LINK_PREFIX}/${name}`;
      } else {
        finalName = `${NAV_LINK_PREFIX}${name}`;
      }
    } else {
      finalName = "#";
    }
    return finalName;
  };

  const toggleSubNav = (sub_nav: NavItem): void => {
    // Skip if screen is 1024 or more
    if (window.innerWidth >= 1024) {
      return;
    }
    if (activeSubNav === sub_nav) {
      setActiveSubNav(null);
    } else {
      setActiveSubNav(sub_nav);
    }
  };

  const overrideClick = (
    override: boolean | undefined,
    event: ReactMouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (override) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div
      className="z-[500000] absolute flex items-center justify-center"
      style={{
        ...childNavPaneStyles,
      }}
      onMouseLeave={onClose}
    >
      <div className="w-[99vw] lg:w-auto relative h-[calc(100vh-70px)] lg:h-auto lg:max-h-[600px] flex flex-col lg:flex-row items-start justify-center">
        <div className="w-[99vw] lg:w-auto bg-white dark:bg-black  shadow-md absolute top-0 flex justify-start items-start overflow-hidden rounded-0 lg:rounded-[39px]">
          <div className="w-[99vw] lg:w-auto flex justify-start items-start relative gap-3 p-4 bg-white dark:bg-black h-[calc(100vh-70px)] lg:h-auto lg:max-h-[600px] overflow-y-auto">
            <div className="flex flex-col justify-start items-start w-full lg:w-auto gap-4">
              {subNavs && subNavs.length > 0 && (
                <div className="flex flex-col lg:flex-row justify-start items-start w-full ">
                  {subNavs.map(
                    (subNav, i) =>
                      (!hasTag("admin", subNav.sub_nav.tags) || isAdmin) &&
                      (!hasTag("nextphase", subNav.sub_nav.tags) || showNextPhase) && (
                        <div
                          key={i}
                          className="px-3 flex w-full min-w-[300px] flex-col justify-start items-start gap-2"
                        >
                          <div
                            onClick={() => toggleSubNav(subNav.sub_nav)}
                            tabIndex={i}
                            className={`w-full ${subNav.sub_nav.tailwind} group font-semibold flex justify-start items-center relative overflow-hidden gap-2 p-2 rounded-custom`}
                          >
                            <p className="text-left text-dark dark:text-primary">
                              {subNav.sub_nav.name}
                            </p>
                            {isAllowedLinkEditors && (
                              <span className="hidden group-hover:block">
                                <NavItemEditIcon
                                  onEditIconClick={() => {
                                    onEditItemSelected(subNav.sub_nav);
                                  }}
                                />
                              </span>
                            )}
                            <span className="flex-grow"></span>
                            <span className="flex lg:hidden material-symbols-outlined text-primary">
                              {subNav.sub_nav === activeSubNav
                                ? "keyboard_arrow_down"
                                : "chevron_forward"}
                            </span>
                          </div>
                          {(subNav.sub_nav === activeSubNav || alwaysShowSubNavs) && (
                            <div>
                              {subNav.child_navs.map(
                                (childNav, j) =>
                                  (!hasTag("admin", childNav.tags) || isAdmin) &&
                                  (!hasTag("nextphase", childNav.tags) || showNextPhase) && (
                                    <Link
                                      key={j}
                                      onClick={(e) =>
                                        overrideClick(
                                          hasTag("link_does_not_exist", childNav.tags),
                                          e
                                        )
                                      }
                                      href={
                                        hasTag("link_does_not_exist", childNav.tags)
                                          ? "#"
                                          : getLinkName(childNav.link)
                                      }
                                      target={
                                        hasTag("link_does_not_exist", childNav.tags)
                                          ? "_self"
                                          : childNav.target
                                      }
                                      tabIndex={i}
                                      title={getLinkName(childNav.link)}
                                      className={clsx(
                                        "group flex justify-start items-center relative overflow-hidden gap-2 p-2 rounded-custom hover:bg-accent text-dark hover:text-primary dark:text-accent-foreground dark:hover:text-primary dark:hover:bg-dark",
                                        childNav.tailwind,
                                        {
                                          "bg-gray-200 dark:bg-dark text-primary w-full hover:text-white dark:text-white dark:hover:bg-black dark:hover:text-accent-foreground hover:bg-dark dark:hover:border dark:hover:border-dark":
                                            hasTag("nextphase", childNav.tags),
                                        },
                                        {
                                          "text-gray-300 w-full cursor-not-allowed dark:text-gray-400 dark:hover:bg-red-900 dark:hover:text-gray-600 hover:bg-red-200 pointer-events-none":
                                            hasTag("link_does_not_exist", childNav.tags),
                                        }
                                      )}
                                    >
                                      <p className="text-left flex items-center justify-start">
                                        {hasTag("admin", childNav.tags) && isAdmin && (
                                          <span className="material-symbols-outlined">lock</span>
                                        )}
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: childNav.name,
                                          }}
                                        />
                                        {hasTag("new", childNav.tags) && (
                                          <span className="ms-2 bg-green-gradient rounded-md text-sm px-2 text-white">
                                            new
                                          </span>
                                        )}
                                        {isAllowedLinkEditors && (
                                          <span className="hidden group-hover:block">
                                            <NavItemEditIcon
                                              onEditIconClick={() => {
                                                onEditItemSelected(childNav);
                                              }}
                                            />
                                          </span>
                                        )}
                                      </p>
                                    </Link>
                                  )
                              )}
                            </div>
                          )}
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
