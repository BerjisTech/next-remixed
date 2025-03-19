"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";

interface SelectPayeeFormProps {
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

const SelectPayeeForm: FC<SelectPayeeFormProps> = ({ formData, setFormData }) => {
  const [payeeSearchResults, setPayeeSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { entityId } = useAppSelector((state) => state.profile);
  const [payeeErrorMessage, setPayeeErrorMessage] = useState("No payee has been selected");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    // Delay hiding the list to allow item click to register
    setTimeout(() => setIsFocused(false), 200);
  };

  const handleSearchInputChange = (event: any) => {
    setFormData({ ...formData, payee_email: event.target.value });
    handleSearch(event.target.value);
  };

  const handleSearch = debounce(async (searchQuery: string) => {
    if (searchQuery != undefined && searchQuery != "") {
      try {
        setLoading(true);
        let fullUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/prozpay/get-user?searchQuery=${searchQuery}`;

        const response = await fetch(fullUrl);
        let data = await response.json();
        console.log(data);
        setPayeeSearchResults(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users reports:", error);
        return null;
      } finally {
        setLoading(false);
      }
    }
  }, 500);

  const handlePayeeSelected = (payee: any) => {
    if (payee.entity_id == entityId) {
      setFormData({ ...formData, has_payee_error: true });
      setPayeeErrorMessage("You cannot send a payment to yourself");
    } else {
      setFormData({
        ...formData,
        payee_eid: payee.entity_id,
        payee_name: payee.site_name,
        payee_photo: payee.photo_url,
        payee_is_member: payee.is_member,
        payee_membership_type: payee.membership_type,
        description: "Payment for " + payee.site_name,
        has_payee_error: false,
      });
    }
  };

  const removeSelectedPayee = () => {
    setFormData({
      ...formData,
      payee_eid: 0,
      payee_photo: "",
      payee_is_member: false,
      payee_membership_type: "",
    });
  };

  return (
    <div className="flex flex-col justify-start items-centergap-6 w-full ">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="flex flex-col justify-start items-start w-full gap-1.5">
          {formData.payee_eid == 0 && (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-full md:w-4/5 relative gap-1.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-gray-300">
                  Select payee
                </p>
                <div
                  className="flex justify-start items-center w-full overflow-hidden gap-2 rounded-xl bg-white dark:bg-gray-700"
                  style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                >
                  <div className="flex justify-between items-center flex-grow relative gap-2 w-full ">
                    <input
                      type="text"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={handleSearchInputChange}
                      className={`flex-grow w-full px-3.5 py-2.5 border ${
                        formData.has_payee_error ? "border-red-400" : "border-primary-50"
                      } dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 focus:outline-none focus:ring-0 rounded-xl text-base text-left text-dark-blue-hue dark:text-gray-200 dark:bg-gray-700`}
                      placeholder="Search by full name, email or ID"
                    />
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
                {isFocused && payeeSearchResults && payeeSearchResults.length > 0 && (
                  <ul className="z-10 w-full bg-white dark:bg-gray-700 border border-primary-50 dark:border-gray-600 rounded-xl shadow-lg">
                    {payeeSearchResults.map((payee, index) => (
                      <li
                        key={index}
                        onClick={() => handlePayeeSelected(payee)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-row items-center">
                          <Image
                            src={payee["photo_url"]}
                            alt="profile photo"
                            className="w-12 h-12 object-contain mr-2 overflow-hidden rounded-full"
                            width={48} // Equivalent to 12 units width
                            height={48} // Equivalent to 12 units height
                          />

                          <p className="dark:text-gray-200">{payee["site_name"]}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {formData.has_payee_error && <p className="text-red-400">{payeeErrorMessage}</p>}
              </div>
            </div>
          )}

          {formData.payee_eid > 0 && (
            <div className="flex flex-row justify-center items-center mb-4 gap-2 w-full relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-white">
                Send payment to
              </p>
              <div
                className="flex justify-start items-center w-max overflow-hidden gap-2 rounded-xl px-1 bg-white"
                style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
              >
                <div className="flex justify-start items-center flex-grow relative gap-2">
                  <div className="pl-2 pr-8 py-2 justify-start items-center gap-2 flex">
                    <div className="rounded-full border border-secondary justify-center items-center flex">
                      <Image
                        className="rounded-full w-12 h-12"
                        src={formData.payee_photo}
                        alt={`${formData.payee_name} profile photo`}
                        width={48} // Equivalent to 12 units width
                        height={48} // Equivalent to 12 units height
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-px inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="text-primary font-medium pr-4 pl-1 leading-tight">
                          {formData.payee_name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div
                    className="cursor-pointer w-max h-max py-2.5 px-3 rounded-full hover:bg-gray-100"
                    onClick={() => removeSelectedPayee()}
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
        </div>
      </div>
    </div>
  );
};
export default SelectPayeeForm;
