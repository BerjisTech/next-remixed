import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

const ActiveSessions = ({ user }: { user: ProzUser }) => {
  return (
    <section
      id="login_and_recovery_active_login_sessions"
      className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
    >
      {/* <div id="login_and_recovery_active_login_sessions" className="bg-gray-50 p-4 rounded-lg dark:bg-dark"> */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-2">
        <div className="flex items-center justify-start gap-2 text-primary">
          <Image
            src="/next/next_assets/images/log-in.svg"
            alt="Login & recovery"
            width={30}
            height={30}
          />
          <span>Active login sessions</span>
        </div>

        <span
          className="flex items-center justify-end gap-2 bg-accent dark:bg-black text-primary rounded-full py-2 px-4"
          role="button"
        >
          Log out all other sessions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M17 6.00024L21 10.0002M21 10.0002L17 14.0002M21 10.0002H8M14 2.20428C12.7252 1.43852 11.2452 1.00024 9.66667 1.00024C4.8802 1.00024 1 5.02968 1 10.0002C1 14.9708 4.8802 19.0002 9.66667 19.0002C11.2452 19.0002 12.7252 18.562 14 17.7962"
              stroke="#4D9D9D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="bg-white tiny_scrollbar dark:bg-black shadow-md rounded-lg overflow-x-auto md:overflow-x-hidden">
        <table className="w-[700px] md:w-full dark:text-primary">
          <thead className="border-b">
            <tr>
              <th className="table-header p-3">Original IP address</th>
              <th className="table-header p-3">Original login time</th>
              <th className="table-header p-3">Browser or device</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                190.139.50.227{" "}
                <a href="#" className="text-primary text-[12px]">
                  (lookup)
                </a>
              </td>
              <td className="p-3 flex flex-col">
                Jan 28 2024 (3 days ago){" "}
                <span className="bg-accent w-[120px] dark:bg-dark text-primary text-center text-[12px] px-2 rounded-full">
                  Current session
                </span>
              </td>
              <td className="p-3">Mozilla Firefox v.0.45.6</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                190.139.50.227{" "}
                <a href="#" className="text-primary text-[12px]">
                  (lookup)
                </a>
              </td>
              <td className="p-3">Jan 28 2024 (3 days ago)</td>
              <td className="p-3">Mozilla Firefox v.0.45.6</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                190.139.50.227{" "}
                <a href="#" className="text-primary text-[12px]">
                  (lookup)
                </a>
              </td>
              <td className="p-3">Jan 28 2024 (3 days ago)</td>
              <td className="p-3">Mozilla Firefox v.0.45.6</td>
            </tr>
            <tr>
              <td className="p-3">
                190.139.50.227{" "}
                <a href="#" className="text-primary text-[12px]">
                  (lookup)
                </a>
              </td>
              <td className="p-3">Jan 28 2024 (3 days ago)</td>
              <td className="p-3">Mozilla Firefox v.0.45.6</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ActiveSessions;
