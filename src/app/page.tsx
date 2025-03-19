"use client";

import SearchBar from "@/components/shared/searchBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (value: any) => {
    setSearchInputValue(value);
  };

  useEffect(() => {
    if (searchInputValue !== "") {
      const getDataFromJson = async (prompt: any = "") => {
        const query = new URLSearchParams();
        query.append("search", searchInputValue);
        const url = `/next/api/gemini?${query.toString()}`;

        const response = await fetch(url);
        const jsonToFilterBy = await response.json();
        let searchingFor = JSON.parse(jsonToFilterBy.res) || "";
        searchingFor = searchingFor.searching_for || "";

        const redirectUrl = new URLSearchParams();
        redirectUrl.append("search", searchInputValue);
        redirectUrl.append("content", jsonToFilterBy.res);

        if (searchingFor == "freelancers") router.push(`/find?${redirectUrl.toString()}`);
        else if (searchingFor == "jobs") router.push(`/opportunities?${redirectUrl.toString()}`);
        else if (searchingFor == "businesses") router.push(`/business?${redirectUrl.toString()}`);
        else if (searchingFor == "services") router.push(`/find?${redirectUrl.toString()}`);
      };

      getDataFromJson();
    }
  }, [searchInputValue]);

  return (
    <div className="w-full h-auto pt-16 pb-24 max-lg:px-3 overflow-x-clip">
      <div className="flex flex-col items-center justify-between gap-10 px-4-4">
        <div className="text-[48px] lg:text-[60px] leading-[90px] w-full px-4 flex flex-col items-center justify-center gap-6">
          <h1 className="max-w-3xl lg:text-7xl text-[48px] md:text-6xl font-bold text-center font-merriweather text-primary-600 tracking-tight leading-tight">
            Find language professionals
          </h1>
          <span className="w-full text-[30px] md:text-[50px] lg:text-[80px] text-primary flex flex-col lg:flex-row flex-wrap lg:flex-nowrap items-center lg:items-center justify-center max-w-full lg:min-w-full whitespace-nowrap gap-[10px] lg:gap-2">
            <span className="flex items-center justify-start">
              <Image
                src="/next/next_assets/images/staff/erika.png"
                alt="translator"
                height={60}
                width={60}
                className="inline border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
              <Image
                src="/next/next_assets/images/staff/andrea.jpg"
                alt="translator"
                height={60}
                width={60}
                className="inline ms-[-20px] border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
              <Image
                src="/next/next_assets/images/staff/lucia.jpg"
                alt="translator"
                height={60}
                width={60}
                className="inline ms-[-20px] border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
              <Image
                src="/next/next_assets/images/staff/erika.png"
                alt="translator"
                height={60}
                width={60}
                className="inline ms-[-20px] border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
              <Image
                src="/next/next_assets/images/staff/andrea.jpg"
                alt="translator"
                height={60}
                width={60}
                className="inline ms-[-20px] border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
              <Image
                src="/next/next_assets/images/staff/lucia.jpg"
                alt="translator"
                height={60}
                width={60}
                className="inline ms-[-20px] border-[3px] border-accent dark:border-black rounded-full w-[60px] h-[60px]"
              />
            </span>
          </span>
          <p className="text-[24px] lg:text-[28px] leading-[40px] text-primary text-center">
            translators, interpreters, language businesses, and much more
          </p>
        </div>

        <SearchBar
          label="Proudly brought to you with AI"
          onInputChange={handleInputChange}
          placeholder="Spanish medical translators , German to English..."
        />

        <div className="gap-4">
          <p className="w-full text-xl font-semibold text-center text-grey-600 dark:text-white mb-4">
            ProZ is the place language professionals and global businesses come to:
          </p>
          <div className="container px-4 flex flex-col md:flex-row justify-center items-center perspective-1000">
            {/* <!-- Work & Hire Section --> */}
            <Link
              href="/about/overhaul#work&hire"
              className="section w-full md:w-[338px] px-[15px] py-6 bg-cards-02 rounded-[100px] border border-[#C0E1FF] dark:border-[#144C7E] flex-col justify-start items-center gap-1.5 inline-flex hover:shadow-lg transform scale-90 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="w-[72px] h-[72px] flex justify-center items-center">
                <Image
                  src="/next/next_assets/images/work-hire.svg"
                  alt="Probono hero image"
                  width={72}
                  height={72}
                  className="object-contain w-full h-auto rounded-3xl"
                />
              </div>
              <div className="text-center text-dark-blue-hue text-xl font-semibold font-['Poppins'] leading-[30px]">
                Work & hire
              </div>
            </Link>

            {/* <!-- Invoice & Pay Section --> */}
            <Link
              href="/prozpay"
              className="section w-full md:w-[338px] px-[15px] py-6 bg-cards-04 rounded-[100px] shadow border border-[#bceabc] dark:border-[#004900] flex-col justify-start items-center gap-1.5 inline-flex hover:shadow-lg transform scale-90 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer -mx-[50px] z-10"
            >
              <div className="w-[72px] h-[72px] flex justify-center items-center">
                <Image
                  src="/next/next_assets/images/invoice-pay.svg"
                  alt="Probono hero image"
                  width={72}
                  height={72}
                  className="object-contain w-full h-auto rounded-3xl"
                />
              </div>
              <div className="text-center text-dark-blue-hue text-xl font-semibold font-['Poppins'] leading-[30px]">
                Invoice & pay
              </div>
            </Link>

            {/* <!-- Network & Learn Section --> */}
            <Link
              href="/about/overhaul#network&learn"
              className="section w-full md:w-[338px] px-[15px] py-6 bg-cards-08 rounded-[100px] shadow border border-[#f8e2a2] dark:border-[#493500] flex-col justify-start items-center gap-1.5 inline-flex hover:shadow-lg transform scale-90 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="w-[72px] h-[72px] flex justify-center items-center">
                <Image
                  src="/next/next_assets/images/network-learn.svg"
                  alt="Probono hero image"
                  width={72}
                  height={72}
                  className="object-contain w-full h-auto rounded-3xl"
                />
              </div>
              <div className="text-center text-dark-blue-hue text-xl font-semibold font-['Poppins'] leading-[30px]">
                Network & learn
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
