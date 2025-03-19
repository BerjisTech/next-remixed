"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import WhosInSection from "@/components/shared/Community/WhosInSection";
import { Member, fetchInterpretersMembers } from "@/interfaces/community/communityMembers";
import { Button } from "@/components/shadcn/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

type TabType = "overview" | "whos_in";

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isMember, setIsMember] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const fetchedMembers = await fetchInterpretersMembers();
        setMembers(fetchedMembers);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const checkMembership = async () => {
      setIsMember(true);
    };

    fetchMembers();
    checkMembership();
  }, []);

  const getTabName = (tab: TabType): string => {
    switch (tab) {
      case "whos_in":
        return "Who's in";
      default:
        return tab.charAt(0).toUpperCase() + tab.slice(1);
    }
  };

  const OverviewContent = () => (
    <>
      <section className="max-w-6xl mx-auto my-8 px-4">
        <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200 mb-2.5">
          About the community
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="self-stretch text-grey-700 dark:text-gray-200 text-lg font-semibold leading-7 mb-2.5">
              Interpreters@Proz (I@P)
            </p>
            <p className="text-base leading-relaxed mb-4 dark:text-white">
              Interpreters @ Proz (I@P) is a network of ProZ members who serve as interpreters, many
              working remotely from their home offices by voice and video call. I@P is a network
              through which these professionals are able to share tips and experiences, and
              otherwise discuss topics of mutual interest to professional interpreters.
              <br />
              <br />
              To join the private I@P community (in WhatsApp) express interest by email by pressing
              the button below.
            </p>

            <Link href="mailto:Interpreters@proz.com?subject=Join%20interpreters%20@%20ProZ%20Community">
              <Button>
                Contact
                <ArrowUpRightFromSquareIcon />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://go.proz.com/hs-fs/hubfs/computer.png?width=6000&name=computer.png"
              alt="interpreter in a meeting"
              width={6000}
              height={2500}
              className="w-full object-cover h-[25rem] dark:text-white rounded-3xl shadow-md"
              style={{ objectPosition: "top" }}
            />
          </div>
        </div>
      </section>

      <div className="w-full py-20 bg-primary-50 dark:bg-grey-800 justify-start items-center gap-16 m-auto">
        <div className="flex flex-col max-w-[1062px] px-4 gap-12 mx-auto">
          <div className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Testimonials
          </div>
          <div className="flex flex-col lg:flex-row grow shrink basis-0 self-stretch justify-center items-start gap-5 w-full mx-auto">
            {TESTIMONIALS.filter((testimonial) => testimonial.type === "probono")
              .slice(0, 3)
              .map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="relative bg-accent py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-[1062px] mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
                Interpreters @ ProZ community
              </span>
            </h1>
            <p className="font-poppins text-xl text-center sm:text-left text-grey-700 dark:text-grey-200">
              Professional interpreters, communicating and collaborating to mutual benefit
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-auto">
            <Image
              src="/next/next_assets/images/community/interpreters-hero.jpeg"
              alt="Probono hero image"
              width={500}
              height={500}
              className="object-contain w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-[1062px] mx-auto px-6">
          <div className="flex justify-center space-x-4 py-4">
            {(["overview", "whos_in"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
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

      <div className="max-w-[1062px] mx-auto px-6 py-8">
        {activeTab === "overview" && <OverviewContent />}
        {activeTab === "whos_in" && !isLoading && (
          <WhosInSection
            members={members}
            communityName="Interpreters @ ProZ"
            membership="none"
            renewal_date=""
            communityType="interpreters"
          />
        )}
        {isLoading && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      <div className="w-full bg-accent flex-col justify-start items-center gap-6 inline-flex">
        <div className="h-36 flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch text-center">
            <span className="text-dark-blue-hue text-xl font-medium leading-[30px]">
              This community and the resources it relies on exist thanks to the support of ProZ.com
              members through their memberships.
            </span>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              <span className="text-dark-blue-hue text-xl font-medium underline leading-[30px]">
                Learn more
              </span>
            </a>
            <span className="text-dark-blue-hue text-xl font-medium leading-[30px]">.</span>
          </div>

          <div className="justify-start items-center gap-6 inline-flex">
            <Link href="/community/women-in-translation">
              <Button>
                <span className="text-white text-base font-semibold leading-normal">
                  Women in Translation community
                </span>
                &nbsp;
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5 15.2092L15 5.20923M15 5.20923H8.33333M15 5.20923V11.8759"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Button>
            </Link>
            <Link href="/community/proz-pro-bono">
              <Button>
                <span className="text-white text-base font-semibold leading-normal">
                  ProZ-Pro Bono community
                </span>
                &nbsp;
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5 15.2092L15 5.20923M15 5.20923H8.33333M15 5.20923V11.8759"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
