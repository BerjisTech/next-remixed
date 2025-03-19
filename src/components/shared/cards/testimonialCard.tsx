"use client";
import { Testimonial, TestimonialMembership } from "@/interfaces/testimonial";
import { getInitials } from "@/utils/helpers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface TestimonialCardProps {
  testimonial: Testimonial | TestimonialMembership;
  showQuotes?: boolean;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, showQuotes = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getRandomColor = () => {
    const colors = [
      "bg-red-300",
      "bg-green-300",
      "bg-blue-300",
      "bg-yellow-300",
      "bg-purple-300",
      "bg-pink-300",
      "bg-orange-300",
      "bg-indigo-300",
      "bg-teal-300",
      "bg-cyan-300",
      "bg-amber-300",
      "bg-lime-300",
      "bg-rose-300",
      "bg-violet-300",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="flex flex-col w-full h-full justify-start items-start relative gap-5 p-6 self-stretch rounded-2xl bg-white dark:bg-dark border border-secondary dark:border-primary shadow-lg min-h-[200px]">
      {showQuotes && (
        <div className="absolute top-5">
          <svg
            width="32"
            height="26.45"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 -mt-9"
            preserveAspectRatio="none"
          >
            <path
              d="M20.8202 23.2744C20.8202 19.8254 21.5773 16.7129 23.0915 13.9369C24.6057 11.1609 26.3722 8.80547 28.3912 6.87066C30.4942 4.93586 32.387 3.46372 34.0694 2.45425C35.7518 1.44479 36.7613 0.940063 37.0978 0.940063C38.3596 0.940063 39.327 1.82334 40 3.5899C37.0557 5.35647 34.8265 7.20715 33.3123 9.14196C31.7981 10.9926 30.7886 12.633 30.2839 14.0631C29.8633 15.4932 29.653 16.4606 29.653 16.9653C29.653 18.0589 30.0315 19.0683 30.7886 19.9937C31.6299 20.919 32.4711 21.8864 33.3123 22.8959C33.9853 23.653 34.5321 24.4101 34.9527 25.1672C35.4574 25.8402 35.7098 26.6393 35.7098 27.5647C35.7098 29.3312 34.6583 30.8454 32.5552 32.1073C30.5363 33.3691 28.3491 34 25.9937 34C25.489 34 24.9842 33.9579 24.4795 33.8738C24.0589 33.7056 23.5962 33.5794 23.0915 33.4953C22.4185 32.4858 21.8717 31.0137 21.4511 29.0789C21.0305 27.0599 20.8202 25.1251 20.8202 23.2744ZM0 23.2744C0 19.8254 0.757098 16.7129 2.27129 13.9369C3.78549 11.1609 5.55205 8.80547 7.57098 6.87066C9.67403 4.93586 11.5668 3.46372 13.2492 2.45425C14.9317 1.44479 15.9411 0.940063 16.2776 0.940063C17.5394 0.940063 18.5068 1.82334 19.1798 3.5899C16.2355 5.35647 14.0063 7.20715 12.4921 9.14196C10.9779 10.9926 9.96845 12.633 9.46372 14.0631C9.04311 15.4932 8.83281 16.4606 8.83281 16.9653C8.83281 18.0589 9.21136 19.0683 9.96845 19.9937C10.8097 20.919 11.6509 21.8864 12.4921 22.8959C13.1651 23.653 13.7119 24.4101 14.1325 25.1672C14.6372 25.8402 14.8896 26.6393 14.8896 27.5647C14.8896 29.3312 13.8381 30.8454 11.735 32.1073C9.71609 33.3691 7.52892 34 5.1735 34C4.66877 34 4.16404 33.9579 3.65931 33.8738C3.2387 33.7056 2.77603 33.5794 2.27129 33.4953C1.59832 32.4858 1.05152 31.0137 0.630915 29.0789C0.210305 27.0599 0 25.1251 0 23.2744Z"
              fill="#88BDBD"
            ></path>
          </svg>
        </div>
      )}
      {testimonial.title && (
        <div className="w-full font-poppins text-lg font-semibold text-left text-black dark:text-white">
          {testimonial.title}
        </div>
      )}
      <p className="w-full font-poppins text-sm text-left text-black dark:text-white grow">
        {isExpanded
          ? testimonial.message
          : testimonial.message && testimonial.message.length > 90
            ? testimonial.message.slice(0, 90) + "..."
            : testimonial.message}
      </p>
      {testimonial.message && testimonial.message.length > 90 && (
        <button onClick={toggleExpanded} className="text-primary hover:underline text-sm">
          {isExpanded ? "See less" : "See full"}
        </button>
      )}
      <div className="flex justify-start items-center gap-3 mt-auto">
        <div className="w-16 h-16 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700">
          {testimonial.image_url ? (
            <Image
              src={testimonial.image_url}
              className="object-cover w-full h-full"
              alt="testimonial-avatar"
              height={10}
              width={10}
            />
          ) : (
            <div
              className={clsx(
                "flex items-center justify-center w-full h-full text-white text-xl font-bold",
                getRandomColor()
              )}
            >
              {" "}
              {getInitials(testimonial.name)}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex items-center gap-4">
            <p className="text-base font-medium text-left text-black dark:text-primary">
              {testimonial.entity_id ? (
                <Link
                  className="hover:text-primary hover:underline"
                  href={"/profile/" + testimonial.entity_id + "/overview"}
                >
                  {testimonial.name && testimonial.name.length > 20
                    ? testimonial.name.slice(0, 10) + "..."
                    : testimonial.name}
                </Link>
              ) : testimonial.name && testimonial.name.length > 20 ? (
                testimonial.name.slice(0, 10) + "..."
              ) : (
                testimonial.name
              )}
            </p>
            {/* TODO: Make the membership badges dynamic  */}
            {/*<div className="flex items-center gap-1">*/}
            {/*  <Image*/}
            {/*    src="/next/next_assets/images/svg/cpn-badge.svg"*/}
            {/*    className="object-cover"*/}
            {/*    alt="image-24.png"*/}
            {/*    height={20}*/}
            {/*    width={20}*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*    src="/next/next_assets/images/svg/plus-member.svg"*/}
            {/*    className="object-cover"*/}
            {/*    alt="image-24.png"*/}
            {/*    height={20}*/}
            {/*    width={20}*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          {testimonial.country && (
            <p className="text-sm text-left text-black dark:text-primary">{testimonial.country}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
