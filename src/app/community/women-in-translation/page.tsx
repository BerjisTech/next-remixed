"use client";
import { useState, useEffect } from "react";
import TabsSection from "./TabSection";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";

const WomenInTranslation = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const [currentUserIsInCommunity, setCurrentUserIsInCommunity] = useState<boolean>(false);

  // Check if user is in the Community: Translation Mastermind
  const checkUserIsInCommunity = async (entity: number) => {
    if (entity) {
      try {
        const response = await fetch(
          `/next/api/communities/users?entity_id=${entity}&community_id=1`
        );
        const data = await response.json();
        console.log(data.users.length);
        setCurrentUserIsInCommunity(data.users && data.users.length > 0);
      } catch (err) {
        console.error("Error fetching user communities:", err);
      }
    } else {
      setCurrentUserIsInCommunity(false);
    }
  };

  useEffect(() => {
    if (entityId > 0) {
      checkUserIsInCommunity(entityId);
    }
  }, [entityId]);

  return (
    <div className="relative bg-accent dark:bg-gray-900 py-12 overflow-hidden">
      {/* Background image */}
      <div className="inset-0 bg-[url('/assets/images/wit/linen-texture.jpg')] bg-cover bg-no-repeat opacity-10"></div>

      {/* Hero Content */}
      <div className="max-w-[1062px] mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
        {/* Left Column */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight mb-4 text-center lg:text-left">
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-6xl font-semibold text-[#2a5656] dark:text-grey-400 pr-4">
              Women
            </span>
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-6xl font-semibold text-[#4d9d9d] dark:text-gray-200">
              in translation
            </span>
          </h1>

          {/* Button */}
          <a
            href={
              currentUserIsInCommunity
                ? "https://community.proz.com/c/wit/5"
                : "https://share.hsforms.com/1M49nmsiwQ-6MrZMMfGe86A2emm1"
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary rounded-xl shadow border border-primary hover:bg-[#3a7a7a] transition-colors duration-300"
          >
            <div className="text-white text-lg font-semibold font-['Poppins'] leading-7">
              {currentUserIsInCommunity ? "See latest" : "Get involved"}
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

        {/* Right Column */}
        <div>
          <Image
            src="/next/next_assets/images/wit/hero-image.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Tab section */}
      <div className="mt-12">
        <TabsSection currentUserIsInCommunity={currentUserIsInCommunity} />
      </div>
    </div>
  );
};

export default WomenInTranslation;
