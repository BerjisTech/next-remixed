import React from "react";
import Events from "../_events";
import EventsCategories from "./_eventsCategories";

const EventsLayout = () => {
  return (
    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
      <EventsCategories />
      <div className="flex flex-col justify-start items-start flex-grow gap-8 pb-2.5">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[18px]">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[26px]">
              <p className="flex-grow w-full text-xl font-bold text-left text-[#344054]">Meetups</p>
            </div>
            <Events limit={6} offset={0} wrap="wrap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsLayout;
