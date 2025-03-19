"use client";
import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

const UpdateAccountType = ({ user }: { user: ProzUser }) => {
  const updateAccountType = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section
      id="account_type"
      className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
    >
      <div className="flex items-center justify-start gap-2 text-primary">
        <Image
          src="/next/next_assets/images/check.svg"
          alt="Account type"
          width={24} // Default size, adjust as needed
          height={24}
        />
        <span>Account type</span>
      </div>
      <form
        onSubmit={(event) => {
          updateAccountType(event);
        }}
        className="flex flex-col md:flex-row items-center justify-between gap-2"
      >
        <select className="w-full md:w-[190px] rounded-lg border-[1px] p-2 border-custom-gray outline-none focus:outline-none flex-grow">
          <option value="">Select an option</option>
          <optgroup label="Account type">
            <option value="1">Freelancer</option>
            <option value="2">Agency</option>
            <option value="3">LSP</option>
          </optgroup>
        </select>
        {/* <button className="text-accent-foreground w-full md:w-[190px] text-center dark:text-primary font-semibold bg-green-gradient dark:bg-green-gradient-dark h-[40px] rounded-xl"> Update</button> */}
      </form>
    </section>
  );
};

export default UpdateAccountType;
