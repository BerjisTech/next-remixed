"use client";
import React, { useState } from "react";

const ConvenienceFeeForm: React.FC = () => {
  const [feesPaidBy, setFeesPaidBy] = useState("pros");

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="w-full ">
          <div className="flex flex-col sm:flex-row">
            {/* Option 1: You're paying fees */}
            <label
              htmlFor="fees-paid-by-business"
              className={`min-h-32 w-full sm:w-1/2 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">You're paying fees</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="fees-paid-by-business"
                type="radio"
                value="business"
                checked={feesPaidBy === "business"}
                onChange={() => setFeesPaidBy("business")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${feesPaidBy === "business" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-primary-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>

            {/* Option 2: Recipient is paying fees */}
            <label
              htmlFor="fees-paid-by-pros"
              className={`w-full sm:w-1/2 mx-1 my-1 sm:my-0 relative flex justify-center items-center flex-col bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">
                Recipient is paying fees
              </span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="fees-paid-by-pros"
                type="radio"
                value="pros"
                checked={feesPaidBy === "pros"}
                onChange={() => setFeesPaidBy("pros")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${feesPaidBy === "pros" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-primary-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
export default ConvenienceFeeForm;
