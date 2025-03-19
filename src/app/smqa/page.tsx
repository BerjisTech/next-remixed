import React from "react";
import Link from "next/link";
import Image from "next/image";
import _faqSection from "@/app/360/_faqSection";
import { Metadata } from "next";
import { Button } from "@/components/shadcn/button";

export const metadata: Metadata = {
  title: "Subject Matter Q&A",
  description: "Subject Matter Q&A - ProZ.com",
};

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative bg-360-deep-blue py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/360/360-bg-hero.png')] bg-cover bg-no-repeat opacity-30"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-white dark:text-primary-300">
                Subject Matter Q&A
              </span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-poppins text-xl text-center sm:text-left text-white dark:text-grey-200">
                Your Hub for Expert Insights on Translation & Localization. At ProZ.com, we believe
                every question sparks innovation. Our Q&A platform connects language professionals
                with expert advice, industry trends, and best practices tailored to your needs.
                Whether you’re looking for tips on translation techniques or the latest in
                localization technology, you’re in the right place.
              </p>
              <div className="flex flex-col gap-3">
                <p
                  className="font-poppins text-base
               italic text-center sm:text-left text-white dark:text-grey-200"
                >
                  Take your professional presence to the next level.
                </p>
                <div className="flex flex-row gap-3">
                  <Link href="#">
                    <Button variant="default" size="lg">
                      Book a free consultation
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button
                      size="lg"
                      className="bg-transparent border-2 border-primary-500 text-primary-50"
                    >
                      Get started today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden">
            <Image
              src="/next/next_assets/images/360/collaboration.png"
              alt="A man and woman creating website, branding, and marketing solutions"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Join our community */}
      <div className="relative bg-indigo-700 py-12 overflow-hidden dark:bg-gray-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/mission-bg.png')] bg-cover bg-no-repeat opacity-20"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* Left Column: Image */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden mb-8 lg:mb-0">
            <Image
              src="/next/next_assets/images/wit/join.png"
              alt="Illustration representing our mission"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-bold text-white leading-tight mb-3 text-center lg:text-left">
              Our Mission
            </h2>
            <p className="font-poppins text-xl text-white dark:text-gray-200 text-center sm:text-left mb-4">
              At ProZ.com, we empower language professionals around the globe to share expertise,
              innovate, and bridge cultural gaps. Our mission is to create a collaborative community
              where every voice in translation and localization matters.
            </p>
            <p className="font-poppins text-lg text-white dark:text-gray-200 text-center sm:text-left mb-6">
              By fostering connection and creativity, we ensure quality language services are
              accessible to businesses and communities everywhere. Join us as we redefine the future
              of global communication.
            </p>
            <div className="flex flex-row gap-3">
              <Link href="/about">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </Link>
              <Link href="/join">
                <Button size="lg" className="bg-transparent border-2 border-white text-white">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-360-deep-blue flex flex-col mx-auto items-center gap-2 py-16">
        <div className="flex flex-col max-auto">
          <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Ready to stand out online?
          </h2>
          <p className="font-poppins text-base text-center text-white dark:text-grey-200 mb-3">
            Connect with ProZ.com to get expert insights, refine your skills, and connect with
            industry professionals.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="#">
            <Button variant="default" size="lg">
              Book a free consultation
            </Button>
          </Link>
          <Link href="#">
            <Button
              size="lg"
              className="bg-transparent border-2 border-primary-500 text-primary-50"
            >
              Get started today
            </Button>
          </Link>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section>
        <div className="flex flex-col gap-3 py-16">
          <div className="flex flex-col max-auto">
            <h2 className="text-center text-360-deep-blue text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
              Frequently asked questions
            </h2>
          </div>
          <div className="flex flex-col max-w-6xl mx-auto gap-3">
            <_faqSection></_faqSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="shadow mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-primary">
          &copy; {new Date().getFullYear()} ProZ.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Page;
