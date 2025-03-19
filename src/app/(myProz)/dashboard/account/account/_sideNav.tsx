"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const SideNav = () => {
  const [activeSubNav, setActiveSubNav] = useState<string>("overview");
  const [activeSubNavChild, setActiveSubNavChild] = useState<string>("overview");
  const [showMobileSubMenu, setShowMobileSubMenu] = useState<boolean>(false);

  const activateSubNav = (parent: string, child: string = "") => {
    setShowMobileSubMenu(false);
    setActiveSubNav(parent);
    setActiveSubNavChild(child);
  };

  return (
    <div className="">
      <div
        className={clsx(
          "w-[300px] p-3 md:sticky bottom-3 right-3 md:top-[75px] border-[1px] rounded-xl",
          { "fixed right-[-300px] bottom-[-300px]": showMobileSubMenu },
          { "fixed right-3 bottom-3 z-[200000]": showMobileSubMenu }
        )}
      >
        <div className="bg-white dark:bg-black rounded-xl p-4 w-full ps-2 flex flex-col items-start justify-start gap-1">
          <p className="text-primary font-semibold">Account</p>
          <Link
            onClick={() => {
              activateSubNav("username");
            }}
            href="/dashboard/account/account#username"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary": activeSubNav === "username",
              }
            )}
          >
            Username
          </Link>
          <Link
            onClick={() => {
              activateSubNav("account_type");
            }}
            href="/dashboard/account/account#account_type"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "account_type",
              }
            )}
          >
            Account type
          </Link>
          <Link
            onClick={() => {
              activateSubNav("administrative_history");
            }}
            href="/dashboard/account/account#administrative_history"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "administrative_history",
              }
            )}
          >
            Administrative history
          </Link>
          <p className="text-primary font-semibold mt-5">Login & recovery</p>
          <Link
            onClick={() => {
              activateSubNav("login_and_recovery_email_and_phone");
            }}
            href="/dashboard/account/account#login_and_recovery_email_and_phone"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "login_and_recovery_email_and_phone",
              }
            )}
          >
            Email & phone
          </Link>
          <Link
            onClick={() => {
              activateSubNav("login_and_recovery_change_password");
            }}
            href="/dashboard/account/account#login_and_recovery_change_password"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "login_and_recovery_change_password",
              }
            )}
          >
            Change password
          </Link>
          <Link
            onClick={() => {
              activateSubNav("login_and_recovery_password_recovery");
            }}
            href="/dashboard/account/account#login_and_recovery_password_recovery"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "login_and_recovery_password_recovery",
              }
            )}
          >
            Password recovery
          </Link>
          <Link
            onClick={() => {
              activateSubNav("login_and_recovery_active_login_sessions");
            }}
            href="/dashboard/account/account#login_and_recovery_active_login_sessions"
            className={clsx(
              "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-primary-foreground",
              {
                "bg-primary dark:bg-dark text-white dark:text-primary":
                  activeSubNav === "login_and_recovery_active_login_sessions",
              }
            )}
          >
            Active login sessions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
