import React from "react";
import Courses from "../_courses";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div className="flex flex-col justify-start items-start flex-grow gap-3">
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[519px] gap-1">
          <div className="flex flex-col justify-start items-start flex-grow gap-1.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-[#eaeaea] shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                      stroke="#DCDCDC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#667085]">
                    Search video...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-[#edf5f5] border border-[#edf5f5]">
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#4d9d9d]">
              Search
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                Filters
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6 12H18M3 6H21M9 18H15"
                  stroke="#344054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[26px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#344054]">
                All categories
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <Courses limit={12} />
          <div className="hidden __flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.67741L11.8345 10.1043L12.6914 13.7337C12.7386 13.9307 12.7265 14.1373 12.6564 14.3274C12.5863 14.5175 12.4614 14.6826 12.2976 14.8018C12.1337 14.9209 11.9382 14.9889 11.7358 14.997C11.5333 15.0051 11.333 14.9531 11.1601 14.8474L8.00387 12.9049L4.84574 14.8474C4.67288 14.9525 4.47281 15.004 4.2707 14.9956C4.0686 14.9872 3.87351 14.9191 3.70999 14.8001C3.54648 14.681 3.42185 14.5162 3.35181 14.3264C3.28176 14.1367 3.26943 13.9304 3.31637 13.7337L4.17637 10.1043L1.36387 7.67741C1.21093 7.54523 1.10032 7.37092 1.04586 7.17625C0.991392 6.98159 0.995486 6.77519 1.05763 6.58283C1.11977 6.39048 1.2372 6.22069 1.39526 6.09468C1.55332 5.96866 1.745 5.89201 1.94637 5.87429L5.63387 5.57679L7.05637 2.13429C7.13336 1.94667 7.26441 1.78619 7.43285 1.67325C7.60129 1.56031 7.7995 1.5 8.0023 1.5C8.2051 1.5 8.40332 1.56031 8.57176 1.67325C8.7402 1.78619 8.87124 1.94667 8.94824 2.13429L10.3701 5.57679L14.0576 5.87429C14.2594 5.89135 14.4516 5.96758 14.6103 6.09342C14.7689 6.21925 14.8869 6.38911 14.9494 6.5817C15.0119 6.77429 15.0162 6.98104 14.9618 7.17607C14.9073 7.37109 14.7965 7.54571 14.6432 7.67804L14.647 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.67741L11.8306 10.1043L12.6875 13.7337C12.7347 13.9307 12.7226 14.1373 12.6525 14.3274C12.5824 14.5175 12.4575 14.6826 12.2937 14.8018C12.1298 14.9209 11.9343 14.9889 11.7319 14.997C11.5294 15.0051 11.3291 14.9531 11.1562 14.8474L7.99996 12.9049L4.84184 14.8474C4.66898 14.9525 4.4689 15.004 4.2668 14.9956C4.06469 14.9872 3.8696 14.9191 3.70609 14.8001C3.54257 14.681 3.41795 14.5162 3.3479 14.3264C3.27786 14.1367 3.26553 13.9304 3.31246 13.7337L4.17246 10.1043L1.35996 7.67741C1.20702 7.54523 1.09641 7.37092 1.04195 7.17625C0.987486 6.98159 0.99158 6.77519 1.05372 6.58283C1.11586 6.39048 1.23329 6.22069 1.39135 6.09468C1.54941 5.96866 1.7411 5.89201 1.94246 5.87429L5.62996 5.57679L7.05246 2.13429C7.12946 1.94667 7.2605 1.78619 7.42894 1.67325C7.59738 1.56031 7.7956 1.5 7.9984 1.5C8.2012 1.5 8.39942 1.56031 8.56785 1.67325C8.73629 1.78619 8.86734 1.94667 8.94433 2.13429L10.3662 5.57679L14.0537 5.87429C14.2555 5.89135 14.4477 5.96758 14.6063 6.09342C14.765 6.21925 14.883 6.38911 14.9455 6.5817C15.008 6.77429 15.0123 6.98104 14.9579 7.17607C14.9034 7.37109 14.7926 7.54571 14.6393 7.67804L14.6431 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.67741L11.8306 10.1043L12.6875 13.7337C12.7347 13.9307 12.7226 14.1373 12.6525 14.3274C12.5824 14.5175 12.4575 14.6826 12.2937 14.8018C12.1298 14.9209 11.9343 14.9889 11.7319 14.997C11.5294 15.0051 11.3291 14.9531 11.1562 14.8474L7.99996 12.9049L4.84184 14.8474C4.66898 14.9525 4.4689 15.004 4.2668 14.9956C4.06469 14.9872 3.8696 14.9191 3.70609 14.8001C3.54257 14.681 3.41795 14.5162 3.3479 14.3264C3.27786 14.1367 3.26553 13.9304 3.31246 13.7337L4.17246 10.1043L1.35996 7.67741C1.20702 7.54523 1.09641 7.37092 1.04195 7.17625C0.987486 6.98159 0.99158 6.77519 1.05372 6.58283C1.11586 6.39048 1.23329 6.22069 1.39135 6.09468C1.54941 5.96866 1.7411 5.89201 1.94246 5.87429L5.62996 5.57679L7.05246 2.13429C7.12946 1.94667 7.2605 1.78619 7.42894 1.67325C7.59738 1.56031 7.7956 1.5 7.9984 1.5C8.2012 1.5 8.39942 1.56031 8.56785 1.67325C8.73629 1.78619 8.86734 1.94667 8.94433 2.13429L10.3662 5.57679L14.0537 5.87429C14.2555 5.89135 14.4477 5.96758 14.6063 6.09342C14.765 6.21925 14.883 6.38911 14.9455 6.5817C15.008 6.77429 15.0123 6.98104 14.9579 7.17607C14.9034 7.37109 14.7926 7.54571 14.6393 7.67804L14.6431 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6392 7.67741L11.8267 10.1043L12.6836 13.7337C12.7308 13.9307 12.7187 14.1373 12.6486 14.3274C12.5785 14.5175 12.4536 14.6826 12.2898 14.8018C12.1259 14.9209 11.9304 14.9889 11.728 14.997C11.5255 15.0051 11.3252 14.9531 11.1523 14.8474L7.99605 12.9049L4.83793 14.8474C4.66507 14.9525 4.46499 15.004 4.26289 14.9956C4.06079 14.9872 3.8657 14.9191 3.70218 14.8001C3.53867 14.681 3.41404 14.5162 3.34399 14.3264C3.27395 14.1367 3.26162 13.9304 3.30855 13.7337L4.16855 10.1043L1.35605 7.67741C1.20312 7.54523 1.09251 7.37092 1.03804 7.17625C0.98358 6.98159 0.987674 6.77519 1.04981 6.58283C1.11195 6.39048 1.22939 6.22069 1.38745 6.09468C1.54551 5.96866 1.73719 5.89201 1.93855 5.87429L5.62605 5.57679L7.04855 2.13429C7.12555 1.94667 7.2566 1.78619 7.42504 1.67325C7.59347 1.56031 7.79169 1.5 7.99449 1.5C8.19729 1.5 8.39551 1.56031 8.56395 1.67325C8.73238 1.78619 8.86343 1.94667 8.94043 2.13429L10.3623 5.57679L14.0498 5.87429C14.2516 5.89135 14.4438 5.96758 14.6024 6.09342C14.7611 6.21925 14.879 6.38911 14.9416 6.5817C15.0041 6.77429 15.0084 6.98104 14.9539 7.17607C14.8995 7.37109 14.7887 7.54571 14.6354 7.67804L14.6392 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.67741L11.8345 10.1043L12.6914 13.7337C12.7386 13.9307 12.7265 14.1373 12.6564 14.3274C12.5863 14.5175 12.4614 14.6826 12.2976 14.8018C12.1337 14.9209 11.9382 14.9889 11.7358 14.997C11.5333 15.0051 11.333 14.9531 11.1601 14.8474L8.00387 12.9049L4.84574 14.8474C4.67288 14.9525 4.47281 15.004 4.2707 14.9956C4.0686 14.9872 3.87351 14.9191 3.70999 14.8001C3.54648 14.681 3.42185 14.5162 3.35181 14.3264C3.28176 14.1367 3.26943 13.9304 3.31637 13.7337L4.17637 10.1043L1.36387 7.67741C1.21093 7.54523 1.10032 7.37092 1.04586 7.17625C0.991392 6.98159 0.995486 6.77519 1.05763 6.58283C1.11977 6.39048 1.2372 6.22069 1.39526 6.09468C1.55332 5.96866 1.745 5.89201 1.94637 5.87429L5.63387 5.57679L7.05637 2.13429C7.13336 1.94667 7.26441 1.78619 7.43285 1.67325C7.60129 1.56031 7.7995 1.5 8.0023 1.5C8.2051 1.5 8.40332 1.56031 8.57176 1.67325C8.7402 1.78619 8.87124 1.94667 8.94824 2.13429L10.3701 5.57679L14.0576 5.87429C14.2594 5.89135 14.4516 5.96758 14.6103 6.09342C14.7689 6.21925 14.8869 6.38911 14.9494 6.5817C15.0119 6.77429 15.0162 6.98104 14.9618 7.17607C14.9073 7.37109 14.7965 7.54571 14.6432 7.67804L14.647 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.67741L12.1675 10.1043L13.0244 13.7337C13.0717 13.9307 13.0595 14.1373 12.9894 14.3274C12.9193 14.5175 12.7944 14.6826 12.6306 14.8018C12.4667 14.9209 12.2712 14.9889 12.0688 14.997C11.8663 15.0051 11.666 14.9531 11.4931 14.8474L8.33687 12.9049L5.17875 14.8474C5.00589 14.9525 4.80581 15.004 4.60371 14.9956C4.40161 14.9872 4.20652 14.9191 4.043 14.8001C3.87949 14.681 3.75486 14.5162 3.68482 14.3264C3.61477 14.1367 3.60244 13.9304 3.64937 13.7337L4.50937 10.1043L1.69688 7.67741C1.54394 7.54523 1.43333 7.37092 1.37886 7.17625C1.3244 6.98159 1.32849 6.77519 1.39063 6.58283C1.45278 6.39048 1.57021 6.22069 1.72827 6.09468C1.88633 5.96866 2.07801 5.89201 2.27938 5.87429L5.96687 5.57679L7.38937 2.13429C7.46637 1.94667 7.59742 1.78619 7.76586 1.67325C7.93429 1.56031 8.13251 1.5 8.33531 1.5C8.53811 1.5 8.73633 1.56031 8.90477 1.67325C9.0732 1.78619 9.20425 1.94667 9.28125 2.13429L10.7031 5.57679L14.3906 5.87429C14.5924 5.89135 14.7846 5.96758 14.9433 6.09342C15.1019 6.21925 15.2199 6.38911 15.2824 6.5817C15.3449 6.77429 15.3492 6.98104 15.2948 7.17607C15.2403 7.37109 15.1295 7.54571 14.9762 7.67804L14.98 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.67741L12.1636 10.1043L13.0205 13.7337C13.0677 13.9307 13.0556 14.1373 12.9855 14.3274C12.9154 14.5175 12.7905 14.6826 12.6267 14.8018C12.4628 14.9209 12.2673 14.9889 12.0649 14.997C11.8624 15.0051 11.6621 14.9531 11.4892 14.8474L8.33297 12.9049L5.17484 14.8474C5.00199 14.9525 4.80191 15.004 4.59981 14.9956C4.3977 14.9872 4.20261 14.9191 4.03909 14.8001C3.87558 14.681 3.75095 14.5162 3.68091 14.3264C3.61086 14.1367 3.59853 13.9304 3.64547 13.7337L4.50547 10.1043L1.69297 7.67741C1.54003 7.54523 1.42942 7.37092 1.37496 7.17625C1.32049 6.98159 1.32459 6.77519 1.38673 6.58283C1.44887 6.39048 1.5663 6.22069 1.72436 6.09468C1.88242 5.96866 2.0741 5.89201 2.27547 5.87429L5.96297 5.57679L7.38547 2.13429C7.46246 1.94667 7.59351 1.78619 7.76195 1.67325C7.93039 1.56031 8.12861 1.5 8.3314 1.5C8.5342 1.5 8.73242 1.56031 8.90086 1.67325C9.0693 1.78619 9.20035 1.94667 9.27734 2.13429L10.6992 5.57679L14.3867 5.87429C14.5885 5.89135 14.7807 5.96758 14.9394 6.09342C15.098 6.21925 15.216 6.38911 15.2785 6.5817C15.341 6.77429 15.3453 6.98104 15.2909 7.17607C15.2364 7.37109 15.1256 7.54571 14.9723 7.67804L14.9761 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.67741L12.1636 10.1043L13.0205 13.7337C13.0677 13.9307 13.0556 14.1373 12.9855 14.3274C12.9154 14.5175 12.7905 14.6826 12.6267 14.8018C12.4628 14.9209 12.2673 14.9889 12.0649 14.997C11.8624 15.0051 11.6621 14.9531 11.4892 14.8474L8.33297 12.9049L5.17484 14.8474C5.00199 14.9525 4.80191 15.004 4.59981 14.9956C4.3977 14.9872 4.20261 14.9191 4.03909 14.8001C3.87558 14.681 3.75095 14.5162 3.68091 14.3264C3.61086 14.1367 3.59853 13.9304 3.64547 13.7337L4.50547 10.1043L1.69297 7.67741C1.54003 7.54523 1.42942 7.37092 1.37496 7.17625C1.32049 6.98159 1.32459 6.77519 1.38673 6.58283C1.44887 6.39048 1.5663 6.22069 1.72436 6.09468C1.88242 5.96866 2.0741 5.89201 2.27547 5.87429L5.96297 5.57679L7.38547 2.13429C7.46246 1.94667 7.59351 1.78619 7.76195 1.67325C7.93039 1.56031 8.12861 1.5 8.3314 1.5C8.5342 1.5 8.73242 1.56031 8.90086 1.67325C9.0693 1.78619 9.20035 1.94667 9.27734 2.13429L10.6992 5.57679L14.3867 5.87429C14.5885 5.89135 14.7807 5.96758 14.9394 6.09342C15.098 6.21925 15.216 6.38911 15.2785 6.5817C15.341 6.77429 15.3453 6.98104 15.2909 7.17607C15.2364 7.37109 15.1256 7.54571 14.9723 7.67804L14.9761 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9722 7.67741L12.1597 10.1043L13.0166 13.7337C13.0638 13.9307 13.0517 14.1373 12.9816 14.3274C12.9115 14.5175 12.7866 14.6826 12.6228 14.8018C12.4589 14.9209 12.2634 14.9889 12.061 14.997C11.8585 15.0051 11.6582 14.9531 11.4853 14.8474L8.32906 12.9049L5.17094 14.8474C4.99808 14.9525 4.798 15.004 4.5959 14.9956C4.3938 14.9872 4.1987 14.9191 4.03519 14.8001C3.87167 14.681 3.74705 14.5162 3.677 14.3264C3.60696 14.1367 3.59463 13.9304 3.64156 13.7337L4.50156 10.1043L1.68906 7.67741C1.53612 7.54523 1.42552 7.37092 1.37105 7.17625C1.31659 6.98159 1.32068 6.77519 1.38282 6.58283C1.44496 6.39048 1.5624 6.22069 1.72046 6.09468C1.87852 5.96866 2.0702 5.89201 2.27156 5.87429L5.95906 5.57679L7.38156 2.13429C7.45856 1.94667 7.58961 1.78619 7.75804 1.67325C7.92648 1.56031 8.1247 1.5 8.3275 1.5C8.5303 1.5 8.72852 1.56031 8.89695 1.67325C9.06539 1.78619 9.19644 1.94667 9.27344 2.13429L10.6953 5.57679L14.3828 5.87429C14.5846 5.89135 14.7768 5.96758 14.9355 6.09342C15.0941 6.21925 15.2121 6.38911 15.2746 6.5817C15.3371 6.77429 15.3414 6.98104 15.287 7.17607C15.2325 7.37109 15.1217 7.54571 14.9684 7.67804L14.9722 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.67741L12.1675 10.1043L13.0244 13.7337C13.0717 13.9307 13.0595 14.1373 12.9894 14.3274C12.9193 14.5175 12.7944 14.6826 12.6306 14.8018C12.4667 14.9209 12.2712 14.9889 12.0688 14.997C11.8663 15.0051 11.666 14.9531 11.4931 14.8474L8.33687 12.9049L5.17875 14.8474C5.00589 14.9525 4.80581 15.004 4.60371 14.9956C4.40161 14.9872 4.20652 14.9191 4.043 14.8001C3.87949 14.681 3.75486 14.5162 3.68482 14.3264C3.61477 14.1367 3.60244 13.9304 3.64937 13.7337L4.50937 10.1043L1.69688 7.67741C1.54394 7.54523 1.43333 7.37092 1.37886 7.17625C1.3244 6.98159 1.32849 6.77519 1.39063 6.58283C1.45278 6.39048 1.57021 6.22069 1.72827 6.09468C1.88633 5.96866 2.07801 5.89201 2.27938 5.87429L5.96687 5.57679L7.38937 2.13429C7.46637 1.94667 7.59742 1.78619 7.76586 1.67325C7.93429 1.56031 8.13251 1.5 8.33531 1.5C8.53811 1.5 8.73633 1.56031 8.90477 1.67325C9.0732 1.78619 9.20425 1.94667 9.28125 2.13429L10.7031 5.57679L14.3906 5.87429C14.5924 5.89135 14.7846 5.96758 14.9433 6.09342C15.1019 6.21925 15.2199 6.38911 15.2824 6.5817C15.3449 6.77429 15.3492 6.98104 15.2948 7.17607C15.2403 7.37109 15.1295 7.54571 14.9762 7.67804L14.98 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.67741L12.5015 10.1043L13.3584 13.7337C13.4056 13.9307 13.3935 14.1373 13.3234 14.3274C13.2533 14.5175 13.1284 14.6826 12.9646 14.8018C12.8007 14.9209 12.6052 14.9889 12.4028 14.997C12.2003 15.0051 12 14.9531 11.8271 14.8474L8.67086 12.9049L5.51273 14.8474C5.33988 14.9525 5.1398 15.004 4.9377 14.9956C4.73559 14.9872 4.5405 14.9191 4.37699 14.8001C4.21347 14.681 4.08884 14.5162 4.0188 14.3264C3.94876 14.1367 3.93642 13.9304 3.98336 13.7337L4.84336 10.1043L2.03086 7.67741C1.87792 7.54523 1.76731 7.37092 1.71285 7.17625C1.65838 6.98159 1.66248 6.77519 1.72462 6.58283C1.78676 6.39048 1.90419 6.22069 2.06225 6.09468C2.22031 5.96866 2.41199 5.89201 2.61336 5.87429L6.30086 5.57679L7.72336 2.13429C7.80035 1.94667 7.9314 1.78619 8.09984 1.67325C8.26828 1.56031 8.4665 1.5 8.6693 1.5C8.87209 1.5 9.07031 1.56031 9.23875 1.67325C9.40719 1.78619 9.53824 1.94667 9.61523 2.13429L11.0371 5.57679L14.7246 5.87429C14.9264 5.89135 15.1186 5.96758 15.2772 6.09342C15.4359 6.21925 15.5539 6.38911 15.6164 6.5817C15.6789 6.77429 15.6832 6.98104 15.6288 7.17607C15.5743 7.37109 15.4635 7.54571 15.3102 7.67804L15.314 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.67741L12.4976 10.1043L13.3545 13.7337C13.4017 13.9307 13.3896 14.1373 13.3195 14.3274C13.2494 14.5175 13.1245 14.6826 12.9607 14.8018C12.7968 14.9209 12.6013 14.9889 12.3989 14.997C12.1964 15.0051 11.9961 14.9531 11.8232 14.8474L8.66695 12.9049L5.50883 14.8474C5.33597 14.9525 5.13589 15.004 4.93379 14.9956C4.73169 14.9872 4.53659 14.9191 4.37308 14.8001C4.20956 14.681 4.08494 14.5162 4.01489 14.3264C3.94485 14.1367 3.93252 13.9304 3.97945 13.7337L4.83945 10.1043L2.02695 7.67741C1.87401 7.54523 1.76341 7.37092 1.70894 7.17625C1.65448 6.98159 1.65857 6.77519 1.72071 6.58283C1.78285 6.39048 1.90029 6.22069 2.05835 6.09468C2.21641 5.96866 2.40809 5.89201 2.60945 5.87429L6.29695 5.57679L7.71945 2.13429C7.79645 1.94667 7.9275 1.78619 8.09593 1.67325C8.26437 1.56031 8.46259 1.5 8.66539 1.5C8.86819 1.5 9.06641 1.56031 9.23484 1.67325C9.40328 1.78619 9.53433 1.94667 9.61133 2.13429L11.0332 5.57679L14.7207 5.87429C14.9225 5.89135 15.1147 5.96758 15.2733 6.09342C15.432 6.21925 15.5499 6.38911 15.6125 6.5817C15.675 6.77429 15.6793 6.98104 15.6248 7.17607C15.5704 7.37109 15.4596 7.54571 15.3063 7.67804L15.3101 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.67741L12.4976 10.1043L13.3545 13.7337C13.4017 13.9307 13.3896 14.1373 13.3195 14.3274C13.2494 14.5175 13.1245 14.6826 12.9607 14.8018C12.7968 14.9209 12.6013 14.9889 12.3989 14.997C12.1964 15.0051 11.9961 14.9531 11.8232 14.8474L8.66695 12.9049L5.50883 14.8474C5.33597 14.9525 5.13589 15.004 4.93379 14.9956C4.73169 14.9872 4.53659 14.9191 4.37308 14.8001C4.20956 14.681 4.08494 14.5162 4.01489 14.3264C3.94485 14.1367 3.93252 13.9304 3.97945 13.7337L4.83945 10.1043L2.02695 7.67741C1.87401 7.54523 1.76341 7.37092 1.70894 7.17625C1.65448 6.98159 1.65857 6.77519 1.72071 6.58283C1.78285 6.39048 1.90029 6.22069 2.05835 6.09468C2.21641 5.96866 2.40809 5.89201 2.60945 5.87429L6.29695 5.57679L7.71945 2.13429C7.79645 1.94667 7.9275 1.78619 8.09593 1.67325C8.26437 1.56031 8.46259 1.5 8.66539 1.5C8.86819 1.5 9.06641 1.56031 9.23484 1.67325C9.40328 1.78619 9.53433 1.94667 9.61133 2.13429L11.0332 5.57679L14.7207 5.87429C14.9225 5.89135 15.1147 5.96758 15.2733 6.09342C15.432 6.21925 15.5499 6.38911 15.6125 6.5817C15.675 6.77429 15.6793 6.98104 15.6248 7.17607C15.5704 7.37109 15.4596 7.54571 15.3063 7.67804L15.3101 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3062 7.67741L12.4937 10.1043L13.3505 13.7337C13.3978 13.9307 13.3856 14.1373 13.3156 14.3274C13.2455 14.5175 13.1206 14.6826 12.9568 14.8018C12.7929 14.9209 12.5974 14.9889 12.3949 14.997C12.1925 15.0051 11.9922 14.9531 11.8193 14.8474L8.66305 12.9049L5.50492 14.8474C5.33206 14.9525 5.13199 15.004 4.92988 14.9956C4.72778 14.9872 4.53269 14.9191 4.36917 14.8001C4.20566 14.681 4.08103 14.5162 4.01099 14.3264C3.94094 14.1367 3.92861 13.9304 3.97555 13.7337L4.83555 10.1043L2.02305 7.67741C1.87011 7.54523 1.7595 7.37092 1.70504 7.17625C1.65057 6.98159 1.65467 6.77519 1.71681 6.58283C1.77895 6.39048 1.89638 6.22069 2.05444 6.09468C2.2125 5.96866 2.40418 5.89201 2.60555 5.87429L6.29305 5.57679L7.71555 2.13429C7.79254 1.94667 7.92359 1.78619 8.09203 1.67325C8.26047 1.56031 8.45868 1.5 8.66148 1.5C8.86428 1.5 9.0625 1.56031 9.23094 1.67325C9.39938 1.78619 9.53042 1.94667 9.60742 2.13429L11.0293 5.57679L14.7168 5.87429C14.9186 5.89135 15.1108 5.96758 15.2694 6.09342C15.4281 6.21925 15.546 6.38911 15.6086 6.5817C15.6711 6.77429 15.6754 6.98104 15.6209 7.17607C15.5665 7.37109 15.4557 7.54571 15.3024 7.67804L15.3062 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.67741L12.5015 10.1043L13.3584 13.7337C13.4056 13.9307 13.3935 14.1373 13.3234 14.3274C13.2533 14.5175 13.1284 14.6826 12.9646 14.8018C12.8007 14.9209 12.6052 14.9889 12.4028 14.997C12.2003 15.0051 12 14.9531 11.8271 14.8474L8.67086 12.9049L5.51273 14.8474C5.33988 14.9525 5.1398 15.004 4.9377 14.9956C4.73559 14.9872 4.5405 14.9191 4.37699 14.8001C4.21347 14.681 4.08884 14.5162 4.0188 14.3264C3.94876 14.1367 3.93642 13.9304 3.98336 13.7337L4.84336 10.1043L2.03086 7.67741C1.87792 7.54523 1.76731 7.37092 1.71285 7.17625C1.65838 6.98159 1.66248 6.77519 1.72462 6.58283C1.78676 6.39048 1.90419 6.22069 2.06225 6.09468C2.22031 5.96866 2.41199 5.89201 2.61336 5.87429L6.30086 5.57679L7.72336 2.13429C7.80035 1.94667 7.9314 1.78619 8.09984 1.67325C8.26828 1.56031 8.4665 1.5 8.6693 1.5C8.87209 1.5 9.07031 1.56031 9.23875 1.67325C9.40719 1.78619 9.53824 1.94667 9.61523 2.13429L11.0371 5.57679L14.7246 5.87429C14.9264 5.89135 15.1186 5.96758 15.2772 6.09342C15.4359 6.21925 15.5539 6.38911 15.6164 6.5817C15.6789 6.77429 15.6832 6.98104 15.6288 7.17607C15.5743 7.37109 15.4635 7.54571 15.3102 7.67804L15.314 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67625C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46866 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94433 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6063 5.59342C14.765 5.71925 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48104 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.17741L11.8306 9.60429L12.6875 13.2337C12.7347 13.4307 12.7226 13.6373 12.6525 13.8274C12.5824 14.0175 12.4575 14.1826 12.2937 14.3018C12.1298 14.4209 11.9343 14.4889 11.7319 14.497C11.5294 14.5051 11.3291 14.4531 11.1562 14.3474L7.99996 12.4049L4.84184 14.3474C4.66898 14.4525 4.4689 14.504 4.2668 14.4956C4.06469 14.4872 3.8696 14.4191 3.70609 14.3001C3.54257 14.181 3.41795 14.0162 3.3479 13.8264C3.27786 13.6367 3.26553 13.4304 3.31246 13.2337L4.17246 9.60429L1.35996 7.17741C1.20702 7.04523 1.09641 6.87092 1.04195 6.67625C0.987486 6.48159 0.99158 6.27519 1.05372 6.08283C1.11586 5.89048 1.23329 5.72069 1.39135 5.59468C1.54941 5.46866 1.7411 5.39201 1.94246 5.37429L5.62996 5.07679L7.05246 1.63429C7.12946 1.44667 7.2605 1.28619 7.42894 1.17325C7.59738 1.06031 7.7956 1 7.9984 1C8.2012 1 8.39942 1.06031 8.56785 1.17325C8.73629 1.28619 8.86734 1.44667 8.94433 1.63429L10.3662 5.07679L14.0537 5.37429C14.2555 5.39135 14.4477 5.46758 14.6063 5.59342C14.765 5.71925 14.883 5.88911 14.9455 6.0817C15.008 6.27429 15.0123 6.48104 14.9579 6.67607C14.9034 6.87109 14.7926 7.04571 14.6393 7.17804L14.6431 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6392 7.17741L11.8267 9.60429L12.6836 13.2337C12.7308 13.4307 12.7187 13.6373 12.6486 13.8274C12.5785 14.0175 12.4536 14.1826 12.2898 14.3018C12.1259 14.4209 11.9304 14.4889 11.728 14.497C11.5255 14.5051 11.3252 14.4531 11.1523 14.3474L7.99605 12.4049L4.83793 14.3474C4.66507 14.4525 4.46499 14.504 4.26289 14.4956C4.06079 14.4872 3.8657 14.4191 3.70218 14.3001C3.53867 14.181 3.41404 14.0162 3.34399 13.8264C3.27395 13.6367 3.26162 13.4304 3.30855 13.2337L4.16855 9.60429L1.35605 7.17741C1.20312 7.04523 1.09251 6.87092 1.03804 6.67625C0.98358 6.48159 0.987674 6.27519 1.04981 6.08283C1.11195 5.89048 1.22939 5.72069 1.38745 5.59468C1.54551 5.46866 1.73719 5.39201 1.93855 5.37429L5.62605 5.07679L7.04855 1.63429C7.12555 1.44667 7.2566 1.28619 7.42504 1.17325C7.59347 1.06031 7.79169 1 7.99449 1C8.19729 1 8.39551 1.06031 8.56395 1.17325C8.73238 1.28619 8.86343 1.44667 8.94043 1.63429L10.3623 5.07679L14.0498 5.37429C14.2516 5.39135 14.4438 5.46758 14.6024 5.59342C14.7611 5.71925 14.879 5.88911 14.9416 6.0817C15.0041 6.27429 15.0084 6.48104 14.9539 6.67607C14.8995 6.87109 14.7887 7.04571 14.6354 7.17804L14.6392 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.17741L12.1675 9.60429L13.0244 13.2337C13.0717 13.4307 13.0595 13.6373 12.9894 13.8274C12.9193 14.0175 12.7944 14.1826 12.6306 14.3018C12.4667 14.4209 12.2712 14.4889 12.0688 14.497C11.8663 14.5051 11.666 14.4531 11.4931 14.3474L8.33687 12.4049L5.17875 14.3474C5.00589 14.4525 4.80581 14.504 4.60371 14.4956C4.40161 14.4872 4.20652 14.4191 4.043 14.3001C3.87949 14.181 3.75486 14.0162 3.68482 13.8264C3.61477 13.6367 3.60244 13.4304 3.64937 13.2337L4.50937 9.60429L1.69688 7.17741C1.54394 7.04523 1.43333 6.87092 1.37886 6.67625C1.3244 6.48159 1.32849 6.27519 1.39063 6.08283C1.45278 5.89048 1.57021 5.72069 1.72827 5.59468C1.88633 5.46866 2.07801 5.39201 2.27938 5.37429L5.96687 5.07679L7.38937 1.63429C7.46637 1.44667 7.59742 1.28619 7.76586 1.17325C7.93429 1.06031 8.13251 1 8.33531 1C8.53811 1 8.73633 1.06031 8.90477 1.17325C9.0732 1.28619 9.20425 1.44667 9.28125 1.63429L10.7031 5.07679L14.3906 5.37429C14.5924 5.39135 14.7846 5.46758 14.9433 5.59342C15.1019 5.71925 15.2199 5.88911 15.2824 6.0817C15.3449 6.27429 15.3492 6.48104 15.2948 6.67607C15.2403 6.87109 15.1295 7.04571 14.9762 7.17804L14.98 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.17741L12.1636 9.60429L13.0205 13.2337C13.0677 13.4307 13.0556 13.6373 12.9855 13.8274C12.9154 14.0175 12.7905 14.1826 12.6267 14.3018C12.4628 14.4209 12.2673 14.4889 12.0649 14.497C11.8624 14.5051 11.6621 14.4531 11.4892 14.3474L8.33297 12.4049L5.17484 14.3474C5.00199 14.4525 4.80191 14.504 4.59981 14.4956C4.3977 14.4872 4.20261 14.4191 4.03909 14.3001C3.87558 14.181 3.75095 14.0162 3.68091 13.8264C3.61086 13.6367 3.59853 13.4304 3.64547 13.2337L4.50547 9.60429L1.69297 7.17741C1.54003 7.04523 1.42942 6.87092 1.37496 6.67625C1.32049 6.48159 1.32459 6.27519 1.38673 6.08283C1.44887 5.89048 1.5663 5.72069 1.72436 5.59468C1.88242 5.46866 2.0741 5.39201 2.27547 5.37429L5.96297 5.07679L7.38547 1.63429C7.46246 1.44667 7.59351 1.28619 7.76195 1.17325C7.93039 1.06031 8.12861 1 8.3314 1C8.5342 1 8.73242 1.06031 8.90086 1.17325C9.0693 1.28619 9.20035 1.44667 9.27734 1.63429L10.6992 5.07679L14.3867 5.37429C14.5885 5.39135 14.7807 5.46758 14.9394 5.59342C15.098 5.71925 15.216 5.88911 15.2785 6.0817C15.341 6.27429 15.3453 6.48104 15.2909 6.67607C15.2364 6.87109 15.1256 7.04571 14.9723 7.17804L14.9761 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.17741L12.1636 9.60429L13.0205 13.2337C13.0677 13.4307 13.0556 13.6373 12.9855 13.8274C12.9154 14.0175 12.7905 14.1826 12.6267 14.3018C12.4628 14.4209 12.2673 14.4889 12.0649 14.497C11.8624 14.5051 11.6621 14.4531 11.4892 14.3474L8.33297 12.4049L5.17484 14.3474C5.00199 14.4525 4.80191 14.504 4.59981 14.4956C4.3977 14.4872 4.20261 14.4191 4.03909 14.3001C3.87558 14.181 3.75095 14.0162 3.68091 13.8264C3.61086 13.6367 3.59853 13.4304 3.64547 13.2337L4.50547 9.60429L1.69297 7.17741C1.54003 7.04523 1.42942 6.87092 1.37496 6.67625C1.32049 6.48159 1.32459 6.27519 1.38673 6.08283C1.44887 5.89048 1.5663 5.72069 1.72436 5.59468C1.88242 5.46866 2.0741 5.39201 2.27547 5.37429L5.96297 5.07679L7.38547 1.63429C7.46246 1.44667 7.59351 1.28619 7.76195 1.17325C7.93039 1.06031 8.12861 1 8.3314 1C8.5342 1 8.73242 1.06031 8.90086 1.17325C9.0693 1.28619 9.20035 1.44667 9.27734 1.63429L10.6992 5.07679L14.3867 5.37429C14.5885 5.39135 14.7807 5.46758 14.9394 5.59342C15.098 5.71925 15.216 5.88911 15.2785 6.0817C15.341 6.27429 15.3453 6.48104 15.2909 6.67607C15.2364 6.87109 15.1256 7.04571 14.9723 7.17804L14.9761 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9722 7.17741L12.1597 9.60429L13.0166 13.2337C13.0638 13.4307 13.0517 13.6373 12.9816 13.8274C12.9115 14.0175 12.7866 14.1826 12.6228 14.3018C12.4589 14.4209 12.2634 14.4889 12.061 14.497C11.8585 14.5051 11.6582 14.4531 11.4853 14.3474L8.32906 12.4049L5.17094 14.3474C4.99808 14.4525 4.798 14.504 4.5959 14.4956C4.3938 14.4872 4.1987 14.4191 4.03519 14.3001C3.87167 14.181 3.74705 14.0162 3.677 13.8264C3.60696 13.6367 3.59463 13.4304 3.64156 13.2337L4.50156 9.60429L1.68906 7.17741C1.53612 7.04523 1.42552 6.87092 1.37105 6.67625C1.31659 6.48159 1.32068 6.27519 1.38282 6.08283C1.44496 5.89048 1.5624 5.72069 1.72046 5.59468C1.87852 5.46866 2.0702 5.39201 2.27156 5.37429L5.95906 5.07679L7.38156 1.63429C7.45856 1.44667 7.58961 1.28619 7.75804 1.17325C7.92648 1.06031 8.1247 1 8.3275 1C8.5303 1 8.72852 1.06031 8.89695 1.17325C9.06539 1.28619 9.19644 1.44667 9.27344 1.63429L10.6953 5.07679L14.3828 5.37429C14.5846 5.39135 14.7768 5.46758 14.9355 5.59342C15.0941 5.71925 15.2121 5.88911 15.2746 6.0817C15.3371 6.27429 15.3414 6.48104 15.287 6.67607C15.2325 6.87109 15.1217 7.04571 14.9684 7.17804L14.9722 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.17741L12.1675 9.60429L13.0244 13.2337C13.0717 13.4307 13.0595 13.6373 12.9894 13.8274C12.9193 14.0175 12.7944 14.1826 12.6306 14.3018C12.4667 14.4209 12.2712 14.4889 12.0688 14.497C11.8663 14.5051 11.666 14.4531 11.4931 14.3474L8.33687 12.4049L5.17875 14.3474C5.00589 14.4525 4.80581 14.504 4.60371 14.4956C4.40161 14.4872 4.20652 14.4191 4.043 14.3001C3.87949 14.181 3.75486 14.0162 3.68482 13.8264C3.61477 13.6367 3.60244 13.4304 3.64937 13.2337L4.50937 9.60429L1.69688 7.17741C1.54394 7.04523 1.43333 6.87092 1.37886 6.67625C1.3244 6.48159 1.32849 6.27519 1.39063 6.08283C1.45278 5.89048 1.57021 5.72069 1.72827 5.59468C1.88633 5.46866 2.07801 5.39201 2.27938 5.37429L5.96687 5.07679L7.38937 1.63429C7.46637 1.44667 7.59742 1.28619 7.76586 1.17325C7.93429 1.06031 8.13251 1 8.33531 1C8.53811 1 8.73633 1.06031 8.90477 1.17325C9.0732 1.28619 9.20425 1.44667 9.28125 1.63429L10.7031 5.07679L14.3906 5.37429C14.5924 5.39135 14.7846 5.46758 14.9433 5.59342C15.1019 5.71925 15.2199 5.88911 15.2824 6.0817C15.3449 6.27429 15.3492 6.48104 15.2948 6.67607C15.2403 6.87109 15.1295 7.04571 14.9762 7.17804L14.98 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.17741L12.5015 9.60429L13.3584 13.2337C13.4056 13.4307 13.3935 13.6373 13.3234 13.8274C13.2533 14.0175 13.1284 14.1826 12.9646 14.3018C12.8007 14.4209 12.6052 14.4889 12.4028 14.497C12.2003 14.5051 12 14.4531 11.8271 14.3474L8.67086 12.4049L5.51273 14.3474C5.33988 14.4525 5.1398 14.504 4.9377 14.4956C4.73559 14.4872 4.5405 14.4191 4.37699 14.3001C4.21347 14.181 4.08884 14.0162 4.0188 13.8264C3.94876 13.6367 3.93642 13.4304 3.98336 13.2337L4.84336 9.60429L2.03086 7.17741C1.87792 7.04523 1.76731 6.87092 1.71285 6.67625C1.65838 6.48159 1.66248 6.27519 1.72462 6.08283C1.78676 5.89048 1.90419 5.72069 2.06225 5.59468C2.22031 5.46866 2.41199 5.39201 2.61336 5.37429L6.30086 5.07679L7.72336 1.63429C7.80035 1.44667 7.9314 1.28619 8.09984 1.17325C8.26828 1.06031 8.4665 1 8.6693 1C8.87209 1 9.07031 1.06031 9.23875 1.17325C9.40719 1.28619 9.53824 1.44667 9.61523 1.63429L11.0371 5.07679L14.7246 5.37429C14.9264 5.39135 15.1186 5.46758 15.2772 5.59342C15.4359 5.71925 15.5539 5.88911 15.6164 6.0817C15.6789 6.27429 15.6832 6.48104 15.6288 6.67607C15.5743 6.87109 15.4635 7.04571 15.3102 7.17804L15.314 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.17741L12.4976 9.60429L13.3545 13.2337C13.4017 13.4307 13.3896 13.6373 13.3195 13.8274C13.2494 14.0175 13.1245 14.1826 12.9607 14.3018C12.7968 14.4209 12.6013 14.4889 12.3989 14.497C12.1964 14.5051 11.9961 14.4531 11.8232 14.3474L8.66695 12.4049L5.50883 14.3474C5.33597 14.4525 5.13589 14.504 4.93379 14.4956C4.73169 14.4872 4.53659 14.4191 4.37308 14.3001C4.20956 14.181 4.08494 14.0162 4.01489 13.8264C3.94485 13.6367 3.93252 13.4304 3.97945 13.2337L4.83945 9.60429L2.02695 7.17741C1.87401 7.04523 1.76341 6.87092 1.70894 6.67625C1.65448 6.48159 1.65857 6.27519 1.72071 6.08283C1.78285 5.89048 1.90029 5.72069 2.05835 5.59468C2.21641 5.46866 2.40809 5.39201 2.60945 5.37429L6.29695 5.07679L7.71945 1.63429C7.79645 1.44667 7.9275 1.28619 8.09593 1.17325C8.26437 1.06031 8.46259 1 8.66539 1C8.86819 1 9.06641 1.06031 9.23484 1.17325C9.40328 1.28619 9.53433 1.44667 9.61133 1.63429L11.0332 5.07679L14.7207 5.37429C14.9225 5.39135 15.1147 5.46758 15.2733 5.59342C15.432 5.71925 15.5499 5.88911 15.6125 6.0817C15.675 6.27429 15.6793 6.48104 15.6248 6.67607C15.5704 6.87109 15.4596 7.04571 15.3063 7.17804L15.3101 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.17741L12.4976 9.60429L13.3545 13.2337C13.4017 13.4307 13.3896 13.6373 13.3195 13.8274C13.2494 14.0175 13.1245 14.1826 12.9607 14.3018C12.7968 14.4209 12.6013 14.4889 12.3989 14.497C12.1964 14.5051 11.9961 14.4531 11.8232 14.3474L8.66695 12.4049L5.50883 14.3474C5.33597 14.4525 5.13589 14.504 4.93379 14.4956C4.73169 14.4872 4.53659 14.4191 4.37308 14.3001C4.20956 14.181 4.08494 14.0162 4.01489 13.8264C3.94485 13.6367 3.93252 13.4304 3.97945 13.2337L4.83945 9.60429L2.02695 7.17741C1.87401 7.04523 1.76341 6.87092 1.70894 6.67625C1.65448 6.48159 1.65857 6.27519 1.72071 6.08283C1.78285 5.89048 1.90029 5.72069 2.05835 5.59468C2.21641 5.46866 2.40809 5.39201 2.60945 5.37429L6.29695 5.07679L7.71945 1.63429C7.79645 1.44667 7.9275 1.28619 8.09593 1.17325C8.26437 1.06031 8.46259 1 8.66539 1C8.86819 1 9.06641 1.06031 9.23484 1.17325C9.40328 1.28619 9.53433 1.44667 9.61133 1.63429L11.0332 5.07679L14.7207 5.37429C14.9225 5.39135 15.1147 5.46758 15.2733 5.59342C15.432 5.71925 15.5499 5.88911 15.6125 6.0817C15.675 6.27429 15.6793 6.48104 15.6248 6.67607C15.5704 6.87109 15.4596 7.04571 15.3063 7.17804L15.3101 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3062 7.17741L12.4937 9.60429L13.3505 13.2337C13.3978 13.4307 13.3856 13.6373 13.3156 13.8274C13.2455 14.0175 13.1206 14.1826 12.9568 14.3018C12.7929 14.4209 12.5974 14.4889 12.3949 14.497C12.1925 14.5051 11.9922 14.4531 11.8193 14.3474L8.66305 12.4049L5.50492 14.3474C5.33206 14.4525 5.13199 14.504 4.92988 14.4956C4.72778 14.4872 4.53269 14.4191 4.36917 14.3001C4.20566 14.181 4.08103 14.0162 4.01099 13.8264C3.94094 13.6367 3.92861 13.4304 3.97555 13.2337L4.83555 9.60429L2.02305 7.17741C1.87011 7.04523 1.7595 6.87092 1.70504 6.67625C1.65057 6.48159 1.65467 6.27519 1.71681 6.08283C1.77895 5.89048 1.89638 5.72069 2.05444 5.59468C2.2125 5.46866 2.40418 5.39201 2.60555 5.37429L6.29305 5.07679L7.71555 1.63429C7.79254 1.44667 7.92359 1.28619 8.09203 1.17325C8.26047 1.06031 8.45868 1 8.66148 1C8.86428 1 9.0625 1.06031 9.23094 1.17325C9.39938 1.28619 9.53042 1.44667 9.60742 1.63429L11.0293 5.07679L14.7168 5.37429C14.9186 5.39135 15.1108 5.46758 15.2694 5.59342C15.4281 5.71925 15.546 5.88911 15.6086 6.0817C15.6711 6.27429 15.6754 6.48104 15.6209 6.67607C15.5665 6.87109 15.4557 7.04571 15.3024 7.17804L15.3062 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.17741L12.5015 9.60429L13.3584 13.2337C13.4056 13.4307 13.3935 13.6373 13.3234 13.8274C13.2533 14.0175 13.1284 14.1826 12.9646 14.3018C12.8007 14.4209 12.6052 14.4889 12.4028 14.497C12.2003 14.5051 12 14.4531 11.8271 14.3474L8.67086 12.4049L5.51273 14.3474C5.33988 14.4525 5.1398 14.504 4.9377 14.4956C4.73559 14.4872 4.5405 14.4191 4.37699 14.3001C4.21347 14.181 4.08884 14.0162 4.0188 13.8264C3.94876 13.6367 3.93642 13.4304 3.98336 13.2337L4.84336 9.60429L2.03086 7.17741C1.87792 7.04523 1.76731 6.87092 1.71285 6.67625C1.65838 6.48159 1.66248 6.27519 1.72462 6.08283C1.78676 5.89048 1.90419 5.72069 2.06225 5.59468C2.22031 5.46866 2.41199 5.39201 2.61336 5.37429L6.30086 5.07679L7.72336 1.63429C7.80035 1.44667 7.9314 1.28619 8.09984 1.17325C8.26828 1.06031 8.4665 1 8.6693 1C8.87209 1 9.07031 1.06031 9.23875 1.17325C9.40719 1.28619 9.53824 1.44667 9.61523 1.63429L11.0371 5.07679L14.7246 5.37429C14.9264 5.39135 15.1186 5.46758 15.2772 5.59342C15.4359 5.71925 15.5539 5.88911 15.6164 6.0817C15.6789 6.27429 15.6832 6.48104 15.6288 6.67607C15.5743 6.87109 15.4635 7.04571 15.3102 7.17804L15.314 7.17741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.67741L11.8345 10.1043L12.6914 13.7337C12.7386 13.9307 12.7265 14.1373 12.6564 14.3274C12.5863 14.5175 12.4614 14.6826 12.2976 14.8018C12.1337 14.9209 11.9382 14.9889 11.7358 14.997C11.5333 15.0051 11.333 14.9531 11.1601 14.8474L8.00387 12.9049L4.84574 14.8474C4.67288 14.9525 4.47281 15.004 4.2707 14.9956C4.0686 14.9872 3.87351 14.9191 3.70999 14.8001C3.54648 14.681 3.42185 14.5162 3.35181 14.3264C3.28176 14.1367 3.26943 13.9304 3.31637 13.7337L4.17637 10.1043L1.36387 7.67741C1.21093 7.54523 1.10032 7.37092 1.04586 7.17625C0.991392 6.98159 0.995486 6.77519 1.05763 6.58283C1.11977 6.39048 1.2372 6.22069 1.39526 6.09468C1.55332 5.96866 1.745 5.89201 1.94637 5.87429L5.63387 5.57679L7.05637 2.13429C7.13336 1.94667 7.26441 1.78619 7.43285 1.67325C7.60129 1.56031 7.7995 1.5 8.0023 1.5C8.2051 1.5 8.40332 1.56031 8.57176 1.67325C8.7402 1.78619 8.87124 1.94667 8.94824 2.13429L10.3701 5.57679L14.0576 5.87429C14.2594 5.89135 14.4516 5.96758 14.6103 6.09342C14.7689 6.21925 14.8869 6.38911 14.9494 6.5817C15.0119 6.77429 15.0162 6.98104 14.9618 7.17607C14.9073 7.37109 14.7965 7.54571 14.6432 7.67804L14.647 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.67741L11.8306 10.1043L12.6875 13.7337C12.7347 13.9307 12.7226 14.1373 12.6525 14.3274C12.5824 14.5175 12.4575 14.6826 12.2937 14.8018C12.1298 14.9209 11.9343 14.9889 11.7319 14.997C11.5294 15.0051 11.3291 14.9531 11.1562 14.8474L7.99996 12.9049L4.84184 14.8474C4.66898 14.9525 4.4689 15.004 4.2668 14.9956C4.06469 14.9872 3.8696 14.9191 3.70609 14.8001C3.54257 14.681 3.41795 14.5162 3.3479 14.3264C3.27786 14.1367 3.26553 13.9304 3.31246 13.7337L4.17246 10.1043L1.35996 7.67741C1.20702 7.54523 1.09641 7.37092 1.04195 7.17625C0.987486 6.98159 0.99158 6.77519 1.05372 6.58283C1.11586 6.39048 1.23329 6.22069 1.39135 6.09468C1.54941 5.96866 1.7411 5.89201 1.94246 5.87429L5.62996 5.57679L7.05246 2.13429C7.12946 1.94667 7.2605 1.78619 7.42894 1.67325C7.59738 1.56031 7.7956 1.5 7.9984 1.5C8.2012 1.5 8.39942 1.56031 8.56785 1.67325C8.73629 1.78619 8.86734 1.94667 8.94433 2.13429L10.3662 5.57679L14.0537 5.87429C14.2555 5.89135 14.4477 5.96758 14.6063 6.09342C14.765 6.21925 14.883 6.38911 14.9455 6.5817C15.008 6.77429 15.0123 6.98104 14.9579 7.17607C14.9034 7.37109 14.7926 7.54571 14.6393 7.67804L14.6431 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6431 7.67741L11.8306 10.1043L12.6875 13.7337C12.7347 13.9307 12.7226 14.1373 12.6525 14.3274C12.5824 14.5175 12.4575 14.6826 12.2937 14.8018C12.1298 14.9209 11.9343 14.9889 11.7319 14.997C11.5294 15.0051 11.3291 14.9531 11.1562 14.8474L7.99996 12.9049L4.84184 14.8474C4.66898 14.9525 4.4689 15.004 4.2668 14.9956C4.06469 14.9872 3.8696 14.9191 3.70609 14.8001C3.54257 14.681 3.41795 14.5162 3.3479 14.3264C3.27786 14.1367 3.26553 13.9304 3.31246 13.7337L4.17246 10.1043L1.35996 7.67741C1.20702 7.54523 1.09641 7.37092 1.04195 7.17625C0.987486 6.98159 0.99158 6.77519 1.05372 6.58283C1.11586 6.39048 1.23329 6.22069 1.39135 6.09468C1.54941 5.96866 1.7411 5.89201 1.94246 5.87429L5.62996 5.57679L7.05246 2.13429C7.12946 1.94667 7.2605 1.78619 7.42894 1.67325C7.59738 1.56031 7.7956 1.5 7.9984 1.5C8.2012 1.5 8.39942 1.56031 8.56785 1.67325C8.73629 1.78619 8.86734 1.94667 8.94433 2.13429L10.3662 5.57679L14.0537 5.87429C14.2555 5.89135 14.4477 5.96758 14.6063 6.09342C14.765 6.21925 14.883 6.38911 14.9455 6.5817C15.008 6.77429 15.0123 6.98104 14.9579 7.17607C14.9034 7.37109 14.7926 7.54571 14.6393 7.67804L14.6431 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.6392 7.67741L11.8267 10.1043L12.6836 13.7337C12.7308 13.9307 12.7187 14.1373 12.6486 14.3274C12.5785 14.5175 12.4536 14.6826 12.2898 14.8018C12.1259 14.9209 11.9304 14.9889 11.728 14.997C11.5255 15.0051 11.3252 14.9531 11.1523 14.8474L7.99605 12.9049L4.83793 14.8474C4.66507 14.9525 4.46499 15.004 4.26289 14.9956C4.06079 14.9872 3.8657 14.9191 3.70218 14.8001C3.53867 14.681 3.41404 14.5162 3.34399 14.3264C3.27395 14.1367 3.26162 13.9304 3.30855 13.7337L4.16855 10.1043L1.35605 7.67741C1.20312 7.54523 1.09251 7.37092 1.03804 7.17625C0.98358 6.98159 0.987674 6.77519 1.04981 6.58283C1.11195 6.39048 1.22939 6.22069 1.38745 6.09468C1.54551 5.96866 1.73719 5.89201 1.93855 5.87429L5.62605 5.57679L7.04855 2.13429C7.12555 1.94667 7.2566 1.78619 7.42504 1.67325C7.59347 1.56031 7.79169 1.5 7.99449 1.5C8.19729 1.5 8.39551 1.56031 8.56395 1.67325C8.73238 1.78619 8.86343 1.94667 8.94043 2.13429L10.3623 5.57679L14.0498 5.87429C14.2516 5.89135 14.4438 5.96758 14.6024 6.09342C14.7611 6.21925 14.879 6.38911 14.9416 6.5817C15.0041 6.77429 15.0084 6.98104 14.9539 7.17607C14.8995 7.37109 14.7887 7.54571 14.6354 7.67804L14.6392 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.647 7.67741L11.8345 10.1043L12.6914 13.7337C12.7386 13.9307 12.7265 14.1373 12.6564 14.3274C12.5863 14.5175 12.4614 14.6826 12.2976 14.8018C12.1337 14.9209 11.9382 14.9889 11.7358 14.997C11.5333 15.0051 11.333 14.9531 11.1601 14.8474L8.00387 12.9049L4.84574 14.8474C4.67288 14.9525 4.47281 15.004 4.2707 14.9956C4.0686 14.9872 3.87351 14.9191 3.70999 14.8001C3.54648 14.681 3.42185 14.5162 3.35181 14.3264C3.28176 14.1367 3.26943 13.9304 3.31637 13.7337L4.17637 10.1043L1.36387 7.67741C1.21093 7.54523 1.10032 7.37092 1.04586 7.17625C0.991392 6.98159 0.995486 6.77519 1.05763 6.58283C1.11977 6.39048 1.2372 6.22069 1.39526 6.09468C1.55332 5.96866 1.745 5.89201 1.94637 5.87429L5.63387 5.57679L7.05637 2.13429C7.13336 1.94667 7.26441 1.78619 7.43285 1.67325C7.60129 1.56031 7.7995 1.5 8.0023 1.5C8.2051 1.5 8.40332 1.56031 8.57176 1.67325C8.7402 1.78619 8.87124 1.94667 8.94824 2.13429L10.3701 5.57679L14.0576 5.87429C14.2594 5.89135 14.4516 5.96758 14.6103 6.09342C14.7689 6.21925 14.8869 6.38911 14.9494 6.5817C15.0119 6.77429 15.0162 6.98104 14.9618 7.17607C14.9073 7.37109 14.7965 7.54571 14.6432 7.67804L14.647 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.67741L12.1675 10.1043L13.0244 13.7337C13.0717 13.9307 13.0595 14.1373 12.9894 14.3274C12.9193 14.5175 12.7944 14.6826 12.6306 14.8018C12.4667 14.9209 12.2712 14.9889 12.0688 14.997C11.8663 15.0051 11.666 14.9531 11.4931 14.8474L8.33687 12.9049L5.17875 14.8474C5.00589 14.9525 4.80581 15.004 4.60371 14.9956C4.40161 14.9872 4.20652 14.9191 4.043 14.8001C3.87949 14.681 3.75486 14.5162 3.68482 14.3264C3.61477 14.1367 3.60244 13.9304 3.64937 13.7337L4.50937 10.1043L1.69688 7.67741C1.54394 7.54523 1.43333 7.37092 1.37886 7.17625C1.3244 6.98159 1.32849 6.77519 1.39063 6.58283C1.45278 6.39048 1.57021 6.22069 1.72827 6.09468C1.88633 5.96866 2.07801 5.89201 2.27938 5.87429L5.96687 5.57679L7.38937 2.13429C7.46637 1.94667 7.59742 1.78619 7.76586 1.67325C7.93429 1.56031 8.13251 1.5 8.33531 1.5C8.53811 1.5 8.73633 1.56031 8.90477 1.67325C9.0732 1.78619 9.20425 1.94667 9.28125 2.13429L10.7031 5.57679L14.3906 5.87429C14.5924 5.89135 14.7846 5.96758 14.9433 6.09342C15.1019 6.21925 15.2199 6.38911 15.2824 6.5817C15.3449 6.77429 15.3492 6.98104 15.2948 7.17607C15.2403 7.37109 15.1295 7.54571 14.9762 7.67804L14.98 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.67741L12.1636 10.1043L13.0205 13.7337C13.0677 13.9307 13.0556 14.1373 12.9855 14.3274C12.9154 14.5175 12.7905 14.6826 12.6267 14.8018C12.4628 14.9209 12.2673 14.9889 12.0649 14.997C11.8624 15.0051 11.6621 14.9531 11.4892 14.8474L8.33297 12.9049L5.17484 14.8474C5.00199 14.9525 4.80191 15.004 4.59981 14.9956C4.3977 14.9872 4.20261 14.9191 4.03909 14.8001C3.87558 14.681 3.75095 14.5162 3.68091 14.3264C3.61086 14.1367 3.59853 13.9304 3.64547 13.7337L4.50547 10.1043L1.69297 7.67741C1.54003 7.54523 1.42942 7.37092 1.37496 7.17625C1.32049 6.98159 1.32459 6.77519 1.38673 6.58283C1.44887 6.39048 1.5663 6.22069 1.72436 6.09468C1.88242 5.96866 2.0741 5.89201 2.27547 5.87429L5.96297 5.57679L7.38547 2.13429C7.46246 1.94667 7.59351 1.78619 7.76195 1.67325C7.93039 1.56031 8.12861 1.5 8.3314 1.5C8.5342 1.5 8.73242 1.56031 8.90086 1.67325C9.0693 1.78619 9.20035 1.94667 9.27734 2.13429L10.6992 5.57679L14.3867 5.87429C14.5885 5.89135 14.7807 5.96758 14.9394 6.09342C15.098 6.21925 15.216 6.38911 15.2785 6.5817C15.341 6.77429 15.3453 6.98104 15.2909 7.17607C15.2364 7.37109 15.1256 7.54571 14.9723 7.67804L14.9761 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9761 7.67741L12.1636 10.1043L13.0205 13.7337C13.0677 13.9307 13.0556 14.1373 12.9855 14.3274C12.9154 14.5175 12.7905 14.6826 12.6267 14.8018C12.4628 14.9209 12.2673 14.9889 12.0649 14.997C11.8624 15.0051 11.6621 14.9531 11.4892 14.8474L8.33297 12.9049L5.17484 14.8474C5.00199 14.9525 4.80191 15.004 4.59981 14.9956C4.3977 14.9872 4.20261 14.9191 4.03909 14.8001C3.87558 14.681 3.75095 14.5162 3.68091 14.3264C3.61086 14.1367 3.59853 13.9304 3.64547 13.7337L4.50547 10.1043L1.69297 7.67741C1.54003 7.54523 1.42942 7.37092 1.37496 7.17625C1.32049 6.98159 1.32459 6.77519 1.38673 6.58283C1.44887 6.39048 1.5663 6.22069 1.72436 6.09468C1.88242 5.96866 2.0741 5.89201 2.27547 5.87429L5.96297 5.57679L7.38547 2.13429C7.46246 1.94667 7.59351 1.78619 7.76195 1.67325C7.93039 1.56031 8.12861 1.5 8.3314 1.5C8.5342 1.5 8.73242 1.56031 8.90086 1.67325C9.0693 1.78619 9.20035 1.94667 9.27734 2.13429L10.6992 5.57679L14.3867 5.87429C14.5885 5.89135 14.7807 5.96758 14.9394 6.09342C15.098 6.21925 15.216 6.38911 15.2785 6.5817C15.341 6.77429 15.3453 6.98104 15.2909 7.17607C15.2364 7.37109 15.1256 7.54571 14.9723 7.67804L14.9761 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.9722 7.67741L12.1597 10.1043L13.0166 13.7337C13.0638 13.9307 13.0517 14.1373 12.9816 14.3274C12.9115 14.5175 12.7866 14.6826 12.6228 14.8018C12.4589 14.9209 12.2634 14.9889 12.061 14.997C11.8585 15.0051 11.6582 14.9531 11.4853 14.8474L8.32906 12.9049L5.17094 14.8474C4.99808 14.9525 4.798 15.004 4.5959 14.9956C4.3938 14.9872 4.1987 14.9191 4.03519 14.8001C3.87167 14.681 3.74705 14.5162 3.677 14.3264C3.60696 14.1367 3.59463 13.9304 3.64156 13.7337L4.50156 10.1043L1.68906 7.67741C1.53612 7.54523 1.42552 7.37092 1.37105 7.17625C1.31659 6.98159 1.32068 6.77519 1.38282 6.58283C1.44496 6.39048 1.5624 6.22069 1.72046 6.09468C1.87852 5.96866 2.0702 5.89201 2.27156 5.87429L5.95906 5.57679L7.38156 2.13429C7.45856 1.94667 7.58961 1.78619 7.75804 1.67325C7.92648 1.56031 8.1247 1.5 8.3275 1.5C8.5303 1.5 8.72852 1.56031 8.89695 1.67325C9.06539 1.78619 9.19644 1.94667 9.27344 2.13429L10.6953 5.57679L14.3828 5.87429C14.5846 5.89135 14.7768 5.96758 14.9355 6.09342C15.0941 6.21925 15.2121 6.38911 15.2746 6.5817C15.3371 6.77429 15.3414 6.98104 15.287 7.17607C15.2325 7.37109 15.1217 7.54571 14.9684 7.67804L14.9722 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M14.98 7.67741L12.1675 10.1043L13.0244 13.7337C13.0717 13.9307 13.0595 14.1373 12.9894 14.3274C12.9193 14.5175 12.7944 14.6826 12.6306 14.8018C12.4667 14.9209 12.2712 14.9889 12.0688 14.997C11.8663 15.0051 11.666 14.9531 11.4931 14.8474L8.33687 12.9049L5.17875 14.8474C5.00589 14.9525 4.80581 15.004 4.60371 14.9956C4.40161 14.9872 4.20652 14.9191 4.043 14.8001C3.87949 14.681 3.75486 14.5162 3.68482 14.3264C3.61477 14.1367 3.60244 13.9304 3.64937 13.7337L4.50937 10.1043L1.69688 7.67741C1.54394 7.54523 1.43333 7.37092 1.37886 7.17625C1.3244 6.98159 1.32849 6.77519 1.39063 6.58283C1.45278 6.39048 1.57021 6.22069 1.72827 6.09468C1.88633 5.96866 2.07801 5.89201 2.27938 5.87429L5.96687 5.57679L7.38937 2.13429C7.46637 1.94667 7.59742 1.78619 7.76586 1.67325C7.93429 1.56031 8.13251 1.5 8.33531 1.5C8.53811 1.5 8.73633 1.56031 8.90477 1.67325C9.0732 1.78619 9.20425 1.94667 9.28125 2.13429L10.7031 5.57679L14.3906 5.87429C14.5924 5.89135 14.7846 5.96758 14.9433 6.09342C15.1019 6.21925 15.2199 6.38911 15.2824 6.5817C15.3449 6.77429 15.3492 6.98104 15.2948 7.17607C15.2403 7.37109 15.1295 7.54571 14.9762 7.67804L14.98 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden rounded-custom h-[150px] bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] bg-cover bg-no-repeat bg-center">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] h-0"></div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[285.33px] text-base font-medium text-left text-[#1d2939]">
                    Clinical Trials and Medical Documentation: Resources and Translation Strategies
                    for New Translators
                  </p>
                  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pr-4">
                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-[9px] bg-[#edf5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-[#468f8f]">
                          $20 USD
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                          <Image
                            src="/next/next_assets/images/image-1.png"
                            alt="Image 1"
                            width={51}
                            height={50}
                            className="absolute left-[-2.79px] top-[-2.78px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                            Claudia Brauer
                          </p>
                          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.67741L12.5015 10.1043L13.3584 13.7337C13.4056 13.9307 13.3935 14.1373 13.3234 14.3274C13.2533 14.5175 13.1284 14.6826 12.9646 14.8018C12.8007 14.9209 12.6052 14.9889 12.4028 14.997C12.2003 15.0051 12 14.9531 11.8271 14.8474L8.67086 12.9049L5.51273 14.8474C5.33988 14.9525 5.1398 15.004 4.9377 14.9956C4.73559 14.9872 4.5405 14.9191 4.37699 14.8001C4.21347 14.681 4.08884 14.5162 4.0188 14.3264C3.94876 14.1367 3.93642 13.9304 3.98336 13.7337L4.84336 10.1043L2.03086 7.67741C1.87792 7.54523 1.76731 7.37092 1.71285 7.17625C1.65838 6.98159 1.66248 6.77519 1.72462 6.58283C1.78676 6.39048 1.90419 6.22069 2.06225 6.09468C2.22031 5.96866 2.41199 5.89201 2.61336 5.87429L6.30086 5.57679L7.72336 2.13429C7.80035 1.94667 7.9314 1.78619 8.09984 1.67325C8.26828 1.56031 8.4665 1.5 8.6693 1.5C8.87209 1.5 9.07031 1.56031 9.23875 1.67325C9.40719 1.78619 9.53824 1.94667 9.61523 2.13429L11.0371 5.57679L14.7246 5.87429C14.9264 5.89135 15.1186 5.96758 15.2772 6.09342C15.4359 6.21925 15.5539 6.38911 15.6164 6.5817C15.6789 6.77429 15.6832 6.98104 15.6288 7.17607C15.5743 7.37109 15.4635 7.54571 15.3102 7.67804L15.314 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.67741L12.4976 10.1043L13.3545 13.7337C13.4017 13.9307 13.3896 14.1373 13.3195 14.3274C13.2494 14.5175 13.1245 14.6826 12.9607 14.8018C12.7968 14.9209 12.6013 14.9889 12.3989 14.997C12.1964 15.0051 11.9961 14.9531 11.8232 14.8474L8.66695 12.9049L5.50883 14.8474C5.33597 14.9525 5.13589 15.004 4.93379 14.9956C4.73169 14.9872 4.53659 14.9191 4.37308 14.8001C4.20956 14.681 4.08494 14.5162 4.01489 14.3264C3.94485 14.1367 3.93252 13.9304 3.97945 13.7337L4.83945 10.1043L2.02695 7.67741C1.87401 7.54523 1.76341 7.37092 1.70894 7.17625C1.65448 6.98159 1.65857 6.77519 1.72071 6.58283C1.78285 6.39048 1.90029 6.22069 2.05835 6.09468C2.21641 5.96866 2.40809 5.89201 2.60945 5.87429L6.29695 5.57679L7.71945 2.13429C7.79645 1.94667 7.9275 1.78619 8.09593 1.67325C8.26437 1.56031 8.46259 1.5 8.66539 1.5C8.86819 1.5 9.06641 1.56031 9.23484 1.67325C9.40328 1.78619 9.53433 1.94667 9.61133 2.13429L11.0332 5.57679L14.7207 5.87429C14.9225 5.89135 15.1147 5.96758 15.2733 6.09342C15.432 6.21925 15.5499 6.38911 15.6125 6.5817C15.675 6.77429 15.6793 6.98104 15.6248 7.17607C15.5704 7.37109 15.4596 7.54571 15.3063 7.67804L15.3101 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3101 7.67741L12.4976 10.1043L13.3545 13.7337C13.4017 13.9307 13.3896 14.1373 13.3195 14.3274C13.2494 14.5175 13.1245 14.6826 12.9607 14.8018C12.7968 14.9209 12.6013 14.9889 12.3989 14.997C12.1964 15.0051 11.9961 14.9531 11.8232 14.8474L8.66695 12.9049L5.50883 14.8474C5.33597 14.9525 5.13589 15.004 4.93379 14.9956C4.73169 14.9872 4.53659 14.9191 4.37308 14.8001C4.20956 14.681 4.08494 14.5162 4.01489 14.3264C3.94485 14.1367 3.93252 13.9304 3.97945 13.7337L4.83945 10.1043L2.02695 7.67741C1.87401 7.54523 1.76341 7.37092 1.70894 7.17625C1.65448 6.98159 1.65857 6.77519 1.72071 6.58283C1.78285 6.39048 1.90029 6.22069 2.05835 6.09468C2.21641 5.96866 2.40809 5.89201 2.60945 5.87429L6.29695 5.57679L7.71945 2.13429C7.79645 1.94667 7.9275 1.78619 8.09593 1.67325C8.26437 1.56031 8.46259 1.5 8.66539 1.5C8.86819 1.5 9.06641 1.56031 9.23484 1.67325C9.40328 1.78619 9.53433 1.94667 9.61133 2.13429L11.0332 5.57679L14.7207 5.87429C14.9225 5.89135 15.1147 5.96758 15.2733 6.09342C15.432 6.21925 15.5499 6.38911 15.6125 6.5817C15.675 6.77429 15.6793 6.98104 15.6248 7.17607C15.5704 7.37109 15.4596 7.54571 15.3063 7.67804L15.3101 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.3062 7.67741L12.4937 10.1043L13.3505 13.7337C13.3978 13.9307 13.3856 14.1373 13.3156 14.3274C13.2455 14.5175 13.1206 14.6826 12.9568 14.8018C12.7929 14.9209 12.5974 14.9889 12.3949 14.997C12.1925 15.0051 11.9922 14.9531 11.8193 14.8474L8.66305 12.9049L5.50492 14.8474C5.33206 14.9525 5.13199 15.004 4.92988 14.9956C4.72778 14.9872 4.53269 14.9191 4.36917 14.8001C4.20566 14.681 4.08103 14.5162 4.01099 14.3264C3.94094 14.1367 3.92861 13.9304 3.97555 13.7337L4.83555 10.1043L2.02305 7.67741C1.87011 7.54523 1.7595 7.37092 1.70504 7.17625C1.65057 6.98159 1.65467 6.77519 1.71681 6.58283C1.77895 6.39048 1.89638 6.22069 2.05444 6.09468C2.2125 5.96866 2.40418 5.89201 2.60555 5.87429L6.29305 5.57679L7.71555 2.13429C7.79254 1.94667 7.92359 1.78619 8.09203 1.67325C8.26047 1.56031 8.45868 1.5 8.66148 1.5C8.86428 1.5 9.0625 1.56031 9.23094 1.67325C9.39938 1.78619 9.53042 1.94667 9.60742 2.13429L11.0293 5.57679L14.7168 5.87429C14.9186 5.89135 15.1108 5.96758 15.2694 6.09342C15.4281 6.21925 15.546 6.38911 15.6086 6.5817C15.6711 6.77429 15.6754 6.98104 15.6209 7.17607C15.5665 7.37109 15.4557 7.54571 15.3024 7.67804L15.3062 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                                preserveAspectRatio="none"
                              >
                                <path
                                  d="M15.314 7.67741L12.5015 10.1043L13.3584 13.7337C13.4056 13.9307 13.3935 14.1373 13.3234 14.3274C13.2533 14.5175 13.1284 14.6826 12.9646 14.8018C12.8007 14.9209 12.6052 14.9889 12.4028 14.997C12.2003 15.0051 12 14.9531 11.8271 14.8474L8.67086 12.9049L5.51273 14.8474C5.33988 14.9525 5.1398 15.004 4.9377 14.9956C4.73559 14.9872 4.5405 14.9191 4.37699 14.8001C4.21347 14.681 4.08884 14.5162 4.0188 14.3264C3.94876 14.1367 3.93642 13.9304 3.98336 13.7337L4.84336 10.1043L2.03086 7.67741C1.87792 7.54523 1.76731 7.37092 1.71285 7.17625C1.65838 6.98159 1.66248 6.77519 1.72462 6.58283C1.78676 6.39048 1.90419 6.22069 2.06225 6.09468C2.22031 5.96866 2.41199 5.89201 2.61336 5.87429L6.30086 5.57679L7.72336 2.13429C7.80035 1.94667 7.9314 1.78619 8.09984 1.67325C8.26828 1.56031 8.4665 1.5 8.6693 1.5C8.87209 1.5 9.07031 1.56031 9.23875 1.67325C9.40719 1.78619 9.53824 1.94667 9.61523 2.13429L11.0371 5.57679L14.7246 5.87429C14.9264 5.89135 15.1186 5.96758 15.2772 6.09342C15.4359 6.21925 15.5539 6.38911 15.6164 6.5817C15.6789 6.77429 15.6832 6.98104 15.6288 7.17607C15.5743 7.37109 15.4635 7.54571 15.3102 7.67804L15.314 7.67741Z"
                                  fill="#FFB800"
                                ></path>
                              </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-xs text-right text-[#667085]">
                              4.7/5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
