import React, { useState } from "react";
import { Button } from "@/components/shadcn/button";
import { Checkbox } from "@/components/shadcn/checkbox";

const StepFive = ({
  submitApplication,
  prevStep,
}: {
  submitApplication: () => void;
  prevStep: () => void;
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="p-8 bg-accent rounded-lg border-t-primary">
      {/* Terms and Conditions */}
      <h2 className="text-primary font-semibold mb-4 text-2xl">Terms and conditions</h2>
      <p className="text-grey-700 mb-4">
        To participate in this pool, you must accept these terms and conditions. In particular,
        please note:
      </p>

      <ul className="list-disc list-inside text-grey-700 mb-4">
        <li>
          You must agree to show your real name in the pool.{" "}
          <a href="#" className="text-primary underline">
            Learn more.
          </a>
        </li>
        <li>
          You will be subject to both positive and negative feedback entered by your clients.{" "}
          <a href="#" className="text-primary underline">
            Learn more.
          </a>
        </li>
        <li>Ongoing screening will be conducted for continued inclusion in the pool.</li>
      </ul>

      <p className="text-grey-700 mb-4">
        Please review the complete{" "}
        <a href="#" className="text-primary underline">
          terms and conditions
        </a>
        .
      </p>

      <label className="flex items-center mb-6">
        <Checkbox
          className="mr-2"
          checked={termsAccepted}
          onCheckedChange={() => setTermsAccepted(!termsAccepted)}
        />
        <span className="text-grey-700 font-medium">I accept these terms and conditions.</span>
      </label>

      {/* Next Steps Section */}
      <h3 className="text-grey-700 font-semibold mb-2 text-lg">Next steps</h3>
      <p className="text-grey-700 mb-6 text-sm">
        Once you submit your application, ProZ.com staff will review it as soon as possible and may
        contact you with additional questions. You will be notified once the application has been
        processed. Until then, you can return here to edit your application as needed.
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button onClick={prevStep} variant="outline">
          ⬅ Back
        </Button>
        <Button
          onClick={submitApplication}
          disabled={!termsAccepted}
          className={`px-6 py-2 rounded-md ${termsAccepted ? "bg-primary text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          Submit application
        </Button>
      </div>
    </div>
  );
};

export default StepFive;
