import React, { FC } from "react";
import { useGetPaymentMethodFeesQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";

interface PaymentMethodFormProps {
  formData: any;
  setFormData: any;
}

const PaymentMethodForm: FC<PaymentMethodFormProps> = ({ formData, setFormData }) => {
  const { data: paymentMethodFees, isLoading, error } = useGetPaymentMethodFeesQuery();

  const setFundingMethod = (payment_method: string) => {
    setFormData({
      ...formData,
      payment_method: payment_method,
      payment_method_fees: paymentMethodFees[payment_method],
      action: `pay_via_${payment_method}`,
      payment_fee_pct: 0,
      total_fee_amount: 0,
      total_fee_amount_cents: 0,
      total_fee_basis_points: 0,
    });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <fieldset className="w-full ">
          <div className="flex flex-col sm:flex-row">
            {/* PayPal Option */}
            <label
              htmlFor="funding-method-paypal"
              className={`min-h-32 w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Paypal</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="funding-method-paypal"
                type="radio"
                value="paypal"
                checked={formData.payment_method === "paypal"}
                onChange={() => setFundingMethod("paypal")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${formData.payment_method === "paypal" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-primary-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>

            {/* Credit Card Option */}
            <label
              htmlFor="funding-method-credit-card"
              className={`min-h-32 w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Credit card</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(3.75% fee)</span>
              <input
                id="funding-method-credit-card"
                type="radio"
                value="credit_card"
                checked={formData.payment_method === "credit_card"}
                onChange={() => setFundingMethod("credit_card")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${formData.payment_method === "credit_card" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-primary-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>

            {/* Bank Transfer Option */}
            <label
              htmlFor="funding-method-bank-transfer"
              className={`min-h-32 w-full sm:w-1/3 mx-1 my-1 sm:my-0 relative flex flex-col justify-center items-center bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm cursor-pointer`}
            >
              <span className="text-gray-900 dark:text-gray-200 text-lg">Bank transfer</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">and other</span>
              <span className="text-gray-900 dark:text-gray-300 text-sm">(0% fee)</span>
              <input
                id="funding-method-bank-transfer"
                type="radio"
                value="bank_transfer"
                checked={formData.payment_method === "bank_transfer"}
                onChange={() => setFundingMethod("bank_transfer")}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-0 border-2 rounded-lg ${formData.payment_method === "bank_transfer" ? "bg-primary-alt bg-opacity-20 border-primary" : "hidden"}`}
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-primary-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
export default PaymentMethodForm;
