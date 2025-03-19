import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

const ServiceVerification = ({ user, service }: { user: ProzUser; service: string }) => {
  const getVerificationStatus = (): Record<string, string> => {
    const { pools_profiles } = user.pools_data;
    if (user.is_owner) {
      if (
        service === "interpreting" &&
        pools_profiles &&
        pools_profiles?.["interpreters"] &&
        pools_profiles?.["interpreters"].pool_status === "active"
      ) {
        return {
          status: "You have been verified",
          icon: "/next/next_assets/images/svg/verified-user-rounded-green.svg",
        };
      } else if (
        service === "subtitling" &&
        pools_profiles &&
        pools_profiles?.["subtitlers"] &&
        pools_profiles?.["subtitlers"].pool_status === "active"
      ) {
        return {
          status: "You have been verified",
          icon: "/next/next_assets/images/svg/verified-user-rounded-green.svg",
        };
      } else {
        return {
          status: "You will be able to request verification soon",
          icon: "/next/next_assets/images/svg/verified-user-rounded-gray.svg",
        };
      }
    } else {
      if (
        service === "interpreting" &&
        pools_profiles &&
        pools_profiles?.["interpreters"] &&
        pools_profiles?.["interpreters"].pool_status === "active"
      ) {
        return {
          status: `${user.site_name} has been verified as interpreter.`,
          icon: "/next/next_assets/images/svg/verified-user-rounded-green.svg",
        };
      } else if (
        service === "subtitling" &&
        pools_profiles &&
        pools_profiles?.["subtitlers"] &&
        pools_profiles?.["subtitlers"].pool_status === "active"
      ) {
        return {
          status: `${user.site_name} has been verified as subtitler.`,
          icon: "/next/next_assets/images/svg/verified-user-rounded-green.svg",
        };
      } else {
        const serviceType =
          service === "interpreting"
            ? "interpreter"
            : service === "subtitling"
              ? "subtitler"
              : "translator"; // Default to 'translator' if service is unspecified
        return {
          status: `${user.site_name} has not been verified as ${serviceType}.`,
          icon: "/next/next_assets/images/svg/verified-user-rounded-gray.svg",
        };
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-start self-stretch  gap-2 p-6 rounded-custom bg-secondary dark:bg-black">
      <div className="gap-3 md:gap-auto flex flex-col xl:flex-row justify-between items-start md:items-center self-stretch  relative">
        <div className="flex flex-col xl:flex-row justify-start items-start md:items-center  w-full md:w-[727.2px] relative gap-3">
          <Image
            src={getVerificationStatus().icon}
            alt="verified-user-rounded-gray"
            height={60}
            width={60}
          />
          <div className="flex flex-col justify-center items-start  relative gap-2">
            <p className="w-full md:w-auto  text-xl font-semibold text-left text-primary">
              {getVerificationStatus().status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceVerification;
