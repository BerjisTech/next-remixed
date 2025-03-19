import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
import _faqSection from "@/app/360/_faqSection";

export const metadata = {
  title: "Live Support",
  description: "Get 24/7 support from our dedicated team.",
};

const LiveSupport = () => {
  return (
    <>
      <section className="dark:bg-dark-blue-hue dark:text-primary dark:bg-green-gradient-dark relative bg-gradient-to-br from-primary to-grey-50 py-12 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          {/* Headline + Subheadline + CTAs */}
          <div className="mt-8 max-w-xl sm:mt-0 sm:text-left">
            <h1 className="dark:text-dark-blue-hue text-3xl font-bold text-grey-900 sm:text-5xl">
              Open the door to new opportunities <br className="hidden sm:block" />
              with <span className="text-primary">ProZ.com</span>
            </h1>
            <p className="dark:text-dark-blue-hue mt-4 text-base text-grey-700 sm:mt-6 sm:text-lg">
              Join the world’s largest community of translators and interpreters. Find jobs, connect
              with clients, and expand your professional network.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#">
                <Button variant="default" size="lg">
                  Get Live Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Support members */}
          <div className="relative flex flex-col items-center space-y-8 sm:items-end">
            {/* Find jobs */}
            <div className="relative flex items-center">
              <div className="h-24 w-24 overflow-hidden rounded-full shadow-md">
                <Image
                  src="/next/next_assets/images/staff/andrea.jpg"
                  alt="Translator 1"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow">
                Find Jobs
              </div>
            </div>

            {/* Collaborate */}
            <div className="relative flex items-center">
              <div className="h-24 w-24 overflow-hidden rounded-full shadow-md">
                <Image
                  src="/next/next_assets/images/staff/joseph-oyange.png"
                  alt="Translator 2"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="dark:bg-primary dark:text-white ml-4 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-grey-800 shadow">
                Collaborate
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="relative flex items-center">
              <div className="h-24 w-24 overflow-hidden rounded-full shadow-md">
                <Image
                  src="/next/next_assets/images/staff/naiara-solano.png"
                  alt="Translator 3"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white shadow">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-dark bg-grey-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="dark:text-primary text-3xl font-bold text-grey-900 sm:text-4xl">
            How ProZ.com Live Support Works
          </h2>
          <p className="dark:text-grey-400 mx-auto mt-4 max-w-3xl text-base text-grey-900 sm:mt-6 sm:text-lg">
            At ProZ.com, we’re committed to helping our community get the support they need, right
            when they need it. Our live support system connects you with real people who can address
            your concerns, guide you through site features, and help you make the most of your
            ProZ.com experience.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="dark:bg-dark relative flex flex-col items-center rounded-lg bg-white p-6 shadow dark:border dark:border-primary">
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-md">
                1
              </div>
              <h3 className="dark:text-primary mt-6 text-lg font-semibold text-grey-900">
                Submit a Request
              </h3>
              <p className="dark:text-grey-400 mt-2 text-sm text-grey-600">
                Start by clicking the live support button or opening a support ticket. Share your
                question or issue in a brief description.
              </p>
            </div>

            {/* Step 2 */}
            <div className="dark:bg-dark relative flex flex-col items-center rounded-lg bg-white p-6 shadow dark:border dark:border-primary">
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-md">
                2
              </div>
              <h3 className="dark:text-primary mt-6 text-lg font-semibold text-grey-900">
                Connect with a Specialist
              </h3>
              <p className="dark:text-grey-400 mt-2 text-sm text-grey-600">
                A ProZ.com support member will review your request and connect with you live to
                address your concerns and questions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="dark:bg-dark relative flex flex-col items-center rounded-lg bg-white p-6 shadow dark:border dark:border-primary">
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-md">
                3
              </div>
              <h3 className="dark:text-primary mt-6 text-lg font-semibold text-grey-900">
                Chat in Real-Time
              </h3>
              <p className="dark:text-grey-400 mt-2 text-sm text-grey-600">
                Get immediate feedback, personalized guidance, and step-by-step help in a live chat
                environment.
              </p>
            </div>

            {/* Step 4 */}
            <div className="dark:bg-dark relative flex flex-col items-center rounded-lg bg-white p-6 shadow dark:border dark:border-primary">
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-md">
                4
              </div>
              <h3 className="dark:text-primary mt-6 text-lg font-semibold text-grey-900">
                Resolve & Follow Up
              </h3>
              <p className="dark:text-grey-400 mt-2 text-sm text-grey-600">
                Once you have the answers you need, wrap up your session with confidence. We’ll
                follow up if necessary to ensure everything is fully resolved.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-10 flex justify-center">
            <Link href="#">
              <Button variant="default" size="lg">
                Get Live Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="dark:bg-360-deep-blue bg-accent-light py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="dark:text-primary text-3xl font-bold text-grey-800 sm:text-4xl">
            Areas of Expertise
          </h2>
          <p className="dark:text-grey-400 mx-auto mt-4 max-w-2xl text-base text-grey-400 sm:mt-6 sm:text-lg">
            Discover the wide range of services and specializations ProZ.com professionals offer.
            From translation and localization to interpreting and subtitling, find the expertise you
            need to get your project done right.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition duration-200 hover:scale-105"
            >
              Translation
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Localization
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Interpreting
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Subtitling
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Editing & Proofreading
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              MT Post-Editing
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Voiceover
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Desktop Publishing (DTP)
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Transcreation
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Legal
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Medical
            </span>
            <span
              className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transform 
    transition 
    duration-200 
    hover:scale-105"
            >
              Technical
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link href="#">
              <Button variant="default" size="lg">
                More Specializations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark:bg-dark bg-360-deep-blue flex flex-col mx-auto items-center gap-2 py-16">
        <div className="flex flex-col max-auto">
          <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Need help right now?
          </h2>
          <p className="font-poppins text-base text-center text-white dark:text-grey-200 mb-3">
            Our ProZ.com live support team is here 24/7 to assist with any questions or issues.
            Connect with a real person and get immediate help.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="#">
            <Button variant="default" size="lg">
              Get Live Support
            </Button>
          </Link>
          <Link href="#">
            <Button
              size="lg"
              className="bg-transparent border-2 border-primary-500 text-primary-50"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

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
    </>
  );
};

export default LiveSupport;
