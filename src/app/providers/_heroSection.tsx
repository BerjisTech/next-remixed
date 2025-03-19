import React from "react";

const HeroSection = () => {
  return (
    <div className="p-10 bg-accent dark:bg-primary relative flex items-center justify-center flex-col gap-4">
      <span className="text-primary dark:text-white text-2xl md:text-[40px] font-bold">
        Language service providers
      </span>
      <span className="items-center justify-center gap-2">
        <span>On-demand interpreting for global collaboration</span>
        <span className="flex items-center justify-center bg-primary dark:bg-primary text-white gap-2 rounded-md px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <g clipPath="url(#clip0_5790_20844)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.84375 9.44281L7.5211 13.1783L8.49906 11.0139L6.09425 7.69531L4.84375 9.44281Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 11.0147L1.49399 13.163C3.30561 10.6299 5.13327 8.09683 6.92886 5.56377C7.68236 4.44152 7.81062 3.65595 6.56012 1.65194C6.44237 1.45005 6.30257 1.26186 6.14329 1.09082L6.30361 1.28321C6.38115 1.39042 6.44072 1.50955 6.47996 1.63591C6.73647 2.46958 5.00501 4.77819 4.50802 5.48361C3.17735 7.34333 1.84669 9.15495 0.5 11.0147Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.15473 5.01843C3.73789 4.40921 3.27296 3.76793 2.96836 3.11061C2.85613 2.88616 2.56755 2.30901 2.51946 2.03647C2.4875 1.90478 2.4875 1.76735 2.51946 1.63566C2.55668 1.52638 2.61077 1.4236 2.67978 1.33105C2.63862 1.38177 2.60112 1.43534 2.56755 1.49138C1.10864 3.59158 1.30102 4.48937 1.9904 5.51542L2.90423 6.74989L4.15473 5.01843Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.57223 0.817366C4.20855 0.800408 3.8441 0.811127 3.48205 0.84943L3.22553 1.07388C3.1435 1.16424 3.06847 1.26071 3.00108 1.36246L2.88886 1.61897C2.86712 1.69719 2.86166 1.77904 2.87283 1.85945C2.87987 1.97278 2.89595 2.08536 2.92092 2.19612C2.93312 2.26115 2.94919 2.32539 2.96902 2.38851C3.9826 2.22294 5.01589 2.21753 6.03114 2.37248C6.0513 2.31489 6.06737 2.25596 6.07924 2.19612C6.11093 2.09219 6.12714 1.98414 6.12734 1.87548C6.14 1.79513 6.13453 1.71296 6.1113 1.635C6.08492 1.54 6.04724 1.4485 5.99908 1.36246C5.93169 1.26071 5.85666 1.16424 5.77463 1.07388L5.50209 0.833398L4.57223 0.817366Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_5790_20844">
                <rect width="8" height="12.3607" fill="white" transform="translate(0.5 0.819336)" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm">MEMBERS ONLY</span>
        </span>
      </span>
    </div>
  );
};

export default HeroSection;
