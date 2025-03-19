import React from "react";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { Metadata } from "next";
import ProZStatsMembership from "@/app/membership/about/_statsProz";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About ProZ Membership",
  description:
    "ProZ.com members have certain networking privileges and enjoy full access to all data, all features and all clients at the site. ",
};

const whyProZ = [
  "ProZ.com membership works. It has helped thousands of translators start or grow their business. Members who have made the most of their membership report returns in the range of thousands of dollars. Check what they say about it.",

  "ProZ.com membership is most effective when the ProZ.com winning strategies (membership, specializing, a complete profile, helping others in KudoZ, applying to the Certified PRO Network) are applied all together. The heightened visibility of membership is less likely to attract new clients, for example, if the member's profile does not showcase the best they have to offer.",

  "For the serious full-time language professional looking to start or grow their business, or simply interested in keeping their name out there or network, ProZ.com membership is what we might call a no-brainer, and easy choice to make. The way we as ProZ.com staff communicate about or present membership should reflect this.",

  "For the serious full-time language professional looking to start or grow their business, or simply interested in keeping their name out there or network, ProZ.com membership is what we might call a no-brainer, and easy choice to make. The way we as ProZ.com staff communicate about or present membership should reflect this.",

  "ProZ.com membership makes ProZ.com the site and ProZ.com the community possible, for everyone who uses it, member and non-member. It is also the reason the ProZ.com site team exists.",

  "ProZ.com offers many free services, but we draw the line at commercial work. Basically, exposure before paying clients is a service for which we charge. In exchange for membership investments, the ProZ.com team works very hard for members, and the statistics say that membership pays off for professional translators in any country and at any stage of their careers.",
];

const AboutMembership = () => {
  return (
    <div>
      <section>
        {/* <!--Hero--> */}
        <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
          <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
          <div className="max-w-screen-xl mx-auto items-center px-6 relative z-10">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-primary text-5xl font-bold font-merriweather leading-[60px]">
                About ProZ Membership
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* What is membership? */}
      <div className="max-w-6xl mx-auto flex flex-col gap-2 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:mb-0 flex flex-col">
            <h2 className="text-grey-700 text-3xl font-bold font-merriweather leading-[38px] mb-3">
              What is membership?
            </h2>
            <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
              <span className="text-primary">Membership</span> is the term given to full, paid
              membership in the ProZ.com community. ProZ.com members have certain networking
              privileges and enjoy full access to all data, all features and all clients at the
              site.
              <br /> <br />
              Through their annual subscription, members provide the funding that makes the ProZ.com
              workplace possible.
              <br /> <br />
            </p>
          </div>
          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden border border-primary-100 shadow-lg">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/435688693"
                title="Mentoring program overview video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Membership types and packages */}
      <div className="flex flex-col max-w-5xl mx-auto p-6 pb-12 gap-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl text-grey-700 font-bold font-merriweather leading-[38px]">
            Membership types and packages
          </h2>
          <p className="font-poppins text-base text-center text-grey-700">
            There are two membership types:
          </p>
        </div>

        {/* Boxes */}
        <div className="flex flex-col w-full md:flex-row gap-5">
          {/* Box 1 */}
          <div className="relative bg-primary-600 dark:bg-primary-900 text-white rounded-3xl mx-auto overflow-hidden h-[600px] md:h-[657px] w-full md:w-1/2">
            {/* Content */}
            <div className="flex flex-col gap-6 relative z-10 p-8">
              <div className="w-24 h-24">
                <Image
                  src="/next/next_assets/images/membership/temp-membership-icon.svg"
                  alt="Membership badge"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold font-merriweather leading-[38px]">
                  Professional membership
                </h2>
                <p className="text-sm">
                  Designed specifically for freelancers (translators, interpreters, and anyone in
                  the language industry acting as a single entity).
                </p>
              </div>
              <div className="flex flex-col gap-2 w-[70%]">
                <h3 className="font-semibold">Service packages:</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>Standard: includes standard membership benefits.</li>
                  <li>
                    Plus: offers standard membership benefits and other benefits that are exclusive
                    to the Plus package.
                  </li>
                </ul>
                <div className="inline-flex pt-5">
                  <Link href="/membership/professional">
                    <Button variant="secondary" size="lg">
                      <span>See full pricing</span>
                      <ArrowUpRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-full h-auto mix-blend-luminosity">
              <Image
                src="/next/next_assets/images/membership/professional-box.png"
                alt="Membership visual"
                layout="intrinsic"
                width={600}
                height={300}
                objectFit="cover"
                className="w-full object-bottom"
              />
            </div>
          </div>

          {/*   Box 2 */}
          <div className="relative bg-[#5E2955] dark:bg-[#350E2F] text-white rounded-3xl mx-auto overflow-hidden h-[600px] md:h-[657px] w-full md:w-1/2">
            {/* Content */}
            <div className="flex flex-col gap-6 relative z-10 p-8">
              <div className="w-24 h-24">
                <Image
                  src="/next/next_assets/images/membership/temp-business-icon.svg"
                  alt="Membership badge"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold font-merriweather leading-[38px]">
                  Business membership
                </h2>
                <p className="text-sm">
                  Designed specifically for business users of ProZ.com, such as translation
                  companies / agencies and other corporate language services providers.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-[70%]">
                <h3 className="font-semibold">Service packages:</h3>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>Standard</li>
                  <li>Plus</li>
                  <li>Enterprise</li>
                </ul>
                <div className="inline-flex pt-5">
                  <Link href="/membership/business">
                    <Button variant="secondary" size="lg">
                      <span>See full pricing</span>
                      <ArrowUpRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-full h-auto mix-blend-luminosity">
              <Image
                src="/next/next_assets/images/membership/business-box.png"
                alt="Membership visual"
                layout="intrinsic"
                width={600}
                height={300}
                objectFit="cover"
                className="w-full object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full py-20 bg-primary-50 dark:bg-grey-800 justify-start items-center gap-16 m-auto">
        <div className="flex flex-col max-w-6xl px-4 gap-8 mx-auto">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Member testimonials
          </h2>
          <div className="flex flex-col lg:flex-row grow shrink basis-0 self-stretch justify-center items-start gap-5 w-full mx-auto">
            {TESTIMONIALS.filter((testimonial) => testimonial.type === "general")
              .slice(0, 3)
              .map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
          </div>
        </div>
      </div>

      {/* Why ProZ membership */}
      <div className="max-w-7xl w-full mx-auto gap-6 py-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl text-grey-700 font-bold font-merriweather leading-[38px]">
            Why you need ProZ membership
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 auto-rows-min">
          {whyProZ.map((item, index) => (
            <div key={index} className="bg-grey-100 dark:bg-grey-800 p-6 rounded-xl h-auto">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Stats*/}
      <ProZStatsMembership />

      {/* CTA bottom */}
      <div className="bg-secondary">
        <div className="flex flex-col py-12 gap-4 items-center">
          <h2 className="text-3xl text-grey-700 font-bold font-merriweather leading-[38px]">
            Questions? Don’t hesitate to reach out to us.
          </h2>
          <div className="flex flex-row gap-3 items-center">
            <Link href="/site-team">
              <Button variant="default" size="lg">
                Contact support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMembership;
