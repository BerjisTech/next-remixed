import React from "react";
import { cva } from "class-variance-authority";

const tabStyles = cva(
  "flex-shrink-0 px-4 py-2 text-sm font-poppins rounded-lg transition duration-300 whitespace-normal",
  {
    variants: {
      active: {
        true: "bg-primary text-white hover:dark:text-gray-200",
        false: "text-dark dark:text-gray-200 hover:bg-accent",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface Tab {
  id: string;
  label: string;
}

interface CommunityTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const CommunityTabs: React.FC<CommunityTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-start sm:justify-center space-x-2 mb-6 py-3 px-2 top-[75px] z-20 sticky bg-white/75 dark:bg-gray-800 backdrop-blur-md overflow-x-scroll sm:overflow-hidden">
      {tabs.map((tab: Tab) => (
        <button
          key={tab.id}
          className={tabStyles({ active: activeTab === tab.id })}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CommunityTabs;
