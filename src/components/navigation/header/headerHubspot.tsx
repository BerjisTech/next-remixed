import DarkMode from "@/components/shared/darkMode";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderHubspot = () => {
  return (
    <header
      className="sticky top-0 left-0 right-0 z-[50] bg-white dark:bg-black shadow-xl"
      id="main-nav-container"
    >
      <div className="shadow max-w-[100%] flex justify-between items-center w-full dark:bg-black px-1 xl:px-5 py-0 h-[76px]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5.389188289642334px]">
          <Link href={"/"} className="flex-grow-0 flex-shrink-0">
            <Image
              src="/next/next_assets/images/svg/proz-logo.svg"
              alt="_prozSvg.svg"
              height={132}
              width={132}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex items-center flex-row gap-4">
            <Link className="hover:text-primary hover:underline" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-primary hover:underline" href={"/about"}>
              About
            </Link>
            <Link className="hover:text-primary hover:underline" href={"/help-center"}>
              Help
            </Link>
          </div>
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default HeaderHubspot;
