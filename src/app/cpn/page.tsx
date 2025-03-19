"use client";

import React, { useState } from "react";
import Image from "next/image";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import WhosInSection from "@/components/shared/Community/WhosInSection";
import { Member } from "@/interfaces/community/communityMembers";
import _tabsSection from "@/app/cpn/_tabsSection";
import { TESTIMONIALS } from "@/constants/common";

type TabType = "overview" | "get_certified" | "whos_in";

const CPN = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [members, setMembers] = useState<Member[]>([]);
  const [faqItems, setFaqItems] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet duis quis nunc tellus et quis est. tellus ut fames consectetur et fermentum.",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Amet duis quis nunc tellus et quis est. Et fames adipiscing faucibus. Nulla mau vestibulum urna massa condimentum rhoncus in porta et massa. Sit tortor urna m felis et.",
      isOpen: false,
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Ut imperiet nec sed cursus tellus sit fusce ultricies. Ut ultricies ut vel vestibulum hendrerunt condimentum ac justo lacus. Cras.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqItems((prevFaqs) =>
      prevFaqs.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item))
    );
  };

  const getTabName = (tab: TabType): string => {
    switch (tab) {
      case "get_certified":
        return "Get Certified";
      case "whos_in":
        return "Who's In";
      default:
        return tab.charAt(0).toUpperCase() + tab.slice(1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-secondary dark:bg-primary-700 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] dark:mix-blend-multiply bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-[1062px] mx-auto flex flex-col items-center px-6 relative z-10">
          <Image
            src="/next/next_assets/images/cpn/cpn-logo.png"
            alt="CPN logo"
            width={81}
            height={81}
          />
          <h1 className="text-5xl text-center font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
            Certified PRO Network
          </h1>
          <p className="font-poppins text-xl text-center text-grey-700 dark:text-slate-100">
            Network and collaborate in an environment consisting entirely of screened professionals
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-[1062px] mx-auto px-6">
          <div className="flex justify-center space-x-4 py-4 overflow-x-auto">
            {(["overview", "get_certified", "whos_in"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "hover:bg-accent text-dark dark:text-gray-200"
                }`}
              >
                {getTabName(tab)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-[1062px] mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/*About CPN*/}
            <div className="mx-auto flex flex-col-reverse md:flex-row items-center">
              {/* Left Column */}
              <div className="md:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col lg:items-start">
                <h2 className="text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  About CPN
                </h2>
                <p className="text-base text-left">
                  The ProZ Certified PRO Network is a community of top-tier translators and
                  translation companies vetted by ProZ. Members meet professional standards in
                  translation ability, business reliability, and good citizenship. You can search
                  this network for high-quality professionals who meet your needs. Many profiles
                  include rate information or offer quotes.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:w-1/2 w-full h-auto">
                <Image
                  src="/next/next_assets/images/cpn/about-cpn.png"
                  alt="CPN Overview"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/*Benefits of joining CPN*/}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-12">
              {/* Left Column */}
              <div className="md:w-1/2 w-full h-auto lg:pr-8 mb-8 lg:mb-0">
                <Image
                  src="/next/next_assets/images/cpn/featured-translator.png"
                  alt="Featured Translator"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              {/* Right Column */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Benefits of joining
                </h2>
                <p className="text-base font-bold mt-4">Certified PRO members enjoy access to:</p>
                <ul className="list-disc pl-5 text-base text-left mt-3">
                  <li>Certified PRO title, seal, and certificate</li>
                  <li>Special search option in the directory</li>
                  <li>Dedicated profile in the Certified PROs pool</li>
                  <li>Private forums and groups</li>
                  <li>Discounts on ProZ training and events</li>
                  <li>Networking opportunities</li>
                  <li>Fast-track access to Translators Without Borders</li>
                  <li>Glossary sharing</li>
                  <li>Mentorship opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "get_certified" && (
          <div className="space-y-8">
            {/* Main Requirements Section */}
            <div className="flex flex-col gap-6">
              {/* Top Banner */}
              <div className="flex flex-col p-8 gap-3 rounded-3xl items-center bg-primary-600">
                <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[38px]">
                  Certification requirements
                </h2>
                <p className="text-center text-base text-white">
                  Both freelancers and companies undergo a rigorous screening process, including
                  verification of credentials, references, and translation samples. This process is
                  performed by Certified PRO peers and ProZ staff. Membership in ProZ is required,
                  with no additional charge for certification.
                </p>
              </div>

              {/* Vertical Tabs Section */}
              <_tabsSection />

              {/* Application CTA */}
              <div className="bg-gray-50 p-8 rounded-xl text-center space-y-4">
                <p className="text-xl text-gray-700 font-bold">
                  Apply to join ProZ.com's Certified PRO Network today!
                </p>
                <p className="text-gray-600">
                  Ready to elevate your professional status and join a community of top-tier
                  translators? Gain access to exclusive benefits, enhance your visibility and
                  connect with industry leaders. Start your application now and take the next step
                  in your professional journey!
                </p>
                <button
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                  onClick={() => console.log("Start application clicked")}
                >
                  Start application
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* FAQ Section */}
              <div className="space-y-4 mt-12">
                <h2 className="text-2xl font-bold text-center font-merriweather mb-8">
                  Frequently asked questions
                </h2>
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left bg-primary-50 hover:bg-primary-100 transition-colors flex items-center justify-between"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <span
                        className="text-2xl text-primary transition-transform duration-200"
                        style={{
                          transform: faq.isOpen ? "rotate(45deg)" : "none",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {faq.isOpen && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "whos_in" && (
          <WhosInSection
            members={members}
            communityName="Certified PRO Network"
            membership="certified_pro"
            renewal_date="2024-12-31"
            communityType="cpn"
          />
        )}
      </div>

      {/*Testimonials*/}
      <div className="w-full py-20 bg-primary-50 dark:bg-grey-800 justify-start items-center gap-16 m-auto">
        <div className="flex flex-col max-w-6xl px-4 gap-8 mx-auto">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Member testimonials
          </h2>
          <div className="flex flex-col lg:flex-row grow shrink basis-0 self-stretch justify-center items-start gap-5 w-full mx-auto">
            {TESTIMONIALS.filter((testimonial) => testimonial.type === "CPN")
              .slice(0, 3)
              .map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPN;
