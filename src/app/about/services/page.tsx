import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProZ Services",
  description:
    "Serving the world's largest community of translators, ProZ delivers a comprehensive network of essential services, resources and experiences that enhance the lives of its members.",
};

const cardsData = [
  {
    href: "/managed-services",
    bgImage: "/next/next_assets/images/services/managed-services.png",
    text: "ProZ Managed Services",
  },
  {
    href: "/community/proz-pro-bono",
    bgImage: "/next/next_assets/images/services/pro-bono.png",
    text: "ProZ Pro Bono",
  },
  {
    href: "/learn",
    bgImage: "/next/next_assets/images/services/proz-learn.png",
    text: "ProZ Learn",
    textColor: "#1D75BC",
  },
  {
    href: "/pastey",
    bgImage: "/next/next_assets/images/services/proz-pastey.svg",
    text: "ProZ Pastey",
  },
  {
    href: "/prozpay",
    bgImage: "/next/next_assets/images/services/proz-pay.png",
    text: "ProZ*Pay",
    textColor: "#3C7879",
  },
  { href: "/360", bgImage: "/next/next_assets/images/services/proz-360.png", text: "ProZ 360" },
];

const ProZServices = () => {
  return (
    <div>
      {/* <!--Hero--> */}
      <div className="relative bg-primary-50 py-12 overflow-hidden dark:bg-grey-900">
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col px-6 relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center">
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
              ProZ Services
            </span>
          </h1>
          <p className="font-poppins text-xl text-center text-grey-700 dark:text-grey-200">
            Serving the world's largest community of translators, ProZ delivers a comprehensive
            network of essential services, resources and experiences that enhance the lives of its
            members.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Link key={index} href={card.href}>
              <div
                className="h-64 bg-cover overflow-hidden bg-center rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              >
                <h2
                  className="font-bold text-5xl leading-[60px] tracking-tight"
                  style={{ color: card.textColor || "white" }}
                >
                  {card.text}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProZServices;
