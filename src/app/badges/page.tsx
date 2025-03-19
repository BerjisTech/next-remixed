import React from "react";
import SideNav from "./_sideNav";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { ArrowRight } from "lucide-react";
import StarRating from "@/components/shared/starRating";

const navs = [
  { name: "Certified PRO Network", link: `/badges/#cpn` },
  { name: "Specialist screening", link: `/badges/#specialist-screening` },
  { name: "Native speaker verification", link: `/badges/#speaker-verification` },
  { name: "Identity verification", link: `/badges/#identity-verification` },
  { name: "Credential verification", link: `/badges/#credential-verification` },
];
const page = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-6 mt-5">
      <div className="flex flex-col gap-3">
        {" "}
        <SideNav navs={navs} />
      </div>
      <div className="col-span-4">
        <p className="bg-primary-50 text-gray-700 p-4 rounded-custom flex items-center gap-2">
          <Image
            src="/next/next_assets/images/icons/puzzle-piece-01.svg"
            alt="Puzzle icon"
            width="24"
            height="24"
          />
          <i>This page is still a prototype. It will be functional soon!</i>
        </p>

        {/* Credentials */}
        <div className="grid grid-cols-5 gap-4 rounded-custom p-6 w-full bg-accent my-4">
          <div className="col-span-4 flex flex-col gap-3">
            <p className="text-primary-500 text-2xl font-bold font-merriweather">
              Verify your credentials
            </p>
            <p className="text-base text-gray-700">
              Submit copies of your academic or professional qualifications to validate your
              expertise.
            </p>
            <div>
              <Button className="mt-5">
                Submit your credentials <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="col-start-5 flex items-start justify-center">
            <Image
              src="/next/next_assets/images/svg/badges/badge-ad.svg"
              alt="Puzzle icon"
              width="80"
              height="80"
            />
          </div>
        </div>

        {/* CPN */}
        <div className="grid grid-cols-5 gap-4 rounded-custom p-6 w-full bg-accent my-4">
          <div className="col-span-4 flex flex-col gap-3">
            <p className="text-primary-500 text-2xl font-bold font-merriweather">
              Become a Certified PRO
            </p>
            <p className="text-base text-gray-700">
              Join a community of top-tier translators and companies who have proven their
              qualifications through a rigorous screening process.
            </p>
            <div>
              <Button className="mt-5">
                Start application <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="col-start-5 flex items-start justify-center">
            <Image
              src="/next/next_assets/images/svg/badges/badge-ad-cpn.svg"
              alt="Puzzle icon"
              width="80"
              height="80"
            />
          </div>
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-5 gap-4 rounded-custom p-6 w-full bg-accent my-4">
          <div className="col-span-4 flex flex-col gap-3">
            <p className="text-primary-500 text-2xl font-bold font-merriweather">
              Verify your specializations
            </p>
            <p className="text-base text-gray-700">
              Highlight your skills by creating a specialist profile. Submit proof of expertise to
              get verified in specific services.
            </p>
            <div>
              <Button className="mt-5">
                Start application <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="col-start-5 flex items-start justify-center">
            <Image
              src="/next/next_assets/images/svg/badges/badge-ad.svg"
              alt="Puzzle icon"
              width="80"
              height="80"
            />
          </div>
        </div>

        {/* Verifiy identity & NLV */}
        <div className="grid grid-cols-2 grid-rows-1 gap-3">
          <div>
            <div className="grid grid-cols-5 gap-4 rounded-custom p-6 w-full bg-accent my-4">
              <div className="col-span-4 flex flex-col gap-3">
                <p className="text-primary-500 text-2xl font-bold font-merriweather">
                  Verify your identity
                </p>
                <p className="text-base text-gray-700">
                  Choose a verification method to confirm your full name and earn the VID badge.
                </p>
                <div>
                  <Button className="mt-5">
                    Request ID verification <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="col-start-5 flex items-start justify-center">
                <Image
                  src="/next/next_assets/images/svg/badges/badge-ad.svg"
                  alt="Puzzle icon"
                  width="80"
                  height="80"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-4 rounded-custom p-6 w-full bg-accent my-4">
              <div className="col-span-4 flex flex-col gap-3">
                <p className="text-primary-500 text-2xl font-bold font-merriweather">
                  Verify your native language
                </p>
                <p className="text-base text-gray-700 font-normal">
                  Submit a short recording about a topic of interest to become a community-verified
                  native speaker.
                </p>
                <div>
                  <Button className="mt-5">
                    Request verification <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="col-start-5 flex items-start justify-center">
                <Image
                  src="/next/next_assets/images/svg/badges/badge-ad-nlv.svg"
                  alt="Puzzle icon"
                  width="80"
                  height="80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 grid-rows-1 gap-3 rounded-custom p-6 w-full bg-accent my-4">
          <p className="text-primary-500 text-2xl font-bold font-merriweather">
            Earn more badges through courses and events
          </p>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Massa elit quis ipsum pulvinar non natoque
            tortor volutpat nam.
          </p>

          <div className="p-5 bg-white rounded-custom flex flex-row items-center justify-center gap-6">
            {[1, 2, 3].map((_, i) => (
              <div className="w-full h-full" key={i}>
                <Image
                  className="rounded-custom"
                  src="/next/next_assets/images/fixed-aspect-ratio-spacer.png"
                  alt="Puzzle icon"
                  height={300}
                  width={300}
                  objectFit="cover"
                />
                <p className="text-base text-gray-700 my-3">
                  Clinical Trials and Medical Documentation: Resources and Translation Strategies
                  for New Translators
                </p>
                <div className="flex flex-row gap-2 items-center justify-start">
                  <div>
                    <Image
                      className="border border-primary rounded-custom"
                      src="/next/next_assets/images/image-1-1.png"
                      alt="Puzzle icon"
                      height={50}
                      width={50}
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-primary">John Doe</p>
                    <p className="text-xs text-gray-500">Medical Translator</p>
                    <StarRating size="small" rating={5} readonly={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
