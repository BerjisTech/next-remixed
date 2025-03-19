import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import FrequentlyAskedQuestions from "@/components/shared/frequentlyAskedQuestions";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ProZ recruit - Vendor management",
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-accent px-1/5">
        <div className="bg-[url('/next/next_assets/images/27884383_white_linen_texture_1.png')] justify-center items-center gap-6 inline-flex">
          <div className="w-2/5 shrink flex-col justify-center items-start inline-flex">
            <div className="self-stretch h-[222px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[60px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-primary text-5xl font-semibold">ProZ Recruit</div>
              </div>
              <div className="self-stretch text-dark text-xl font-normal">
                Manage recruitment of linguists and other localization professionals. Simplifying
                your recruitment initiatives by allowing you to select, organize and communicate
                with candidates in one workspace.
              </div>
            </div>
            <div className="px-5 py-3 bg-primary rounded-xl shadow border border-primary justify-center items-center gap-2 inline-flex">
              <Link href="/recruit" className="text-white text-base font-semibold leading-normal">
                My ProZ Recruit dashboard
              </Link>
            </div>
          </div>
          <div className="w-2/5">
            <div className="justify-center items-center inline-flex">
              <Image
                src="/next/next_assets/images/recruit-hero.svg"
                alt="Recruit Hero"
                width={300} // Set a reasonable default width
                height={200} // Set a reasonable default height
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center items-center p-4 inline-flex">
        <div className="self-stretch text-center text-dark p-2 my-3 text-4xl font-semibold">
          ProZ Recruit features
        </div>
        <div className="flex-col justify-center my-2 gap-4 flex">
          <div className="justify-start gap-6 inline-flex">
            <div className="w-1/2 pb-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <Image
                    src="/next/next_assets/images/recruit_features_1.svg"
                    alt="Recruit Features"
                    width={300} // Set a reasonable default width
                    height={200} // Set a reasonable default height
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-3 flex">
                <div className="text-dark text-2xl font-semibold">Centralized Recruitment</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-[#667085] text-sm font-normal leading-tight">
                    Manage all candidates in one space, making tracking of status and communications
                    easier than ever.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pb-4 flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <Image
                    src="/next/next_assets/images/recruit_features_2.svg"
                    alt="Recruit Features"
                    width={300} // Set a reasonable default width
                    height={200} // Set a reasonable default height
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-3 flex">
                <div className="text-dark text-2xl font-semibold">Targeted job postings</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-[#667085] text-sm font-normal leading-tight">
                    Build lists with all your preferred vendors and publish job postings only for
                    them.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start gap-6 inline-flex">
            <div className="w-1/2 pb-4 flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <Image
                    src="/next/next_assets/images/recruit_features_3.svg"
                    alt="Recruit Features"
                    width={300} // Set a reasonable default width
                    height={200} // Set a reasonable default height
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-center items-start gap-3 flex">
                <div className="text-dark text-2xl font-semibold">Mass Emailing</div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-[#667085] text-sm font-normal leading-tight">
                    Reach out to candidates and vendors quickly with our built-in mass emailing
                    feature.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pb-4 flex-col justify-start items-start gap-6 inline-flex">
              <div className="shadow justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <Image
                    src="/next/next_assets/images/recruit_features_2.svg"
                    alt="Recruit Features"
                    width={300} // Set a reasonable default width
                    height={200} // Set a reasonable default height
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-center items-start gap-3 flex">
                <div className="text-dark text-2xl font-semibold">Online Payroll Creation</div>
                <div className="text-[#667085] text-sm font-normal leading-tight">
                  Build a payroll from your lists and pay your vendors through ProZ*Pay free of
                  hassle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14 bg-primary flex-col justify-center items-center gap-3 inline-flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-center text-white text-4xl font-semibold">
            Make the most out of ProZ Recruit!
          </div>
          <div className="px-20 self-stretch text-center text-white text-xl font-normal">
            While all ProZ.com users have access to ProZ Recruit to manage their liked profiles and
            filtered providers, Business members have access to all the features above and much
            more.
          </div>
        </div>
        <Link
          href="/membership/business"
          target="_blank"
          className="px-5 py-3 bg-accent rounded-xl border border-accent justify-center items-center gap-2 inline-flex"
        >
          <div className="text-primary text-base font-semibold leading-normal">
            Purchase Business membership
          </div>
          <div className="w-5 h-5">
            <Image
              src="/next/next_assets/images/icons/fluent_arrow-up-24-regular.svg"
              alt="Fluent Arrow"
              width={20} // w-5 = 20px
              height={20} // h-5 = 20px
            />
          </div>
        </Link>
      </div>

      <div className="flex-col justify-start items-start px-4 py-8 inline-flex">
        <div className="mb-2 w-full justify-center items-center gap-2.5 inline-flex">
          <div className="text-dark text-4xl font-semibold">The process</div>
          <div className="mr-12 justify-center items-center gap-10 flex">
            <div className="cursor-pointer w-12 h-12 bg-accent rounded-full justify-center items-center flex">
              <div className="w-12 h-12 -rotate-180 flex-col justify-center items-center flex">
                <Image
                  src="/next/next_assets/images/icons/arrow-right.svg"
                  alt="Left Arrow"
                  width={48} // w-12 = 48px
                  height={48} // h-12 = 48px
                />
              </div>
            </div>
            <div className="cursor-pointer w-12 h-12 bg-accent rounded-full justify-center items-center flex">
              <div className="w-12 h-12 flex-col justify-center items-center flex">
                <Image
                  src="/next/next_assets/images/icons/arrow-right.svg"
                  alt="Right Arrow"
                  width={48} // w-12 = 48px
                  height={48} // h-12 = 48px
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="w-8 py-1 bg-accent rounded-full justify-center items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">1</div>
              </div>
              <div className="self-stretch text-dark text-2xl font-semibold">Create a list</div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-sm text-dark-blue-hue font-normal">
                Collect the names of candidates in cloud-based live mini databases - ProZ.com lists
                - with links to their profiles.
                <br />
                Create lists for projects, clients language pairs, whatever category helps you
                organize your recruitment.
              </div>
            </div>
          </div>
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 py-1 bg-accent rounded-full justify-center items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">2</div>
              </div>
              <div className="text-dark text-2xl font-semibold">Add talents to the list</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-[#667085] text-sm font-normal leading-tight">
                Search the largest database of linguists in the world using filters to find the
                perfect match for your jobs to add to your list.
              </div>
            </div>
          </div>
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="w-8 py-1 bg-accent rounded-full justify-center items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">3</div>
              </div>
              <div className="self-stretch text-dark text-2xl font-semibold">
                Review your talent’s qualifications
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-[#667085] text-sm font-normal leading-tight">
                From the list, all it takes is a click to review candidates’ skills, abilities,
                experience, previous feedback and other qualifications, in a standard view
              </div>
            </div>
          </div>
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="w-8 py-1 bg-accent rounded-full justify-center items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">4</div>
              </div>
              <div className="self-stretch text-dark text-2xl font-semibold">
                Sort talent in folders
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-[#667085] text-sm font-normal leading-tight">
                Create folders and sort the talent you added to your lists. Choose categories that
                simplify your tracking of the recruitment stages
              </div>
            </div>
          </div>
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="w-8 py-1 bg-accent rounded-full justify-center items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">5</div>
              </div>
              <div className="self-stretch text-dark text-2xl font-semibold">Organize emails</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-[#667085] text-sm font-normal leading-tight">
                Send and receive emails to the linguists in your list and store them in the list
                message board. No more looking for emails in your inbox
              </div>
            </div>
          </div>
          <div className="p-4 min-w-64 min-h-72 bg-[#efede3] rounded-3xl flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-8 pl-[13px] pr-2 py-1 bg-accent rounded-full justify-end items-center inline-flex">
                <div className="text-primary text-base font-medium leading-normal">6</div>
              </div>
              <div className="text-dark text-2xl font-semibold">Share lists</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-[#667085] text-sm font-normal leading-tight">
                Easily share lists with other recruiters working with you, or the project managers
                who will use those lists to outsource jobs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex-col justify-start items-center my-4 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-8 flex">
          <div className="w-full px-24 flex-col justify-start items-start gap-4 flex">
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>

      <div className="p-12 bg-accent">
        <div className="text-center text-dark text-4xl font-semibold">
          What people say about the ProZ Recruit
        </div>
        <div className="text-center text-primary text-sm font-medium">Read all</div>
        <div className="my-6 mx-6 justify-center items-center inline-flex">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
