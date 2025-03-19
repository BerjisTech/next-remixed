"use client";

import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

interface HelpItem {
  title: string;
  content: string;
  links?: { text: string; url: string }[];
}

interface Section {
  id: string;
  title: string;
  description: string;
  items: HelpItem[];
}

const ToolsPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const sections: Section[] = [
    {
      id: "blue-board-general",
      title: "Blue Board: General",
      description: "Understanding and using the ProZ.com Blue Board system",
      items: [
        {
          title: "What is the Blue Board?",
          content:
            "A comprehensive database of translation companies and outsourcers with feedback from service providers.",
          links: [
            { text: "What is the Blue Board?", url: "/what-is-the-blue-board" },
            { text: "Glossary of Blue Board terms", url: "/glossary-of-blue-board-terms" },
            { text: "How reliable is the Blue Board?", url: "/how-reliable-is-the-blue-board" },
          ],
        },
        {
          title: "Entry Guidelines",
          content:
            "Specific conditions and requirements for making entries about working with outsourcers.",
          links: [
            { text: "Entry Conditions", url: "/conditions-for-making-an-entry" },
            { text: "Manage LWA Feedback", url: "/where-can-i-manage-lwa-feedback" },
          ],
        },
      ],
    },
    {
      id: "blue-board-service-providers",
      title: "Blue Board for Service Providers",
      description: "Information for translators and service providers using the Blue Board",
      items: [
        {
          title: "Access and Permissions",
          content: "Understanding access levels and capabilities for different membership types.",
          links: [
            {
              text: "Non-member Access",
              url: "/i-am-not-a-paying-member-can-i-still-make-blue-board-entries",
            },
            {
              text: "Viewing Records",
              url: "/i-am-not-a-paying-member-can-i-still-see-blue-board-records",
            },
          ],
        },
      ],
    },
    {
      id: "invoicing",
      title: "Invoicing",
      description: "Professional invoicing tools for translators",
      items: [
        {
          title: "Getting Started",
          content: "Introduction to ProZ.com's invoicing system for translators.",
          links: [
            {
              text: "About ProZ.com Invoicing",
              url: "/what-is-proz.com-invoicing-for-translators",
            },
            { text: "Create First Invoice", url: "/how-can-i-create-my-first-invoice" },
            { text: "Tool Access", url: "/who-can-use-the-invoicing-tool" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Tools" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Tools"]} />

        {/* Content */}
        <div className="p-6" id="tools">
          <h2 className="text-2xl font-bold mb-6">Tools</h2>
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border rounded-md ${
                  activeAccordion === section.id
                    ? "border-primary bg-primary text-white"
                    : "border-primary bg-white text-gray-800"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full text-left p-4 rounded-md font-bold flex justify-between items-center"
                >
                  <div>
                    <div>{section.title}</div>
                    <div className="text-sm font-normal mt-1">{section.description}</div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    className={`transform transition-transform ${
                      activeAccordion === section.id ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {activeAccordion === section.id && (
                  <div className="p-4 bg-white text-gray-800">
                    <div className="space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="pl-4 border-l-2 border-primary">
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="mt-1 text-gray-600">{item.content}</p>
                          {item.links && (
                            <div className="mt-2 space-y-1">
                              {item.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="block text-primary hover:text-primary-dark"
                                >
                                  {link.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
