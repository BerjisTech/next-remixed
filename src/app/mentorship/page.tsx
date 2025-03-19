import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import MeetMentors from "@/app/mentorship/_meetMentors";

export const metadata: Metadata = {
  title: "Mentoring Program",
  description:
    "The ProZ mentoring program is an initiative intended to provide a means for full members to meet other members who are well-established enough to take on an apprentice.",
};
const MentoringProgram = () => {
  return (
    <div>
      <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] dark:mix-blend-multiply bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold text-primary leading-tight mb-3 text-center lg:text-left">
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight">
                ProZ <br /> mentoring program
              </span>
            </h1>
            <p className="font-poppins text-base text-center sm:text-left text-grey-900 dark:text-grey-200">
              The ProZ mentoring program is an initiative intended to provide a means for full
              members to meet other members who are well-established enough to take on an
              apprentice.
            </p>
          </div>

          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/462450928"
                title="Mentoring program overview video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-2 py-16">
        <div className="flex flex-col lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 w-full h-auto rounded-2xl overflow-hidden">
            <Image
              src="/next/next_assets/images/mentorship/woman-mentor.jpg"
              alt="Woman mentoring"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto"
            />
          </div>
          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 lg:mb-0 flex flex-col">
            <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
              The program is particularly useful for members who, for example, have completed formal
              training in translation or who have acquired translation knowledge, but have a lack of
              practical experience. Site members seeking advice on translation business-related
              topics are also welcomed.
              <br /> <br />
              For mentors, the program represents a useful means not only of sharing their
              experience, but also of finding new partners for growing translation teams (the
              program may prove similar to the "internship" programs that often lead to full-time
              employment in other industries).
              <br /> <br />
              Participation in this program is open to ProZ.com members, with members of the
              Certified PRO Network fulfilling the role of mentors.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-primary-800 py-12 overflow-hidden dark:bg-primary-800">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/mentorship/cta-bg.png')] mix-blend-multiply bg-cover bg-no-repeat"></div>
        <div className="flex flex-col max-w-5xl mx-auto p-6 gap-8 relative z-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-3xl text-background dark:text-grey-200 font-bold font-merriweather leading-[38px]">
              Join the mentorship program
            </h3>
            <p className="font-poppins text-base text-center text-background dark:text-grey-200">
              Participation in this program is open to ProZ.com members, with members of the
              Certified PRO Network fulfilling the role of mentors.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-3">
              <Button
                className="h-16 px-8 text-xl font-semibold dark:text-white"
                variant="secondary"
              >
                Find a mentor
              </Button>
              <Button
                className="h-16 px-8 text-xl font-semibold dark:text-white"
                variant="secondary"
              >
                Become a mentor
              </Button>
            </div>
            <Link href="#">
              <p className="text-lg text-center font-semibold text-primary-200 leading-7">
                Advice for members with a disability
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Meet mentors */}
      <MeetMentors />

      {/*Testimonials*/}
      <div className="w-full py-20 bg-primary-50 dark:bg-grey-800 justify-start items-center gap-16 m-auto">
        <div className="flex flex-col max-w-6xl px-4 gap-8 mx-auto">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Member testimonials
          </h2>
          <div className="flex flex-col lg:flex-row grow shrink basis-0 self-stretch justify-center items-start gap-5 w-full mx-auto">
            {TESTIMONIALS.filter((testimonial) => testimonial.type === "mentorship")
              .slice(0, 3)
              .map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringProgram;
