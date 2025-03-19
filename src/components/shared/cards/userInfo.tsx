import { UserGeneralInfo } from "@/interfaces/account";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserInfoProps {
  link?: boolean;
  showImage?: boolean;
  includeBadges?: boolean;
  userInfo: UserGeneralInfo;
}

const UerInfo: React.FC<UserInfoProps> = ({
  userInfo,
  link = true,
  showImage = false,
  includeBadges = true,
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {link ? (
        <Link
          className="hover:text-primary hover:underline"
          href={"/profile/" + userInfo.entity_id + "/overview"}
        >
          {userInfo.site_name}
        </Link>
      ) : (
        <span>{userInfo.site_name}</span>
      )}
      {includeBadges && (
        <div className="flex items-center gap-0">
          {/* CPN badge */}
          {userInfo.is_certified_pro && (
            <Image
              src="/next/next_assets/images/svg/cpn-badge.svg"
              alt="image-24.png"
              height={20}
              width={20}
            />
          )}

          {/* Pro member */}
          {userInfo.is_professional_member && (
            <Image
              src="/next/next_assets/images/svg/plus-member.svg"
              alt="image-24.png"
              height={20}
              width={20}
            />
          )}

          {/* Business member */}
          {userInfo.is_business_member && (
            <Image
              src="/next/next_assets/images/svg/Membership-Business-Enterprise.svg"
              alt="image-24.png"
              height={20}
              width={20}
            />
          )}

          {/* Pro bono */}
          {userInfo.is_probono_volunteer && (
            <Image
              src="/next/next_assets/images/svg/proz-probono-badge.svg"
              alt="image-24.png"
              height={25}
              width={25}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UerInfo;
