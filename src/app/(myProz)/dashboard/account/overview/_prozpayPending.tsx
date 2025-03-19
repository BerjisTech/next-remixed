import Image from "next/image";
import React from "react";

const ProzPayPending = () => {
  return (
    <div className="sm:w-full md:w-[48%] mb-5 rounded-xl p-5 bg-accent dark:bg-black min-h-[210px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/proz-pay.svg"
          alt="ProZ*Pay"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />

        <h3 className="text-primary dark:text-primary text-[20px]">ProZ*Pay</h3>
      </div>
      {false ? (
        <div className="flex flex-col flex-grow gap-7">
          <div className="flex-grow dark:text-primary">
            The payment service from ProZ that aims to make your payments easier: faster, your way,
            with lower fees.
          </div>
          <a
            href="https://proz.com/pay"
            target="_blank"
            className="text-white w-full mt-3 text-center dark:text-primary text-[14px] font-semibold bg-green-gradient dark:bg-green-gradient-dark p-3 rounded-xl"
          >
            Get started
          </a>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex w-[48%] flex-col bg-white dark:bg-primary p-3 rounded-lg gap-3">
            <span className="text-primary font-semibold md:text-[24px]">
              $ 0.00
              {/* {{ (prozpay_pendings && prozpay_pendings.pending_withdrawals ? prozpay_pendings.pending_withdrawals : 0) | moneyHandler:'readableMoney' }} */}
            </span>
            <span className="dark:text-primary">
              ready for <strong>withdrawal&nbsp;</strong>
            </span>
            <a
              href="/next/prozpay/account"
              className="bg-accent dark:bg-black text-primary flex items-center justify-center px-3 py-2 rounded-lg w-full font-semibold"
            >
              Withdraw<i className="material-symbols-outlined opacity-30">arrow_right_alt</i>
            </a>
          </div>
          <div className="flex w-[48%] flex-col bg-white dark:bg-primary p-3 rounded-lg gap-3">
            <span className="text-primary font-semibold md:text-[24px]">
              $ 0.00
              {/* {{ (prozpay_pendings && prozpay_pendings.pending_requests ? prozpay_pendings.pending_requests : 0) | moneyHandler:'readableMoney' }} */}
            </span>
            <span className="dark:text-primary">
              <strong>pending</strong> requests
            </span>
            <a
              href="/next/prozpay/pay"
              className="bg-accent dark:bg-black text-primary flex items-center justify-center px-3 py-2 rounded-lg w-full font-semibold"
            >
              Fund<i className="material-symbols-outlined opacity-30">arrow_right_alt</i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProzPayPending;
