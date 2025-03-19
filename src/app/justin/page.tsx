import React from "react";
import MemorialTitle from "@/app/justin/memorialTitle";
import Image from "next/image";
import ImageCarousel from "@/app/justin/_imageCarousel";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Chlebus",
  description: "Celebrating Justin Chlebus",
};

const Justin = () => {
  return (
    <div className="bg-accent dark:bg-dark">
      <MemorialTitle />

      <section className="max-w-6xl mx-auto overflow-hidden py-12">
        <div className="mx-auto flex flex-col lg:flex-row px-6 gap-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-1/2 w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/next/next_assets/images/staff/justin.jpg"
              alt="about pic"
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* <!-- Right Column --> */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="font-merriweather text-primary text-2xl font-bold">Justin Chlebus</h1>
            <p className="text-primary font-light mb-5">August 28th '85 - September 2nd '07</p>
            <p className="mb-3">
              Justin Chlebus began working at ProZ in March of 2005 and served as a developer and
              systems administrator for two and a half years. Dedicating himself to the service of
              the ProZ community, he made monumental contributions to the site and company, and also
              helped thousands of people around the world to get the most from it. He died on
              September 2, 2007, having just celebrated his 22nd birthday.
            </p>
            <p className="mb-3">
              Justin's extraordinary warmth and enthusiasm could be felt by anyone who came into
              contact with him. He was brilliant, and was always ready to drop everything to help
              someone out. Those of us who worked with him every day are blessed to have known such
              a bright and good spirit. He will be sorely missed.
            </p>
            <p className="text-dark dark:text-white mb-3">
              Condolences may be expressed in{" "}
              <Link href="https://www.proz.com/topic/82861" target={"_blank"}>
                <span className="text-primary hover:underline">this forum thread</span>
              </Link>
              , or his{" "}
              <Link
                href="https://www.maurerfuneralhome.com/guestbook/5253727"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary hover:underline">obituary page</span>
              </Link>
              .
            </p>
          </div>
        </div>

        {/*<MemSlider />*/}
        <div className="w-full max-w-3xl mx-auto overflow-hidden flex justify-center p-20 items-center">
          <ImageCarousel />
        </div>

        <div className="flex flex-col text-center items-center mx-auto px-8 gap-3">
          <p className="text-center items-center p-4 bg-secondary dark:text-white flex rounded-xl">
            <Image
              className="w-8 h-8 me-2 float-left"
              src="/next/next_assets/images/noto-v1_light-bulb.svg"
              alt="icon"
              width={32}
              height={32}
            />
            If you have any pictures of Justin you would like to see on this page, please email them
            to support@proz.com
          </p>
          <Link href="/about">
            <Button size="lg" className="">
              <p className="text-white text-base">Back to About ProZ </p>
              <i className="material-symbols-outlined">arrow_back</i>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Justin;
