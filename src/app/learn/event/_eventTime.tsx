"use client";
import React, { useEffect, useState } from "react";

interface PageProps {
  date_start: string;
}

const EventCountdown: React.FC<PageProps> = ({ date_start }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now: Date = new Date();
      const startDate: Date = new Date(date_start);

      // Convert Date objects to numeric timestamps
      const startTimestamp = startDate.getTime();
      const nowTimestamp = now.getTime();

      // Perform the arithmetic operation
      const difference = startTimestamp - nowTimestamp;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date_start]);

  return (
    <div className="flex justify-center items-end flex-grow-0 flex-shrink-0 gap-12 p-4 rounded-2xl bg-[#f8f7f1]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#468f8f]">
          {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
            ? `Time left before this event starts!`
            : "The event has started!"}
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 relative gap-0.5">
            <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-[#468f8f]">
              {timeLeft.days}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
              days
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 relative gap-0.5">
            <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-[#468f8f]">
              {timeLeft.hours}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
              hours
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 relative gap-0.5">
            <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-[#468f8f]">
              {timeLeft.minutes}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
              minutes
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 relative gap-0.5">
            <p className="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-[#468f8f]">
              {timeLeft.seconds}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#344054]">
              seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
