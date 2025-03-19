"use client";
import React, { useCallback, useEffect, useState } from "react";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { TESTIMONIALS } from "@/constants/common";
import { Testimonial } from "@/interfaces/testimonial";
import Carousal from "./_carousal";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";

const SuccessStories = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState<number>(3);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    console.log("Setting local testimonials");
    const testimonialsShuffled = shuffleArray([...TESTIMONIALS]).slice(0, 30);
    // .map(testimonial => ({
    //     ...testimonial,
    //     avatar: `https://avatar.iran.liara.run/username?username=${encodeURIComponent(testimonial.name)}`
    // }));
    setTestimonials(testimonialsShuffled);
    setTotalPages(Math.ceil(testimonials.length / testimonialsPerPage));
  }, []);

  const shuffleArray = (array: Testimonial[]): Testimonial[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const updateVisibleTestimonials = useCallback((): void => {
    const start = (currentPage - 1) * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    setVisibleTestimonials(testimonials.slice(start, end));
  }, [testimonials]);

  useEffect(() => {
    testimonials.length > 0 && updateVisibleTestimonials();
  }, [testimonials]);

  return (
    <React.Fragment>
      <div className="grid grid-cols-6 w-full gap-3 container">
        <div className="col-span-1 flex flex-col items-start justify-center">
          <div>
            <svg
              width="55"
              height="43"
              viewBox="0 0 55 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
              preserveAspectRatio="none"
            >
              <path
                d="M20.8972 0C22.8594 0.490545 24.1348 2.06029 24.7235 4.70923C21.8783 6.27898 18.9841 8.63359 16.0408 11.7731C13.0976 14.9126 11.0373 18.3464 9.85996 22.0745H10.3015C14.0296 22.0745 16.9238 23.0556 18.9841 25.0178C21.1425 26.8819 22.2217 29.3346 22.2217 32.376C22.2217 35.2211 21.1425 37.6248 18.9841 39.587C16.9238 41.5492 14.422 42.5303 11.4788 42.5303C7.94683 42.5303 5.15073 41.3039 3.09044 38.8512C1.03015 36.3004 0 33.259 0 29.727C0 23.7424 1.91313 18.3954 5.73938 13.6862C9.56563 8.97697 14.6183 4.4149 20.8972 0ZM50.33 0C52.2921 0.490545 53.5676 2.06029 54.1562 4.70923C51.311 6.27898 48.4168 8.63359 45.4736 11.7731C42.5303 14.9126 40.47 18.3464 39.2927 22.0745H39.7342C43.4623 22.0745 46.3565 23.0556 48.4168 25.0178C50.5752 26.8819 51.6544 29.3346 51.6544 32.376C51.6544 35.2211 50.5752 37.6248 48.4168 39.587C46.3565 41.5492 43.8548 42.5303 40.9115 42.5303C37.3796 42.5303 34.5834 41.3039 32.5232 38.8512C30.4629 36.3004 29.4327 33.259 29.4327 29.727C29.4327 23.7424 31.3458 18.3954 35.1721 13.6862C38.9984 8.97697 44.051 4.4149 50.33 0Z"
                fill="#D3ECEC"
              ></path>
            </svg>
            <p className="w-52 text-[27.649999618530273px] mb-10 font-semibold text-left text-black dark:text-accent-foreground">
              Featured Stories
            </p>
          </div>
        </div>
        <div className="col-span-5 col-start-2 min-h-[354px]  rounded-[45px] my-[50px] relative pl-10">
          {/* <div className="absolute h-full bg-slate-400 bg-green-gradient rounded-[45px] w-[90%] right-0"></div> */}
          {testimonials.length > 0 && (
            <Carousal showTestimonials={true} preloadedTestimonials={testimonials} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 px-20 w-[80%] m-auto container">
        <div className="col-span-2 flex justify-center items-center">
          <Image
            src="/next/next_assets/images/image-33.png"
            alt="image-14.png"
            width={560}
            height={385}
            className="rounded-xl mr-10 drop-shadow-[16px_16px_rgba(116,195,194,1)]"
          />
        </div>
        <div className="col-span-1 col-start-3 flex items-center">
          <div>
            <p className="font-bold">How has your membership helped your career?</p>
            <Button className="my-5">Share a story</Button>
          </div>
        </div>
      </div>

      <div className="bg-cards-01 dark:bg-black py-10 mt-20">
        <div className="container">
          <p className="font-bold">Success stories</p>
          <div className="flex flex-col lg:flex-row gap-5 items-center my-5">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial}></TestimonialCard>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center my-5">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial}></TestimonialCard>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 items-center my-5">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial}></TestimonialCard>
            ))}
          </div>
          <div className="flex justify-end">
            <Button>Show more</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessStories;
