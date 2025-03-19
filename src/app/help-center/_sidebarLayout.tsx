"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type SidebarLayoutProps = {
  activeItem: string;
};

const menuItems = [
  {
    title: "ProZ.com general information",
    id: "proz-general",
    children: [],
  },

  {
    title: "Account and Profile",
    id: "account",
    children: [
      { title: "Login/Registration", id: "login-registration" },
      { title: "Profile: general", id: "profile-general" },
      { title: "Profile: native language", id: "profile-native-language" },
      { title: "Profile: referrals", id: "profile-referrals" },
      { title: "Profile: fields of expertise", id: "profile-fields-of-expertise" },
      { title: "Profile: languages", id: "profile-languages" },
      { title: "Profile: dynamic content", id: "profile-dynamic-content" },
      {
        title: "Profile: portfolio/sample translations",
        id: "profile-portfolio-sample-translations",
      },
      { title: "Profile: project history", id: "profile-project-history" },
      { title: "Profile: services", id: "profile-services" },
      { title: "Profile: rates", id: "profile-rates" },
      { title: "Profile: social networking", id: "profile-social-networking" },
      { title: "Profile: identity verification", id: "profile-identity-verification" },
      { title: "Profile: CV/resume", id: "profile-cv-resume" },
      { title: "Profile: credentials", id: "profile-credentials" },
      { title: "Profile: contact information", id: "profile-contact-information" },
      { title: "Profile: bio", id: "profile-bio" },
      { title: "Profile: availability calendar", id: "profile-availability-calendar" },
      { title: "Profile: tabs", id: "profile-tabs" },
      { title: "Profile: translator feedback (WWA)", id: "profile-translator-feedback-wwa" },
      { title: "Profile: directory ranking", id: "profile-directory-ranking" },
      { title: "Browniz points", id: "browniz-points" },
      { title: "ProZ.com wallet", id: "prozcom-wallet" },
      { title: "Membership: general", id: "membership-general" },
      { title: "Professional membership", id: "professional-membership" },
      { title: "Business membership", id: "business-membership" },
      { title: "Business page", id: "business-page" },
      {
        title: "Professional Premium Membership website",
        id: "professional-premium-membership-website",
      },
    ],
  },
  {
    title: "Billing and Payment",
    id: "billing",
    children: [
      { title: "Payment by credit card", id: "payment-by-credit-card" },
      { title: "Payment by PayPal", id: "payment-by-paypal" },
    ],
  },

  {
    title: "Email and Notifications",
    id: "email",
    children: [
      { title: "General information", id: "general-information" },
      { title: "Profile email", id: "profile-email" },
      { title: "General notifications", id: "general-notifications" },
      { title: "Notifications: KudoZ", id: "notifications-kudoz" },
      { title: "Notifications: Jobs", id: "notifications-jobs" },
    ],
  },
  {
    title: "Jobs and Directories",
    id: "job-directories",
    children: [
      { title: "Posting jobs at ProZ.com", id: "posting-jobs-at-prozcom" },
      { title: "Finding jobs at ProZ.com", id: "finding-jobs-at-prozcom" },
      { title: "The translation center", id: "the-translation-center" },
      { title: "ProZ.com Connect", id: "prozcom-connect" },
      { title: "Pre-qualified jobs", id: "pre-qualified-jobs" },
      { title: "Private job posting", id: "private-job-posting" },
      { title: "Turn-key jobs", id: "turn-key-jobs" },
      { title: "Directories: general", id: "directories-general" },
      { title: "Pools", id: "pools" },
      { title: "Interpreter world map", id: "interpreter-world-map" },
      { title: "Translator organizations database", id: "translator-organizations-database" },
      { title: "Cloud jobs", id: "cloud-jobs" },
    ],
  },
  {
    title: "Education",
    id: "education",
    children: [
      { title: "Training: general", id: "training-general" },
      { title: "In-person conferences", id: "in-person-conferences" },
      { title: "Virtual conferences", id: "virtual-conferences" },
      { title: "Online training", id: "online-training" },
      { title: "SDL Trados Certification", id: "sdl-trados-certification" },
      { title: "Webinars", id: "webinars" },
      { title: "Self-paced training", id: "self-paced-training" },
      { title: "Articles", id: "articles" },
      { title: "Dictionary and reference board", id: "dictionary-and-reference-board" },
      { title: "Translation news", id: "translation-news" },
      { title: "Translation industry wiki", id: "translation-industry-wiki" },
    ],
  },

  {
    title: "Community",
    id: "community",
    children: [
      { title: "Forums", id: "forums" },
      { title: "Podcasts", id: "podcasts" },
      { title: "Translation events", id: "translation-events" },
      { title: "Powwows", id: "powwows" },
      { title: "WIWO (What I'm Working On)", id: "wiwo" },
      { title: "Certified PRO Network", id: "certified-pro-network" },
      { title: "Translation teams", id: "translation-teams" },
      { title: "Translation contests", id: "translation-contests" },
      { title: "Exchange", id: "exchange" },
      { title: "Translator Playground", id: "translator-playground" },
      { title: "ProZ.com community choice awards", id: "community-choice-awards" },
      { title: "Mentoring program", id: "mentoring-program" },
      { title: "ProZ.com moderators", id: "proz-moderators" },
      { title: "ProZ.com website localization", id: "website-localization" },
      { title: "Localization project", id: "localization-project" },
      { title: "Quick polls", id: "quick-polls" },
      { title: "Justin Chlebus Memorial Scholarship Fund", id: "justus-fund" },
      { title: "ProZ.com local", id: "proz-local" },
    ],
  },

  {
    title: "Terminology",
    id: "terminology",
    children: [
      { title: "KudoZ: general", id: "kudoz-general" },
      { title: "KudoZ: asking", id: "kudoz-ask" },
      { title: "KudoZ: answering", id: "kudoz-answer" },
      { title: "KudoZ: peer commenting", id: "kudoz-peer" },
      { title: "KudoZ: editing", id: "kudoz-edit" },
      { title: "Glossary-building KudoZ", id: "kudoz-glossary" },
      { title: "Glossaries", id: "glossaries" },
      { title: "GlossPost", id: "glosspost" },
      { title: "Wikiwords", id: "wikiwords" },
      { title: "Term search", id: "term-search" },
    ],
  },

  {
    title: "Tools",
    id: "tools",
    children: [
      { title: "Blue Board: General", id: "bb-general" },
      { title: "Blue Board for service providers", id: "bb-service-providers" },
      { title: "Blue Board for outsourcers", id: "bb-outsourcers" },
      { title: "Blue Board applications system", id: "bb-applications-system" },
      { title: "Invoicing", id: "invoicing" },
      { title: "Translator Group Buy (TGB)", id: "translator-group-buy-tgb" },
      { title: "ProZ.com Mobile", id: "proz-com-mobile" },
      { title: "ProZ.com API", id: "proz-com-api" },
      { title: "Other tools", id: "other-tools" },
    ],
  },

  {
    title: "ProZ*Pay",
    id: "prozpay",
    children: [
      { title: "ProZ*Pay for Payer", id: "prozpay-for-payer" },
      { title: "ProZ*Pay for Payee", id: "prozpay-for-payee" },
    ],
  },

  {
    title: "Remote interpreter pool",
    id: "remote-pool",
    children: [],
  },

  {
    title: "Native speaking conversation",
    id: "native-speaking",
    children: [{ title: "Native speaking app", id: "native-speaking-app" }],
  },
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ activeItem }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const router = useRouter();
  let pathname = usePathname() ?? "";

  useEffect(() => {
    // Determine the active menu and child based on the current URL
    const activeParent: any = menuItems.find((item) => pathname.includes(item.id)) || false;
    setExpanded(activeParent?.id || null);

    if (activeParent?.children?.length > 0) {
      const activeChildItem = activeParent.children.find((child: any) =>
        pathname.includes(child.id)
      );
      setActiveChild(activeChildItem?.id || null);
    } else {
      setActiveChild(null);
    }
  }, [pathname]);

  const handleParentNavigate = (id: string) => {
    router.push(`/help-center/helpitems/${id}`);
  };

  const handleChildScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveChild(id);
    }
  };

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => handleParentNavigate(item.id)}
              className={`cursor-pointer p-2 ${
                expanded === item.id
                  ? "bg-primary font-bold text-white"
                  : "text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {item.title}
            </div>
            {expanded === item.id && item.children.length > 0 && (
              <ul className="pl-4 space-y-1">
                {item.children.map((child, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleChildScroll(child.id)}
                      className={`block p-2 w-full text-left ${
                        activeChild === child.id
                          ? "bg-primary text-white"
                          : "text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      {child.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarLayout;
