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

const JobsDirectoriesPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const sections: Section[] = [
    {
      id: "posting-jobs",
      title: "Posting Jobs at ProZ.com",
      description: "Information about posting translation jobs",
      items: [
        {
          title: "Who can outsource via ProZ.com?",
          content: "Guidelines for posting translation jobs and outsourcing work.",
          links: [
            { text: "Outsourcing Guidelines", url: "/outsource-proz.com" },
            { text: "Job Posting Rules", url: "/jobs-posted" },
          ],
        },
        {
          title: "Posting Process",
          content: "How to post jobs, manage quotes, and close job postings.",
          links: [
            { text: "Post a Job", url: "/post-job" },
            { text: "Manage Quotes", url: "/see-quotes-received" },
          ],
        },
      ],
    },
    {
      id: "finding-jobs",
      title: "Finding Jobs at ProZ.com",
      description: "Information for translators seeking work",
      items: [
        {
          title: "How to Find and Quote on Jobs",
          content: "Guide to finding and bidding on translation projects.",
          links: [
            { text: "Quote Guide", url: "/how-can-i-quote" },
            { text: "Payment Types", url: "/what-payment-types-may-i-accept" },
          ],
        },
        {
          title: "Job Searching Tips",
          content: "Best practices for finding and securing translation work.",
          links: [{ text: "Job Search Guide", url: "/how-do-i-get-jobs-at-proz" }],
        },
      ],
    },
    {
      id: "translation-center",
      title: "The Translation Center",
      description: "Professional translation management platform",
      items: [
        {
          title: "About the Translation Center",
          content: "Overview of the translation management system and its features.",
          links: [{ text: "Platform Overview", url: "/what-is-the-translation-center" }],
        },
        {
          title: "Security and Privacy",
          content: "Information about data protection and privacy measures.",
          links: [{ text: "Security Information", url: "/what-about-privacy-and-data-security" }],
        },
      ],
    },
    {
      id: "proz-connect",
      title: "ProZ.com Connect!",
      description: "Enhanced job posting and matching system",
      items: [
        {
          title: "About Connect!",
          content: "Features and benefits of the Connect! system.",
          links: [{ text: "Connect! Overview", url: "/what-value-does-proz-connect-deliver" }],
        },
        {
          title: "Premium Jobs",
          content: "Information about premium job postings and features.",
          links: [{ text: "Premium Jobs Guide", url: "/what-is-a-premium-job" }],
        },
      ],
    },
    {
      id: "directories",
      title: "Directories",
      description: "Professional directories and databases",
      items: [
        {
          title: "Translator Directory",
          content: "Information about the translator and interpreter directory.",
          links: [
            { text: "Directory Guide", url: "/proz.com-directory" },
            { text: "Rankings Explained", url: "/how-is-placement-in-the-directory-determined" },
          ],
        },
        {
          title: "Organizations Database",
          content: "Access to translation organization listings and information.",
          links: [{ text: "Database Guide", url: "/what-is-the-organizations-database" }],
        },
      ],
    },
    {
      id: "cloud-jobs",
      title: "Cloud Jobs",
      description: "Cloud-based translation job system",
      items: [
        {
          title: "About Cloud Jobs",
          content: "Overview of the ProZ.com Cloud Jobs system.",
          links: [
            { text: "Cloud Jobs Guide", url: "/cloud-jobs" },
            { text: "How It Works", url: "/how-do-cloud-jobs-work-work" },
          ],
        },
        {
          title: "Benefits and Features",
          content: "Advantages of using Cloud Jobs for translations.",
          links: [
            {
              text: "Translator Benefits",
              url: "/what-benefits-are-there-in-proz.com-cloud-jobs-for-translators",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Jobs and directories" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Jobs and directories"]} />

        {/* Content */}
        <div className="p-6" id="jobs-directories">
          <h2 className="text-2xl font-bold mb-6">Jobs and Directories</h2>
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

export default JobsDirectoriesPage;
