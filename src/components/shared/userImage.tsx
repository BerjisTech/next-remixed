"use client";
import { DEFAULT_PLACEHOLDER_URL } from "@/constants/common";
import { useStaffHook } from "@/hooks/useStaffHook";
import { ProzUser } from "@/interfaces/account";
import clsx from "clsx";
import React from "react";

interface UserImageProps {
  user: ProzUser;
  children?: React.ReactNode;
  fullWidth?: boolean;
  isPremium?: boolean;
}

const UserImage: React.FC<UserImageProps> = ({
  user,
  children,
  fullWidth = true,
  isPremium = false,
}) => {
  const { getStaffById } = useStaffHook();
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

  return (
    <div className={clsx("flex items-center px-2.5 justify-center", { "w-full ": fullWidth })}>
      <div
        role="button"
        style={{ backgroundImage: "url(" + getImage() + ")" }}
        className="relative border-2 bg-primary bg-center bg-cover bg-no-repeat rounded-[28px] w-[200px] md:h-[200px]  xs:h-[150px]  flex items-center justify-center"
      >
        {isPremium && (
          <div className="absolute whitespace-nowrap bottom-[-13px] bg-gradient-to-r from-[#36767F] to-[#39ff9f] font-semibold text-white rounded-custom py-1 px-5">
            <span>PREMIUM MEMBER</span>
          </div>
        )}
        {children}
        <div
          className="hidden h-5 w-5 absolute rounded-[9.18px]"
          style={{
            background: "#78FE57",
            border: "2.94px solid white",
            insetBlockStart: "-4px",
            insetInlineEnd: "0",
            position: "absolute",
            height: "20px", // h-5 in Tailwind (5 * 4px = 20px)
            width: "20px", // w-5 in Tailwind (5 * 4px = 20px)
            display: "none", // hidden in Tailwind
          }}
        ></div>
      </div>
    </div>
  );
};

export default UserImage;
