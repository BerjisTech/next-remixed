"use client";
import clsx from "clsx";
import React, { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "When will the new site be available for use?",
    answer: "Hopefully by the end of the year.",
  },
  {
    question: "What will be the biggest change?",
    answer: "Interpreters can now call clients directly from ProZ.com",
  },
  {
    question: "Will the new site be faster?",
    answer: "Yes, the new site will be faster.",
  },
];

const FaqSection = () => {
  const [currentFaq, setCurrentFaq] = useState(0);
  const handleFaqClick = (index: number) => {
    currentFaq === index ? setCurrentFaq(0) : setCurrentFaq(index);
  };

  return (
    <React.Fragment>
      {faqs.map((faq, index) => (
        <div
          role="button"
          key={index}
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1"
        >
          <div
            onClick={() => {
              handleFaqClick(index);
            }}
            className={clsx(
              "flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-4 rounded-xl transition-colors duration-300",
              { "bg-primary": currentFaq === index },
              { "bg-primary dark:bg-black": currentFaq !== index }
            )}
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
              {faq.question}
            </p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M5 12.5H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          {currentFaq === index && (
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-[21px] rounded-xl bg-accent-light dark:bg-black">
              <p className="flex-grow w-[804px] text-base text-left text-black dark:text-accent-foreground">
                <span className="flex-grow w-[804px] text-base text-left text-black dark:text-accent-foreground">
                  {faq.answer}
                </span>
              </p>
            </div>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default FaqSection;
