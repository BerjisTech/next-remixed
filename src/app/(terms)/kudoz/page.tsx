import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Switch } from "@/components/shadcn/switch";
import { Checkbox } from "@/components/shadcn/checkbox";
import { ArrowRight, ListFilter } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import KudozSideMenu from "@/app/(terms)/kudoz/_kudozSideMenu";
//import StillPrototype from "@/components/shared/prototypeMessageBanner";
import KudoZMobileSideMenu from "@/app/(terms)/kudoz/_mobileKudozSideMenu";

export const metadata: Metadata = {
  title: "KudoZ",
  description: "Explore the KudoZ terminology network.",
};

const Kudoz = () => {
  return (
    <div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto my-8 gap-6 px-4 md:px-8 xl:px-0">
        <div className="col-span-3 hidden md:block">
          <KudozSideMenu />
        </div>
        {/*Cards feed*/}
        <div className="col-span-12 md:col-span-9 w-full">
          <div className="h-6 w-6 md:hidden">
            <KudoZMobileSideMenu />
          </div>
          {/*<StillPrototype/>*/}

          <div className="flex flex-grow px-6 py-4 gap-3 justify-between">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Any of my fields" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Any of my fields</SelectLabel>
                  <SelectItem value="Lorem">Lorem</SelectItem>
                  <SelectItem value="Ipsum">Ipsum</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex gap-6">
              <div className="flex items-center space-x-2">
                <p>Open</p>
                <Switch id="open-questions" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="h-6 w-6" />
                <p>Search reverse pair</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>Filters</p>
                <ListFilter />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/*Card 1*/}
            <div className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-grey-50">
              <div className="flex items-start justify-between">
                {/* Kudoz question */}
                <div className="lg:w-1/2 flex gap-2 items-center">
                  <p className="text-grey-700 text-[18px] font-semibold">PinP wipe screen</p>
                  <ArrowRight />
                  <p className="text-[18px] text-grey-700">см ниже (?)</p>
                </div>

                <div className="lg:w-1/2 flex items-start justify-between gap-10">
                  {/* Language and field */}
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] font-medium">
                        English to Russian
                      </Badge>
                    </div>
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] bg-grey-100 font-medium">
                        Education / Pedagogy
                      </Badge>
                    </div>
                  </div>

                  {/* Profile image */}
                  <div className="flex gap-1">
                    <div className="w-10 h-10">
                      <Image
                        src="/next/next_assets/images/avatar.jpeg"
                        className="rounded-full object-cover"
                        alt="profile image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="text-sm font-semibold text-primary leading-tight">Jane Doe</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-normal text-grey-800 leading-[18px]">
                          United States
                        </p>
                        <Image
                          src="/next/next_assets/images/flags/us.svg"
                          className="object-cover rounded-sm"
                          alt="flag"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-normal text-grey-800 leading-[18px]">Answers</p>
                  <Badge variant="secondary" className="text-sm text-primary font-semibold">
                    3
                  </Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-grey-700 text-sm font-medium italic leading-tight">
                    Posted 2hrs ago
                  </p>
                  <Badge variant="secondary" className="text-sm text-primary font-medium">
                    In queue
                  </Badge>
                </div>
              </div>
            </div>
            {/*    Card 2*/}
            <div className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-accent">
              <div className="flex items-start justify-between">
                {/* Kudoz question */}
                <div className="lg:w-1/2 flex gap-2 items-center">
                  <p className="text-grey-700 text-[18px] font-semibold">PinP wipe screen</p>
                  <ArrowRight />
                  <p className="text-[18px] text-grey-700">см ниже (?)</p>
                </div>

                <div className="lg:w-1/2 flex items-start justify-between gap-10">
                  {/* Language and field */}
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] font-medium">
                        English to Russian
                      </Badge>
                    </div>
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] bg-grey-100 font-medium">
                        Education / Pedagogy
                      </Badge>
                    </div>
                  </div>

                  {/* Profile image */}
                  <div className="flex gap-1">
                    <div className="w-10 h-10">
                      <Image
                        src="/next/next_assets/images/avatar.jpeg"
                        className="rounded-full object-cover"
                        alt="profile image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="text-sm font-semibold text-primary leading-tight">Jane Doe</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-normal text-grey-800 leading-[18px]">
                          United States
                        </p>
                        <Image
                          src="/next/next_assets/images/flags/us.svg"
                          className="object-cover rounded-sm"
                          alt="flag"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-normal text-grey-800 leading-[18px]">Answers</p>
                  <Badge variant="secondary" className="text-sm text-primary font-semibold">
                    3
                  </Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-grey-700 text-sm font-medium italic leading-tight">
                    Posted 2hrs ago
                  </p>
                  {/*<Badge variant="secondary" className="text-sm text-primary font-medium">In queue</Badge>*/}
                </div>
              </div>
            </div>
            {/*    Card 3*/}
            <div className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-accent">
              <div className="flex items-start justify-between">
                {/* Kudoz question */}
                <div className="lg:w-1/2 flex flex-wrap gap-2 items-center">
                  <p className="text-grey-700 text-[18px] font-semibold break-words">
                    non-mainstream pooled investment vehicle
                  </p>
                  <ArrowRight />
                  <p className="text-[18px] text-grey-700 break-words">
                    non-mainstream pooled investment vehicle (veicolo d'investimento comune
                    alternativo) (?)
                  </p>
                </div>

                <div className="lg:w-1/2 flex items-start justify-between gap-10">
                  {/* Language and field */}
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] font-medium">
                        English to Russian
                      </Badge>
                    </div>
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] bg-grey-100 font-medium">
                        Finance (general)
                      </Badge>
                    </div>
                  </div>

                  {/* Profile image */}
                  <div className="flex gap-1">
                    <div className="w-10 h-10">
                      <Image
                        src="/next/next_assets/images/avatar.jpeg"
                        className="rounded-full object-cover"
                        alt="profile image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="text-sm font-semibold text-primary leading-tight">Jane Doe</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-normal text-grey-800 leading-[18px]">
                          United States
                        </p>
                        <Image
                          src="/next/next_assets/images/flags/us.svg"
                          className="object-cover rounded-sm"
                          alt="flag"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-normal text-grey-800 leading-[18px]">Answers</p>
                  <Badge variant="secondary" className="text-sm text-primary font-semibold">
                    3
                  </Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-grey-700 text-sm font-medium italic leading-tight">
                    Posted 2hrs ago
                  </p>
                  {/*<Badge variant="secondary" className="text-sm text-primary font-medium">In queue</Badge>*/}
                </div>
              </div>
            </div>
            {/*    Card 4*/}
            <div className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-accent">
              <div className="flex items-start justify-between">
                {/* Kudoz question */}
                <div className="lg:w-1/2 flex flex-wrap gap-2 items-center">
                  <p className="text-grey-700 text-[18px] font-semibold">PinP wipe screen</p>
                  <ArrowRight />
                  <p className="text-[18px] text-grey-700">см ниже (?)</p>
                </div>

                <div className="lg:w-1/2 flex items-start justify-between gap-10">
                  {/* Language and field */}
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] font-medium">
                        English to Russian
                      </Badge>
                    </div>
                    <div className="inline-flex">
                      <Badge variant="secondary" className="text-[14px] bg-grey-100 font-medium">
                        Education / Pedagogy
                      </Badge>
                    </div>
                  </div>

                  {/* Profile image */}
                  <div className="flex gap-1">
                    <div className="w-10 h-10">
                      <Image
                        src="/next/next_assets/images/avatar.jpeg"
                        className="rounded-full object-cover"
                        alt="profile image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="text-sm font-semibold text-primary leading-tight">Jane Doe</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-normal text-grey-800 leading-[18px]">
                          United States
                        </p>
                        <Image
                          src="/next/next_assets/images/flags/us.svg"
                          className="object-cover rounded-sm"
                          alt="flag"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-normal text-grey-800 leading-[18px]">Answers</p>
                  <Badge variant="secondary" className="text-sm text-primary font-semibold">
                    3
                  </Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-grey-700 text-sm font-medium italic leading-tight">
                    Posted 2hrs ago
                  </p>
                  {/*<Badge variant="secondary" className="text-sm text-primary font-medium">In queue</Badge>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kudoz;
