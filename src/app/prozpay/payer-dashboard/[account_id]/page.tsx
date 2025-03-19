import ProzPayLayout from "@/app/prozpay/_prozPayLayout";
import PayerDashboard from "@/app/prozpay/payer-dashboard/[account_id]/_payerDashboard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <ProzPayLayout subpage={"payer_account"}>
      <div className={`w-full flex flex-row items-center justify-center gap-3 relative my-4`}>
        <div className="w-full xl:w-[calc(100%-300px)]">
          <div className="mb-2.5">
            <span className="text-red-400">
              * This is a demo form. No money will be sent or deducted from you
            </span>
          </div>
          <div className="w-full h-max mb-8 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[415px] justify-start items-center gap-px inline-flex">
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-[#919197] text-xs font-normal">Lorem</div>
              </div>
              <div className="w-3 h-3 relative">
                <Image
                  src="/next/next_assets/images/icons/chevron-right.svg"
                  alt="chevron-right"
                  width={12} // Equivalent to 3 units width
                  height={12} // Equivalent to 3 units height
                />
              </div>

              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-primary text-xs font-medium">Ipsum</div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="w-60 h-max flex-col justify-start items-start gap-10 inline-flex">
                <div className="self-stretch h-[296px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="h-[23px] justify-center items-center flex">
                      <div className="w-52 text-primary text-lg font-semibold leading-7">
                        ProZ*Pay
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-64 flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-max pl-4 pr-2.5 py-2.5 bg-primary rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 text-white text-sm font-semibold">
                        Overview
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-[#fbfafa] rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-dark text-sm font-normal">
                          Payments received
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-[#fbfafa] rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-dark text-sm font-normal">
                          Payments withdrawn
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-[#fbfafa] rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-dark text-sm font-normal">
                          Debits
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch pl-4 pr-2.5 py-2.5 bg-[#fbfafa] rounded-xl justify-start items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0 h-max opacity-80 justify-start items-center gap-1 flex">
                        <div className="grow shrink basis-0 text-dark text-sm font-normal">
                          Settings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                  <Link
                    href="/prozpay/pay"
                    className="self-stretch h-10 px-4 py-2.5 bg-primary rounded-xl shadow border border-primary justify-center items-center gap-2 inline-flex"
                  >
                    <div className="text-white text-sm font-semibold leading-tight">
                      Schedule a payment
                    </div>
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/next/next_assets/images/icons/credit-card-upload.svg"
                        alt="Schedule a payment"
                        width={20}
                        height={20}
                      />
                    </div>
                  </Link>
                  <Link
                    href="/prozpay/bulk"
                    className="self-stretch h-10 px-4 py-2.5 bg-primary rounded-xl shadow border border-primary justify-center items-center gap-2 inline-flex"
                  >
                    <div className="text-white text-sm font-semibold leading-tight">
                      Schedule bulk payment
                    </div>
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/next/next_assets/images/icons/coins-stacked-03.svg"
                        alt="Schedule bulk payment"
                        width={20}
                        height={20}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-primary text-3xl font-bold">Overview</div>
                <div className="self-stretch h-max flex-col justify-start items-start gap-8 flex">
                  <PayerDashboard />

                  <div className="self-stretch p-6 bg-[#edf5f5] rounded-custom border border-[#29faa0] justify-center items-center gap-8 inline-flex">
                    <div className="relative">
                      <Image
                        src="/next/next_assets/images/Layer_1.svg"
                        alt="arrow-right"
                        width={95}
                        height={63}
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                      <div className="self-stretch text-[#344054] text-xl font-semibold">
                        Pay less in fees by becoming a ProZ.com member
                      </div>
                      <div className="self-stretch text-primary text-base font-semibold leading-normal">
                        Choose the plan that best works for you.
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
export default page;
