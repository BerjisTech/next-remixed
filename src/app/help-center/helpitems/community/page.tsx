"use client";

import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";
import { Card } from "@/components/shadcn/card";

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transform transition-transform ${expanded ? "rotate-180" : ""}`}
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
);

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

const HelpSection = ({
  section,
  expanded,
  onToggle,
}: {
  section: Section;
  expanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <Card className="mb-4">
      <div
        className="p-4 flex justify-between items-start cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <div>
          <h3 className="text-lg font-semibold" id={section.id}>
            {section.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{section.description}</p>
        </div>
        <ChevronIcon expanded={expanded} />
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t">
          <div className="mt-4 space-y-6">
            {section.items.map((item, index) => (
              <div key={index} className="pl-4 border-l-2 border-teal-500">
                <h4 className="font-medium text-sm">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{item.content}</p>
                {item.links && (
                  <div className="mt-2 space-y-1">
                    {item.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="block text-sm text-teal-600 hover:text-teal-700"
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
    </Card>
  );
};

// Full sections data
// Add this content to your SECTIONS array
const SECTIONS: Section[] = [
  {
    id: "forums",
    title: "Forums",
    description: "Discussion spaces for the translation community",
    items: [
      {
        title: "What are the ProZ.com forums?",
        content:
          "ProZ.com forums are online spaces where translators and interpreters can discuss various topics related to the translation industry.",
        links: [
          { text: "Forum Guidelines", url: "/forum-guidelines" },
          { text: "Popular Topics", url: "/popular-topics" },
        ],
      },
      {
        title: "Who can use the forums?",
        content:
          "All registered ProZ.com users can participate in the forums, with some specialized sections reserved for members.",
      },
      {
        title: "What types of things can be posted?",
        content:
          "Forums allow discussion of translation-related topics, industry news, technical questions, and professional networking.",
      },
      {
        title: "What are the rules of the forums?",
        content:
          "Forum rules include professional conduct, respect for others, no spam or self-promotion, and adherence to topic guidelines.",
        links: [{ text: "Complete Forum Rules", url: "/forum-rules" }],
      },
      {
        title: "How do I report rule violations?",
        content:
          "If you notice rule violations, you can report them to moderators using the report button or contact site staff.",
      },
    ],
  },
  {
    id: "translation-teams",
    title: "Translation Teams",
    description: "Collaborate with other translators in specialized teams",
    items: [
      {
        title: "What is a ProZ.com translation team?",
        content:
          "Translation teams are groups of translators who collaborate on specific language pairs or specialties.",
        links: [
          { text: "Find Teams", url: "/teams" },
          { text: "Create a Team", url: "/create-team" },
        ],
      },
      {
        title: "What tools are available in translation teams?",
        content:
          "Teams have access to shared glossaries, private forums, file sharing, and team-specific job postings.",
      },
      {
        title: "Who can create or join teams?",
        content: "Any registered user can create or join teams, subject to team leader approval.",
      },
      {
        title: "How can I create a team?",
        content:
          "Use the team creation wizard to set up your team, define its focus, and invite members.",
        links: [{ text: "Team Creation Guide", url: "/team-creation" }],
      },
    ],
  },
  {
    id: "translation-contests",
    title: "Translation Contests",
    description: "Participate in translation challenges and competitions",
    items: [
      {
        title: "What are ProZ.com translation contests?",
        content:
          "Regular competitions where translators can showcase their skills and compete with peers.",
        links: [
          { text: "Current Contests", url: "/contests" },
          { text: "Past Winners", url: "/contest-winners" },
        ],
      },
      {
        title: "Who can participate in contests?",
        content: "All ProZ.com users can participate in translation contests.",
      },
      {
        title: "How does the contest work?",
        content:
          "Participants translate a provided text, submissions are peer-reviewed, and winners are selected based on quality.",
      },
      {
        title: "In what languages are the contests held?",
        content: "Contests are held in various language pairs, with new pairs featured regularly.",
      },
    ],
  },
  {
    id: "exchange",
    title: "Exchange",
    description: "Trade translation resources and materials",
    items: [
      {
        title: "What is the ProZ.com Exchange?",
        content: "A platform for translators to exchange resources, tools, and materials.",
        links: [{ text: "Browse Exchange", url: "/exchange" }],
      },
      {
        title: "Who can use the Exchange?",
        content: "All ProZ.com users can post and respond to exchange offers.",
      },
      {
        title: "What can be exchanged?",
        content:
          "Translation resources, dictionaries, software, and professional materials can be exchanged.",
      },
    ],
  },
  {
    id: "translator-playground",
    title: "Translator Playground",
    description: "Practice and improve your translation skills",
    items: [
      {
        title: "What is the Translator Playground?",
        content: "A space for translators to practice, share exercises, and improve their skills.",
        links: [{ text: "Visit Playground", url: "/playground" }],
      },
      {
        title: "Who can participate?",
        content: "Open to all ProZ.com users interested in improving their translation skills.",
      },
      {
        title: "What activities are available?",
        content: "Practice exercises, translation challenges, and peer review opportunities.",
      },
    ],
  },

  {
    id: "community-choice-awards",
    title: "ProZ.com Community Choice Awards",
    description: "Annual recognition of community excellence",
    items: [
      {
        title: "How do ProZ.com community choice awards work?",
        content:
          "Annual awards where the community nominates and votes for outstanding contributors in various categories.",
        links: [
          { text: "Current Awards", url: "/awards" },
          { text: "Past Winners", url: "/award-winners" },
        ],
      },
      {
        title: "What are the categories for the awards?",
        content:
          "Categories include best blog, best ProZ.com profile, best translation-related website, and more.",
      },
      {
        title: "Who can be nominated?",
        content:
          "Any member of the translation community can be nominated for relevant categories.",
      },
      {
        title: "Who can make nominations?",
        content: "All ProZ.com users can nominate candidates for the awards.",
      },
    ],
  },
  {
    id: "mentoring-program",
    title: "Mentoring Program",
    description: "Connect experienced translators with newcomers",
    items: [
      {
        title: "What is the ProZ.com mentoring program?",
        content:
          "A structured program connecting experienced translators with those seeking guidance.",
        links: [
          { text: "Become a Mentor", url: "/mentoring/mentor" },
          { text: "Find a Mentor", url: "/mentoring/find" },
        ],
      },
      {
        title: "Who can participate?",
        content:
          "Certified PRO translators can serve as mentors, while any member can apply as an apprentice.",
      },
      {
        title: "What are mentor responsibilities?",
        content:
          "Mentors provide guidance on translation techniques, business practices, and professional development.",
      },
      {
        title: "What are apprentice responsibilities?",
        content: "Apprentices must be committed to learning and completing agreed-upon activities.",
      },
    ],
  },
  {
    id: "website-localization",
    title: "ProZ.com Website Localization",
    description: "Help translate the ProZ.com platform",
    items: [
      {
        title: "How can I help localize ProZ.com?",
        content: "Contribute to translating the platform interface into your language.",
        links: [{ text: "Join Localization Team", url: "/localization" }],
      },
      {
        title: "What character sets can I use?",
        content: "ProZ.com supports all major character sets including UTF-8 encoded text.",
      },
      {
        title: "How do I report localization errors?",
        content:
          "Use the localization feedback system to report any errors or suggest improvements.",
      },
    ],
  },
  {
    id: "quick-polls",
    title: "Quick Polls",
    description: "Community surveys and opinion gathering",
    items: [
      {
        title: "What are ProZ.com quick polls?",
        content: "Brief surveys gathering community opinions on translation-related topics.",
        links: [
          { text: "Current Polls", url: "/polls" },
          { text: "Poll Archives", url: "/poll-archives" },
        ],
      },
      {
        title: "Who can suggest polls?",
        content: "Any member can suggest poll topics for consideration.",
      },
      {
        title: "Where can I find the polls?",
        content: "Polls are featured on the homepage and in the polls section.",
      },
    ],
  },
  {
    id: "memorial-scholarship",
    title: "Justin Chlebus Memorial Scholarship Fund",
    description: "Support for translation education",
    items: [
      {
        title: "What is the Justin Chlebus Memorial Scholarship Fund?",
        content:
          "A scholarship program supporting translation education in memory of Justin Chlebus.",
        links: [
          { text: "Scholarship Information", url: "/scholarship" },
          { text: "Apply for Scholarship", url: "/scholarship-application" },
        ],
      },
      {
        title: "Who can apply?",
        content: "Students and early-career professionals in translation-related fields.",
      },
      {
        title: "What does the scholarship cover?",
        content:
          "Educational expenses related to translation studies and professional development.",
      },
    ],
  },
  {
    id: "proz-local",
    title: "ProZ.com Local",
    description: "Location-specific translation communities",
    items: [
      {
        title: "What is ProZ.com Local?",
        content: "Regional community groups for translators in specific geographic areas.",
        links: [{ text: "Find Local Groups", url: "/local-groups" }],
      },
      {
        title: "Why is there no local page for my country?",
        content: "Local pages are created based on community interest and activity levels.",
      },
    ],
  },
];

// The correct ending for your file should be just:

export default function CommunityPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Community" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Community"]} />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Community</h2>
          <div className="space-y-4">
            {SECTIONS.map((section) => (
              <HelpSection
                key={section.id}
                section={section}
                expanded={expandedSections[section.id] || false}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
