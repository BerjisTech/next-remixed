import type { Metadata } from "next";
import React from "react";
import _pollsSideMenu from "@/app/polls/(components)/_pollsSideMenu";
import _pollsHeader from "@/app/polls/(components)/_pollsHeader";
import PollsMobileSideMenu from "@/app/polls/(components)/_mobilePollsSideMenu";

export const metadata: Metadata = {
  title: "Quick Polls",
  description:
    "ProZ quick polls provide a quick, convenient (and unscientific!) way for translators to exchange opinions.",
};

export default function PollsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[calc(100vh-300px)] pt-8">
      <_pollsHeader />
      <div className="grid grid-cols-12 max-w-7xl mx-auto md:my-8 gap-6 pt-6 md:pt-0 px-4 md:px-8 xl:px-0">
        <div className="col-span-3 hidden md:block">
          <_pollsSideMenu />
        </div>

        {/* Main feed */}
        <div className="col-span-12 md:col-span-9 w-full">
          <div className="fixed bottom-6 right-6 h-12 w-12 z-10 md:hidden">
            {/* Mobile menu */}
            <PollsMobileSideMenu />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
