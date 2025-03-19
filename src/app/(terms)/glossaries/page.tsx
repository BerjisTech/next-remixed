import { Metadata } from "next";
import React from "react";
import GlossariesSideMenu from "@/app/(terms)/glossaries/_glossariesSideMenu";
//import StillPrototype from "@/components/shared/prototypeMessageBanner";
import { ListFilter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import MobileSideMenu from "@/app/(terms)/glossaries/_mobileGlossariesSideMenu";

export const metadata: Metadata = {
  title: "Glossaries",
  description: "Glossaries",
};

const Glossaries = () => {
  const cardsData = [
    {
      title: "CJKI Glossary of Agriculture Terms",
      tags: ["Agriculture", "English to Japanese"],
      seller: "The CJK Dictionary Institute",
      price: "$6.00",
      isFree: false,
    },
    {
      title: "Medical Glossary of Japanese Terms",
      tags: ["Medicine", "Japanese to English"],
      seller: "The Medical Terminology Group",
      price: "Free",
      isFree: true,
    },
    {
      title: "CJKI Legal Terms Glossary",
      tags: ["Law", "English to Chinese"],
      seller: "CJK Legal",
      price: "$12.00",
      isFree: false,
    },
    {
      title: "Education Glossary",
      tags: ["Education", "English to Spanish"],
      seller: "EduGlossaries",
      price: "Free",
      isFree: true,
    },
    {
      title: "Agriculture Terms 2024",
      tags: ["Agriculture", "Spanish to English"],
      seller: "AgriPro",
      price: "$8.00",
      isFree: false,
    },
    {
      title: "Technical Glossary",
      tags: ["Technology", "English to German"],
      seller: "Tech Lexicon Group",
      price: "Free",
      isFree: true,
    },
    {
      title: "CJKI Finance Glossary",
      tags: ["Finance", "English to French"],
      seller: "CJK Finance Team",
      price: "$10.00",
      isFree: false,
    },
    {
      title: "Glossary of Engineering Terms",
      tags: ["Engineering", "English to Russian"],
      seller: "EngDict",
      price: "Free",
      isFree: true,
    },
    {
      title: "CJKI Science Glossary",
      tags: ["Science", "French to English"],
      seller: "SciGroup",
      price: "$5.00",
      isFree: false,
    },
    {
      title: "Art Glossary",
      tags: ["Art", "English to Italian"],
      seller: "ArtLexicon",
      price: "Free",
      isFree: true,
    },
    {
      title: "CJKI Health Glossary",
      tags: ["Health", "German to English"],
      seller: "HealthGroup",
      price: "$9.00",
      isFree: false,
    },
    {
      title: "CJKI Cultural Terms",
      tags: ["Culture", "English to Korean"],
      seller: "CultureLexicon",
      price: "Free",
      isFree: true,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto my-8 gap-6 px-4 md:px-8 xl:px-0">
        <div className="col-span-3 hidden md:block">
          <GlossariesSideMenu />
        </div>
        {/*Cards feed*/}
        <div className="col-span-12 md:col-span-9 w-full">
          {/*<StillPrototype />*/}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {/*Filters*/}
              <div className="flex flex-grow py-4 gap-3 justify-between md:justify-end items-center">
                <div className="h-6 w-6 md:hidden">
                  <MobileSideMenu />
                </div>
                <div className="flex items-center space-x-2">
                  <p>Filters</p>
                  <ListFilter />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-primary text-2xl font-bold font-merriweather">
                  Featured glossaries for sale
                </p>
                <p className="text-grey-700 text-sm font-medium leading-tight">See all</p>
              </div>
              <div className="inline-flex">
                <div className="px-4 py-3 gap-3 rounded-2xl bg-secondary">
                  <p className="text-sm font-medium italic leading-normal">
                    Terminology packages available for free as part of the ProZ.com Plus package
                  </p>
                </div>
              </div>
              {/*Cards*/}
              <div className="">
                {/*<div className="flex flex-col p-5 bg-accent rounded-xl hover:border hover:border-accent-dark hover:shadow-md transition-all">*/}
                {/*    <h3 className="text-lg font-semibold text-gray-900">CJKI Glossary of Agriculture*/}
                {/*        Terms</h3>*/}
                {/*    <div className="flex flex-wrap gap-2 mt-3">*/}
                {/*        <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 mix-blend-multiply rounded-full">*/}
                {/*            Agriculture*/}
                {/*        </span>*/}
                {/*        <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 mix-blend-multiply rounded-full">*/}
                {/*            English to Japanese*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="mt-4">*/}
                {/*        <p className="text-sm font-medium text-gray-700">Seller</p>*/}
                {/*        <div className="flex items-center gap-2 mt-2">*/}
                {/*            <Image*/}
                {/*                src="/next/next_assets/images/kudoz/large_cjki_avatar.png"*/}
                {/*                alt="Seller Logo"*/}
                {/*                width="10"*/}
                {/*                height="10"*/}
                {/*                className="w-10 h-10 rounded-full"*/}
                {/*            />*/}
                {/*            <span className="text-sm font-medium text-teal-700">The CJK Dictionary Institute</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center justify-between mt-6">*/}
                {/*        <p className="text-primary-600 text-xl font-bold font-merriweather">$6.00</p>*/}
                {/*        <Button size="sm">Buy</Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="max-w-6xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className={`flex flex-col p-5 ${
                        card.isFree ? "bg-grey-50" : "bg-accent"
                      } rounded-xl hover:border ${
                        card.isFree ? "" : "hover:border-accent-dark"
                      } hover:shadow-md transition-all`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-sm font-medium ${
                              tag.includes("Agriculture") ||
                              tag.includes("Law") ||
                              tag.includes("Science")
                                ? "text-green-700 bg-green-100"
                                : "text-blue-700 bg-blue-100"
                            } mix-blend-multiply rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">Seller</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image
                            src="/next/next_assets/images/kudoz/large_cjki_avatar.png"
                            alt="Seller Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full"
                          />
                          <span className="text-sm font-medium text-teal-700">{card.seller}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        {card.isFree ? (
                          <>
                            <p className="text-primary-600 text-xl font-bold font-merriweather">
                              Free
                            </p>
                            <Button size="sm">Get</Button>
                          </>
                        ) : (
                          <>
                            <p className="text-primary-600 text-xl font-bold font-merriweather">
                              {card.price}
                            </p>
                            <Button size="sm">Buy</Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kudoz open glossary*/}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-primary text-2xl font-bold font-merriweather">
                  KudoZ open glossaries
                </p>
                <p className="text-grey-700 text-sm font-medium leading-tight">See all</p>
              </div>
              <div className="h-32 bg-grey-100 rounded-md"></div>
            </div>

            {/* Public personal glossaries*/}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-primary text-2xl font-bold font-merriweather">
                  Public personal glossaries
                </p>
                <p className="text-grey-700 text-sm font-medium leading-tight">See all</p>
              </div>
              <div className="h-32 bg-grey-100 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossaries;
