import Image from "next/image";
import React from "react";

const FirstReviewForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="flex flex-col justify-start items-start w-full gap-1.5">
          <div className="flex flex-col justify-start items-start w-full relative gap-1.5">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div>
                  <span className="text-base font-normal leading-relaxed mx-1">
                    Your payment of
                  </span>
                  <span className="gap-1 text-base font-medium leading-normal"> </span>
                  <span className="mx-1 text-base font-bold leading-normal">
                    amount_to_pay selected_currency
                  </span>
                  <span className="mx-1 text-base font-medium leading-normal"> </span>
                  <span className="text-base font-normal leading-relaxed">to</span>
                </div>
                <div className="pl-1 pr-2 py-1 bg-[#fbfafa] rounded-[100px] justify-start items-center gap-2 flex">
                  <div className="rounded-full border border-secondary justify-center items-center flex">
                    <Image
                      className="rounded-full w-10 h-10"
                      src="https://via.placeholder.com/34x33"
                      alt="Placeholder"
                      width={34}
                      height={33}
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-px inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="text-primary text-sm font-medium leading-tight">
                        Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-base font-normal leading-relaxed">
                  has been successfully scheduled.
                </div>
              </div>
              <div>
                <span className="text-[#344054] text-base font-normal  leading-normal">
                  Now it's time to fund it. Please send a bank transfer of
                </span>
                <span className="gap-1 text-[#344054] text-base font-medium  leading-normal">
                  {" "}
                </span>
                <span className="text-primary text-base font-bold  leading-normal">$45.43</span>
                <span className="gap-1 text-[#344054] text-base font-medium  leading-normal">
                  {" "}
                </span>
                <span className="text-[#344054] text-base font-normal  leading-normal">
                  to the following bank account:
                </span>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#344054] text-base font-semibold  leading-normal">
                  The bank details for USD transfers are:
                </div>
                <div className="p-6 bg-[#f8fbfb] rounded-xl border-l-2 border-[#c8e1e1] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-[#344054] text-base font-normal  leading-normal">
                    Account Holder: ProZ.com
                    <br />
                    Bank: J.P. Morgan Chase
                    <br />
                    Currency: USD
                    <br />
                    Routing Number (ABA): 022300173
                    <br />
                    Swiftcode - CHASUS33
                    <br />
                    Account Number: 483500460665
                  </div>
                </div>
              </div>
              <div className="self-stretch text-[#344054] text-base font-normal  leading-normal">
                If you want to fund the payment using an alternative method, please open a support
                request for more information.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstReviewForm;
