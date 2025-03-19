import Image from "next/image";
import React from "react";

const PayrollSentForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-6">
      <div className="flex flex-col justify-start items-start w-full gap-6">
        <div className="w-full flex flex-row justify-center items-center">
          <Image
            src="/next/next_assets/images/svg/pay-success.png"
            alt="Payment successful icon"
            width={80} // Replace iconWidth with the actual width of the image
            height={80} // Replace iconHeight with the actual height of the image
          />
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-center text-2xl">Payment successfully set up!</div>
        </div>
      </div>
    </div>
  );
};
export default PayrollSentForm;
