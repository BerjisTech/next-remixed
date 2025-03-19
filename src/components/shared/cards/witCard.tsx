import Image from "next/image";
import React from "react";

const WitCard = ({ membersCount = 0 }: { membersCount: number }) => {
  return (
    <div className="rounded-xl shadow-lg bg-primary-500 w-auto flex flex-row items-center gap-4 h-[64px] p-3 min-w-[280px] max-w-[280px]">
      <div className="flex items-center justify-center border-2 border-primary-300 rounded-[42.8px] h-[40px] w-[40px]">
        <Image
          className="rounded-full"
          src="/next/next_assets/images/wit/wit-card-logo.svg"
          alt="probono-logo.png"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-white">Women in Translation</span>
        <span className="font-normal text-white">
          {membersCount > 999 ? membersCount / 1000 + "k" : membersCount}{" "}
          {membersCount === 1 ? "member" : "members"}
        </span>
      </div>
    </div>
  );
};

export default WitCard;
