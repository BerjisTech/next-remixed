"use client";
import React, { useState } from "react";
import Image from "next/image";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { useGetPasteyReviewsQuery } from "@/lib/store/features/pastey/pasteyApiSlice";
import { Testimonial } from "@/interfaces/testimonial";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PasteySection = () => {
  const softwareId = 205; // Pastey software id
  const {
    data: pasteyReviews,
    isLoading,
    error,
  } = useGetPasteyReviewsQuery(softwareId, { skip: !softwareId });
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/pastey/pastey-bg.svg')] bg-cover bg-no-repeat opacity-90 dark:opacity-60"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* Left Section - Logo and Text */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6">
            {/* Logo */}
            <Image
              src="/next/next_assets/images/pastey/pastey-logo-white.svg"
              alt="Pastey Logo"
              width={360}
              height={100}
            />

            {/* Description */}
            <p className="font-poppins text-xl text-center lg:text-left text-white dark:text-grey-200">
              Pastey is designed as a companion app and it is here to support you, the professional
              translator. It fits right into your usual translation setup, whether you're using a
              CAT tool, working in MS Office, or otherwise. If your application allows you to copy
              and paste, Pastey is ready to help.
            </p>
          </div>

          {/* Right Section - Laptop Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <Image
              src="/next/next_assets/images/pastey/pastey-app-screenshot.png"
              alt="Screenshot displaying Pastey app"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Desktop App Section */}
      <section className="max-w-7xl mx-auto py-20">
        <div className="mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Laptop Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/next/next_assets/images/pasteyLaptopImage.png"
              alt="Laptop displaying Pastey app"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col space-y-6">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-200">
              Desktop app for translators
            </h2>
            <p className=" text-gray-600 dark:text-grey-200 leading-relaxed">
              Pastey is an innovative desktop application that bridges the gap between human
              expertise and artificial intelligence. With intuitive keyboard shortcuts, Pastey
              transforms your source text into AI-powered draft translations, providing a solid
              foundation for your translation projects.
            </p>
            <p className=" text-gray-600 dark:text-grey-200 leading-relaxed">
              But Pastey’s capabilities extend beyond just drafting; it also offers interactive chat
              functionalities, allowing you to engage with AI as if you were conversing with a
              fellow linguist, a copywriter, a SEO specialist, a social media manager, a blog
              writer, or even something like a financial advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Download section */}
      <section className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col justify-start items-center w-full gap-4 py-14 px-4 rounded-[45px] bg-gradient-to-r from-[#a62b27] to-[#186362]">
          {/* Left Section - Heading and Description */}
          <div className="w-full flex flex-col text-center gap-4">
            <p className="text-5xl font-semibold text-white">Download Pastey for free*</p>
            <p className="text-base text-gray-200">
              Pastey is a free tool, but you must log into your ProZ account after the initial trial
              period. See the FAQ below for details.
            </p>
          </div>

          {/* Right Section - Download Buttons */}
          <div className="w-full flex flex-wrap justify-start items-start">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 my-2">
              {/* MacOS (Intel) Button with Inline SVG */}
              <Link
                href="https://pastey-ai.com/sdc_download/113/?key=jjb592okg8ug99lvb124gb4dquu8qz"
                className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4559 23.3203C28.7199 24.9498 28.3679 25.6784 27.4226 27.1184C26.102 29.1295 24.2374 31.639 21.9322 31.6563C19.8817 31.6735 19.3525 30.3184 16.5697 30.3406C13.7869 30.3541 13.2072 31.6809 11.1543 31.66C8.84909 31.639 7.08417 29.3781 5.76232 27.3707C2.06632 21.74 1.67617 15.1406 3.96048 11.6292C5.57648 9.13933 8.13402 7.67718 10.5352 7.67718C12.9808 7.67718 14.518 9.02118 16.5402 9.02118C18.502 9.02118 19.6971 7.67349 22.5254 7.67349C24.6645 7.67349 26.9266 8.83903 28.5426 10.8501C23.2552 13.7473 24.1143 21.2993 29.4559 23.3203ZM20.3789 5.42611C21.4079 4.10549 22.1882 2.2421 21.9051 0.341797C20.2263 0.456258 18.2632 1.52826 17.1162 2.91657C16.0774 4.18057 15.2159 6.05872 15.5519 7.87534C17.3832 7.93441 19.2786 6.84272 20.3789 5.42611Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                  MacOS (Intel)
                </p>
              </Link>

              {/* MacOS (M chip) Button with Inline SVG */}
              <Link
                href="https://pastey-ai.com/sdc_download/114/?key=musfsn5kofcsu0ul9rg5mnbgliuuui"
                className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4559 23.3203C28.7199 24.9498 28.3679 25.6784 27.4226 27.1184C26.102 29.1295 24.2374 31.639 21.9322 31.6563C19.8817 31.6735 19.3525 30.3184 16.5697 30.3406C13.7869 30.3541 13.2072 31.6809 11.1543 31.66C8.84909 31.639 7.08417 29.3781 5.76232 27.3707C2.06632 21.74 1.67617 15.1406 3.96048 11.6292C5.57648 9.13933 8.13402 7.67718 10.5352 7.67718C12.9808 7.67718 14.518 9.02118 16.5402 9.02118C18.502 9.02118 19.6971 7.67349 22.5254 7.67349C24.6645 7.67349 26.9266 8.83903 28.5426 10.8501C23.2552 13.7473 24.1143 21.2993 29.4559 23.3203ZM20.3789 5.42611C21.4079 4.10549 22.1882 2.2421 21.9051 0.341797C20.2263 0.456258 18.2632 1.52826 17.1162 2.91657C16.0774 4.18057 15.2159 6.05872 15.5519 7.87534C17.3832 7.93441 19.2786 6.84272 20.3789 5.42611Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                  MacOS (M chip)
                </p>
              </Link>

              {/* Windows Button with Inline SVG */}
              <Link
                href="https://pastey-ai.com/sdc_download/110/?key=cfecn56svqk50vx2mxl4dcpk8g6urq"
                className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13V20.434C21 20.6354 20.9594 20.8348 20.8807 21.0202C20.8019 21.2056 20.6867 21.3733 20.5417 21.5132C20.3968 21.6531 20.2252 21.7623 20.0371 21.8345C19.849 21.9066 19.6483 21.9401 19.447 21.933L19.314 21.922L12 21.008V13H21ZM10 13V20.758L4.752 20.102C4.26821 20.0415 3.82316 19.8064 3.50052 19.4409C3.17789 19.0753 2.99989 18.6045 3 18.117V13H10ZM19.314 2.07798C19.5139 2.05301 19.7167 2.06855 19.9105 2.12368C20.1042 2.1788 20.2849 2.27239 20.4416 2.39884C20.5984 2.5253 20.7281 2.68204 20.823 2.85971C20.9179 3.03738 20.9761 3.23235 20.994 3.43298L21 3.56598V11H12V2.99198L19.314 2.07798ZM10 3.24198V11H3V5.88298C2.99989 5.39542 3.17789 4.92461 3.50052 4.55907C3.82316 4.19353 4.26821 3.95843 4.752 3.89798L10 3.24198Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                  Windows
                </p>
              </Link>

              {/* Linux Button with Inline SVG */}
              <Link
                href="https://pastey-ai.com/sdc_download/166/?key=6499dz2dsbcn1ti0a475sq65a39qwk"
                className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
              >
                <svg
                  width="26"
                  height="29"
                  viewBox="0 0 26 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.48588 27.4397C5.01533 27.6224 6.73378 28.6131 8.1719 28.7881C9.61775 28.9706 10.0652 27.8034 10.0652 27.8034C10.0652 27.8034 11.6922 27.4397 13.4027 27.3978C15.1149 27.3499 16.7357 27.7539 16.7357 27.7539C16.7357 27.7539 17.05 28.4738 17.6367 28.7881C18.2234 29.1084 19.4866 29.1518 20.2963 28.2988C21.1074 27.4397 23.2716 26.3575 24.4869 25.681C25.7098 25.003 25.4854 23.9689 24.7176 23.6546C23.9498 23.3404 23.3213 22.845 23.3692 21.8945C23.411 20.9517 22.6912 20.3232 22.6912 20.3232C22.6912 20.3232 23.3213 18.2489 22.7345 16.5305C22.1478 14.82 20.2128 12.069 18.7251 10.0008C17.2375 7.92646 18.5006 5.53162 17.1461 2.47107C15.7915 -0.594083 12.279 -0.412902 10.3857 0.893566C8.49246 2.20013 9.07292 5.4402 9.16425 6.97747C9.25558 8.50691 9.20605 9.60136 9.03113 9.99466C8.8562 10.394 7.6348 11.8446 6.82363 13.0598C6.01403 14.2812 5.42722 16.803 4.83433 17.8433C4.25378 18.8775 4.65941 19.8202 4.65941 19.8202C4.65941 19.8202 4.25387 19.9595 3.9334 20.6376C3.6191 21.3079 2.99058 21.6283 1.85894 21.8467C0.735035 22.0773 0.735035 22.8018 1.00598 23.613C1.27839 24.4226 1.00598 24.8762 0.691673 25.9104C0.377461 26.9443 1.95027 27.2585 3.48588 27.4397ZM19.3845 22.7227C20.1879 23.0741 21.3427 22.5849 21.6941 22.2334C22.0441 21.8836 22.2917 21.3634 22.2917 21.3634C22.2917 21.3634 22.6431 21.5384 22.6075 22.0941C22.5703 22.6576 22.849 23.461 23.3753 23.7397C23.9016 24.0168 24.7051 24.4037 24.2887 24.7908C23.8644 25.1778 21.5177 26.1221 20.8164 26.859C20.1213 27.5912 19.208 28.1903 18.6522 28.0138C18.0903 27.8389 17.5995 27.0711 17.8411 25.9472C18.0903 24.828 18.3009 23.6003 18.2652 22.8991C18.2281 22.1978 18.0903 21.2535 18.2652 21.1141C18.4402 20.9763 18.7188 21.0429 18.7188 21.0429C18.7188 21.0429 18.5794 22.3729 19.3845 22.7227ZM14.1706 3.77763C14.9446 3.77763 15.5685 4.54544 15.5685 5.48973C15.5685 6.16004 15.2542 6.74059 14.7945 7.01927C14.6784 6.9713 14.5576 6.91708 14.4245 6.86129C14.7031 6.72356 14.8966 6.37215 14.8966 5.96652C14.8966 5.4356 14.57 4.99903 14.1597 4.99903C13.7603 4.99903 13.4274 5.4355 13.4274 5.96652C13.4274 6.16013 13.4755 6.35356 13.5544 6.50528C13.3129 6.40769 13.0946 6.32419 12.9197 6.25763C12.8284 6.02692 12.7741 5.76684 12.7741 5.48982C12.7742 4.54553 13.3965 3.77763 14.1706 3.77763ZM12.2541 6.72825C12.6349 6.79482 13.6813 7.24841 14.0685 7.3877C14.4555 7.52083 14.8842 7.76848 14.8424 8.01622C14.7945 8.2716 14.5948 8.2716 14.0685 8.59207C13.5483 8.90638 12.4121 9.60762 12.0482 9.65559C11.686 9.70355 11.4801 9.49917 11.093 9.24996C10.7059 8.99605 9.98002 8.40316 10.1626 8.08895C10.1626 8.08895 10.7307 7.65395 10.9784 7.43106C11.2262 7.20035 11.867 6.657 12.2541 6.72825ZM10.5852 4.05014C11.1952 4.05014 11.6921 4.77615 11.6921 5.67091C11.6921 5.83349 11.6735 5.98512 11.6442 6.13684C11.4924 6.1848 11.3408 6.2638 11.1952 6.39075C11.124 6.45114 11.0573 6.50528 10.997 6.56567C11.093 6.38458 11.1302 6.1245 11.0868 5.852C11.0032 5.36903 10.6766 5.01146 10.3561 5.05942C10.0341 5.11365 9.84211 5.55638 9.91953 6.04561C10.0047 6.541 10.3251 6.89848 10.6517 6.84435C10.6703 6.83818 10.6873 6.83201 10.7059 6.82575C10.5496 6.97747 10.4041 7.11059 10.2523 7.21895C9.81118 7.01301 9.48454 6.39692 9.48454 5.67091C9.48463 4.76998 9.97376 4.05014 10.5852 4.05014ZM7.18728 15.7627C7.8158 14.772 8.22134 12.6062 8.84985 11.8864C9.48463 11.1681 9.97376 9.63708 9.75087 8.9606C9.75087 8.9606 11.1054 10.5814 12.0482 10.3151C12.9925 10.0426 15.1149 8.46521 15.4291 8.73615C15.7435 9.00857 18.4463 14.9531 18.7188 16.8464C18.9913 18.7381 18.5377 20.184 18.5377 20.184C18.5377 20.184 17.5036 19.9115 17.3704 20.54C17.2373 21.1747 17.2373 23.4736 17.2373 23.4736C17.2373 23.4736 15.8394 25.4087 13.6752 25.7291C11.5109 26.0434 10.4273 25.8142 10.4273 25.8142L9.21203 24.4225C9.21203 24.4225 10.1564 24.2832 10.0232 23.3342C9.89007 22.3915 7.13757 21.0849 6.64218 19.9114C6.14697 18.738 6.55103 16.7549 7.18728 15.7627ZM1.83565 22.862C1.94401 22.3977 3.3465 22.3977 3.88525 22.071C4.42401 21.7444 4.53227 20.8063 4.96736 20.5586C5.3961 20.3047 6.18877 21.2057 6.51541 21.7134C6.83588 22.2088 8.06354 24.3746 8.5651 24.9132C9.07283 25.4566 9.53885 26.1764 9.3933 26.8235C9.25558 27.4705 8.49237 27.9427 8.49237 27.9427C7.80972 28.1533 5.90558 27.3313 5.04028 26.969C4.17498 26.6052 1.97356 26.4968 1.69028 26.1764C1.39927 25.8498 1.82957 25.1299 1.9441 24.4472C2.0462 23.7568 1.72582 23.328 1.83565 22.862Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">Linux</p>
              </Link>
            </div>

            {/* System Requirements */}
            <p className="w-full text-sm italic text-center text-gray-200">
              System requirements: Windows 10 and 11, macOS 12, 13, and 14.
            </p>
          </div>

          {/* Decorative SVG */}
          <svg
            width="525"
            height="736"
            viewBox="0 0 525 736"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <g style={{ mixBlendMode: "overlay" }} filter="url(#filter0_f_6098_66860)">
              <circle cx="368.5" cy="368" r="171.5" fill="#80C9C9" />
            </g>
            <defs>
              <filter
                id="filter0_f_6098_66860"
                x="0.6"
                y="0.1"
                width="735.8"
                height="735.8"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="98.2" result="effect1_foregroundBlur_6098_66860" />
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      {/*Link to Pastey ai*/}
      <div className="max-w-6xl mx-auto p-4 w-full justify-items-center">
        <div className="flex flex-row gap-3 items-center text-primary hover:text-primary-700">
          <Link
            href="https://pastey-ai.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold text-xl"
          >
            You can also purchase a Pastey license separately
          </Link>
          <ArrowUpRight />
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* Testimonial section */}
      <section className="container mx-auto mt-12 py-12">
        {/* Title */}
        <h2 className="text-center text-4xl font-semibold text-gray-800 dark:text-grey-200 mb-10">
          What members are saying
        </h2>

        {/* Testimonial Cards */}
        <div className="flex justify-between gap-8">
          {pasteyReviews && !isLoading && !error && (
            <>
              {pasteyReviews.map((testimonial: Testimonial, index: number) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

const faqItems = [
  {
    question: "Where can I get Pastey?",
    answer:
      "Pastey was developed and is maintained by the ProZ.com team and is available to our paying membership tiers. To download Pastey, simply click your operating system above and download the app.",
  },
  {
    question: "Which LLMs does Pastey use?",
    answer:
      "Pastey allows you to select from different LLMs, including ChatGPT (3.5 and 4), Claude, and Gemini (please note Google's Gemini API is not available in EU countries yet).",
  },
  {
    question: "Where can I learn how to use Pastey?",
    answer:
      "Pastey is designed to be intuitive and has a minimalist design. If you want to learn more about using Pastey, feel free to visit the AI Forums on ProZ.com. There, you will also find instructional videos as well as the community of Pastey users. You can discuss how you use Pastey, any questions you might have, and suggest improvements.",
  },
  {
    question: "How do I install Pastey on Linux?",
    answer:
      'After downloading, unpack the installation package file into the chosen location in your user directory. Then, double-click the Pastey file to launch the program. On Linux Ubuntu, you can right-click the Pastey file and choose "Run as a Program".',
  },
  {
    question: "How much does Pastey cost?",
    answer:
      "Pastey is available at no extra charge to our Premium members and Enterprise business members. Plus and Standard members as well as business members on the Standard and Plus plans can access it for free until the end of 2024. All other users with a registered account on ProZ.com can test it for a month.",
  },
  {
    question: "I am not a ProZ.com member, can I still get Pastey?",
    answer:
      "We are able to build these kinds of tools thanks to our paying members. Therefore, we make them available to our paying members at no cost. Unregistered users can take Pastey for a spin for two weeks or 20,000 tokens, whichever comes first. Registered ProZ.com users can try it for one month or 40,000 tokens whichever comes first. Try Pastey, have a look at our comprehensive membership benefits, and consider joining our community!",
  },
  {
    question: "Do I need my own LLM license?",
    answer:
      "No, you do not need your own license. Pastey is equipped with ProZ.com's Enterprise licenses for various LLMs.",
  },
  {
    question: "Who can I contact in case I have questions?",
    answer:
      "If you would like to ask questions before checking out the forum, you can email us at pastey@proz.com. If you have any questions about the membership tiers that give you access to Pastey, please visit go.proz.com/premium or get in touch with a member of staff.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-white mb-1">
    <button
      className={`w-full text-left py-4 px-6 font-semibold rounded-lg border ${
        isOpen ? "bg-primary text-white" : "bg-white text-gray-700 border-[#EAF5F4]"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        {/* Question text */}
        <span>{question}</span>
        {/* Icon toggling between + and - */}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
    </button>

    {/* Answer section, only visible when isOpen is true */}
    {isOpen && <div className="px-6 pb-4 text-gray-900 bg-[#EAF5F4] rounded-lg mt-2">{answer}</div>}
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mx-auto max-w-4xl py-12 px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-grey-200 mb-8">
        Frequently asked questions
      </h2>
      <div className="bg-white rounded-lg py-4 divide-y">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PasteySection;
