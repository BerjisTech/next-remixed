"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InterpretingService from "./services/interpreting";
import TranslationService from "./services/translation";

const ServicesComponent = () => {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [showServices, setShowServices] = useState<boolean>(true);

  const activeServices = [
    { name: "translation", enabled: true, image: "translation.svg" },
    { name: "interpreting", enabled: true, image: "interpreting.svg" },
    { name: "subtitling", enabled: false, image: "translation.svg" },
    { name: "copywriting", enabled: false, image: "interpreting.svg" },
  ];

  const changeServiceType = (type: string) => {
    if (activeServices.find((service) => service.name === type)?.enabled) {
      setShowServices(false);
      setServiceType(type);
    }
  };

  return (
    <div>
      <div className="flex flex-row px-3 pt-3">
        <Link href="/next" className="text-primary">
          Work & hire
        </Link>
        <span>
          {" → "}
          <Link
            href="/job-posting"
            className={`text-black dark:text-white ${serviceType ? "text-primary cursor-pointer" : "cursor-default"}`}
            onClick={() => {
              setServiceType(null);
              setShowServices(true);
            }}
          >
            Post a job or project
          </Link>
        </span>
        {serviceType && (
          <span>
            {" → "}
            <Link
              href={`/job-posting/${serviceType}`}
              className="capitalize text-primary cursor-pointer"
              onClick={() => setServiceType(null)}
            >
              {serviceType}
            </Link>
          </span>
        )}
      </div>

      {showServices && (
        <div className="flex-col justify-start items-center gap-6 inline-flex w-full">
          <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white pt-3">
            Choose service:
          </div>
          <div className="self-stretch justify-start items-start gap-4 flex flex-col w-full mb-4">
            <div className="self-stretch grow justify-start items-start gap-6 w-full flex flex-col flex-wrap px-20 lg:flex-row lg:px-[12]">
              {activeServices.map((item) => (
                <div
                  key={item.name}
                  className={`lg:w-1/3 dark:bg-dark grow shrink self-stretch rounded-custom border-2 flex-col p-8 justify-center items-center gap-4 inline-flex ${
                    serviceType === item.name ? "border-[#12b669] bg-[#fbfafa]" : "bg-white"
                  } ${item.enabled ? "cursor-pointer hover:border-[#12b669] hover:bg-[#fbfafa]" : "cursor-not-allowed"}`}
                  onClick={() => changeServiceType(item.name)}
                >
                  {serviceType === item.name && (
                    <div className="absolute w-[18px] h-[18px] items-center flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M16.5 8.31429V9.00429C16.4991 10.6216 15.9754 12.1953 15.007 13.4907C14.0386 14.786 12.6775 15.7337 11.1265 16.1922C9.57557 16.6508 7.91794 16.5957 6.40085 16.0352C4.88376 15.4747 3.58849 14.4389 2.70822 13.0821C1.82795 11.7253 1.40984 10.1203 1.51626 8.50653C1.62267 6.89272 2.24791 5.35654 3.29871 4.1271C4.34951 2.89766 5.76959 2.04083 7.34714 1.6844C8.92469 1.32798 10.5752 1.49105 12.0525 2.14929M16.5 3L9 10.5075L6.75 8.2575"
                          stroke="#12B76A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <Image
                    src={`/assets/images/svg/${item.image}`}
                    alt={`${item.name} icon`}
                    width={33}
                    height={33}
                  />
                  <div className="text-center text-black text-2xl font-medium dark:text-white">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {serviceType === "interpreting" && <InterpretingService />}
      {serviceType === "translation" && <TranslationService />}
    </div>
  );
};

export default ServicesComponent;
