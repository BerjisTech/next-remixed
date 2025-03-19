import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <div className="w-full flex flex-col justify-center items-center relative gap-8 p-4 rounded-custom bg-accent dark:bg-black border border-secondary">
        <p className="w-52 h-7 text-lg font-medium text-center text-black dark:text-white">
          ProZ purchases
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center relative overflow-hidden gap-6 p-4 rounded-xl bg-accent dark:bg-black border border-secondary">
        <div className=""></div>
        <div className="flex flex-col justify-start items-center relative gap-4">
          <svg
            width="200"
            height="50"
            viewBox="0 0 196 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect y="0.000244141" width="196" height="40" fill="url(#pattern0_7780_339)" />
            <defs>
              <pattern
                id="pattern0_7780_339"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_7780_339" transform="matrix(0.004 0 0 0.0196 0 -0.15)" />
              </pattern>
              <image
                id="image0_7780_339"
                width="250"
                height="76"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center relative gap-6">
              <p className="flex-grow w-[92px] text-base font-semibold text-left text-black dark:text-accent-foreground">
                $234
              </p>
              <p className="flex-grow w-[92px] text-base text-left text-black dark:text-accent-foreground">
                Available
              </p>
            </div>
            <div className="flex justify-center items-center relative gap-6">
              <p className="flex-grow w-[92px] text-base font-semibold text-left text-black dark:text-accent-foreground">
                $234
              </p>
              <p className="flex-grow w-[92px] text-base text-left text-black dark:text-accent-foreground">
                Pending
              </p>
            </div>
            <div className="flex justify-center items-center relative gap-6">
              <p className="flex-grow w-[92px] text-base font-semibold text-left text-black dark:text-accent-foreground">
                $234
              </p>
              <p className="flex-grow w-[92px] text-base text-left text-black dark:text-accent-foreground">
                Unfunded
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 px-6 py-3.5 rounded-xl">
          <div className="flex justify-start items-center  relative gap-4">
            <p className=" text-base font-semibold text-center text-white dark:text-black">
              View dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
