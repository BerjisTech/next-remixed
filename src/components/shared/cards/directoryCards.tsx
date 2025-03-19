import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const DirectoryCard: React.FC<{ user: any }> = ({ user }) => {
  const [drawerIsOpen, setDrawerValue] = useState(false);
  const [countryInfo, setCountryInfo] = useState<{ name: string; flag: string }>({
    name: "Unknown",
    flag: "",
  });

  const handleCloseDrawer = (): void => setDrawerValue(!drawerIsOpen);

  const handleImageUrl = (url: string) =>
    url.includes("http") ? url : "https://www.proz.com" + url;

  const getCountryInfo = async (code: string) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
      const countryData = response.data[0];
      return {
        name: countryData.name.common,
        flag: countryData.flags.svg,
      };
    } catch (error) {
      console.error("Error fetching country data:", error);
      return { name: "Unknown", flag: "" };
    }
  };

  useEffect(() => {
    if (user?.contact_country_code) {
      getCountryInfo(user.contact_country_code).then(setCountryInfo);
    }
  }, [user?.contact_country_code]);

  return (
    <a href={`/next/profile/${user.entity_id}`} className="grow cursor-pointer">
      <div className="relative block group p-5 hover:border rounded-2xl bg-white shadow-md dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* User image */}
          <div className="relative w-32 aspect-square border-2 border-primary rounded-lg overflow-hidden">
            <Image
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={handleImageUrl(user?.image_url_option_two || user?.image_url)}
              alt={`${user?.contact_first} ${user?.contact_last}`}
              width={500} // Adjust width as needed
              height={500} // Adjust height as needed
            />
          </div>

          {/* User info */}
          <div className="flex flex-col w-full text-gray-700 dark:text-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold truncate">
                {user?.contact_first + " " + user?.contact_last}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{user?.tagline}</p>

            <div className="flex items-center gap-2 mt-3">
              <span className="capitalize text-sm">{countryInfo.name}</span>
              {countryInfo.flag && (
                <Image
                  src={countryInfo.flag}
                  alt="flag"
                  className="w-5 h-auto rounded-sm"
                  width={20} // Adjust width as needed
                  height={20} // Adjust height as needed
                />
              )}
            </div>
          </div>
        </div>

        {/* Contact button */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border cursor-pointer"
            onClick={(event) => event.stopPropagation()}
          >
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
            <p className="text-sm font-semibold text-left text-primary">Contact</p>
          </button>
        </div>
      </div>
    </a>
  );
};

export default DirectoryCard;
