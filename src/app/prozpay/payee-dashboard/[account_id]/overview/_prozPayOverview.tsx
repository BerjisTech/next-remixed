"use client";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks";
import { useGetProzPayOverviewQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";
import { useEffect } from "react";
import { formatCurrency } from "@/constants/prozpay";

const ProzPayOverview = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: prozPayOverview,
    isLoading,
    error,
  } = useGetProzPayOverviewQuery(`${entityId}`, { skip: !entityId });

  useEffect(() => {
    console.log(prozPayOverview);
  }, [prozPayOverview]);

  return (
    <div className="h-max w-full flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 p-6 bg-[#d9ecff] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-gray-700 text-base font-medium">Total received</div>
            <div className="w-6 h-6 relative">
              <Image
                src="/next/next_assets/images/icons/arrow-right.svg"
                alt="arrow-right"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="self-stretch justify-start items-end gap-4 inline-flex">
            <div className="grow shrink basis-0 text-gray-700 text-3xl font-bold">
              {prozPayOverview ? <>{prozPayOverview.total_earnings}</> : "Loading..."}
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-6 bg-[#dcefdc] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-gray-700 text-base font-medium">Total withdrawn</div>
            <div className="w-6 h-6 relative">
              <Image
                src="/next/next_assets/images/icons/arrow-right.svg"
                alt="arrow-right"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="self-stretch justify-start items-end gap-4 inline-flex">
            <div className="grow shrink basis-0 text-gray-700 text-3xl font-bold">
              {prozPayOverview ? <>{prozPayOverview.total_earnings}</> : "Loading..."}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-32 p-6 bg-accent-dark rounded-2xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="text-gray-800 text-base font-medium">Amount available</div>
          <div className="w-6 h-6 relative">
            <Image
              src="/next/next_assets/images/icons/arrow-right.svg"
              alt="arrow-right"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 h-10 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-gray-700 text-3xl font-bold">
              {prozPayOverview && prozPayOverview.available_balance.length > 0 ? (
                <>
                  {formatCurrency(
                    prozPayOverview.available_balance[0].total,
                    prozPayOverview.available_balance[0].payout_currency
                  )}
                </>
              ) : (
                "Loading..."
              )}
            </div>
            <div className="cursor-pointer px-4 py-2.5 bg-primary rounded-xl shadow border border-primary justify-center items-center gap-2 flex">
              <div className="text-white text-sm font-semibold">Withdraw your money</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-max w-full p-6 bg-primary-50 rounded-2xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="text-gray-700 text-base font-medium">Pending payments</div>
          <div className="w-6 h-6 relative">
            <Image
              src="/next/next_assets/images/icons/arrow-right.svg"
              alt="arrow-right"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 h-10 justify-center items-center gap-2.5 flex">
            <div className="grow shrink basis-0 text-gray-700 text-3xl font-bold">
              {prozPayOverview ? <>{prozPayOverview.advanceable_balances}</> : "Loading..."}
            </div>
            <div className="cursor-pointer px-4 py-2.5 bg-primary rounded-xl shadow border border-primary justify-center items-center gap-2 flex">
              <div className="text-white text-sm font-semibold">Request an early withdrawal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProzPayOverview;
