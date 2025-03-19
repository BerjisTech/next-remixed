"use client";

import { FC, useState } from "react";
import { ProPlanCategory } from "@/interfaces/membership";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import Image from "next/image";
import { Badge } from "@/components/shadcn/badge";
import Link from "next/link";

interface AccordionProps {
  planCategory: ProPlanCategory;
  defaultOpen: boolean;
}

const Accordion: FC<AccordionProps> = ({ planCategory, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const getIcon = (accessType: string | undefined): string => {
    let iconStr = "";
    if (accessType === "partial") {
      iconStr = "warning-icon.svg";
    } else if (accessType === "available") {
      iconStr = "success-icon.svg";
    } else {
      iconStr = "error-icon.svg";
    }
    return iconStr;
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex justify-between items-center relative px-6 py-4 rounded-xl transition-all duration-300 ease-in-out bg-primary",
          { "bg-primary dark:bg-primary": isOpen },
          { "dark:bg-black border border-primary-50": !isOpen }
        )}
      >
        <p className={clsx("text-base font-medium text-left text-white")}>{planCategory.name}</p>
        {!isOpen ? (
          <Plus className="cursor-pointer text-white" />
        ) : (
          <Minus className="cursor-pointer text-white" />
        )}
      </div>
      {isOpen && (
        <div className="p-5 bg-accent-light dark:bg-black w-[99%] m-auto">
          {planCategory.features.map((item, index) => (
            <div key={index} className="px-0 lg:px-5 py-4">
              <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
                <div className="basis-[40%] flex justify-between">
                  <span>{item.name}</span>{" "}
                  {item.detailUrl && (
                    <Link target="_blank" href={item.detailUrl ?? ""}>
                      <Badge className="min-w-[90px]" variant="outline">
                        See details
                      </Badge>
                    </Link>
                  )}
                </div>
                <div className="basis-[60%] flex flex-row justify-evenly  gap-5 items-center mb-3">
                  <span className="basis-[25%] flex justify-center">
                    {" "}
                    <Image
                      src={"/next/next_assets/images/svg/" + getIcon(item.free)}
                      height={20}
                      width={20}
                      alt="icon.svg"
                    />
                  </span>
                  <span className="basis-[25%] flex justify-center">
                    {" "}
                    <Image
                      src={"/next/next_assets/images/svg/" + getIcon(item.standard)}
                      height={20}
                      width={20}
                      alt="icon.svg"
                    />
                  </span>
                  <span className="basis-[25%] flex justify-center">
                    {" "}
                    <Image
                      src={"/next/next_assets/images/svg/" + getIcon(item.plus)}
                      height={20}
                      width={20}
                      alt="icon.svg"
                    />
                  </span>
                  <span
                    className={clsx("basis-[25%] flex flex-col items-center justify-center gap-2", {
                      "": item.value,
                    })}
                  >
                    {" "}
                    <Image
                      src={"/next/next_assets/images/svg/" + getIcon(item.premium)}
                      height={20}
                      width={20}
                      alt="icon.svg"
                    />
                    {item.value && (
                      <Badge
                        className="border-2 border-purple-600 min-w-[70px] text-center"
                        variant="custom"
                      >
                        ${item.value}
                      </Badge>
                    )}
                  </span>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
