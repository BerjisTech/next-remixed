"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { NavItem } from "@/interfaces/navigation/menu-items";
import { DEFAULT_PLACEHOLDER_URL } from "@/constants/common";
import { useStaffHook } from "@/hooks/useStaffHook";
import { ProzUser } from "@/interfaces/account";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { UserSearch, X } from "lucide-react";
import { useAppDispatch } from "@/lib/store/hooks";
import { useProfileHook } from "@/hooks/useProfileHook";
import { setNavigationSliceBits } from "@/lib/store/features/navigation/navigationSlice";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@/components/shadcn/button";
import { getInitials } from "@/utils/helpers";

interface ProfileNavProps {
  profileNavs: NavItem[];
  user: ProzUser;
}

const ProfileNav: React.FC<ProfileNavProps> = ({ profileNavs, user }) => {
  const [first, setfirst] = useState(false);
  const { getStaffById } = useStaffHook();
  const { stopPseudoSession } = useProfileHook();
  const dispatch = useAppDispatch();

  const getImage = (): string => {
    if (user) {
      let imgUrl: string | undefined = "";
      if (user.is_admin) {
        imgUrl = getStaffById(user?.entity_id)?.url ? getStaffById(user?.entity_id)?.url : "";
      }
      return imgUrl ? imgUrl : ((user?.image_url || user?.resource_image_url) as string);
    }
    return DEFAULT_PLACEHOLDER_URL;
  };

  const togglePseudoPopup = (e: any) => {
    dispatch(setNavigationSliceBits({ bitToSet: "showPseudoPopup", value: true }));
  };

  const logout = () => {
    signOut({ redirect: true, callbackUrl: "/next" });
    document.cookie = "PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <DropdownMenu open={first} onOpenChange={() => setfirst(!first)}>
      <DropdownMenuTrigger>
        <Avatar
          className="cursor-pointer"
          onClick={() => {
            setfirst(!first);
          }}
        >
          <AvatarImage src={getImage()} />
          <AvatarFallback>{getInitials((user?.site_name ?? user?.name) as string)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 min-w-[250px] mr-5 p-1 dark:bg-black">
        {(user.is_admin || user.is_pseudo) && (
          <DropdownMenuItem className="flex items-center justify-center p-1">
            <span
              onClick={(e) => togglePseudoPopup(e)}
              className="w-full flex items-center justify-start gap-2 hover:bg-primary hover:!text-white dark:hover:bg-dark dark:text-slate-100 rounded-md p-3 pseudo_menu"
              role="button"
            >
              <UserSearch />
              <span className="flex-grow">
                {user.is_pseudo ? `Viewing as ${user?.site_name}` : "Impersonate User"}
              </span>
              {user.is_pseudo && (
                <X
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    stopPseudoSession();
                  }}
                />
              )}
            </span>
          </DropdownMenuItem>
        )}
        {profileNavs.map((profileNav, index) => (
          <DropdownMenuItem
            key={index}
            className="p-1"
            onClick={() => {
              setfirst(!first);
            }}
          >
            {!profileNav.tailwind.includes("logout") ? (
              <Link
                prefetch={true}
                href={"/profile/" + user.entity_id + "/overview"}
                target={profileNav.target}
                className='w-full className="w-full flex items-center justify-start gap-2 hover:bg-primary hover:!text-white dark:hover:bg-dark dark:text-slate-100 rounded-md p-3 pseudo_menu"'
              >
                {profileNav.name}
              </Link>
            ) : (
              <Button variant="destructive" className="w-full" onClick={() => logout()}>
                {profileNav.name}
              </Button>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileNav;
