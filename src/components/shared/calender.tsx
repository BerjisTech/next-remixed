"use client";

import { useCalendarHook } from "@/hooks/useCalenderHook";
import Link from "next/link";
import React, { useEffect } from "react";
import ProzSwitch from "../general/prozSwitch";
import clsx from "clsx";
import { RenderAvailability } from "@/constants/calender";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Tooltip from "./prozTooltip";
import { useGetUserCalendarEventsQuery } from "@/lib/store/features/profile/profileApiSlice";
import { ProzUser } from "@/interfaces/account";
import { setCalenderEvents } from "@/lib/store/features/calender/calenderSlice";

// Function to get the tooltip title based on availability
const getAvailabilityData = (availability: string): RenderAvailability => {
  let renderAvailability = {
    title: "",
    icon: <></>,
    background: "",
  };
  switch (availability) {
    case "Y":
      renderAvailability.title = "Available";
      ``;
      renderAvailability.icon = (
        <i className="fa fa-calendar fa-lg text-green-500" aria-hidden="true">
          {" "}
        </i>
      );
      renderAvailability.background = "bg-primary bg-primary-foreground ";
      break;
    case "M":
      renderAvailability.title = "Mostly available";
      renderAvailability.icon = (
        <i className="fa fa-calendar fa-lg text-yellow-500" aria-hidden="true">
          {" "}
        </i>
      );
      renderAvailability.background = "bg-yellow-500 text-primary-foreground";
      break;
    case "P":
      renderAvailability.title = "Partially available";
      renderAvailability.icon = (
        <i className="fa fa-calendar fa-lg text-orange-500" aria-hidden="true">
          {" "}
        </i>
      );
      renderAvailability.background = "bg-orange-500 text-primary-foreground";
      break;
    case "B":
      renderAvailability.title = "Barely available";
      renderAvailability.icon = (
        <i className="fa fa-calendar fa-lg text-gray-500" aria-hidden="true">
          {" "}
        </i>
      );
      renderAvailability.background = "bg-gray-500 text-primary-foreground";
      break;
    case "N":
      renderAvailability.title = "Not available";
      renderAvailability.icon = (
        <i className="fa fa-calendar fa-lg text-red-500" aria-hidden="true">
          {" "}
        </i>
      );
      renderAvailability.background = "bg-red-500 text-primary-foreground";
      break;
    default:
  }

  return renderAvailability;
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface CalendarProps {
  miniCalendar: boolean;
  user: ProzUser;
}

const Calendar: React.FC<CalendarProps> = ({ miniCalendar = false, user }) => {
  const dispatch = useAppDispatch();
  const {
    addEvent,
    removeEvent,
    updateEvent,
    isToday,
    getEventsForDay,
    loadMonth,
    isPastDate,
    previousMonth,
    nextMonth,
  } = useCalendarHook();
  const { currentMonth, currentYear, currentMonthName } = useAppSelector((state) => state.calender);
  const { data: fetchedEvents } = useGetUserCalendarEventsQuery(
    { entityId: user?.entity_id, currentMonth },
    { skip: !user || !currentMonth }
  );

  useEffect(() => {
    console.log("Fetching user calender events");
    if (fetchedEvents) {
      dispatch(setCalenderEvents(fetchedEvents));
    }
  }, [fetchedEvents]);

  return (
    <div className="flex flex-col justify-center items-start gap-3 relative">
      {/* <div className="flex justify-center items-center gap-1 relative">
                <div className="flex justify-start items-center relative px-3 py-1 rounded-2xl bg-accent dark:bg-black mix-blend-multiply">
                    <p className="text-base font-medium text-center text-primary dark:text-primary-foreground">Available</p>
                </div>
            </div> */}

      <div
        className={`flex flex-col justify-start items-center ${miniCalendar ? "w-[304px]" : "w-full h-full"} relative gap-[35.42px] p-[24px_16px] rounded-[12px] bg-secondary dark:bg-black border border-accent-light dark:border-dark shadow-[0px_2.53px_20.24px_0_rgba(170,170,170,0.03)]`}
      >
        <div className="w-full flex justify-between items-center">
          <p className="text-[18px] text-[#4d9d9d] font-[600] font-poppins">
            {currentMonthName} {currentYear}
          </p>
          <div className="flex justify-start items-center gap-4">
            <svg
              role="button"
              onClick={previousMonth}
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M4.32385 0.692496L0.74585 4.27049L4.32385 7.84849"
                stroke="#4D9D9D"
                strokeWidth="1.26501"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              role="button"
              onClick={nextMonth}
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M1.47986 0.692633L5.05786 4.270633L1.47986 7.848633"
                stroke="#4D9D9D"
                strokeWidth="1.26501"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`flex flex-col items-center p-0 gap-[20.24px] relative ${miniCalendar ? "w-[272px]" : "w-full h-full"}`}
        >
          <div className="flex flex-col w-full ">
            <div
              className={`${miniCalendar ? "w-[272px]" : "w-full h-full"} grid grid-cols-7 gap-[1px]`}
            >
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="day-cell flex items-center justify-center h-[24px] font-poppins font-medium text-[16px] text-primary"
                >
                  <span>{day.substring(0, 2)}</span>
                </div>
              ))}
            </div>

            <div
              className={`${miniCalendar ? "w-[272px]" : "w-full h-full"} grid grid-cols-7 gap-[1px] mt-[15px]`}
            >
              {loadMonth(currentYear, currentMonth) &&
                loadMonth(currentYear, currentMonth).map((day, index) => {
                  const availabilityData: RenderAvailability | undefined =
                    getEventsForDay(day).length > 0
                      ? getAvailabilityData(getEventsForDay(day)[0].availability)
                      : undefined;
                  return (
                    <div
                      key={index}
                      role="button"
                      className={clsx(
                        "group my-[2px] mx-[1px] relative hover:bg-primary hover:text-primary-foreground dark:hover:bg-gray-600 col-span-1 flex items-center justify-center rounded-[50%]",
                        { "h-[35px]": miniCalendar },
                        {
                          "bg-primary dark:bg-primary text-primary-foreground": day && isToday(day),
                        },
                        {
                          "text-gray-400 hover:!bg-none pointer-events-none":
                            day && isPastDate(day),
                        },
                        availabilityData?.background
                      )}
                      onClick={() => addEvent(day)}
                    >
                      {availabilityData?.title ? (
                        <Tooltip message={availabilityData?.title as string}>
                          <div
                            className={clsx(
                              "rounded-[50%] flex items-center justify-center text-base",
                              { "h-[35px]": miniCalendar }
                            )}
                          >
                            {day ? day.getDate() : ""}
                          </div>
                        </Tooltip>
                      ) : (
                        <div
                          className={clsx(
                            "rounded-[50%] flex items-center justify-center text-base",
                            { "h-[35px]": miniCalendar }
                          )}
                        >
                          {day ? day.getDate() : ""}
                        </div>
                      )}
                      {day && !miniCalendar && getEventsForDay(day).length > 0 && (
                        <div className="z-[400000] hidden group-hover:flex flex-col items-start justify-start absolute bottom-[-100%] left-0 w-[200px] h-[100px] overflow-y-auto rounded-lg bg-accent border-primary shadow dark:bg-dark p-2 text-dark dark:text-primary-foreground">
                          {getEventsForDay(day).map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className="flex items-center justify-start w-full gap-2 hover:bg-primary dark:hover:bg-black p-2 rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                {" "}
                                {availabilityData?.icon}
                                <span className="tooltip-title">{availabilityData?.title}</span>
                              </div>
                              <button
                                onClick={() => updateEvent(event)}
                                className="material-symbols-outlined text-primary"
                              >
                                edit
                              </button>
                              <button
                                onClick={() => removeEvent(event.entity_calendar_id)}
                                className="material-symbols-outlined text-red-600"
                              >
                                delete
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center relative">
        <p className="text-sm text-left text-black dark:text-white">Calendar is publicly visible</p>
        <div className="flex justify-start items-center relative gap-2">
          <ProzSwitch label="Yes" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start relative w-full ">
        <Link
          href="/next"
          role="button"
          className="button-link text-sm font-semibold text-center text-primary"
        >
          Edit calendar
        </Link>
        <Link
          href="/next"
          role="button"
          className="button-link text-sm font-semibold text-center text-primary"
        >
          View full calendar
        </Link>
      </div>
    </div>
  );
};

export default Calendar;
