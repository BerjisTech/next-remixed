"use client";
import clsx from "clsx";
import React, { useState } from "react";

interface StarRatingProps {
  rating: string | number; // Current rating value
  size?: "small" | "medium" | "large"; // Size of the stars
  readonly?: boolean; // Determines if the component is static or interactive
  onChange?: (newRating: number) => void; // Callback function for rating change
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = "medium",
  readonly = true,
  onChange,
}) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const floatRating = parseFloat(rating.toString());
  const roundedRating = roundToHalf(floatRating);

  const sizeMap = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };
  const starSizeClass = sizeMap[size];
  const currentRating = hoveredRating !== null ? hoveredRating : roundedRating;

  function roundToHalf(num: number) {
    return Math.round(num * 2) / 2;
  }

  return (
    <div className="flex items-start">
      {Array.from({ length: 5 }, (_, index) => {
        const isFullStar = index < Math.floor(currentRating);
        const isHalfStar = !isFullStar && index < Math.ceil(currentRating);

        const handleClick = () => {
          if (!readonly && onChange) {
            onChange(index + 1); // Rating starts from 1
          }
        };

        const handleMouseEnter = () => {
          if (!readonly) setHoveredRating(index + 1);
        };

        const handleMouseLeave = () => {
          if (!readonly) setHoveredRating(null);
        };

        return (
          <svg
            key={index}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("relative", starSizeClass, {
              "cursor-default": readonly,
              "cursor-pointer": !readonly,
            })}
            preserveAspectRatio="none"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              <linearGradient id={`half-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" style={{ stopColor: "#FFB800", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#D0D5DD", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M21.9646 10.7661L17.7459 14.4064L19.0312 19.8505C19.1021 20.146 19.0838 20.4559 18.9787 20.7411C18.8736 21.0263 18.6863 21.2739 18.4405 21.4526C18.1947 21.6314 17.9015 21.7333 17.5978 21.7455C17.2941 21.7577 16.9936 21.6796 16.7343 21.5211L11.9999 18.6074L7.26275 21.5211C7.00347 21.6787 6.70335 21.756 6.4002 21.7434C6.09704 21.7308 5.8044 21.6287 5.55913 21.4501C5.31386 21.2715 5.12692 21.0243 5.02185 20.7396C4.91679 20.455 4.89829 20.1456 4.96869 19.8505L6.25869 14.4064L2.03994 10.7661C1.81053 10.5678 1.64462 10.3064 1.56293 10.0144C1.48123 9.72238 1.48737 9.41278 1.58058 9.12425C1.67379 8.83571 1.84994 8.58103 2.08703 8.39202C2.32412 8.203 2.61164 8.08802 2.91369 8.06143L8.44494 7.61518L10.5787 2.45143C10.6942 2.17001 10.8908 1.92929 11.1434 1.75987C11.3961 1.59046 11.6934 1.5 11.9976 1.5C12.3018 1.5 12.5991 1.59046 12.8518 1.75987C13.1044 1.92929 13.301 2.17001 13.4165 2.45143L15.5493 7.61518L21.0806 8.06143C21.3832 8.08703 21.6716 8.20137 21.9095 8.39013C22.1475 8.57888 22.3244 8.83366 22.4182 9.12255C22.512 9.41143 22.5185 9.72157 22.4368 10.0141C22.3551 10.3066 22.1889 10.5686 21.959 10.7671Z"
              fill={
                isFullStar ? "#FFB800" : isHalfStar ? `url(#half-gradient-${index})` : "#D0D5DD"
              }
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
