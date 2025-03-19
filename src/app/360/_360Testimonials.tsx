"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    websiteImage: "/next/next_assets/images/360/jonathan-web.png",
    testimonial:
      "“This is a tremendous value for freelancers who subscribe to proz.com at no extra cost, I couldn't be happier. It was such an easy process, you took care of everything and the website was done fast and professionally!”",
    avatar: "/next/next_assets/images/360/jonathan-avatar.png",
    authorName: "Jonathan Norris",
    country: "Mexico",
  },
  {
    websiteImage: "/next/next_assets/images/360/denis-web.png",
    testimonial:
      "“I am so thrilled and feel so empowered as a freelance translator since my professional website has launched. For me it is an opportunity to reach a global audience and to increase my exposure to international clients, leading to more job opportunities and a more diverse portfolio. It is a well-designed and friendly website allowing me to enhance my credibility and trustworthiness in a very modern and professional way.”",
    avatar: "/next/next_assets/images/360/denis-avatar.png",
    authorName: "Marthe Renee Denis",
    country: "United States",
  },
];

const ProZ360Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto w-full h-full flex flex-col items-center justify-center px-3 gap-6 sm:px-6 overflow-hidden py-5">
      <h2 className="text-center text-360-deep-blue text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
        Success stories
      </h2>
      <div className="relative w-full h-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"} flex flex-col items-center`}
          >
            <div className="w-full h-auto flex-shrink-0 flex flex-col items-center rounded-3xl border-2 border-primary-200 overflow-hidden">
              <Image
                src={testimonial.websiteImage}
                alt="Website mockup"
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[90%] md:w-[70%] h-auto flex flex-col p-5 bg-grey-50 dark:bg-grey-900 shadow-lg border border-primary-200 rounded-2xl gap-3 mb-20 mr-5">
              <p className="text-sm md:text-base text-grey-700">{testimonial.testimonial}</p>
              <div className="flex flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.authorName}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base text-foreground font-semibold">
                    {testimonial.authorName}
                  </p>
                  <p className="text-sm text-grey-600">{testimonial.country}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProZ360Testimonials;
