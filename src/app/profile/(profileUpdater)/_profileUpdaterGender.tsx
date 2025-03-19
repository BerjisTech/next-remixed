"use client";
import ProzCheckbox from "@/components/general/prozCheckbox";
import ProzSelect from "@/components/general/prozSelect";
import { updateGenderPronouns } from "@/lib/store/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useState } from "react";

const ProfileUpdaterGender = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.account);
  const { entityId, status: psStatus } = useAppSelector((state) => state.profile);
  const [selectedPronouns, setSelectedPronouns] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [customGender, setCustomGender] = useState<string>("");
  const [customPronoun, setCustomPronoun] = useState<string>("");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let gender = selectedGender.toLowerCase() == "custom" ? customGender : selectedGender;
    let pronouns = selectedPronouns.toLowerCase() == "custom" ? customPronoun : selectedPronouns;
    let isCustomGender = selectedGender.toLowerCase() == "custom" ? 1 : 0;
    let isCustomPronouns = selectedPronouns.toLowerCase() == "custom" ? 1 : 0;

    dispatch(
      updateGenderPronouns({
        entity_id: entityId,
        gender: gender,
        is_custom_gender: isCustomGender,
        pronouns: pronouns,
        is_custom_pronouns: isCustomPronouns,
      })
    );
  };

  const handleSelectedOptionChange = (
    selectedOptions: (string | { key: string; value: string })[],
    area: string
  ) => {
    if (selectedOptions.length === 0) {
      return; // No option selected, return early
    }
    // Assume only one option for non-multi-select cases
    const selectedOption = selectedOptions[0]; // Use first selected option
    if (typeof selectedOption === "string") {
      if (area === "gender") {
        setSelectedGender(selectedOption);
      } else if (area === "pronouns") {
        setSelectedPronouns(selectedOption);
      }
    } else if (typeof selectedOption === "object" && selectedOption.value) {
      if (area === "gender") {
        setSelectedGender(selectedOption.value);
      } else if (area === "pronouns") {
        setSelectedPronouns(selectedOption.value);
      }
    }
  };

  const handleCustomGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomGender(e.target.value); // Update the state when the input changes
  };

  return (
    <form
      key="gender"
      onSubmit={(event) => onSubmit(event)}
      className="flex flex-col justify-start items-start w-full relative gap-6"
    >
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <div className="flex flex-col justify-start items-start w-full relative gap-0.5">
            <div className="flex justify-start items-center w-full relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-dark-blue-hue dark:text-accent-foreground">
                Gender &#x26; pronouns
              </p>
            </div>
            <p className="w-full text-xs italic text-left text-dark-blue-hue dark:text-accent-foreground">
              Sharing this information is always optional.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[18px] p-4 rounded-custom bg-accent-light dark:bg-dark">
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark-blue-hue dark:text-accent-foreground">
                  Pronouns:
                </p>
                <ProzSelect
                  isMulti={true}
                  fullWidth={true}
                  onSelectedOptionsChange={(options) =>
                    handleSelectedOptionChange(options, "pronouns")
                  }
                  name="pronouns"
                  options={["She/Her", "He/Him", "They/Them", "Custom"]}
                />
              </div>
            </div>
            {selectedPronouns.toLowerCase() === "Custom" && (
              <div className="flex flex-col justify-start items-start w-full gap-1.5">
                <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark-blue-hue dark:text-accent-foreground">
                    Other
                  </p>
                  <div className="flex justify-start items-start w-full relative overflow-hidden gap-2 px-3.5 py-3 rounded-xl bg-white border border-accent">
                    <input
                      name="custom_gender"
                      onChange={handleCustomGenderChange}
                      type="text"
                      className="outline-none focus:outline-none self-stretch flex-grow w-[589px] h-5 text-sm text-left text-[#101828]"
                      placeholder="Enter custom gender"
                    />
                  </div>
                </div>
              </div>
            )}
            <ProzCheckbox
              label={"I choose not to enter this information"}
              name={"dont_enter_pronouns"}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-[18px] p-4 rounded-custom bg-accent-light dark:bg-dark">
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark-blue-hue dark:text-accent-foreground">
                  Gender:
                </p>
                <ProzSelect
                  isMulti={true}
                  fullWidth={true}
                  onSelectedOptionsChange={(options) =>
                    handleSelectedOptionChange(options, "gender")
                  }
                  name="gender"
                  options={["Female", "Male", "Custom"]}
                />
              </div>
            </div>
            {selectedGender.toLocaleLowerCase() == "custom" && (
              <div className="flex flex-col justify-start items-start w-full gap-1.5">
                <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark-blue-hue dark:text-accent-foreground">
                    Other
                  </p>
                  <div className="flex justify-start items-start w-full relative overflow-hidden gap-2 px-3.5 py-3 rounded-xl bg-white border border-accent">
                    <input
                      name="custom_pronoun"
                      className="outline-none focus:outline-none self-stretch flex-grow w-[589px] h-5 text-sm text-left text-[#101828]"
                      placeholder="Enter custom gender"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-start items-center w-full relative overflow-hidden gap-1 pl-4 pr-2 py-2 rounded-[9px] bg-accent dark:bg-dark">
              <p className="flex-grow w-[593px] text-xs text-left">
                <span className="flex-grow w-[593px] text-xs text-left text-black dark:text-white">
                  Clients might have gender-specific needs for voice-acting projects, as well as
                  medical and other sensitive interpreting tasks. If you offer voice acting, you can
                  also report the "voices" in your repertoire.{" "}
                </span>
                <span className="flex-grow w-[593px] text-xs font-semibold text-left text-primary">
                  Edit your services.
                </span>
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-1.5 h-[70px] absolute left-0 top-0 overflow-hidden bg-accent"></div>
            </div>
            <ProzCheckbox
              disabled={status === "loading"}
              label={"I choose not to enter this information"}
              name={"dont_enter_gender"}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-12 relative">
        <div className="flex justify-center items-center absolute left-[19px] top-2.5 overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-primary">
            More settings
          </p>
        </div>
        <button
          disabled={psStatus === "loading"}
          type="submit"
          className="flex justify-center items-center absolute left-[469px] top-0 overflow-hidden gap-2 px-5 py-3 rounded-xl bg-primary border border-primary"
          style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M12.5 6.66667H7.16667C6.69996 6.66667 6.4666 6.66667 6.28834 6.57584C6.13154 6.49594 6.00406 6.36846 5.92416 6.21166C5.83333 6.0334 5.83333 5.80004 5.83333 5.33333V2.5M14.1667 17.5V12.1667C14.1667 11.7 14.1667 11.4666 14.0758 11.2883C13.9959 11.1315 13.8685 11.0041 13.7117 10.9242C13.5334 10.8333 13.3 10.8333 12.8333 10.8333H7.16667C6.69996 10.8333 6.4666 10.8333 6.28834 10.9242C6.13154 11.0041 6.00406 11.1315 5.92416 11.2883C5.83333 11.4666 5.83333 11.7 5.83333 12.1667V17.5M17.5 7.77124V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H12.2288C12.6364 2.5 12.8402 2.5 13.0321 2.54605C13.2021 2.58688 13.3647 2.65422 13.5138 2.7456C13.682 2.84867 13.8261 2.9928 14.1144 3.28105L16.719 5.88562C17.0072 6.17387 17.1513 6.318 17.2544 6.48619C17.3458 6.63531 17.4131 6.79789 17.4539 6.96795C17.5 7.15976 17.5 7.36358 17.5 7.77124Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
            Save updates
          </p>
        </button>
      </div>
    </form>
  );
};

export default ProfileUpdaterGender;
