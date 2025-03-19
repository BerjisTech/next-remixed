"use client";
import React, { ChangeEvent, FC, useState } from "react";
import Link from "next/link";

interface PayoutMethodInputProps {
  payoutMethod: any;
  bankTransferSubmethods: any;
  isAdmin: boolean;
  defaultBankSubmethod: string;
  prSettings: any;
  paymentrailsWidgetLink: string;
  selectedSettings: any;
  setSelectedSettings: any;
}

const PayoutMethodInput: FC<PayoutMethodInputProps> = ({
  payoutMethod,
  bankTransferSubmethods,
  isAdmin,
  defaultBankSubmethod,
  prSettings,
  paymentrailsWidgetLink,
  selectedSettings,
  setSelectedSettings,
}) => {
  const [submethod, setSubmethod] = useState(payoutMethod.submethod || defaultBankSubmethod);

  const handleSubmethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubmethod(e.target.value);
  };

  const handlePayoutAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedSettings({ ...selectedSettings, payout_address: e.target.value });
  };

  const prComplete =
    prSettings?.pr_account_type === "bank-transfer" && prSettings?.pr_account_details;

  return (
    <div>
      {selectedSettings.payout_method_code === "paypal" && (
        /* PayPal settings */
        <div className="payout-method-settings method-paypal">
          {payoutMethod.code === "paypal" && <h4>Payout via PayPal</h4>}
          <div className="form-group">
            <label>PayPal email</label>
            <input
              type="text"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="paypal_email"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "paypal" ? payoutMethod.details : ""}
            />
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "wise" && (
        /* Wise settings */
        <div className="payout-method-settings method-wise">
          {payoutMethod.code === "wise" && <h4>Payout via Wise</h4>}
          <div className="form-group">
            <label>Wise email</label>
            <input
              type="text"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="wise_email"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "wise" ? payoutMethod.details : ""}
            />
            <Link
              href="https://wise.com"
              target="_blank"
              className="text-primary hover:underline"
              rel="noopener noreferrer"
            >
              Sign up for Wise.com
            </Link>
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "venmo" && (
        /* Venmo settings */
        <div className="payout-method-settings method-venmo">
          {payoutMethod.code === "venmo" && <h4>Payout via Venmo</h4>}
          <div className="form-group">
            <label>Venmo Phone number (Format - 3155551212)</label>
            <input
              type="number"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="venmo_phone_number"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "venmo" ? payoutMethod.details : ""}
            />
            <div className="help-block">
              This mobile phone number will be shared with Venmo.
              <Link
                href="https://venmo.com/legal/us-privacy-policy/"
                target="_blank"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
              >
                See their privacy policy
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "payoneer" && (
        /* Payoneer settings */
        <div className="payout-method-settings method-payoneer">
          {payoutMethod.code === "payoneer" && <h4>Payout via Payoneer</h4>}
          <div className="form-group">
            <label>Payoneer email</label>
            <input
              type="text"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="payoneer_email"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "payoneer" ? payoutMethod.details : ""}
            />
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "skrill" && (
        /* Skrill settings */
        <div className="payout-method-settings method-skrill">
          {payoutMethod.code === "skrill" && <h4>Payout via Skrill</h4>}
          <div className="form-group">
            <label>Skrill email</label>
            <input
              type="text"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="skrill_email"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "skrill" ? payoutMethod.details : ""}
            />
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "bitpay" && (
        /* BitPay settings */
        <div className="payout-method-settings method-bitpay">
          {payoutMethod.code === "bitpay" && <h4>Payout via Cryptocurrency (BitPay)</h4>}
          <div className="form-group">
            <label>BitPay email</label>
            <input
              type="text"
              className={`w-full px-3.5 py-2.5 border border-primary-100 focus:border-primary focus:outline-none focus:ring-0 rounded-lg text-base text-left text-dark-blue-hue`}
              name="bitpay_email"
              onChange={handlePayoutAddressChange}
              defaultValue={payoutMethod.code === "bitpay" ? payoutMethod.details : ""}
            />
            <div className="help-block">
              This email address will be <strong>shared with BitPay</strong>. See their
              <Link
                href="https://bitpay.com/privacy"
                target="_blank"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
              >
                privacy policy.
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "remitly" && (
        /* WorldRemit and Remitly settings */
        <div className="payout-method-settings method-worldremit method-remitly">
          {payoutMethod.code === "remitly" && <h4>Please indicate partner and details below</h4>}
          <p>
            <u>Cash pickup?</u> Indicate the partner Banco, Banrural, Equity Bank, Credit Populaire,
            etc.
          </p>
          <p className="mb1">
            <u>Mobile money?</u> Indicate the partner Airtel, Tigo, EzyPesa, Vodacom, MTN, Express,
            etc.
          </p>
        </div>
      )}

      {selectedSettings.payout_method_code === "other" && (
        /* Other settings */
        <div className="payout-method-settings method-other">
          {payoutMethod.code === "other" && <h4 className="mb0">Other payout method</h4>}
          <p className="mb1">Please enter details in the "secure notes" field below.</p>
          <div className="alert alert-warning">
            Please note that{" "}
            <strong>Western Union and MoneyGram are not currently supported</strong> as a payout
            method.
          </div>
        </div>
      )}

      {selectedSettings.payout_method_code === "bank-transfer" && (
        /* Bank transfer settings */
        <div className="payout-method-settings method-bank-transfer">
          {payoutMethod.code === "bank-transfer" && <h4>Payout via bank transfer</h4>}

          {isAdmin ? (
            <div className="well pb1 mb0">
              <div
                className="small text-muted"
                style={{ margin: "-20px -20px 3px -20px", background: "#ccc", paddingLeft: "20px" }}
              >
                Admin-only:
              </div>
              Bank transfer type:
              <select
                id="select-submethod"
                name="payout_submethod"
                className="p-4 border rounded-xl mt-1 block w-full border-primary-100 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                style={{ display: "inline-block", width: "auto" }}
                value={submethod}
                onChange={handleSubmethodChange}
              >
                {Object.entries(bankTransferSubmethods).map(([val, label]) => (
                  <option key={val} value={val}>
                    {label as string}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <input type="hidden" name="payout_submethod" value={submethod} />
          )}

          {submethod === "paymentrails" || isAdmin ? (
            <div
              className={`submethod submethod-paymentrails pb1 ${submethod !== "paymentrails" ? "hidden" : ""}`}
            >
              <p className="text-muted">
                Your bank transfers will be sent via the payment service{" "}
                <strong>
                  <Link
                    href="https://trolley.com"
                    target="_blank"
                    className="text-primary hover:underline"
                    rel="noopener noreferrer"
                  >
                    Trolley
                  </Link>
                </strong>
                .
              </p>

              {!prComplete && (
                <div className="alert alert-warning mb0">
                  <i className="fa fa-warning"></i> Please enter your banking information in your
                  local currency at Trolley below.
                </div>
              )}

              <div className="mb1">
                Bank transfer to:{" "}
                <strong>{prComplete ? ` ${prSettings.pr_account_details}` : <i>Unknown</i>}</strong>
                <br />
                <button className="btn btn-link btn-refresh-pr" type="button">
                  <i className="fa fa-refresh"></i> Refresh status
                </button>
              </div>

              {paymentrailsWidgetLink && (
                <div className="text-center mb3">
                  <button className="text-primary btn btn-lg btn-success js-open-paymentrails">
                    <i className="fa fa-edit"></i> Enter banking information at Trolley
                  </button>
                </div>
              )}
            </div>
          ) : null}

          {submethod === "transferwise" || isAdmin ? (
            <div
              className={`submethod submethod-transferwise pb1 ${submethod !== "transferwise" ? "hidden" : ""}`}
            >
              <p className="text-muted">
                Your bank transfers will be sent via the payment service{" "}
                <strong>
                  <a href="https://wise.com" target="_blank" rel="noopener noreferrer">
                    Wise
                  </a>
                </strong>
                .
              </p>
              <p>Please enter your bank transfer information in the "secure notes" field below.</p>
            </div>
          ) : null}

          {submethod !== "transferwise" && submethod !== "paymentrails" && (
            <div className={`submethod submethod-default pb1`}>
              <p className="pt1">
                Please enter your bank transfer information in the "secure notes" field below.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PayoutMethodInput;
