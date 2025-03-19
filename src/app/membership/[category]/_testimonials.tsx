import TestimonialCard from "@/components/shared/cards/testimonialCard";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { TestimonialMembership } from "@/interfaces/testimonial";
import clsx from "clsx";

const chunkArray = (array: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Testimonials = ({
  membershipTestimonials,
  transparent = false,
}: {
  membershipTestimonials: TestimonialMembership[];
  transparent?: boolean;
}) => {
  const testimonialChunks = chunkArray(membershipTestimonials, 3); // Group testimonials into chunks of 3

  return (
    <div className={clsx("mb-10 dark:bg-black", { "bg-primary-50": !transparent })}>
      <div className="max-w-7xl py-16 flex flex-col justify-start items-center gap-16 m-auto">
        <div className="text-text-dark-blue-hue lg:text-[30px] px-10 text-2xl font-merriweather text-center">
          What other freelancers have said <br /> about their membership experience
        </div>
        <Carousel className="w-full relative">
          <CarouselContent className="mb-10">
            {testimonialChunks.map((chunk, index) => (
              <CarouselItem
                key={index}
                className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-center items-center lg:justify-around"
              >
                {chunk.map((testimonial, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="p-4 lg:self-stretch max-sm:w-[90%] sm:w-1/2 lg:w-1/3"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Centered Navigation Buttons */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-10 flex space-x-4">
            <CarouselPrevious className="p-2 rounded-full bg-primary-300 text-white" />
            <CarouselNext className="p-2 rounded-full bg-primary-300 text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
