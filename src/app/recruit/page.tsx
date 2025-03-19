import React from "react";
import { SAMP_RECRUIT_USERS } from "@/constants/common";
import RecruitUser from "@/components/recruit/recruitUser";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ProZ recruit - Vendor management",
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

const page = () => {
  return (
    <div>
      <div className="w-full h-[92px] bg-accent flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-[92px] px-20 py-6 flex-col justify-start items-center gap-8 flex">
          <div className="h-11 flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-[#468f8f] text-4xl font-semibold">
              ProZ Recruit dashboard
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-8 flex-col justify-start items-start gap-3 inline-flex">
        <div className="justify-start items-center gap-px inline-flex">
          <div className="justify-start items-start gap-2.5 flex">
            <div className="text-[#919197] text-xs font-normal">Lorem</div>
          </div>
          <div className="w-3 h-3 relative">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-right">
                <path
                  id="Icon"
                  d="M4.5 9L7.5 6L4.5 3"
                  stroke="#BABABC"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="text-primary text-xs font-medium">Ipsum</div>
          </div>
        </div>

        <div className="self-stretch justify-center items-start gap-6 flex flex-row">
          <div className="w-min flex-col justify-start items-start gap-14 inline-flex">
            <div className="self-stretch h-[478px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-primary text-2xl font-semibold leading-loose">
                  Your lists
                </div>
                <div className="justify-start items-center gap-4 flex">
                  <div className="w-5 h-5 relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="search-refraction">
                        <path
                          id="Icon"
                          d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                          stroke="#D0D5DD"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="w-5 h-5 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="gridicons:add">
                        <circle id="Ellipse 30" cx="12" cy="12" r="8" fill="white" />
                        <path
                          id="Vector"
                          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                          fill="url(#paint0_linear_13632_60117)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_13632_60117"
                          x1="12"
                          y1="2.5"
                          x2="12"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#CAFF8B" />
                          <stop offset="1" stopColor="#53992A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[422px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-primary rounded-xl justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-white text-sm font-semibold">
                    My vendors
                  </div>
                  <div className="w-6 h-6 px-2 py-0.5 bg-accent rounded-2xl justify-start items-center flex">
                    <div className="text-center text-primary text-xs font-medium">5</div>
                  </div>
                </div>
                <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                    Filtered providers
                  </div>
                  <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                    <div className="text-center text-primary text-xs font-medium">7</div>
                  </div>
                </div>
                <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                    Payroll today
                  </div>
                  <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                    <div className="text-center text-primary text-xs font-medium">7</div>
                  </div>
                </div>
                <div className="self-stretch h-[196px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-primary rounded-xl justify-start items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-white text-sm font-semibold">
                      October new job #3456
                    </div>
                    <div className="w-6 h-6 relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="chevron-down">
                          <path
                            id="Icon"
                            d="M6 9L12 15L18 9"
                            stroke="#EDF5F5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="self-stretch h-[148px] pl-4 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                        Translators
                      </div>
                      <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                        <div className="text-center text-primary text-xs font-medium">7</div>
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                        Subtitlers
                      </div>
                      <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                        <div className="text-center text-primary text-xs font-medium">7</div>
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                        Interpreters
                      </div>
                      <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                        <div className="text-center text-primary text-xs font-medium">7</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-[#585858] text-sm font-normal">
                    Swahili to Japanese translation job
                  </div>
                  <div className="w-6 h-6 px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                    <div className="text-center text-primary text-xs font-medium">7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-12 px-4 py-3 bg-accent-light rounded-xl shadow justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="archive">
                    <path
                      id="Icon"
                      d="M3.33329 6.66383C3.19662 6.6603 3.09737 6.65239 3.00814 6.63464C2.34699 6.50313 1.83016 5.9863 1.69865 5.32515C1.66663 5.16415 1.66663 4.97055 1.66663 4.58333C1.66663 4.19612 1.66663 4.00251 1.69865 3.84152C1.83016 3.18037 2.34699 2.66354 3.00814 2.53202C3.16914 2.5 3.36275 2.5 3.74996 2.5H16.25C16.6372 2.5 16.8308 2.5 16.9918 2.53202C17.6529 2.66354 18.1698 3.18037 18.3013 3.84152C18.3333 4.00251 18.3333 4.19612 18.3333 4.58333C18.3333 4.97055 18.3333 5.16415 18.3013 5.32515C18.1698 5.9863 17.6529 6.50313 16.9918 6.63464C16.9025 6.65239 16.8033 6.6603 16.6666 6.66383M8.33329 10.8333H11.6666M3.33329 6.66667H16.6666V13.5C16.6666 14.9001 16.6666 15.6002 16.3941 16.135C16.1545 16.6054 15.772 16.9878 15.3016 17.2275C14.7668 17.5 14.0668 17.5 12.6666 17.5H7.33329C5.93316 17.5 5.2331 17.5 4.69832 17.2275C4.22791 16.9878 3.84546 16.6054 3.60578 16.135C3.33329 15.6002 3.33329 14.9001 3.33329 13.5V6.66667Z"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="grow shrink basis-0 text-[#667085] text-base font-semibold leading-normal">
                Archive
              </div>
              <div className="px-2 py-0.5 mix-blend-multiply bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
                <div className="text-center text-[#344053] text-xs font-medium">7</div>
              </div>
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-max flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-8 text-primary text-2xl font-semibold leading-loose">
                  My vendors
                </div>
                <div className="w-max flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-10 flex-col justify-center items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-10 flex-col justify-start items-start gap-1.5 flex">
                        <div className="self-stretch h-10 px-3 py-2 bg-white rounded-xl border border-[#f4f4f3] justify-start items-center gap-2 inline-flex">
                          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                            <div className="w-5 h-5 relative">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="search-refraction">
                                  <path
                                    id="Icon"
                                    d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                    stroke="#D0D5DD"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div className="grow shrink basis-0 text-xs font-normal">
                              <input
                                type="search"
                                placeholder="Search to add talent to this list"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-max text-xs font-normal">
                Users you want to work with and/or already work with
              </div>
              <div className="self-stretch text-red-400 text-sm">* This is sample data</div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                <div className="w-4 h-4 p-0.5 justify-center items-center flex">
                  <div className="w-3 h-3 relative flex-col justify-start items-start flex">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="text-primary text-sm cursor-pointer font-medium leading-tight">
                  Select all
                </div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="text-primary text-xs font-medium">Remove from list</div>
                </div>
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="text-primary text-xs font-medium">Move to another list</div>
                </div>
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="text-primary text-xs font-medium">Move to a subfolder</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-min pl-4 pr-1 pt-4 pb-6 bg-accent rounded-xl justify-start items-start gap-1 inline-flex">
              <div className="grow shrink basis-0 h-min flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                  {SAMP_RECRUIT_USERS.map((sampRecruitUser, index) => (
                    <RecruitUser recruitUser={sampRecruitUser} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="px-2 justify-start items-center gap-2.5 flex"></div>
          </div>

          <div className="w-min flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-primary text-sm font-medium leading-tight">
                3 talents selected, choose an action
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="w-5 h-5 py-0.5 justify-center items-center flex">
                    <Image
                      className="w-5 h-min"
                      src="/next/next_assets/images/prepaid-card-logo.png"
                      alt=""
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                  </div>

                  <div className="text-primary text-sm font-semibold leading-tight">Pay</div>
                </div>
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="w-5 h-5 py-0.5 justify-center items-center flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icons-24-button/email">
                        <path
                          id="Icon"
                          d="M17.9167 15L12.381 10M7.61913 10L2.08344 15M1.66675 5.83337L8.47085 10.5962C9.02182 10.9819 9.29731 11.1748 9.59697 11.2495C9.86166 11.3154 10.1385 11.3154 10.4032 11.2495C10.7029 11.1748 10.9783 10.9819 11.5293 10.5962L18.3334 5.83337M5.66675 16.6667H14.3334C15.7335 16.6667 16.4336 16.6667 16.9684 16.3942C17.4388 16.1545 17.8212 15.7721 18.0609 15.3017C18.3334 14.7669 18.3334 14.0668 18.3334 12.6667V7.33337C18.3334 5.93324 18.3334 5.23318 18.0609 4.6984C17.8212 4.22799 17.4388 3.84554 16.9684 3.60586C16.4336 3.33337 15.7335 3.33337 14.3334 3.33337H5.66675C4.26662 3.33337 3.56655 3.33337 3.03177 3.60586C2.56137 3.84554 2.17892 4.22799 1.93923 4.6984C1.66675 5.23318 1.66675 5.93324 1.66675 7.33337V12.6667C1.66675 14.0668 1.66675 14.7669 1.93923 15.3017C2.17892 15.7721 2.56137 16.1545 3.03177 16.3942C3.56655 16.6667 4.26662 16.6667 5.66675 16.6667Z"
                          stroke="#4D9D9D"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-primary text-sm font-semibold leading-tight">Message</div>
                </div>
                <div className="px-3.5 cursor-pointer py-2 bg-accent rounded-lg border border-accent justify-center items-center gap-2 flex">
                  <div className="w-5 h-5 py-0.5 justify-center items-center flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icons-24-button/send-01">
                        <path
                          id="Icon"
                          d="M8.74952 11.25L17.4995 2.50002M8.85584 11.5234L11.0459 17.1551C11.2389 17.6512 11.3353 17.8993 11.4743 17.9717C11.5948 18.0345 11.7384 18.0345 11.859 17.9719C11.998 17.8997 12.0948 17.6517 12.2883 17.1558L17.7803 3.08269C17.955 2.63504 18.0423 2.41121 17.9945 2.26819C17.953 2.14398 17.8556 2.04651 17.7314 2.00501C17.5883 1.95723 17.3645 2.04458 16.9169 2.21927L2.84373 7.71122C2.34784 7.90474 2.09989 8.0015 2.02763 8.14059C1.96499 8.26116 1.96508 8.4047 2.02786 8.5252C2.10028 8.66421 2.34834 8.76067 2.84446 8.95361L8.47613 11.1437C8.57684 11.1829 8.62719 11.2024 8.66959 11.2327C8.70717 11.2595 8.74004 11.2924 8.76685 11.3299C8.79709 11.3723 8.81667 11.4227 8.85584 11.5234Z"
                          stroke="#4D9D9D"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text-primary w-max text-sm font-semibold leading-tight">
                    Send job posting
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[100px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch px-4 py-6 bg-accent-light rounded-xl justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#667085] text-base font-normal leading-relaxed">
                  This is a dynamic section for bulk actions, inbox, quick profile viewer...e.t.c
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
