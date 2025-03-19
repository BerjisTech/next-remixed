"use client";

import React from "react";
import { Testimonial } from "@/interfaces/testimonial";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import { useGetPasteyReviewsQuery } from "@/lib/store/features/pastey/pasteyApiSlice";

const CafetranTestimonials = () => {
  const softwareId = 97; // Cafetran software id
  const {
    data: pasteyReviews,
    isLoading,
    error,
  } = useGetPasteyReviewsQuery(softwareId, { skip: !softwareId });

  return (
    <div>
      <section className="container mx-auto mt-8 py-12">
        {/* Title */}
        <div className="text-center text-grey-700 text-4xl font-semibold leading-[44px] dark:text-primary-200">
          What users are saying
        </div>

        {/* Testimonial Cards */}
        <div className="flex justify-between gap-8">
          {pasteyReviews && !isLoading && !error && (
            <>
              {pasteyReviews.map((testimonial: Testimonial, index: number) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CafetranTestimonials;
