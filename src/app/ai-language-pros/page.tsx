import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Language Professionals",
  description:
    "Discover how AI can amplify your skills, improve efficiency, and open new opportunities in translation, interpretation, and language services.",
};
const AIforLanguagePros = () => {
  return (
    <>
      {/*Hero section*/}
      <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-primary">
                AI for language professionals
              </span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-poppins text-xl text-center sm:text-left text-grey-700 dark:text-grey-200">
                Discover how AI can amplify your skills, improve efficiency, and open new
                opportunities in translation, interpretation, and language services.
              </p>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden">
            <Image
              src="/next/next_assets/images/ai-language-pros/ai-language-hero.png"
              alt="Robotic hand typing on a laptop keyboard"
              width={500}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Role of AI */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pt-16 px-4">
        <div className="col-span-12 md:col-span-4 min-h-[200px] md:h-[300px] relative rounded-3xl overflow-hidden">
          <Image
            src="/next/next_assets/images/ai-language-pros/robot-hand-left.png"
            alt="Robot and human shaking hands"
            fill
            sizes="100vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="col-span-12 md:col-span-5 bg-accent rounded-3xl p-6 flex flex-col md:h-auto gap-3">
          <h2 className="text-grey-700 dark:text-primary-200 text-2xl font-bold font-merriweather leading-[44px]">
            The role of AI in language services
          </h2>
          <p className="text-base text-left text-dark dark:text-accent-light">
            AI is transforming the language industry, providing tools that assist professionals in
            delivering faster, more accurate, and cost-effective services. <br />
            <br />
            Whether you are a translator, interpreter, editor, or content creator, AI can help
            streamline your workflow while maintaining human expertise at the core.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 min-h-[200px] md:h-[300px] w-full relative rounded-3xl overflow-hidden">
          <Image
            src="/next/next_assets/images/ai-language-pros/robot-hand-right.png"
            alt="Robot and human shaking hands"
            fill
            sizes="100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* AI tools for language professionals */}
      <div className="max-w-5xl mx-auto w-full px-4 flex flex-col md:flex-row gap-6 items-center pt-20">
        <div className="flex flex-col gap-3 md:w-1/2">
          <h2 className="text-grey-700 dark:text-primary-200 text-2xl font-bold font-merriweather leading-[44px]">
            The role of AI in language services
          </h2>
          <p className="text-base text-left text-dark dark:text-accent-light">
            AI is transforming the language industry, providing tools that assist professionals in
            delivering faster, more accurate, and cost-effective services. <br />
            <br />
            Whether you are a translator, interpreter, editor, or content creator, AI can help
            streamline your workflow while maintaining human expertise at the core.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-1/2">
          <div className="flex bg-cards-02 px-6 py-3 w-full rounded-2xl">
            <p className="font-merriweather text-center text-sm md:text-xl text-grey-700">
              Machine Translation (MT)
            </p>
          </div>
          <div className="flex bg-cards-04 px-6 py-3 w-full rounded-2xl">
            <p className="font-merriweather text-center text-sm md:text-xl text-grey-700">
              Speech Recognition & Dictation
            </p>
          </div>
          <div className="flex bg-accent px-6 py-3 w-full rounded-2xl">
            <p className="font-merriweather text-center text-sm md:text-xl text-grey-700">
              AI-Powered Writing Assistants
            </p>
          </div>
          <div className="flex bg-cards-08 px-6 py-3 w-full rounded-2xl">
            <p className="font-merriweather text-center text-sm md:text-xl text-grey-700">
              Terminology Management
            </p>
          </div>
        </div>
      </div>

      {/* Human AI collaboration */}
      <div className="max-w-5xl mx-auto w-full px-4 flex flex-col md:flex-row gap-6 items-center py-20">
        <div className="md:w-1/2 w-full h-auto rounded-3xl overflow-hidden">
          <Image
            src="/next/next_assets/images/ai-language-pros/ai-collabo.png"
            alt="Robotic hand typing on a laptop keyboard"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-1/2">
          <h2 className="text-grey-700 dark:text-primary-200 text-2xl font-bold font-merriweather leading-[44px]">
            The human-AI collaboration
          </h2>
          <p className="text-base text-left text-dark dark:text-accent-light">
            AI is a powerful assistant, but human expertise remains irreplaceable. Successful
            language professionals integrate AI into their workflow while ensuring quality, cultural
            nuance, and context accuracy.
            <br />
            <br />
            <span className="font-semibold">How to Make AI Work for You</span>
          </p>
          <ul className="list-disc pl-3">
            <li>Use AI to generate first drafts, then refine with human expertise.</li>
            <li>Verify AI-generated translations for cultural and contextual accuracy.</li>
            <li>Train AI models with custom glossaries for consistency in terminology.</li>
          </ul>
        </div>
      </div>

      {/* CTA: check out our AI tools */}
      <div className="relative bg-grey-100 dark:bg-primary-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/mentorship/cta-bg.png')] mix-blend-normal dark:mix-blend-multiply opacity-40 dark:opacity-100 bg-cover bg-no-repeat"></div>
        <div className="max-w-5xl mx-auto flex flex-col gap-4 py-20 px-4 relative z-10">
          <h2 className="text-grey-700 dark:text-primary-200 text-center text-2xl font-bold font-merriweather leading-[44px]">
            Check out our AI tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pastey card */}
            <Link href="/pastey" target="_blank" rel="noopener nonreferer">
              <div
                className="h-64 bg-cover overflow-hidden bg-center rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all flex flex-col gap-4 items-center justify-center"
                style={{
                  backgroundImage: "url('/next/next_assets/images/services/proz-pastey.svg')",
                }}
              >
                <div className="h-20">
                  <Image
                    src="/next/next_assets/images/pastey/pastey-logo-white.svg"
                    alt="Pastey logo"
                    width={500}
                    height={80}
                    className="object-contain w-full h-20"
                  />
                </div>
                <p className="text-center text-white text-lg">AI companion tool for translators</p>
              </div>
            </Link>
            {/* Cafetran card */}
            <Link href="/cafetran" target="_blank" rel="noopener nonreferer">
              <div className="h-64 bg-[#6F3503] overflow-hidden rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all flex flex-col gap-5 items-center justify-center">
                <div className="h-20">
                  <Image
                    src="/next/next_assets/images/cafetran/cafetran-logo-white.png"
                    alt="Cafetran Espresso logo"
                    width={500}
                    height={80}
                    className="object-contain w-full h-20"
                  />
                </div>
                <p className="text-center text-white text-lg">
                  A feature-rich, easy-to-use CAT tool. Now with Cafetran Linguistic AI!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIforLanguagePros;
