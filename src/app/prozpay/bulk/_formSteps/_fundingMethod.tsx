"use client";
import React, { useState } from "react";

const FundingMethodForm: React.FC = () => {
  const [fundingMethod, setFundingMethod] = useState("bank_transfer");

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="w-full ">
          <div className="flex flex-col sm:flex-row">
            {/* PayPal Option */}
            <label
              htmlFor="funding-method-paypal"
              className={`min-h-32 w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Paypal</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="funding-method-paypal"
                type="radio"
                value="paypal"
                checked={fundingMethod === "paypal"}
                onChange={() => setFundingMethod("paypal")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${fundingMethod === "paypal" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
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

            {/* Credit Card Option */}
            <label
              htmlFor="funding-method-credit-card"
              className={`w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Credit card</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="funding-method-credit-card"
                type="radio"
                value="credit_card"
                checked={fundingMethod === "credit_card"}
                onChange={() => setFundingMethod("credit_card")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${fundingMethod === "credit_card" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
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

            {/* Bank Transfer Option */}
            <label
              htmlFor="funding-method-bank-transfer"
              className={`w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Bank transfer</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">and other</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(0% fee)</span>
              <input
                id="funding-method-bank-transfer"
                type="radio"
                value="bank_transfer"
                checked={fundingMethod === "bank_transfer"}
                onChange={() => setFundingMethod("bank_transfer")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${fundingMethod === "bank_transfer" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
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
export default FundingMethodForm;
