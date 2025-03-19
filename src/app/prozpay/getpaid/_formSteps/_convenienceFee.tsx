"use client";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { formatCurrency } from "@/constants/prozpay";

interface ConvenienceFeeFormProps {
  formData: any;
  setFormData: any;
}

const ConvenienceFeeForm: FC<ConvenienceFeeFormProps> = ({ formData, setFormData }) => {
  const [totalFeePct, setTotalFeePct] = useState(5);
  const [payeeIsMember, setPayeeIsMember] = useState(false);
  const { user, entityId } = useAppSelector((state) => state.profile);

  const handleFeesPaidByChange = (fees_paid_by: string) => {
    setFormData({ ...formData, fees_handled_by: fees_paid_by });
  };

  useEffect(() => {
    if (user?.membership_level) {
      setPayeeIsMember(true);
    }

    if (
      (payeeIsMember && formData.payer_is_member) ||
      (!payeeIsMember && formData.payer_is_member)
    ) {
      setTotalFeePct(2);
    }
    if (payeeIsMember && !formData.payer_is_member) {
      setTotalFeePct(3.9);
    }
    if (!payeeIsMember && !formData.payer_is_member) {
      setTotalFeePct(5);
    }

    let totalFees = formData.payment_amount * (totalFeePct / 100);
    let amountToBeChargedCents = Math.ceil(totalFees + formData.payment_amount * 100);

    setFormData({
      ...formData,
      amount_to_be_charged_cents: amountToBeChargedCents,
      payment_fee_pct: totalFeePct,
      total_fee_amount: totalFees,
      total_fee_amount_cents: totalFees * 100,
      total_fee_basis_points: totalFeePct * 100,
    });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="text-center w-full ">
          <div className="flex flex-row">
            <label
              htmlFor="fees-paid-by-pros"
              className="min-h-32 w-1/2 mx-1 relative flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-sm cursor-pointer"
            >
              <span className="text-gray-900 text-lg">You're covering fees</span>
              <span className="text-gray-900 text-sm font-light">
                You will receive{" "}
                <span className="text-primary font-bold">
                  {formatCurrency(
                    formData.payment_amount - formData.total_fee_amount,
                    formData.payment_currency_upper
                  )}
                </span>
              </span>
              <span className="text-gray-900 text-sm font-light">
                Fee: {formatCurrency(formData.total_fee_amount, formData.payment_currency_upper)} (
                {formData.payment_fee_pct}%)
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
                className={`absolute inset-0 border-2 border-primary bg-primary-alt bg-opacity-10 rounded-lg ${formData.fees_handled_by === "business" ? "hidden" : ""}`}
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
              htmlFor="fees-paid-by-business"
              className="w-1/2 mx-1 relative flex justify-center items-center flex-col bg-white p-5 rounded-lg shadow-sm cursor-pointer"
            >
              <span className="text-gray-900 text-lg">
                {formData.payer_eid > 0 ? formData.payer_name : "Payer"} is covering fees
              </span>
              <span className="text-gray-900 text-sm font-light">
                You will receive
                <span className="text-primary font-bold">
                  {" " + formatCurrency(formData.payment_amount, formData.payment_currency_upper)}
                </span>
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
                className={`absolute inset-0 border-2 border-primary bg-primary-alt bg-opacity-10 rounded-lg ${formData.fees_handled_by === "pros" ? "hidden" : ""}`}
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
