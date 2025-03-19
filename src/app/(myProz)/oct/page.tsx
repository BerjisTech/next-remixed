"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pt-6">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6 pl-6 pr-8">
          <div className="flex flex-col justify-start items-start flex-grow overflow-hidden gap-2.5">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
                <p className="flex-grow w-[809px] text-2xl font-semibold text-left text-[#4d9d9d]">
                  My online CAT tool
                </p>
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
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-6 p-6 rounded-3xl bg-[#edf5f5]">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#344054]">
                    Here we’ll display your online CAT tool
                  </p>
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
