"use client";

import React, { FC, useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const faqs: FaqItem[] = [
  {
    question: "How long does it take to build my website?",
    answer:
      "From placing your order and setting up your hosting, to announcing your website to the world can take anywhere from 3 days to 3 months. It all depends on how quickly you provide us with answers to our questions. Head on over to our website to download a PDF that shows you exactly all the questions we will be asking, so that you can show up prepared. \n" +
      "If you need help with putting your content together, we have a self-paced solution for that, and if you need even more guidance, we can help with that, too.\n",
  },
  {
    question: "I have a ProZ Premium membership on a monthly plan. Can I get a website?",
    answer:
      "Because both hosting plans and domains can only be registered on an annual basis, we can not give Premium members on a monthly membership payment plan a website with their own domain. However, you can still have a personalized web page on a subdomain. The URL would be yourname.prozsite.com. \n" +
      "Should you at any time decide to opt for the annual membership subscription for the Premium membership, we can easily move your web page from the sub domain to your own domain and own hosting package. \n",
  },
  {
    question: "Do I need to provide my own images and content?",
    answer:
      "If you have your own logo and images already, of course! But you don’t have to. As for content, it is important that you speak to your ideal audience in your own words. So while we do not offer content creation in terms of the copy on your website, remember that ProZ has a huge number of members who can help you out with copywriting. \n" +
      "If you are just looking for a bit of inspiration on what to actually say on your website, our copywriting guides will offer plenty of inspiration. \n",
  },
  {
    question: "What if I already have a website?\n",
    answer:
      "We can migrate your website for free, if it is a WordPress site. For all other CMS, we’re happy to give you a quote. ",
  },
  {
    question: "What if my membership tier with ProZ changes?",
    answer:
      "Before every renewal of your hosting package, we will check your current membership status and if it changes, we will change your hosting price accordingly. Meaning if you move from e.g. Site User to Plus membership, your discount on hosting will increase from 30% to 50%, and vice versa. ",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! Whether you need help updating the copy or other content on your website, or if you want to build out your website with our guidance, we are here for you, eager to see your website grow with you. \n" +
      "Our hosting packages come with technical support, and we will always take care of software updates and backups. \n" +
      "And as a ProZ*360 client, you will always have access to our resource library, with guides, self-paced courses, and access to a human being when you need help.\n",
  },
];

const FaqSection: FC = () => {
  const [faqItems, setFaqItems] = useState(faqs.map((faq) => ({ ...faq, isOpen: false })));

  const toggleFaq = (itemIndex: number) => {
    setFaqItems((prevFaqs) =>
      prevFaqs.map((item, index) =>
        index === itemIndex ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {faqItems.map((item, index) => (
        <div key={index} className="w-full flex flex-col justify-start items-start gap-1">
          <div
            onClick={() => toggleFaq(index)}
            className={`w-full flex cursor-pointer justify-between items-center relative px-6 py-4 rounded-xl transition-all duration-300 ease-in-out ${
              item.isOpen
                ? "bg-primary hover:bg-primary dark:bg-primary"
                : "dark:bg-black border border-primary-50"
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
            <div className="flex justify-start items-start relative gap-2.5 p-5 rounded-xl bg-primary-50 dark:bg-black w-full">
              <p className="flex-grow w-full text-base text-left text-black dark:text-primary-50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.answer,
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

export default FaqSection;

// "use client";
//
// import clsx from "clsx";
// import React, { useState } from "react";
//
// const faqs: { question: string; answer: string }[] = [
//   {
//     question: "How long does it take to build my website?",
//     answer:
//       "From placing your order and setting up your hosting, to announcing your website to the world can take anywhere from 3 days to 3 months. It all depends on how quickly you provide us with answers to our questions. Head on over to our website to download a PDF that shows you exactly all the questions we will be asking, so that you can show up prepared. \n" +
//       "If you need help with putting your content together, we have a self-paced solution for that, and if you need even more guidance, we can help with that, too.\n",
//   },
//   {
//     question: "I have a ProZ Premium membership on a monthly plan. Can I get a website?",
//     answer:
//       "Because both hosting plans and domains can only be registered on an annual basis, we can not give Premium members on a monthly membership payment plan a website with their own domain. However, you can still have a personalized web page on a subdomain. The URL would be yourname.prozsite.com. \n" +
//       "Should you at any time decide to opt for the annual membership subscription for the Premium membership, we can easily move your web page from the sub domain to your own domain and own hosting package. \n",
//   },
//   {
//     question: "Do I need to provide my own images and content?",
//     answer:
//       "If you have your own logo and images already, of course! But you don’t have to. As for content, it is important that you speak to your ideal audience in your own words. So while we do not offer content creation in terms of the copy on your website, remember that ProZ has a huge number of members who can help you out with copywriting. \n" +
//       "If you are just looking for a bit of inspiration on what to actually say on your website, our copywriting guides will offer plenty of inspiration. \n",
//   },
//   {
//     question: "What if I already have a website?\n",
//     answer:
//       "We can migrate your website for free, if it is a WordPress site. For all other CMS, we’re happy to give you a quote. ",
//   },
//   {
//     question: "What if my membership tier with ProZ changes?",
//     answer:
//       "Before every renewal of your hosting package, we will check your current membership status and if it changes, we will change your hosting price accordingly. Meaning if you move from e.g. Site User to Plus membership, your discount on hosting will increase from 30% to 50%, and vice versa. ",
//   },
//   {
//     question: "Do you offer ongoing support?",
//     answer:
//       "Yes! Whether you need help updating the copy or other content on your website, or if you want to build out your website with our guidance, we are here for you, eager to see your website grow with you. \n" +
//       "Our hosting packages come with technical support, and we will always take care of software updates and backups. \n" +
//       "And as a ProZ*360 client, you will always have access to our resource library, with guides, self-paced courses, and access to a human being when you need help.\n",
//   },
// ];
//
// const FaqSection = () => {
//   const [currentFaq, setCurrentFaq] = useState(0);
//   const handleFaqClick = (index: number) => {
//     currentFaq === index ? setCurrentFaq(0) : setCurrentFaq(index);
//   };
//
//   return (
//     <React.Fragment>
//       {faqs.map((faq, index) => (
//         <div
//           role="button"
//           key={index}
//           className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1"
//         >
//           <div
//             onClick={() => {
//               handleFaqClick(index);
//             }}
//             className={clsx(
//               "flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-4 rounded-xl transition-colors duration-300",
//               { "bg-primary": currentFaq === index },
//               { "bg-primary dark:bg-black": currentFaq !== index }
//             )}
//           >
//             <p className="text-base font-medium text-left text-white">
//               {faq.question}
//             </p>
//             <svg
//               width="24"
//               height="25"
//               viewBox="0 0 24 25"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <path
//                 d="M5 12.5H19"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//           </div>
//           {currentFaq === index && (
//             <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-[21px] rounded-xl bg-accent-light dark:bg-black">
//               <p className="flex-grow w-[804px] text-base text-left text-black dark:text-accent-foreground">
//                 <span className="flex-grow w-[804px] text-base text-left text-black dark:text-accent-foreground">
//                   {faq.answer}
//                 </span>
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//     </React.Fragment>
//   );
// };
//
// export default FaqSection;
