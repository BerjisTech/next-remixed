"use client";

import React, { useState } from "react";
import Accordion from "./_accordion";
import Image from "next/image";
import { getRedirectBaseUrl } from "@/utils/helpers";
import clsx from "clsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { ProPlanCategory } from "@/interfaces/membership";

// Define the type for a package
interface Package {
  name: string;
  price: number;
  duration: string;
  buttonLabel: string | null;
  originalPrice?: number; // Added originalPrice
  buttonUrl: string;
  "package-category": string;
}

const packages: Package[] = [
  {
    name: "Free",
    price: 0,
    duration: "",
    buttonLabel: "Continue as free user",
    buttonUrl: "/register",
    "package-category": "basic",
  },
  {
    name: "Standard package",
    price: 120,
    duration: "per year",
    buttonLabel: "Become a member",
    buttonUrl: "/store/27847",
    "package-category": "standard",
  },
  {
    name: "Plus package",
    price: 180,
    duration: "per year",
    buttonLabel: "Become a member",
    buttonUrl: "/store/27850",
    "package-category": "plus",
  },
  {
    name: "Premium package",
    price: 300,
    duration: "per year",
    buttonLabel: "Become a member",
    buttonUrl: "/store/24732",
    "package-category": "premium",
  },
  {
    name: "Premium package",
    price: 25,
    duration: "per month",
    buttonLabel: "Become a member",
    buttonUrl: "/store/34738",
    "package-category": "premium-monthly",
  },
];

interface BenefitsTableProps {
  category?: string;
  profPlanCategories: ProPlanCategory[];
}

const BenefitsTable: React.FC<BenefitsTableProps> = ({ category, profPlanCategories }) => {
  const [planType, setPlanType] = useState<string>("monthly");
  const getPackages = (category?: string): Package[] => {
    return packages
      .filter((item) => {
        // Exclude 'premium-monthly' when 'first' is 'yearly'
        if (category === "pre-registration" || planType === "yearly") {
          return item["package-category"] !== "premium-monthly";
        }
        return item["package-category"] !== "premium";
      })
      .map((item) => {
        const baseDiscount =
          (category === "pre-registration" || category === "post-registration") &&
          (item["package-category"] === "standard" || item["package-category"] === "plus")
            ? 10
            : 0;
        const premiumMonthlyDiscount = item["package-category"] === "premium" ? 40 : 0;
        const discount = baseDiscount + premiumMonthlyDiscount;
        const btnLabel = category === "pre-registration" ? "Register now" : item.buttonLabel;
        let url =
          category === "pre-registration"
            ? `${getRedirectBaseUrl()}/register`
            : `${getRedirectBaseUrl()}${item.buttonUrl}`;
        url =
          category === "post-registration" && item["package-category"] === "basic"
            ? `${getRedirectBaseUrl()}/settings`
            : `${getRedirectBaseUrl()}${item.buttonUrl}`;

        return {
          ...item,
          originalPrice: discount > 0 ? item.price : undefined, // Set originalPrice only if there's a discount
          price: item.price - discount,
          buttonUrl: url,
          buttonLabel: btnLabel,
        };
      });
  };

  const filteredPackages = getPackages(category);

  return (
    <div
      id="membership-benefit-table"
      className="max-w-7xl m-auto my-10 lg:mt-20 px-5 lg:px-5 relative"
    >
      <div className="sticky top-[90px] flex flex-col lg:flex-row justify-evenly items-center z-30 group">
        <div className="basis-[40%] mb-10 lg:mb-0 lg:flex justify-center items-center group-[.is-sticky]:hidden">
          {category !== "pre-registration" && (
            <Tabs defaultValue={planType} onValueChange={(val) => setPlanType(val)}>
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </div>

        <div className="w-full lg:basis-[60%]">
          <div className="h-[50px] ml-auto w-[75%] bg-primary text-white text-center py-2 rounded-t-xl">
            <div className="flex flex-row items-center justify-center">
              <span>Member</span>
              &nbsp;&nbsp;
              <Image
                src="/next/next_assets/images/svg/plus-member-white.svg"
                alt="image-24.png"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="bg-accent border border-primary dark:bg-black dark:border-white flex flex-row justify-between items-start mb-3 px-2 lg:px-0 py-5 lg:pr-10 rounded-xl rounded-tr-[0]">
            {filteredPackages.map((pkg, index) => (
              <div
                key={index}
                className={clsx(
                  "basis-[25%] self-stretch flex flex-col justify-between items-center gap-2",
                  { "mt-12": pkg["package-category"] === "basic" }
                )}
              >
                <div className="flex flex-col items-center">
                  <span className="font-[600] text-center text-sm">{pkg.name}</span>
                  {pkg.price > 0 && (
                    <div className="flex flex-col items-center">
                      {pkg.originalPrice && (
                        <span className="text-sm line-through text-gray-500">
                          ${pkg.originalPrice}
                        </span>
                      )}
                      <span className="font-[500] text-2xl">${pkg.price}</span>
                    </div>
                  )}
                  <span className="font-normal">{pkg.duration}</span>
                </div>
                {pkg.buttonLabel &&
                  category === "professional" &&
                  pkg["package-category"] !== "basic" && (
                    <a
                      href={pkg.buttonUrl}
                      className={clsx(
                        "px-2 py-1 mt-2 bg-primary rounded-xl max-w-[100px] lg:max-w-[unset] text-center text-[12px] text-white"
                      )}
                    >
                      {pkg.buttonLabel}
                    </a>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {profPlanCategories.map((item, index) => (
        <Accordion defaultOpen={true} planCategory={item} key={index} />
      ))}
    </div>
  );
};

export default BenefitsTable;
