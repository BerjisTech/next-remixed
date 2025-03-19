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

const SECTIONS: Section[] = [
  {
    id: "login-registration",
    title: "Login/Registration",
    description: "Account access and registration information",
    items: [
      {
        title: "Account Access",
        content: "Essential information about logging in and managing your account credentials.",
        links: [
          {
            text: "What are cookies and why do I need them enabled?",
            url: "/what-are-cookies-and-why-do-i-need-them-enabled",
          },
          {
            text: "Incorrect password troubleshooting",
            url: "/i-receive-an-incorrect-password-error-message",
          },
          { text: "IP Issues", url: "/my-ip-seems-to-have-been-reported-as-malicious" },
        ],
      },
      {
        title: "Password Management",
        content: "Tools and guidance for managing your account password securely.",
        links: [
          { text: "Forgot Password", url: "/what-do-i-do-if-i-forgot-my-password" },
          { text: "Change Password", url: "/change-my-password" },
          {
            text: "Password Confirmation Issues",
            url: "/what-do-i-do-if-i-do-not-receive-a-confirmation-email",
          },
        ],
      },
      {
        title: "Account Security",
        content:
          "Information about keeping your account secure and handling security notifications.",
        links: [
          {
            text: "Unexpected Password Change Emails",
            url: "/i-received-a-password-change-email-but-i-dont-want-to-change-it",
          },
          {
            text: "Lost Access Recovery",
            url: "/forgot-my-password-and-my-email-address-has-changed",
          },
        ],
      },
    ],
  },
  {
    id: "profile-general",
    title: "Profile: General",
    description: "General profile settings and management",
    items: [
      {
        title: "Profile Privacy",
        content: "Control and manage your profile's privacy settings and information sharing.",
        links: [
          { text: "Information Collection & Sharing", url: "/cookies-third-parties-privacy" },
          { text: "Profile Message Templates", url: "/profile-message-templates" },
          {
            text: "Payment Methods",
            url: "/can-i-accept-other-payment-methods-through-my-profile",
          },
        ],
      },
      {
        title: "Profile Management",
        content: "Tools and options for managing your professional profile.",
        links: [
          { text: "Profile Types", url: "/are-there-any-differences-in-the-profile-structure" },
          { text: "Upload Profile Photo", url: "/how-do-i-upload-a-profile-photo-or-image" },
          { text: "Edit Profile Information", url: "/edit/update-the-information-in-my-profile" },
        ],
      },
    ],
  },
  {
    id: "profile-native-language",
    title: "Profile: Native Language",
    description: "Native language settings and credentials",
    items: [
      {
        title: "Language Settings",
        content: "Manage your native language settings and certifications.",
        links: [
          { text: "Multiple Language Variants", url: "/multiple-variants" },
          { text: "Native Speaker Credential", url: "/proz.com-native-speaker-credential" },
          {
            text: "Multiple Language Credentials",
            url: "/how-do-i-get-the-credential-in-more-than-one-language",
          },
        ],
      },
    ],
  },
  {
    id: "profile-referrals",
    title: "Profile: Referrals",
    description: "Manage and display professional referrals",
    items: [
      {
        title: "Referral Management",
        content: "Learn about managing professional referrals on your profile.",
        links: [
          { text: "About Profile Referrals", url: "/what-are-profile-referrals" },
          { text: "Referral Benefits", url: "/benefits-of-showing-referrals-in-profile" },
          { text: "Add Referrals", url: "/how-to-enter-referrals-in-profile" },
        ],
      },
    ],
  },
  {
    id: "profile-expertise",
    title: "Profile: Fields of Expertise",
    description: "Manage your professional specializations",
    items: [
      {
        title: "Expertise Management",
        content: "Set up and manage your fields of expertise and specializations.",
        links: [
          { text: "Add Fields of Expertise", url: "/how-can-i-report-fields-in-my-profile" },
          { text: "Remove Fields", url: "/how-can-i-remove-fields-from-my-profile" },
          {
            text: "Change Field Order",
            url: "/can-i-change-the-order-of-fields-reported-in-my-profile",
          },
        ],
      },
    ],
  },
  {
    id: "profile-rates",
    title: "Profile: Rates",
    description: "Manage your professional rates and pricing",
    items: [
      {
        title: "Rate Settings",
        content: "Configure and manage your professional rates and pricing options.",
        links: [
          { text: "Enter Rates", url: "/how-do-i-enter-my-rates" },
          { text: "Rate Importance", url: "/why-is-this-important-for-me" },
          { text: "Language Pair Rates", url: "/how-do-i-enter-rates-for-each-language-pair" },
        ],
      },
    ],
  },
  {
    id: "profile-services",
    title: "Profile: Services",
    description: "Manage your professional service offerings",
    items: [
      {
        title: "Service Configuration",
        content: "Set up and manage your professional service offerings.",
        links: [
          { text: "Add Monolingual Service", url: "/how-do-i-add-a-monolingual-service" },
          { text: "Report Services", url: "/how-can-i-report-the-services-i-offer" },
          { text: "Service Importance", url: "/why-is-it-important-to-report-services-offered" },
        ],
      },
    ],
  },
  {
    id: "profile-credentials",
    title: "Profile: Credentials",
    description: "Manage professional credentials and certifications",
    items: [
      {
        title: "Credential Management",
        content: "Add and manage your professional credentials and certifications.",
        links: [
          { text: "About Credentials", url: "/what-is-a-credential" },
          { text: "Report Credentials", url: "/how-do-i-report-my-credentials" },
          {
            text: "Credential Verification",
            url: "/do-i-have-to-submit-a-copy-of-my-credentials-for-verification",
          },
        ],
      },
    ],
  },
  {
    id: "profile-availability",
    title: "Profile: Availability Calendar",
    description: "Manage your availability settings",
    items: [
      {
        title: "Availability Settings",
        content: "Configure your availability calendar and working hours.",
        links: [
          { text: "About Availability Calendar", url: "/what-is-the-availability-calendar" },
          { text: "Set Availability", url: "/how-can-i-specify-my-availability" },
          {
            text: "Capacity Management",
            url: "/how-is-capacity-used-in-the-availability-calendar",
          },
        ],
      },
    ],
  },
  {
    id: "profile-feedback",
    title: "Profile: Translator Feedback (WWA)",
    description: "Manage translator feedback and ratings",
    items: [
      {
        title: "Feedback Management",
        content:
          "Handle and display translator feedback and Willingness to Work Again (WWA) ratings.",
        links: [
          { text: "Submit Feedback", url: "/submitted-feedback-for-wrong-service-provider" },
          { text: "Handle Feedback Requests", url: "/got-feedback-request-via-email" },
          { text: "WWA Completion Mark", url: "/green-completion-mark-for-wwa" },
        ],
      },
    ],
  },
  {
    id: "profile-cv",
    title: "Profile: CV/Resume",
    description: "Manage your professional CV and resume",
    items: [
      {
        title: "CV Management",
        content: "Upload and manage your CV/resume documents.",
        links: [
          {
            text: "CV Accessibility",
            url: "/the-cv/resume-file-i-uploaded-to-my-profile-is-accessible-from-outside-proz.com",
          },
          { text: "Update CV", url: "/how-do-i-update/edit/replace-my-present-cv/resume" },
          { text: "Remove CV", url: "/how-do-i-remove-an-old-cv" },
        ],
      },
    ],
  },
  {
    id: "profile-social",
    title: "Profile: Social Networking",
    description: "Manage social networking integration",
    items: [
      {
        title: "Social Integration",
        content: "Connect and manage social networking features.",
        links: [
          { text: "About Social Networking", url: "/what-is-social-networking" },
          { text: "Integration Options", url: "/integrate-prozcom-with-my-social-networks" },
          {
            text: "Business Promotion",
            url: "/how-can-i-use-social-networking-to-promote-my-business",
          },
        ],
      },
    ],
  },
  {
    id: "profile-website",
    title: "Professional Premium Membership: Website",
    description: "Manage your professional website features",
    items: [
      {
        title: "Website Management",
        content: "Set up and manage your professional website.",
        links: [
          { text: "Website Services", url: "/what-does-website-service-include" },
          {
            text: "Technical Requirements",
            url: "/do-i-need-technical-knowledge-to-use-the-website-service",
          },
          { text: "Setup Process", url: "/setup-process-for-getting-my-website-up-and-running" },
        ],
      },
    ],
  },
  {
    id: "browniz-points",
    title: "Browniz Points",
    description: "Manage your Browniz points system",
    items: [
      {
        title: "Points System",
        content: "Learn about and manage your Browniz points.",
        links: [
          { text: "About Browniz Points", url: "/what-are-browniz-points" },
          { text: "Using Points", url: "/how-can-i-use-browniz" },
          { text: "Earning Points", url: "/how-can-i-get-browniz" },
        ],
      },
    ],
  },

  {
    id: "wallet",
    title: "ProZ.com Wallet",
    description: "Manage your ProZ.com wallet",
    items: [
      {
        title: "Wallet Management",
        content: "Handle your ProZ.com wallet and payments.",
        links: [
          { text: "About Wallet", url: "/what-is-my-proz.com-wallet-for" },
          { text: "Accept Payments", url: "/how-can-i-accept-payments-through-my-profile" },
          { text: "Wallet Fees", url: "/what-are-the-fees-for-using-the-proz.com-wallet" },
        ],
      },
    ],
  },

  {
    id: "membership-types",
    title: "Membership Types",
    description: "Different membership options and their benefits",
    items: [
      {
        title: "Professional Membership",
        content: "Information about professional membership benefits and features.",
        links: [
          { text: "Plus Package Benefits", url: "/the-plus-service-package" },
          {
            text: "Standard vs Plus Comparison",
            url: "/whats-in-plus-package-how-is-different-from-standard",
          },
          {
            text: "Directory Advantages",
            url: "/does-plus-give-advantages-in-directory-over-standard",
          },
        ],
      },
      {
        title: "Business Membership",
        content: "Details about business membership options and features.",
        links: [
          { text: "About Business Membership", url: "/what-is-business-membership" },
          { text: "Business Benefits", url: "/business-membership-benefits" },
          { text: "Success Manager Access", url: "/how-do-get-access-to-a-success-manager" },
        ],
      },
    ],
  },
];

export default function AccountProfilePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="flex">
      <SidebarLayout activeItem="Account and profile" />
      <div className="flex-1">
        <HeroSection breadcrumbs={["Help Center", "Account and profile"]} />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Account and Profile</h2>
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
