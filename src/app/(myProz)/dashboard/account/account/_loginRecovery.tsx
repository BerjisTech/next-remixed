"use client";
import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

const LoginRecovery = ({ user }: { user: ProzUser }) => {
  const updateRecoveryQuestionForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const updatePrimaryEmailForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const forgotPasswordForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent) => {};

  return (
    <section
      id="login_and_recovery"
      className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
    >
      <div className="flex items-center justify-start gap-2 text-primary">
        <Image
          src="/next/next_assets/images/log-in.svg"
          alt="Login & recovery"
          width={30}
          height={30}
        />
        <span>Login & recovery</span>
      </div>
      <form
        onSubmit={(event) => {
          updatePrimaryEmailForm(event);
        }}
        id="login_and_recovery_email_and_phone"
        className="flex items-start justify-between"
      >
        <p className="flex text-[12px] md:text-[16px] gap-2 items-center justify-start  dark:text-primary">
          <span>Primary email:</span>
          <span>{user?.contact_email}</span>
        </p>
        <p className="dark:text-accent-foreground text-sm">
          This is your login email and the address where you will receive all notifications and
          messages.
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99997 19.0002H19M1 19.0002H2.67454C3.16372 19.0002 3.40832 19.0002 3.63849 18.945C3.84256 18.896 4.03765 18.8152 4.2166 18.7055C4.41843 18.5818 4.59138 18.4089 4.93729 18.063L17.5 5.50023C18.3285 4.6718 18.3285 3.32865 17.5 2.50023C16.6716 1.6718 15.3285 1.6718 14.5 2.50023L1.93726 15.063C1.59136 15.4089 1.4184 15.5818 1.29472 15.7837C1.18506 15.9626 1.10425 16.1577 1.05526 16.3618C1 16.5919 1 16.8365 1 17.3257V19.0002Z"
              stroke="#4D9D9D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <div
        id="login_and_recovery_change_password"
        className="flex flex-col gap-2"
        key={"login_and_recovery_change_password"}
      >
        <span className="font-semibold text-primary text-[12px] mb-4">Change password</span>
        <form
          onSubmit={(event) => {
            forgotPasswordForm(event);
          }}
          id="forgot_password_form"
          className="flex gap-3 flex-col md:flex-row items-end justify-end"
        >
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="old-password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Old password
            </label>
            <input
              type="password"
              id="old-password"
              autoComplete="old-password"
              className="p-2 border rounded w-full outline-none hover:outline-none"
            ></input>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="new-password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              New password
            </label>
            <input
              type="password"
              id="new-password"
              autoComplete="new-password"
              className="p-2 border rounded w-full outline-none hover:outline-none"
            ></input>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="confirm-password"
              onChange={(event) => {
                handleChange(event);
              }}
              name="confirm_password"
              defaultValue=""
              className="p-2 border rounded w-full outline-none hover:outline-none"
            ></input>
          </div>
          <div>
            {/* <button className="text-accent-foreground h-[40px] w-full md:w-[200px] text-center dark:text-primary font-semibold bg-green-gradient dark:bg-green-gradient-dark rounded-xl">Update</button> */}
          </div>
        </form>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <a href="#" className="dark:text-primary">
          Forgot password?
        </a>
        <button className="text-accent-foreground w-full md:w-[190px] text-center dark:text-primary font-semibold bg-green-gradient dark:bg-green-gradient-dark h-[40px] rounded-xl flex items-center justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M20 8.00024C20 8.00024 17.995 5.26846 16.3662 3.63849C14.7373 2.00851 12.4864 1.00024 10 1.00024C5.02944 1.00024 1 5.02968 1 10.0002C1 14.9708 5.02944 19.0002 10 19.0002C14.1031 19.0002 17.5649 16.2545 18.6482 12.5002M20 8.00024V2.00024M20 8.00024H14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Reset
        </button>
      </div>
      <div id="login_and_recovery_password_recovery" className="w-full">
        <span className="font-semibold text-primary text-[12px] mb-4">
          Password recovery question
        </span>
        <form
          className=""
          onSubmit={(event) => {
            updateRecoveryQuestionForm(event);
          }}
        >
          <div className="py-2 flex flex-col md:flex-row items-start justify-start md:items-center">
            <label
              htmlFor="question"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 w-[200px]"
            >
              Question:
            </label>
            <select
              id="question"
              className="text-gray-300 p-2 border rounded w-full outline-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a question
              </option>
              <option value="none">None (disable)</option>
            </select>
          </div>
          <div className="py-2 flex flex-col md:flex-row items-start md:items-center">
            <label
              htmlFor="answer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 w-[200px]"
            >
              Answer:
            </label>
            <input
              type="text"
              id="answer"
              onChange={(event) => {
                handleChange(event);
              }}
              className="p-2 border rounded w-full outline-none focus:outline-none"
              defaultValue=""
            ></input>
          </div>
          <div className="py-2 flex flex-col md:flex-row items-start md:justify-end">
            <button className="text-accent-foreground w-full md:w-[190px] text-center dark:text-primary font-semibold bg-green-gradient dark:bg-green-gradient-dark h-[40px] rounded-xl">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginRecovery;
