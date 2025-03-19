"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pt-6">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 pl-6 pr-8">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                  <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#4d9d9d]">
                    My projects
                  </p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#4D9D9D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <div
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-full bg-[#c2c7b8]"
                          style={{ boxShadow: "0px 0px 0px 2.2857141494750977px #f4ebff" }}
                        >
                          <Image
                            src="/next/next_assets/images/avatar.png"
                            alt="Testimonial profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>

                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                          Betaplan Translation
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <div
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-full bg-[#c2c7b8]"
                          style={{ boxShadow: "0px 0px 0px 2.2857141494750977px #f4ebff" }}
                        >
                          <Image
                            src="/next/next_assets/images/avatar.png"
                            alt="Testimonial profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                          Another project
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <div
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-full bg-[#c2c7b8]"
                          style={{ boxShadow: "0px 0px 0px 2.2857141494750977px #f4ebff" }}
                        >
                          <Image
                            src="/next/next_assets/images/avatar.png"
                            alt="Testimonial profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                          Another project
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Type
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#027a48]">
                          Translation
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#027a48]">
                          Translation
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#027a48]">
                          Translation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Date due
                        </p>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M7.99998 3.33331V12.6666M7.99998 12.6666L12.6666 7.99998M7.99998 12.6666L3.33331 7.99998"
                            stroke="#475467"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        23rd Aug 2024
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        23rd Aug 2024
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        23rd Aug 2024
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
                      d="M15.8333 9.99999H4.16663M4.16663 9.99999L9.99996 15.8333M4.16663 9.99999L9.99996 4.16666"
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
                      d="M4.16669 9.99999H15.8334M15.8334 9.99999L10 4.16666M15.8334 9.99999L10 15.8333"
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
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-60 gap-8">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-xl bg-[#edf5f5] border border-[#edf5f5]">
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <circle cx="10.5" cy="9.99998" r="6.66667" fill="white" />
                <path
                  d="M10.5 1.66669C5.89752 1.66669 2.16669 5.39752 2.16669 10C2.16669 14.6025 5.89752 18.3334 10.5 18.3334C15.1025 18.3334 18.8334 14.6025 18.8334 10C18.8334 5.39752 15.1025 1.66669 10.5 1.66669ZM14.6667 10.8334H11.3334V14.1667H9.66669V10.8334H6.33335V9.16669H9.66669V5.83335H11.3334V9.16669H14.6667V10.8334Z"
                  fill="url(#paint0_linear_16306_210)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16306_210"
                    x1="10.5"
                    y1="2.08335"
                    x2="10.5"
                    y2="18.3334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CAFF8B" />
                    <stop offset="1" stopColor="#53992A" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#4d9d9d]">
                New project
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
                  <div className="flex flex-col justify-center items-start self-stretch flex-grow relative gap-1">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-60 text-base font-semibold text-left text-[#344054]">
                      Summary
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[10.666666984558105px]">
                <div className="flex-grow-0 flex-shrink-0 w-40 h-40 relative">
                  <svg
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[149.33px] h-[149.33px] absolute left-[5.33px] top-[5.33px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M80 5.33331C89.8054 5.33331 99.5147 7.26462 108.574 11.017C117.633 14.7693 125.864 20.2692 132.797 27.2027C139.731 34.1361 145.231 42.3673 148.983 51.4263C152.735 60.4853 154.667 70.1946 154.667 80C154.667 89.8054 152.735 99.5147 148.983 108.574C145.231 117.633 139.731 125.864 132.797 132.797C125.864 139.731 117.633 145.231 108.574 148.983C99.5147 152.735 89.8053 154.667 80 154.667C70.1946 154.667 60.4852 152.735 51.4263 148.983C42.3673 145.231 34.1361 139.731 27.2027 132.797C20.2692 125.864 14.7693 117.633 11.017 108.574C7.26461 99.5147 5.33331 89.8053 5.33331 79.9999C5.33332 70.1946 7.26463 60.4852 11.017 51.4262C14.7693 42.3673 20.2693 34.1361 27.2027 27.2026C34.1362 20.2692 42.3673 14.7693 51.4263 11.017C60.4853 7.26461 70.1947 5.33331 80 5.33331L80 5.33331Z"
                      stroke="#F2F4F7"
                      strokeWidth="10.6667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M80 5.33331C97.0899 5.33331 113.663 11.1959 126.951 21.9423C140.24 32.6886 149.439 47.6683 153.015 64.3801C156.59 81.0919 154.324 98.5244 146.595 113.767C138.866 129.009 126.143 141.139 110.549 148.131C94.9544 155.124 77.4336 156.554 60.9116 152.185C44.3895 147.816 29.8662 137.912 19.7666 124.125C9.66705 110.339 4.60246 93.5052 5.41848 76.4348C6.2345 59.3643 12.8817 43.0904 24.2503 30.3302"
                      stroke="#88BDBD"
                      strokeWidth="10.6667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={134}
                    height={134}
                    viewBox="0 0 134 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[122.67px] h-[122.67px] absolute left-[18.67px] top-[18.67px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M67 5.66669C75.0544 5.66669 83.03 7.25312 90.4713 10.3354C97.9126 13.4177 104.674 17.9355 110.369 23.6308C116.065 29.3261 120.582 36.0875 123.665 43.5288C126.747 50.9701 128.333 58.9456 128.333 67C128.333 75.0544 126.747 83.03 123.665 90.4713C120.582 97.9126 116.065 104.674 110.369 110.369C104.674 116.065 97.9126 120.582 90.4713 123.665C83.03 126.747 75.0544 128.333 67 128.333C58.9456 128.333 50.9701 126.747 43.5287 123.665C36.0874 120.582 29.3261 116.065 23.6308 110.369C17.9355 104.674 13.4177 97.9126 10.3354 90.4712C7.25311 83.0299 5.66668 75.0544 5.66669 67C5.66669 58.9456 7.25313 50.97 10.3354 43.5287C13.4177 36.0874 17.9355 29.3261 23.6308 23.6308C29.3262 17.9355 36.0875 13.4177 43.5288 10.3354C50.9701 7.25311 58.9457 5.66668 67.0001 5.66669L67 5.66669Z"
                      stroke="#F2F4F7"
                      strokeWidth="10.6667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M67 5.66669C79.5277 5.66669 91.7549 9.50293 102.037 16.6595C112.32 23.816 120.164 33.9496 124.515 45.6973C128.866 57.445 129.516 70.2435 126.376 82.3713C123.236 94.4992 116.458 105.375 106.953 113.535C97.4479 121.696 85.6718 126.75 73.2085 128.018C60.7452 129.286 48.1925 126.708 37.2385 120.629C26.2846 114.55 17.4549 105.262 11.9369 94.0153C6.41884 82.7684 4.47721 70.1014 6.37311 57.718"
                      stroke="#DCEFDC"
                      strokeWidth="10.6667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="w-24 h-24 absolute left-8 top-8" />
                  <p className="absolute left-[52px] top-[52.33px] text-xl font-medium text-center text-[#101828]">
                    <span className="text-xl font-medium text-center text-[#101828]">Projects</span>
                    <br />
                    <span className="text-xl font-medium text-center text-[#101828]">3</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-3">
                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative rounded-[66.67px] bg-[#dcefdc]" />
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[200px] relative gap-2">
                    <p className="flex-grow w-[200px] text-sm font-medium text-left text-[#344054]">
                      Total quotes
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative rounded-[66.67px] bg-[#88bdbd]" />
                  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[200px] relative gap-2">
                    <p className="flex-grow w-[200px] text-sm font-medium text-left text-[#344054]">
                      Total projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
