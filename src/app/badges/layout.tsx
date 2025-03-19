import React from "react";
import BadgesHeroSection from "./_heroSection";

export default function BadgesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-7xl m-auto my-5">
      <BadgesHeroSection />
      <div>{children}</div>
    </div>
  );
}
