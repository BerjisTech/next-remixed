"use client";
import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

const ProZGeneralPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: "#whatsproz",
      title: "What is ProZ.com?",
      content:
        "ProZ.com—the community—is a group of language professionals that includes translators, interpreters, translation companies, and their clients. ProZ.com—the site—is a marketplace and workplace: thousands of language pros exchange job and term information here every day.\n" +
        "\n" +
        "ProZ.com—the staff—is a small group of programmers and language enthusiasts based in New York (United States), La Plata (Argentina), and Kharkiv (Ukraine), assisted by volunteer moderators around the world.",
    },
    {
      id: "#prozpronounciation",
      title: "How is ProZ.com pronounced?",
      content:
        "At headquarters in New York, ProZ.com staff refer to the site as proz-dot-com, with the ProZ part pronounced exactly like prose or pros (as in professionals). But some people say pro-zee-dot-com, pro-zed, procetta, etc.",
    },
    {
      id: "proz-site-glossary",
      title: "ProZ.com site glossary",
      content: `
                <strong>Common terminology used at ProZ.com.</strong><br>
                Note that because site terminology has evolved over time, the terms below may not yet be used consistently throughout the entire site. If you come across site text that does not match this terminology, please let us know by submitting a support request.<br>

                <strong>Agency:</strong> See "translation company".<br>
                <strong>Blue Board:</strong> A database of outsourcers with ProZ.com users' expressed likelihoods of working again with them. A risk management tool for evaluating outsourcers. (In English, Blue Board should be two words, both capitalized.)<br>
                <strong>Blue Board average entry level:</strong> An aggregate figure representing the average LWA expressed for a single outsourcer by service providers.<br>
                <strong>Blue Board comment:</strong> Part of a Blue Board entry. Comments should be limited in scope to explanation/grounds for the LWA; they should not include general statements concerning an outsourcer. (Example: "They are rude" is not allowed. "They were rude to me" is allowed, from the standpoint that it explains why the service provider may not work with an outsourcer again.)<br>
                <strong>Freelancer:</strong> A language service provider who works in an individual, freelance capacity.<br>
                <strong>Translator:</strong> A language service provider who translates written messages from one language to another.<br>
                <strong>VID:</strong> Verified identity. Registered users are "VIDed", and a mark appears next to their name in various places on the site, when we can be reasonably assured that the name in his or her profile is the person's real name.<br>
            `,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="ProZ.com general information" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "ProZ.com general information"]} />

        {/* Content */}
        <div className="p-6" id="proz-general">
          <h2 className="text-2xl font-bold mb-6">ProZ.com general information</h2>
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
                  className="w-full text-left p-4 rounded-md font-bold"
                >
                  {section.title}
                </button>
                {activeAccordion === section.id && (
                  <div
                    className="w-full p-4 prose prose-lg prose-invert"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProZGeneralPage;
