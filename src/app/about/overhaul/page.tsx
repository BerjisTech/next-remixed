import FaqSection from "./_faqSection";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { SquareArrowOutUpRight } from "lucide-react";

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full py-12 relative bg-accent dark:bg-black">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          <div className="lg:w-1/2 w-full h-auto">
            <div className="flex flex-col relative gap-4">
              <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
                  ProZ is evolving to serve you better
                </span>
              </h1>
              <p className="text-xl font-semibold lg:text-left text-center text-black dark:text-accent-light">
                An updated website is now under development.
              </p>
            </div>
            <p className="text-base text-center lg:text-left text-black dark:text-accent-light mb-4">
              A new ProZ website is now being developed, with the goal of improving the design and
              organization while introducing improvements for members.
            </p>
          </div>
          {/*<Image src="/next/next_assets/images/20475-1.png"*/}
          {/*     className="w-full xl:w-[47%] flex-grow-0 flex-shrink-0  h-[260px] rounded-3xl object-none"/>*/}
          <div className="lg:w-1/2 w-full h-auto">
            <Image
              src="/next/next_assets/images/about-proz-hero.png"
              alt="Probono hero image"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/*What to expect*/}
      <div className="max-w-screen-xl px-4 mx-auto my-16 flex flex-col justify-start items-center gap-4 overflow-hidden">
        <div className="flex flex-col self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
          <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
            Here's what to expect
          </h2>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-wrap justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    A fresh new look!
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    Improvements to the design of the site, including the logo, color scheme,
                    typography, and layout to fit the "world-className" standard.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    Consolidation
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    The entire suite of ProZ services (which were "tacked on", one by one, onto the
                    ProZ site over the years... or even built in separate sites) integrated into one
                    cohesive whole.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    New tech
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    Next-generation technologies (including AI, patented TM-Town technology, live
                    communication, video, etc.) in our industry-specific offerings.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    Third-party software
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    Third-party softwares, where possible, to improve member services (ex. forums,
                    course management, events, etc.)
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    Back-end improvements
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    Make back-end improvements (in notifications, database, systems, etc.)
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 px-6 py-8 rounded-[30px] bg-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-xl font-semibold text-left text-dark-blue-hue">
                    Better integration
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[292.67px] text-base text-left text-dark dark:text-accent-light">
                    Tighter integration with internal tools like Hubspot. Also connections to the
                    ProZ LinkedIn and Facebook groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="https://community.proz.com/t/proz-bridging-languages-connecting-professionals/75"
          target="_blank"
        >
          <Button>
            Discuss in the forums
            <SquareArrowOutUpRight />
          </Button>
        </Link>
      </div>

      {/*How ProZ works*/}
      <div className="max-w-screen-xl px-4 mx-auto my-16 flex flex-col justify-start items-start gap-10 overflow-hidden">
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-10 py-[35px] rounded-3xl bg-primary-600 dark:bg-black">
          <div className="flex flex-col self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <h2 className="text-center text-white dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
              How ProZ works (and who it works for)
            </h2>
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-center text-white">
              One thing that makes ProZ unique is that the freelancer is ProZ's number-one client.
              Paid membership is what makes the site and all of its services possible, and the ProZ
              site team is a group of people who spend all day working for, and thinking of ways to
              better help, freelance language professionals. In serving the freelancer first, the
              site, and the site team, also serve language companies or others seeking to buy
              language services as a close second, because in so doing, more work and other
              opportunities can be brought directly to freelancers.
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-center text-white">
              At ProZ, buyers of language services can meet and work with providers directly and
              indirectly, with no commission charged to the buyer. If you like who you have worked
              with, you can add them to your roster of trusted professionals (be sure to give them a
              review while you're at it!).
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-center text-white">
              Sellers of language services can put themselves in front of buyers and differentiate
              themselves as they see fit. They can also get trained, get certified, collaborate with
              like-minded individuals, take work, get paid, and have fun.
            </p>
          </div>
        </div>

        {/*Work & hire*/}
        <section id="work&hire" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="w-96 lg:w-[600px]">
              <Image
                src="/next/next_assets/images/work-hire.svg"
                alt="Probono hero image"
                width={72}
                height={72}
                className="object-contain w-full h-auto rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative gap-4">
              <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                Work &#x26; hire
              </h2>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left">
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-dark dark:text-accent-light">
                  As home to the world's largest community of language professionals, ProZ is the
                  number one matching site for language work, where companies and end clients can
                  connect with and hire service providers, commission-free.
                </span>
                <br />
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-dark dark:text-accent-light">
                  Traditionally, ProZ has been a place for clients and providers to meet and strike
                  up work relationships on their own and under their own terms, but now...
                </span>
                <br />
              </p>
              <p>
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-dark-blue-hue">
                  What's new:
                </span>
              </p>
              <ul className="list-disc list-outside pl-6 text-base text-left text-dark dark:text-accent-light">
                <li className="mb-1">
                  A new universal directory, which allows you to search for freelancers, companies,
                  and job opportunities all at once, with AI assistance, and backed by patented
                  matching technology.
                </li>
                <li className="mb-1">
                  A simple, easy-to-hire system that takes your projects to your provider(s) of
                  choice or to a pool of pre-screened professionals.
                </li>
                <li className="mb-1">
                  The option to upload your work, pay, and then receive the finished product AND
                  know who worked on it (no provider anonymity).
                </li>
                <li className="mb-1">
                  Start to finish project management for those jobs where you are too busy to handle
                  them yourself, provided by the ProZ team.
                </li>
                <li className="mb-1">
                  Increasing support for those who prefer to do work through the site. For example,
                  if you need an interpreter, you can do the interpreter call directly through the
                  site (and also pay for the service without using another platform).
                </li>
                <li className="mb-1">
                  1 - 5 star screened review ratings for all freelancers and companies.
                </li>
                <li className="mb-1">
                  Increased emphasis on pre-screening, credentials, and continuing professional
                  development, to make it easier to select the right providers for the job.
                </li>
              </ul>

              <p className="self-stretch flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-dark-blue-hue">
                Human, or AI?
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-dark dark:text-accent-light">
                It doesn't have to be one or the other-- it can be both. ProZ empowers members to
                leverage AI where it makes them better or more efficient. Members receive free
                training and their own AI translation companion tool developed by the ProZ team
                which allows them to compare results from 3 different paid models (at no additional
                cost to the member).{" "}
              </p>
              <Link href="/next/providers" target="_blank">
                <Button>
                  Visit directory <SquareArrowOutUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/*Network & learn*/}
        <section id="network&learn" className="scroll-mt-32">
          <div className="flex flex-col-reverse lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-4">
              <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
                Network &#x26; learn
              </h2>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-dark dark:text-accent-light">
                As home to more than a million language professionals worldwide, ProZ is also the
                first place to go if you are seeking subject matter experts and are looking to
                expand your skill set. ProZ provides members the opportunity to get together with
                like-minded professionals to help each other, discuss issues important to their work
                and businesses, get trained and certified, and to have fun.
              </p>
              <p>
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-dark-blue-hue ">
                  What's new:
                </span>
              </p>
              <ul className="list-disc list-outside pl-6 text-base text-left text-dark dark:text-accent-light">
                <li className="mb-1">
                  Join and participate in exclusive communities with fellow professionals. These
                  communities are safe spaces where collaboration and getting things done are at the
                  forefront. New communities include{" "}
                  <Link
                    href="/community/interpreters-at-proz"
                    target="_blank"
                    className="text-primary-600 hover:underline dark:text-blue-400"
                  >
                    {" "}
                    Interpreters at ProZ
                  </Link>
                  ,
                  <Link
                    href="/community/women-in-translation"
                    target="_blank"
                    className="text-primary-600 hover:underline dark:text-blue-400"
                  >
                    {" "}
                    Women in Translation
                  </Link>
                  ,
                  <Link
                    href="/community/mastermind"
                    target="_blank"
                    className="text-primary-600 hover:underline dark:text-blue-400"
                  >
                    {" "}
                    Translation Mastermind
                  </Link>
                  ,
                  <Link
                    href="/community/proz-pro-bono"
                    target="_blank"
                    className="text-primary-600 hover:underline dark:text-blue-400"
                  >
                    {" "}
                    the Pro Bono initiative
                  </Link>
                  , and{" "}
                  <Link
                    href="/community/ai"
                    target="_blank"
                    className="text-primary-600 hover:underline dark:text-blue-400"
                  >
                    {" "}
                    AI for language professionals
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  Renewed emphasis on getting credentialed and on continuing professional
                  development which allows you to show clients and collaborators that you are a
                  serious professional who is working on enhancing your capabilities.
                </li>
                <li className="mb-1">Find a mentor, or become a mentor to someone else.</li>
                <li className="mb-1">
                  An easy-to-use marketplace where subject matter experts can pass on what they know
                  to others, and those seeking to learn something new can connect with them.
                </li>
              </ul>
              <Link href="/learn/courses" target="_blank">
                <Button>
                  Browse courses
                  <SquareArrowOutUpRight />
                </Button>
              </Link>
            </div>
            <div className="w-96 lg:w-[600px]">
              <Image
                src="/next/next_assets/images/network-learn.svg"
                alt="Probono hero image"
                width={72}
                height={72}
                className="object-contain w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </section>
        {/*Invoice & pay*/}
        <section
          id="invoice&pay"
          className="scroll-mt-32 flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4"
        >
          <div className="w-96">
            <Image
              src="/next/next_assets/images/invoice-pay.svg"
              alt="Probono hero image"
              width={72}
              height={72}
              className="object-contain w-full h-auto rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
            <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
              Invoice &#x26; pay
            </h2>
            <div className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-dark dark:text-accent-light">
              <p className="mb-4">
                ProZ provides an online Invoicing tool designed specifically for the language
                services industry, available to its members. But you can also pay and get paid using
                ProZ*Pay.
              </p>
              <p className="mb-4">
                For companies, ProZ*Pay makes it easier to pay their providers, no matter where they
                are in the world or which payment method they prefer.
              </p>
              <p className="mb-4">
                For freelancers, ProZ*Pay is a solid solution because it works to get your payments
                to you at the lowest possible cost, and even in advance of the payment date, so you
                can get more of your money, faster, and using your preferred method of receiving
                payments.
              </p>
              <p className="mb-6">
                To date, ProZ*Pay has processed over 21 million dollars for language professionals.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <Link href="/prozpay/about/payer" target="_blank">
                <Button>
                  ProZPay for companies
                  <SquareArrowOutUpRight />
                </Button>
              </Link>
              <Link href="/prozpay/about/payee" target="_blank">
                <Button>
                  ProZPay for freelancers
                  <SquareArrowOutUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/*FAQs*/}
      <div className="max-w-5xl px-4 mx-auto my-14 flex flex-col justify-start items-center relative gap-3 overflow-hidden">
        <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
          Frequently asked questions
        </h2>
        <FaqSection />
      </div>

      {/*Meet the team*/}
      <div className="max-w-screen-xl px-4 py-10 mx-auto my-5 flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="lg:w-1/2 grid grid-cols-3 items-center w-full h-auto relative gap-2">
          <div className="col-span-1">
            <Image
              src="/next/next_assets/images/staff/andrea.jpg"
              alt="Probono hero image"
              width={500}
              height={500}
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2 pt-12">
              <div>
                <Image
                  src="/next/next_assets/images/staff/helen.jpg"
                  alt="Probono hero image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/next/next_assets/images/staff/luana-zalazar.png"
                  alt="Probono hero image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <div>
                <Image
                  src="/next/next_assets/images/henry_dotterer.jpg"
                  alt="Probono hero image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/next/next_assets/images/staff/jared.jpg"
                  alt="Probono hero image"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col justify-start items-start self-stretch gap-2">
            <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px]">
              Meet the team
            </h2>
            <p className="self-stretch text-sm sm:text-base text-left text-[#151515] dark:text-slate-200">
              ProZ was created by a translator. It is maintained today by a team of 37 staff
              members, working from offices in the United States, Argentina, and Ukraine, as well as
              remotely from around the world.
            </p>
          </div>
          <Link href="/about#meet-the-team">
            <Button>
              See the whole team
              <SquareArrowOutUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
