import React from "react";

const Page = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)]">
      <div className="absolute z-1 w-full h-full flex items-start justify-start">
        <div className="bg-primary-200 w-[500px] h-[500px] rounded-lg"></div>
      </div>
      <div className="absolute z-3 w-full h-full flex items-center justify-center">
        <div className="bg-primary-300 w-[500px] h-[500px] rounded-lg"></div>
      </div>
      <div className="absolute z-2 w-full h-full flex items-start justify-end">
        <div className="bg-primary-400 w-[500px] h-[500px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Page;
