import Image from "next/image";

const PayerDashboard = () => {
  return (
    <div className="h-max w-full flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 p-6 bg-[#d9ecff] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#344054] text-base font-medium">Total payments sent</div>
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
            <div className="grow shrink basis-0 text-[#1d2939] text-3xl font-bold">563</div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-6 bg-[#dcefdc] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#344054] text-base font-medium">Total amounts sent</div>
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
            <div className="grow shrink basis-0 text-[#1d2939] text-3xl font-bold">$4,567.76</div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-6 bg-[#fff1c9] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#344054] text-base font-medium"># of unique recipients</div>
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
            <div className="grow shrink basis-0 text-[#1d2939] text-3xl font-bold">32</div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 p-6 bg-[#efede3] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#344054] text-base font-medium">Unfunded payments</div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 text-[#1d2939] text-3xl font-bold">6</div>
              <div className="px-4 py-2.5 bg-[#4d9d9d] rounded-xl shadow border border-[#4d9d9d] justify-center items-center gap-2 flex">
                <div className="text-white text-sm font-semibold">Fund now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[126px] p-6 bg-[#edf5f5] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#344054] text-base font-medium">Pending payments requests</div>
          </div>
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 text-[#1d2939] text-3xl font-bold">16</div>
              <div className="px-4 py-2.5 bg-[#4d9d9d] rounded-xl shadow border border-[#4d9d9d] justify-center items-center gap-2 flex">
                <div className="text-white text-sm font-semibold">Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PayerDashboard;
