import React, { useState } from "react";
import FileUpload from "./file-upload";
import { useRouter } from "next/navigation";

const commonLanguages = {
  spa: "Spanish",
  eng: "English",
  fra: "French",
  chi: "Chinese",
  por: "Portuguese",
  jpn: "Japanese",
};

const translationSpecialties = [
  "Medical",
  "Legal",
  "Technical",
  "Financial",
  "Literary",
  "Audiovisual",
  "Marketing",
  "Scientific",
  "Software localization",
  "Tourism",
  "other",
];

const TranslationService: React.FC = () => {
  const router = useRouter();
  const [filesStep, setFilesStep] = useState<boolean>(false);
  const [confirmStep, setConfirmStep] = useState<boolean>(false);

  const updateLanguages = (e: React.ChangeEvent<HTMLSelectElement>, type: "source" | "target") => {
    // Logic to update languages based on the type
  };

  const handleNext = () => {
    if (!filesStep) {
      setFilesStep(true);
    } else if (!confirmStep) {
      setConfirmStep(true);
    }
  };

  const handleBack = () => {
    if (confirmStep) {
      setConfirmStep(false);
    } else if (filesStep) {
      setFilesStep(false);
    } else {
      router.push("/job-posting");
    }
  };

  return (
    <div className="flex-col justify-start items-center gap-6 inline-flex w-full">
      {!filesStep && !confirmStep && (
        <>
          <div className="justify-center items-center gap-2.5 inline-flex w-full pt-3">
            <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white">
              Select languages:
            </div>
          </div>

          <div className="self-stretch px-8 lg:px-[100px] flex-col justify-start items-start gap-6 flex">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-dark-blue-hue" />
              <span className="text-dark text-sm font-medium dark:text-white">
                Use language pair
              </span>
            </div>

            <div className="self-stretch justify-center items-center gap-6 flex flex-col lg:flex-row">
              <div className="flex flex-col w-full gap-2">
                <div className="text-dark text-sm font-medium dark:text-white">Source language</div>
                <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent">
                  <select
                    onChange={(e) => updateLanguages(e, "source")}
                    className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base focus:outline-none"
                  >
                    {Object.entries(commonLanguages).map(([key, value]) => (
                      <option key={key} value={key} selected={key === "eng"}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="text-dark text-sm font-medium dark:text-white">Target language</div>
                <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent">
                  <select
                    onChange={(e) => updateLanguages(e, "target")}
                    className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base focus:outline-none"
                  >
                    {Object.entries(commonLanguages).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch px-8 lg:px-[100px] flex-col justify-start items-start gap-6 flex">
            <div className="justify-center items-center gap-2.5 inline-flex w-full pt-3">
              <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white">
                Subject matter
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="text-dark text-sm font-medium dark:text-white">Specialty fields</div>
              <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent">
                <select className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base focus:outline-none">
                  {translationSpecialties.map((specialty, index) => (
                    <option key={index} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {filesStep && !confirmStep && (
        <>
          <FileUpload />
        </>
      )}

      {confirmStep && (
        <>
          <div className="results-section px-[100px] w-full">
            <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white pt-3 mb-4">
              Confirm
            </div>

            <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 w-full flex flex-col px-20 lg:flex-row lg:inline-flex lg:px-0 mb-4">
              <div
                onClick={() => console.log("Find translators on the directory clicked")}
                className="dark:bg-black hover:border-[#12b669] hover:bg-[#fbfafa] grow shrink basis-0 self-stretch cursor-pointer rounded-custom border-2 flex-col p-8 justify-center items-center gap-4 inline-flex transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                  <div className="flex flex-col items-center justify-center w-full">
                    <span className="self-stretch text-center text-black text-2xl font-medium leading-loose dark:text-white">
                      Find translators on the directory
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => console.log("Create project clicked")}
                className="dark:bg-black hover:border-[#12b669] hover:bg-[#fbfafa] grow shrink basis-0 self-stretch cursor-pointer rounded-custom border-2 flex-col p-8 justify-center items-center gap-4 inline-flex transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                  <div className="self-stretch text-center text-black text-2xl font-medium leading-loose dark:text-white">
                    Create project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="self-stretch px-[100px] justify-between items-start gap-6 flex mb-4">
        <div className="h-6 cursor-pointer flex items-center gap-2" onClick={handleBack}>
          <div className="text-[#475466] text-base font-semibold dark:text-white">&lt; Back</div>
        </div>
        {!confirmStep && (
          <div
            className="px-5 py-3 bg-primary rounded-xl shadow border border-secondary flex items-center gap-2 cursor-pointer"
            onClick={handleNext}
          >
            <div className="text-white text-base font-semibold">Next &gt;</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranslationService;
