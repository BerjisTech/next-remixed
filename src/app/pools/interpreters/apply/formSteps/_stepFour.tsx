import React, { useRef, useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/shadcn/button";
import { Checkbox } from "@/components/shadcn/checkbox";
import { HIPAAAgreementModal } from "./../modals/_hippAA";
import { IndependentContractorAgreementModal } from "./../modals/_independentContractor";

// Type assertion for SignatureCanvas
const SignatureCanvas =
  ReactSignatureCanvas as unknown as React.ComponentClass<ReactSignatureCanvas.ReactSignatureCanvasProps>;

interface StepFourProps {
  nextStep: () => void;
  prevStep: () => void;
  userInfo: any;
}

const StepFour: React.FC<StepFourProps> = ({ nextStep, prevStep, userInfo }) => {
  const [backgroundCheck, setBackgroundCheck] = useState(false);
  const [hipaaAgreement, setHipaaAgreement] = useState(false);
  const [contractorAgreement, setContractorAgreement] = useState(false);
  const [isModalHIPAAOpen, setIsHIPAAModalOpen] = useState(false);
  const [isContractorModalOpen, setIsContractorModalOpen] = useState(false);

  // Create refs for each signature
  const backgroundSigRef = useRef<ReactSignatureCanvas>(null);
  const hipaaSigRef = useRef<ReactSignatureCanvas>(null);
  const contractorSigRef = useRef<ReactSignatureCanvas>(null);

  return (
    <div className="p-8 bg-accent rounded-lg border-t-primary">
      {/* Background Check */}
      <h2 className="text-primary font-semibold mb-4 text-2xl">Background check</h2>
      <p className="text-grey-700 mb-4 text-sm">
        Some opportunities require updated background checks. Please authorize a personal background
        check below. If you do not authorize the background checks, the jobs from these clients will
        not be made available to you.
      </p>

      <label className="flex items-center mb-4">
        <Checkbox
          className="mr-2"
          checked={backgroundCheck}
          onCheckedChange={() => setBackgroundCheck(!backgroundCheck)}
        />
        <span className="text-grey-700">
          Yes, I authorize ProZ.com or its business members to run background checks
        </span>
      </label>

      <label className="block text-grey-700 font-medium mb-2">Draw your signature:</label>
      <div className="border rounded-md mb-2">
        <SignatureCanvas
          penColor="#4D9D9D"
          canvasProps={{ className: "w-full h-28" }}
          ref={
            backgroundSigRef as unknown as React.RefObject<
              React.Component<ReactSignatureCanvas.ReactSignatureCanvasProps, any, any>
            >
          }
        />
      </div>
      <Button
        variant="destructive"
        className="text-white text-sm mb-6"
        onClick={() => backgroundSigRef.current?.clear()}
      >
        ❌ Clear signature
      </Button>

      {/* Business Associate Agreement (HIPAA) */}
      <h3 className="text-grey-700 font-semibold mb-2 text-lg">
        Business Associate Agreement (HIPAA)
      </h3>
      <p className="text-grey-700 mb-4 text-sm">
        Signing this agreement is required in order to receive remote on-demand interpreting
        assignments through ProZ.com or its partners. Read and sign the agreement if you wish to
        receive these assignments. You may skip this step if you do not wish to receive these
        assignments.
      </p>

      <Button
        variant="outline"
        className="bg-primary/10 text-primary mb-3"
        onClick={() => setIsHIPAAModalOpen(true)}
      >
        See agreement terms and conditions
      </Button>

      {/* HIPAA Modal – Passing userInfo as prop */}
      <HIPAAAgreementModal
        isOpen={isModalHIPAAOpen}
        onClose={() => setIsHIPAAModalOpen(false)}
        userInfo={userInfo}
      />

      <label className="flex items-center mb-4">
        <Checkbox
          className="mr-2"
          checked={hipaaAgreement}
          onCheckedChange={() => setHipaaAgreement(!hipaaAgreement)}
        />
        <span className="text-grey-700">I accept these terms and conditions.</span>
      </label>

      <label className="block text-grey-700 font-medium mb-2">Draw your signature:</label>
      <div className="border rounded-md mb-2">
        <SignatureCanvas
          penColor="#4D9D9D"
          canvasProps={{ className: "w-full h-28" }}
          ref={
            hipaaSigRef as unknown as React.RefObject<
              React.Component<ReactSignatureCanvas.ReactSignatureCanvasProps, any, any>
            >
          }
        />
      </div>
      <Button
        variant="destructive"
        className="text-white text-sm mb-6"
        onClick={() => hipaaSigRef.current?.clear()}
      >
        ❌ Clear signature
      </Button>

      {/* Independent Contractor Agreement */}
      <h3 className="text-grey-700 font-semibold mb-2 text-lg">Independent Contractor Agreement</h3>
      <p className="text-grey-700 mb-4 text-sm">
        Signing this agreement is required in order to receive calls through ProZ.com or its
        partners. Read and sign the agreement if you wish to do so. You may skip this step if you do
        not wish to receive calls through ProZ.com or its partners.
      </p>

      <Button
        variant="outline"
        className="bg-primary/10 text-primary mb-3"
        onClick={() => setIsContractorModalOpen(true)}
      >
        See agreement terms and conditions
      </Button>

      {/* Independent Contractor Modal – Passing userInfo as prop */}
      <IndependentContractorAgreementModal
        isOpen={isContractorModalOpen}
        onClose={() => setIsContractorModalOpen(false)}
        userInfo={userInfo}
      />

      <label className="flex items-center mb-4">
        <Checkbox
          className="mr-2"
          checked={contractorAgreement}
          onCheckedChange={() => setContractorAgreement(!contractorAgreement)}
        />
        <span className="text-grey-700">I accept these terms and conditions.</span>
      </label>

      <label className="block text-grey-700 font-medium mb-2">Draw your signature:</label>
      <div className="border rounded-md mb-2">
        <SignatureCanvas
          penColor="black"
          canvasProps={{ className: "w-full h-28" }}
          ref={
            contractorSigRef as unknown as React.RefObject<
              React.Component<ReactSignatureCanvas.ReactSignatureCanvasProps, any, any>
            >
          }
        />
      </div>
      <Button
        variant="destructive"
        className="text-white text-sm mb-6"
        onClick={() => contractorSigRef.current?.clear()}
      >
        ❌ Clear signature
      </Button>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} className="bg-primary text-white">
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
