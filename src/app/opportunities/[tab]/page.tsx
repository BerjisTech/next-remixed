import React from "react";
import ProzOpportunities from "../_prozOpportunities"; // Ensure this path is correct or the file exists
import InterpretersNetwork from "../_interpretersNetwork";
import Link from "next/link";
import { Tabs, TabsList } from "@/components/shadcn/tabs";

const Page: React.FC<any> = ({ params }) => {
  const { tab } = params;
  const activeTab = tab;
  let isDefaultTab = tab === "proz-opportunities";

  const renderContent = () => {
    switch (activeTab) {
      case "proz-opportunities":
        return <ProzOpportunities />;
      case "interpreters-calls":
        return <InterpretersNetwork />;
      default:
        return <ProzOpportunities />;
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="p-10 bg-[#EDF5F5] dark:bg-primary relative flex items-center justify-center flex-col gap-4">
        <span className="text-primary dark:text-white text-2xl md:text-[40px] font-bold">
          Opportunities marketplace
        </span>
        <div className="items-center justify-center gap-2 text-center">
          <span className="text-black dark:text-white">
            Browse language jobs posted to the world's largest community of freelance translators,
            interpreters, subtitlers and other language professionals.
          </span>
        </div>
      </div>

      {/* Submenu */}
      <Tabs className="flex justify-center bg-[#EDF5F5] dark:bg-primary pb-1">
        <TabsList className="bg-transparent">
          <Link
            href="/opportunities/proz-opportunities"
            className={`py-3 px-6 md:px-8 text-sm md:text-base font-medium ${
              isDefaultTab
                ? "text-black dark:text-white bg-white dark:bg-dark border-t-[#D9D9D9] border-l-[#D9D9D9] border-r-[#D9D9D9] border-b-[#FFF] border-t border-l border-r border-b-4 dark:border-t-[#D9D9D9] dark:border-l-[#D9D9D9] dark:border-r-[#D9D9D9] dark:border-b-[#222222]"
                : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 bg-gray-100 dark:bg-gray-700 border-b-[#D9D9D9] border-b dark:border-b-[#444]"
            } rounded-t-md mx-1 border`}
          >
            ProZ.com opportunities
          </Link>
        </TabsList>
        <TabsList className="bg-transparent">
          <Link
            href="/opportunities/interpreters-calls"
            className={`py-3 px-6 md:px-8 text-sm md:text-base font-medium ${
              activeTab === "interpreters-calls"
                ? "text-black dark:text-white bg-white dark:bg-dark border-t-[#D9D9D9] border-l-[#D9D9D9] border-r-[#D9D9D9] border-b-[#FFF] border-t border-l border-r border-b-4 dark:border-t-[#D9D9D9] dark:border-l-[#D9D9D9] dark:border-r-[#D9D9D9] dark:border-b-[#222222]"
                : "text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 bg-gray-100 dark:bg-gray-700 border-b-[#D9D9D9] border-b dark:border-b-[#444]"
            } rounded-t-md mx-1 border`}
          >
            Interpreters Network
          </Link>
        </TabsList>
        {/* <TabsList className="bg-transparent">
            <button
            disabled
            className={`py-3 px-6 md:px-8 text-sm md:text-base font-medium ${
                activeTab === 'proz-pay'
                ? 'text-black dark:text-white bg-white dark:bg-dark border-t-[#D9D9D9] border-l-[#D9D9D9] border-r-[#D9D9D9] border-b-[#FFF] border-t border-l border-r border-b-4 dark:border-t-[#D9D9D9] dark:border-l-[#D9D9D9] dark:border-r-[#D9D9D9] dark:border-b-[#222222]'
                : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 bg-gray-100 dark:bg-gray-700 border-b-[#D9D9D9] border-b dark:border-b-[#444] cursor-not-allowed disabled'
            } rounded-t-md mx-1 border`}
            >
            ProZ*Pay
            </button>
        </TabsList> */}
      </Tabs>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Page;
