"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-1 gap-2.5 pt-6">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-1 gap-6 pl-6 pr-8">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-1 gap-3">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <p className="flex-grow w-[659px] text-2xl font-semibold text-left text-[#4d9d9d]">
                  My Clients{" "}
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#344054]">
                      All services
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
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-1 overflow-hidden rounded-xl bg-white border border-[#edf5f5]"
                style={{
                  boxShadow:
                    "0px 4px 8px -2px rgba(16,24,40,0.1), 0px 2px 4px -2px rgba(16,24,40,0.06)",
                }}
              >
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-1 bg-white">
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
                          Client name
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
                            src="/next/next_assets/images/jesus-avatar.png"
                            alt="Provider profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 w-[145px] text-base font-medium text-left text-[#344054]">
                          Jesus Wiza
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <div
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-[114.29px] bg-[#c2c7b8]"
                          style={{ boxShadow: "0px 0px 0px 2.2857141494750977px #f4ebff" }}
                        >
                          <Image
                            src="/next/next_assets/images/carol-avatar.png"
                            alt="Provider profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.3904 16.434L17.2316 23.1886L19 19.275L14.6516 13.2742L12.3904 16.434Z"
                              fill="#4D9D9D"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.53381 19.2759L6.33117 23.1605C9.60699 18.5802 12.9118 13.9998 16.1586 9.41945C17.5211 7.39018 17.7531 5.96969 15.4919 2.34599C15.2789 1.98094 15.0261 1.64064 14.7381 1.33136L15.028 1.67923C15.1683 1.8731 15.276 2.08851 15.3469 2.317C15.8108 3.82446 12.6799 7.99896 11.7812 9.2745C9.37507 12.6373 6.96894 15.9131 4.53381 19.2759Z"
                              fill="#4D9D9D"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.1438 8.4339C10.3901 7.33229 9.5494 6.17271 8.9986 4.98414C8.79567 4.57828 8.27386 3.53466 8.18689 3.04184C8.1291 2.80371 8.1291 2.55522 8.18689 2.3171C8.25419 2.1195 8.35201 1.93365 8.47679 1.7663C8.40237 1.858 8.33455 1.95488 8.27386 2.05619C5.63581 5.85382 5.98369 7.47724 7.23024 9.33257L8.88264 11.5648L11.1438 8.4339Z"
                              fill="#4D9D9D"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.8971 0.838376C11.2394 0.807712 10.5804 0.827094 9.92577 0.896355L9.46193 1.30221C9.3136 1.4656 9.17793 1.64004 9.05608 1.82402L8.85315 2.28785C8.81383 2.42929 8.80397 2.57729 8.82416 2.7227C8.8369 2.92762 8.86598 3.13119 8.91113 3.33148C8.93319 3.44906 8.96223 3.56522 8.9981 3.67935C10.8309 3.37996 12.6993 3.37018 14.5351 3.65036C14.5716 3.54624 14.6006 3.43968 14.6221 3.33148C14.6794 3.14353 14.7087 2.94817 14.709 2.75169C14.7319 2.60639 14.722 2.45781 14.6801 2.31684C14.6323 2.14505 14.5642 1.9796 14.4771 1.82402C14.3553 1.64004 14.2196 1.4656 14.0713 1.30221L13.5785 0.867365L11.8971 0.838376Z"
                              fill="#4D9D9D"
                            />
                          </svg>
                          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#344054]">
                            Carol Spinka
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                        <div
                          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-full bg-[#c2c7b8]"
                          style={{ boxShadow: "0px 0px 0px 2.2857141494750977px #f4ebff" }}
                        >
                          <Image
                            src="/next/next_assets/images/gabriel-avatar.png"
                            alt="Provider profile"
                            className="object-cover rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#344054]">
                          Gabriel Gorczany
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Service
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-0.5 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#027a48]">
                          Translation
                        </p>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-sky-50 mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#026aa2]">
                          Interpreting
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-sky-50 mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#026aa2]">
                          Interpreting
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2 py-0.5 rounded-2xl bg-[#fdf2fa] mix-blend-multiply">
                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-[#c11574]">
                          Subtitling
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-[10px] font-semibold text-left text-[#151515]">
                          Languages
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        English, Spanish, Chinese
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        English, Spanish, Chinese
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#344054]">
                        English, Spanish, Chinese
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-1">
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-1 h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-1 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-1 text-[10px] font-semibold text-left text-[#151515]">
                          Actions
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-1 h-[90px] relative gap-[5px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M13.5 7.49998L10.5 4.49998M1.875 16.125L4.41328 15.843C4.72339 15.8085 4.87845 15.7913 5.02338 15.7443C5.15197 15.7027 5.27434 15.6439 5.38717 15.5695C5.51434 15.4856 5.62466 15.3753 5.84529 15.1547L15.75 5.24998C16.5784 4.42156 16.5784 3.07841 15.75 2.24998C14.9216 1.42156 13.5784 1.42156 12.75 2.24998L2.8453 12.1547C2.62466 12.3753 2.51434 12.4856 2.43048 12.6128C2.35607 12.7256 2.29726 12.848 2.25564 12.9766C2.20872 13.1215 2.19149 13.2766 2.15703 13.5867L1.875 16.125Z"
                          stroke="#4D9D9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="flex-grow-0 flex-shrink-1 text-sm text-left text-[#344054]">
                        Assign
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-1 h-[90px] relative gap-[5px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M13.5 7.49998L10.5 4.49998M1.875 16.125L4.41328 15.843C4.72339 15.8085 4.87845 15.7913 5.02338 15.7443C5.15197 15.7027 5.27434 15.6439 5.38717 15.5695C5.51434 15.4856 5.62466 15.3753 5.84529 15.1547L15.75 5.24998C16.5784 4.42156 16.5784 3.07841 15.75 2.24998C14.9216 1.42156 13.5784 1.42156 12.75 2.24998L2.8453 12.1547C2.62466 12.3753 2.51434 12.4856 2.43048 12.6128C2.35607 12.7256 2.29726 12.848 2.25564 12.9766C2.20872 13.1215 2.19149 13.2766 2.15703 13.5867L1.875 16.125Z"
                          stroke="#4D9D9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="flex-grow-0 flex-shrink-1 text-sm text-left text-[#344054]">
                        Assign
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-1 h-[90px] relative gap-[5px] px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M13.5 7.49998L10.5 4.49998M1.875 16.125L4.41328 15.843C4.72339 15.8085 4.87845 15.7913 5.02338 15.7443C5.15197 15.7027 5.27434 15.6439 5.38717 15.5695C5.51434 15.4856 5.62466 15.3753 5.84529 15.1547L15.75 5.24998C16.5784 4.42156 16.5784 3.07841 15.75 2.24998C14.9216 1.42156 13.5784 1.42156 12.75 2.24998L2.8453 12.1547C2.62466 12.3753 2.51434 12.4856 2.43048 12.6128C2.35607 12.7256 2.29726 12.848 2.25564 12.9766C2.20872 13.1215 2.19149 13.2766 2.15703 13.5867L1.875 16.125Z"
                          stroke="#4D9D9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="flex-grow-0 flex-shrink-1 text-sm text-left text-[#344054]">
                        Assign
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
                      d="M15.8334 10H4.16669M4.16669 10L10 15.8334M4.16669 10L10 4.16669"
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
                      d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334"
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
