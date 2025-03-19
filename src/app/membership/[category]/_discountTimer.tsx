"use client";
import { MONTH_NAMES } from "@/constants/common";
import React, { useState, useEffect } from "react";

const DiscountBanner: React.FC = () => {
  const [discountActive, setDiscountActive] = useState(true);
  const now = new Date();
  return (
    <div className="bg-primary">
      <div className="max-w-7xl m-auto flex flex-col justify-center gap-5 text-center items-center p-10">
        {discountActive ? (
          <React.Fragment>
            <p className="font-bold text-2xl text-white">
              Discounts end on {MONTH_NAMES[now.getMonth() + 1]}, {now.getDate()}th
            </p>
            <BackwardTimer />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="font-bold text-2xl text-white">
              Discounts ended on {MONTH_NAMES[now.getMonth() + 1]}, {now.getDate()}th
            </p>
            <p className="font-bold text-xl text-white">These discounts have expired!</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default DiscountBanner;

const BackwardTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const calculateTimeRemaining = (): string => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); // Set to the end of the current day
      const difference = endOfDay.getTime() - now.getTime();

      if (difference <= 0) return "0 days 0 hours 0 minutes 0 seconds";

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${days} day${days !== 1 ? "s" : ""} ${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""} ${seconds} second${seconds !== 1 ? "s" : ""}`;
    };

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <p className="font-bold text-xl text-white">{timeRemaining}</p>;
};
