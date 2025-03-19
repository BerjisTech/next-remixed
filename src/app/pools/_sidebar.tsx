import React from "react";

interface SidebarProps {
  steps: { title: string }[];
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full md:w-1/4 bg-secondary rounded-lg shadow-lg p-6 md:mb-0 h-fit px-8 py-6 flex flex-col justify-start items-start gap-6 mt-32">
      <ul className="relative">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center mb-4 relative">
            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-4 top-10 w-[2px] h-full ${
                  currentStep > index ? "bg-primary" : "bg-grey-300"
                }`}
              ></div>
            )}

            {/* Step Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                currentStep === index
                  ? "border-primary bg-white text-primary"
                  : currentStep > index
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white"
              }`}
            >
              {currentStep > index ? (
                <span>✓</span>
              ) : (
                <span
                  className={`w-2.5 h-2.5 rounded-full ${currentStep === index ? "bg-primary" : "bg-grey-300"}`}
                ></span>
              )}
            </div>

            {/* Step Title */}
            <span
              className={`ml-4 text-lg ${
                currentStep === index ? "text-grey-700 font-semibold" : "text-grey-700"
              }`}
            >
              {step.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
