"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../_sidebar";
import StepOne from "./formSteps/_stepOne";
import StepTwo from "./formSteps/_stepTwo";
import StepThree from "./formSteps/_stepThree";
import StepFour from "./formSteps/_stepFour";
import StepFive from "./formSteps/_stepFive";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/lib/store/hooks";

const InterpreterPool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const { data: session } = useSession();
  const { entityId } = useAppSelector((state) => state.profile);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (entityId) {
        try {
          console.log("Fetching user information");
          const response = await fetch(
            `/next/api/user?entityId=${entityId}&include_entity_resourses=1`
          );
          //console.log("Response", response);
          const data = await response.json();
          //console.log("Data", data);
          if (data[0]) {
            setUserInfo(data[0]);
          }
        } catch (err) {
          console.error("Error fetching user information", err);
        }
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, [entityId]);

  // Steps for sidebar
  const steps = [
    { title: "General info" },
    { title: "Services and languages" },
    { title: "Payment information" },
    { title: "Background check" },
    { title: "Terms and Conditions" },
  ];

  // Function to handle form submission
  const handleSubmit = () => {
    alert("Application submitted successfully!");
  };

  // Render content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <StepOne nextStep={() => setCurrentStep(1)} userInfo={userInfo} />;
      case 1:
        return (
          <StepTwo
            nextStep={() => setCurrentStep(2)}
            prevStep={() => setCurrentStep(0)}
            entityId={Number(entityId)}
          />
        );
      case 2:
        return <StepThree nextStep={() => setCurrentStep(3)} prevStep={() => setCurrentStep(1)} />;
      case 3:
        return (
          <StepFour
            nextStep={() => setCurrentStep(4)}
            prevStep={() => setCurrentStep(2)}
            userInfo={userInfo}
          />
        );
      case 4:
        return <StepFive submitApplication={handleSubmit} prevStep={() => setCurrentStep(3)} />;
      default:
        return <p className="text-grey-700">Form completed. Thank you!</p>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:bg-dark px-20">
      {/* Main Content Area */}
      <div className="flex-1 px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Apply to join the interpreter pool</h1>
        <p className="text-grey-700 mb-6">
          Use this form to apply to the{" "}
          <Link
            href="https://www.proz.com/pools/interpreters"
            className="text-primary dark:text-primary underline"
          >
            ProZ.com interpreter pool
          </Link>
          .{" "}
          <Link
            href="https://help.proz.com/en/jobs-and-directories#pools"
            className="text-primary dark:text-primary underline"
          >
            (Learn more)
          </Link>
        </p>

        {/* Render Current Step Content */}
        {renderStepContent()}
      </div>

      {/* Sidebar */}
      <Sidebar steps={steps} currentStep={currentStep} />
    </div>
  );
};

export default InterpreterPool;
