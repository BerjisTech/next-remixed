"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";

interface SelectPayerFormProps {
  formData: any;
  setFormData: any;
}

function debounce(callback: any, delay: number) {
  let timeoutId: any;

  return function (...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const SelectPayerForm: FC<SelectPayerFormProps> = ({ formData, setFormData }) => {
  const [payerSearchQuery, setPayerSearchQuery] = useState("");
  const [payerSearchResult, setPayerSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [payerErrorMessage, setPayerErrorMessage] = useState(
    "Please enter a valid email or search ProZ user"
  );
  const { entityId } = useAppSelector((state) => state.profile);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    // Delay hiding the list to allow item click to register
    setTimeout(() => setIsFocused(false), 200);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSearch = debounce(async (searchQuery: string) => {
    if (searchQuery != undefined && searchQuery != "") {
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/prozpay/get-user?searchQuery=${searchQuery}`
        );
        let data = await response.json();
        console.log(data);
        setPayerSearchResult(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users reports:", error);
        return null;
      } finally {
        setLoading(false);
      }
    }
    setPayerSearchQuery(searchQuery);
    console.log(searchQuery);
  }, 500);

  const handlePayerSelected = (payer: any) => {
    if (payer.entity_id == entityId) {
      setFormData({ ...formData, has_email_error: true });
      setPayerErrorMessage("You cannot send a payment request to yourself");
    } else {
      setFormData({
        ...formData,
        payer_eid: payer["entity_id"],
        payer_name: payer["site_name"],
        payer_photo: payer["photo_url"],
        payer_is_member: payer["is_member"],
        payer_membership_type: payer["membership_type"],
        has_email_error: false,
      });
      setPayerSearchResult([]);
      setPayerSearchQuery("");
    }
  };

  const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handlePayerEmailSelected();
    }
  };

  const handlePayerEmailSelected = () => {
    if (emailRegex.test(payerSearchQuery.trim())) {
      setFormData({ ...formData, payer_email: payerSearchQuery });
      setPayerSearchResult([]);
      setPayerSearchQuery("");
    } else {
      setFormData({ ...formData, has_email_error: true });
    }
  };

  const removeSelectedPayer = () => {
    setFormData({
      ...formData,
      payer_eid: 0,
      payer_photo: "",
      payer_is_member: false,
      payer_membership_type: "",
    });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="flex flex-col justify-start items-start w-full gap-1.5">
          {(formData.payer_eid > 0 || formData.payer_email !== "") && (
            <div className="flex flex-row justify-center items-center mb-4 gap-2 w-full relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-white">
                Send request to
              </p>
              <div
                className="flex justify-start items-center w-max overflow-hidden gap-2 rounded-xl px-1 bg-white"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <div className="flex justify-start items-center flex-grow relative gap-2">
                  <div className="pl-2 pr-8 py-2 justify-start items-center gap-2 flex">
                    {formData.payer_photo !== "" && (
                      <div className="rounded-full border border-secondary justify-center items-center flex">
                        <Image
                          className="rounded-full"
                          src={formData.payer_photo}
                          alt={`${formData.payer_name} profile photo`}
                          width={48} // 12 * 4 for width in pixels
                          height={48} // 12 * 4 for height in pixels
                        />
                      </div>
                    )}
                    <div className="flex-col justify-start items-start gap-px inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="text-primary font-medium pr-4 pl-1 leading-tight">
                          {formData.payer_eid > 0 ? formData.payer_name : formData.payer_email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="cursor-pointer w-max h-max py-2.5 px-3 rounded-full hover:bg-gray-100"
                    onClick={() => removeSelectedPayer()}
                  >
                    <Image
                      width={25}
                      height={25}
                      src="/next/next_assets/images/icons/trash.svg"
                      alt="Delete icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {formData.payer_eid <= 0 && formData.payer_email === "" && (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-full md:w-3/4 relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark">
                  Search ProZ users
                </p>
                <div
                  className="flex justify-start items-center w-full overflow-hidden gap-2 rounded-xl bg-white dark:bg-gray-700 cursor-not-allowed"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <div className="flex justify-between items-center flex-grow relative gap-2">
                    <input
                      type="text"
                      onKeyUp={handleEnterPressed}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => handleSearch(e.target.value)}
                      className={`flex-grow w-full px-3.5 py-2.5 border dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 focus:outline-none focus:ring-0 rounded-l-xl text-base text-left text-dark-blue-hue dark:text-gray-200 dark:bg-gray-700 ${formData.has_email_error ? "border-red-400" : "border-primary-50"}`}
                      placeholder="Enter email, name or account id ..."
                    />
                    <div className="pr-4 pl-2">
                      <Image
                        alt="Search icon"
                        width={25}
                        height={25}
                        src="/next/next_assets/images/icons/search-icon.svg"
                      />
                    </div>
                  </div>
                </div>
                {formData.has_email_error && <p className="text-red-400">{payerErrorMessage}</p>}
              </div>

              {isFocused && payerSearchQuery !== "" && payerSearchResult && (
                <ul className="z-10 w-3/4 bg-white dark:bg-gray-700 border border-primary-50 dark:border-gray-600 rounded-xl shadow-lg">
                  {payerSearchResult.length > 0 ? (
                    <>
                      {payerSearchResult.map((payer, index) => (
                        <li
                          key={index}
                          onClick={() => handlePayerSelected(payer)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-row items-center">
                            <Image
                              src={payer["photo_url"]}
                              alt="profile photo"
                              className="mr-2 overflow-hidden rounded-full"
                              width={48} // 12 * 4 for width in pixels
                              height={48} // 12 * 4 for height in pixels
                            />
                            <p className="dark:text-gray-200">{payer["site_name"]}</p>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li
                      onClick={() => handlePayerEmailSelected()}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-row items-center">
                        <p className="dark:text-gray-200">
                          No user found matching your search. Type their email and press "ENTER" or
                          click here to create email payer
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPayerForm;
