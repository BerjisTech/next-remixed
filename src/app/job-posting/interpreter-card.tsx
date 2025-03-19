import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Provider {
  freelancer: {
    site_name?: string;
    business_id?: string;
    about_me_localizations?: Array<{ content: string }>;
    image_url?: string;
    profile_url?: string;
    name?: string;
    tagline?: string;
    skills: {
      language_pairs: Array<{ pair_name: string }>;
    };
    contact_info: {
      country_code: string;
    };
  };
}

interface InterpreterCardProps {
  cardType: string;
  provider: Provider;
  availabilityToday: boolean;
}

const getCountryInfo = async (code: string) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    const countryData = response.data[0];
    return {
      name: countryData.name.common,
      flag: countryData.flags.svg, // o 'countryData.flags.png' si prefieres PNG
    };
  } catch (error) {
    console.error("Error fetching country data:", error);
    return { name: "Unknown", flag: "" }; // Manejo de errores
  }
};

const InterpreterCard: React.FC<InterpreterCardProps> = ({
  cardType,
  provider,
  availabilityToday,
}) => {
  const [countryInfo, setCountryInfo] = useState<{ name: string; flag: string }>({
    name: "",
    flag: "",
  });
  const freelancer = provider.freelancer;
  const profileId = freelancer.profile_url
    ? freelancer.profile_url.match(/\/profile\/(\d+)$/)?.[1]
    : undefined;

  useEffect(() => {
    if (freelancer.contact_info.country_code) {
      getCountryInfo(freelancer.contact_info.country_code).then(setCountryInfo);
    }
  }, [freelancer.contact_info.country_code]);

  if (cardType === "freelancer") {
    return (
      <a
        href={`next/profile/${profileId}`}
        className="h-[240px] flex flex-col justify-start items-start overflow-hidden gap-4 p-5 rounded-3xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-gray-400 mb-4"
      >
        <div className="flex justify-start items-start relative gap-4 max-h-[110px]">
          <div className="w-[90px] h-[110px] relative overflow-hidden rounded-xl border-primary border-[3px]">
            <Image
              src={freelancer.image_url as string}
              alt={freelancer.site_name as string}
              width={90}
              height={110}
              className="w-full h-full absolute object-cover"
            />
          </div>

          <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
            <div className="flex justify-start items-end gap-14 pb-1 border-t-0 border-r-0 border-b-[0.5px] border-l-0 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col justify-start items-start flex-grow gap-px">
                <div className="flex justify-start items-center relative gap-2 font-bold text-lg">
                  <span>{freelancer.site_name}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{freelancer.tagline}</div>
                <div className="text-sm font-bold">
                  {freelancer.skills.language_pairs?.[0]?.pair_name || "No description"}
                </div>
                <div className="text-sm">
                  {countryInfo.flag && (
                    <div className="flex items-center gap-2">
                      <Image
                        src={countryInfo.flag}
                        alt={countryInfo.name}
                        width={20}
                        height={12}
                        className="w-5 h-3"
                      />

                      <span>{countryInfo.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-4 h-4 relative"
            >
              <path
                d="M14.647 7.17741L11.8345 9.60429L12.6914 13.2337C12.7386 13.4307 12.7265 13.6373 12.6564 13.8274C12.5863 14.0175 12.4614 14.1826 12.2976 14.3018C12.1337 14.4209 11.9382 14.4889 11.7358 14.497C11.5333 14.5051 11.333 14.4531 11.1601 14.3474L8.00387 12.4049L4.84574 14.3474C4.67288 14.4525 4.47281 14.504 4.2707 14.4956C4.0686 14.4872 3.87351 14.4191 3.70999 14.3001C3.54648 14.181 3.42185 14.0162 3.35181 13.8264C3.28176 13.6367 3.26943 13.4304 3.31637 13.2337L4.17637 9.60429L1.36387 7.17741C1.21093 7.04523 1.10032 6.87092 1.04586 6.67625C0.991392 6.48159 0.995486 6.27519 1.05763 6.08283C1.11977 5.89048 1.2372 5.72069 1.39526 5.59468C1.55332 5.46866 1.745 5.39201 1.94637 5.37429L5.63387 5.07679L7.05637 1.63429C7.13336 1.44667 7.26441 1.28619 7.43285 1.17325C7.60129 1.06031 7.7995 1 8.0023 1C8.2051 1 8.40332 1.06031 8.57176 1.17325C8.7402 1.28619 8.87124 1.44667 8.94824 1.63429L10.3701 5.07679L14.0576 5.37429C14.2594 5.39135 14.4516 5.46758 14.6103 5.59342C14.7689 5.71925 14.8869 5.88911 14.9494 6.0817C15.0119 6.27429 15.0162 6.48104 14.9618 6.67607C14.9073 6.87109 14.7965 7.04571 14.6432 7.17804L14.647 7.17741Z"
                fill="#FFB800"
              ></path>
            </svg>
          ))}
          <span className="text-gray-600 dark:text-gray-400">4.5</span>
        </div>
        <div className="flex gap-2 w-full h-[32px]">
          {availabilityToday ? (
            <>
              <a className="flex justify-center items-center relative overflow-hidden gap-2 px-4 py-2 rounded-lg bg-green-500 border cursor-pointer w-1/2 hover:bg-green-600">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M15.5 2.5H4.5C3.67157 2.5 3 3.17157 3 4V16C3 16.8284 3.67157 17.5 4.5 17.5H15.5C16.3284 17.5 17 16.8284 17 16V4C17 3.17157 16.3284 2.5 15.5 2.5Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14.1667C11.3807 14.1667 12.5 13.0474 12.5 11.6667C12.5 10.2859 11.3807 9.16667 10 9.16667C8.61929 9.16667 7.5 10.2859 7.5 11.6667C7.5 13.0474 8.61929 14.1667 10 14.1667Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 6.66667C10.4602 6.66667 10.8333 6.29355 10.8333 5.83333C10.8333 5.3731 10.4602 5 10 5C9.53976 5 9.16667 5.3731 9.16667 5.83333C9.16667 6.29355 9.53976 6.66667 10 6.66667Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p className="text-sm font-semibold text-left text-white">Call Now</p>
              </a>
            </>
          ) : (
            <>
              <a className="flex justify-center items-center relative overflow-hidden gap-2 px-4 py-2 rounded-lg bg-blue-500 border cursor-pointer w-1/2 hover:bg-blue-600">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M10 1.66667C5.3975 1.66667 1.66667 5.3975 1.66667 10C1.66667 14.6025 5.3975 18.3333 10 18.3333C14.6025 18.3333 18.3333 14.6025 18.3333 10C18.3333 5.3975 14.6025 1.66667 10 1.66667ZM10 16.6667C6.31833 16.6667 3.33333 13.6817 3.33333 10C3.33333 6.31833 6.31833 3.33333 10 3.33333C13.6817 3.33333 16.6667 6.31833 16.6667 10C16.6667 13.6817 13.6817 16.6667 10 16.6667ZM10.8333 10.8333H13.3333V9.16667H10.8333V6.66667H9.16667V9.16667H6.66667V10.8333H9.16667V13.3333H10.8333V10.8333Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p className="text-sm font-semibold text-left text-white">Schedule a call</p>
              </a>
            </>
          )}
          <a className="flex justify-center items-center relative overflow-hidden gap-2 px-4 py-2 rounded-lg bg-accent border cursor-pointer w-1/2 hover:bg-accent-dark">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M17.5 9.58268V7.33268C17.5 5.93255 17.5 5.23249 17.2275 4.69771C16.9878 4.2273 16.6054 3.84485 16.135 3.60517C15.6002 3.33268 14.9001 3.33268 13.5 3.33268H6.5C5.09987 3.33268 4.3998 3.33268 3.86502 3.60517C3.39462 3.84485 3.01217 4.2273 2.77248 4.69771C2.5 5.23249 2.5 5.93255 2.5 7.33268V14.3327C2.5 15.7328 2.5 16.4329 2.77248 16.9677C3.01217 17.4381 3.39462 17.8205 3.86502 18.0602C4.3998 18.3327 5.09987 18.3327 6.5 18.3327H10.4167M17.5 8.33268H2.5M13.3333 1.66602V4.99935M6.66667 1.66602V4.99935M15 17.4993V12.4993M12.5 14.9993H17.5"
                stroke="#4D9D9D"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-semibold text-left text-primary">View</p>
          </a>
        </div>
      </a>
    );
  }

  return null;
};

export default InterpreterCard;
