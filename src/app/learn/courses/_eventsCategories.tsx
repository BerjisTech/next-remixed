import Link from "next/link";
import React from "react";

const EventsCategories = async () => {
  return (
    <div className="sticky top-[80px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] gap-2">
      <Link
        href="/learn/events/meetup"
        className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 gap-2.5 pl-4 pr-2.5 py-2 rounded-xl bg-[#fbfafa] :is([class*='active']):bg-[#4d9d9d]"
      >
        <div className="flex justify-start items-center flex-grow relative gap-1">
          <p className="flex-grow w-[190px] text-sm font-semibold text-left text-[#595959] :is([class*='active']):text-white">
            Meetups
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative px-2 py-0.5 rounded-2xl bg-[#f2f4f7]">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#2a5656]">
            8
          </p>
        </div>
      </Link>
      <Link
        href="/learn/events/tv"
        className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 gap-2.5 pl-4 pr-2.5 py-2 rounded-xl bg-[#fbfafa] :is([class*='active']):bg-[#4d9d9d]"
      >
        <div className="flex justify-start items-center flex-grow relative opacity-80 gap-1">
          <p className="flex-grow w-[190px] text-sm text-left text-[#595959] :is([class*='active']):text-white">
            TV events
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative px-2 py-0.5 rounded-2xl bg-[#f2f4f7] mix-blend-multiply">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#2a5656]">
            4
          </p>
        </div>
      </Link>
      <Link
        href="/learn/events/workshops"
        className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 gap-2.5 pl-4 pr-2.5 py-2 rounded-xl bg-[#fbfafa] :is([class*='active']):bg-[#4d9d9d]"
      >
        <div className="flex justify-start items-center flex-grow relative opacity-80 gap-1">
          <p className="flex-grow w-[190px] text-sm text-left text-[#595959] :is([class*='active']):text-white">
            Workshops
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative px-2 py-0.5 rounded-2xl bg-[#f2f4f7] mix-blend-multiply">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#2a5656]">
            12
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventsCategories;
