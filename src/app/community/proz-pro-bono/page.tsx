import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import TabSwitcher from "@/app/community/proz-pro-bono/_tab_switcher";

export const metadata: Metadata = {
  title: "ProZ Probono",
  description: "We help non-profits worldwide overcome the language barrier, free of charge.",
};

const page = () => {
  return (
    <div>
      {/* <!--Hero--> */}
      <div className="relative bg-accent py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/probono/ppb-hero-image.png')] bg-cover bg-no-repeat"></div>
        <div className="max-w-[1062px] mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <Image
              src="/next/next_assets/images/probono/ppb-logo.png"
              alt="Probono logo"
              width={81}
              height={81}
            />
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-white dark:text-primary-300">
                ProZ Pro Bono
              </span>
            </h1>
            <p className="font-poppins text-xl text-center sm:text-left text-white dark:text-grey-200">
              Empowering freelancers and non-profits through impactful collaborations
            </p>

            {/* Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelevi6Jv2l2FSHSUMJUypyIQRdULkI8qxVXpu5uan7AyfZPQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary rounded-xl shadow border border-primary hover:bg-[#3a7a7a] transition-colors duration-300 mt-4"
            >
              <div className="text-white text-lg font-semibold font-['Poppins'] leading-7">
                Get involved
              </div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9 18.8228L15 12.8228L9 6.82275"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 w-full h-auto">
            <Image
              src="/next/next_assets/images/probono/hero-probono.png"
              alt="Probono hero image"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      <TabSwitcher />
    </div>
  );
};

export default page;
