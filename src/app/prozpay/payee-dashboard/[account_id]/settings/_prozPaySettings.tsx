"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { useGetProzPaySettingsQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";
import { ChangeEvent, useEffect, useState } from "react";
import PayoutMethodInput from "@/app/prozpay/payee-dashboard/[account_id]/settings/_payoutMethodInput";

const ProzPaySettings = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: accountSettings,
    isLoading,
    error,
  } = useGetProzPaySettingsQuery(`${entityId}`, { skip: !entityId });

  const [settingsToUpdate, setSettingsToUpdate] = useState({
    payout_method_code: "",
    payout_submethod: "",
    withdrawal_schedule: "",
    secure_notes: "",
    payout_address: "",
  });

  const handlePayoutMethodChange = (selectedMethodCode: string) => {
    setSettingsToUpdate({ ...settingsToUpdate, payout_method_code: selectedMethodCode });
  };

  const handleSecureNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSettingsToUpdate({ ...settingsToUpdate, secure_notes: e.target.value });
  };

  const handleWithdrawalScheduleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSettingsToUpdate({ ...settingsToUpdate, withdrawal_schedule: e.target.value });
  };

  useEffect(() => {
    if (accountSettings) {
      setSettingsToUpdate({
        ...settingsToUpdate,
        payout_method_code: accountSettings.payout_method.code,
        secure_notes: accountSettings.secure_notes_decrypted,
        withdrawal_schedule: accountSettings.account.withdrawal_schedule_preference,
      });
    }
  }, [accountSettings]);

  return (
    <div className="h-max w-full flex-row justify-start items-start gap-3 inline-flex">
      <div className="w-4/6 p-2 m-1">
        <div className="flex-col w-full">
          <div className="w-full my-2 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800">Withdrawal method</h2>
            <p className="mt-2 text-sm text-gray-600">
              How would you like to receive money sent to you through ProZ*Pay?
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Click on the drop-down menu to see more options
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Withdrawal Method</label>
              <select
                id="withdrawal-method"
                name="withdrawal_method"
                value={settingsToUpdate.payout_method_code}
                onChange={(ev) => handlePayoutMethodChange(ev.target.value)}
                className="p-4 border rounded-xl mt-1 block w-full border-primary-100 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              >
                <option value="paypal"> -- Select Withdrawal Method --</option>
                {accountSettings && (
                  <>
                    {Object.entries(accountSettings.payout_methods).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value as string}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="mt-4">
              {accountSettings && (
                <PayoutMethodInput
                  payoutMethod={accountSettings.payout_method}
                  bankTransferSubmethods={[]}
                  isAdmin={false}
                  defaultBankSubmethod={accountSettings.default_bank_submethod}
                  prSettings={accountSettings.pr_settings}
                  paymentrailsWidgetLink={accountSettings.paymentrails_widget_link}
                  selectedSettings={settingsToUpdate}
                  setSelectedSettings={setSettingsToUpdate}
                />
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Secure notes</label>
              <textarea
                value={accountSettings ? accountSettings.secure_notes_decrypted : ""}
                onChange={handleSecureNotesChange}
                className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
                rows={5}
              ></textarea>
            </div>
            <button
              type="button"
              className="mt-6 w-full px-4 py-2 text-white bg-primary hover:bg-primary-700 font-medium rounded-md focus:outline-none focus:ring focus:ring-primary-300"
            >
              Save withdrawal method
            </button>
          </div>

          <div className="w-full my-2 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800">Withdrawal schedule</h2>
            <p className="mt-2 text-sm text-gray-600">
              How often should your ProZ*Pay balance be sent to you, via the withdrawal method
              above.
            </p>
            <div className="mt-4">
              <label className="flex items-center mb-3">
                <input
                  type="radio"
                  name="withdrawal_schedule"
                  value="auto"
                  checked={
                    accountSettings
                      ? accountSettings.account.withdrawal_schedule_preference != "manual"
                      : false
                  }
                  onChange={handleWithdrawalScheduleChange}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="ml-2 text-gray-800">
                  Send withdrawal as soon as money is received (within one business day).
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="withdrawal_schedule"
                  value="manual"
                  checked={
                    accountSettings
                      ? accountSettings.account.withdrawal_schedule_preference == "manual"
                      : false
                  }
                  onChange={handleWithdrawalScheduleChange}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="ml-2 text-gray-800">
                  Hold funds in ProZ*Pay until manually requested.
                </span>
              </label>
            </div>
            <button
              type="button"
              className="mt-6 w-full px-4 py-2 text-white bg-primary hover:bg-primary-700 font-medium rounded-md focus:outline-none focus:ring focus:ring-primary-300"
            >
              Save withdrawal schedule
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/6 p-2 m-1">
        <div className="flex-col w-full">
          <div className="w-full space-y-6 max-w-md mx-auto">
            {/* PayPal Information Card */}
            <div className="w-full p-4 bg-primary-50 border border-gray-200 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-800">PayPal information</h2>
              <p className="mt-2 text-sm text-gray-600">
                We can send money via PayPal if your PayPal account is eligible to receive money.
                Check this list of countries in which PayPal accounts can receive money.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ProZ*Pay covers the fee for sending money, but an additional fee for currency
                conversion may occur on your side if your PayPal account is not in USD.
              </p>
            </div>

            {/* Need Help Card */}
            <div className="p-4 bg-primary-50 border-gray-200 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-800">Need help?</h2>
              <p className="mt-2 text-sm text-gray-600">
                See answers to{" "}
                <a href="#" className="text-primary hover:underline">
                  Frequently Asked Questions (FAQ)
                </a>
                .
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Need help?{" "}
                <a href="#" className="text-primary hover:underline">
                  Contact us
                </a>
                .
              </p>
            </div>

            {/* US Tax Information Card */}
            <div className="p-4 bg-primary-50 border border-gray-200 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-800">United States tax information</h2>
              <p className="mt-2 text-sm text-gray-600">
                US residents please{" "}
                <a href="#" className="text-primary hover:underline">
                  complete and share Form W-9
                </a>
                : Request for taxpayer identification number and certification.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Email to:{" "}
                <a href="mailto:compliance@proz.com" className="text-primary hover:underline">
                  compliance@proz.com
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                If you earn over $600, appropriate tax documents will be shared by January 31 each
                calendar year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProzPaySettings;
