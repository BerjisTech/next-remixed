"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeroSection {}

const HeroSection = () => {
  let pathname = usePathname() ?? "";
  const [headerData, setHeaderData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (pathname.includes("outsourcer")) {
      setHeaderData({
        title: "Outsourcer reviews",
        description: "Discover what customers are saying about businesses and members",
      });
    } else if (pathname.includes("providers")) {
      setHeaderData({
        title: "Service provider reviews",
        description: "Find out what clients say about service providers",
      });
    } else if (pathname.includes("my-reviews")) {
      setHeaderData({
        title: "My reviews",
        description: "See your personal reviews and feedback",
      });
    } else if (pathname.includes("my-business")) {
      setHeaderData({
        title: "My business reviews",
        description: "See your personal business reviews and feedback",
      });
    }
  }, [pathname]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-auto px-10 py-8 flex flex-col items-center gap-4">
        <div className="self-stretch w-full h-[78px] flex-col justify-start items-center gap-2 flex">
          <div className="text-center text-primary text-4xl font-semibold font-['Poppins'] leading-[44px]">
            {headerData.title}
          </div>
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="text-center text-black text-base font-normal font-['Poppins'] leading-relaxed">
              {headerData.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
