"use client";
import React, { FC, useEffect, useState } from "react";
import { useGetServiceFeesQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";

interface ConvenienceFeeFormProps {
  formData: any;
  setFormData: any;
}

const ConvenienceFeeForm: FC<ConvenienceFeeFormProps> = ({ formData, setFormData }) => {
  const [totalFeePct, setTotalFeePct] = useState(0);
  const {
    data: serviceFees,
    isLoading,
    error,
  } = useGetServiceFeesQuery(
    { payerEid: formData.viewer_eid, payeeEid: formData.payee_eid },
    { skip: !formData.viewer_eid || !formData.payee_eid }
  );

  const handleFeesPaidByChange = (fees_paid_by: string) => {
    setFormData((prevData: any) => {
      const updatedFormData = { ...prevData, fees_handled_by: fees_paid_by };
      if (serviceFees) {
        updateTotals(updatedFormData); // Pass the updated formData directly
      }
      return updatedFormData;
    });
  };

  const updateTotals = (localFormData: any) => {
    const totalPct = localFormData.payment_method_fees + serviceFees;
    const totalFeePctReal = Math.round(totalPct * 10000) / 10000;
    setTotalFeePct(totalFeePctReal);

    const totalFeeCents = localFormData.payment_amount_cents * totalFeePctReal;
    let amountToBeChargedCents = localFormData.payment_amount_cents;

    if (localFormData.fees_handled_by === "business") {
      amountToBeChargedCents = Math.round(totalFeeCents + localFormData.payment_amount_cents);
    }

    setFormData((prevData: any) => ({
      ...prevData,
      amount_to_be_charged_cents: amountToBeChargedCents,
      payment_fee_pct: totalFeePctReal,
      total_fee_amount: totalFeeCents / 100,
      total_fee_amount_cents: totalFeeCents,
      total_fee_basis_points: totalFeePctReal * 10000,
    }));
  };

  useEffect(() => {
    if (serviceFees) {
      updateTotals(formData);
    }
  }, [serviceFees]);

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="w-full text-center">
          <div className="flex flex-col sm:flex-row">
            {/* Option 1: You're paying fees */}
            <label
              htmlFor="fees-paid-by-business"
              className={`min-h-32 w-full sm:w-1/2 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">You're paying fees</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">
                ({!isLoading ? totalFeePct * 100 : "..."}% fee)
              </span>
              <input
                id="fees-paid-by-business"
                type="radio"
                checked={formData.fees_handled_by === "business"}
                onChange={() => handleFeesPaidByChange("business")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${formData.fees_handled_by === "business" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
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
              className={`min-h-32 w-full sm:w-1/2 mx-1 my-1 sm:my-0 relative flex justify-center items-center flex-col bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">
                Recipient is paying fees
              </span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">
                ({!isLoading ? totalFeePct * 100 : "..."}% fee)
              </span>
              <input
                id="fees-paid-by-pros"
                type="radio"
                checked={formData.fees_handled_by === "pros"}
                onChange={() => handleFeesPaidByChange("pros")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${formData.fees_handled_by === "pros" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
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
