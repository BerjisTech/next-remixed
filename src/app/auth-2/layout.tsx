import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-start items-center">
      <div className="hidden xl:flex flex-col justify-center h-screen relative overflow-hidden bg-primary dark:bg-primary basis-1/2">
        <Image
          src="/next/next_assets/images/svg/login.svg"
          alt="login.svg"
          width={152}
          height={152}
          className="w-full h-full object-cover"
        />

        <div className="relative w-full mt-[-50px] ml-20 min-h-[30rem]">
          {[
            { src: "/next/next_assets/images/image-4.jpeg", left: 0, top: 37.94 },
            { src: "/next/next_assets/images/image-5-2.jpeg", left: 163.67, top: 167.38 },
            { src: "/next/next_assets/images/image-5-3.jpeg", left: 333, top: 229 },
            { src: "/next/next_assets/images/image-3.jpeg", left: 501.87, top: 130.04 },
            { src: "/next/next_assets/images/image-6.jpeg", left: 0, top: 205.34 },
            { src: "/next/next_assets/images/image-5.jpeg", left: 163.67, top: -0.02 },
            { src: "/next/next_assets/images/image-5-4.jpeg", left: 333, top: 45 },
          ].map(({ src, left, top }, index) => (
            <div
              key={index}
              className="w-[152.47px] h-[152.47px] absolute overflow-hidden rounded-[18.67px] bg-[#71b1b1]"
              style={{ left: `${left}px`, top: `${top}px` }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={152}
                height={152}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className=" text-4xl font-medium text-left text-white ml-20">
          The online Community and Workplace for Language Professionals
        </p>
      </div>
      <div className="flex items-center justify-center basis-1/2">{children}</div>
    </div>
  );
}
