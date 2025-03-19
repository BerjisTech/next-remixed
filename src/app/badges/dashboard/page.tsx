import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-2 my-5">
      <p className="bg-primary-50 text-gray-700 p-4 rounded-custom flex items-center gap-2">
        <Image
          src="/next/next_assets/images/icons/puzzle-piece-01.svg"
          alt="Puzzle icon"
          width="24"
          height="24"
        />
        <i>This page is still a prototype. It will be functional soon!</i>
      </p>

      <div className="grid gap-4 rounded-custom p-6 w-full bg-accent my-4">
        <div className="flex flex-col gap-3">
          <p className="text-primary-500 text-2xl font-bold font-merriweather">Dashboard</p>
          <p className="text-base text-gray-700">
            Here users can manage their badges and certifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
