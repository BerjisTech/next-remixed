import React, { FC } from "react";
import { formatCurrency } from "@/constants/prozpay";

interface ReviewAndConfirmFormProps {
  formData: any;
}

const ReviewAndConfirmForm: FC<ReviewAndConfirmFormProps> = ({ formData }) => {
  const cleanUpPaymentMethod = (paymentMethod: string) => {
    return paymentMethod.replace("_", " ");
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="flex flex-col justify-start items-start w-full gap-1.5">
          <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
            <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
              {/* Payment details */}
              <div className="text-center self-stretch justify-start items-center gap-2 inline-flex flex-wrap">
                <div>
                  <span>
                    You are scheduling a payment of{" "}
                    <span className="font-semibold">
                      {formatCurrency(formData.payment_amount, formData.currency)}
                    </span>{" "}
                  </span>
                  <span>for {formData.payee_name}.</span>
                  {formData.fees_handled_by === "business" && (
                    <>
                      <span>
                        You are covering the fees [
                        <span className="font-semibold">
                          {formatCurrency(formData.total_fee_amount, formData.currency)}(
                          {formData.payment_fee_pct * 100}%)
                        </span>
                        ].{" "}
                      </span>
                      <span>
                        {formData.payee_name} will receive{" "}
                        {formatCurrency(formData.payment_amount, formData.currency)}.
                      </span>
                    </>
                  )}
                  {formData.fees_handled_by === "pros" && (
                    <>
                      <span>
                        {formData.payee_name} is covering the fees [
                        <span className="font-semibold">
                          {formatCurrency(formData.total_fee_amount, formData.currency)}(
                          {formData.payment_fee_pct * 100}%)
                        </span>
                        ].{" "}
                      </span>
                      <span>
                        {formData.payee_name} receive{" "}
                        {formatCurrency(
                          formData.payment_amount - formData.total_fee_amount,
                          formData.currency
                        )}
                        .
                      </span>
                    </>
                  )}
                  <span>
                    You will fund the payments using {cleanUpPaymentMethod(formData.payment_method)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewAndConfirmForm;
