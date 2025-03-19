"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import { useSearchParams } from "next/navigation";
import LearnPopup from "@/components/shared/learnPopup";
import { useSession } from "next-auth/react";

// Tab: string props
interface HeroSectionProps {
  tab: string;
}

const LearnHeroSection: React.FC<HeroSectionProps> = ({ tab }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();
  const isAdmin = session?.user?.is_admin === true;

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const searchButton = document.getElementById("searchButton");
    searchButton?.classList.add("animate-pulse");
    searchButton?.classList.add("cursor-wait");
    router.push(`/learn/courses?search=${encodeURIComponent(inputValue)}`);

    const searchValue = searchParams?.get("search") || "";
    if (searchValue === inputValue) {
      searchButton?.classList.remove("animate-pulse");
      searchButton?.classList.remove("cursor-wait");
    }
  };

  useEffect(() => {
    const searchValue = searchParams?.get("search") || "";
    setInputValue(searchValue);
  }, [searchParams]);

  return (
    <>
      <header className="max-w-7xl mx-auto w-full rounded-3xl overflow-hidden px-4 md:px-8 xl:px-0">
        {/* Background Section */}
        <div className="relative bg-secondary pt-12 px-6 md:px-12 overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"
            style={{
              borderRadius: "inherit", // Inherit border-radius from parent
            }}
          ></div>

          {/* Right image */}
          <div
            className="absolute right-0 top-0 h-full w-2/5 hidden md:block"
            style={{
              borderRadius: "inherit",
            }}
          >
            <Image
              src="/next/next_assets/images/training-1-2.png"
              alt="Woman using a laptop"
              className="dark:mix-blend-multiply"
              layout="fill"
              objectFit="cover"
              objectPosition="left-bottom"
            />
          </div>

          <div className="relative z-10">
            <div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-left font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
                  ProZ Learn
                </h1>
                <p className="w-full text-sm sm:text-base text-left text-black dark:text-accent-foreground">
                  Empowering freelance language professionals to succeed!
                </p>
              </div>

              <div className="mt-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 w-full md:w-1/2 items-center">
                    <Input
                      className=""
                      placeholder="What do you want to learn today?"
                      type="text"
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      value={inputValue}
                    />
                    <Button
                      className="cursor-pointer"
                      size="default"
                      id="searchButton"
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Tabs */}
            <div className="mt-6 flex justify-start space-x-4">
              <Link href="/learn" passHref>
                <p
                  className={`${
                    tab === "courses" || tab === "course" || tab === ""
                      ? "font-semibold bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                      : "text-[#525257] dark:text-accent-foreground"
                  } w-full text-base text-left  px-4 py-3 rounded-t-lg`}
                >
                  Courses
                </p>
              </Link>
              {isAdmin && (
                <Link href="/learn/trainers" passHref>
                  <p
                    className={`${
                      tab === "trainers"
                        ? "font-semibold bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                        : "text-[#525257] dark:text-accent-foreground"
                    } text-base text-left px-4 py-3  rounded-t-lg`}
                  >
                    Trainers
                  </p>
                </Link>
              )}
              <a href="https://www.proz.com/events_calendar">
                <p
                  className={`${
                    tab === "events"
                      ? "font-semibold bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                      : "text-[#525257] dark:text-accent-foreground dark:bg-dark bg-grey-100 cursor-pointer"
                  } text-base text-left  px-4 py-3 rounded-t-lg`}
                >
                  Events calendar
                </p>
              </a>
              <Link href="/learn/dashboard" passHref>
                <p
                  className={`${
                    tab === "dashboard"
                      ? "font-semibold bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                      : "text-[#525257] dark:text-accent-foreground dark:bg-dark bg-grey-100"
                  } text-base text-left px-4 py-3  rounded-t-lg`}
                >
                  My dashboard
                </p>
              </Link>
            </div>
            {/* Divider */}
            <div className="bg-primary-200 h-[1px]"></div>
          </div>
        </div>
      </header>
      {/* Learn Popup Component */}
      <LearnPopup />
    </>
  );
};

export default LearnHeroSection;
