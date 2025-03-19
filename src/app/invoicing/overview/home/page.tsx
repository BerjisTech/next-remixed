import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-10">
      <div className="flex flex-col justify-evenly items-start relative gap-4 w-full">
        <p className=" text-2xl font-semibold text-left text-primary">Summary</p>
        <div className="flex justify-evenly items-start h-[143px] gap-4 w-full">
          <div className="flex flex-col justify-between items-start flex-grow relative p-6 rounded-xl bg-[#d3ecec]">
            <p className="w-full text-base font-medium text-left text-black">Total revenue</p>
            <div className="flex justify-start items-end relative gap-4">
              <p className="flex-grow w-full text-2xl font-semibold text-left text-black">
                $567.89 USD
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start flex-grow relative p-6 rounded-xl bg-[#cae6ff]">
            <p className="w-full text-base font-medium text-left text-black">Amount paid</p>
            <div className="flex justify-start items-end relative gap-4">
              <p className="flex-grow w-full text-2xl font-semibold text-left text-black">
                $567.89 USD
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start flex-grow relative p-6 rounded-xl bg-accent-light">
            <p className="w-full text-base font-medium text-left text-black">Amount due</p>
            <div className="flex justify-start items-end relative gap-4">
              <p className="flex-grow w-full text-2xl font-semibold text-left text-black">
                $567.89 USD
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start flex-grow relative p-6 rounded-xl bg-[#ffdcfe]">
            <p className="w-full text-base font-medium text-left text-black">Total clients</p>
            <div className="flex justify-start items-end relative gap-4">
              <p className="flex-grow w-full text-2xl font-semibold text-left text-black">4,567</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start relative gap-4">
        <p className=" text-2xl font-semibold text-left text-primary">Quick actions</p>
        <div className="flex justify-start items-center  gap-3">
          <div className="flex justify-center items-center  relative gap-4 px-6 py-3.5 rounded-xl bg-[#dcefdc]">
            <div className="flex justify-start items-center  relative gap-4">
              <p className=" text-base font-semibold text-center text-primary">
                Create new invoice
              </p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M20 10.5002V6.80024C20 5.12009 20 4.28001 19.673 3.63827C19.3854 3.07379 18.9265 2.61484 18.362 2.32722C17.7202 2.00024 16.8802 2.00024 15.2 2.00024H8.8C7.11984 2.00024 6.27976 2.00024 5.63803 2.32722C5.07354 2.61484 4.6146 3.07379 4.32698 3.63827C4 4.28001 4 5.12009 4 6.80024V17.2002C4 18.8804 4 19.7205 4.32698 20.3622C4.6146 20.9267 5.07354 21.3856 5.63803 21.6733C6.27976 22.0002 7.11984 22.0002 8.8 22.0002H12M14 11.0002H8M10 15.0002H8M16 7.00024H8M18 21.0002V15.0002M15 18.0002H21"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center  relative gap-4 px-6 py-3.5 rounded-xl bg-accent">
            <div className="flex justify-start items-center  relative gap-4">
              <p className=" text-base font-semibold text-center text-primary">Pay due invoices</p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M8.5 14.6669C8.5 15.9556 9.54467 17.0002 10.8333 17.0002H13C14.3807 17.0002 15.5 15.881 15.5 14.5002C15.5 13.1195 14.3807 12.0002 13 12.0002H11C9.61929 12.0002 8.5 10.881 8.5 9.50024C8.5 8.11953 9.61929 7.00024 11 7.00024H13.1667C14.4553 7.00024 15.5 8.04491 15.5 9.33358M12 5.50024V7.00024M12 17.0002V18.5002M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C6.47715 22.0002 2 17.5231 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002Z"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center  relative gap-4 px-6 py-3.5 rounded-xl bg-accent">
            <div className="flex justify-start items-center  relative gap-4">
              <p className=" text-base font-semibold text-center text-primary">Drafts</p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M14 2.26978V6.40032C14 6.96037 14 7.24039 14.109 7.45431C14.2049 7.64247 14.3578 7.79545 14.546 7.89132C14.7599 8.00032 15.0399 8.00032 15.6 8.00032H19.7305M14 17.0002H8M16 13.0002H8M20 9.98847V17.2002C20 18.8804 20 19.7205 19.673 20.3622C19.3854 20.9267 18.9265 21.3856 18.362 21.6733C17.7202 22.0002 16.8802 22.0002 15.2 22.0002H8.8C7.11984 22.0002 6.27976 22.0002 5.63803 21.6733C5.07354 21.3856 4.6146 20.9267 4.32698 20.3622C4 19.7205 4 18.8804 4 17.2002V6.80024C4 5.12009 4 4.28001 4.32698 3.63827C4.6146 3.07379 5.07354 2.61484 5.63803 2.32722C6.27976 2.00024 7.11984 2.00024 8.8 2.00024H12.0118C12.7455 2.00024 13.1124 2.00024 13.4577 2.08313C13.7638 2.15662 14.0564 2.27784 14.3249 2.44232C14.6276 2.62785 14.887 2.88728 15.4059 3.40613L18.5941 6.59436C19.113 7.11321 19.3724 7.37264 19.5579 7.67539C19.7224 7.94381 19.8436 8.23644 19.9171 8.54255C20 8.88781 20 9.2547 20 9.98847Z"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center  relative gap-4 px-6 py-3.5 rounded-xl bg-accent">
            <div className="flex justify-start items-center  relative gap-4">
              <p className=" text-base font-semibold text-center text-primary">Trash</p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M9 3.00024H15M3 6.00024H21M19 6.00024L18.2987 16.5195C18.1935 18.0978 18.1409 18.8869 17.8 19.4852C17.4999 20.012 17.0472 20.4355 16.5017 20.6999C15.882 21.0002 15.0911 21.0002 13.5093 21.0002H10.4907C8.90891 21.0002 8.11803 21.0002 7.49834 20.6999C6.95276 20.4355 6.50009 20.012 6.19998 19.4852C5.85911 18.8869 5.8065 18.0978 5.70129 16.5195L5 6.00024M10 10.5002V15.5002M14 10.5002V15.5002"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-between items-center w-full">
          <span className=" text-2xl font-semibold  text-primary">Open invoices</span>
          <span className=" text-base font-medium text-primary">View all</span>
        </div>
        <div className="flex flex-col justify-start items-start overflow-hidden rounded-xl bg-white border border-accent">
          <div className="flex justify-start items-start bg-white">
            <div className="flex flex-col justify-start items-start flex-grow">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Invoice #</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8.00001 3.3335V12.6668M8.00001 12.6668L12.6667 8.00016M8.00001 12.6668L3.33334 8.00016"
                      stroke="#475467"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-start items-center h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-xs text-left text-black">5664564564</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-xs text-left text-black">5664564564</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-xs text-left text-black">5664564564</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative gap-3 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-xs text-left text-black">5664564564</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Client</p>
                </div>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">Lorem ipsum dor</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">Lorem ipsum dor</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">Lorem ipsum dor</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">Lorem ipsum dor</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start  w-[159px]">
              <div className="flex justify-start items-center h-11 relative gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Date</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-4 h-4 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M8 3.3335V12.6668M8 12.6668L12.6667 8.00016M8 12.6668L3.33334 8.00016"
                    stroke="#475467"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Status</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                  <p className=" text-xs font-medium text-center text-[#027a48]">Closed</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                  <p className=" text-xs font-medium text-center text-[#027a48]">Closed</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                  <p className=" text-xs font-medium text-center text-[#027a48]">Closed</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-[90px] gap-2 px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative px-2 py-0.5 rounded-2xl bg-[#ecfdf3] mix-blend-multiply">
                  <p className=" text-xs font-medium text-center text-[#027a48]">Closed</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Date due</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8 3.3335V12.6668M8 12.6668L12.6667 8.00016M8 12.6668L3.33333 8.00016"
                      stroke="#475467"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">26 Feb 2009</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Amount paid</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8.00001 12.6668V3.3335M8.00001 3.3335L3.33334 8.00016M8.00001 3.3335L12.6667 8.00016"
                      stroke="#475467"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center h-11 gap-3 px-6 py-3 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <div className="flex justify-start items-center  relative gap-1">
                  <p className=" text-[10px] font-semibold text-left text-black">Total</p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8.00001 12.6668V3.3335M8.00001 3.3335L3.33334 8.00016M8.00001 3.3335L12.6667 8.00016"
                      stroke="#475467"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
              <div className="flex justify-start items-center  h-[90px] relative px-6 py-4 border-t-0 border-r-0 border-b border-l-0 border-[#eaecf0]">
                <p className=" text-sm text-left text-dark-blue-hue">2000.00 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
