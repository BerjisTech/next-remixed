import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/shadcn/button";
import _faqSection from "@/app/360/_faqSection";
import _360Testimonials from "@/app/360/_360Testimonials";
import PricingTable from "@/app/360/_pricingTableSection";

export const metadata: Metadata = {
  title: "ProZ*360",
  description:
    "Empower your language business with ProZ*360 | Web & Marketing Solutions. Professional websites, branding, and marketing—designed for language professionals.",
};

const ProZ360 = () => {
  return (
    <>
      {/*Hero section*/}
      <div className="relative bg-360-deep-blue py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/360/360-bg-hero.png')] bg-cover bg-no-repeat opacity-30"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-white dark:text-primary-300">
                ProZ*360
              </span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-poppins text-xl text-center sm:text-left text-white dark:text-grey-200">
                Empower your language business with ProZ*360 | Web & Marketing Solutions.
                Professional websites, branding, and marketing—designed for language professionals.
              </p>
              <div className="flex flex-col gap-3">
                <p
                  className="font-poppins text-base
               italic text-center sm:text-left text-white dark:text-grey-200"
                >
                  Take your professional presence to the next level.
                </p>
                <div className="flex flex-row gap-3">
                  <Link
                    href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="lg">
                      Book a free consultation
                    </Button>
                  </Link>
                  <Link
                    href="https://proz360.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              src="/next/next_assets/images/360/hero-banner.png"
              alt="A man and woman creating website, branding, and marketing solutions"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Our mission */}
      <div className="max-w-6xl mx-auto flex flex-col gap-2 py-16">
        <div className="flex flex-col lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden">
            <Image
              src="/next/next_assets/images/360/mission.png"
              alt="Probono hero image"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto"
            />
          </div>
          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 lg:mb-0 flex flex-col gap-3">
            <h3 className="text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
              Our mission: Your success!
            </h3>
            <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
              At ProZ*360, we’ve made it our mission to help freelance translators and interpreters
              shine online. Our team provides custom websites, branding, and marketing solutions
              that showcase your expertise and attract the right clients. With ProZ*360, you’ll
              spend less time worrying about your online presence and more time doing what you do
              best—delivering exceptional language services.
              <br />
              <br />
              ProZ*360 is an individual business unit of ProZ, serving its members first and
              foremost, but also servicing the wider community of language experts and LSPs.
            </p>
          </div>
        </div>
      </div>

      {/* Key features */}
      <div className="flex flex-col max-w-7xl mx-auto gap-6 px-3 w-full pb-16">
        <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
          Key features & benefits
        </h2>
        {/*Boxes*/}
        <div className="grid grid-cols-12 justify-start items-start gap-5">
          <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-[#F5F5F5] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 w-full">
            <p className="text-2xl font-semibold text-grey-700 leading-[38px] mb-2">
              Website hosting, creation & design
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>SEO-ready designs to boost your visibility.</li>
              <li>Mobile-responsive layouts that look great on any device.</li>
              <li>Easy content management options—manage content yourself or with us.</li>
            </ul>
          </div>

          <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-[#F5F5F5] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 w-full">
            <p className="text-2xl font-semibold text-grey-700 leading-[38px] mb-2">
              Brand identity & messaging
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Personalized branding elements: color palette, typography, and logo options.</li>
              <li>Clear, compelling messaging that resonates with your target market.</li>
              <li>Guidance on highlighting your unique subject-matter expertise.</li>
            </ul>
          </div>

          <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-[#F5F5F5] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 w-full">
            <p className="text-2xl font-semibold text-grey-700 leading-[38px] mb-2">
              Marketing solutions
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Email marketing templates for maintaining client relationships.</li>
              <li>Social media banners and visuals tailored to your services.</li>
              <li>Strategies and best practices for attracting high-value clients.</li>
            </ul>
          </div>

          <div className="sm:col-span-3 col-span-12 grow shrink basis-0 self-stretch p-6 bg-[#F5F5F5] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 w-full">
            <p className="text-2xl font-semibold text-grey-700 leading-[38px] mb-2">
              Dedicated support
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Step-by-step onboarding from our Customer Onboarding Assistant.</li>
              <li>Expert web designers and marketers on hand to guide you.</li>
              <li>Ongoing support to help you adapt as your business grows.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gradient-to-l from-[#257A97] to-360-deep-blue">
        <div className="flex flex-col max-w-6xl mx-auto gap-6 px-3 py-16 pb-24">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[44px]">
              How it works
            </h2>
          </div>
          {/*Boxes*/}
          <div className="grid grid-cols-4 justify-start items-start gap-5">
            <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#6daabf]/10 border-2 border-[#4d9d9d] rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start gap-3 flex">
                <div className="flex w-8 h-8 p-6 justify-center items-center bg-[#6daabf] rounded-full mb-2">
                  <span className="items-center justify-center text-360-deep-blue">01</span>
                </div>
                <p className="self-stretch text-white dark:text-grey-200 text-xl font-semibold font-poppins leading-7">
                  Sign up / request a consultation
                </p>
                <p className="self-stretch text-white dark:text-grey-200 text-base font-normal font-['Poppins'] leading-relaxed">
                  Fill out our short form to let us know your goals, budget, and unique services.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#6daabf]/10 border-2 border-[#4d9d9d] rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start gap-3 flex">
                <div className="flex w-8 h-8 p-6 justify-center items-center bg-[#6daabf] rounded-full mb-2">
                  <span className="items-center justify-center text-360-deep-blue">02</span>
                </div>
                <p className="self-stretch text-white dark:text-grey-200 text-xl font-semibold font-poppins leading-7">
                  Collaborate with our team
                </p>
                <p className="self-stretch text-white dark:text-grey-200 text-base font-normal font-['Poppins'] leading-relaxed">
                  Our Customer Onboarding Assistant will gather your content and materials, then our
                  Lead Website Creator will design and build your site.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#6daabf]/10 border-2 border-[#4d9d9d] rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start gap-3 flex">
                <div className="flex w-8 h-8 p-6 justify-center items-center bg-[#6daabf] rounded-full mb-2">
                  <span className="items-center justify-center text-360-deep-blue">03</span>
                </div>
                <p className="self-stretch text-white dark:text-grey-200 text-xl font-semibold font-poppins leading-7">
                  Review & refine
                </p>
                <p className="self-stretch text-white dark:text-grey-200 text-base font-normal font-['Poppins'] leading-relaxed">
                  We’ll review your website with you, make revisions, and ensure the final product
                  meets your expectations.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#6daabf]/10 border-2 border-[#4d9d9d] rounded-2xl flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start gap-3 flex">
                <div className="flex w-8 h-8 p-6 justify-center items-center bg-[#6daabf] rounded-full mb-2">
                  <span className="items-center justify-center text-360-deep-blue">04</span>
                </div>
                <p className="self-stretch text-white dark:text-grey-200 text-xl font-semibold font-poppins leading-7">
                  Launch & grow
                </p>
                <p className="self-stretch text-white dark:text-grey-200 text-base font-normal font-['Poppins'] leading-relaxed">
                  Once live, we’ll share tips on how to market your services, grow your client base,
                  and keep your site fresh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   Meet the team*/}
      <div className="flex flex-col max-w-7xl mx-auto gap-6 px-3 w-full pb-16 py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Meet the team
          </h2>
          <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200 mb-3">
            Meet the core team at ProZ*360, a fully female-run operation.
          </p>
        </div>
        {/*Boxes*/}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-5">
          {/*Tanya*/}
          <div className="w-full relative rounded-2xl overflow-hidden">
            <div className="block w-full h-[290px] hover:scale-105 duration-300 transition-all">
              <Image
                src="/next/next_assets/images/360/ProZ360_Tanya.png"
                alt="Tanya ProZ*360"
                width={500}
                height={500}
                className="object-cover w-full h-full object-left-top"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-accent relative -mt-4 z-2">
              <p className="text-xl font-semibold font-poppins leading-normal text-grey-700">
                Tanya Quintieri{" "}
              </p>
              <p className="text-sm font-normal font-poppins leading-tight text-grey-500">
                Head of Websites & Brand Creation
              </p>
              <p className="text-sm italic font-normal font-poppins leading-tight text-grey-500">
                Tanya has been designing websites for language professionals since 2012 and
                specializes in digital marketing.
              </p>
            </div>
          </div>

          {/*   Laura*/}
          <div className="w-full relative rounded-2xl overflow-hidden">
            <div className="block w-full h-[290px] hover:scale-105 duration-300 transition-all">
              <Image
                src="/next/next_assets/images/360/ProZ360_Laura.png"
                alt="Laura ProZ*360"
                width={500}
                height={500}
                className="object-cover w-full h-full object-left-top"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-accent relative -mt-4 z-2">
              <p className="text-xl font-semibold font-poppins leading-normal text-grey-700">
                María Laura Rucci
              </p>
              <p className="text-sm font-normal font-poppins leading-tight text-grey-500">
                Lead Website Creator
              </p>
              <p className="text-sm italic font-normal font-poppins leading-tight text-grey-500">
                Maria has been building websites for ProZ members since 2023 and has a passion for
                helping freelancers succeed.
              </p>
            </div>
          </div>

          {/*   Erica */}
          <div className="w-full relative rounded-2xl overflow-hidden">
            <div className="block w-full h-[290px] hover:scale-105 duration-300 transition-all">
              <Image
                src="/next/next_assets/images/360/ProZ360_Erika.png"
                alt="Erika ProZ*360"
                width={500}
                height={500}
                className="object-cover w-full h-full object-left-top"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-accent relative -mt-4 z-2">
              <p className="text-xl font-semibold font-poppins leading-normal text-grey-700">
                Erika Melchor{" "}
              </p>
              <p className="text-sm font-normal font-poppins leading-tight text-grey-500">
                Customer Onboarding Assistant
              </p>
              <p className="text-sm italic font-normal font-poppins leading-tight text-grey-500">
                Erika is ProZ*360’s communication whizz, who knows how to ask all the right
                questions for tailored results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Your investment */}
      <div className="flex flex-col max-w-7xl mx-auto gap-6 px-3 w-full pt-6 pb-12">
        <div className="flex max-w-5xl mx-auto flex-col gap-2">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Your investment
          </h2>
          <p className="font-poppins text-base text-center text-grey-700 dark:text-grey-200 mb-3">
            We have different plans available for different membership tiers, starting at $0 for
            Premium members.
            <br /> Please visit our dedicated website{" "}
            <span>
              <Link
                href="https://proz360.com/"
                rel="nonopener nonreferrer"
                target="_blank"
                className="text-primary-600 hover:underline"
              >
                proz360.com
              </Link>{" "}
            </span>
            to learn about all our pricing options and other services.
          </p>
        </div>
        {/* Pricing table*/}
        <PricingTable />
      </div>

      {/* Testimonials*/}
      <_360Testimonials />

      {/* CTA */}
      <div className="bg-360-deep-blue flex flex-col mx-auto items-center gap-2 py-16">
        <div className="flex flex-col max-auto px-6 md:px-10">
          <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Ready to stand out online?
          </h2>
          <p className="font-poppins text-base text-center text-white dark:text-grey-200 mb-3">
            Connect with ProZ*360 to boost your visibility, refine your brand, and connect with
            high-quality clients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Link
            href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg">
              Book a free consultation
            </Button>
          </Link>
          <Link href="https://proz360.com/pricing" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-transparent border-2 border-primary-500 text-primary-50"
            >
              Get started today
            </Button>
          </Link>
        </div>
      </div>

      {/* FAQs*/}
      <div className="max-w-5xl mx-auto flex flex-col gap-3 py-12 px-6">
        <div className="flex flex-col max-auto">
          <h2 className="text-center text-360-deep-blue text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Frequently asked questions
          </h2>
        </div>
        <div className="w-full flex flex-col max-w-6xl mx-auto gap-3">
          <_faqSection></_faqSection>
        </div>
      </div>
    </>
  );
};

export default ProZ360;
