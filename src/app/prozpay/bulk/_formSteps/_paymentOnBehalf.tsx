"use client";
import React, { FC, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { useGetEntityBusinessesQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";

interface PaymentOnBehalfFormProps {
  formData: any;
  setFormData: any;
}

const PaymentOnBehalfForm: FC<PaymentOnBehalfFormProps> = ({ formData, setFormData }) => {
  const [paymentOnBehalf, setPaymentOnBehalf] = useState("myself");
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: entityEmployers,
    isLoading,
    error,
  } = useGetEntityBusinessesQuery(`${entityId}`, { skip: !entityId });

  const handlePaymentOnBehalfChange = (payment_on_behalf: string) => {
    setFormData({ ...formData, payment_on_behalf: payment_on_behalf });
  };

  const handleBusinessChange = (business_id: number) => {
    setFormData({ ...formData, payment_on_behalf_of_business_id: business_id });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="w-full ">
          <div className="flex flex-row">
            <label
              htmlFor="payment-on-behalf-myself"
              className="min-h-32 w-1/2 mx-1 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer"
            >
              <span className="text-gray-900">
                <span className="text-lg">Myself</span>
              </span>
              <input
                id="payment-on-behalf-myself"
                name="payment_on_behalf"
                type="radio"
                value="myself"
                checked={paymentOnBehalf === "myself"}
                onChange={() => setPaymentOnBehalf("myself")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${
                  paymentOnBehalf === "myself"
                    ? "bg-primary-alt bg-opacity-20 border-primary"
                    : "hidden"
                }`}
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

            <label
              htmlFor="payment-on-behalf-business"
              className="w-1/2 mx-1 relative flex justify-center items-center flex-col bg-white dark:bg-gray-600 p-5 rounded-lg shadow-sm cursor-pointer"
            >
              <span className="text-gray-900">
                <span className="text-lg">My company</span>
              </span>
              <input
                id="payment-on-behalf-business"
                name="payment_on_behalf"
                type="radio"
                value="business"
                checked={paymentOnBehalf === "business"}
                onChange={() => setPaymentOnBehalf("business")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${
                  paymentOnBehalf === "business"
                    ? "bg-primary-alt bg-opacity-20 border-primary"
                    : "hidden"
                }`}
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

        {paymentOnBehalf === "business" && (
          <div className="flex flex-col justify-start items-start w-full gap-1.5">
            <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark">
                Choose company
              </p>
              <div
                className="flex justify-start items-center w-full overflow-hidden gap-2 rounded-xl bg-white"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <div className="flex justify-start items-center flex-grow relative gap-2">
                  <select
                    name="payee_search_input"
                    onChange={(ev) => handleBusinessChange(parseInt(ev.target.value))}
                    className="flex-grow w-[661px] px-3.5 py-2.5 border border-primary-50 focus:border-primary rounded-xl text-base text-left text-dark-blue-hue"
                  >
                    <option>-- Select option --</option>
                    {entityEmployers && !isLoading && !error && (
                      <>
                        {entityEmployers.map((item: any, index: number) => (
                          <option key={index} value={item["business_id"]}>
                            {item["common_name"]}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PaymentOnBehalfForm;
