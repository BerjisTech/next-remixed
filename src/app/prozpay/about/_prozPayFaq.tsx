"use client";

import { FC, useState } from "react";
import { ProzPayFaqItem } from "@/interfaces/prozpay/prozpay";

interface ProzPayFaqProps {
  prozPayFaqItems: ProzPayFaqItem[];
}

const ProzPayFaq: FC<ProzPayFaqProps> = ({ prozPayFaqItems }) => {
  const [faqItems, setFaqItems] = useState(prozPayFaqItems);

  const toggleFaq = (itemIndex: number) => {
    setFaqItems((prevFaqs: ProzPayFaqItem[]) =>
      prevFaqs.map((item, index: number) =>
        index === itemIndex ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="w-full ">
      {faqItems.map((item, index) => (
        <div key={index} className="w-full flex flex-col justify-start items-start gap-1">
          <div
            onClick={() => toggleFaq(index)}
            className={`w-full flex justify-between items-center relative px-6 py-4 rounded-xl transition-all duration-300 ease-in-out ${
              item.isOpen ? "bg-primary dark:bg-primary" : "dark:bg-black border border-primary-50"
            }`}
          >
            <p
              className={`text-base font-medium text-left ${
                item.isOpen ? "text-white dark:text-black" : "text-black dark:text-primary-50"
              }`}
            >
              {item.question}
            </p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d={item.isOpen ? "M5 12.5H19" : "M12 5.5V19.5M5 12.5H19"}
                stroke={item.isOpen ? "white" : "#4D9D9D"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {item.isOpen && (
            <div className="flex justify-start items-start relative gap-2.5 p-5 rounded-xl bg-primary-50 dark:bg-black w-full ">
              <p className="flex-grow w-full text-base text-left text-black dark:text-primary-50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: typeof item.answer === "string" ? item.answer : "",
                  }}
                />
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProzPayFaq;
