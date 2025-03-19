"use client";

import ProgressBar from "@/components/shared/progress";
import Tooltip from "@/components/shared/prozTooltip";
import UserImage from "@/components/shared/userImage";
import { ACCOUNT_TYPES } from "@/constants/common";
import { useContentHook } from "@/hooks/useContentHook";
import { ProzUser } from "@/interfaces/account";
import React from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
interface AccountUserCardProps {
  children?: React.ReactNode;
  livView?: boolean;
  user: ProzUser;
  canEdit?: boolean;
  userGenderPronouns: string[] | undefined;
  showImage?: boolean;
  showProgress?: boolean;
  profileCompleteness?: number;
  showCopyUserId?: boolean;
}
const AccountUserCard: React.FC<AccountUserCardProps> = ({
  children,
  livView = true,
  user,
  canEdit = false,
  userGenderPronouns = [],
  showImage = true,
  showProgress = true,
  profileCompleteness = 50,
  showCopyUserId = true,
}) => {
  const { setDrawerVisibility } = useContentHook();
  const [copiedText, copy] = useCopyToClipboard();

  const copyToClipboard = (entity_id: number) => {
    copy(window.location.host + "/next/profile/" + entity_id.toString())
      .then(() => {
        toast.info("Copied url to clipboard!");
      })
      .catch((error) => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <React.Fragment>
      {!livView && (
        <div className="flex flex-col justify-start items-start gap-4 px-6 py-8 rounded-custom my-5 w-full bg-green-gradient dark:bg-green-gradient-dark">
          <div className="flex flex-col lg:flex-row flex-nowrap xl:flex-wrap justify-between md:gap-0 items-start w-full ">
            <div className="flex flex-col flex-grow justify-start items-start gap-4">
              <div className="flex justify-between items-end w-full ">
                <div className="flex justify-start items-end  flex-grow gap-14 w-full ">
                  <div className="flex flex-col justify-start items-start  gap-2 w-ull">
                    <div className="flex flex-col justify-start items-start relative gap-[3px] w-full ">
                      <div className="flex items-center justify-start w-full ">
                        <p className="flex items-center justify-center text-4xl font-semibold text-left text-white">
                          {user && user.site_name && user.name}
                          {canEdit && (
                            <span
                              className="material-symbols-outlined text-primary"
                              role="button"
                              onClick={() => setDrawerVisibility("identity")}
                            >
                              edit
                            </span>
                          )}
                        </p>
                        {userGenderPronouns ||
                          (canEdit && (
                            <div className="flex justify-start items-center relative gap-2 ml-4">
                              <p className="text-sm font-medium text-left text-white opacity-50">
                                {" "}
                                {userGenderPronouns
                                  ? userGenderPronouns[2]
                                  : canEdit
                                    ? "Add your pronouns"
                                    : ""}
                              </p>
                              {canEdit && (
                                <span
                                  className="material-symbols-outlined text-primary"
                                  role="button"
                                  onClick={() => setDrawerVisibility("gender")}
                                >
                                  edit
                                </span>
                              )}
                            </div>
                          ))}
                      </div>

                      <div className="relative flex items-center justify-start text-lg text-left text-white w-full ">
                        {canEdit && (user.tagline == "" || user.tagline == "-")
                          ? "Add a tagline for "
                          : user.tagline}
                        {canEdit && (
                          <span
                            className="material-symbols-outlined text-primary"
                            role="button"
                            onClick={() => setDrawerVisibility("tagline_&_seo")}
                          >
                            edit
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-col justify-between items-start md:items-end  ">
              <div className="flex flex-col justify-center items-end  relative gap-2">
                <div className="flex justify-center items-start  relative gap-[5px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M21.9646 10.7661L17.7459 14.4064L19.0312 19.8505C19.1021 20.146 19.0838 20.4559 18.9787 20.7411C18.8736 21.0263 18.6863 21.2739 18.4405 21.4526C18.1947 21.6314 17.9015 21.7333 17.5978 21.7455C17.2941 21.7577 16.9936 21.6796 16.7343 21.5211L11.9999 18.6074L7.26275 21.5211C7.00347 21.6787 6.70335 21.756 6.4002 21.7434C6.09704 21.7308 5.8044 21.6287 5.55913 21.4501C5.31386 21.2715 5.12692 21.0243 5.02185 20.7396C4.91679 20.455 4.89829 20.1456 4.96869 19.8505L6.25869 14.4064L2.03994 10.7661C1.81053 10.5678 1.64462 10.3064 1.56293 10.0144C1.48123 9.72238 1.48737 9.41278 1.58058 9.12425C1.67379 8.83571 1.84994 8.58103 2.08703 8.39202C2.32412 8.203 2.61164 8.08802 2.91369 8.06143L8.44494 7.61518L10.5787 2.45143C10.6942 2.17001 10.8908 1.92929 11.1434 1.75987C11.3961 1.59046 11.6934 1.5 11.9976 1.5C12.3018 1.5 12.5991 1.59046 12.8518 1.75987C13.1044 1.92929 13.301 2.17001 13.4165 2.45143L15.5493 7.61518L21.0806 8.06143C21.3832 8.08703 21.6716 8.20137 21.9095 8.39013C22.1475 8.57888 22.3244 8.83366 22.4182 9.12255C22.512 9.41143 22.5185 9.72157 22.4368 10.0141C22.3551 10.3066 22.1889 10.5686 21.959 10.7671L21.9646 10.7661Z"
                      fill="#FFB800"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M21.9646 10.7661L17.7459 14.4064L19.0312 19.8505C19.1021 20.146 19.0838 20.4559 18.9787 20.7411C18.8736 21.0263 18.6863 21.2739 18.4405 21.4526C18.1947 21.6314 17.9015 21.7333 17.5978 21.7455C17.2941 21.7577 16.9936 21.6796 16.7343 21.5211L11.9999 18.6074L7.26275 21.5211C7.00347 21.6787 6.70335 21.756 6.4002 21.7434C6.09704 21.7308 5.8044 21.6287 5.55913 21.4501C5.31386 21.2715 5.12692 21.0243 5.02185 20.7396C4.91679 20.455 4.89829 20.1456 4.96869 19.8505L6.25869 14.4064L2.03994 10.7661C1.81053 10.5678 1.64462 10.3064 1.56293 10.0144C1.48123 9.72238 1.48737 9.41278 1.58058 9.12425C1.67379 8.83571 1.84994 8.58103 2.08703 8.39202C2.32412 8.203 2.61164 8.08802 2.91369 8.06143L8.44494 7.61518L10.5787 2.45143C10.6942 2.17001 10.8908 1.92929 11.1434 1.75987C11.3961 1.59046 11.6934 1.5 11.9976 1.5C12.3018 1.5 12.5991 1.59046 12.8518 1.75987C13.1044 1.92929 13.301 2.17001 13.4165 2.45143L15.5493 7.61518L21.0806 8.06143C21.3832 8.08703 21.6716 8.20137 21.9095 8.39013C22.1475 8.57888 22.3244 8.83366 22.4182 9.12255C22.512 9.41143 22.5185 9.72157 22.4368 10.0141C22.3551 10.3066 22.1889 10.5686 21.959 10.7671L21.9646 10.7661Z"
                      fill="#FFB800"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M21.9627 10.7661L17.7439 14.4064L19.0292 19.8505C19.1002 20.146 19.0819 20.4559 18.9768 20.7411C18.8716 21.0263 18.6843 21.2739 18.4386 21.4526C18.1928 21.6314 17.8995 21.7333 17.5958 21.7455C17.2922 21.7577 16.9917 21.6796 16.7324 21.5211L11.998 18.6074L7.2608 21.5211C7.00151 21.6787 6.7014 21.756 6.39824 21.7434C6.09509 21.7308 5.80245 21.6287 5.55718 21.4501C5.31191 21.2715 5.12497 21.0243 5.0199 20.7396C4.91483 20.455 4.89634 20.1456 4.96674 19.8505L6.25674 14.4064L2.03799 10.7661C1.80858 10.5678 1.64267 10.3064 1.56097 10.0144C1.47928 9.72238 1.48542 9.41278 1.57863 9.12425C1.67184 8.83571 1.84799 8.58103 2.08508 8.39202C2.32217 8.203 2.60969 8.08802 2.91174 8.06143L8.44299 7.61518L10.5767 2.45143C10.6922 2.17001 10.8888 1.92929 11.1415 1.75987C11.3941 1.59046 11.6914 1.5 11.9956 1.5C12.2998 1.5 12.5972 1.59046 12.8498 1.75987C13.1025 1.92929 13.2991 2.17001 13.4146 2.45143L15.5474 7.61518L21.0786 8.06143C21.3813 8.08703 21.6696 8.20137 21.9076 8.39013C22.1455 8.57888 22.3225 8.83366 22.4163 9.12255C22.5101 9.41143 22.5165 9.72157 22.4348 10.0141C22.3531 10.3066 22.1869 10.5686 21.9571 10.7671L21.9627 10.7661Z"
                      fill="#FFB800"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M21.9646 10.7661L17.7459 14.4064L19.0312 19.8505C19.1021 20.146 19.0838 20.4559 18.9787 20.7411C18.8736 21.0263 18.6863 21.2739 18.4405 21.4526C18.1947 21.6314 17.9015 21.7333 17.5978 21.7455C17.2941 21.7577 16.9936 21.6796 16.7343 21.5211L11.9999 18.6074L7.26275 21.5211C7.00347 21.6787 6.70335 21.756 6.4002 21.7434C6.09704 21.7308 5.8044 21.6287 5.55913 21.4501C5.31386 21.2715 5.12692 21.0243 5.02185 20.7396C4.91679 20.455 4.89829 20.1456 4.96869 19.8505L6.25869 14.4064L2.03994 10.7661C1.81053 10.5678 1.64462 10.3064 1.56293 10.0144C1.48123 9.72238 1.48737 9.41278 1.58058 9.12425C1.67379 8.83571 1.84994 8.58103 2.08703 8.39202C2.32412 8.203 2.61164 8.08802 2.91369 8.06143L8.44494 7.61518L10.5787 2.45143C10.6942 2.17001 10.8908 1.92929 11.1434 1.75987C11.3961 1.59046 11.6934 1.5 11.9976 1.5C12.3018 1.5 12.5991 1.59046 12.8518 1.75987C13.1044 1.92929 13.301 2.17001 13.4165 2.45143L15.5493 7.61518L21.0806 8.06143C21.3832 8.08703 21.6716 8.20137 21.9095 8.39013C22.1475 8.57888 22.3244 8.83366 22.4182 9.12255C22.512 9.41143 22.5185 9.72157 22.4368 10.0141C22.3551 10.3066 22.1889 10.5686 21.959 10.7671L21.9646 10.7661Z"
                      fill="#FFB800"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M21.9646 10.7661L17.7459 14.4064L19.0312 19.8505C19.1021 20.146 19.0838 20.4559 18.9787 20.7411C18.8736 21.0263 18.6863 21.2739 18.4405 21.4526C18.1947 21.6314 17.9015 21.7333 17.5978 21.7455C17.2941 21.7577 16.9936 21.6796 16.7343 21.5211L11.9999 18.6074L7.26275 21.5211C7.00347 21.6787 6.70335 21.756 6.4002 21.7434C6.09704 21.7308 5.8044 21.6287 5.55913 21.4501C5.31386 21.2715 5.12692 21.0243 5.02185 20.7396C4.91679 20.455 4.89829 20.1456 4.96869 19.8505L6.25869 14.4064L2.03994 10.7661C1.81053 10.5678 1.64462 10.3064 1.56293 10.0144C1.48123 9.72238 1.48737 9.41278 1.58058 9.12425C1.67379 8.83571 1.84994 8.58103 2.08703 8.39202C2.32412 8.203 2.61164 8.08802 2.91369 8.06143L8.44494 7.61518L10.5787 2.45143C10.6942 2.17001 10.8908 1.92929 11.1434 1.75987C11.3961 1.59046 11.6934 1.5 11.9976 1.5C12.3018 1.5 12.5991 1.59046 12.8518 1.75987C13.1044 1.92929 13.301 2.17001 13.4165 2.45143L15.5493 7.61518L21.0806 8.06143C21.3832 8.08703 21.6716 8.20137 21.9095 8.39013C22.1475 8.57888 22.3244 8.83366 22.4182 9.12255C22.512 9.41143 22.5185 9.72157 22.4368 10.0141C22.3551 10.3066 22.1889 10.5686 21.959 10.7671L21.9646 10.7661Z"
                      fill="#BABABC"
                    ></path>
                  </svg>
                </div>
                <p className=" text-sm font-medium text-right text-accent-foreground">17 reviews</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {livView && (
        <section className="dark:bg-black border-[1px] border-solid border-custom rounded-xl p-5 bg-white min-h-[{{card_height}}] flex flex-col gap-4">
          <div className="flex flex-row justify-start items-start gap-3">
            {showImage && user.resource_image_url && <UserImage fullWidth={false} user={user} />}
            <div className="flex flex-col items-start justify-center flex-grow gap-3">
              <span className="text-primary font-[600] dark:text-primary md:text-lg xs:text-sm">
                {user.site_name ?? user.name}
              </span>
              <span className="dark:text-accent-foreground whitespace-nowrap">
                {user.account_type && ACCOUNT_TYPES[user.account_type]}
              </span>
              <div className="flex items-center justify-between">
                <a
                  className="text-primary dark:text-accent-foreground"
                  href={"/next/profile/" + user.entity_id}
                  target="_blank"
                >
                  proz.com/profile/{user.entity_id}
                </a>
              </div>
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
                  <div className=" w-full flex items-start justify-start gap-2">
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
                  <Tooltip message="Save profile">
                    <span className="material-symbols-outlined text-gray-400">favorite</span>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between gap-2" role="button">
                  {/* <span>Share</span> */}
                  <Tooltip message="Share">
                    <span className="material-symbols-outlined">share</span>
                  </Tooltip>
                </div>
              </div>
              {livView && (
                <Tooltip message="Update profile">
                  <a href="#">
                    <span className="material-symbols-outlined">switch_account</span>
                  </a>
                </Tooltip>
              )}
              {showCopyUserId && (
                <Tooltip message="Copy url to clipboard">
                  <span
                    onClick={() => copyToClipboard(user.entity_id)}
                    className=" cursor-pointer material-symbols-outlined text-[20px]"
                  >
                    content_copy
                  </span>
                </Tooltip>
              )}
            </div>
          </div>
          {showProgress && livView && (
            <div>
              <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <span className="flex gap-2">
                  <span className="dark:text-accent-foreground">Profile completion</span>
                  <span className="flex-grow text-primary">{profileCompleteness}%</span>
                </span>
                <a href="#" target="_blank" className="text-primary">
                  View completion guide
                </a>
              </div>
              <ProgressBar progress={50} />
            </div>
          )}
          {children}
        </section>
      )}
    </React.Fragment>
  );
};

export default AccountUserCard;
