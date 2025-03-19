import React, { Suspense } from "react";
import HeroSection from "./_heroSection";
import BenefitsTable from "./_benefitsTable";
import Testimonials from "./_testimonials";
import { getTestimonials } from "@/server/data/testimonials";
import { TestimonialMembership } from "@/interfaces/testimonial";
import { Button } from "@/components/shadcn/button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import DiscountBanner from "./_discountTimer";
import { getRedirectBaseUrl } from "@/utils/helpers";
import Cards from "./_cards";
import {
  getLocalPaymentContactData,
  getProfessionalMembershipBenefits,
} from "@/server/data/membership";
import { auth } from "../../../../auth.config";
import { ProPlanCategory } from "@/interfaces/membership";

interface PageProps {
  searchParams: { [key: string]: string | undefined };
  params: { category: string };
}

export default async function page({ params, searchParams }: PageProps) {
  const session = await auth();
  const testimonials: TestimonialMembership[] | null = await getTestimonials("membership", 9);
  const localContactData = session?.user
    ? await getLocalPaymentContactData(session?.user.entity_id)
    : null;
  const planBenefits: ProPlanCategory[] = await getProfessionalMembershipBenefits(false);
  return (
    <div className="w-full relative mb-20 text-dark-blue-hue">
      <HeroSection category={params?.category} />

      {/* Discount banner */}
      {params?.category === "discount" && <DiscountBanner />}

      {/*  Testimonials */}
      {params?.category === "discount" && testimonials && (
        <Testimonials transparent membershipTestimonials={testimonials} />
      )}

      {/* Business option */}
      {params?.category === "professional" && (
        <div className="max-w-7xl md:px-5 flex flex-row items-center justify-center m-auto my-10 mb-16 text-center">
          <p className="text-center w-full">
            Do you represent a business?{" "}
            <Link
              href={getRedirectBaseUrl() + "/business-membership"}
              className="font-bold hover:underline"
            >
              Business membership
            </Link>{" "}
            may suit you better.
          </p>
        </div>
      )}

      {/* Business options */}
      {params?.category === "pre-registration" && (
        <div className="max-w-7xl p-10 lg:px-10 flex flex-col lg:flex-row justify-center gap-5 lg:gap-0 lg:justify-between text-center lg:text-left items-center m-auto my-10 mb-16">
          <div className="basis-1/2">
            <h1 className="font-merriweather text-[30px]">
              Different options <br />
              for your ProZ experience
            </h1>
            <p>
              You can use the site for free, and evaluate membership later. Or you can get off to a
              good start now, at a discount. After registering, you will be re-directed here to
              choose the option that works best for you.
            </p>
          </div>
          <div className="basis-1/2 flex justify-end">
            <Link href={getRedirectBaseUrl() + "/register?origin=business-mem"}>
              <Button
                className="flex flex-col items-center justify-center p-10"
                variant="outline-business"
              >
                <span className="block">Representing a business?</span>
                <span>Click here if you are an outsourcer or end client.</span>
              </Button>
            </Link>
          </div>
        </div>
      )}

      {params?.category === "post-registration" && (
        <div className="max-w-7xl p-10 lg:px-10 flex flex-col lg:flex-row justify-center gap-5 lg:gap-0 lg:justify-between text-center lg:text-left items-center m-auto my-10 mb-16 text-dark-blue-hue">
          <div className="basis-1/2">
            <h1 className="font-merriweather text-[30px] ">
              Different options <br />
              for your ProZ experience
            </h1>
            <p className="">
              You can use the site for free, and evaluate membership later. Or you can get off to a
              good start now, at a discount.{" "}
              <span className="font-bold">These discounts are only valid for today.</span>
            </p>
          </div>
        </div>
      )}

      {params?.category === "discount" && (
        <div className="max-w-7xl p-10 lg:px-10 flex flex-col lg:flex-row justify-center gap-5 lg:gap-0 lg:justify-between text-center lg:text-left items-center m-auto my-10 mb-16">
          <div className="basis-1/2">
            <h1 className="font-merriweather text-[30px] ">
              Three different options <br /> for your ProZ experience, <br />
              at a limited-time discount
            </h1>
            <p className="">
              For a limited time, you can start your ProZ.com membership at a discount. <br />
              <span className="font-bold">
                Start getting more client contact, free training, tools, and opportunities, for
                less.
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Mem cards */}
      {params?.category === "professional" && (
        <Cards user={session?.user} localContactData={localContactData} />
      )}

      {/* Benefits table */}
      <Suspense fallback={<></>}>
        <BenefitsTable profPlanCategories={planBenefits} category={params?.category} />
      </Suspense>
      {params?.category !== "discount" && testimonials && (
        <Testimonials membershipTestimonials={testimonials} />
      )}

      {/* Success stories section */}
      <div className="relative flex justify-center bg-blend-multiply items-center p-10 lg:p-20 min-h-[500px] w-full bg-cover bg-[url('/next/next_assets/images/freelancer-success-stories.png')]">
        <div className="absolute inset-0 bg-purple-950/50 filter bg-blend-multiply"></div>
        <div className="relative flex items-center flex-col lg:flex-row text-center lg:text-left justify-center max-w-7xl gap-10 m-auto w-full">
          <div className="basis-1/2 flex flex-col items-center lg:items-start justify-center text-white">
            <h1 className="font-merriweather text-[30px] mb-5 text-center lg:text-left">
              Freelancer success stories
            </h1>
            <p>
              Everyone defines "success" in their own way, whether it is personal or business. Every
              freelance language professional, in particular, has their own story and their own ways
              of defining and reaching success. The Success Stories series takes a look at
              freelancers from around the world, and poses different questions, including "What has
              made you successful?" If you are looking for a bit of inspiration or just want to see
              what some fellow language professionals are up to, &nbsp;
              <Link
                href={"https://go.proz.com/success-stories"}
                className="hover:underline"
                target="_blank"
              >
                check out their success stories
              </Link>
              .
            </p>
          </div>
          <div className="basis-1/2 w-full">
            <div className="max-w-full w-full rounded-xl overflow-hidden bg-gray-500">
              <div className="relative pb-[56.25%] w-full">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/435688693?color=00cece&title=0&byline=0&portrait=0"
                  title="Vimeo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl m-auto p-10">
        <div className="flex flex-col lg:block">
          <h1 className="font-merriweather text-dark-blue-hue text-center text-[30px] my-10">
            The ProZ team is here to serve its members
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 text-center lg:text-left items-center">
            <div className="basis-1/2">
              <p>
                ProZ was created by a freelance translator, for freelance language professionals. It
                is maintained today by a team of 43, working from offices in the United States,
                Argentina, and Ukraine, as well as remotely from locations around the world (Spain,
                Kenya, Philippines, Germany, Pakistan...). If you are considering membership (and if
                you are serious about your career, you should!), the ProZ team wants to talk to you!
              </p>
            </div>
            <div className="basis-1/2 flex flex-col p-10 gap-5">
              <Link href={getRedirectBaseUrl() + "/help"} className="w-full">
                <Button className="p-5 min-w-[400px] py-8 text-white">
                  Talk to someone in the team <MoveUpRight />
                </Button>
              </Link>

              <Link href={getRedirectBaseUrl() + "/faq/membership.html"} className="w-full">
                <Button variant="outline" className="p-5 py-8 min-w-[400px]">
                  Frequently asked questions <MoveUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {(params?.category === "pre-registration" || params?.category === "post-registration") && (
          <div className="flex items-center justify-center mt-20">
            {params?.category === "pre-registration" && (
              <Link href={getRedirectBaseUrl() + "/register"}>
                <Button className="p-8 m-auto text-white">Create your ProZ account</Button>
              </Link>
            )}
            {params?.category === "post-registration" && (
              <Link href={getRedirectBaseUrl() + "/settings"}>
                <Button className="p-8 m-auto text-white">
                  Finish registration and start completing your profile
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
