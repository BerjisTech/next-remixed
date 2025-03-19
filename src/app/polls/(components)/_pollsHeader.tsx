import React from "react";
import Image from "next/image";

const PollsHeader = () => {
  return (
    <>
      <header className="max-w-7xl mx-auto w-full rounded-3xl overflow-hidden px-4 md:px-8 xl:px-0 items-center">
        {/* Background Section */}
        <div className="relative bg-secondary px-6 md:px-12 overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"
            style={{
              borderRadius: "inherit", // Inherit border-radius from parent
            }}
          ></div>

          {/* Right image */}
          <div
            className="absolute right-0 top-0 h-full w-2/5 hidden md:block"
            style={{
              borderRadius: "inherit",
            }}
          >
            <Image
              src="/next/next_assets/images/polls/polls-hero.png"
              alt="Woman using a laptop"
              className="dark:mix-blend-multiply"
              layout="fill"
              objectFit="cover"
              objectPosition="left-bottom"
            />
          </div>

          <div className="relative z-10 py-4 md:py-12 md:w-[60%]">
            <div>
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-left font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
                  Quick Polls
                </h1>
                <p className="w-full text-sm sm:text-base text-left text-black dark:text-accent-foreground">
                  ProZ quick polls provide a quick, convenient (and unscientific!) way for
                  translators to exchange opinions and information related to their work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PollsHeader;
