import React, { FC } from "react";
import { formatCurrency } from "@/constants/prozpay";

interface ReviewAndConfirmFormProps {
  formData: any;
  setFormData: any;
}

const ReviewAndConfirmForm: FC<ReviewAndConfirmFormProps> = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6">
      <div className="flex flex-col justify-center items-center w-full gap-6">
        <div className="flex flex-col justify-center items-center w-full gap-1.5">
          <div className="flex flex-col justify-center items-center w-full relative gap-1.5">
            <div className="flex-col justify-center items-center text-center gap-4 inline-flex">
              <p className="text-center">
                <span className="text-base font-normal">You will send a payment request for</span>
                <span className="text-base font-bold px-1">
                  {formatCurrency(formData.payment_amount, formData.payment_currency_upper)}
                </span>
                <span className="text-base font-normal"> to </span>
                <span className="text-base font-bold px-1">
                  {formData.payer_eid > 0 ? (
                    <span>{formData.payer_name}.</span>
                  ) : (
                    <span>{formData.payer_email}.</span>
                  )}
                </span>
                <span className="text-base font-normal">
                  You have requested for the fee to be covered by
                </span>
                <span className="text-base font-normal px-1">
                  {formData.fees_handled_by === "pros" ? "yourself" : "the payer"}.
                </span>
              </p>
              <p className="text-base text-center font-normal">
                Total fee may vary depending on your client's preferred funding method.
              </p>

              {(formData.fees_handled_by === "pros" ||
                formData.notes !== "" ||
                formData.has_invoice_attachment) && (
                <div className="w-full flex flex-col justify-center items-center">
                  {formData.fees_handled_by === "pros" && (
                    <div>
                      Fees:{" "}
                      <span>
                        {formatCurrency(formData.total_fee_amount, formData.payment_currency_upper)}
                      </span>
                      <span> ({formData.payment_fee_pct}%)</span>
                    </div>
                  )}
                  {formData.notes !== "" && (
                    <div>
                      Notes: <span>{formData.notes}</span>
                    </div>
                  )}
                  {formData.has_invoice_attachment && (
                    <div className="flex justify-between items-center w-full relative pl-6 pr-2.5 py-2 rounded-2xl bg-accent-light">
                      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                        {formData.file_name}
                      </p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M6.75 2.75H11.25M2.25 5H15.75M14.25 5L13.724 12.8895C13.6451 14.0732 13.6057 14.665 13.35 15.1138C13.1249 15.5088 12.7854 15.8265 12.3762 16.0248C11.9115 16.25 11.3183 16.25 10.132 16.25H7.86799C6.68168 16.25 6.08852 16.25 5.62375 16.0248C5.21457 15.8265 4.87507 15.5088 4.64999 15.1138C4.39433 14.665 4.35488 14.0732 4.27596 12.8895L3.75 5M7.5 8.375V12.125M10.5 8.375V12.125"
                          stroke="#6C6C72"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndConfirmForm;
