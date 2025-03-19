"use client";

import React from "react";
import { Button } from "@/components/shadcn/button";
import Image from "next/image";
import { Activity, Flame, Rss } from "lucide-react";
import SideMenuDropdown from "@/components/shared/sideMenuDropdown";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProzTooltip from "@/components/shared/prozTooltip";

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: MenuItem[] = [
  {
    href: "/polls",
    icon: <Flame />,
    label: "Current poll",
  },
  {
    href: "/polls/archived",
    icon: <Activity />,
    label: "Archived polls",
  },
  {
    href: "/polls/search",
    icon: <Rss />,
    label: "Search polls",
  },
];

const adminItems: MenuItem[] = [
  {
    href: "/polls/admin/overview",
    icon: null,
    label: "Overview",
  },
  {
    href: "/polls/unvetted",
    icon: null,
    label: "Unvetted polls",
  },
  {
    href: "/polls/review",
    icon: null,
    label: "Polls requiring review",
  },
  {
    href: "/polls/queue",
    icon: null,
    label: "Poll queue",
  },
  {
    href: "/polls/discarded",
    icon: null,
    label: "Discarded polls",
  },
];

const PollsSideMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isAdmin = session?.user?.is_admin === true;

  const NavLink = ({ item }: { item: MenuItem }) => {
    const isActive = pathname === item.href;

    return (
      <Link href={item.href}>
        <Button
          className={`justify-between w-full dark:bg-grey-800 ${isActive ? "dark:bg-primary" : "hover:dark:bg-primary-700"}`}
          variant={isActive ? "default" : "secondary"}
          size="xl"
        >
          <div className="flex gap-2 items-center">
            {item.icon && <span className={isActive ? "" : ""}>{item.icon}</span>}
            <p className={`text-sm ${isActive ? "font-semibold" : ""}`}>{item.label}</p>
          </div>
        </Button>
      </Link>
    );
  };

  return (
    <div className="flex flex-col gap-8 sticky top-[80px]">
      <ProzTooltip message="Still in prototype" position="top">
        <Button variant="secondary" size="xl">
          <Image
            src="/next/next_assets/images/icons/add-light-green.svg"
            alt="Add button"
            width="20"
            height="20"
          />
          <p className="text-sm font-semibold">Suggest a poll</p>
        </Button>
      </ProzTooltip>

      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>

      {isAdmin && (
        <SideMenuDropdown title="Admin Only" defaultOpen={true}>
          {adminItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </SideMenuDropdown>
      )}
    </div>
  );
};

export default PollsSideMenu;
