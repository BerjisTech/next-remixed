"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pt-6">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 pl-6 pr-8">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <p className="flex-grow w-[659px] text-2xl font-semibold text-left text-[#4d9d9d]">
                  My Clients
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#344054]">
                      Businesses
                    </p>
                    <svg
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M6 9.5L12 15.5L18 9.5"
                        stroke="#344054"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[272px] gap-2">
                    <div className="flex justify-start items-center flex-grow gap-1">
                      <div className="flex justify-start items-center flex-grow gap-1.5">
                        <div className="flex justify-start items-center flex-grow relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-[#d0d5dd]">
                          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#667085]">
                            Search...
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-2.5 rounded-xl bg-[#edf5f5] border border-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#4d9d9d]">
                          Search
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-[#edf5f5]"
                style={{
                  boxShadow:
                    "0px 4px 8px -2px rgba(16,24,40,0.1), 0px 2px 4px -2px rgba(16,24,40,0.06)",
                }}
              >
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 bg-white">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[52px]">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          #
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
                        1
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
                        2
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#151515]">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Project name
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[5.33px] bg-white border-[0.78px] border-[#eaeaea]">
                          <Image
                            src="/next/next_assets/images/avatar-1.png"
                            alt="Avatar"
                            className="absolute left-[-0.78px] top-[-0.78px] object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 w-[306.5px] gap-14">
                          <div className="flex flex-col justify-start items-start flex-grow gap-px">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow w-[306.5px] text-lg font-semibold text-left text-[#344054]">
                                Native Localization
                              </p>
                            </div>
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#344054]">
                                Latvia, RIGA
                              </p>
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-3 relative"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g clipPath="url(#clip0_16333_2360)">
                                  <path d="M0 0.5H16V6.5H0V0.5Z" fill="white" />
                                  <path d="M0 6.5H16V12.5H0V6.5Z" fill="#D7141A" />
                                  <path d="M9 6.5L0 0.5V12.5L9 6.5Z" fill="#11457E" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_16333_2360">
                                    <rect y="0.5" width={16} height={12} rx={2} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[5.33px] bg-white border-[0.78px] border-[#eaeaea]">
                          <Image
                            src="/next/next_assets/images/avatar-1.png"
                            alt="Avatar"
                            className="absolute left-[-0.78px] top-[-0.78px] object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 w-[306.5px] gap-14">
                          <div className="flex flex-col justify-start items-start flex-grow gap-px">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow w-[306.5px] text-lg font-semibold text-left text-[#344054]">
                                Native Localization
                              </p>
                            </div>
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#344054]">
                                Latvia, RIGA
                              </p>
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-3 relative"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g clipPath="url(#clip0_16333_1099)">
                                  <path d="M0 0.5H16V6.5H0V0.5Z" fill="white" />
                                  <path d="M0 6.5H16V12.5H0V6.5Z" fill="#D7141A" />
                                  <path d="M9 6.5L0 0.5V12.5L9 6.5Z" fill="#11457E" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_16333_1099">
                                    <rect y="0.5" width={16} height={12} rx={2} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[5.33px] bg-white border-[0.78px] border-[#eaeaea]">
                          <Image
                            src="/next/next_assets/images/avatar-1.png"
                            alt="Avatar"
                            className="absolute left-[-0.78px] top-[-0.78px] object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 w-[306.5px] gap-14">
                          <div className="flex flex-col justify-start items-start flex-grow gap-px">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow w-[306.5px] text-lg font-semibold text-left text-[#344054]">
                                Native Localization
                              </p>
                            </div>
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#344054]">
                                Latvia, RIGA
                              </p>
                              <svg
                                width={16}
                                height={13}
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-3 relative"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g clipPath="url(#clip0_16333_1907)">
                                  <path d="M0 0.5H16V6.5H0V0.5Z" fill="white" />
                                  <path d="M0 6.5H16V12.5H0V6.5Z" fill="#D7141A" />
                                  <path d="M9 6.5L0 0.5V12.5L9 6.5Z" fill="#11457E" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_16333_1907">
                                    <rect y="0.5" width={16} height={12} rx={2} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#475467]">
                          4.7/5
                        </p>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                              fill="#FFB800"
                            />
                          </svg>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                              fill="#FFB800"
                            />
                          </svg>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                              fill="#FFB800"
                            />
                          </svg>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                              fill="#FFB800"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#475467]">
                            3
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                          <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#475467]">
                            3
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                fill="#FFB800"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Employees
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        45
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        21
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        6
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Completed jobs
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        34
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        3
                      </p>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        67
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-6 pt-5 pb-6 border-0 border-[#eaecf0]">
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M15.8333 10H4.16663M4.16663 10L9.99996 15.8334M4.16663 10L9.99996 4.16669"
                      stroke="#344054"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">
                    Previous
                  </p>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[20px] bg-gray-50">
                    <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-[20px]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#1d2939]">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[20px]">
                    <div className="flex justify-center items-center w-10 h-10 absolute left-0 top-0 p-3 rounded-[20px]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#475467]">
                        2
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#d0d5dd]"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#344054]">
                    Next
                  </p>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M4.16666 10H15.8333M15.8333 10L9.99999 4.16669M15.8333 10L9.99999 15.8334"
                      stroke="#344054"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
