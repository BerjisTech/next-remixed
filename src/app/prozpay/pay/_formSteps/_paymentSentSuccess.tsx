"use client";
import React, { FC, useState } from "react";
import { formatCurrency } from "@/constants/prozpay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import Link from "next/link";
import Image from "next/image";

interface PaymentRequestSentProps {
  formData: any;
}

const PaymentRequestSent: FC<PaymentRequestSentProps> = ({ formData }) => {
  const [showSurveyDialog, setShowSurveyDialog] = useState(true);
  const handleDialogChange = (open: any) => {
    setShowSurveyDialog(open);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full gap-6">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-row justify-center items-center">
            <Image
              src="/next/next_assets/images/svg/pay-success.png"
              alt="Payment successful icon"
              width={100}
              height={100}
            />
          </div>

          {/* Payment details */}
          <div className="text-center self-stretch justify-start items-center gap-2 inline-flex flex-wrap">
            <div>
              <span className="text-base font-normal mx-1 dark:text-gray-300">Your payment of</span>
              <span className="mx-1 text-base font-bold dark:text-gray-200">
                {formatCurrency(formData.payment_amount, formData.currency)}
              </span>
              <span className="text-base font-normal dark:text-gray-300"> to </span>
            </div>

            {/* Payee information */}
            <div className="pl-1 pr-2 py-1 bg-primary-50 dark:bg-gray-600 rounded-full justify-start items-center gap-2 flex">
              <div className="rounded-full border border-secondary dark:border-blue-400 justify-center items-center flex">
                <Image
                  className="rounded-full"
                  src={formData.payee_photo}
                  alt={`${formData.payee_name}'s profile photo`}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-col justify-start items-start gap-px inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-primary dark:text-blue-300 text-sm font-medium leading-tight">
                    {formData.payee_name}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-base font-normal dark:text-gray-300">
              has been{" "}
              {formData.payment_method === "paypal"
                ? "sent successfully."
                : "successfully scheduled."}
            </div>
          </div>

          {formData.payment_method === "bank_transfer" && (
            <>
              {/* Funding instructions */}
              <div>
                <span className="text-[#344054] dark:text-gray-300 text-base font-normal">
                  Now it's time to fund it. Please send a bank transfer of
                </span>
                <span className="gap-1 text-[#344054] dark:text-gray-300 text-base font-medium">
                  {" "}
                </span>
                <span className="text-primary dark:text-blue-300 text-base font-bold">
                  {formatCurrency(
                    formData.payment_amount + formData.total_fee_amount,
                    formData.currency
                  )}
                </span>
                <span className="gap-1 text-[#344054] dark:text-gray-300 text-base font-medium">
                  {" "}
                </span>
                <span className="text-[#344054] dark:text-gray-300 text-base font-normal">
                  to the following bank account:
                </span>
              </div>

              {/* Bank details */}
              <div className="flex-col justify-start items-start gap-2 flex w-full ">
                <div className="text-[#344054] dark:text-gray-200 text-base font-semibold">
                  The bank details for {formData.currency} transfers are:
                </div>
                <div className="p-6 bg-[#f8fbfb] dark:bg-gray-700 rounded-xl border-l-2 border-[#c8e1e1] dark:border-blue-400 justify-start items-start gap-2.5 inline-flex w-full ">
                  <div className="text-[#344054] dark:text-gray-300 text-base font-normal">
                    Account Holder: ProZ.com
                    <br />
                    Bank: J.P. Morgan Chase
                    <br />
                    Currency: {formData.currency}
                    <br />
                    Routing Number (ABA): 022300173
                    <br />
                    Swiftcode - CHASUS33
                    <br />
                    Account Number: 483500460665
                  </div>
                </div>
              </div>

              {/* Alternative methods */}
              <div className="self-stretch text-[#344054] dark:text-gray-300 text-base font-normal">
                If you want to fund the payment using an alternative method, please open a support
                request for more information.
              </div>
            </>
          )}
          {formData.payment_method === "credit_card" && (
            <div className="w-full text-center">
              <span className="w-full text-center text-lg font-medium">
                Redirecting to checkout &hellip;
              </span>
            </div>
          )}
          <div className="w-full flex flex-row justify-center items-center">
            <button
              onClick={reloadPage}
              className="cursor-pointer text-white flex justify-center items-center w-max h-12 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-primary border border-secondary"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              Send another payment
            </button>
          </div>
        </div>
      </div>

      {/* Dialog to invite users to a survey */}
      <Dialog open={showSurveyDialog} onOpenChange={handleDialogChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your payment has been sent successfully!</DialogTitle>
            <DialogDescription className="py-1">
              Thank you for trying out the new form. We'd love to hear your feedback —please take a
              moment to share your thoughts in{" "}
              <Link
                className="text-primary underline"
                href="https://www.surveymonkey.com/r/prozpay_feedback"
                target="_blank"
              >
                this quick survey
              </Link>
              , it will take you just a minute.
            </DialogDescription>
            <DialogDescription className="py-2">
              This is a prototype of ProZ’s updated platform, so many areas are still in
              display-only mode. Feel free to explore!
            </DialogDescription>
            <DialogDescription className="py-1">
              <Link
                className="text-white px-4 py-2.5 bg-primary rounded-md hover:underline"
                href="https://www.proz.com/pay"
              >
                Return to the classic ProZ site
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentRequestSent;
