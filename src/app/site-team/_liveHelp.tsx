"use client";
import { useStaffHook } from "@/hooks/useStaffHook";
import Image from "next/image";
import React from "react";

const LiveHelp = () => {
  const { getSpecificAreaTeam } = useStaffHook();

  return (
    <div className=" px-20 pt-8 w-full pb-[71px] left-0 relative bg-accent flex-col justify-start items-center gap-[68px] inline-flex">
      <div className="self-stretch h-[94px] px-10 flex-col justify-center items-center gap-2 inline-flex">
        <div className="text-center text-primary text-4xl font-semibold font-['Poppins'] leading-[44px]">
          Live help
        </div>
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-relaxed">
            Have a quick face-to-face call with a member of the ProZ team
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-center items-center gap-6 inline-flex w-full">
        <div className="items-center gap-10 w-full justify-center inline-flex flex-col lg:flex-row">
          {getSpecificAreaTeam("site-team").length > 0 &&
            getSpecificAreaTeam().map((team, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] mx-auto lg:mx-0 self-stretch p-6 bg-primary rounded-3xl border border-accent flex-col justify-start items-center gap-4 inline-flex"
                >
                  <Image
                    className="w-[213px] h-[213px] rounded-[111px]"
                    src={"/" + team.url}
                    height={213}
                    width={213}
                    alt="staff"
                  />
                  <div className="text-center text-white text-base font-normal font-['Poppins'] leading-relaxed">
                    {team.name}
                  </div>
                  <div className="self-stretch h-[84px] flex-col justify-start items-start gap-4 flex">
                    <a
                      href="next/call"
                      className="self-stretch px-[18px] py-2.5 bg-accent rounded-xl border border-accent justify-center items-center gap-2 inline-flex"
                    >
                      {index !== 1 ? (
                        <React.Fragment>
                          <div className="text-primary text-base font-semibold font-['Poppins'] leading-normal">
                            Call now
                          </div>
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
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div className="w-5 h-5 bg-[#12B76A] px-[2.50px] py-[1.67px] justify-center items-center flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <g id="phone-call-01" clipPath="url(#clip0_7834_19019)">
                                <path
                                  id="Icon"
                                  d="M7.02483 3C7.5132 3.09528 7.96202 3.33413 8.31386 3.68597C8.6657 4.03781 8.90455 4.48663 8.99983 4.975M7.02483 1C8.03947 1.11272 8.98563 1.56709 9.70795 2.2885C10.4303 3.00992 10.8858 3.9555 10.9998 4.97M5.11332 6.93153C4.51253 6.33075 4.03814 5.65142 3.69014 4.92661C3.6602 4.86427 3.64524 4.8331 3.63374 4.79365C3.59288 4.65347 3.62223 4.48135 3.70723 4.36263C3.73115 4.32922 3.75973 4.30065 3.81689 4.24349C3.99169 4.06869 4.07909 3.98129 4.13624 3.8934C4.35173 3.56195 4.35173 3.13466 4.13624 2.80322C4.07909 2.71533 3.99169 2.62793 3.81689 2.45312L3.71945 2.35569C3.45373 2.08997 3.32087 1.95711 3.17818 1.88493C2.8944 1.7414 2.55927 1.7414 2.27549 1.88493C2.1328 1.95711 1.99994 2.08997 1.73422 2.35569L1.6554 2.4345C1.39059 2.69932 1.25818 2.83172 1.15706 3.01174C1.04485 3.21149 0.964166 3.52174 0.964848 3.75085C0.965462 3.95732 1.00551 4.09843 1.08562 4.38066C1.5161 5.89735 2.32834 7.32853 3.52233 8.52252C4.71632 9.71651 6.1475 10.5288 7.6642 10.9592C7.94642 11.0393 8.08753 11.0794 8.29401 11.08C8.52312 11.0807 8.83336 11 9.03312 10.8878C9.21313 10.7867 9.34554 10.6543 9.61035 10.3895L9.68917 10.3106C9.95489 10.0449 10.0877 9.91206 10.1599 9.76937C10.3035 9.48559 10.3035 9.15045 10.1599 8.86667C10.0877 8.72398 9.95489 8.59112 9.68917 8.3254L9.59173 8.22797C9.41693 8.05316 9.32953 7.96576 9.24164 7.90862C8.91019 7.69312 8.4829 7.69312 8.15146 7.90862C8.06357 7.96576 7.97617 8.05316 7.80136 8.22797C7.74421 8.28512 7.71563 8.3137 7.68222 8.33762C7.56351 8.42263 7.39138 8.45198 7.2512 8.41112C7.21176 8.39962 7.18059 8.38465 7.11824 8.35472C6.39343 8.00672 5.71411 7.53232 5.11332 6.93153Z"
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_7834_19019">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-primary text-sm font-semibold font-['Poppins'] leading-tight">
                            Is on another call...
                          </div>
                        </React.Fragment>
                      )}
                    </a>
                    <a
                      href="/next/find/call-schedule"
                      className="self-stretch justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
                        Schedule for later
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="calendar">
                          <path
                            id="Icon"
                            d="M17.5 8.33366H2.5M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M6.5 18.3337H13.5C14.9001 18.3337 15.6002 18.3337 16.135 18.0612C16.6054 17.8215 16.9878 17.439 17.2275 16.9686C17.5 16.4339 17.5 15.7338 17.5 14.3337V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9001 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86502 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4339 2.77248 16.9686C3.01217 17.439 3.39462 17.8215 3.86502 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337Z"
                            stroke="white"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="self-stretch text-center text-dark-blue-hue text-base font-semibold font-['Poppins'] leading-normal">
        The ProZ team is available to talk Monday through Friday, from 8am - 7:30pm GMT
      </div>
    </div>
  );
};

export default LiveHelp;
