"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import Image from "next/image";
import { Checkbox } from "@/components/shadcn/checkbox";

const TermsHeader: React.FC = () => {
  let pathname = usePathname() ?? ""; // Get the current route for active tab styling

  // Map routes to dynamic titles
  const titles: Record<string, string> = {
    "/kudoz": "KudoZ terminology network",
    "/glossaries": "ProZ Glossaries",
  };

  // Get the title based on the current route, or fallback to a default
  const title = pathname ? titles[pathname] : "Terms";

  return (
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
            src="/next/next_assets/images/kudoz/kudoz-banner-image.png"
            alt="Woman using a laptop"
            className="dark:mix-blend-multiply"
            layout="fill"
            objectFit="cover"
            objectPosition="left-bottom"
          />
        </div>

        <div className="relative z-10">
          {/* Tabs */}
          <div>
            <div className="flex flex-col gap-2">
              {/* Dynamic Title */}
              <h1 className="text-5xl text-left font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
                {title}
              </h1>
              {/* Conditional Rendering Based on Route */}
              <div className="mt-4">
                {pathname === "/kudoz" && (
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-1 w-full md:w-1/2 items-center">
                      <Input className="" placeholder="Search term..." />
                      <Button size="default">Search</Button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Source language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Source language</SelectLabel>
                            <SelectItem value="apple">Lorem</SelectItem>
                            <SelectItem value="banana">Ipsum</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Target language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Target language</SelectLabel>
                            <SelectItem value="apple">Lorem</SelectItem>
                            <SelectItem value="banana">Ipsum</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <div className="flex items-center space-x-2 pl-2">
                        <Checkbox className="h-6 w-6" />
                        <p>My pairs</p>
                      </div>
                    </div>
                  </div>
                )}
                {pathname === "/glossaries" && (
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-1 w-full md:w-1/2 items-center">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Search by:" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Search by Term</SelectItem>
                            <SelectItem value="banana">Search by Glossary</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Input className="" placeholder="Search..." />
                      <Button size="default">Search</Button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Source language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Source language</SelectLabel>
                            <SelectItem value="apple">Lorem</SelectItem>
                            <SelectItem value="banana">Ipsum</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Target language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Target language</SelectLabel>
                            <SelectItem value="apple">Lorem</SelectItem>
                            <SelectItem value="banana">Ipsum</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-6 flex justify-start space-x-4">
              <Link
                href="/kudoz"
                className={`px-4 py-2 rounded-t-lg text-lg font-medium ${
                  pathname === "/kudoz"
                    ? "bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                    : "text-grey-500 hover:text-primary-700"
                }`}
              >
                KudoZ
              </Link>
              <Link
                href="/glossaries"
                className={`px-4 py-2 rounded-t-lg text-lg font-medium ${
                  pathname === "/glossaries"
                    ? "bg-gradient-to-tr from-[#387878] dark:from-black to-[#6ed9d9] dark:to-dark text-white"
                    : "text-grey-500 hover:text-primary-700"
                }`}
              >
                Glossaries
              </Link>
            </div>

            {/* Divider */}
            <div className="bg-primary-200 h-[1px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TermsHeader;
