"use client";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { Testimonial } from "@/interfaces/testimonial";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface CarousalProps {
  showTestimonials: boolean;
  preloadedTestimonials: Testimonial[];
}
interface Carousel {
  testimonials: Testimonial[];
  visibleTestimonials: Testimonial[];
  currentIndex: number;
  interval: number;
  autoSlideInterval: any;
}

const Carousal: React.FC<CarousalProps> = ({ showTestimonials = false, preloadedTestimonials }) => {
  const [testimonialsPerPage, setTestimonialsPerPage] = useState<number>(3);
  const [carousels, setCarousels] = useState<Carousel[]>([
    {
      testimonials: [],
      visibleTestimonials: [],
      currentIndex: 0,
      interval: 2000,
      autoSlideInterval: null,
    },
    {
      testimonials: [],
      visibleTestimonials: [],
      currentIndex: 0,
      interval: 2500,
      autoSlideInterval: null,
    },
    {
      testimonials: [],
      visibleTestimonials: [],
      currentIndex: 0,
      interval: 2750,
      autoSlideInterval: null,
    },
  ]);

  useEffect(() => {
    initializeCarousels();
  }, []);

  const updateVisibleTestimonials = (carousel: Carousel, index?: number): void => {
    if (index) {
      setCarousels((preVal) => {
        preVal[index].visibleTestimonials = carousel.testimonials.slice(
          carousel.currentIndex,
          carousel.currentIndex + testimonialsPerPage
        );
        return [...preVal];
      });
    } else {
      carousel.visibleTestimonials = carousel.testimonials.slice(
        carousel.currentIndex,
        carousel.currentIndex + testimonialsPerPage
      );
    }
  };

  const prevSlide = (carousel: Carousel, index: number): void => {
    if (carousel.currentIndex > 0) {
      carousel.currentIndex -= testimonialsPerPage;
      updateVisibleTestimonials(carousel, index);
    }
  };

  const nextSlide = (carousel: Carousel, index: number): void => {
    if (carousel.currentIndex + testimonialsPerPage < carousel.testimonials.length) {
      carousel.currentIndex += testimonialsPerPage;
      updateVisibleTestimonials(carousel, index);
    }
  };

  const shuffleArray = (array: Testimonial[]): Testimonial[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const initializeCarousels = (): void => {
    carousels.forEach((carousel) => {
      carousel.testimonials = shuffleArray([...preloadedTestimonials]);
      updateVisibleTestimonials(carousel);
    });
  };

  return (
    <div className="w-full">
      {showTestimonials && (
        <div className="relative w-full min-h-44 my-10 pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-end gap-8 px-0 w-[100%] m-auto">
            {carousels[2].visibleTestimonials.length > 0 &&
              carousels[2].visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard showQuotes key={index} testimonial={testimonial} />
              ))}
          </div>
          <div className="flex justify-center mt-10 gap-5">
            <span
              onClick={() => prevSlide(carousels[2], 2)}
              className={clsx(
                "px-1 material-symbols-outlined rounded-[50%] bg-primary border-none text-3xl !text-white cursor-pointer",
                { "pointer-events-none !bg-gray-300": carousels[2].currentIndex == 0 }
              )}
            >
              chevron_left
            </span>
            <span
              onClick={() => nextSlide(carousels[2], 2)}
              className={clsx(
                "px-1 material-symbols-outlined rounded-[50%] border-none text-3xl bg-primary cursor-pointer !text-white",
                {
                  "pointer-events-none ": !(
                    carousels[2].currentIndex <
                    carousels[2].testimonials.length - testimonialsPerPage
                  ),
                }
              )}
            >
              chevron_right
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousal;
