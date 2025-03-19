import { Separator } from "@/components/shadcn/separator";
import { PROZ_SOCIALS } from "@/constants/common";
import { getRedirectBaseUrl } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterHubSpot = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black ">
      <div className="relative bg-[url('/next/next_assets/images/proz-office.jpg')] bg-no-repeat bg-[50%] bg-cover">
        <div className="absolute inset-0 bg-purple-950/50 filter bg-blend-multiply"></div>
        <div className="px-11 lg:px-28 py-5 lg:py-16 relative">
          <div className="w-[90%] lg:w-[30%] text-white">
            <h1 className="font-bold text-2xl mb-5">ProZ.com Mission Statement</h1>
            <p>
              Since 1999, ProZ.com's mission has been to empower language industry professionals to
              achieve their business objectives and realize their full potential (while networking
              and having fun). &nbsp;
              <Link
                className="hover:text-primary-50 hover:underline"
                href={getRedirectBaseUrl() + "/about"}
              >
                Learn more about ProZ
              </Link>
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 my-5">
            <Link href={PROZ_SOCIALS.facebook} target="_blank">
              <Image
                src="/next/next_assets/images/svg/facebook.svg"
                alt="social-logo"
                height={32}
                width={32}
              />
            </Link>
            <Link href={PROZ_SOCIALS.twitter} target="_blank">
              <Image
                src="/next/next_assets/images/svg/twitter.svg"
                alt="social-logo"
                height={32}
                width={32}
              />
            </Link>
            <Link href={PROZ_SOCIALS.linkedin} target="_blank">
              <Image
                src="/next/next_assets/images/svg/linkedin.svg"
                alt="social-logo"
                height={32}
                width={32}
              />
            </Link>
          </div>
          <Separator className="my-5" />
          <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
            <p className="text-white text-center dark:text-white">
              Copyright © 1999 - {year} ProZ - All rights reserved.{" "}
            </p>
            <Link href={getRedirectBaseUrl()} className="flex-grow-0 flex-shrink-0">
              <Image
                src="/next/next_assets/images/svg/proz-logo.svg"
                alt="_prozSvg.svg"
                height={132}
                width={132}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHubSpot;
