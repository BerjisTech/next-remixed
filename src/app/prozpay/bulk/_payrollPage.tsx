"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PaymentOnBehalfForm from "@/app/prozpay/bulk/_formSteps/_paymentOnBehalf";
import UploadCsvForm from "@/app/prozpay/bulk/_formSteps/_uploadCsv";
import ReviewCsvForm from "@/app/prozpay/bulk/_formSteps/_reviewCsv";
import FundingMethodForm from "@/app/prozpay/bulk/_formSteps/_fundingMethod";
import ConvenienceFeeForm from "@/app/prozpay/bulk/_formSteps/_convenienceFee";
import FirstReviewForm from "@/app/prozpay/bulk/_formSteps/_firstReview";
import LastReviewForm from "@/app/prozpay/bulk/_formSteps/_lastReview";
import PayrollSentForm from "@/app/prozpay/bulk/_formSteps/_payrollSent";

const Payroll = () => {
  const [currentStepTitle, setCurrentStepTitle] = useState("Payment on behalf");
  const [currentStepSubtitle, setCurrentStepSubtitle] = useState("");
  const [currentStep, setCurrentStep] = useState("payment_on_behalf");

  const steps = [
    { key: "payment_on_behalf", label: "Payment on behalf" },
    { key: "upload_csv", label: "Add payments" },
    { key: "review_csv", label: "Review CSV" },
    { key: "funding_method", label: "Funding method" },
    { key: "convenience_fee", label: "Convenience fee" },
  ];

  const [bulkPaymentFormData, setBulkPaymentFormData] = useState({});

  const getWizardTitle = (step: string) => {
    switch (step) {
      case "payment_on_behalf":
        setCurrentStepTitle("Payment on behalf of");
        break;
      case "upload_csv":
        setCurrentStepTitle("Submit CSV/Excel file");
        break;
      case "review_csv":
        setCurrentStepTitle("Review file");
        break;
      case "funding_method":
        setCurrentStepTitle("Select funding method");
        break;
      case "convenience_fee":
        setCurrentStepTitle("Who will cover the convenience fee?");
        break;
      case "first_review":
        setCurrentStepTitle("Review details");
        break;
      case "last_review":
        setCurrentStepTitle("Review details");
        break;
      case "success":
        setCurrentStepTitle("");
        break;
      default:
        setCurrentStepTitle("");
        break;
    }
  };

  const processNext = () => {
    if (currentStep === "payment_on_behalf") {
      setCurrentStep("upload_csv");
    } else if (currentStep === "upload_csv") {
      setCurrentStep("review_csv");
    } else if (currentStep === "review_csv") {
      setCurrentStep("funding_method");
    } else if (currentStep === "funding_method") {
      setCurrentStep("convenience_fee");
    } else if (currentStep === "convenience_fee") {
      setCurrentStep("first_review");
    } else if (currentStep === "first_review") {
      setCurrentStep("success");
    } else if (currentStep === "last_review") {
      // Submit and checkout
      setCurrentStep("success");
    } else {
      setCurrentStep("payment_on_behalf");
    }

    getWizardTitle(currentStep);
  };

  const processBack = () => {
    if (currentStep === "last_review") {
      setCurrentStep("first_review");
    } else if (currentStep === "first_review") {
      setCurrentStep("convenience_fee");
    } else if (currentStep === "convenience_fee") {
      setCurrentStep("funding_method");
    } else if (currentStep === "funding_method") {
      setCurrentStep("review_csv");
    } else if (currentStep === "review_csv") {
      setCurrentStep("upload_csv");
    } else if (currentStep === "upload_csv") {
      setCurrentStep("payment_on_behalf");
    } else {
      setCurrentStep("payment_on_behalf");
    }

    getWizardTitle(currentStep);
  };

  return (
    <div
      className={`w-full container flex flex-row items-center justify-center gap-3 relative my-4`}
    >
      <div className="w-full xl:w-[calc(100%-300px)]">
        <div className="mb-2.5">
          <span className="text-red-400">
            * This is a demo form. No money will be sent or deducted from you
          </span>
        </div>
        <div className="min-h-[550px] sm:min-h-[550px] flex flex-col justify-start items-center flex-grow relative overflow-hidden gap-6 px-4 sm:px-6 py-8 rounded-xl bg-primary-50 dark:bg-gray-800 border-t-[5px] border-r-0 border-b-0 border-l-0 border-secondary dark:border-blue-500">
          <div className="flex flex-col justify-start items-center w-full gap-6">
            <span className="text-primary dark:text-gray-200 text-xl">{currentStepTitle}</span>
            <span className="dark:text-gray-200 text-sm">{currentStepSubtitle}</span>
          </div>

          <>
            {currentStep == "payment_on_behalf" && (
              <PaymentOnBehalfForm
                formData={bulkPaymentFormData}
                setFormData={setBulkPaymentFormData}
              />
            )}

            {currentStep == "upload_csv" && (
              <UploadCsvForm formData={bulkPaymentFormData} setFormData={setBulkPaymentFormData} />
            )}

            {currentStep == "review_csv" && <ReviewCsvForm />}

            {currentStep == "funding_method" && <FundingMethodForm />}

            {currentStep == "convenience_fee" && <ConvenienceFeeForm />}

            {currentStep == "first_review" && <FirstReviewForm />}

            {currentStep == "last_review" && <LastReviewForm />}

            {currentStep == "success" && <PayrollSentForm />}

            {currentStep !== "success" && (
              <div className="flex flex-row justify-center items-center w-full relative gap-3">
                <div className="flex flex-row justify-center items-center flex-grow-0 flex-shrink-0 w-[216px] gap-2.5">
                  {currentStep !== "payment_on_behalf" && (
                    <button
                      onClick={processBack}
                      className="flex justify-center items-center w-full h-12 relative overflow-hidden gap-2 px-5 py-3"
                    >
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left">
                        Back
                      </p>
                    </button>
                  )}

                  <button
                    onClick={processNext}
                    className="flex justify-center items-center w-full h-12 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-primary border border-secondary"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                  >
                    {currentStep !== "last_review" && (
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                        Next
                      </p>
                    )}
                    {currentStep === "last_review" && (
                      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                        Schedule payments
                      </p>
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        </div>
      </div>

      <div className="w-1/4 flex flex-col justify-center items-start">
        {currentStep == "payment_on_behalf" && (
          <div className="w-full p-4 bg-primary-50 dark:bg-gray-800 rounded-2xl flex-col justify-start items-center mb-1.5 flex">
            <div className="text-sm font-normal">
              Pay contractors in over 170 countries—fund the payments using your preferred method
              and let each contractor choose theirs.
            </div>
            <div className="text-sm font-normal">
              Set up individual payments in less than 60 seconds or submit bulk payments.
            </div>
          </div>
        )}

        {/*  Stepper indicator  */}
        <div className="w-full p-8 bg-primary-50 dark:bg-gray-800 rounded-2xl flex-col justify-start items-center flex">
          <div className="self-stretch flex-col justify-start items-start flex">
            {steps.map((step, index) => (
              <div
                className="self-stretch justify-start items-start gap-4 inline-flex"
                key={step.key}
              >
                {currentStep === step.key ? (
                  <div className="pb-1 flex-col justify-start items-center gap-1 inline-flex">
                    <div className="w-8 h-8 bg-primary-50 border-primary border-2 rounded-2xl shadow justify-center items-center inline-flex">
                      <div className="w-7 h-7 relative bg-primary-50 rounded-2xl flex-col justify-center items-center flex">
                        <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-primary rounded-sm"></div>
                  </div>
                ) : steps.findIndex((s) => s.key === currentStep) > index ? (
                  <div className="self-stretch pb-1 flex-col justify-start items-center gap-1 inline-flex">
                    <div className="w-8 h-8 bg-primary-50 rounded-2xl justify-center items-center inline-flex">
                      <div className="w-7 h-7 relative rounded-2xl flex-col justify-start items-start flex">
                        <Image
                          src="/assets/images/svg/prozpay-step-done.svg"
                          alt=""
                          width={28}
                          height={28}
                        />
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-primary rounded-sm"></div>
                  </div>
                ) : (
                  <div className="pb-1 flex-col justify-start items-center gap-1 inline-flex">
                    <div className="w-8 h-8 bg-accent rounded-2xl justify-center items-center inline-flex">
                      <div className="w-8 h-8 relative rounded-2xl flex-col justify-center items-center flex">
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-gray-300 rounded-sm"></div>
                  </div>
                )}

                <div className="grow shrink basis-0 pt-1.5 pb-6 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-sm font-medium leading-tight">{step.label}</div>
                </div>
              </div>
            ))}

            {/* Help link */}
            <div className="w-full my-4 p-2">
              <Link
                href="/site-team"
                target="_blank"
                className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 px-6 py-3 rounded-xl bg-primary dark:bg-black"
              >
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M11.95 18.3926C12.3 18.3926 12.596 18.2716 12.838 18.0296C13.08 17.7876 13.2007 17.4919 13.2 17.1426C13.1993 16.7932 13.0787 16.4972 12.838 16.2546C12.5973 16.0119 12.3013 15.8912 11.95 15.8926C11.5987 15.8939 11.303 16.0149 11.063 16.2556C10.823 16.4962 10.702 16.7919 10.7 17.1426C10.698 17.4932 10.819 17.7893 11.063 18.0306C11.307 18.2719 11.6027 18.3926 11.95 18.3926ZM11.05 14.5426H12.9C12.9 13.9926 12.9627 13.5592 13.088 13.2426C13.2133 12.9259 13.5673 12.4926 14.15 11.9426C14.5833 11.5092 14.925 11.0966 15.175 10.7046C15.425 10.3126 15.55 9.84192 15.55 9.29258C15.55 8.35925 15.2083 7.64258 14.525 7.14258C13.8417 6.64258 13.0333 6.39258 12.1 6.39258C11.15 6.39258 10.3793 6.64258 9.788 7.14258C9.19667 7.64258 8.784 8.24258 8.55 8.94258L10.2 9.59258C10.2833 9.29258 10.471 8.96758 10.763 8.61758C11.055 8.26758 11.5007 8.09258 12.1 8.09258C12.6333 8.09258 13.0333 8.23858 13.3 8.53058C13.5667 8.82258 13.7 9.14325 13.7 9.49258C13.7 9.82592 13.6 10.1386 13.4 10.4306C13.2 10.7226 12.95 10.9932 12.65 11.2426C11.9167 11.8926 11.4667 12.3842 11.3 12.7176C11.1333 13.0509 11.05 13.6592 11.05 14.5426ZM12 22.3926C10.6167 22.3926 9.31667 22.1302 8.1 21.6056C6.88334 21.0809 5.825 20.3683 4.925 19.4676C4.025 18.5669 3.31267 17.5086 2.788 16.2926C2.26333 15.0766 2.00067 13.7766 2 12.3926C1.99933 11.0086 2.262 9.70858 2.788 8.49258C3.314 7.27658 4.02633 6.21825 4.925 5.31758C5.82367 4.41692 6.882 3.70458 8.1 3.18058C9.318 2.65658 10.618 2.39392 12 2.39258C13.382 2.39125 14.682 2.65392 15.9 3.18058C17.118 3.70725 18.1763 4.41958 19.075 5.31758C19.9737 6.21558 20.6863 7.27392 21.213 8.49258C21.7397 9.71125 22.002 11.0112 22 12.3926C21.998 13.7739 21.7353 15.0739 21.212 16.2926C20.6887 17.5112 19.9763 18.5696 19.075 19.4676C18.1737 20.3656 17.1153 21.0782 15.9 21.6056C14.6847 22.1329 13.3847 22.3953 12 22.3926ZM12 20.3926C14.2333 20.3926 16.125 19.6176 17.675 18.0676C19.225 16.5176 20 14.6259 20 12.3926C20 10.1592 19.225 8.26758 17.675 6.71758C16.125 5.16758 14.2333 4.39258 12 4.39258C9.76667 4.39258 7.875 5.16758 6.325 6.71758C4.775 8.26758 4 10.1592 4 12.3926C4 14.6259 4.775 16.5176 6.325 18.0676C7.875 19.6176 9.76667 20.3926 12 20.3926Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                  <span className="text-sm text-white font-semibold">Get help</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payroll;
