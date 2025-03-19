"use client";
import React, { useState } from "react";
interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
}
interface VerticalTabsProps {
  tabs: Tab[];
}
const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row md:space-x-1 w-full">
      <div
        className="flex lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto rounded-lg p-2 lg:w-1/3 space-x-2 lg:space-x-0 lg:space-y-2 sticky top-[80px]"
        style={{ maxHeight: "min-content" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 md:p-4 w-full md:w-auto text-left rounded-2xl transition ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "bg-grey-100 text-grey-500 hover:bg-secondary hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="lg:w-2/3 mt-4 md:mt-0">{tabs[activeTab]?.content}</div>
    </div>
  );
};
export default VerticalTabs;
