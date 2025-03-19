"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import Link from "next/link";
import { useState } from "react";

const PaymentRequestSent = () => {
  const [showSurveyDialog, setShowSurveyDialog] = useState(true);
  const handleDialogChange = (open: any) => {
    setShowSurveyDialog(open);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <div className="w-full flex flex-row justify-center items-center">
          <Image
            height={98}
            width={98}
            src="/next/next_assets/images/svg/pay-success.png"
            alt="Payment request successfully sent!"
          />
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-center text-2xl">
            Payment request successfully sent!
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <button
            onClick={reloadPage}
            className="cursor-pointer text-white flex justify-center items-center w-max h-12 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-primary border border-secondary"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            Request another payment
          </button>
        </div>
      </div>

      {/* Dialog to invite users to a survey */}
      <Dialog open={showSurveyDialog} onOpenChange={handleDialogChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your payment request has been sent successfully!</DialogTitle>
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
                href="https://www.proz.com/pay/request"
              >
                Return to the classic ProZ site
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentRequestSent;
