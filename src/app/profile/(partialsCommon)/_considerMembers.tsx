import StarRating from "@/components/shared/starRating";
import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConsiderMembers = ({ user }: { user: ProzUser }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start relative gap-4 p-6 rounded-3xl bg-accent dark:bg-black shadow">
      <div className="w-full flex justify-start items-center relative gap-2">
        <p className="w-full text-xl font-semibold text-left text-dark-blue-hue">
          Consider the following ProZ paying members
        </p>
      </div>
      {user.is_owner && (
        <div className="inline-flex px-6 py-4 gap-3 rounded-2xl bg-secondary">
          <Image
            src="/next/next_assets/images/svg/plus-member.svg"
            alt="Puzzle icon"
            width="24"
            height="24"
          />
          <p className="text-base font-medium leading-normal">
            {user.is_professional_member ? (
              <span>
                Because you are a ProZ member, this section is not visible on your profile.{" "}
                <Link className="text-primary" href="https://www.proz.com/membership">
                  Enjoy the benefits of your membership
                </Link>
                !
              </span>
            ) : (
              <span>
                Become a ProZ member to remove this section from your profile and unlock more
                exclusive benefits.{" "}
                <Link
                  className="text-primary"
                  href="https://www.proz.com/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upgrade now
                </Link>
                .
              </span>
            )}
          </p>
        </div>
      )}
      <div className="w-full flex flex-col xl:flex-row justify-evenly items-center gap-4">
        {Array.from([1, 2, 3]).map((_, index) => (
          <div
            key={index}
            className="w-full XL:W-[30%] flex flex-col justify-center items-start flex-grow gap-4 p-4 rounded-custom bg-white dark:bg-dark border border-accent-light shadow-lg"
          >
            <div className="w-full flex justify-between items-center relative">
              <div className="w-[82px] h-[82px] relative overflow-hidden rounded-[87.86px] border-[2.93px] border-primary">
                <Image
                  src="/next/next_assets/images/image-1.png"
                  alt="image-1.png"
                  width={88}
                  height={84}
                  className="w-[87.86px] h-[83.95px]"
                />
              </div>
              <div>
                <StarRating rating="4" size="medium" />
                <p className="w-full mt-2 text-sm font-medium text-right text-primary">
                  17 ratings
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <div className="w-full flex flex-col justify-start items-start relative gap-1">
                <div className="w-full flex justify-start items-center relative gap-2">
                  <p className="w-full text-xl font-semibold text-left text-dark dark:text-white">
                    Marshall Block
                  </p>
                </div>
                <p className=" w-[149px] text-sm text-left text-black dark:text-accent-foreground">
                  Off-ramp supporter
                </p>
              </div>
              <div className="w-full flex justify-start items-center relative gap-2">
                <p className="w-full text-xs font-medium text-left text-dark dark:text-accent-foreground">
                  Brazil
                </p>
                <Image
                  src="/next/next_assets/images/Brazil.svg"
                  alt="Brazil.svg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsiderMembers;
