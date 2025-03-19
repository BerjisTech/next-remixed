"use client";
import React, { FC } from "react";

interface EnterAmountFormProps {
  formData: any;
  setFormData: any;
}

const EnterAmountForm: FC<EnterAmountFormProps> = ({ formData, setFormData }) => {
  const handleAmountChange = (e: any) => {
    const amount = parseInt(e.target.value);
    setFormData({
      ...formData,
      payment_amount: amount,
      amount_to_be_charged_cents: amount * 100,
      payment_amount_cents: amount * 100,
      payment_fee_pct: 0,
      total_fee_amount: 0,
      total_fee_amount_cents: 0,
      total_fee_basis_points: 0,
    });
  };

  const setSelectedCurrency = (currency: string) => {
    setFormData({ ...formData, currency: currency.toUpperCase() });
  };

  const setPaymentNotes = (notes: string) => {
    setFormData({ ...formData, payment_reason: notes });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
    }
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-3/4 gap-6">
        {/* Amount Section */}
        <div className="flex flex-col justify-start items-start w-full gap-1.5">
          <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-gray-300">
              Amount
            </p>
            <div
              className="flex justify-start items-center w-full"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              <div className="flex justify-start items-center flex-grow relative w-full ">
                <input
                  type="number"
                  value={String(formData.payment_amount)}
                  onChange={handleAmountChange}
                  className={`w-3/4 sm:w-4/5 px-3.5 py-2.5 border ${
                    formData.has_amount_error ? "border-red-400" : "border-primary-50"
                  } dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 focus:outline-none focus:ring-0 rounded-l-xl text-base text-left text-dark-blue-hue dark:text-gray-200 dark:bg-gray-700`}
                  placeholder="Amount of the payment"
                />
                <select
                  value={formData.currency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-1/4 sm:w-1/5 rounded-r-xl bg-white dark:bg-gray-700 px-3.5 py-2.5 border border-primary-50 dark:border-gray-600 focus:outline-none text-dark-blue-hue dark:text-gray-200"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>
            {formData.has_amount_error && (
              <p className="text-red-400">Amount must be greater than zero</p>
            )}
          </div>
        </div>

        {/* Notes Section */}
        <div className="flex flex-col justify-start items-start w-full h-[70px] gap-1.5">
          <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-gray-300">
              Notes
            </p>
            <div
              className="flex justify-start items-center w-full overflow-hidden gap-2 rounded-xl bg-white dark:bg-gray-700"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
            >
              <div className="flex justify-start items-center flex-grow relative gap-2 w-full ">
                <input
                  type="text"
                  value={formData.payment_reason}
                  onChange={(e) => setPaymentNotes(e.target.value)}
                  className="flex-grow w-full px-3.5 py-2.5 border border-primary-50 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 focus:outline-none focus:ring-0 rounded-xl text-base text-left text-dark-blue-hue dark:text-gray-200 dark:bg-gray-700"
                  placeholder="Invoice number, project name, etc."
                />
              </div>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="flex flex-col justify-start items-start w-full relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-dark dark:text-gray-300">
            Attach PDF invoice (Optional)
          </p>
          <div className="flex justify-center items-center w-full relative gap-4 px-6 py-3 rounded-2xl bg-[#fbfafa] dark:bg-gray-700 border border-primary-50 dark:border-gray-600">
            <input type="file" onChange={handleFileChange} className="hidden" id="upload-file" />
            <label
              htmlFor="upload-file"
              className="cursor-pointer flex flex-col justify-start items-center flex-grow gap-1"
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  fill="#FBFAFA"
                  className="dark:fill-gray-600"
                />
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  stroke="#F4F4F3"
                  strokeWidth="6"
                  className="dark:stroke-gray-500"
                />
                <path
                  d="M19.6641 26.3333L22.9974 23M22.9974 23L26.3307 26.3333M22.9974 23V30.5M29.6641 26.9524C30.682 26.1117 31.3307 24.8399 31.3307 23.4167C31.3307 20.8854 29.2787 18.8333 26.7474 18.8333C26.5653 18.8333 26.3949 18.7383 26.3025 18.5814C25.2158 16.7374 23.2094 15.5 20.9141 15.5C17.4623 15.5 14.6641 18.2982 14.6641 21.75C14.6641 23.4718 15.3603 25.0309 16.4865 26.1613"
                  stroke="#3A9796"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-blue-400"
                />
              </svg>
              <p className="text-base font-bold text-left text-[#bababc] dark:text-gray-400">
                Click to upload
              </p>
              <p className="text-base text-left text-dark-blue-hue dark:text-gray-300">
                or drag and drop
              </p>
            </label>
          </div>

          {/* File Name Display */}
          {formData.has_invoice_attachment && (
            <div className="flex justify-between items-center w-full relative pl-6 pr-2.5 py-2 rounded-2xl bg-accent-light dark:bg-gray-600">
              <p className="text-base text-left text-black dark:text-gray-200">
                {formData.invoice_file_name}
              </p>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.75 2.75H11.25M2.25 5H15.75M14.25 5L13.724 12.8895C13.6451 14.0732 13.6057 14.665 13.35 15.1138C13.1249 15.5088 12.7854 15.8265 12.3762 16.0248C11.9115 16.25 11.3183 16.25 10.132 16.25H7.86799C6.68168 16.25 6.08852 16.25 5.62375 16.0248C5.21457 15.8265 4.87507 15.5088 4.64999 15.1138C4.39433 14.665 4.35488 14.0732 4.27596 12.8895L3.75 5M7.5 8.375V12.125M10.5 8.375V12.125"
                  stroke="#6C6C72"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dark:stroke-gray-400"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default EnterAmountForm;
