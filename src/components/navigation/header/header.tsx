"use client";

import React, { useEffect, useState, useRef } from "react";
import { NavItem } from "@/interfaces/navigation/menu-items";
import MegaMenu from "../../shared/megaMenu";
import clsx from "clsx";
import NavItemEditIcon from "../navItemEditIcon/NavItemEditIcon";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { getNavItemsAsync } from "@/lib/store/features/navigation/navigationSlice";
import { getRedirectBaseUrl, hasTag } from "@/utils/helpers";
import DarkModeToggle from "@/components/shared/darkMode";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { HUBSPOT_PAGES } from "@/constants/common";
import NavItemEditForm from "@/app/admin/(adminTools)/navigation/builder/_navItemEditForm";
import { Button } from "@/components/shadcn/button";
import { Skeleton } from "@/components/shadcn/skeleton";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HeaderHubspot from "./headerHubspot";
import ProfileNav from "./_profileNav";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  let pathname = usePathname() ?? "";
  const dispatch = useAppDispatch();
  const {
    mainNavs,
    subNavs,
    profileNavs,
    showPseudoPopup,
    status: navSliceStatus,
  } = useAppSelector((state) => state.navigation);
  const { isAdmin, isAllowedLinkEditors, entityId } = useAppSelector((state) => state.profile);
  const { data: session } = useSession();
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [editableNavItem, setEditableNavItem] = useState<NavItem>({} as NavItem);
  const [showNextphase, setShowNextphase] = useState<boolean>(true);
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const [currentNavItem, setCurrentNavItem] = useState<NavItem | null>(null);
  const [childNavPaneStyles, setChildNavPaneStyles] = useState<{ [key: string]: string }>({});
  const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    dispatch(getNavItemsAsync());
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const hideAllDropDowns = (): void => {
    setShowMegaMenu(false);
    setShowMegaMenu(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (elementRef.current && !elementRef.current.contains(target)) {
      hideAllDropDowns();
    }
  };

  const handleNavItemMouseEnter = (navItem: NavItem, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    hideAllDropDowns();
    setCurrentNavItem(navItem);
    setShowMegaMenu(true);

    const navbar = document.getElementById("main-nav-container"); // Adjust the selector as needed
    const navbarHeight = navbar?.getBoundingClientRect().height;

    // Get position of the current target element
    const rect = event.currentTarget.getBoundingClientRect();

    // Initialize styles without position, top, or width
    let newChildNavPaneStyles: { [key: string]: string } = {};

    newChildNavPaneStyles = {
      position: "absolute",
      top: `${navbarHeight}px`, // Position top based on rect
      width: `100%`, // Width based on rect
      right: "auto",
    };

    // Conditionally apply left if reposition_children tag is present
    if (hasTag("reposition_children", navItem.tags)) {
      newChildNavPaneStyles = {
        left: `${rect.left + window.scrollX}px`, // Position left based on rect
      };
    }

    setChildNavPaneStyles(newChildNavPaneStyles);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
    setChildNavPaneStyles({
      position: "relative",
      top: "0px",
      left: "auto",
      right: "auto",
    });
  };

  const toggleHeader = () => {
    //Toggle between -1000px and 70px
    setShowMegaMenu(false);
    setIsHeaderHidden(!isHeaderHidden);
  };

  const toggleEditForm = (update_nav_item: boolean = true) => {
    if (update_nav_item) {
      setShowEditForm(false);
      setShowEditForm(true);
    } else {
      setShowEditForm(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    handleResize();
  }, []);

  if (pathname?.includes("/session/")) {
    return null;
  }

  if (pathname && HUBSPOT_PAGES.includes(pathname)) {
    return <HeaderHubspot />;
  }

  return (
    <header
      className="sticky top-0 left-0 right-0 z-[50] bg-white dark:bg-black"
      id="main-nav-container"
    >
      <div className="shadow max-w-[100%]  flex justify-between items-center w-full dark:bg-black px-1 xl:px-5 py-0 h-[76px]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.389188289642334px]">
          <Link href={"/"} className="flex-grow-0 flex-shrink-0">
            <Image
              src="/next/next_assets/images/svg/proz-logo.svg"
              alt="_prozSvg.svg"
              height={132}
              width={132}
            />
          </Link>
        </div>

        <div
          className={clsx(
            "bg-white dark:bg-black top-[70px] xl:top-0 left-0 fixed xl:relative flex flex-col xl:flex-row justify-start xl:justify-center items-start xl:items-center flex-grow-0 flex-shrink-0 w-full xl:w-auto h-auto px-6 xl:px-8 py-6 xl:py-0 pb-6 xl:pb-0 shadow-lg xl:shadow-none transition-all duration-200 translate-x-0 opacity-100",
            isHeaderHidden ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"
          )}
        >
          {navSliceStatus === "loading" &&
            [1, 2, 3, 4].map((_, index) => (
              <Skeleton key={index} className="block mx-1 !h-[2.5rem] !min-w-[10rem]" />
            ))}
          {navSliceStatus !== "loading" &&
            mainNavs.map((menuItem) => {
              const showDirectLink =
                hasTag("directlink", menuItem.tags) &&
                (menuItem.access_type !== "liv_free" || entityId > 0) &&
                (!hasTag("admin", menuItem.tags) || isAdmin) &&
                (!hasTag("nextphase", menuItem.tags) || showNextphase);

              const showStaticLink =
                !hasTag("directlink", menuItem.tags) &&
                (menuItem.access_type !== "liv_free" || entityId > 0) &&
                (!hasTag("admin", menuItem.tags) || isAdmin) &&
                (!hasTag("nextphase", menuItem.tags) || showNextphase);

              return (
                <React.Fragment key={menuItem.nav_item_id}>
                  {showDirectLink && (
                    <Link
                      onMouseEnter={(e) => hideAllDropDowns()}
                      href={menuItem.link && menuItem.link.replace("ng/", "next/")}
                      target={menuItem.target}
                      className={`group ${menuItem.tailwind} flex mx-1 justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-3 rounded-custom hover:bg-accent hover:dark:bg-dark  hover:text-primary text-dark dark:text-accent-foreground`}
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base text-left">
                        {menuItem.name}
                        {hasTag("new", menuItem.tags) && (
                          <span className="bg-green-gradient rounded-md text-sm px-2 text-slate-50">
                            new
                          </span>
                        )}
                      </p>
                      {isAllowedLinkEditors && (
                        <span className="hidden group-hover:block">
                          <NavItemEditIcon
                            onEditIconClick={() => {
                              setEditableNavItem(menuItem);
                              toggleEditForm();
                            }}
                          />
                        </span>
                      )}
                    </Link>
                  )}

                  {showStaticLink && (
                    <div
                      onClick={(e) => handleNavItemMouseEnter(menuItem, e)}
                      onMouseEnter={(e) => handleNavItemMouseEnter(menuItem, e)}
                      className={`group ${menuItem.tailwind} flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-3 rounded-custom hover:bg-accent hover:dark:bg-dark hover:text-primary text-dark dark:text-accent-foreground`}
                      tabIndex={0}
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base text-left">
                        {menuItem.name}
                        {hasTag("new", menuItem.tags) && (
                          <span className="bg-green-gradient rounded-md text-sm px-2 text-slate-50">
                            new
                          </span>
                        )}
                      </p>
                      {isAllowedLinkEditors && (
                        <span className="hidden group-hover:block">
                          <NavItemEditIcon
                            onEditIconClick={() => {
                              setEditableNavItem(menuItem);
                              toggleEditForm();
                            }}
                          />
                        </span>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
        </div>

        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
            {session?.user ? (
              <ProfileNav user={session.user} profileNavs={profileNavs} />
            ) : (
              <div className="flex flex-row items-center gap-2">
                <Link href={getRedirectBaseUrl() + "/next/signin"}>
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link href={getRedirectBaseUrl() + "/next/signup"}>
                  <Button>Register free</Button>
                </Link>
              </div>
            )}
            <DarkModeToggle />

            {/* Mobile menu icon */}
            {isHeaderHidden ? (
              <Menu
                onClick={toggleHeader}
                className={clsx(
                  "flex flex-col items-center justify-center xl:hidden max-xl:visible text-primary w-10 h-10"
                )}
              />
            ) : (
              <X
                onClick={toggleHeader}
                className={clsx(
                  "flex flex-col items-center justify-center xl:hidden max-xl:visible w-10 h-10 text-primary"
                )}
              />
            )}
          </div>
        </div>
      </div>
      {showMegaMenu && (
        <div ref={megaMenuRef}>
          <MegaMenu
            isAdmin={isAdmin}
            isAllowedLinkEditors={isAllowedLinkEditors}
            subNavs={getSubNavs(currentNavItem, subNavs)}
            childNavPaneStyles={childNavPaneStyles}
            onClose={handleMouseLeave}
            onEditItemSelected={(navItem) => {
              setEditableNavItem(navItem);
              setShowEditForm(true);
            }}
          />
        </div>
      )}

      {showEditForm && (
        <NavItemEditForm
          navItem={editableNavItem}
          onEditComplete={() => toggleEditForm(false)}
          floating={true}
        />
      )}
    </header>
  );
};

const getSubNavs = (
  currentNavItem: NavItem | null,
  subNavs?: NavItem[]
): { sub_nav: NavItem; child_navs: NavItem[] }[] => {
  if (!currentNavItem || !subNavs) return [];

  const subNavItems = subNavs.filter((nav) => {
    const parentIds = nav.parent_ids.split(",");
    return parentIds.some((id) => parseInt(id) === parseInt(currentNavItem.nav_item_id));
  });

  const subNavsWithChildren = subNavItems.map((subNav) => {
    const childNavItems = subNavs.filter((nav) => {
      const parentIds = nav.parent_ids.split(",");
      return parentIds.some((id) => parseInt(id) === parseInt(subNav.nav_item_id));
    });

    return { sub_nav: subNav, child_navs: childNavItems };
  });

  return subNavsWithChildren;
};

export default Header;
