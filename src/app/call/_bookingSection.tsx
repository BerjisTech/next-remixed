"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookingSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <section className="relative bg-center bg-cover py-16 my-8 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://go.proz.com/hubfs/iStock-1307932120.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4">
        <div className="md:w-1/2 ml-auto">
          <Image
            src="/next/next_assets/images/proz-logo-white.png"
            alt="ProZ.com"
            width={48}
            height={48}
            className="h-12 mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Reserve your call today</h2>
          <p className="text-lg">
            Meet a member of the ProZ.com team from the comfort of your home, during a break at the
            office, or on your way to somewhere, and move forward in your success journey.
          </p>
        </div>
      </div>
    </section>
  );
}
