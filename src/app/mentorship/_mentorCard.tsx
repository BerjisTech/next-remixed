import React from "react";
import { Mentor } from "@/interfaces/pool";
import Link from "next/link";
import Image from "next/image";
import { useGetUserPairsQuery } from "@/lib/store/features/profile/profileApiSlice";

const MentorCard = ({
  mentor,
  getCountryNameCountryCode,
  getFlagFromCountryCode,
  getLanguageFromCode,
}: {
  mentor: Mentor;
  getCountryNameCountryCode: (code: string) => string;
  getFlagFromCountryCode: (code: string) => string;
  getLanguageFromCode: (code: string) => string;
}) => {
  // ✅ Call the hook at the top level of this function component
  const { data: pairs, isLoading: pairsLoading } = useGetUserPairsQuery(Number(mentor.entity_id), {
    skip: !mentor.entity_id,
  });

  const pairKeys = pairs ? Object.keys(pairs) : [];
  const displayedPairs = pairKeys.slice(0, 1);

  return (
    <div className="flex flex-row p-4 gap-3 rounded-2xl bg-accent hover:border-2 hover:border-accent-dark dark:hover:border-primary transition-all items-start">
      <Image
        src={mentor.profile_picture || "/next/next_assets/images/user-avatar.png"}
        className="rounded-xl"
        alt={`${mentor.site_name}'s profile image`}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <Link href={`/profile/${mentor.entity_id}`} className="cursor-pointer">
          <p className="text-grey-700 hover:text-primary text-xl font-semibold leading-[30px] transition-all">
            {mentor.site_name}
          </p>
        </Link>
        <div className="flex flex-row gap-1">
          <p className="text-grey-700 text-sm font-normal leading-[18px]">
            {getCountryNameCountryCode(mentor.country_code)}
          </p>
          <Image
            src={
              getFlagFromCountryCode(mentor.country_code) ||
              "/next/next_assets/images/flags/default.svg"
            }
            className="self-center h-[0.9rem] pl-1"
            alt="country_flag"
            height={24}
            width={24}
          />
        </div>

        {/* Display Language Pairs */}
        <div className="mt-2 text-sm text-gray-600">
          {pairsLoading ? (
            <p>Loading language pairs...</p>
          ) : pairKeys.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {displayedPairs.map((pair, index) => (
                <span
                  key={index}
                  className="bg-accent-dark dark:bg-grey-600 text-grey-700 px-2 py-1 rounded-md"
                >
                  {getLanguageFromCode(pair.split("_")[0])} →{" "}
                  {getLanguageFromCode(pair.split("_")[1])}
                </span>
              ))}
              {/*{pairKeys.length > 3 && <span className="text-primary">+{pairKeys.length - 3} more</span>}*/}
            </div>
          ) : (
            <p>No language pairs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
