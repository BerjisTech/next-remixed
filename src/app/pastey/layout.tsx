import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastey | Your AI Companion for Translators",
  description:
    "Pastey is a companion app designed to support professional translators, allowing seamless integration with AI for translation, SEO, writing, and more. Download Pastey for free and enhance your workflow with interactive AI functionalities.",
  openGraph: {
    title: "Pastey | AI Companion for Translators",
    description:
      "Pastey is designed for professional translators to integrate AI into their workflow. Download Pastey for free to unlock AI-powered translation and other advanced features.",
    url: "https://proz.com/pastey",
    images: [
      {
        url: "/next/next_assets/images/pastey-logo.svg",
        alt: "Pastey Logo",
        width: 397,
        height: 107,
      },
      {
        url: "/next/next_assets/images/laptop-pastey.png",
        alt: "Laptop displaying Pastey app",
        width: 600,
        height: 559,
      },
    ],
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
