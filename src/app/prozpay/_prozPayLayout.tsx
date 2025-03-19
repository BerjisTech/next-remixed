"use client";
import React, { FC } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

interface ProzPayLayoutProps {
  children: React.ReactNode;
  subpage: string;
}

const ProzPayLayout: FC<ProzPayLayoutProps> = ({ children, subpage }) => {
  const currentSubPage = subpage;
  const showSwitch = subpage == "payroll" || subpage == "pay";
  const isPaymentForm = subpage == "payroll" || subpage == "pay" || subpage == "getpaid";
  const isDashboard = !isPaymentForm;
  const params = useParams();
  const account_id = params?.account_id;

  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-3 relative">
        <div className="w-full bg-primary-50 dark:bg-gray-800">
          <div className="flex flex-col justify-center pb-4 pt-8 items-center w-full bg-[url('/next/next_assets/images/27884383_white_linen_texture_1.png')] dark:bg-gray-800">
            <Image
              src="/next/next_assets/images/prozpay-logo.png"
              alt="ProZPay"
              className="flex-grow-0 flex-shrink-0 h-max object-none"
            />

            <div className="flex justify-center py-4 w-full ">
              {currentSubPage !== "getpaid" && (
                <Link className="text-primary dark:text-white" href="/prozpay/about/payer">
                  About ProZ*Pay
                </Link>
              )}
              {currentSubPage === "getpaid" && (
                <Link className="text-primary dark:text-white" href="/prozpay/about/payee">
                  About ProZ*Pay
                </Link>
              )}
              <span className="px-3">|</span>
              <Link
                className="text-primary dark:text-white hover:underline"
                href="/prozpay/payee-dashboard"
              >
                My ProZ*Pay dashboard
              </Link>
              <span className="px-3">|</span>
              <a className="cursor-not-allowed text-gray-400">FAQs</a>
            </div>

            {showSwitch && (
              <div className="flex justify-center items-center w-max md:w-1/2 flex-grow-0 flex-shrink-0 my-2 gap-16 p-2 rounded-xl bg-primary-50 border border-primary">
                <div className="flex justify-center items-center flex-grow gap-2">
                  <Link
                    href="/prozpay/pay"
                    className={`hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg ${
                      currentSubPage === "pay" ? "font-semibold bg-primary text-white" : "text-dark"
                    }`}
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-base text-left">Single payment</p>
                  </Link>

                  <Link
                    href="/prozpay/bulk"
                    className={`hover:bg-primary hover:text-white cursor-pointer flex flex-shrink-0 text-base text-left text-dark justify-center items-center flex-grow relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg ${
                      currentSubPage === "payroll"
                        ? "font-semibold bg-primary text-white"
                        : "text-dark"
                    }`}
                  >
                    Bulk payments
                    <span
                      className="bg-gray-300 px-1.5 rounded-2xl text-sm"
                      title="Import a file and schedule multiple payments at once."
                    >
                      ?
                    </span>
                  </Link>
                </div>
              </div>
            )}
            {isDashboard && (
              <div className="ml-80 mb-[-16px] h-[50px] w-[calc(100%-300px)] flex-col justify-start items-start inline-flex">
                <div className="justify-center items-start gap-2 inline-flex">
                  <div className="justify-around items-start gap-2 flex">
                    <Link
                      href={`/prozpay/payee-dashboard/${account_id}`}
                      passHref
                      className={`px-4 py-3 ${subpage == "payee_account" ? "bg-gradient-to-tr from-primary to-primary-100 font-semibold text-white" : "text-dark"} rounded-tl-lg rounded-tr-lg justify-center items-center gap-2 flex`}
                    >
                      <div className="text-base">Payee dashboard</div>
                    </Link>
                    <div
                      className={`px-4 py-3 ${subpage == "payer_account" ? "bg-gradient-to-tr from-primary to-secondary font-semibold text-white" : "text-dark"} rounded-tl-lg rounded-tr-lg justify-center items-center gap-2 flex`}
                    >
                      <div className="text-base">Payer dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* The content of the current currentSubPage would be here */}
        {children}
      </div>
    </div>
  );
};

export default ProzPayLayout;
