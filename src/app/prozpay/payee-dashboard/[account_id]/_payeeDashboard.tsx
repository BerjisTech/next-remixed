"use client";
import Link from "next/link";
import Image from "next/image";
import ProzPayLayout from "@/app/prozpay/_prozPayLayout";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";

interface PayeeDashboardProps {
  children: React.ReactNode;
}

const PayeeDashboard: FC<PayeeDashboardProps> = ({ children }) => {
  const { entityId } = useAppSelector((state) => state.profile);
  const urlBase = `/prozpay/payee-dashboard/${entityId}`;

  const [pageTitle, setPageTitle] = useState("");
  const [currentPage, setCurrentPage] = useState("overview");

  useEffect(() => {
    let pathName = window.location.pathname.split("/");

    let pathNamePart = pathName[pathName.length - 1].replace("-", " ");
    let cleanPathName = "Overview";
    if (pathName.length > 5) {
      setCurrentPage(pathName[pathName.length - 1]);
      cleanPathName = pathNamePart.charAt(0).toUpperCase() + pathNamePart.slice(1);
    }
    setPageTitle(cleanPathName);
  }, []);

  return (
    <ProzPayLayout subpage={"payee_account"}>
      <div className={`w-full flex flex-row items-center justify-center gap-3 relative my-4`}>
        <div className="w-full xl:w-[calc(100%-300px)]">
          <div className="mb-2.5">
            <span className="text-red-400">
              * This is a demo page. Info is loaded from your ProZ*Pay account but cannot be updated
              from this form
            </span>
          </div>
          <div className="w-full h-max flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="w-60 flex-col justify-start items-start gap-10 inline-flex">
                <div className="self-stretch h-max flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="h-max justify-center items-center flex">
                      <div className="w-52 text-primary text-lg font-semibold">ProZ*Pay</div>
                    </div>
                  </div>
                  <div className="self-stretch h-64 flex-col justify-start items-start gap-3 flex">
                    <Link
                      href={`${urlBase}/overview`}
                      className={`self-stretch h-11 pl-4 pr-2.5 py-2.5 ${currentPage.includes("overview") ? "bg-primary text-white font-semibold" : "bg-accent text-gray-700 hover:bg-primary-50"} rounded-xl justify-start items-center gap-2.5 inline-flex`}
                    >
                      <div className="grow shrink basis-0 text-sm">Overview</div>
                    </Link>
                    <Link
                      href={`${urlBase}/payments-received`}
                      className={`self-stretch pl-4 pr-2.5 py-2.5 ${currentPage.includes("payments-received") ? "bg-primary text-white font-semibold" : "bg-accent text-gray-700 hover:bg-primary-50"} rounded-xl justify-start items-center gap-2.5 inline-flex`}
                    >
                      <div className="grow shrink basis-0 text-sm font-normal">
                        Payments received
                      </div>
                    </Link>
                    <Link
                      href={`${urlBase}/payments-withdrawn`}
                      className={`self-stretch pl-4 pr-2.5 py-2.5 ${currentPage.includes("payments-withdrawn") ? "bg-primary text-white font-semibold" : "bg-accent text-gray-700 hover:bg-primary-50"} rounded-xl justify-start items-center gap-2.5 inline-flex`}
                    >
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-sm font-normal">
                          Payments withdrawn
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`${urlBase}/debits`}
                      className={`self-stretch pl-4 pr-2.5 py-2.5 ${currentPage.includes("debits") ? "bg-primary text-white font-semibold" : "bg-accent text-gray-700 hover:bg-primary-50"} rounded-xl justify-start items-center gap-2.5 inline-flex`}
                    >
                      <div className="grow shrink basis-0 text-sm font-normal">Debits</div>
                    </Link>
                    <Link
                      href={`${urlBase}/settings`}
                      className={`self-stretch pl-4 pr-2.5 py-2.5 ${currentPage.includes("settings") ? "bg-primary text-white font-semibold" : "bg-accent text-gray-700 hover:bg-primary-50"} rounded-xl justify-start items-center gap-2.5 inline-flex`}
                    >
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-sm font-normal">Settings</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="self-stretch h-max p-6 bg-primary-50 rounded-2xl shadow flex-col justify-center items-center gap-2 flex">
                  <div className="self-stretch h-max flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-max flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-primary text-xl font-bold">
                        Request payment from a client
                      </div>
                      <div className="self-stretch text-sm font-normal leading-tight">
                        Click below to request a payment from a client via ProZ*Pay.
                      </div>
                    </div>
                    <Link
                      href="/prozpay/getpaid"
                      className="h-9 px-3.5 py-2 bg-primary rounded-lg shadow border border-primary justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-white text-sm font-semibold">Request payment</div>
                      <div className="w-5 h-5 relative">
                        <Image
                          src="/next/next_assets/images/icons/coins-stacked-03.svg"
                          alt="arrow-right"
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-primary text-3xl font-bold">{pageTitle}</div>
                <div className="self-stretch h-max flex-col justify-start items-start gap-8 flex">
                  {children}

                  <div className="self-stretch p-6 bg-primary-50 rounded-2xl border border-primary justify-center items-center gap-8 inline-flex">
                    <div className="relative">
                      <Image
                        src="/next/next_assets/images/Layer_1.svg"
                        alt="arrow-right"
                        width={95}
                        height={63}
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                      <div className="self-stretch text-gray-700 text-xl font-semibold">
                        Pay less in fees by becoming a ProZ.com member
                      </div>
                      <div className="self-stretch text-primary text-base font-semibold leading-normal">
                        Choose the plan that best works for you.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-max flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-primary text-2xl font-bold">
                        Payout/withdrawal method
                      </div>
                    </div>
                    <div className="self-stretch h-max p-4 bg-accent rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                      <div className="self-stretch h-max flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch h-5 flex-col justify-start items-start gap-2 flex">
                          <div className="self-stretch text-gray-700 text-sm font-normal leading-tight">
                            Set your preferred withdrawal method
                          </div>
                        </div>
                        <Link
                          href={`${urlBase}/settings`}
                          className="h-6 justify-center items-center gap-2 inline-flex"
                        >
                          <div className="w-5 h-5 relative">
                            <Image
                              src="/next/next_assets/images/icons/edit-01.svg"
                              alt="arrow-right"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="text-primary text-base font-semibold leading-normal">
                            Change payout settings
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProzPayLayout>
  );
};
export default PayeeDashboard;
