"use client";

import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { BUSINESS_PLAN, TESTIMONIALS } from "@/constants/common";
import clsx from "clsx";
import React, { useState } from "react";
import Image from "next/image";

const businessMemberImages: string[] = [
  "/next/next_assets/images/bmOne.png",
  "/next/next_assets/images/bmTwo.png",
  "/next/next_assets/images/bmThree.png",
  "/next/next_assets/images/bmFour.png",
  "/next/next_assets/images/bmFive.png",
];

const BusinessMembership = () => {
  const [showFeatureComparison, setShowFeatureComparison] = useState<boolean>(false);
  const toggleFeatureComparison = () => {
    setShowFeatureComparison(!showFeatureComparison);
  };

  const isBoolean = (value: any): boolean => {
    return typeof value === "boolean";
  };

  return (
    <div className="w-screen max-w-full px-1 mx-0 dark:bg-gray-900 dark:text-white">
      <div>
        <div className="w-full py-8 bg-accent dark:bg-gray-800 flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch px-10 flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-primary dark:text-primary text-2xl lg:text-4xl font-semibold font-['Poppins'] leading-[44px]">
              ProZ business membership
            </div>
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-black dark:text-white text-base font-normal font-['Poppins'] leading-relaxed">
                Join the 672 Business Members at ProZ
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 top-[450px] pt-14 flex-col justify-start items-center gap-12 inline-flex w-full ">
          <div className="self-stretch text-center text-dark dark:text-primary text-5xl font-semibold font-['Poppins'] leading-[60px]">
            Select your membership package
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-8 flex max-w-[1300px] w-full mx-auto">
            <div className="self-stretch justify-center items-start flex-wrap lg:flex-nowrap gap-6 inline-flex">
              {BUSINESS_PLAN.map((plan, index) => (
                <div
                  key={index}
                  className={clsx(
                    "w-full lg:w-1/3 px-8 py-14 bg-gradient-to-bl from-[#ebebeb] via-white to-accent-light dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-[30px] border border-[#e7e7e7] dark:border-gray-600 flex-col justify-start items-center gap-8 inline-flex transition-transform duration-300 ease-in-out hover:scale-95",
                    { "border-2 border-[#8b1fbe] dark:border-purple-400": plan.popular }
                  )}
                >
                  {plan.popular && (
                    <div
                      className="px-3 py-0.5 bg-[#a061b3] relative rounded-[100px] justify-start items-center gap-2.5 inline-flex"
                      style={{ insetBlockStart: " -4rem" }}
                    >
                      <div className="text-white text-sm font-normal font-['Poppins']">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div
                    className="self-stretch flex-col justify-start items-center gap-[18px] flex"
                    style={{ marginBlockStart: plan.popular ? "-70px" : "0" }}
                  >
                    <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                      <div className="text-[#5e2955] dark:text-purple-300 text-[19px] font-semibold font-['Poppins'] uppercase">
                        {plan.name}
                      </div>
                      <div className="self-stretch text-center text-[#141414] dark:text-gray-300 text-sm font-normal font-['Poppins'] h-20">
                        {plan.description}
                      </div>
                    </div>
                    <div className="flex-col justify-center items-center flex">
                      <div className="text-dark-blue-hue dark:text-blue-300 text-4xl font-semibold font-['Poppins'] leading-[48px]">
                        {plan.yearlyPrice}
                      </div>
                      <div className="text-black dark:text-gray-400 text-sm font-normal font-['Poppins'] mt-2">
                        or {plan.monthlyPrice}
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-4 bg-[#5e2955] dark:bg-purple-700 rounded-xl justify-center items-center gap-4 inline-flex mt-4">
                      <div className="text-center text-white text-base font-semibold font-['Poppins'] leading-normal">
                        Purchase now
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full relative py-[100px] flex-col items-center gap-6 inline-flex overflow-hidden">
          <div className="self-stretch text-center text-dark dark:text-primary text-5xl font-semibold font-['Poppins'] leading-[60px]">
            Some of our select ProZ Business members
          </div>
          <div className="justify-start items-center gap-14 inline-flex">
            {businessMemberImages.map((img, index) => (
              <Image
                key={index}
                className="w-[135px] h-[135px]"
                src={img}
                alt="Business member logo"
                width={135}
                height={135}
              />
            ))}
          </div>
        </div>

        <div className="h-[387px] max-w-7xl flex-col justify-start items-center gap-16 flex m-auto">
          <div className="self-stretch text-center text-dark-blue-hue dark:text-blue-300 text-4xl font-semibold font-['Poppins'] leading-[44px]">
            Business membership testimonials
          </div>
          <div className="self-stretch justify-center items-start gap-5 inline-flex">
            {TESTIMONIALS.slice(10, 13).map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMembership;
