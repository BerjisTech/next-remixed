"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidenav = () => {
  let pathname = usePathname() ?? "";
  return (
    <div className={clsx("min-w-full p-3 border-[1px] rounded-xl mt-5")}>
      <div className="bg-white dark:bg-black rounded-xl p-4 w-full ps-2 flex flex-col items-start justify-start gap-1">
        <p className="text-primary font-semibold">Invoicing</p>
        <Link
          href="/invoicing/overview/home"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/home",
            }
          )}
        >
          Home
        </Link>
        <Link
          href="/invoicing/overview/invoices"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/invoices",
            }
          )}
        >
          Invoices
        </Link>
        <Link
          href="/invoicing/overview/payables"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/payables",
            }
          )}
        >
          Payables
        </Link>
        <Link
          href="/invoicing/overview/reports"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/reports",
            }
          )}
        >
          Reports
        </Link>
        <Link
          href="/invoicing/overview/settings"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/settings",
            }
          )}
        >
          Settings
        </Link>
        <Link
          href="/invoicing/overview/faq"
          className={clsx(
            "dark:text-primary p-3 w-full rounded-lg hover:bg-primary hover:text-accent-foreground",
            {
              "bg-primary dark:bg-dark text-white dark:text-primary":
                pathname === "/invoicing/overview/faq",
            }
          )}
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
