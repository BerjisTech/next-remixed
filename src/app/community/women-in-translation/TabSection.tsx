import { useState } from "react";
import Image from "next/image";
import GetInvolved from "./GetInvolved";
import Engaged from "./Engaged";

interface TabsSectionProps {
  currentUserIsInCommunity: boolean;
}

const TabsSection: React.FC<TabsSectionProps> = ({ currentUserIsInCommunity }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("overview");

  // Function to switch tabs
  const switchTab = (tab: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto mb-8">
      {/* Tabs navigation */}
      <div className="flex justify-center space-x-4 mb-6 py-3 top-[75px] z-20 sticky bg-white/75 dark:bg-gray-800 backdrop-blur-md">
        {/* Tab 1: Overview */}
        <button
          className={`px-4 py-2 text-dark dark:text-gray-200 rounded-lg transition duration-300 ${
            activeTab === "overview"
              ? "bg-primary text-white hover:dark:text-gray-200"
              : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab("overview", e)}
        >
          Overview
        </button>

        {/* Tab 2: Get Involved */}
        {/* <button
                    className={`px-4 py-2 text-dark dark:text-gray-200 rounded-lg transition duration-300 ${
                        activeTab === "get_involved" ? "bg-primary text-white" : "hover:bg-accent"
                    }`}
                    onClick={(e) => switchTab("get_involved", e)}
                >
                    Get involved
                </button> */}

        {/* Tab 3: Engage */}
        <button
          className={`px-4 py-2 text-dark dark:text-gray-200 rounded-lg transition duration-300 ${
            activeTab === "engage" ? "bg-primary text-white" : "hover:bg-accent"
          }`}
          onClick={(e) => switchTab("engage", e)}
        >
          Who's in
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content p-4">
        {/* Overview Content */}
        {activeTab === "overview" && (
          <div className="flex flex-col justify-start items-start max-w-[1062px] mx-auto gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
                <div className="lg:w-1/2">
                  <Image
                    src="/next/next_assets/images/wit/wit-image-card-1.png"
                    alt="Woman using a laptop"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="lg:w-1/2">
                  <p className="text-3xl font-medium lg:text-left text-center text-[#344054] dark:text-gray-200">
                    The Women in translation program is an initiative aimed at supporting women in
                    the language industry. This program focuses on:
                  </p>
                </div>
              </div>

              {/* Boxes */}
              <div className="grid grid-cols-4 justify-start items-start gap-5">
                <div className="lg:col-span-1 md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#ffe1fd] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      Visibility and recognition
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      Highlighting the achievements and contributions of women in the language
                      field.
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#d9ecff] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      Professional development
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      Offering training, mentorship, and other resources to help women advance their
                      careers.
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#f4f4f3] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      Networking opportunities
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      Providing platforms for women linguists to connect, share experiences, and
                      collaborate.
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#dcefdc] dark:bg-black rounded-custom flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-3 flex">
                    <div className="self-stretch text-[#344054] dark:text-gray-200 text-lg font-semibold font-['Poppins'] leading-7">
                      Community building
                    </div>
                    <div className="self-stretch text-[#667085] dark:text-gray-100 text-base font-normal font-['Poppins'] leading-relaxed">
                      Creating a supportive and safe environment where women can discuss challenges,
                      seek advice, and find encouragement from peers.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Section */}
            <div className="flex mx-auto flex-col-reverse lg:flex-row items-center gap-3 mt-3">
              <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start gap-3">
                <h3 className="text-[#344054] dark:text-gray-300 text-4xl font-semibold leading-[44px] text-center lg:text-left">
                  {currentUserIsInCommunity ? "Participate" : "Join"}
                </h3>
                <p className="text-center lg:text-left text-[#344054] dark:text-gray-300 text-base font-medium leading-normal">
                  {currentUserIsInCommunity
                    ? "You are already a part of the Women in translation initiative! Head to the community to join the conversation, organize and attend events, ask for help and share your expertise."
                    : "The ProZ.com Women in translation initiative is continuously seeking enthusiastic volunteers, trainers, mentors, advocates, discussion participants, event hosts, among others."}
                </p>
                <a
                  href={
                    currentUserIsInCommunity
                      ? "https://community.proz.com/c/wit/5"
                      : "https://share.hsforms.com/1M49nmsiwQ-6MrZMMfGe86A2emm1"
                  }
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary rounded-xl shadow border border-primary hover:bg-[#3a7a7a] transition-colors duration-300"
                >
                  <div className="text-white text-lg font-semibold font-['Poppins'] leading-7">
                    {currentUserIsInCommunity ? "Participate" : "Get involved"}
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 relative"
                  >
                    <path
                      d="M9 18.8228L15 12.8228L9 6.82275"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="lg:w-1/2">
                <Image
                  src="/next/next_assets/images/wit/join.png"
                  alt="Join Image"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Support Section */}
            <div className="flex mx-auto flex-col lg:flex-row items-center gap-6 mt-3">
              <div className="lg:w-1/2 lg:mb-0 flex flex-col items-center lg:items-start gap-3">
                <Image
                  src="/next/next_assets/images/wit/support-wit.png"
                  alt="Support Image"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start gap-3">
                <h3 className="text-[#344054] dark:text-gray-300 text-4xl font-semibold leading-[44px] text-center lg:text-left">
                  Need help?
                </h3>
                <p className="text-center lg:text-left text-[#344054] dark:text-gray-200 text-base font-medium leading-normal">
                  If you are seeking support with any aspect of your career, the Women in
                  Translation initiative is here to help.
                </p>
                <a
                  href={
                    currentUserIsInCommunity
                      ? "https://community.proz.com/c/wit/5"
                      : "http://www.proz.com/help"
                  }
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary rounded-xl shadow border border-primary hover:bg-[#3a7a7a] transition-colors duration-300"
                >
                  <div className="text-white text-lg font-semibold font-['Poppins'] leading-7">
                    Get help
                  </div>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 relative"
                  >
                    <path
                      d="M9 18.8228L15 12.8228L9 6.82275"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Get Involved Content */}
        {activeTab === "get_involved" && <GetInvolved />}

        {/* Engage Content */}
        {activeTab === "engage" && <Engaged />}
      </div>
    </div>
  );
};

export default TabsSection;
