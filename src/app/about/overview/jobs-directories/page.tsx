import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
export const metadata: Metadata = {
  title: "Jobs & Directories",
  description: "A summary of the job systems and directories at ProZ",
};
const JobsDirectories = () => {
  return (
    <div>
      {/*Hero*/}
      <section>
        <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
          <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="text-5xl text-center font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
                Jobs & directories
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto flex flex-col gap-8 py-12 px-6">
        <div className="flex flex-col bg-accent rounded-3xl p-6 gap-3">
          <div className="w-24 h-24 flex justify-center items-center rounded-lg mb-4">
            <Image
              src="/next/next_assets/images/jobs-directories/directories-icon.png"
              alt="Directories icon"
              width={800}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-grey-700 text-2xl font-bold font-merriweather leading-[38px]">
              Directories
            </h3>
            <p className="text-black text-lg font-normal leading-7">
              With over 1 million registered users, ProZ is home to the largest community of
              translators and interpreters.
            </p>
          </div>
          <div className="justify-start flex flex-wrap gap-2">
            <Link href="/find">
              <Button
                className="bg-transparent hover:bg-transparent border border-primary-500 hover:shadow-md text-primary font-semibold shadow-none focus:ring-4 text-base focus:ring-blue-300 transition-all"
                variant="default"
                size="default"
              >
                Find
                <span className="text-xs font-normal leading-[18px]">(Brought to you by AI)</span>
              </Button>
            </Link>
            <Link href="/providers/translators">
              <Button variant="default" size="default">
                Translators
              </Button>
            </Link>
            <Link href="/providers/interpreters">
              <Button variant="default" size="default">
                Interpreters
              </Button>
            </Link>
            <Link href="/providers/subtitlers">
              <Button variant="default" size="default">
                Subtitlers
              </Button>
            </Link>
            <Link href="/providers/lscs">
              <Button variant="default" size="default">
                Providers
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-accent rounded-3xl p-6 gap-3">
          <div className="w-24 h-24 flex justify-center items-center rounded-lg mb-4">
            <Image
              src="/next/next_assets/images/jobs-directories/job-posting-icon.png"
              alt="Directories icon"
              width={800}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-grey-700 text-2xl font-bold font-merriweather leading-[38px]">
              Job posting system
            </h3>
            <p className="text-black text-lg font-normal leading-7">
              A job posting system for outsourcers seeking quotes from language professionals.
              Receive emails when jobs of your interest are posted. The job system is closely
              related to the Blue Board which is a database of language job outsourcers with
              feedback from service providers.
            </p>
          </div>
          <div className="justify-start flex flex-wrap gap-2">
            <Link href="/opportunities">
              <Button variant="default" size="default">
                Browse jobs
              </Button>
            </Link>
            <Link href="/job-project-form">
              <Button variant="default" size="default">
                Post a job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDirectories;
