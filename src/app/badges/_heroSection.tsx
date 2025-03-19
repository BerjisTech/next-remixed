import React from "react";
import Image from "next/image";
import TabsSection from "./_tabsSection";

const BadgesHeroSection: React.FC = () => {
  return (
    <>
      <header className="max-w-7xl mx-auto w-full rounded-3xl overflow-hidden px-4 md:px-8 xl:px-0">
        {/* Background Section */}
        <div className="relative bg-secondary pt-12 px-6 md:px-12 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10 rounded-[inherit]"></div>
          <div className="absolute right-0 top-0 h-full w-2/5 hidden md:block rounded-[inherit]">
            {/* Image */}
            <Image
              src="/next/next_assets/images/image-109.png"
              alt="Woman using a laptop"
              className="dark:mix-blend-multiply z-30 object-cover object-left-bottom"
              layout="fill"
            />
          </div>

          <div className="relative z-10">
            <div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl text-left font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
                  Badges & certification
                </h1>
                <p className="w-full text-sm sm:text-base text-left text-black dark:text-accent-foreground">
                  Showcase your achievements and highlight your expertise
                </p>
              </div>
            </div>
            <TabsSection />
            {/* Navigation Tabs */}
            {/* Divider */}
            <div className="bg-primary-200 h-[1px]"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BadgesHeroSection;
