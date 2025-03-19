import Image from "next/image";
import React from "react";

const Wallet = () => {
  return (
    <section className=" p-4 border-[1px] border-solid border-secondary rounded-xl mt-5 bg-accent dark:bg-black">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image
            src="/next/next_assets/images/wallet.svg"
            alt="proz pay wallet"
            width={30}
            height={30}
            className="w-[30px] object-cover"
          />

          <span className="text-primary font-poppins text-2xl font-semibold leading-8 text-left">
            Transaction history
          </span>
        </div>
        <span className="text-primary font-semibold flex items-center justify-end">
          View more<i className="material-symbols-outlined">arrow_right_alt</i>
        </span>
      </div>

      <div className="flex w-full flex-col md:flex-row mt-5 gap-3">
        <div className="bg-green-gradient dark:bg-green-gradient-dark w-full md:w-[252px] h-[182px] gap-8 rounded-[12px] flex flex-col text-accent-foreground dark:text-primary items-start justify-start p-3">
          <p className="font-poppins text-sm font-semibold text-primary-foreground"> Balance </p>
          {/* <p className="font-poppins text-2xl font-normal" *ngIf="overviewTransactionData"> {{
                                overviewTransactionData.total_earning.currency == "usd"
                                ? "$" : "" }}{{ overviewTransactionData.total_earning.earnings }} </p>
                            <p className="font-poppins text-2xl font-normal" *ngIf="!overviewTransactionData"> $0.00 </p> */}
          <a
            href="#"
            target="_blank"
            className="text-primary font-semibold bg-white w-full p-3 rounded-xl dark:bg-primary text-center dark:text-accent-foreground"
          >
            View wallet
          </a>
        </div>
        <div className="flex-grow">
          <div className="w-full flex items-center justify-between" role="button">
            <span className="text-primary font-semibold ">Recent transactions</span>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start justify-start gap-2 mt-2">
            <div className="flex flex-col items-start justify-start bg-white dark:bg-primary dark:text-accent-foreground shadow-custom rounded-md p-3 w-full md:w-[200px] h-[150px] gap-2">
              <span>11 Jul 2023</span>
              <span>Wallet credit</span>
              <span className="text-primary dark:text-black font-semibold">+$456.78</span>
              <span className="w-full text-end" role="button">
                Details
              </span>
            </div>
            <div className="w-[300px] md:w-full overflow-y-auto md:overflow-y-hidden tiny_scrollbar flex items-start justify-start gap-2 mt-2">
              <div className="flex flex-col items-start justify-start p-3 w-[200px] h-[150px] gap-2 dark:text-white">
                <span>11 Jul 2023</span>
                <span>Advanced membership</span>
                <span className="text-primary">-$456.78</span>
              </div>
              <div className="flex flex-col items-start justify-start p-3 w-[200px] h-[150px] gap-2 dark:text-white">
                <span>11 Jul 2023</span>
                <span>Advanced membership</span>
                <span className="text-primary">-$456.78</span>
              </div>
              <div className="flex flex-col items-start justify-start p-3 w-[200px] h-[150px] gap-2 dark:text-white">
                <span>11 Jul 2023</span>
                <span>Advanced membership</span>
                <span className="text-primary">-$456.78</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
