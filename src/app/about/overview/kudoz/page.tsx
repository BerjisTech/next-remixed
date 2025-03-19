import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KudoZ™",
  description:
    "A community-based terminology network that provides a framework for translators and others to assist each other with translations or explanations of terms and short phrases.",
};

const KudoZOverview = () => {
  return (
    <div>
      {/*Hero*/}
      <section className="">
        <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
          <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="text-5xl text-center font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
                KudoZ™ translation help network
              </h1>
              <p className="font-poppins text-xl text-center text-grey-700 dark:text-grey-200">
                Providing ProZ users a way to offer each other, and guests, free assistance in
                translating tough terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is KudoZ */}
      <div className="max-w-6xl mx-auto flex flex-col gap-2 pt-12">
        <div className="flex flex-col md:flex-row items-center px-4 gap-3 md:gap-6 mb-6">
          {/* <!-- Left Column --> */}
          <div className="md:w-1/2 flex flex-col gap-2">
            <h3 className="text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
              What is KudoZ™?
            </h3>
            <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
              KudoZ is a community-based terminology network that provides a framework for
              translators and others to assist each other with translations or explanations of terms
              and short phrases.
              <br />
              <br />
              There are two broad areas: "help" KudoZ and "glossary-building" KudoZ. Both share many
              elements in common but have different objectives:
            </p>
          </div>
          {/* <!-- Right Column --> */}
          <div className="md:w-1/2 w-full h-auto rounded-3xl overflow-hidden">
            <Image
              src="/next/next_assets/images/kudoz/what-is-kudoz.jpg"
              alt="Group of people working together"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-2">
        <div className="flex flex-col md:flex-row items-stretch px-4 gap-3 md:gap-6 mb-6">
          {/* Box 1 */}
          <div className="md:w-1/2 flex flex-col gap-2 flex-1">
            <div className="flex flex-col bg-cards-10 dark:bg-primary-100 rounded-2xl justify-start gap-3 p-6 flex-1">
              <div className="flex w-8 h-8 p-6 justify-center items-center bg-primary-600 rounded-full mb-2">
                <span className="items-center justify-center text-grey-25">01</span>
              </div>
              <p className="text-grey-800 text-base leading-relaxed">
                Through <span className="font-bold">"help"</span> KudoZ™, ProZ.com users offer each
                other, and guests, free assistance in translating tough terms. The question is
                posted by someone in need of term help, who should then select the "most helpful"
                among the answers received. Take a look at our flash introduction to learn more. In
                this type of KudoZ™, the emphasis is on helping the asker-- the fact that an
                archive of previously posted terms with suggested translations has been built is a
                planned, yet peripheral, benefit.
              </p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="md:w-1/2 flex flex-col gap-2 flex-1">
            <div className="flex flex-col bg-cards-09 dark:bg-gray-200 rounded-2xl justify-start gap-3 p-6 flex-1">
              <div className="flex w-8 h-8 p-6 justify-center items-center bg-primary-600 rounded-full mb-2">
                <span className="items-center justify-center text-grey-25">02</span>
              </div>
              <p className="text-grey-800 text-base leading-relaxed">
                The purpose of the <span className="font-bold">"glossary-building"</span> KudoZ
                (GBK) is that of coordinating the efforts of willing members of the ProZ.com
                community in building up an authoritative glossary of terms and their translations
                in many languages and fields. GBK questions are posted for translation selectively
                by a GBK team. Community selection is be used to ascertain the most accurate
                translations from among those proposed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How does KudoZ™ work? */}
      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-grey-700 text-3xl text-center font-bold font-merriweather leading-[44px]">
              How does KudoZ™ work?
            </h3>
            <p className="text-base text-center text-grey-700">
              A "help" KudoZ™ 'transaction' involves three steps:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-stretch px-4">
            {/* Box 1 */}
            <div className="flex-1 flex flex-col bg-accent rounded-2xl p-6">
              <div className="w-16 h-16 flex justify-center items-center rounded-lg mb-4">
                <Image
                  src="/next/next_assets/images/kudoz/step-1.png"
                  alt="Step 1 icon"
                  width={800}
                  height={800}
                  className="object-contain w-full h-auto"
                />
              </div>
              <p className="text-gray-700 dark:text-grey-200 text-base leading-relaxed">
                A person in need of translation assistance posts a term or phrase, providing context
                and the desired target language.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex-1 flex flex-col bg-accent rounded-2xl p-6">
              <div className="w-16 h-16 flex justify-center items-center rounded-lg mb-4">
                <Image
                  src="/next/next_assets/images/kudoz/step-2.png"
                  alt="Step 2 icon"
                  width={800}
                  height={800}
                  className="object-contain w-full h-auto"
                />
              </div>
              <p className="text-gray-700 dark:text-grey-200 text-base leading-relaxed">
                A site user suggests a translation, provides an explanation and some references.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex-1 flex flex-col bg-accent rounded-2xl p-6">
              <div className="w-16 h-16 flex justify-center items-center rounded-lg mb-4">
                <Image
                  src="/next/next_assets/images/kudoz/step-3.png"
                  alt="Step 3 icon"
                  width={800}
                  height={800}
                  className="object-contain w-full h-auto"
                />
              </div>
              <p className="text-gray-700 dark:text-grey-200 text-base leading-relaxed">
                The asker reviews the suggestions and awards 1 to 4 points to the site user who
                provided the translation deemed to be the most useful or the most accurate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How do I earn points? */}
      <div className="max-w-6xl mx-auto flex flex-col gap-2 py-16">
        <div className="flex flex-col lg:flex-row items-center px-4 gap-3 md:gap-6 mb-6">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-3xl overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Mw36Wrrir84?si=MUGpu1VxetTOVFYS"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 flex flex-col gap-2">
            <h3 className="text-left text-grey-700 text-3xl font-bold font-merriweather leading-[44px]">
              How do I earn KudoZ™ points?
            </h3>
            <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
              KudoZ™ points are earned by answering KudoZ™ questions and having these answers
              selected by KudoZ™ askers:
              <br />
              <br />
              Someone posts a KudoZ™ question 👉 You propose an answer 👉 If your answer is
              selected as the most helpful, you are awarded 1-4 KudoZ points.
            </p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-grey-200">
              <li>
                Posting KudoZ™ answers does not award KudoZ™ points, but having these answers
                selected by askers does.
              </li>
              <li>
                Since KudoZ™ points help you to improve your directory position (
                <Link
                  href="https://help.proz.com/how-is-placement-in-the-directory-determined"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  see how exactly
                </Link>
                ) , you are recommended to earn KudoZ™ points in your top language pair(s) and
                field(s) of expertise at least.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KudoZOverview;
