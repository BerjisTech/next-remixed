"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import Link from "next/link";
import ProzPayPayerFaq from "@/app/prozpay/about/_prozPayFaq";
import Tooltip from "@/components/shared/prozTooltip";
import ProzCheckbox from "@/components/general/prozCheckbox";
import WhosInSection from "@/components/shared/Community/WhosInSection";
import { fetchProBonoMembers, Member } from "@/interfaces/community/communityMembers";
import { PAYEE_FAQS } from "@/constants/prozpay";

type TabType = "overview" | "who_involved" | "get_involved" | "key_resources";

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const data = await fetchProBonoMembers();
        setMembers(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching ProBono members:", err);
        setError("Failed to load members. Please try again later.");
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  const switchTab = ({ tab, event }: { tab: TabType; event: React.MouseEvent }) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const showGetInvolvedForm = false;

  return (
    <div>
      <div className="flex justify-start sm:justify-center space-x-2 mb-6 py-3 px-2 top-[75px] z-20 sticky bg-white/75 dark:bg-gray-800 backdrop-blur-md overflow-x-scroll sm:overflow-hidden">
        {/* Tab 1: Overview */}
        <button
          className={`flex-shrink-0 px-4 py-2 text-sm font-poppins text-dark dark:text-gray-200 rounded-lg transition duration-300 whitespace-normal ${
            activeTab === "overview"
              ? "bg-primary text-white hover:dark:text-gray-200"
              : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab({ tab: "overview", event: e })}
        >
          Overview
        </button>
        {/* Tab 2: Who Involved */}
        <button
          className={`flex-shrink-0 px-4 py-2 text-sm font-poppins text-dark dark:text-gray-200 rounded-lg transition duration-300 whitespace-normal ${
            activeTab === "who_involved" ? "bg-primary text-white" : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab({ tab: "who_involved", event: e })}
        >
          Who's involved
        </button>
        {/* Tab 3: Get Involved */}
        <button
          className={`flex-shrink-0 px-4 py-2 text-sm font-poppins text-dark dark:text-gray-200 rounded-lg transition duration-300 whitespace-normal ${
            activeTab === "get_involved" ? "bg-primary text-white" : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab({ tab: "get_involved", event: e })}
        >
          Get involved
        </button>
        {/* Tab 4: Key resources */}
        <button
          className={`flex-shrink-0 px-4 py-2 text-sm font-poppins text-dark dark:text-gray-200 rounded-lg transition duration-300 whitespace-normal ${
            activeTab === "key_resources" ? "bg-primary text-white" : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab({ tab: "key_resources", event: e })}
        >
          Key resources
        </button>
      </div>

      {/* Display content based on activeTab */}
      <div>
        {activeTab === "overview" && (
          <div className="flex flex-col gap-y-20">
            {/*Overview*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
                  Overview
                </h2>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200 mb-3">
                  Welcome to ProZ Pro Bono! Let’s start with a short introduction to what we do, why
                  we do it, who’s involved, and who we work with. Watch the video below.{" "}
                </p>
                {/*Video*/}
                <div className="flex justify-center px-3">
                  <div className="max-w-[1062px] w-full rounded-3xl overflow-hidden">
                    <div className="relative pb-[56.25%] h-0">
                      {" "}
                      {/* 16:9 Aspect Ratio */}
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/fE4-0D8litI?si=bAo7O-xfWJt1GmKG"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200 pt-6">
                  As a translator or interpreter, ProZ Pro Bono offers you four fantastic
                  opportunities.
                </p>
              </div>
              {/*Boxes*/}
              <div className="grid grid-cols-4 justify-start items-start gap-5">
                <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#EFEDE3] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-poppins leading-7">
                      The opportunity to make a difference
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      You’ll be helping non-profits on extremely tight budgets worldwide overcome
                      the language barrier and fulfill their humanitarian missions in a variety of
                      vital sectors. Every work you translate will make a difference in the life of
                      an individual or an entire group of people.
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#EFEDE3] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      The opportunity to grow professionally
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal leading-relaxed">
                      With our peer-review system, you’ll get feedback on your work, improve as a
                      translator, explore new areas, and of course build up your CV. No matter how
                      experienced you are, working with non-profits will enhance your resume and
                      make a strong statement.
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#EFEDE3] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      The opportunity to network
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      Through our WhatsApp groups and videoconferences, you’ll have a chance to meet
                      fellow volunteers around the world: engaged and friendly professionals from a
                      huge variety of different backgrounds. Broaden your horizons and escape the
                      isolation of freelance life!
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#EFEDE3] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      The opportunity to grow as a person
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      You’ll experience the benefits of helping others, learn about a range of
                      different sectors, expand your knowledge and feel a deeper understanding of
                      the needs of people across the world, plus a sense of connection to all those
                      who are striving to make the world a better place.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Probono stats*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3 w-full">
              <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
                ProZ Pro bono in numbers
              </h2>
              {/*Boxes*/}
              <div className="grid grid-cols-12 justify-start items-start gap-5">
                <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-cards-04 dark:bg-black rounded-custom flex-col justify-start items-start gap-6 w-full">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <span className="self-stretch text-grey-700 dark:text-gray-200 text-3xl font-bold font-merriweather leading-[38px]">
                      1,300 +
                    </span>
                    <span className="self-stretch text-grey-500 dark:text-gray-100 text-base font-medium font-poppins leading-normal">
                      Volunteers
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-cards-02 dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <span className="self-stretch text-grey-700 dark:text-gray-200 text-3xl font-bold font-merriweather leading-[38px]">
                      8M +
                    </span>
                    <span className="self-stretch text-grey-500 dark:text-gray-100 text-base font-medium font-poppins leading-normal">
                      Words translated
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-cards-08 dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <span className="self-stretch text-grey-700 dark:text-gray-200 text-3xl font-bold font-merriweather leading-[38px]">
                      100 +
                    </span>
                    <span className="self-stretch text-grey-500 dark:text-gray-100 text-base font-medium font-poppins leading-normal">
                      Organisations
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-cards-03 dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <span className="self-stretch text-grey-700 dark:text-gray-200 text-3xl font-bold font-merriweather leading-[38px]">
                      200 +
                    </span>
                    <span className="self-stretch text-grey-500 dark:text-gray-100 text-base font-medium font-poppins leading-normal">
                      Hours interpreted
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://prozprobonostats.com/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary rounded-xl
                                shadow border border-primary hover:bg-primary-700 transition-colors duration-300"
                >
                  <div className="text-white text-lg font-semibold leading-7">
                    Explore more statistics
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M9 18.8228L15 12.8228L9 6.82275"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/*Clients*/}
            <div className="max-w-[1062px] mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
              {/* <!-- Left Column --> */}
              <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
                <h2 className="text-center sm:text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
                  <span className="text-center sm:text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                    Clients
                  </span>
                </h2>
                <p className="font-poppins text-base text-center sm:text-left text-grey-700 dark:text-grey-200">
                  Our (non-paying) clients come from a variety of sectors within the humanitarian
                  and environmental fields, including the areas of refugees, women and girls,
                  international development, protecting the vulnerable, land rights, education,
                  health and the environment, to name but a few. They range in size from small
                  one-person NGOs to the United Nations.
                  <br />
                  <Link
                    href="https://prozprobonostats.com/organisations"
                    target="_blank"
                    className="text-base text-primary-500 font-bold mt-4 inline-block"
                  >
                    Click here
                  </Link>{" "}
                  for a full list on &nbsp;
                  <br />
                  On our
                  <Link
                    href="https://www.youtube.com/@prozprobono"
                    target="_blank"
                    className="text-base text-primary-500 font-bold mt-4 inline-block"
                  >
                    YouTube channel
                  </Link>
                  , we interview some of them for our Meet the Clients series.
                </p>
              </div>

              {/* <!-- Right Column --> */}
              <div className="lg:w-1/2 w-full h-auto">
                <Image
                  src="/next/next_assets/images/probono/sample-clients.png"
                  alt="Probono hero image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/*Testimonials*/}
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

            {/*Map*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3 w-full mb-8">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Map
                </h2>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                  This is a truly global initiative. Click on the map to discover some of our
                  volunteers and clients around the world
                </p>
              </div>
              <div className="w-full h-auto relative rounded-2xl overflow-hidden hover:shadow-3xl hover:border-8 hover:border-primary-300 transition-all">
                <Link
                  href="https://www.google.com/maps/d/u/1/edit?mid=1UmlCKLtxX8XbFOJRebPo5LILtpS-EHI&ll=0.955767805137917%2C0&z=2"
                  target="_blank"
                  className="block w-full"
                >
                  <Image
                    src="/next/next_assets/images/probono/map.png"
                    alt="Probono volunteers map"
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "who_involved" && (
          <div className="flex flex-col gap-y-20">
            {/*Program team*/}
            <div className="max-w-[1062px] mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
              {/* <!-- Left Column --> */}
              <div className="lg:w-1/2 lg:pr-8 lg:mb-0 flex flex-col items-center lg:items-start gap-2.5">
                <h2 className="text-center sm:text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
                  <span className="text-center sm:text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                    Program team{" "}
                  </span>
                </h2>
                <p className="font-poppins text-base text-center sm:text-left text-grey-700 dark:text-grey-200">
                  The two key people running the program are the Director Andrew Morris and the
                  Administrator Chinthi Chathurka. Andrew outlines the vision for the program, meets
                  the clients and organizes communications, while Chinthi handles all the day-to-day
                  management of translations, requests, volunteer onboarding and much more besides!
                </p>
              </div>
              {/* <!-- Right Column --> */}
              <div className="flex lg:w-1/2 gap-2 w-full">
                <div className="w-full relative rounded-2xl overflow-hidden">
                  <div className="block w-full h-[290px]">
                    <Image
                      src="/next/next_assets/images/probono/andrew-morris.png"
                      alt="Probono volunteers map"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full object-left-top"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-2xl bg-accent relative -mt-4 z-2">
                    <p className="text-base font-semibold font-poppins leading-normal text-grey-700">
                      Andrew Morris
                    </p>
                    <p className="text-sm font-normal font-poppins leading-tight text-grey-500">
                      Director
                    </p>
                  </div>
                </div>
                <div className="w-full relative rounded-2xl overflow-hidden">
                  <div className="block w-full h-[290px]">
                    <Image
                      src="/next/next_assets/images/probono/chinthi.png"
                      alt="Probono volunteers map"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full object-left-top"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-2xl bg-accent relative -mt-4 z-2">
                    <p className="text-base font-semibold font-poppins leading-normal text-grey-700">
                      Chinthi Dissayanake
                    </p>
                    <p className="text-sm font-normal font-poppins leading-tight text-grey-500">
                      Program Administrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Volunteers*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Volunteers
                </h2>
                {/* <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">Meet our amazing volunteers making a difference around the world</p> */}
              </div>
              {error && <div className="text-red-500 text-center mb-4">{error}</div>}
              {isLoading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <WhosInSection
                  members={members} // Now passing the actual members array
                  communityName="ProZ Pro Bono"
                  membership="none"
                  renewal_date=""
                  communityType="proBono"
                />
              )}
            </div>{" "}
          </div>
        )}

        {activeTab === "get_involved" && (
          <div className="flex flex-col gap-y-16">
            {/*Benefits of volunteering*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3 w-full">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Benefits of volunteering
                </h2>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                  There are many professional, personal and social benefits to volunteering. Here’s
                  what our volunteers have to say about what the program gives them..
                </p>
              </div>
              <div className="w-full rounded-3xl overflow-hidden">
                <div className="relative pb-[56.25%] h-0">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/MgPGLGyUFsQ?si=v6dYkYmObN_J5APj"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/*Current opportunities*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Current opportunities
                </h2>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                  Here we'll show a feed from the opportunities marketplace
                </p>
              </div>
            </div>

            {/*FAQs*/}
            <div className="flex flex-col container max-w-[1062px] mx-auto gap-6 px-3">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Question time
                </h2>
              </div>
              <ProzPayPayerFaq prozPayFaqItems={PAYEE_FAQS} />
            </div>

            {/*Networking*/}
            <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3 mb-8">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Networking
                </h2>
                <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                  Click here to join the Pro Bono Community forum and raise any other questions you
                  have about the program! And once you sign up below, you can also access our
                  WhatsApp group.{" "}
                </p>
              </div>
            </div>

            {showGetInvolvedForm && (
              <div className="relative bg-accent py-16 overflow-hidden dark:bg-grey-900">
                <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
                <div className="flex flex-col max-w-4xl mx-auto gap-6 px-3 relative z-10">
                  <div className="overflow-hidden gap-6 px-6 py-8 rounded-custom bg-white dark:bg-grey-700 border-t-[5px] border-r-0 border-b-0 border-l-0 border-primary-100 shadow-md">
                    <p className="text-center mb-6">
                      <span className="text-grey-700 dark:text-grey-200 text-2xl font-bold font-merriweather">
                        If you like what you see, we’ll be delighted to hear from you!
                        <br />
                      </span>
                      <span className="text-primary-500 text-2xl font-bold font-merriweather">
                        Just fill in this simple form
                      </span>
                    </p>

                    <div className="flex flex-col items-start gap-6">
                      {/*User profile card*/}
                      <div className="inline-flex items-center px-3.5 py-4 rounded-2xl bg-primary-50 gap-3">
                        <div className="relative overflow-hidden rounded-full border-2 border-primary-500">
                          <Image
                            src="/next/next_assets/images/probono/chinthi.png"
                            alt="Profile image"
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-poppins text-base font-medium leading-tight text-grey-700">
                            Lorem Ipsum
                          </p>
                          <div className="inline-flex items-center gap-1">
                            <p className="font-poppins font-medium leading-tight text-sm text-grey-500">
                              Brazil
                            </p>
                            <svg
                              width="16"
                              height="13"
                              viewBox="0 0 16 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-3 relative"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <g clipPath="url(#clip0_14914_92427)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 0.5H16V12.5H0V0.5Z"
                                  fill="#229E45"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.03499 11.4L15.5725 6.50754L7.98999 1.60004L0.42749 6.51754L8.03499 11.4Z"
                                  fill="#F8E509"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.32 6.5C11.32 8.2575 9.89251 9.6825 8.13001 9.6825C7.50019 9.68151 6.88479 9.49381 6.36163 9.14313C5.83846 8.79244 5.43101 8.29452 5.19079 7.71231C4.95056 7.13009 4.88835 6.48972 5.01201 5.87216C5.13567 5.25459 5.43965 4.68755 5.88553 4.24272C6.33141 3.79789 6.89916 3.49524 7.51702 3.37303C8.13488 3.25083 8.7751 3.31455 9.35674 3.55614C9.93839 3.79774 10.4354 4.20636 10.7848 4.73035C11.1343 5.25434 11.3205 5.87017 11.32 6.5Z"
                                  fill="#2B49A3"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.0825 8.40762L6.9825 8.35012L6.8825 8.40012L6.905 8.28762L6.825 8.20262L6.9375 8.19012L6.9925 8.09012L7.04 8.19512L7.15 8.21512L7.0675 8.29012M9.2175 8.94762L9.12 8.89012L9.02 8.94012L9.04 8.82762L8.9625 8.74512L9.075 8.73262L9.1275 8.63012L9.1775 8.73512L9.2875 8.75512L9.2025 8.83262M8.2975 8.08262L8.2125 8.03262L8.125 8.07762L8.145 7.98012L8.075 7.90762L8.175 7.89762L8.22 7.80762L8.26 7.90012L8.3575 7.91762L8.2825 7.98512M10.4575 7.77262L10.3725 7.72262L10.285 7.76762L10.305 7.67012L10.2375 7.60012L10.335 7.59012L10.38 7.50262L10.42 7.59262L10.515 7.61012L10.4425 7.67512M8.26 7.12512L8.16 7.07012L8.06 7.12012L8.08 7.00512L8.0025 6.92262L8.115 6.91012L8.1675 6.80762L8.2175 6.91262L8.3275 6.93262L8.2425 7.01262M5.6275 6.13762L5.5275 6.08262L5.4275 6.13262L5.4525 6.01762L5.37 5.93512L5.485 5.92262L5.535 5.82012L5.585 5.92512L5.695 5.94512L5.6125 6.02262M5.945 7.45262L5.845 7.39512L5.745 7.44512L5.7675 7.33262L5.6875 7.25012L5.8 7.23512L5.8525 7.13512L5.9025 7.24012L6.0125 7.26012L5.93 7.33762M9.23 5.65512L9.14 5.60512L9.05 5.65012L9.07 5.55012L9 5.47512L9.1 5.46262L9.1475 5.37262L9.19 5.46762L9.29 5.48512L9.215 5.55262M9.0475 6.51012L8.98 6.47012L8.9075 6.50512L8.9225 6.42512L8.8675 6.36762L8.9475 6.35762L8.985 6.28762L9.0175 6.36262L9.0925 6.37512L9.0375 6.43012M5.4825 7.69012L5.415 7.65262L5.3475 7.68512L5.3625 7.61012L5.31 7.55512L5.385 7.54512L5.42 7.47762L5.4525 7.54762L5.5275 7.56262L5.47 7.61262M10.475 7.99512L10.42 7.96762L10.365 7.99262L10.3775 7.93512L10.335 7.89512L10.395 7.88762L10.425 7.83762L10.45 7.88762L10.5125 7.90012L10.465 7.93762"
                                  fill="#FFFFEF"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.4825 7.69012L5.415 7.65262L5.3475 7.68512L5.3625 7.61012L5.31 7.55512L5.385 7.54512L5.42 7.47762L5.4525 7.54762L5.5275 7.56262L5.47 7.61262M6.5275 7.68762L6.4625 7.65262L6.395 7.68512L6.41 7.61012L6.3575 7.55512L6.4325 7.54512L6.4675 7.47762L6.5 7.54762L6.575 7.56012L6.5175 7.61262M6.3975 8.03762L6.3325 8.00012L6.265 8.03512L6.28 7.96012L6.2275 7.90262L6.3025 7.89262L6.3375 7.82512L6.37 7.89512L6.445 7.91012L6.3875 7.96012M8.5725 7.40512L8.5075 7.36512L8.4375 7.40012L8.4525 7.32512L8.4025 7.26762L8.4775 7.26012L8.5125 7.19262L8.5425 7.26262L8.6175 7.27512L8.5625 7.32762M7.935 7.40262L7.8675 7.36512L7.8 7.40012L7.815 7.32512L7.765 7.26762L7.84 7.26012L7.875 7.19012L7.905 7.26262L7.98 7.27512L7.925 7.32762M6.205 7.18262L6.1625 7.15762L6.12 7.17762L6.13 7.13012L6.0975 7.09512L6.145 7.09012L6.165 7.04762L6.185 7.09262L6.2325 7.10012L6.1975 7.13262M10.3925 8.26762L10.3275 8.23012L10.26 8.26512L10.275 8.19012L10.2225 8.13262L10.2975 8.12262L10.3325 8.05512L10.365 8.12512L10.44 8.14012L10.3825 8.19012M9.8625 8.34012L9.8075 8.30512L9.75 8.33512L9.7625 8.27012L9.72 8.22512L9.7825 8.21762L9.8125 8.16012L9.8375 8.22012L9.9 8.23012L9.8525 8.27512M10.1125 8.33262L10.0625 8.30262L10.01 8.32762L10.02 8.27012L9.98 8.22762L10.0375 8.22012L10.065 8.17012L10.09 8.22012L10.1475 8.23262L10.105 8.27262M10.8325 7.70262L10.7825 7.67762L10.7325 7.70262L10.745 7.64512L10.705 7.60262L10.7625 7.59512L10.7875 7.54512L10.8125 7.59762L10.865 7.60762L10.825 7.64762M9.855 8.69262L9.7925 8.65762L9.725 8.68762L9.74 8.61762L9.69 8.56762L9.765 8.56012L9.7975 8.49762L9.8275 8.56262L9.9025 8.57512L9.845 8.62262M9.86 8.97762L9.8 8.94262L9.74 8.97512L9.755 8.90512L9.7075 8.85512L9.775 8.84512L9.805 8.78262L9.8325 8.84762L9.9 8.86012L9.85 8.91012M9.375 8.33262L9.3275 8.30262L9.2775 8.32762L9.2875 8.27262L9.25 8.23012L9.305 8.22512L9.33 8.17512L9.355 8.22512L9.41 8.23512L9.37 8.27512M8.925 8.33262L8.875 8.30262L8.825 8.32762L8.8375 8.27262L8.7975 8.23012L8.855 8.22512L8.88 8.17512L8.905 8.22512L8.9575 8.23512L8.9175 8.27512M8.1575 7.66012L8.1075 7.63262L8.0575 7.65762L8.07 7.60012L8.03 7.56012L8.085 7.55262L8.11 7.50262L8.135 7.55262L8.19 7.56512L8.15 7.60262M8.2425 9.02762L8.2025 9.00512L8.1575 9.02762L8.1675 8.97762L8.135 8.94262L8.1825 8.93762L8.205 8.89512L8.225 8.94012L8.2725 8.94762L8.2375 8.98012M7.0825 6.81512L6.9825 6.75762L6.8825 6.80762L6.905 6.69512L6.825 6.61262L6.9375 6.59762L6.9925 6.49762L7.04 6.60262L7.15 6.62262L7.0675 6.70012"
                                  fill="#FFFFEF"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.11 7.64502C11.1719 7.48431 11.2204 7.31874 11.255 7.15002C9.56001 5.66252 7.67251 4.90002 5.28751 5.05752C5.20101 5.22489 5.12989 5.39978 5.07501 5.58002C7.90001 5.31002 9.97501 6.56002 11.11 7.64502Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M10.3501 6.80996L10.4076 6.84246C10.399 6.85944 10.3964 6.87881 10.4001 6.89746C10.4059 6.91555 10.4184 6.93075 10.4351 6.93996C10.4526 6.95246 10.4701 6.95996 10.4851 6.95746C10.5001 6.95746 10.5101 6.94996 10.5176 6.93996C10.5219 6.93333 10.5237 6.92532 10.5226 6.91746C10.5205 6.90823 10.5162 6.89964 10.5101 6.89246C10.5051 6.88496 10.4926 6.86746 10.4726 6.84746C10.452 6.82625 10.4366 6.80058 10.4276 6.77246C10.4213 6.75118 10.423 6.72836 10.4321 6.70817C10.4413 6.68798 10.4574 6.67176 10.4776 6.66246C10.4958 6.65487 10.5159 6.65313 10.5351 6.65746C10.5586 6.66288 10.5807 6.67309 10.6001 6.68746C10.6351 6.71246 10.6576 6.73746 10.6651 6.76746C10.6685 6.7815 10.669 6.7961 10.6664 6.81032C10.6638 6.82454 10.6583 6.83805 10.6501 6.84996L10.5901 6.81246C10.5976 6.79746 10.6001 6.78246 10.5951 6.76996C10.5926 6.75746 10.5826 6.74496 10.5651 6.73496C10.5522 6.72463 10.5365 6.71852 10.5201 6.71746C10.5155 6.71731 10.5111 6.71839 10.5071 6.7206C10.5031 6.7228 10.4998 6.72604 10.4976 6.72996C10.4926 6.73746 10.4926 6.74496 10.4951 6.75496C10.4976 6.76496 10.5101 6.78496 10.5351 6.80996C10.5601 6.83496 10.5751 6.85746 10.5851 6.87246C10.594 6.88885 10.598 6.90745 10.5967 6.92606C10.5954 6.94467 10.5887 6.96251 10.5776 6.97746C10.5659 6.99446 10.5493 7.00753 10.5301 7.01496C10.5113 7.0236 10.4904 7.02621 10.4701 7.02246C10.4476 7.01746 10.4251 7.00746 10.4001 6.98996C10.3626 6.96496 10.3401 6.93746 10.3326 6.90746C10.3244 6.87345 10.3298 6.83759 10.3476 6.80746L10.3501 6.80996ZM10.0601 6.61996L10.1226 6.65246C10.1148 6.66973 10.1131 6.68908 10.1176 6.70746C10.124 6.72462 10.1364 6.73885 10.1526 6.74746C10.1726 6.75996 10.1876 6.76496 10.2026 6.76246C10.2176 6.76246 10.2276 6.75496 10.2351 6.74246C10.2389 6.73652 10.2406 6.7295 10.2401 6.72246C10.2401 6.71496 10.2351 6.70496 10.2276 6.69746C10.2148 6.68201 10.2014 6.667 10.1876 6.65246C10.1601 6.62496 10.1426 6.60246 10.1376 6.58246C10.1335 6.5696 10.1323 6.55599 10.134 6.54261C10.1357 6.52922 10.1404 6.51637 10.1476 6.50496C10.1571 6.48954 10.171 6.47734 10.1876 6.46996C10.2048 6.46204 10.2239 6.45943 10.2426 6.46246C10.2657 6.46636 10.2878 6.47486 10.3076 6.48746C10.3451 6.51246 10.3676 6.53746 10.3751 6.56496C10.3796 6.57902 10.3811 6.59389 10.3794 6.60856C10.3776 6.62323 10.3728 6.63735 10.3651 6.64996L10.3026 6.61496C10.3101 6.59746 10.3126 6.58496 10.3076 6.57246C10.3026 6.55996 10.2926 6.54746 10.2751 6.53746C10.2612 6.52754 10.2446 6.52228 10.2276 6.52246C10.2235 6.52274 10.2195 6.52403 10.216 6.52621C10.2125 6.52839 10.2096 6.53139 10.2076 6.53496C10.2026 6.54246 10.2026 6.54996 10.2051 6.55996C10.2076 6.56996 10.2226 6.58996 10.2476 6.61496C10.2726 6.63996 10.2901 6.65996 10.2976 6.67496C10.3076 6.69064 10.3129 6.70886 10.3129 6.72746C10.3129 6.74607 10.3076 6.76429 10.2976 6.77996C10.2868 6.7974 10.2712 6.81131 10.2526 6.81996C10.2338 6.8286 10.2129 6.83122 10.1926 6.82746C10.1668 6.82311 10.1422 6.81377 10.1201 6.79996C10.0878 6.78274 10.0629 6.75428 10.0501 6.71996C10.0404 6.68659 10.044 6.65077 10.0601 6.61996ZM9.70508 6.52496L9.88758 6.22496L10.1076 6.36246L10.0776 6.41246L9.91758 6.31246L9.87758 6.37996L10.0276 6.47246L9.99508 6.52246L9.84508 6.42996L9.79508 6.51246L9.96258 6.61246L9.93258 6.66246L9.70508 6.52496ZM9.18758 6.09996L9.21508 6.04996L9.35008 6.11746L9.28758 6.24246C9.26758 6.24746 9.24258 6.24996 9.21258 6.24746C9.18377 6.24429 9.1558 6.23581 9.13008 6.22246C9.09983 6.20772 9.07397 6.18531 9.05508 6.15746C9.03789 6.13159 9.02915 6.10102 9.03008 6.06996C9.03135 6.03764 9.03989 6.00602 9.05508 5.97746C9.0701 5.9474 9.09245 5.92161 9.12008 5.90246C9.1465 5.88419 9.17795 5.87458 9.21008 5.87496C9.23508 5.87496 9.26008 5.88246 9.29008 5.89996C9.33008 5.91746 9.35508 5.94246 9.36758 5.96996C9.38058 5.99726 9.38324 6.02835 9.37508 6.05746L9.30758 6.03746C9.31171 6.02072 9.30994 6.00306 9.30258 5.98746C9.29508 5.97246 9.28258 5.96246 9.26258 5.95246C9.25092 5.94581 9.23799 5.9417 9.22463 5.94041C9.21127 5.93912 9.19779 5.94067 9.18508 5.94496C9.16008 5.95246 9.13758 5.97496 9.12008 6.00996C9.10258 6.04496 9.09508 6.07746 9.10258 6.10496C9.10603 6.11801 9.1123 6.13013 9.12093 6.1405C9.12957 6.15086 9.14037 6.15921 9.15258 6.16496C9.16508 6.17246 9.18008 6.17746 9.19508 6.17746C9.20999 6.17973 9.22516 6.17973 9.24008 6.17746L9.26008 6.13746L9.18758 6.09996ZM6.93258 5.54246L6.98258 5.19246L7.08758 5.20996L7.11508 5.45496L7.21258 5.22996L7.31758 5.24496L7.26758 5.58996L7.20008 5.57996L7.24258 5.30746L7.13258 5.56996L7.06508 5.55996L7.03758 5.27746L6.99758 5.55246L6.93258 5.54246ZM6.58008 5.49996L6.61258 5.14996L6.87008 5.17496L6.86508 5.23496L6.67758 5.21746L6.67008 5.29246L6.84508 5.30996L6.83758 5.36996L6.66258 5.35246L6.65508 5.44746L6.85008 5.46496L6.84508 5.52496L6.58008 5.49996Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M5.41228 5.28309C5.41228 5.24559 5.41978 5.21809 5.42978 5.19309C5.43854 5.17531 5.45039 5.15923 5.46478 5.14559C5.4776 5.13266 5.49291 5.12245 5.50978 5.11559C5.53478 5.10809 5.55978 5.10309 5.58478 5.10309C5.63728 5.10309 5.67728 5.12309 5.70978 5.15309C5.72525 5.1722 5.73675 5.1942 5.74362 5.21781C5.75049 5.24142 5.75258 5.26616 5.74978 5.29059C5.74978 5.34559 5.73228 5.39059 5.69978 5.42309C5.68308 5.43852 5.66332 5.45028 5.64179 5.45761C5.62026 5.46493 5.59743 5.46765 5.57478 5.46559C5.55243 5.46581 5.53027 5.4615 5.50965 5.4529C5.48902 5.44431 5.47035 5.43161 5.45478 5.41559C5.42367 5.37877 5.40839 5.33113 5.41228 5.28309Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M5.48474 5.28295C5.48474 5.32045 5.49224 5.35045 5.50974 5.37295C5.52724 5.39295 5.54974 5.40545 5.57974 5.40545C5.59272 5.40636 5.60574 5.40436 5.61785 5.3996C5.62996 5.39485 5.64085 5.38745 5.64974 5.37795C5.66724 5.35795 5.67474 5.32795 5.67724 5.28545C5.67724 5.24545 5.67224 5.21545 5.65224 5.19545C5.6441 5.18537 5.63382 5.17723 5.62215 5.17161C5.61047 5.16599 5.5977 5.16303 5.58474 5.16295C5.57159 5.16253 5.55851 5.165 5.54641 5.17018C5.53432 5.17536 5.52351 5.18314 5.51474 5.19295C5.49474 5.21295 5.48724 5.24295 5.48474 5.28295Z"
                                  fill="#F7FFFF"
                                ></path>
                                <path
                                  d="M5.82477 5.46176L5.82977 5.11176H5.97977C6.01727 5.11176 6.04227 5.11676 6.05977 5.12426C6.07727 5.12926 6.08977 5.14176 6.09977 5.15676C6.10977 5.17176 6.11477 5.19176 6.11477 5.21426C6.11496 5.23831 6.10603 5.26153 6.08977 5.27926C6.07129 5.29657 6.0475 5.30714 6.02227 5.30926L6.05977 5.33926C6.06977 5.34926 6.08227 5.36926 6.09727 5.39676L6.13977 5.46676H6.05477L6.00477 5.38676L5.96977 5.33676C5.96371 5.32988 5.95595 5.3247 5.94727 5.32176C5.9359 5.31844 5.92411 5.31676 5.91227 5.31676H5.89727V5.46176H5.82477Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M5.89978 5.26188H5.94978C5.98478 5.26188 6.00728 5.26188 6.01478 5.25688C6.02228 5.25688 6.02978 5.24938 6.03478 5.24438C6.03978 5.23938 6.04228 5.22688 6.04228 5.21938C6.04228 5.20438 6.03978 5.19438 6.03228 5.18938C6.02728 5.18188 6.01728 5.17688 6.00728 5.17438H5.95728L5.89978 5.17188V5.26188Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M6.22532 5.12933L6.35532 5.13683C6.38282 5.13683 6.40532 5.13933 6.42032 5.14433C6.43978 5.15139 6.45703 5.16347 6.47032 5.17933C6.48473 5.19681 6.49498 5.21733 6.50033 5.23933C6.50783 5.26183 6.51032 5.28933 6.50782 5.32183C6.5078 5.34735 6.50358 5.37269 6.49532 5.39683C6.48532 5.42183 6.47033 5.44183 6.45283 5.45683C6.43826 5.46883 6.42117 5.47738 6.40283 5.48183C6.38783 5.48683 6.36533 5.48683 6.34032 5.48683L6.20782 5.47933L6.22532 5.12933Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M6.29277 5.19183L6.28027 5.42433H6.37527C6.38777 5.42433 6.39777 5.41933 6.40527 5.41183C6.41277 5.40433 6.42027 5.39433 6.42527 5.37933C6.43027 5.36433 6.43527 5.34183 6.43527 5.31433L6.43277 5.25183C6.4292 5.23865 6.42232 5.2266 6.41277 5.21683C6.40447 5.20848 6.39413 5.20245 6.38277 5.19933C6.36387 5.19513 6.34463 5.19262 6.32527 5.19183H6.29277Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M7.93964 5.75559L8.02214 5.41559L8.13214 5.44059L8.21214 5.46559C8.22964 5.47559 8.24464 5.49059 8.25214 5.51309C8.26214 5.53309 8.26214 5.55559 8.25714 5.58309C8.25214 5.60309 8.24464 5.62059 8.23214 5.63309C8.22297 5.64407 8.2115 5.65289 8.19853 5.65894C8.18557 5.66499 8.17144 5.66811 8.15714 5.66809C8.13964 5.66809 8.11464 5.66309 8.08214 5.65559L8.03964 5.64309L8.00964 5.77309L7.93964 5.75559Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M8.07469 5.4906L8.05469 5.5856L8.09219 5.5956C8.11719 5.6006 8.13719 5.6056 8.14719 5.6031C8.15691 5.60175 8.16598 5.59742 8.17314 5.5907C8.18031 5.58399 8.18521 5.57522 8.18719 5.5656C8.18719 5.5531 8.18719 5.5431 8.18219 5.5331C8.1767 5.52294 8.16787 5.51499 8.15719 5.5106L8.10969 5.4981L8.07719 5.4906H8.07469Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M8.26544 5.85191L8.38294 5.52191L8.52044 5.57191C8.55794 5.58441 8.58044 5.59691 8.59544 5.60691C8.60794 5.61941 8.61794 5.63191 8.62044 5.65191C8.62294 5.67191 8.62544 5.68941 8.62044 5.70941C8.61044 5.73441 8.59544 5.75191 8.57544 5.76441C8.55544 5.77441 8.53044 5.77691 8.50044 5.77191C8.51044 5.78441 8.52044 5.79691 8.52544 5.81191L8.54544 5.87941L8.56044 5.95691L8.48294 5.92941L8.45794 5.83941C8.4534 5.81906 8.44755 5.79902 8.44044 5.77941C8.43713 5.77163 8.43198 5.76477 8.42544 5.75941C8.42044 5.75191 8.41044 5.74691 8.39294 5.74191L8.38044 5.73691L8.33044 5.87691L8.26544 5.85191Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M8.40033 5.68449L8.44783 5.70199C8.48033 5.71449 8.50033 5.71949 8.51033 5.71949C8.51783 5.71949 8.52533 5.71949 8.53283 5.71199C8.54033 5.70699 8.54533 5.69949 8.54783 5.68949C8.55283 5.67949 8.55283 5.66949 8.54783 5.65949C8.54413 5.6498 8.53702 5.6418 8.52783 5.63699L8.47783 5.61949L8.42783 5.60199L8.39783 5.68449H8.40033Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M8.67546 5.84008C8.68406 5.81081 8.69852 5.78359 8.71796 5.76008C8.73061 5.74499 8.74585 5.73229 8.76296 5.72258C8.77846 5.71382 8.79539 5.7079 8.81296 5.70508C8.83796 5.70508 8.86296 5.70508 8.89046 5.71508C8.91281 5.72061 8.93373 5.73082 8.95183 5.74504C8.96993 5.75927 8.9848 5.77717 8.99546 5.79758C9.01546 5.83758 9.01546 5.88508 9.00046 5.94008C8.98809 5.98733 8.95754 6.02777 8.91546 6.05258C8.87796 6.07508 8.83296 6.07758 8.78546 6.06258C8.76318 6.0569 8.74233 6.04663 8.72425 6.03242C8.70616 6.01822 8.69125 6.00039 8.68046 5.98008C8.67045 5.95822 8.66485 5.9346 8.664 5.91058C8.66314 5.88655 8.66703 5.86259 8.67546 5.84008Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M8.7454 5.86C8.7354 5.8975 8.7329 5.93 8.7454 5.955C8.7579 5.98 8.7754 5.995 8.8029 6.005C8.8279 6.0125 8.8529 6.01 8.8779 5.995C8.9029 5.9825 8.9179 5.955 8.9304 5.915C8.9429 5.8775 8.9429 5.8475 8.9304 5.8225C8.92547 5.81064 8.91798 5.80002 8.90848 5.79137C8.89897 5.78273 8.88768 5.77629 8.8754 5.7725C8.8631 5.76826 8.85003 5.76673 8.83708 5.76802C8.82413 5.76932 8.81162 5.77341 8.8004 5.78C8.7754 5.795 8.7579 5.82 8.7454 5.86Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M9.35742 6.32758L9.51742 6.01758L9.64992 6.08508C9.6749 6.09706 9.69771 6.11311 9.71742 6.13258C9.72992 6.14508 9.73742 6.16008 9.73742 6.18008C9.73742 6.20008 9.73742 6.21758 9.72742 6.23508C9.71781 6.25756 9.6999 6.27547 9.67742 6.28508C9.65242 6.29008 9.62742 6.29008 9.59992 6.28008C9.60992 6.29508 9.61492 6.31008 9.61992 6.32258C9.62492 6.33758 9.62742 6.36008 9.62992 6.39258L9.63492 6.47258L9.55992 6.43508L9.54992 6.34258C9.54874 6.32161 9.54623 6.30073 9.54242 6.28008C9.54072 6.27073 9.53638 6.26205 9.52992 6.25508L9.49992 6.23758L9.48742 6.23008L9.41992 6.36008L9.35742 6.32758Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M9.51251 6.18004L9.56001 6.20504C9.59001 6.22004 9.61001 6.23004 9.61751 6.23004C9.62501 6.23004 9.63501 6.23004 9.64251 6.22504C9.65001 6.22254 9.65501 6.21504 9.66001 6.20504C9.66501 6.19504 9.66751 6.18504 9.66501 6.17504C9.66193 6.16508 9.65581 6.15634 9.64751 6.15004C9.63288 6.14106 9.61786 6.13272 9.60251 6.12504L9.55251 6.10004L9.51251 6.18004Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M10.6528 6.96803C10.669 6.94232 10.6902 6.9202 10.7153 6.90302C10.7321 6.89226 10.7507 6.88463 10.7703 6.88052C10.7884 6.87682 10.8071 6.87682 10.8253 6.88052C10.8503 6.88552 10.8728 6.89552 10.8953 6.91052C10.9147 6.92264 10.9315 6.93869 10.9444 6.95762C10.9573 6.97656 10.9661 6.99799 10.9703 7.02052C10.9778 7.06302 10.9653 7.11052 10.9353 7.15802C10.9102 7.19934 10.8697 7.22901 10.8228 7.24053C10.8004 7.24536 10.7773 7.24541 10.7548 7.24067C10.7324 7.23593 10.7113 7.22651 10.6928 7.21303C10.6733 7.20091 10.6566 7.18486 10.6437 7.16592C10.6308 7.14699 10.622 7.12556 10.6178 7.10303C10.6103 7.05803 10.6228 7.01303 10.6528 6.96803Z"
                                  fill="#309E3A"
                                ></path>
                                <path
                                  d="M10.7154 7.00814C10.6904 7.04064 10.6829 7.07064 10.6879 7.09814C10.6897 7.1108 10.6942 7.12293 10.7011 7.1337C10.708 7.14448 10.7171 7.15366 10.7279 7.16064C10.7529 7.17814 10.7779 7.18314 10.8029 7.17564C10.8279 7.16814 10.8529 7.15064 10.8754 7.11564C10.8979 7.08064 10.9079 7.05064 10.9029 7.02564C10.9004 7.00064 10.8854 6.97814 10.8629 6.96064C10.8404 6.94314 10.8129 6.94064 10.7879 6.94814C10.7629 6.95314 10.7379 6.97314 10.7129 7.00814H10.7154Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M7.54492 5.61261L7.60242 5.36761L7.78242 5.41011L7.77492 5.45011L7.64242 5.42011L7.62992 5.47511L7.75242 5.50262L7.74242 5.54511L7.61992 5.51512L7.60492 5.58261L7.74242 5.61512L7.73242 5.65511L7.54492 5.61261Z"
                                  fill="#309E3A"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_14914_92427">
                                  <rect
                                    y="0.5"
                                    width="16"
                                    height="12"
                                    rx="1.33333"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/*Form*/}
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex w-full">
                        <div className="self-stretch h-[154px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            className="text-grey-700 dark:text-grey-200 text-sm font-medium font-poppins leading-tight"
                            htmlFor="motivationInput"
                          >
                            Please say a few words about your motivation for volunteering
                          </label>
                          <textarea
                            id="motivationInput"
                            placeholder="Type here..."
                            className="self-stretch px-3.5 py-3 bg-white rounded-xl shadow border border-[#d0d5dd] text-grey-700 text-base font-normal font-['Poppins'] leading-relaxed resize-none focus:border-primary-200 focus:ring-2 focus:ring-prim-300 focus:outline-none"
                            rows={4} // Adjusts the height of the textarea
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1.5">
                        <ProzCheckbox
                          label={
                            "Statement of agreement: acknowledge that all work done for ProZ Pro Bono is on a voluntary basis, and involves no remuneration."
                          }
                          name={"probono_statement_of_agreement"}
                        />
                        {/*<p className="font-poppins text-base"><span*/}
                        {/*    className="font-poppins font-medium text-base">Statement of agreement:</span> I*/}
                        {/*    acknowledge that all work done for ProZ Pro Bono is on a voluntary*/}
                        {/*    basis, and involves no remuneration.</p>*/}
                      </div>

                      <Tooltip message="Work in progress!" position="top">
                        <Link
                          href="javascript:void(0)"
                          className="inline-flex items-center justify-center gap-3 px-5 py-2.5 bg-primary
                                                rounded-xl shadow border border-primary hover:bg-primary-600 transition-colors
                                                duration-300"
                        >
                          <div className="text-white text-lg font-semibold font-poppins leading-7">
                            Get involved
                          </div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <path
                              d="M8.74958 11.25L17.4996 2.50002M8.8559 11.5234L11.046 17.1551C11.2389 17.6512 11.3354 17.8993 11.4744 17.9717C11.5949 18.0345 11.7384 18.0345 11.859 17.9719C11.9981 17.8997 12.0949 17.6517 12.2884 17.1558L17.7803 3.08269C17.955 2.63504 18.0424 2.41121 17.9946 2.26819C17.9531 2.14398 17.8556 2.04651 17.7314 2.00501C17.5884 1.95723 17.3646 2.04458 16.9169 2.21927L2.84379 7.71122C2.3479 7.90474 2.09995 8.0015 2.02769 8.14059C1.96505 8.26116 1.96514 8.4047 2.02792 8.5252C2.10034 8.66421 2.3484 8.76067 2.84452 8.95361L8.47619 11.1437C8.5769 11.1829 8.62725 11.2024 8.66965 11.2327C8.70724 11.2595 8.7401 11.2924 8.76691 11.3299C8.79715 11.3723 8.81673 11.4227 8.8559 11.5234Z"
                              stroke="white"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Link>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "key_resources" && (
          <div className="flex flex-col gap-y-14">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col max-w-[1062px] mx-auto gap-6 px-3 w-full">
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                    Key resources
                  </h2>
                  <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                    Over the first two years of the program, we developed some key resources to help
                    volunteers understand the mission of ProZ Pro Bono and the standards we set.
                    Take a look at them here.
                  </p>
                </div>
              </div>
              <div className="bg-primary-50 dark:bg-grey-700 py-14">
                <div className="flex flex-col max-w-[1062px] mx-auto w-full">
                  {/*Resources*/}
                  <div className="grid grid-cols-4 justify-start items-start lg:gap-6 gap-8 px-4">
                    {/*Code of ethics*/}
                    <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch flex-col justify-center items-center gap-2 inline-flex">
                      <div className="border-4 border-primary-500 block w-full">
                        <Image
                          src="/next/next_assets/images/probono/code-ethics.webp"
                          alt="Probono volunteers map"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full object-left-top"
                        />
                      </div>
                      {/*Flags*/}
                      <div className="flex items-center justify-center gap-1">
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFUqXbzY/3yQPTQSt57fojVr4Zqyj3g/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/spain-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFU9EU5U/8pt2Wpr_UEjDQcweTYxrBQ/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/france-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFTg6p8M/Zlr_zcVPyMNahUNHdg-ddw/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/italy-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFUQCw6c/d6DRlqMuigOWoAN998jgCA/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/brazil-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*Translation checklist*/}
                    <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-start flex-col justify-center items-center gap-2 inline-flex">
                      <div className="border-4 border-primary-500 block w-full">
                        <Image
                          src="/next/next_assets/images/probono/translation-checklist.png"
                          alt="Probono volunteers map"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full object-left-top"
                        />
                      </div>
                      {/*Flags*/}
                      <div className="flex items-center justify-center gap-1">
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFTqeFJ4/iBXAAkSa6LS0TUH-9uYg-g/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/spain-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFVHGHn8/wnXh4Ed1NmzcgRyxRf5Jgg/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/france-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFRhSl98/84UDXaNQSkqbWTn6NUTmDQ/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/italy-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFcTwJzw/TTZnLVAXk1xMVWdGRD8Rsg/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/brazil-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*Volunteer guide*/}
                    <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch flex-col justify-center items-center gap-2 inline-flex">
                      <div className="border-4 border-primary-500 block w-full">
                        <Image
                          src="/next/next_assets/images/probono/volunteer-guide.png"
                          alt="Probono volunteers map"
                          width={500}
                          height={500}
                          className="object-cover w-full h-full object-left-top"
                        />
                      </div>
                      {/*Flags*/}
                      <div className="flex items-center justify-center gap-1">
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFaAQ0JI/14TBH1PRZsJ79Kz3HzrokA/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/spain-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFRytCBs/lgmMgdfAKdD2QpzCJcM_sQ/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/france-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFb7DUNs/inwrFvQ6yY0yykD89eCCcQ/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/italy-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="block w-full">
                          <Link
                            href="https://www.canva.com/design/DAGHFej2LeU/jEbmwYVlyi7jv2QbwH3eOQ/view"
                            target="_blank"
                          >
                            <div className="transform transition-transform duration-300 hover:scale-110">
                              <Image
                                src="/next/next_assets/images/probono/brazil-flag.webp"
                                alt="Probono volunteers map"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full object-left-top"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*Review guide*/}
                    {/* <div
                                            className="md:col-span-2 col-span-4 grow shrink basis-0 flex-col self-start gap-2 inline-flex">
                                            <div className="border-4 border-primary-500 block w-full">
                                                <Link href="https://www.canva.com/design/DAGJIdG2rBI/2FgK3_4D8iLW71ZK_aDHLw/view?utm_content=DAGJIdG2rBI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                                                    <div className="transform transition-all duration-300 hover:scale-105">
                                                        <Image
                                                            src="/next/next_assets/images/probono/translation-review-guide.png"
                                                            alt="Probono volunteers map"
                                                            width={500}
                                                            height={500}
                                                            className="object-cover w-full h-full object-left-top"
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/*Evergreen content*/}
            <div className="max-w-[1062px] mx-auto flex flex-col items-center px-6 relative z-10 mb-8">
              <h2 className="text-center sm:text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
                <span className="text-center sm:text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                  Evergreen
                </span>
              </h2>
              <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200">
                Some of the materials generated by our clients are of universal relevance. We call
                these texts "evergreen" because they’re always available for translation by anyone
                at any time, and never go out of date. As translators you can use these texts to
                hone your skills. Even if your language has already been translated, you can still
                have a crack at it for your own benefit. Think of it as practice with a purpose!
                <br />
                <Link
                  href="https://www.prozprobono.world/evergreen-pieces"
                  target="_blank"
                  className="text-base text-primary-500 font-bold mt-4 inline-block"
                >
                  Click here
                </Link>{" "}
                for a full list
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;
