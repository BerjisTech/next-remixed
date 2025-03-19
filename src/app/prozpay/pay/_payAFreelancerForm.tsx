"use client";
import React, { FC, useEffect, useState } from "react";
import SelectPayeeForm from "@/app/prozpay/pay/_formSteps/_selectPayee";
import PaymentOnBehalfForm from "@/app/prozpay/pay/_formSteps/_paymentOnBehalf";
import EnterAmountForm from "@/app/prozpay/pay/_formSteps/_enterAmount";
import PaymentMethodForm from "@/app/prozpay/pay/_formSteps/_paymentMethod";
import ConvenienceFeeForm from "@/app/prozpay/pay/_formSteps/_convenienceFee";
import ReviewAndConfirmForm from "@/app/prozpay/pay/_formSteps/_reviewAndConfirm";
import PaymentRequestSent from "@/app/prozpay/pay/_formSteps/_paymentSentSuccess";
import Link from "next/link";
import { useAppSelector } from "@/lib/store/hooks";
import ProzPayPalButton from "@/app/prozpay/pay/payment-widgets/ProzPayPalButton";

interface PayAFreelancerFormProps {
  setCurrentStepTitle: any;
  setCurrentStepSubtitle: any;
  setCurrentStepParent: any;
}

const PayAFreelancerForm: FC<PayAFreelancerFormProps> = ({
  setCurrentStepTitle,
  setCurrentStepSubtitle,
  setCurrentStepParent,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "payee",
    "payment_on_behalf",
    "amount",
    "payment_method",
    "fees_paid_by",
    "review",
    "success",
  ];
  const { user, entityId } = useAppSelector((state) => state.profile);

  const [payAFreelancerFormData, setPayAFreelancerFormData] = useState({
    action: "pay_a_freelancer",
    viewer_eid: 0,
    payee_is_member: false,
    payee_name: "",
    payee_photo: false,
    payee_membership: "",
    payout_reference_id: "",
    amount_to_be_charged_cents: 0, // Sending money in cents is much safer for conversion
    payment_amount: 0,
    payment_amount_cents: 0,
    currency: "USD",
    payment_method: "bank_transfer",
    payment_method_fees: 0,
    fees_handled_by: "business",
    payment_fee_pct: 5,
    total_fee_amount: 0,
    total_fee_amount_cents: 0,
    total_fee_basis_points: 0,
    description: "", // generated description for Stripe
    payment_reason: "", // Payment notes for saving in DB
    payee_eid: 0,
    invoice_uid: "",
    payer_email: "",
    payment_on_behalf: "myself",
    payment_on_behalf_of_business_id: 0,
    payment_funding_date: "",
    has_payee_error: false,
    has_amount_error: false,
    has_invoice_attachment: false,
    invoice_file_name: "",
    paypal_order_id: "",
    request_hash: `pay-a-freelancer-${Math.random().toString(16).slice(2)}`,
  });

  useEffect(() => {
    getWizardTitle(steps[currentStep]);
  }, [currentStep]);

  useEffect(() => {
    setPayAFreelancerFormData({
      ...payAFreelancerFormData,
      viewer_eid: entityId,
    });
  }, [entityId]);

  const processNext = () => {
    if (steps[currentStep] === "payee") {
      if (payAFreelancerFormData.payee_eid > 0) {
        setCurrentStep(currentStep + 1);
        setCurrentStepParent(currentStep + 1);
      } else {
        setPayAFreelancerFormData({ ...payAFreelancerFormData, has_payee_error: true });
      }
    } else if (steps[currentStep] === "payment_on_behalf") {
      setCurrentStep(currentStep + 1);
      setCurrentStepParent(currentStep + 1);
    } else if (steps[currentStep] === "amount") {
      if (payAFreelancerFormData.payment_amount > 0) {
        setCurrentStep(currentStep + 1);
        setCurrentStepParent(currentStep + 1);
      } else {
        setPayAFreelancerFormData({ ...payAFreelancerFormData, has_amount_error: true });
      }
    } else if (steps[currentStep] === "payment_method") {
      setCurrentStep(currentStep + 1);
      setCurrentStepParent(currentStep + 1);
    } else if (steps[currentStep] === "fees_paid_by") {
      setCurrentStep(currentStep + 1);
      setCurrentStepParent(currentStep + 1);
    } else if (steps[currentStep] === "review") {
      // send payment request
      sendPayment(payAFreelancerFormData)
        .then((r) => {
          // Success
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setCurrentStep(0);
    }
  };

  const processBack = () => {
    setCurrentStep(currentStep - 1);
    setCurrentStepParent(currentStep - 1);
  };

  const getWizardTitle = (step: string) => {
    switch (step) {
      case "payee":
        setCurrentStepTitle("Who are you paying?");
        setCurrentStepSubtitle("");
        break;
      case "payment_on_behalf":
        setCurrentStepTitle("Payment on behalf of...");
        setCurrentStepSubtitle("");
        break;
      case "amount":
        setCurrentStepTitle("How much is this payment for?");
        setCurrentStepSubtitle("");
        break;
      case "payment_method":
        setCurrentStepTitle("Select funding method");
        setCurrentStepSubtitle("Choose how you want to send us the money to fund the payment.");
        break;
      case "fees_paid_by":
        setCurrentStepTitle("Who will cover the convenience fee?");
        setCurrentStepSubtitle(
          "The Convenience fee includes ProZ*Pay service cost and the funding method fee—if any."
        );
        break;
      case "review":
        setCurrentStepTitle("Review details and schedule payment");
        setCurrentStepSubtitle("");
        break;
      default:
        setCurrentStepTitle("");
        setCurrentStepSubtitle("");
        break;
    }
  };

  const sendPayment = async (formData: any) => {
    // setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/prozpay/send-payment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.is_success) {
        if (
          data.stripe_session_id != null &&
          payAFreelancerFormData.payment_method === "credit_card"
        ) {
          window.location.href = data.stripe_session_url;
        }
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

  const paypalPaymentSucceeded = (orderId: string) => {
    const updatedFormData = {
      ...payAFreelancerFormData,
      paypal_order_id: orderId,
    };
    setPayAFreelancerFormData(updatedFormData);

    sendPayment(updatedFormData)
      .then(() => {} /*toast.success('Payment sent successfully')*/)
      .catch(() => {} /*toast.error('Unable to send payment. Please contact support')*/);
  };

  return (
    <>
      {steps[currentStep] == "payee" && (
        <SelectPayeeForm
          formData={payAFreelancerFormData}
          setFormData={setPayAFreelancerFormData}
        />
      )}

      {steps[currentStep] == "payment_on_behalf" && (
        <PaymentOnBehalfForm
          formData={payAFreelancerFormData}
          setFormData={setPayAFreelancerFormData}
        />
      )}

      {steps[currentStep] == "amount" && (
        <EnterAmountForm
          formData={payAFreelancerFormData}
          setFormData={setPayAFreelancerFormData}
        />
      )}

      {steps[currentStep] == "payment_method" && (
        <PaymentMethodForm
          formData={payAFreelancerFormData}
          setFormData={setPayAFreelancerFormData}
        />
      )}

      {steps[currentStep] == "fees_paid_by" && (
        <ConvenienceFeeForm
          formData={payAFreelancerFormData}
          setFormData={setPayAFreelancerFormData}
        />
      )}

      {steps[currentStep] == "review" && <ReviewAndConfirmForm formData={payAFreelancerFormData} />}

      {steps[currentStep] == "success" && <PaymentRequestSent formData={payAFreelancerFormData} />}

      {steps[currentStep] !== "success" && (
        <div className="flex flex-col justify-center items-center w-full relative gap-3">
          <div className="flex flex-row justify-center items-center flex-grow-0 flex-shrink-0 w-max gap-2.5">
            {steps[currentStep] !== "payee" && (
              <button
                onClick={processBack}
                className="flex justify-center items-center h-12 relative overflow-hidden gap-2 px-5 py-3"
              >
                <span className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left">
                  Back
                </span>
              </button>
            )}

            {payAFreelancerFormData.payment_method === "paypal" &&
            steps[currentStep] === "review" ? (
              <ProzPayPalButton
                paymentSucceeded={paypalPaymentSucceeded}
                payment_amount={payAFreelancerFormData.payment_amount.toString()}
                payment_currency_upper={payAFreelancerFormData.currency}
                description={payAFreelancerFormData.description}
                fees_handled_by={payAFreelancerFormData.fees_handled_by}
                total_fee_amount={payAFreelancerFormData.total_fee_amount.toString()}
                viewer_eid={payAFreelancerFormData.viewer_eid.toString()}
                payee_eid={payAFreelancerFormData.payee_eid.toString()}
              />
            ) : (
              <button
                onClick={processNext}
                className="flex justify-center items-center min-w-[200px] h-12 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-primary border border-secondary"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                {steps[currentStep] !== "review" && (
                  <span className="text-base font-semibold text-left text-white">Next</span>
                )}
                {steps[currentStep] === "review" && (
                  <span className="text-base font-semibold text-left text-white">
                    Schedule and pay
                  </span>
                )}
              </button>
            )}
          </div>
          {steps[currentStep] === "review" && (
            <div className="w-full mt-3">
              <p className="text-sm text-center font-normal">
                By clicking "Schedule and pay" you are agreeing to the
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

export default PayAFreelancerForm;
