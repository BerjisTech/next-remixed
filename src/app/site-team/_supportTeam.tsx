"use client";

import { useStaffHook } from "@/hooks/useStaffHook";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const SupportTeam = () => {
  const [staffCardsStates, setStaffCardState] = useState<number | undefined>(undefined);
  const { getSpecificAreaTeam } = useStaffHook();

  const toggleCard = (index: number) => {
    staffCardsStates === index ? setStaffCardState(undefined) : setStaffCardState(index);
  };

  return (
    <div className="relative flex-col justify-start items-center gap-6 inline-flex w-full py-[80px]">
      <div className="self-stretch text-center text-dark text-4xl font-semibold font-['Poppins'] leading-[44px] dark:text-white">
        ProZ support team
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-6 flex max-w-[1500px] mx-auto">
        <div className="self-stretch justify-center items-start gap-4 flex flex-wrap w-full px-8">
          {getSpecificAreaTeam("member-services").length > 0 &&
            getSpecificAreaTeam("member-services").map((staff, index) => {
              return (
                <div
                  key={index}
                  className="lg:min-w-[18%] group grow shrink basis-0 p-4 bg-white rounded-2xl shadow border border-accent flex-col justify-start items-start gap-4 inline-flex dark:bg-black"
                  onClick={() => toggleCard(index)}
                >
                  <div className="self-stretch h-[72px] flex-col justify-start items-start gap-3 flex relative cursor-pointer">
                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                      <div className="w-[86px] h-[72px] justify-center items-center flex">
                        <div className="w-[72px] h-[72px] relative bg-white rounded-lg overflow-hidden border border-secondary flex-col justify-start items-start flex">
                          <Image
                            src={staff.url}
                            alt="Staff image"
                            width={72}
                            height={72}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="self-stretch text-dark-blue-hue text-lg font-semibold font-['Poppins'] leading-7 dark:text-white">
                          <a href="/next/profile/{{staff.id}}">{staff.name}</a>
                        </div>
                        <div className="self-stretch text-dark-blue-hue text-xs font-medium font-['Poppins'] leading-[18px] dark:text-white">
                          {staff.title}
                        </div>
                      </div>
                    </div>
                    <div className="w-[14px] h-[14px] absolute right-0 top-0 bg-[#78fd56] rounded-lg border-2 border-white"></div>
                  </div>
                  <div
                    className={clsx(
                      "justify-end items-start gap-1 ",
                      { "visible inline-flex": staffCardsStates === index },
                      { hidden: staffCardsStates !== index }
                    )}
                  >
                    <div className="px-3.5 py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <g id="video-recorder">
                          <g id="Icon">
                            <path
                              d="M18.8346 7.44313C18.8346 6.93829 18.8346 6.68586 18.7348 6.56898C18.6482 6.46756 18.5182 6.41373 18.3853 6.4242C18.232 6.43626 18.0535 6.61475 17.6966 6.97173L14.668 10.0003L17.6966 13.0289C18.0535 13.3859 18.232 13.5644 18.3853 13.5765C18.5182 13.5869 18.6482 13.5331 18.7348 13.4317C18.8346 13.3148 18.8346 13.0624 18.8346 12.5575V7.44313Z"
                              stroke="#4D9D9D"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.16797 8.16699C2.16797 6.76686 2.16797 6.0668 2.44045 5.53202C2.68014 5.06161 3.06259 4.67916 3.53299 4.43948C4.06777 4.16699 4.76784 4.16699 6.16797 4.16699H10.668C12.0681 4.16699 12.7682 4.16699 13.3029 4.43948C13.7734 4.67916 14.1558 5.06161 14.3955 5.53202C14.668 6.0668 14.668 6.76686 14.668 8.16699V11.8337C14.668 13.2338 14.668 13.9339 14.3955 14.4686C14.1558 14.939 13.7734 15.3215 13.3029 15.5612C12.7682 15.8337 12.0681 15.8337 10.668 15.8337H6.16797C4.76784 15.8337 4.06777 15.8337 3.53299 15.5612C3.06259 15.3215 2.68014 14.939 2.44045 14.4686C2.16797 13.9339 2.16797 13.2338 2.16797 11.8337V8.16699Z"
                              stroke="#4D9D9D"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                      <div className="text-primary text-sm font-semibold font-['Poppins'] leading-tight ">
                        Call now
                      </div>
                    </div>
                    <div className="px-3.5 py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="calendar-plus-02">
                          <path
                            id="Icon"
                            d="M17.5 9.58366V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9001 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86502 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4339 2.77248 16.9686C3.01217 17.439 3.39462 17.8215 3.86502 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337H10.4167M17.5 8.33366H2.5M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M15 17.5003V12.5003M12.5 15.0003H17.5"
                            stroke="#4D9D9D"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <div className="text-primary text-sm font-semibold font-['Poppins'] leading-tight">
                        Schedule a call
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
