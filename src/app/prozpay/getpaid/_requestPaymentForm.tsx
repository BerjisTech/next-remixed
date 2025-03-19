"use client";
import SelectPayerForm from "@/app/prozpay/getpaid/_formSteps/_selectPayer";
import React, { FC, useEffect, useState } from "react";
import EnterAmountForm from "@/app/prozpay/getpaid/_formSteps/_enterAmount";
import ConvenienceFeeForm from "@/app/prozpay/getpaid/_formSteps/_convenienceFee";
import ReviewAndConfirmForm from "@/app/prozpay/getpaid/_formSteps/_reviewAndConfirm";
import PaymentRequestSent from "@/app/prozpay/getpaid/_formSteps/_requestSent";
import { useAppSelector } from "@/lib/store/hooks";
import { formatCurrency } from "@/constants/prozpay";
import Link from "next/link";
import { toast } from "sonner";

interface RequestPaymentFormProps {
  setCurrentStepTitle: any;
  setCurrentStepSubtitle: any;
  setCurrentStepParent: any;
}

const RequestPaymentForm: FC<RequestPaymentFormProps> = ({
  setCurrentStepTitle,
  setCurrentStepSubtitle,
  setCurrentStepParent,
}) => {
  const { user, entityId } = useAppSelector((state) => state.profile);

  const [requestPaymentFormData, setRequestPaymentFormData] = useState({
    action: "send_payment_request",
    payer_email: "",
    payee_eid: entityId ? entityId : 0,
    payee_name: "",
    payer_eid: 0,
    payer_name: "",
    payer_photo: "",
    payer_is_member: false,
    payee_membership_type: "",
    notes: "",
    user_defined_subject: "Payment request from John Doe",
    user_defined_introduction: "Payment request introduction",
    payment_amount: 0,
    payment_currency_upper: "USD",
    payment_method: "",
    fees_handled_by: "business",
    payment_fee_pct: 0,
    total_fee_amount: 0,
    total_fee_amount_cents: 0,
    total_fee_basis_points: 0,
    has_invoice_attachment: false,
    file_name: "",
    file_size: 0,
    file_type: "",
    file: null,
    invoice: null,
    has_email_error: false,
    has_amount_error: false,
    request_hash: `request-payment-${Math.random().toString(16).slice(2)}`,
  });

  const [sendingRequest, setSendingRequest] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["payer", "amount", "convenience_fee", "review", "success"];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    getWizardTitle(steps[currentStep]);
  }, [currentStep]);

  useEffect(() => {
    const userDefinedSubject = `Payment request from ${user?.site_name}`;
    setRequestPaymentFormData({
      ...requestPaymentFormData,
      payee_eid: entityId,
      payee_name: user?.site_name ? user?.site_name : "",
      user_defined_subject: userDefinedSubject,
    });
  }, [entityId]);

  const processNext = () => {
    if (steps[currentStep] === "payer") {
      if (
        (requestPaymentFormData.payer_email !== "" &&
          emailRegex.test(requestPaymentFormData.payer_email)) ||
        requestPaymentFormData.payer_eid > 0
      ) {
        setCurrentStep(currentStep + 1);
        setCurrentStepParent(currentStep + 1);
      } else {
        setRequestPaymentFormData({ ...requestPaymentFormData, has_email_error: true });
      }
    } else if (steps[currentStep] === "amount") {
      if (requestPaymentFormData.payment_amount > 0) {
        // This is used as the email introduction
        const userDefinedIntroduction = `${requestPaymentFormData.payee_name} requests a payment of ${formatCurrency(requestPaymentFormData.payment_amount, requestPaymentFormData.payment_currency_upper)} via ProZ*Pay. Payment could be made with bank transfer, credit card or PayPal.`;
        setRequestPaymentFormData({
          ...requestPaymentFormData,
          user_defined_introduction: userDefinedIntroduction,
        });

        setCurrentStep(currentStep + 1);
        setCurrentStepParent(currentStep + 1);
      } else {
        setRequestPaymentFormData({ ...requestPaymentFormData, has_amount_error: true });
      }
    } else if (steps[currentStep] === "convenience_fee") {
      setCurrentStep(currentStep + 1);
      setCurrentStepParent(currentStep + 1);
    } else if (steps[currentStep] === "review") {
      // TODO show loading on the button
      setSendingRequest(true);
      // send payment request
      sendPaymentRequest()
        .then((r) => {
          // Success
          setSendingRequest(false);
        })
        .catch((error) => {
          toast.error("Error sending payment request");
          console.error(error);
          setSendingRequest(false);
        });
    } else {
      setCurrentStep(1);
      setCurrentStepParent(1);
    }
  };

  const processBack = () => {
    setCurrentStep(currentStep - 1);
    setCurrentStepParent(currentStep - 1);
  };

  const getWizardTitle = (step: string) => {
    switch (step) {
      case "payer":
        setCurrentStepTitle("Who is the payment request for?");
        setCurrentStepSubtitle("");
        break;
      case "amount":
        setCurrentStepTitle("How much is the payment for?");
        setCurrentStepSubtitle("");
        break;
      case "convenience_fee":
        setCurrentStepTitle("Who will cover the convenience fee?");
        setCurrentStepSubtitle(
          "The Convenience fee includes ProZ*Pay service cost and the funding method fee. Total fee may vary depending on your client's preferred funding method."
        );
        break;
      case "review":
        setCurrentStepTitle("Review details");
        setCurrentStepSubtitle("");
        break;
      default:
        setCurrentStepTitle("");
        setCurrentStepSubtitle("");
        break;
    }
  };

  const sendPaymentRequest = async () => {
    // setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/prozpay/request-payment`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestPaymentFormData),
        }
      );

      const data = await response.json();
      if (data.is_success) {
        setCurrentStep(currentStep + 1);
        setCurrentStepParent(currentStep + 1);
      } else {
        // show Payment Error
      }
      // setLoading(false);
    } catch (error) {
      //  error message
    }
  };

  return (
    <>
      {steps[currentStep] == "payer" && (
        <SelectPayerForm
          formData={requestPaymentFormData}
          setFormData={setRequestPaymentFormData}
        />
      )}

      {steps[currentStep] == "amount" && (
        <EnterAmountForm
          formData={requestPaymentFormData}
          setFormData={setRequestPaymentFormData}
        />
      )}

      {steps[currentStep] == "convenience_fee" && (
        <ConvenienceFeeForm
          formData={requestPaymentFormData}
          setFormData={setRequestPaymentFormData}
        />
      )}

      {steps[currentStep] == "review" && (
        <ReviewAndConfirmForm
          formData={requestPaymentFormData}
          setFormData={setRequestPaymentFormData}
        />
      )}

      {steps[currentStep] == "success" && (
        //TODO Send dynamic message and status, bee it error or success
        <PaymentRequestSent />
      )}

      {steps[currentStep] !== "success" && (
        <div className="flex flex-col justify-center items-center w-full relative gap-3">
          <div className="flex flex-row justify-center items-center flex-grow-0 flex-shrink-0 w-max gap-2.5">
            {steps[currentStep] !== "payer" && (
              <button
                onClick={processBack}
                className="flex justify-center items-center h-12 relative overflow-hidden gap-2 px-5 py-3"
              >
                <span className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left">
                  Back
                </span>
              </button>
            )}

            <button
              onClick={processNext}
              disabled={sendingRequest}
              className="flex justify-center items-center min-w-[200px] h-12 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-primary border border-primary"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              {steps[currentStep] !== "review" && (
                <span className="text-base font-semibold text-left text-white">Next</span>
              )}
              {steps[currentStep] === "review" && (
                <span className="text-base font-semibold text-left text-white">
                  Send payment request
                </span>
              )}
            </button>
          </div>
          {steps[currentStep] === "review" && (
            <div className="w-full mt-3">
              <p className="text-sm text-center font-normal">
                By clicking "Send payment request" you are agreeing to the
                <Link href="/prozpay/terms" target="_blank" className="underline text-primary">
                  {" "}
                  ProZ*Pay Terms and conditions
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RequestPaymentForm;
