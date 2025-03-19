"use client";
import React, { useState } from "react";
import { useContentHook } from "@/hooks/useContentHook";
import Image from "next/image";
import { ProzUser } from "@/interfaces/account";
import UserImage from "../userImage";
import { BUSINESS_MEMBERSHIP_TYPES, PROFESSIONAL_MEMBERSHIP_TYPES } from "@/constants/common";
import clsx from "clsx";
import { Button } from "../../shadcn/button";
import Link from "next/link";
import { Skeleton } from "../../shadcn/skeleton";

const UserCard = ({ user }: { user: ProzUser }) => {
  const { setDrawerVisibility } = useContentHook();
  const [showContactMethods, setShowContactMethods] = useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col justify-start items-center w-full relative overflow-hidden gap-4 px-4 pt-[54px] pb-8 rounded-[28px]",
        { "bg-green-gradient dark:bg-green-gradient-dark": user.is_professional_member },
        { "bg-[#F4F4F3]": !user.is_professional_member }
      )}
    >
      {user ? (
        <UserImage user={user}>
          {user.can_edit && (
            <span
              className="absolute top-[-10px] right-[-10px] z-[300000] material-symbols-outlined bg-white dark:bg-black p-2 rounded-full text-primary dark:text-primary"
              role="button"
              onClick={() => setDrawerVisibility("profile_image")}
            >
              edit
            </span>
          )}
        </UserImage>
      ) : (
        <Skeleton className="block mx-1 !h-[14rem] !w-3/4" />
      )}

      {/* Badges */}
      <div className="flex items-center gap-1">
        {/* CPN badge */}
        {Array.isArray(user.pro_tag_data) && user.pro_tag_data.length > 0 && (
          <Image
            src="/next/next_assets/images/svg/cpn-badge.svg"
            alt="image-24.png"
            height={35}
            width={35}
          />
        )}

        {/* Pro member */}
        {user.is_professional_member &&
          PROFESSIONAL_MEMBERSHIP_TYPES.includes(user.membership_type) && (
            <Image
              src="/next/next_assets/images/svg/plus-member.svg"
              alt="image-24.png"
              height={35}
              width={35}
            />
          )}

        {/* Business member */}
        {!user.is_professional_member &&
          BUSINESS_MEMBERSHIP_TYPES.includes(user.membership_type) && (
            <Image
              src="/next/next_assets/images/svg/Membership-Business-Enterprise.svg"
              alt="image-24.png"
              height={40}
              width={40}
            />
          )}

        {/* Pro bono */}
        {user.pro_bono_data && (
          <Image
            src="/next/next_assets/images/svg/proz-probono-badge.svg"
            alt="image-24.png"
            height={40}
            width={40}
          />
        )}
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6 text-primary">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow-0 flex-shrink-0 w-[272px] h-auto relative">
            <button
              onClick={() => setShowContactMethods(!showContactMethods)}
              className={clsx(
                "flex cursor-pointer flex-col justify-center items-center w-full left-0 top-0 gap-[3px] px-6 py-3 rounded-xl",
                { "bg-[#EDF5F5]": user.is_professional_member },
                { "bg-[#EAECF0]": !user.is_professional_member }
              )}
            >
              <span className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#3a7878]">
                Contact
              </span>
              <span className="flex-grow-0 flex-shrink-0 text-xs pt-2 text-center text-[#3a7878]">
                Local time: 17:42
              </span>
            </button>
            {showContactMethods && (
              <div className="flex justify-start items-start w-[164px] relative left-[54px] pt-4 gap-1">
                <div
                  className={clsx(
                    "flex cursor-not-allowed justify-center items-center flex-grow-0 flex-shrink-0 w-[52px] relative overflow-hidden gap-2 px-4 py-2.5 rounded-xl",
                    { "bg-accent": user.is_professional_member },
                    { "bg-[#EAECF0]": !user.is_professional_member }
                  )}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_9765_34627)">
                      <path
                        d="M11.7074 4.99935C12.5213 5.15815 13.2694 5.55623 13.8558 6.14263C14.4422 6.72903 14.8403 7.47707 14.9991 8.29102M11.7074 1.66602C13.3985 1.85388 14.9754 2.61116 16.1793 3.81352C17.3831 5.01588 18.1424 6.59186 18.3324 8.28268M8.52155 11.5519C7.52023 10.5506 6.72958 9.41839 6.14958 8.21037C6.09969 8.10647 6.07475 8.05451 6.05558 7.98877C5.98748 7.75514 6.0364 7.46826 6.17807 7.2704C6.21794 7.21472 6.26557 7.16709 6.36083 7.07183C6.65217 6.78049 6.79784 6.63483 6.89308 6.48834C7.25224 5.93593 7.25224 5.22378 6.89308 4.67138C6.79784 4.52489 6.65217 4.37923 6.36083 4.08789L6.19844 3.92549C5.75557 3.48263 5.53414 3.26119 5.29632 3.1409C4.82335 2.90168 4.2648 2.90168 3.79183 3.1409C3.55401 3.26119 3.33258 3.48263 2.88971 3.92549L2.75835 4.05686C2.31699 4.49821 2.09632 4.71889 1.92778 5.01891C1.74076 5.35183 1.60629 5.86891 1.60743 6.25076C1.60845 6.59488 1.67521 6.83007 1.80871 7.30044C2.52619 9.82827 3.87992 12.2136 5.8699 14.2036C7.85988 16.1935 10.2452 17.5473 12.773 18.2647C13.2434 18.3983 13.4786 18.465 13.8227 18.466C14.2045 18.4672 14.7216 18.3327 15.0545 18.1457C15.3546 17.9771 15.5752 17.7565 16.0166 17.3151L16.148 17.1837C16.5908 16.7409 16.8123 16.5194 16.9325 16.2816C17.1718 15.8087 17.1718 15.2501 16.9325 14.7771C16.8123 14.5393 16.5908 14.3179 16.148 13.875L15.9856 13.7126C15.6942 13.4213 15.5486 13.2756 15.4021 13.1804C14.8497 12.8212 14.1375 12.8212 13.5851 13.1804C13.4386 13.2756 13.293 13.4213 13.0016 13.7126C12.9064 13.8079 12.8587 13.8555 12.8031 13.8954C12.6052 14.0371 12.3183 14.086 12.0847 14.0179C12.0189 13.9987 11.967 13.9738 11.8631 13.9239C10.6551 13.3439 9.52286 12.5532 8.52155 11.5519Z"
                        stroke="#4D9D9D"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_9765_34627">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className={clsx(
                    "flex cursor-not-allowed justify-center items-center flex-grow-0 flex-shrink-0 w-[52px] relative overflow-hidden gap-2 px-4 py-2.5 rounded-xl ",
                    { "bg-accent": user.is_professional_member },
                    { "bg-[#EAECF0]": !user.is_professional_member }
                  )}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M6.25 8.75H6.25833M10 8.75H10.0083M13.75 8.75H13.7583M5.83333 15V16.9463C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8832 6.25045 17.8831C6.39636 17.8829 6.56973 17.7442 6.91646 17.4668L8.90434 15.8765C9.31043 15.5517 9.51347 15.3892 9.73957 15.2737C9.94017 15.1712 10.1537 15.0963 10.3743 15.051C10.6231 15 10.8831 15 11.4031 15H13.5C14.9001 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4001 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V11.6667C2.5 12.4416 2.5 12.8291 2.58519 13.147C2.81635 14.0098 3.49022 14.6836 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15ZM6.66667 8.75C6.66667 8.98012 6.48012 9.16667 6.25 9.16667C6.01988 9.16667 5.83333 8.98012 5.83333 8.75C5.83333 8.51988 6.01988 8.33333 6.25 8.33333C6.48012 8.33333 6.66667 8.51988 6.66667 8.75ZM10.4167 8.75C10.4167 8.98012 10.2301 9.16667 10 9.16667C9.76988 9.16667 9.58333 8.98012 9.58333 8.75C9.58333 8.51988 9.76988 8.33333 10 8.33333C10.2301 8.33333 10.4167 8.51988 10.4167 8.75ZM14.1667 8.75C14.1667 8.98012 13.9801 9.16667 13.75 9.16667C13.5199 9.16667 13.3333 8.98012 13.3333 8.75C13.3333 8.51988 13.5199 8.33333 13.75 8.33333C13.9801 8.33333 14.1667 8.51988 14.1667 8.75Z"
                      stroke="#4D9D9D"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div
                  className={clsx(
                    "flex cursor-not-allowed justify-center items-center flex-grow-0 flex-shrink-0 w-[52px] relative overflow-hidden gap-2 px-4 py-2.5 rounded-xl ",
                    { "bg-accent": user.is_professional_member },
                    { "bg-[#EAECF0]": !user.is_professional_member }
                  )}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M17.916 15.0007L12.3803 10.0007M7.6184 10.0007L2.08271 15.0007M1.66602 5.83398L8.47012 10.5969C9.02109 10.9825 9.29658 11.1754 9.59624 11.2501C9.86093 11.3161 10.1378 11.3161 10.4025 11.2501C10.7021 11.1754 10.9776 10.9825 11.5286 10.5969L18.3327 5.83398M5.66602 16.6673H14.3327C15.7328 16.6673 16.4329 16.6673 16.9677 16.3948C17.4381 16.1552 17.8205 15.7727 18.0602 15.3023C18.3327 14.7675 18.3327 14.0674 18.3327 12.6673V7.33398C18.3327 5.93385 18.3327 5.23379 18.0602 4.69901C17.8205 4.2286 17.4381 3.84615 16.9677 3.60647C16.4329 3.33398 15.7328 3.33398 14.3327 3.33398H5.66602C4.26588 3.33398 3.56582 3.33398 3.03104 3.60647C2.56063 3.84615 2.17818 4.2286 1.9385 4.69901C1.66602 5.23379 1.66602 5.93385 1.66602 7.33398V12.6673C1.66602 14.0674 1.66602 14.7675 1.9385 15.3023C2.17818 15.7727 2.56063 16.1552 3.03104 16.3948C3.56582 16.6673 4.26588 16.6673 5.66602 16.6673Z"
                      stroke="#4D9D9D"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
          <Link href="/prozpay/pay" className="w-full">
            <Button className="font-semibold w-full">
              <Image
                src="/next/next_assets/images/image-62.png"
                className="relative w-[21px]"
                alt="image-62.png"
                width={21}
                height={21}
              />
              Pay
            </Button>
          </Link>
          <button
            className={clsx(
              "flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#3a7878] w-[272px] relative gap-[3px] px-6 py-2 rounded-xl",
              { "bg-accent": user.is_professional_member },
              { "bg-[#EAECF0]": !user.is_professional_member }
            )}
            onClick={() => setShowContactMethods(!showContactMethods)}
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
