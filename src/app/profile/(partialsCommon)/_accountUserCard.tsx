"use client";

import StarRating from "@/components/shared/starRating";
import { TAGLINES_SERVICES } from "@/constants/common";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser, Taglines } from "@/interfaces/account";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface AccountUserCardProps {
  liveView?: boolean;
  showProgress?: boolean;
  children?: React.ReactNode;
  cardHeight?: boolean;
  showCopyUserId?: boolean;
  showImage?: boolean;
  user: ProzUser;
}
const AccountUserCard: React.FC<AccountUserCardProps> = ({
  liveView = false,
  showProgress = false,
  children,
  cardHeight,
  showCopyUserId = false,
  showImage = false,
  user,
}) => {
  const [userIdCopied, setUserIdCopied] = useState<boolean>(false);
  const [accountType, setAccountType] = useState<string>("");
  let pathname = usePathname() ?? "";
  const [profileCompleteness, setProfileCompleteness] = useState<number>(0);
  const { setDrawerVisibility, getCountryNameCountryCode, getFlagFromCountryCode } =
    useContentHook();

  const getTagline = (): string | null => {
    let tagline = "";
    let filteredTagline: Taglines[] = [];
    const currentTab: string = pathname.split("/").pop() as string;
    if (
      currentTab &&
      (currentTab === "translating" || currentTab === "interpreting" || currentTab === "subtitling")
    ) {
      const { pools_profiles, pools_taglines } = user.pools_data;
      const serviceId = TAGLINES_SERVICES[currentTab];
      if (currentTab === "interpreting" && pools_profiles && pools_profiles?.["interpreters"]) {
        tagline = pools_taglines ? pools_taglines["interpreters"] : "";
      } else if (currentTab === "subtitling" && pools_profiles && pools_profiles?.["subtitlers"]) {
        tagline = pools_taglines ? pools_taglines["subtitlers"] : "";
      } else {
        filteredTagline = Array.isArray(user?.service_specific_taglines)
          ? user.service_specific_taglines.filter((item) => item.service_id === serviceId)
          : [];
        tagline = filteredTagline.length > 0 ? filteredTagline[0].value : "";
      }
    } else {
      filteredTagline = Array.isArray(user?.service_specific_taglines)
        ? user.service_specific_taglines.filter((item) => item.service_id === 0)
        : [];
      tagline = filteredTagline.length > 0 ? filteredTagline[0].value : "";
    }

    return tagline;
  };

  return (
    <React.Fragment>
      {!liveView && (
        <div
          className="flex flex-col justify-start items-start w-full gap-4 px-6 py-8 rounded-custom my-5"
          style={{ background: "linear-gradient(58.36deg, #2e6969 3.4%, #74c3c2 88.77%)" }}
        >
          <div className="flex flex-col lg:flex-row flex-nowrap xl:flex-wrap justify-between gap-4 md:gap-0 items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[377px] gap-4">
              <div className="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0">
                <div className="flex justify-start items-end self-stretch flex-grow gap-14">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                    <div className="flex flex-col justify-start items-start w-full relative gap-[3px]">
                      <div className="relative flex items-center justify-start  text-lg text-left text-white w-full ">
                        <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-[#f8fbfb]">
                          {" "}
                          {user?.site_name ?? user?.name}
                        </p>{" "}
                        &nbsp;
                        {user.can_edit && (
                          <span
                            className="material-symbols-outlined text-primary"
                            role="button"
                            onClick={() => setDrawerVisibility("identity")}
                          >
                            edit
                          </span>
                        )}
                      </div>
                      <div className="relative flex items-center justify-start  text-lg text-left text-white w-full ">
                        <p className="flex-grow-0 flex-shrink-0 text-lg mt-2 text-left text-white">
                          {user && getTagline() ? (
                            getTagline()
                          ) : (
                            <React.Fragment>{user.is_owner && "Add a tagline"}</React.Fragment>
                          )}
                        </p>{" "}
                        &nbsp;
                        {user.can_edit && (
                          <span
                            className="material-symbols-outlined text-primary"
                            role="button"
                            onClick={() => setDrawerVisibility("tagline_&_seo")}
                          >
                            edit
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col justify-start pt-4 w-full ">
                        {user?.contact_country_code && (
                          <div className="flex justify-start text-white w-full ">
                            {getCountryNameCountryCode(user?.contact_country_code)}{" "}
                            <Image
                              src={getFlagFromCountryCode(user?.contact_country_code)}
                              className="self-center h-[0.9rem] pl-1"
                              alt="country_flag"
                              height={24}
                              width={24}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* {(userGenderPronouns && (user.can_edit || userGenderPronouns.length > 0)) &&
                                            <div className="flex justify-start items-center  relative gap-2">
                                                <p className=" text-sm font-medium text-left text-white opacity-50">
                                                    {userGenderPronouns.length > 0 ? userGenderPronouns[0] :
                                                        <React.Fragment>
                                                            {user.can_edit && 'Add your pronouns'}
                                                        </React.Fragment>}
                                                </p>
                                                {user.can_edit && <span className="material-symbols-outlined text-primary" role="button" onClick={() => setDrawerVisibility('gender')}>edit</span>}
                                            </div>
                                        } */}
                  </div>
                </div>
              </div>
            </div>
            {user.avg_rating ? (
              <StarRating rating={user.avg_rating} />
            ) : (
              <StarRating rating={"0"} />
            )}
          </div>
        </div>
      )}

      {liveView && (
        <section className="dark:bg-black border-[1px] border-solid border-secondary rounded-xl p-5 mt-5 bg-white min-h-[{{card_height}}] flex flex-col gap-4 shadow-custom">
          <div className="flex-grow flex flex-col lg:flex-row items-start justify-center gap-3">
            {/* {showImage && <UserImage />} */}
            <div className="flex flex-col items-start justify-center flex-grow gap-3">
              <span className="text-primary font-[600] dark:text-primary md:text-lg xs:text-sm">
                {user?.site_name ?? user?.name}
              </span>
              <span className="dark:text-accent-foreground whitespace-nowrap">{accountType}</span>
              <Link
                className="text-primary flex items-center justify-center dark:text-accent-foreground"
                href={`/next/profile/${user?.entity_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                proz.com/profile/{user?.entity_id}
              </Link>
              <div className="flex items-start justify-between w-full ">
                <div className="border border-secondary rounded-lg p-3">
                  <div className="w-full flex gap-2 items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                        stroke="#4D9D9D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-primary">Rate</span>
                  </div>
                  <div className="w-full flex items-start justify-start gap-2">
                    <span className="dark:text-accent-foreground text-2xl whitespace-nowrap">
                      $ 23.00 EUR
                    </span>
                    <span className="dark:text-accent-foreground text-sm whitespace-nowrap">
                      per hour
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-start lg:items-end justify-start gap-3 text-primary w-full "
              role="button"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-between gap-2" role="button">
                  <span>Save profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
                      stroke="#D0D5DD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between gap-2" role="button">
                  <span>Share</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.7914 12.6082C21.0355 12.3989 21.1575 12.2943 21.2023 12.1698C21.2415 12.0605 21.2415 11.941 21.2023 11.8317C21.1575 11.7072 21.0355 11.6026 20.7914 11.3934L12.3206 4.13275C11.9004 3.77256 11.6903 3.59246 11.5124 3.58804C11.3578 3.58421 11.2101 3.65213 11.1124 3.77201C11 3.90995 11 4.18668 11 4.74016V9.03541C8.86532 9.40887 6.91159 10.4905 5.45971 12.1146C3.87682 13.8853 3.00123 16.1767 3 18.5517V19.1637C4.04934 17.8996 5.35951 16.8773 6.84076 16.1667C8.1467 15.5402 9.55842 15.1691 11 15.0713V19.2614C11 19.8149 11 20.0916 11.1124 20.2296C11.2101 20.3494 11.3578 20.4174 11.5124 20.4135C11.6903 20.4091 11.9004 20.229 12.3206 19.8688L20.7914 12.6082Z"
                      stroke="#D0D5DD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {showCopyUserId && (
                <span className="relative flex items-center justify-end">
                  User ID: {user?.entity_id}{" "}
                  <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  <span
                    className={`${userIdCopied ? "opacity-100" : "opacity-0"} absolute top-[-130%] bg-primary text-primary rounded-full py-1 px-2 text-[12px]`}
                  >
                    {" "}
                    Copied{" "}
                  </span>
                </span>
              )}

              {liveView && (
                <Link
                  href="#"
                  className="text-primary text-center w-full md:w-[190px] dark:text-primary font-semibold bg-accent dark:bg-dark p-3 rounded-xl"
                >
                  Update your profile
                </Link>
              )}
            </div>
          </div>
          {showProgress && liveView && (
            <div>
              <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <span className="flex gap-2">
                  <span className="dark:text-accent-foreground">Profile completion</span>
                  <span className="flex-grow text-primary">{profileCompleteness}%</span>
                </span>
                <Link href="#" target="_blank" className="text-primary">
                  View completion guide asdasda
                </Link>
              </div>
              <div className="w-full h-[10px] bg-accent rounded-lg">
                {/* <div style={{ width: `${profileCompleteness}%` }} className="h-[10px] bg-primary rounded-lg"></div> */}
              </div>
            </div>
          )}
          {children}
        </section>
      )}
    </React.Fragment>
  );
};

export default AccountUserCard;
