import React from "react";
import Events from "../_events";

const EventsList = () => {
  return (
    <div className="overflow-hidden flex relative flex-col justify-start items-start w-full">
      <div className="bg-transparent sticky top-[80px] z-[100000] flex flex-col py-3 mb-4 justify-start items-start w-full gap-3">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-full">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-1 py-1">
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
                d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="#D0D5DD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#667085]">
              add tag...
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                Event format:
              </p>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-1.5">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-[#f2f4f7]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#101828]">
                        On-demand training
                      </p>
                    </div>
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
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#667085"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="flex justify-start items-center  gap-2.5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Interpreting
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Medical
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Languages
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Languages
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Languages
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#468f8f]">
                Languages
              </p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                preserveAspectRatio="none"
              >
                <rect width="18" height="18" rx="9" fill="#3A9796"></rect>
                <path
                  d="M11.25 6.74805L6.75 11.248M6.75 6.74805L11.25 11.248"
                  stroke="#D3ECEC"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-4 mt-10">
        <div className="flex justify-start items-center w-full relative gap-[26px]">
          <p className="flex-grow w-[884px] text-xl font-semibold text-left text-[#344054]">
            Upcoming this month
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width="32" height="32" rx="16" fill="#EDF5F5"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.944 15.9995C13.944 14.5871 16.6424 12.9201 17.1833 12.6005C17.3888 12.4786 17.6538 12.5469 17.7753 12.7523C17.8977 12.9582 17.8285 13.2232 17.6236 13.3443C16.4884 14.0168 14.8088 15.3249 14.8088 15.9995C14.8088 16.6749 16.4884 17.983 17.6236 18.6546C17.8285 18.7761 17.8977 19.042 17.7753 19.2466C17.6543 19.452 17.3892 19.5203 17.1833 19.3984C16.6424 19.0788 13.944 17.4118 13.944 15.9995Z"
                fill="#4D9D9D"
              ></path>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width="32" height="32" rx="16" fill="#EDF5F5"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.056 15.9986C18.056 17.4109 15.3576 19.0779 14.8167 19.3975C14.6112 19.5195 14.3462 19.4511 14.2247 19.2457C14.1023 19.0399 14.1715 18.7748 14.3764 18.6537C15.5116 17.9813 17.1912 16.6732 17.1912 15.9986C17.1912 15.3231 15.5116 14.015 14.3764 13.3435C14.1715 13.2219 14.1023 12.956 14.2247 12.7515C14.3457 12.5461 14.6108 12.4777 14.8167 12.5997C15.3576 12.9192 18.056 14.5863 18.056 15.9986Z"
                fill="#4D9D9D"
              ></path>
            </svg>
          </div>
        </div>
        <Events limit={3} offset={0} />
      </div>
      <div className="flex flex-col justify-start items-start w-full relative gap-2">
        <p className="w-full h-8 text-2xl font-semibold text-left text-[#344054]">Past events</p>
        <div className="flex flex-col justify-start items-start w-full gap-6">
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <div className="flex justify-start items-center w-full relative gap-[26px]">
              <p className="flex-grow w-[884px] text-xl font-semibold text-left text-[#344054]">
                August
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-8">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect y="0.75" width="32" height="32" rx="16" fill="#EDF5F5"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9445 16.7495C13.9445 15.3371 16.6428 13.6701 17.1838 13.3505C17.3892 13.2286 17.6543 13.2969 17.7758 13.5023C17.8982 13.7082 17.829 13.9732 17.6241 14.0943C16.4889 14.7668 14.8093 16.0749 14.8093 16.7495C14.8093 17.4249 16.4889 18.733 17.624 19.4046C17.829 19.5261 17.8982 19.792 17.7758 19.9966C17.6548 20.202 17.3897 20.2703 17.1838 20.1484C16.6428 19.8288 13.9445 18.1618 13.9445 16.7495Z"
                    fill="#4D9D9D"
                  ></path>
                </svg>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect y="0.75" width="32" height="32" rx="16" fill="#EDF5F5"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0555 16.7486C18.0555 18.1609 15.3572 19.8279 14.8162 20.1475C14.6108 20.2695 14.3457 20.2011 14.2242 19.9957C14.1018 19.7899 14.171 19.5248 14.3759 19.4037C15.5111 18.7313 17.1907 17.4232 17.1907 16.7486C17.1907 16.0731 15.5111 14.765 14.3759 14.0935C14.171 13.9719 14.1018 13.706 14.2242 13.5015C14.3452 13.2961 14.6103 13.2277 14.8162 13.3497C15.3572 13.6692 18.0555 15.3363 18.0555 16.7486Z"
                    fill="#4D9D9D"
                  ></path>
                </svg>
              </div>
            </div>
            <Events limit={4} offset={0} />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-4">
            <div className="flex justify-start items-center w-full relative gap-[26px]">
              <p className="flex-grow w-[884px] text-xl font-semibold text-left text-[#344054]">
                July
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-8">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect y="0.5" width="32" height="32" rx="16" fill="#EDF5F5"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9445 16.4995C13.9445 15.0871 16.6428 13.4201 17.1838 13.1005C17.3892 12.9786 17.6543 13.0469 17.7758 13.2523C17.8982 13.4582 17.829 13.7232 17.6241 13.8443C16.4889 14.5168 14.8093 15.8249 14.8093 16.4995C14.8093 17.1749 16.4889 18.483 17.624 19.1546C17.829 19.2761 17.8982 19.542 17.7758 19.7466C17.6548 19.952 17.3897 20.0203 17.1838 19.8984C16.6428 19.5788 13.9445 17.9118 13.9445 16.4995Z"
                    fill="#4D9D9D"
                  ></path>
                </svg>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect y="0.5" width="32" height="32" rx="16" fill="#EDF5F5"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.0555 16.4986C18.0555 17.9109 15.3572 19.5779 14.8162 19.8975C14.6108 20.0195 14.3457 19.9511 14.2242 19.7457C14.1018 19.5399 14.171 19.2748 14.3759 19.1537C15.5111 18.4813 17.1907 17.1732 17.1907 16.4986C17.1907 15.8231 15.5111 14.515 14.3759 13.8435C14.171 13.7219 14.1018 13.456 14.2242 13.2515C14.3452 13.0461 14.6103 12.9777 14.8162 13.0997C15.3572 13.4192 18.0555 15.0863 18.0555 16.4986Z"
                    fill="#4D9D9D"
                  ></path>
                </svg>
              </div>
            </div>
            <Events limit={4} offset={0} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full relative overflow-hidden gap-4 p-6 rounded-3xl bg-accent border border-[#c8e1e1]">
        <div className="flex-grow-0 flex-shrink-0"></div>
        <div className="flex flex-col justify-center items-start w-full relative gap-2.5">
          <p className="w-full text-xl font-semibold text-center text-primary-alt">
            This is a message box
          </p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-primary-alt border border-primary-alt shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
            This is a CTA
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
