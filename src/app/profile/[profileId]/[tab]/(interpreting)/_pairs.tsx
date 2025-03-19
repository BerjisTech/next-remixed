"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { useGetUserPairsQuery } from "@/lib/store/features/profile/profileApiSlice";
import Image from "next/image";
import React, { useState } from "react";

const Pairs = ({ entityId }: { entityId: number | undefined }) => {
  const { getLanguageFromCode } = useContentHook();
  const { data: pairs, isLoading: pairsLoading } = useGetUserPairsQuery(entityId, {
    skip: !entityId,
  });
  const [showAll, setShowAll] = useState(false);

  const pairKeys = pairs ? Object.keys(pairs) : [];
  const visiblePairs = showAll ? pairKeys : pairKeys.slice(0, 3);

  return (
    <React.Fragment>
      {pairsLoading && <Skeleton className="block mx-1 !h-[10rem] w-full " />}
      {!pairsLoading && pairs && (
        <div className="w-full flex flex-col justify-start items-start flex-grow gap-4 px-6 py-4 rounded-custom bg-accent dark:bg-black min-h-[150px] basis-1/2 text-dark-blue-hue">
          <div className="w-full flex justify-between items-end relative overflow-hidden gap-2.5 p-3 rounded-xl bg-accent dark:bg-black">
            <div className="flex flex-col justify-center items-start  gap-2">
              {visiblePairs.map((pair, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-wrap justify-start items-center  relative gap-2"
                  >
                    <p className="text-left  flex gap-2">
                      <span>{getLanguageFromCode(pair.split("_")[0])}</span>
                    </p>
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
                        d="M2.66602 8H13.3327M13.3327 8L9.33268 4M13.3327 8L9.33268 12"
                        stroke="#4D9D9D"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex justify-start items-center  relative gap-1">
                      <p className="font-semibold text-left ">
                        {getLanguageFromCode(pair.split("_")[1])}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {pairKeys.length > 3 && (
              <button
                className=" text-sm text-primary hover:underline hover:text-primary"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show less" : `Show all (${pairKeys.length})`}
              </button>
            )}
            <div className="absolute top-3 right-3">
              <Image
                src="/next/next_assets/images/svg/verified-user-rounded-green.svg"
                alt="verified-user-rounded-gray"
                height={30}
                width={30}
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Pairs;
