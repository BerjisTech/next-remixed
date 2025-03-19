"use client";
import React, { useState, useEffect } from "react";
import EmployeeListCard from "./_employeeCard";
import ReviewDrawer from "@/app/reviews/_reviewDrawer";
import { useContentHook } from "@/hooks/useContentHook";
import axios from "axios";
import { getApiBaseUrl } from "@/utils/helpers";
import BusinessEditForm from "../businessUpdater/_businessEditForm";
import { BusinessProfile } from "@/interfaces/business";
import Image from "next/image";

type BusinessPageProps = {
  params: {
    businessId: string;
  };
};

const SingleBusinessPage = ({ params }: BusinessPageProps) => {
  const [currentTab, setCurrentTab] = useState("employees");
  const { setDrawerVisibility } = useContentHook();
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);
  const [business, setBusiness] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        setLoading(true);
        const url = getApiBaseUrl("fetch_business_data", true, { business_id: params?.businessId });

        const response = await axios.get(url, {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(response.data);
        response.data ? setBusiness(response.data) : null;

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching business data:", error);
      }
    };

    fetchBusinessData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <p>Loading business data...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-start items-center relative">
      <div className="w-full h-[366px] left-0 top-[94px] overflow-hidden rounded-bl-[45px] rounded-br-[45px]">
        <div
          className="w-full h-[366px] flex items-start justify-end p-[30px]"
          style={{ background: "linear-gradient(52.95deg, #8c1fbf 11.85%, #1f91e3 89.65%)" }}
        >
          <div className="flex justify-center items-center opacity-80 gap-2 px-4 py-[7px] rounded-lg bg-accent border-[0.5px] border-white">
            <p className="text-xs text-left text-[#101828]">ProZ Business Member (PLUS)</p>
          </div>
        </div>
      </div>

      <div className="px-8 flex flex-col xl:flex-row justify-start items-start gap-5 mt-[-275px] w-full">
        <div className="w-full flex flex-col justify-start items-start flex-grow gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
              <div className="w-full flex flex-col md:flex-row justify-start items-start flex-grow gap-8 p-8 rounded-2xl bg-white border border-accent-light dark:bg-black">
                <div className="flex flex-col justify-start items-start flex-grow relative gap-6 w-full">
                  {/* Existing business info section */}
                  <div className="w-full flex flex-col justify-start items-start flex-grow gap-8 p-8 rounded-2xl bg-white border border-accent-light dark:bg-black">
                    <div className="flex flex-col justify-start items-start flex-grow relative gap-6 w-full">
                      {/* Current business info content */}
                    </div>
                  </div>

                  {/* New BusinessEditForm section */}
                  <div className="w-full flex flex-col justify-start items-start gap-4 mt-4">
                    <BusinessEditForm
                      business={business as BusinessProfile}
                      onUpdate={(updatedData) => {
                        setBusiness((prev) =>
                          prev
                            ? {
                                ...prev,
                                ...updatedData,
                              }
                            : null
                        );
                      }}
                    />
                  </div>

                  <div className="flex flex-col justify-start items-start relative gap-2">
                    <div className="flex flex-col xl:flex-row justify-start items-start xl:items-center relative gap-6">
                      <p className="text-5xl lg:text-6xl font-medium text-left text-dark-blue-hue dark:text-white">
                        {business?.common_name}
                      </p>
                      <div className="flex flex-col justify-center items-start relative gap-0.5">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                            stroke="#4D9D9D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                            stroke="#4D9D9D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <p className="text-base text-center text-dark-blue-hue dark:text-white">
                          {business?.city}
                        </p>
                      </div>
                    </div>
                    <p className="w-full text-base font-medium text-left text-dark-blue-hue dark:text-white">
                      {business?.common_name}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-center gap-2">
                    <div className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border border-accent">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g clipPath="url(#clip0_6274_10763)">
                          <path
                            d="M11.7094 4.99935C12.5233 5.15815 13.2713 5.55623 13.8577 6.14263C14.4441 6.72903 14.8422 7.47707 15.001 8.29102M11.7094 1.66602C13.4004 1.85388 14.9773 2.61116 16.1812 3.81352C17.3851 5.01588 18.1444 6.59186 18.3344 8.28268M8.5235 11.5519C7.52219 10.5506 6.73153 9.41839 6.15153 8.21037C6.10164 8.10647 6.0767 8.05451 6.05753 7.98877C5.98943 7.75514 6.03835 7.46826 6.18003 7.2704C6.21989 7.21472 6.26752 7.16709 6.36278 7.07183C6.65412 6.78049 6.79979 6.63483 6.89503 6.48834C7.25419 5.93593 7.25419 5.22378 6.89503 4.67138C6.79979 4.52489 6.65412 4.37923 6.36278 4.08789L6.20039 3.92549C5.75752 3.48263 5.53609 3.26119 5.29827 3.1409C4.8253 2.90168 4.26675 2.90168 3.79378 3.1409C3.55596 3.26119 3.33453 3.48263 2.89166 3.92549L2.7603 4.05686C2.31895 4.49821 2.09827 4.71889 1.92973 5.01891C1.74271 5.35183 1.60825 5.86891 1.60938 6.25076C1.61041 6.59488 1.67716 6.83007 1.81067 7.30044C2.52814 9.82827 3.88187 12.2136 5.87185 14.2036C7.86184 16.1935 10.2471 17.5473 12.775 18.2647C13.2453 18.3983 13.4805 18.465 13.8246 18.466C14.2065 18.4672 14.7236 18.3327 15.0565 18.1457C15.3565 17.9771 15.5772 17.7565 16.0186 17.3151L16.1499 17.1837C16.5928 16.7409 16.8142 16.5194 16.9345 16.2816C17.1737 15.8087 17.1737 15.2501 16.9345 14.7771C16.8142 14.5393 16.5928 14.3179 16.1499 13.875L15.9875 13.7126C15.6962 13.4213 15.5505 13.2756 15.404 13.1804C14.8516 12.8212 14.1395 12.8212 13.5871 13.1804C13.4406 13.2756 13.2949 13.4213 13.0036 13.7126C12.9083 13.8079 12.8607 13.8555 12.805 13.8954C12.6072 14.0371 12.3203 14.086 12.0866 14.0179C12.0209 13.9987 11.9689 13.9738 11.865 13.9239C10.657 13.3439 9.52482 12.5532 8.5235 11.5519Z"
                            stroke="#4D9D9D"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_6274_10763">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {business?.contact_phone && (
                        <a
                          href={`tel:${business.contact_phone.replace(/[^\d+]/g, "")}`}
                          className="text-sm font-semibold text-left text-primary hover:underline transition-all"
                        >
                          {business.contact_phone}
                        </a>
                      )}
                    </div>
                    {business?.website_url && (
                      <div className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border border-accent">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 relative"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g clipPath="url(#clip0_6274_21674)">
                            <path
                              d="M1.66797 9.99935H18.3346M1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327M1.66797 9.99935C1.66797 5.39698 5.39893 1.66602 10.0013 1.66602M18.3346 9.99935C18.3346 14.6017 14.6037 18.3327 10.0013 18.3327M18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602M10.0013 1.66602C12.0857 3.94798 13.2703 6.90938 13.3346 9.99935C13.2703 13.0893 12.0857 16.0507 10.0013 18.3327M10.0013 1.66602C7.9169 3.94798 6.73234 6.90938 6.66797 9.99935C6.73234 13.0893 7.9169 16.0507 10.0013 18.3327"
                              stroke="#4D9D9D"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_6274_21674">
                              <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <a
                          href={business.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-left text-primary hover:underline transition-all"
                        >
                          {business.website_url.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )}
                  </div>
                  <p className="w-full text-sm text-left text-dark-blue-hue">
                    <span className="w-full text-sm text-left text-dark-blue-hue dark:text-white">
                      {business?.common_name}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center relative gap-2.5">
                  <div className="flex flex-col justify-center items-start relative overflow-hidden gap-2.5 rounded-[17.65px] border-[3.53px] border-accent w-[200px] h-[200px]">
                    {business?.logo_url && !errorLoadingImage ? (
                      <Image
                        src={business.logo_url}
                        alt={`${business.common_name} logo`}
                        className="w-full h-full object-contain bg-white"
                        width={200}
                        height={200}
                        onError={() => setErrorLoadingImage(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent/10">
                        <span className="text-4xl font-bold text-accent-foreground">
                          {business?.common_name?.charAt(0) || "B"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 py-2 px-4 bg-accent/10 rounded-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M16.667 9.16667v-2.5c0-.92047-.7462-1.66667-1.6667-1.66667H4.16699c-.92047 0-1.66667.7462-1.66667 1.66667v6.66663c0 .9205.7462 1.6667 1.66667 1.6667h10.83331c.9205 0 1.6667-.7462 1.6667-1.6667v-2.5"
                        stroke="#4D9D9D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 7.5L12.5 12.5M12.5 7.5L7.5 12.5"
                        stroke="#4D9D9D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium text-primary dark:text-accent-foreground">
                      Verified Business
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#eaeaea] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="px-3 py-2 bg-[#fbfafa] rounded-lg justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/next/next_assets/images/icons/users-01.svg"
                      alt="users-01"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-dark text-sm font-normal leading-relaxed">More than 500</div>
                </div>
                <div className="px-3 py-2 bg-[#fbfafa] rounded-lg justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/next/next_assets/images/icons/carbon_industry.svg"
                      alt="Industry"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-dark text-sm font-normal leading-relaxed">
                    Wide range of industries served
                  </div>
                </div>
                <div className="px-3 py-2 bg-[#fbfafa] rounded-lg justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/next/next_assets/images/icons/file-05.svg"
                      alt="Languages"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-dark text-sm font-normal leading-relaxed">
                    Wide range of languages
                  </div>
                </div>
                <div className="px-3 py-2 bg-[#fbfafa] rounded-lg justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/next/next_assets/images/icons/headphones-02.svg"
                      alt="Support"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-dark text-sm font-normal leading-relaxed">
                    10,000+ words/day
                  </div>
                </div>
                <div className="px-3 py-2 bg-[#fbfafa] rounded-lg justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/next/next_assets/images/icons/translate-02.svg"
                      alt="Translation"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="text-dark text-sm font-normal leading-relaxed">
                    8 services offered
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:bg-black w-full flex flex-col justify-center items-start gap-2 p-4 rounded-2xl bg-accent border border-accent">
              <div className="flex justify-start items-center relative gap-3">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <ellipse
                    cx="20"
                    cy="20.1869"
                    rx="20"
                    ry="20.1869"
                    fill="url(#pattern0_5884_35190)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_5884_35190"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_5884_35190"
                        transform="matrix(0.00197138 0 0 0.00193504 -0.00934579 0)"
                      />
                    </pattern>
                    <image
                      id="image0_5884_35190"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <div className="flex flex-col justify-center items-start relative gap-2">
                  <p className="text-lg font-semibold text-left dark:text-white text-primary">
                    ProZ member for x years
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4 p-6 rounded-2xl bg-white border border-accent-light dark:bg-black">
              <div className="w-full overflow-x-auto md:overflow-x-hidden flex justify-start items-center gap-16 p-2 rounded-xl bg-accent border border-accent">
                <div className="flex justify-start items-center flex-grow gap-2">
                  <div
                    onClick={() => setCurrentTab("ratings_as_a_provider")}
                    className={`cursor-pointer flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg ${currentTab == "ratings_as_a_provider" ? "bg-primary text-white" : "text-dark-blue-hue"} hover:bg-primary hover:text-white`}
                  >
                    <p className="text-base font-semibold text-left">Ratings as a provider</p>
                  </div>
                  <div
                    onClick={() => setCurrentTab("ratings_as_an_outsourcer")}
                    className={`cursor-pointer flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg ${currentTab == "ratings_as_an_outsourcer" ? "bg-primary text-white" : "text-dark-blue-hue"} hover:bg-primary hover:text-white`}
                  >
                    <p className="text-base font-semibold text-left">Ratings as an outsourcer</p>
                  </div>
                  <div
                    onClick={() => setCurrentTab("employees")}
                    className={`cursor-pointer flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg ${currentTab == "employees" ? "bg-primary text-white" : "text-dark-blue-hue"} hover:bg-primary hover:text-white`}
                  >
                    <p className="text-base font-semibold text-left">Employees</p>
                  </div>
                </div>
                <div className="flex justify-center items-center relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-xl bg-accent border border-accent">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M7.5013 3.28906V2.03906M4.21852 4.58961L3.33464 3.70573M4.21852 11.2057L3.33464 12.0896M10.8346 4.58961L11.7185 3.70573M2.91797 7.8724H1.66797M7.08464 7.45573L10.5106 18.1039L12.918 15.6965L15.9272 18.7057L18.3346 16.2983L15.3254 13.2891L17.7328 10.8817L7.08464 7.45573Z"
                      stroke="#4D9D9D"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="text-base font-semibold text-left text-primary">Activity</p>
                </div>
              </div>

              {currentTab == "ratings_as_a_provider" && (
                <div className="w-full flex justify-start items-center relative gap-1 px-3 py-2 rounded-lg bg-accent">
                  <p className="flex-grow w-full text-sm font-medium text-left text-primary">
                    Here we'll show a list of ratings as a provider
                  </p>
                </div>
              )}

              {currentTab == "ratings_as_an_outsourcer" && (
                <div className="w-full flex justify-start items-center relative gap-1 px-3 py-2 rounded-lg bg-accent">
                  <p className="flex-grow w-full text-sm font-medium text-left text-primary">
                    Here we'll show a list of ratings as an outsourcer
                  </p>
                </div>
              )}

              {currentTab == "employees" && (
                <div className="w-full flex justify-start items-center relative gap-1 px-3 py-2 rounded-lg bg-accent">
                  <div className="w-full h-min flex-wrap justify-start items-start gap-3 inline-flex">
                    <EmployeeListCard />
                  </div>
                </div>
              )}
            </div>
            <div
              className="w-full flex flex-col justify-start items-start relative gap-4 p-6 rounded-xl bg-white border border-accent dark:bg-black"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05);" }}
            >
              <p className="text-base font-semibold text-left text-dark-blue-hue dark:text-white">
                CPD (Continuing Professional Development)
              </p>
              <div className="flex justify-start items-center relative gap-1 px-3 py-2 rounded-lg bg-accent">
                <p className="text-sm font-medium text-left text-primary">
                  Here we'll show CPD activity for employees of this business
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-auto flex flex-col justify-center xl:justify-start items-start gap-8">
          <div
            className="w-full flex flex-col justify-center xl:justify-start items-start gap-8 px-6 py-8 rounded-2xl bg-white border border-[#eaecf0] dark:bg-black"
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03);",
            }}
          >
            <div className="w-full flex flex-col justify-center xl:justify-start items-start relative gap-3">
              <p className="w-64 text-xl font-semibold text-center text-dark-blue-hue dark:text-white">
                Reviews
              </p>
              <div className="w-full flex flex-row xl:flex-col justify-center xl:justify-start items-start gap-2">
                <div className="w-full flex flex-col justify-center items-center relative overflow-hidden gap-2 px-6 py-3 rounded-xl bg-accent border-[0.5px] border-white">
                  <p className="text-xs text-left text-dark-blue-hue">as an outsourcer</p>
                  <div className="w-full flex justify-center items-center relative gap-2">
                    <div className="flex justify-center items-start relative gap-[3.3392856121063232px]">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M14.9213 8.17673L12.1038 10.6079L12.9622 14.2438C13.0096 14.4412 12.9974 14.6481 12.9272 14.8386C12.857 15.029 12.7319 15.1944 12.5677 15.3138C12.4036 15.4332 12.2077 15.5013 12.0049 15.5094C11.8021 15.5175 11.6014 15.4654 11.4282 15.3595L8.26636 13.4136L5.1026 15.3595C4.92943 15.4648 4.72899 15.5164 4.52653 15.508C4.32407 15.4995 4.12863 15.4314 3.96482 15.3121C3.80101 15.1928 3.67616 15.0277 3.60599 14.8376C3.53582 14.6475 3.52347 14.4409 3.57049 14.2438L4.43203 10.6079L1.6145 8.17673C1.46129 8.04431 1.35049 7.86969 1.29592 7.67467C1.24136 7.47966 1.24546 7.27289 1.30772 7.08019C1.36997 6.88749 1.48761 6.7174 1.64595 6.59116C1.80429 6.46493 1.99632 6.38814 2.19804 6.37038L5.89213 6.07235L7.31717 2.6237C7.3943 2.43575 7.52558 2.27499 7.69432 2.16184C7.86306 2.04869 8.06163 1.98828 8.26479 1.98828C8.46796 1.98828 8.66653 2.04869 8.83527 2.16184C9.004 2.27499 9.13529 2.43575 9.21242 2.6237L10.6368 6.07235L14.3309 6.37038C14.533 6.38748 14.7256 6.46384 14.8845 6.5899C15.0435 6.71596 15.1616 6.88612 15.2243 7.07905C15.2869 7.27199 15.2912 7.47911 15.2367 7.67449C15.1821 7.86986 15.0711 8.04479 14.9176 8.17735L14.9213 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.2885 8.17673L12.471 10.6079L13.3294 14.2438C13.3768 14.4412 13.3646 14.6481 13.2944 14.8386C13.2242 15.029 13.0991 15.1944 12.9349 15.3138C12.7708 15.4332 12.5749 15.5013 12.3721 15.5094C12.1693 15.5175 11.9686 15.4654 11.7954 15.3595L8.63355 13.4136L5.46978 15.3595C5.29662 15.4648 5.09618 15.5164 4.89372 15.508C4.69125 15.4995 4.49581 15.4314 4.33201 15.3121C4.1682 15.1928 4.04335 15.0277 3.97318 14.8376C3.90301 14.6475 3.89066 14.4409 3.93768 14.2438L4.79921 10.6079L1.98169 8.17673C1.82848 8.04431 1.71767 7.86969 1.66311 7.67467C1.60855 7.47966 1.61265 7.27289 1.6749 7.08019C1.73715 6.88749 1.8548 6.7174 2.01314 6.59116C2.17148 6.46493 2.36351 6.38814 2.56523 6.37038L6.25932 6.07235L7.68435 2.6237C7.76149 2.43575 7.89277 2.27499 8.06151 2.16184C8.23025 2.04869 8.42882 1.98828 8.63198 1.98828C8.83514 1.98828 9.03372 2.04869 9.20245 2.16184C9.37119 2.27499 9.50247 2.43575 9.57961 2.6237L11.004 6.07235L14.6981 6.37038C14.9002 6.38748 15.0928 6.46384 15.2517 6.5899C15.4107 6.71596 15.5288 6.88612 15.5915 7.07905C15.6541 7.27199 15.6584 7.47911 15.6039 7.67449C15.5493 7.86986 15.4383 8.04479 15.2848 8.17735L15.2885 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.6518 8.17673L12.8343 10.6079L13.6927 14.2438C13.7401 14.4412 13.7279 14.6481 13.6576 14.8386C13.5874 15.029 13.4624 15.1944 13.2982 15.3138C13.1341 15.4332 12.9382 15.5013 12.7354 15.5094C12.5326 15.5175 12.3319 15.4654 12.1587 15.3595L8.99683 13.4136L5.83306 15.3595C5.6599 15.4648 5.45946 15.5164 5.257 15.508C5.05454 15.4995 4.85909 15.4314 4.69529 15.3121C4.53148 15.1928 4.40663 15.0277 4.33646 14.8376C4.26629 14.6475 4.25394 14.4409 4.30096 14.2438L5.16249 10.6079L2.34497 8.17673C2.19176 8.04431 2.08095 7.86969 2.02639 7.67467C1.97183 7.47966 1.97593 7.27289 2.03818 7.08019C2.10044 6.88749 2.21808 6.7174 2.37642 6.59116C2.53476 6.46493 2.72679 6.38814 2.92851 6.37038L6.6226 6.07235L8.04764 2.6237C8.12477 2.43575 8.25605 2.27499 8.42479 2.16184C8.59353 2.04869 8.7921 1.98828 8.99526 1.98828C9.19842 1.98828 9.397 2.04869 9.56574 2.16184C9.73447 2.27499 9.86576 2.43575 9.94289 2.6237L11.3673 6.07235L15.0614 6.37038C15.2635 6.38748 15.4561 6.46384 15.615 6.5899C15.7739 6.71596 15.8921 6.88612 15.9548 7.07905C16.0174 7.27199 16.0217 7.47911 15.9671 7.67449C15.9126 7.86986 15.8016 8.04479 15.6481 8.17735L15.6518 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.019 8.17673L12.2015 10.6079L13.0599 14.2438C13.1072 14.4412 13.0951 14.6481 13.0248 14.8386C12.9546 15.029 12.8295 15.1944 12.6654 15.3138C12.5012 15.4332 12.3054 15.5013 12.1026 15.5094C11.8998 15.5175 11.6991 15.4654 11.5259 15.3595L8.36402 13.4136L5.20025 15.3595C5.02709 15.4648 4.82665 15.5164 4.62419 15.508C4.42172 15.4995 4.22628 15.4314 4.06247 15.3121C3.89867 15.1928 3.77382 15.0277 3.70365 14.8376C3.63348 14.6475 3.62113 14.4409 3.66815 14.2438L4.52968 10.6079L1.71216 8.17673C1.55895 8.04431 1.44814 7.86969 1.39358 7.67467C1.33902 7.47966 1.34312 7.27289 1.40537 7.08019C1.46762 6.88749 1.58527 6.7174 1.74361 6.59116C1.90195 6.46493 2.09397 6.38814 2.2957 6.37038L5.98978 6.07235L7.41482 2.6237C7.49196 2.43575 7.62324 2.27499 7.79198 2.16184C7.96072 2.04869 8.15929 1.98828 8.36245 1.98828C8.56561 1.98828 8.76418 2.04869 8.93292 2.16184C9.10166 2.27499 9.23294 2.43575 9.31008 2.6237L10.7345 6.07235L14.4286 6.37038C14.6307 6.38748 14.8233 6.46384 14.9822 6.5899C15.1411 6.71596 15.2593 6.88612 15.3219 7.07905C15.3846 7.27199 15.3889 7.47911 15.3343 7.67449C15.2798 7.86986 15.1688 8.04479 15.0152 8.17735L15.019 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.394 8.17673L12.5765 10.6079L13.4349 14.2438C13.4822 14.4412 13.4701 14.6481 13.3998 14.8386C13.3296 15.029 13.2045 15.1944 13.0404 15.3138C12.8762 15.4332 12.6804 15.5013 12.4776 15.5094C12.2748 15.5175 12.0741 15.4654 11.9009 15.3595L8.73902 13.4136L5.57525 15.3595C5.40209 15.4648 5.20165 15.5164 4.99919 15.508C4.79672 15.4995 4.60128 15.4314 4.43747 15.3121C4.27367 15.1928 4.14882 15.0277 4.07865 14.8376C4.00848 14.6475 3.99613 14.4409 4.04315 14.2438L4.90468 10.6079L2.08716 8.17673C1.93395 8.04431 1.82314 7.86969 1.76858 7.67467C1.71402 7.47966 1.71812 7.27289 1.78037 7.08019C1.84262 6.88749 1.96027 6.7174 2.11861 6.59116C2.27695 6.46493 2.46897 6.38814 2.6707 6.37038L6.36478 6.07235L7.78982 2.6237C7.86696 2.43575 7.99824 2.27499 8.16698 2.16184C8.33572 2.04869 8.53429 1.98828 8.73745 1.98828C8.94061 1.98828 9.13918 2.04869 9.30792 2.16184C9.47666 2.27499 9.60794 2.43575 9.68508 2.6237L11.1095 6.07235L14.8036 6.37038C15.0057 6.38748 15.1983 6.46384 15.3572 6.5899C15.5161 6.71596 15.6343 6.88612 15.6969 7.07905C15.7596 7.27199 15.7639 7.47911 15.7093 7.67449C15.6548 7.86986 15.5438 8.04479 15.3902 8.17735L15.394 8.17673Z"
                          fill="#BABABC"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-right text-dark-blue-hue">4.1</p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center relative overflow-hidden gap-2 px-6 py-3 rounded-xl bg-accent border-[0.5px] border-white">
                  <p className="text-xs text-left text-dark-blue-hue">as a provider</p>
                  <div className="flex justify-center items-center relative gap-2">
                    <div className="flex justify-center items-start relative gap-[3.3392856121063232px]">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M14.9213 8.17673L12.1038 10.6079L12.9622 14.2438C13.0096 14.4412 12.9974 14.6481 12.9272 14.8386C12.857 15.029 12.7319 15.1944 12.5677 15.3138C12.4036 15.4332 12.2077 15.5013 12.0049 15.5094C11.8021 15.5175 11.6014 15.4654 11.4282 15.3595L8.26636 13.4136L5.1026 15.3595C4.92943 15.4648 4.72899 15.5164 4.52653 15.508C4.32407 15.4995 4.12863 15.4314 3.96482 15.3121C3.80101 15.1928 3.67616 15.0277 3.60599 14.8376C3.53582 14.6475 3.52347 14.4409 3.57049 14.2438L4.43203 10.6079L1.6145 8.17673C1.46129 8.04431 1.35049 7.86969 1.29592 7.67467C1.24136 7.47966 1.24546 7.27289 1.30772 7.08019C1.36997 6.88749 1.48761 6.7174 1.64595 6.59116C1.80429 6.46493 1.99632 6.38814 2.19804 6.37038L5.89213 6.07235L7.31717 2.6237C7.3943 2.43575 7.52558 2.27499 7.69432 2.16184C7.86306 2.04869 8.06163 1.98828 8.26479 1.98828C8.46796 1.98828 8.66653 2.04869 8.83527 2.16184C9.004 2.27499 9.13529 2.43575 9.21242 2.6237L10.6368 6.07235L14.3309 6.37038C14.533 6.38748 14.7256 6.46384 14.8845 6.5899C15.0435 6.71596 15.1616 6.88612 15.2243 7.07905C15.2869 7.27199 15.2912 7.47911 15.2367 7.67449C15.1821 7.86986 15.0711 8.04479 14.9176 8.17735L14.9213 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.2885 8.17673L12.471 10.6079L13.3294 14.2438C13.3768 14.4412 13.3646 14.6481 13.2944 14.8386C13.2242 15.029 13.0991 15.1944 12.9349 15.3138C12.7708 15.4332 12.5749 15.5013 12.3721 15.5094C12.1693 15.5175 11.9686 15.4654 11.7954 15.3595L8.63355 13.4136L5.46978 15.3595C5.29662 15.4648 5.09618 15.5164 4.89372 15.508C4.69125 15.4995 4.49581 15.4314 4.33201 15.3121C4.1682 15.1928 4.04335 15.0277 3.97318 14.8376C3.90301 14.6475 3.89066 14.4409 3.93768 14.2438L4.79921 10.6079L1.98169 8.17673C1.82848 8.04431 1.71767 7.86969 1.66311 7.67467C1.60855 7.47966 1.61265 7.27289 1.6749 7.08019C1.73715 6.88749 1.8548 6.7174 2.01314 6.59116C2.17148 6.46493 2.36351 6.38814 2.56523 6.37038L6.25932 6.07235L7.68435 2.6237C7.76149 2.43575 7.89277 2.27499 8.06151 2.16184C8.23025 2.04869 8.42882 1.98828 8.63198 1.98828C8.83514 1.98828 9.03372 2.04869 9.20245 2.16184C9.37119 2.27499 9.50247 2.43575 9.57961 2.6237L11.004 6.07235L14.6981 6.37038C14.9002 6.38748 15.0928 6.46384 15.2517 6.5899C15.4107 6.71596 15.5288 6.88612 15.5915 7.07905C15.6541 7.27199 15.6584 7.47911 15.6039 7.67449C15.5493 7.86986 15.4383 8.04479 15.2848 8.17735L15.2885 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.6518 8.17673L12.8343 10.6079L13.6927 14.2438C13.7401 14.4412 13.7279 14.6481 13.6576 14.8386C13.5874 15.029 13.4624 15.1944 13.2982 15.3138C13.1341 15.4332 12.9382 15.5013 12.7354 15.5094C12.5326 15.5175 12.3319 15.4654 12.1587 15.3595L8.99683 13.4136L5.83306 15.3595C5.6599 15.4648 5.45946 15.5164 5.257 15.508C5.05454 15.4995 4.85909 15.4314 4.69529 15.3121C4.53148 15.1928 4.40663 15.0277 4.33646 14.8376C4.26629 14.6475 4.25394 14.4409 4.30096 14.2438L5.16249 10.6079L2.34497 8.17673C2.19176 8.04431 2.08095 7.86969 2.02639 7.67467C1.97183 7.47966 1.97593 7.27289 2.03818 7.08019C2.10044 6.88749 2.21808 6.7174 2.37642 6.59116C2.53476 6.46493 2.72679 6.38814 2.92851 6.37038L6.6226 6.07235L8.04764 2.6237C8.12477 2.43575 8.25605 2.27499 8.42479 2.16184C8.59353 2.04869 8.7921 1.98828 8.99526 1.98828C9.19842 1.98828 9.397 2.04869 9.56574 2.16184C9.73447 2.27499 9.86576 2.43575 9.94289 2.6237L11.3673 6.07235L15.0614 6.37038C15.2635 6.38748 15.4561 6.46384 15.615 6.5899C15.7739 6.71596 15.8921 6.88612 15.9548 7.07905C16.0174 7.27199 16.0217 7.47911 15.9671 7.67449C15.9126 7.86986 15.8016 8.04479 15.6481 8.17735L15.6518 8.17673Z"
                          fill="#FFB800"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.019 8.17673L12.2015 10.6079L13.0599 14.2438C13.1072 14.4412 13.0951 14.6481 13.0248 14.8386C12.9546 15.029 12.8295 15.1944 12.6654 15.3138C12.5012 15.4332 12.3054 15.5013 12.1026 15.5094C11.8998 15.5175 11.6991 15.4654 11.5259 15.3595L8.36402 13.4136L5.20025 15.3595C5.02709 15.4648 4.82665 15.5164 4.62419 15.508C4.42172 15.4995 4.22628 15.4314 4.06247 15.3121C3.89867 15.1928 3.77382 15.0277 3.70365 14.8376C3.63348 14.6475 3.62113 14.4409 3.66815 14.2438L4.52968 10.6079L1.71216 8.17673C1.55895 8.04431 1.44814 7.86969 1.39358 7.67467C1.33902 7.47966 1.34312 7.27289 1.40537 7.08019C1.46762 6.88749 1.58527 6.7174 1.74361 6.59116C1.90195 6.46493 2.09397 6.38814 2.2957 6.37038L5.98978 6.07235L7.41482 2.6237C7.49196 2.43575 7.62324 2.27499 7.79198 2.16184C7.96072 2.04869 8.15929 1.98828 8.36245 1.98828C8.56561 1.98828 8.76418 2.04869 8.93292 2.16184C9.10166 2.27499 9.23294 2.43575 9.31008 2.6237L10.7345 6.07235L14.4286 6.37038C14.6307 6.38748 14.8233 6.46384 14.9822 6.5899C15.1411 6.71596 15.2593 6.88612 15.3219 7.07905C15.3846 7.27199 15.3889 7.47911 15.3343 7.67449C15.2798 7.86986 15.1688 8.04479 15.0152 8.17735L15.019 8.17673Z"
                          fill="#BABABC"
                        ></path>
                      </svg>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[16.03px] h-[16.03px] relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M15.394 8.17673L12.5765 10.6079L13.4349 14.2438C13.4822 14.4412 13.4701 14.6481 13.3998 14.8386C13.3296 15.029 13.2045 15.1944 13.0404 15.3138C12.8762 15.4332 12.6804 15.5013 12.4776 15.5094C12.2748 15.5175 12.0741 15.4654 11.9009 15.3595L8.73902 13.4136L5.57525 15.3595C5.40209 15.4648 5.20165 15.5164 4.99919 15.508C4.79672 15.4995 4.60128 15.4314 4.43747 15.3121C4.27367 15.1928 4.14882 15.0277 4.07865 14.8376C4.00848 14.6475 3.99613 14.4409 4.04315 14.2438L4.90468 10.6079L2.08716 8.17673C1.93395 8.04431 1.82314 7.86969 1.76858 7.67467C1.71402 7.47966 1.71812 7.27289 1.78037 7.08019C1.84262 6.88749 1.96027 6.7174 2.11861 6.59116C2.27695 6.46493 2.46897 6.38814 2.6707 6.37038L6.36478 6.07235L7.78982 2.6237C7.86696 2.43575 7.99824 2.27499 8.16698 2.16184C8.33572 2.04869 8.53429 1.98828 8.73745 1.98828C8.94061 1.98828 9.13918 2.04869 9.30792 2.16184C9.47666 2.27499 9.60794 2.43575 9.68508 2.6237L11.1095 6.07235L14.8036 6.37038C15.0057 6.38748 15.1983 6.46384 15.3572 6.5899C15.5161 6.71596 15.6343 6.88612 15.6969 7.07905C15.7596 7.27199 15.7639 7.47911 15.7093 7.67449C15.6548 7.86986 15.5438 8.04479 15.3902 8.17735L15.394 8.17673Z"
                          fill="#BABABC"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-right text-dark-blue-hue">3.2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-2">
              <div className="w-full flex flex-col justify-center items-start flex-grow relative gap-0.5 p-3 rounded-xl bg-accent border-[0.5px] border-white">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/next/next_assets/images/icons/image-120.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-start items-start relative gap-1.5">
                  <p className="w-[100px] text-xl font-semibold text-left text-primary">business</p>
                  <div className="flex flex-col justify-start items-start relative gap-2">
                    <p className="w-[100px] text-xs text-left text-dark-blue-hue">
                      Total jobs posted
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start flex-grow relative gap-0.5 p-3 rounded-xl bg-accent border-[0.5px] border-white">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/next/next_assets/images/icons/image-119.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start relative gap-1.5">
                  <p className="w-[100px] text-xl font-semibold text-left text-primary">19,068</p>
                  <div className="flex flex-col justify-start items-start relative gap-2">
                    <p className="w-[100px] text-xs text-left text-dark-blue-hue">
                      Professionals notified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center xl:justify-start items-start gap-8 px-6 pt-8 pb-6 rounded-2xl bg-white border border-[#eaecf0] dark:bg-black"
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03);",
            }}
          >
            <div className="w-full flex flex-col justify-center xl:justify-start items-start gap-6">
              <div className="w-full flex flex-col justify-center xl:justify-start items-start relative gap-4">
                <p className="w-64 text-lg font-semibold text-center text-dark-blue-hue dark:text-white">
                  Share your feedback
                </p>
                <button
                  onClick={() => setDrawerVisibility("review")}
                  className="w-full flex justify-center items-center h-[52px] relative opacity-80 gap-2 px-4 py-3 rounded-xl bg-accent border-[0.5px] border-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.5 18L20.4999 19.094C19.9695 19.6741 19.2501 20 18.5001 20C17.7501 20 17.0308 19.6741 16.5004 19.094C15.9692 18.5151 15.25 18.1901 14.5002 18.1901C13.7504 18.1901 13.0311 18.5151 12.5 19.094M3.5 20H5.17454C5.66372 20 5.90832 20 6.13849 19.9447C6.34256 19.8957 6.53765 19.8149 6.7166 19.7053C6.91843 19.5816 7.09138 19.4086 7.43729 19.0627L20 6.49998C20.8285 5.67156 20.8285 4.32841 20 3.49998C19.1716 2.67156 17.8285 2.67156 17 3.49998L4.43726 16.0627C4.09136 16.4086 3.9184 16.5816 3.79472 16.7834C3.68506 16.9624 3.60425 17.1574 3.55526 17.3615C3.5 17.5917 3.5 17.8363 3.5 18.3255V20Z"
                      stroke="#4D9D9D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="w-auto text-lg font-semibold text-left text-dark-blue-hue">
                    Write a review
                  </p>
                </button>
              </div>
              <ReviewDrawer />
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center xl:justify-start items-start gap-8 px-6 pt-8 pb-6 rounded-2xl bg-white border border-[#eaecf0] dark:bg-black"
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03);",
            }}
          >
            <div className="w-full flex flex-col justify-center xl:justify-start items-start gap-6">
              <div className="w-full flex flex-col justify-center xl:justify-start items-start relative gap-4">
                <p className="w-64 text-lg font-semibold text-left text-dark-blue-hue dark:text-white">
                  Business membership
                </p>
                <div className="w-full flex justify-center items-center h-[52px] relative opacity-80 gap-2 px-4 py-3 rounded-xl bg-accent border-[0.5px] border-white">
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-[27.5px] relative"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_6274_19317)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.57172 0.247835C8.76155 0.210057 7.94969 0.233936 7.14314 0.319263C6.93654 0.466547 6.74512 0.63404 6.57172 0.819263C6.38898 1.02055 6.22183 1.23546 6.07172 1.46212L5.82172 2.03355C5.77328 2.2078 5.76112 2.39013 5.786 2.56926C5.80169 2.82172 5.83752 3.07252 5.89314 3.31926C5.91959 3.45257 5.95539 3.58385 6.00029 3.71212C8.39314 3.42641 10.4646 3.31926 12.8217 3.71212C12.8666 3.58385 12.9024 3.45257 12.9289 3.31926C12.9995 3.08772 13.0356 2.84704 13.036 2.60498C13.0443 2.41377 13.0323 2.22223 13.0003 2.03355L12.7503 1.46212C12.6002 1.23546 12.433 1.02055 12.2503 0.819263L11.6431 0.283549L9.57172 0.247835Z"
                        fill="#5E2955"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.28572 13.5703L0.5 22.9632L2.67857 27.7489L8.75 19.2846C7.78134 17.8093 7.26038 16.0852 7.25 14.3203C7.25 14.0703 7.28572 13.8203 7.28572 13.5703Z"
                        fill="#664364"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.32255 1.39062C5.21949 1.49457 5.13495 1.61536 5.07255 1.74777C1.82255 6.42634 2.28684 8.42634 3.82255 10.6763L5.85826 13.4621L8.32255 10.0692L8.64398 9.53348C7.57255 8.0692 4.53684 3.67634 5.00112 2.0692C5.06446 1.82474 5.17353 1.59449 5.32255 1.39062Z"
                        fill="#664364"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.7511 5.32148C15.2525 4.20606 14.6674 3.13136 14.0011 2.1072C13.8583 1.8572 13.6797 1.67863 13.4297 1.28577C13.1797 0.892913 13.7511 1.78577 13.8225 2.07148C13.9443 2.67013 13.8427 3.29265 13.5368 3.82148C13.1797 4.6072 12.8583 5.42863 12.4297 6.17863C13.4743 5.68991 14.6005 5.39927 15.7511 5.32148Z"
                        fill="#664364"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2891 22.3906L16.1462 27.7478L18.2533 23.1049C17.6085 23.2485 16.9497 23.3204 16.2891 23.3192C14.9011 23.33 13.5303 23.0118 12.2891 22.3906Z"
                        fill="#5E2955"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2846 6.60547C17.8103 6.60547 19.3018 7.0579 20.5704 7.90556C21.839 8.75322 22.8278 9.95802 23.4117 11.3676C23.9955 12.7772 24.1483 14.3283 23.8507 15.8247C23.553 17.3212 22.8183 18.6957 21.7394 19.7746C20.6606 20.8534 19.286 21.5882 17.7896 21.8858C16.2932 22.1835 14.7421 22.0307 13.3325 21.4468C11.9229 20.863 10.7181 19.8742 9.8704 18.6056C9.02275 17.337 8.57031 15.8455 8.57031 14.3198C8.57031 12.2738 9.38306 10.3116 10.8298 8.86493C12.2765 7.41822 14.2386 6.60547 16.2846 6.60547Z"
                        fill="#FEFEFE"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2852 22.5703C17.9169 22.5703 19.5119 22.0865 20.8686 21.1799C22.2253 20.2734 23.2827 18.9849 23.9072 17.4775C24.5316 15.97 24.695 14.3112 24.3766 12.7108C24.0583 11.1105 23.2726 9.64047 22.1188 8.48669C20.965 7.3329 19.495 6.54717 17.8947 6.22884C16.2943 5.91051 14.6355 6.07389 13.128 6.69831C11.6205 7.32273 10.3321 8.38016 9.42553 9.73686C8.51901 11.0936 8.03516 12.6886 8.03516 14.3203C8.03516 16.5084 8.90435 18.6068 10.4515 20.1539C11.9987 21.7011 14.0971 22.5703 16.2852 22.5703ZM19.4994 14.9989L21.8923 12.6775C21.9374 12.6259 21.9682 12.5634 21.9817 12.4963C21.9952 12.4292 21.9909 12.3597 21.9692 12.2947C21.9476 12.2297 21.9093 12.1715 21.8582 12.1259C21.8071 12.0803 21.745 12.0488 21.678 12.0346L18.3923 11.5703C18.2741 11.5176 18.1745 11.4305 18.1066 11.3203L17.9994 11.1417L16.6066 8.32032C16.555 8.23966 16.4757 8.18063 16.3836 8.15432C16.2915 8.12802 16.193 8.13624 16.1066 8.17746C16.033 8.20422 15.9703 8.25441 15.928 8.32032L14.428 11.3203C14.3601 11.4305 14.2605 11.5176 14.1423 11.5703L13.5352 11.6417H13.3566L12.8566 11.7132L11.2494 11.9632H10.8923C10.8275 11.9807 10.7678 12.0133 10.7179 12.0581C10.668 12.103 10.6293 12.1589 10.605 12.2215C10.5807 12.284 10.5714 12.3514 10.5779 12.4182C10.5843 12.485 10.6064 12.5493 10.6423 12.606L11.5352 13.4632L11.8923 13.8203L12.6066 14.5346L12.9994 14.8917H13.0352C13.0739 14.9352 13.1034 14.9862 13.1218 15.0414C13.1403 15.0967 13.1472 15.1551 13.1423 15.2132L12.928 16.5346V16.7846L12.6423 18.4989V18.6775C12.6617 18.7281 12.6913 18.7741 12.7293 18.8127C12.7674 18.8513 12.813 18.8816 12.8633 18.9018C12.9136 18.9219 12.9675 18.9314 13.0217 18.9297C13.0759 18.9279 13.1291 18.915 13.178 18.8917L14.0709 18.5346L15.428 17.8203L16.1066 17.4632C16.1594 17.4279 16.2216 17.409 16.2852 17.409C16.3487 17.409 16.4109 17.4279 16.4637 17.4632L18.2137 18.3917L19.3923 18.9989C19.4533 19.0209 19.5186 19.0287 19.5831 19.0219C19.6476 19.015 19.7098 18.9935 19.7648 18.9591C19.8198 18.9247 19.8663 18.8783 19.9008 18.8233C19.9352 18.7683 19.9568 18.7063 19.9637 18.6417L19.3923 15.356C19.3897 15.2287 19.4271 15.1037 19.4994 14.9989Z"
                        fill="#5E2955"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6274_19317">
                        <rect
                          width="24"
                          height="27.5"
                          fill="white"
                          transform="translate(0.5 0.25)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-lg font-medium text-left text-[#5e2955]">Business Plus</p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-start items-center relative gap-2">
                <p className="w-64 text-sm text-left text-dark-blue-hue dark:text-white">
                  Renewal method: Manual
                </p>
                <p className="w-64 text-sm text-left text-dark-blue-hue dark:text-white">
                  Renewal date: Nov 14, 2024
                </p>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full flex justify-center items-center relative overflow-hidden gap-2 px-[18px] py-2.5 rounded-xl bg-accent border border-accent">
                  <p className="text-base font-semibold text-left text-primary">
                    Manage membership
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center xl:justify-start items-start gap-8 px-6 pt-8 pb-6 rounded-2xl bg-white border border-[#eaecf0] dark:bg-black"
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03);",
            }}
          >
            <div className="w-full flex flex-col justify-center xl:justify-start items-center relative gap-6">
              <p className="w-full text-xl font-semibold text-left text-dark-blue-hue dark:text-white">
                Domains
              </p>
              <div className="w-full flex justify-center xl:justify-start items-center relative gap-1 px-3 py-2 rounded-lg bg-accent">
                <p className="w-full flex-grow text-sm font-medium text-left text-primary">
                  Here we'll show a list of associated domains
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center relative overflow-hidden gap-4 p-6 rounded-2xl bg-accent border border-accent">
            <div className=" "></div>
            <div className="flex flex-col justify-center items-center relative gap-4">
              <p className="text-base font-medium text-center text-black">
                This business pays using
              </p>

              <svg
                width="196"
                height="60"
                viewBox="0 0 196 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="196" height="59.584" fill="url(#pattern0_5884_35272)" />
                <defs>
                  <pattern
                    id="pattern0_5884_35272"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0_5884_35272" transform="scale(0.004 0.0131579)" />
                  </pattern>
                  <image
                    id="image0_5884_35272"
                    width="250"
                    height="76"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div
              className="flex justify-start items-center relative gap-3 px-8 py-4 rounded-xl bg-white"
              style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05);" }}
            >
              <p className="text-base font-medium text-center text-primary">Enables advances</p>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M13.5295 8.93584C12.9571 9.34393 12.2566 9.58398 11.5 9.58398C9.567 9.58398 8 8.01698 8 6.08398C8 4.15099 9.567 2.58398 11.5 2.58398C12.753 2.58398 13.8522 3.2424 14.4705 4.23213M6 20.6711H8.61029C8.95063 20.6711 9.28888 20.7116 9.61881 20.7926L12.3769 21.4629C12.9753 21.6087 13.5988 21.6228 14.2035 21.5054L17.253 20.9121C18.0585 20.7552 18.7996 20.3694 19.3803 19.8045L21.5379 17.7057C22.154 17.1073 22.154 16.1364 21.5379 15.5371C20.9832 14.9974 20.1047 14.9367 19.4771 15.3943L16.9626 17.2288C16.6025 17.4921 16.1643 17.6338 15.7137 17.6338H13.2855L14.8311 17.6337C15.7022 17.6337 16.4079 16.9473 16.4079 16.0999V15.7931C16.4079 15.0895 15.9156 14.4759 15.2141 14.3059L12.8286 13.7257C12.4404 13.6316 12.0428 13.584 11.6431 13.584C10.6783 13.584 8.93189 14.3828 8.93189 14.3828L6 15.6089M20 7.08398C20 9.01698 18.433 10.584 16.5 10.584C14.567 10.584 13 9.01698 13 7.08398C13 5.15099 14.567 3.58398 16.5 3.58398C18.433 3.58398 20 5.15099 20 7.08398ZM2 15.184L2 20.984C2 21.544 2 21.8241 2.10899 22.038C2.20487 22.2261 2.35785 22.3791 2.54601 22.475C2.75992 22.584 3.03995 22.584 3.6 22.584H4.4C4.96005 22.584 5.24008 22.584 5.45399 22.475C5.64215 22.3791 5.79513 22.2261 5.89101 22.038C6 21.8241 6 21.544 6 20.984V15.184C6 14.6239 6 14.3439 5.89101 14.13C5.79513 13.9418 5.64215 13.7889 5.45399 13.693C5.24008 13.584 4.96005 13.584 4.4 13.584L3.6 13.584C3.03995 13.584 2.75992 13.584 2.54601 13.693C2.35785 13.7889 2.20487 13.9418 2.10899 14.13C2 14.3439 2 14.6239 2 15.184Z"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-3 p-6 rounded-2xl bg-accent border border-accent">
            <div className="flex flex-col justify-start items-start relative gap-4">
              <div className="w-20 h-20 relative overflow-hidden">
                <svg
                  width="80"
                  height="81"
                  viewBox="0 0 80 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="-7.55859"
                    y="-1.5"
                    width="96.402"
                    height="89.0732"
                    fill="url(#pattern0_5884_35279)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_5884_35279"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_5884_35279"
                        transform="scale(0.00584795 0.00632911)"
                      />
                    </pattern>
                    <image
                      id="image0_5884_35279"
                      width="171"
                      height="158"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <p className="w-64 text-2xl font-semibold text-left text-primary">
                Supports the ProZ Pro bono program
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBusinessPage;
