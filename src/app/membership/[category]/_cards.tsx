"use client";
import { Button } from "@/components/shadcn/button";
import UerInfo from "@/components/shared/cards/userInfo";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser, UserGeneralInfo } from "@/interfaces/account";
import { getRedirectBaseUrl } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MultiYearOptions } from "./_yearOptions";

interface CardsProps {
  user: ProzUser | undefined;
  localContactData: UserGeneralInfo | null;
}

const Cards: React.FC<CardsProps> = ({ user, localContactData = null }) => {
  const { getCountryNameCountryCode } = useContentHook();
  return (
    <div className="max-w-7xl mx-auto relative flex-col justify-start items-center flex px-2 ">
      <div className="gap-3 justify-start items-start flex flex-col lg:flex-row -blue-hue">
        {/* Standard */}
        <div className="basis-[30%] flex flex-col gap-3 self-stretch p-6 text-center shadow-md border bg-accent rounded-[30px] dark:bg-dark border-white">
          <div className="self-stretch h-[148px] flex-col justify-start items-center gap-4 flex">
            <div className="text-primary text-base font-semibold font-['Poppins'] leading-normal">
              STANDARD
            </div>
            <div className="flex-col justify-center items-center flex">
              <div className=" text-[56px] font-medium font-['Poppins'] pb-2">$120</div>
              <div className=" text-base font-normal font-['Poppins']">per year</div>
            </div>
          </div>
          <Link href={getRedirectBaseUrl() + "/store/27847"}>
            <Button className="w-full p-7 mt-2 text-white">Purchase now</Button>
          </Link>
          <MultiYearOptions>
            <p className="self-stretch text-primary text-sm font-semibold cursor-pointer">
              Multi-year options available
            </p>
          </MultiYearOptions>
          <div className="px-5 py-3 flex items-center justify-center">
            <Image
              src="/next/next_assets/images/money-back-guarantee.png"
              className="rounded-xl"
              alt="freelancer-success-stories.png"
              height={100}
              width={100}
            />
          </div>
          {user && (
            <div className="flex flex-col !gap-3 ">
              <p className="text-[10px]">
                Local payment available for {getCountryNameCountryCode(user.contact_country_code)}
              </p>
              <p className="text-[14px]">Your local payment contact is</p>
              {localContactData && <UerInfo userInfo={localContactData} />}
              <div>
                <Link
                  target="_blank"
                  href={
                    getRedirectBaseUrl() +
                    "/join?viewPage=local_payment&locale=" +
                    user.contact_country_code
                  }
                  className="font-[500] text-primary-600"
                >
                  Make local payment
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Plus */}
        <div className="basis-[30%] flex flex-col gap-3 self-stretch p-6 text-center shadow-md bg-primary-50 rounded-[30px] border-2 border-primary dark:bg-dark">
          <div className="self-stretch h-[148px] flex-col justify-start items-center gap-4 flex">
            <div className="text-primary text-base font-semibold font-['Poppins'] leading-normal">
              PLUS
            </div>
            <div className="flex-col justify-center items-center flex">
              <div className=" text-[56px] font-medium font-['Poppins'] pb-2">$180</div>
              <div className=" text-base font-normal font-['Poppins']">per year</div>
            </div>
          </div>
          <Link href={getRedirectBaseUrl() + "/store/27850"}>
            <Button className="w-full p-7 mt-2 text-white">Purchase now</Button>
          </Link>
          <MultiYearOptions>
            <p className="self-stretch text-primary text-sm font-semibold cursor-pointer">
              Multi-year options available
            </p>
          </MultiYearOptions>
          <div className="flex flex-col gap-2">
            <Link
              href={"/membership/professional#membership-benefit-table"}
              className="text-[#1e3a8a] text-sm"
            >
              All <strong>Standard package benefits</strong>
            </Link>
            <p className="text-sm">Identity and security profile fields and validation</p>
            <p className="text-sm">Library of training material</p>
            <p className="text-sm">"Basket" of goods and services from ProZ partners</p>
            <p className="text-sm">
              Full benefit of ProZ's high rank in Google and other search engines
            </p>
            <p className="text-sm">Advantages in client channels external to ProZ</p>
            <p className="text-sm">Simple, recurring payments</p>
          </div>
        </div>

        {/* Premium */}
        <div className="basis-[30%] flex flex-col gap-3 self-stretch p-6 text-center shadow-md rounded-[30px] bg-accent dark:bg-dark border border-white">
          <div className="self-stretch h-[148px] flex-col justify-start items-center gap-4 flex">
            <div className="text-primary text-base font-semibold font-['Poppins'] leading-normal">
              NEW PREMIUM MONTHLY OPTION
            </div>
            <div className="flex-col justify-center items-center flex">
              <div className=" text-[56px] font-medium font-['Poppins'] pb-2">$25</div>
              <div className=" text-base font-normal font-['Poppins']">per month</div>
            </div>
          </div>
          <Link href={getRedirectBaseUrl() + "/store/34738"}>
            <Button className="w-full p-7 mt-2 text-white">Purchase now</Button>
          </Link>
          <div className="self-stretch  text-sm font-normal font-['Poppins'] leading-snug">
            (15-minute onboarding call with site staff required to start this membership)
          </div>
          <div className="flex flex-col gap-3 ">
            <Link
              href={"/membership/professional#membership-benefit-table"}
              className="text-[#1e3a8a] text-sm"
            >
              Everything in the <strong>Plus package</strong>
            </Link>
            <p className="text-sm">
              Access to your own website and hosting, with one-on-one consultation to perfect your
              professional web presence
            </p>
            <p className="text-sm">
              Your own AI tool, with training, a prompt library, and access to an exclusive
              community of AI-empowered linguists
            </p>
          </div>
        </div>
        {/* New members */}
        <div className="self-stretch px-3 pt-8 pb-14 shadow-md bg-white rounded-[30px] border flex-col justify-start items-center inline-flex relative dark:bg-dark border-white">
          <div className="absolute top-[0] right-[0] w-full bg-primary text-white text-center py-4 rounded-t-[30px]">
            <div className="flex flex-row items-center justify-center">
              <span>Welcome members!</span>
              &nbsp;
              <Image
                src="/next/next_assets/images/svg/ic-round-celebration.svg"
                alt="image-24.png"
                height={20}
                width={20}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 items-center justify-center">
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-white dark:bg-dark dark:border dark:border-white w-auto shadow-xl flex flex-row items-center gap-4 h-[64px] grow shrink-0 basis-0 p-5"
              >
                <div className="flex items-center justify-center border-2 border-primary-300 rounded-[42.8px] h-[40px] w-[40px]">
                  <Image
                    className="rounded-full"
                    src="/next/next_assets/images/wit/wit-card-logo.svg"
                    alt="probono-logo.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium truncate  whitespace-nowrap overflow-hidden">
                    Joe User name
                  </p>
                  <div className="w-full flex justify-start items-start relative gap-2">
                    <span className="text-xs font-medium text-left ">Brazil</span>
                    <Image
                      src="/next/next_assets/images/Brazil.svg"
                      alt="Brazil.svg"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 my-5">
        <Image
          src="/next/next_assets/images/payment-methods.png"
          alt="success-stories-1.png"
          width={200}
          height={100}
        />
        <p className="font-[400]">Also pay by check, money order or wire transfer</p>
      </div>
    </div>
  );
};

export default Cards;
