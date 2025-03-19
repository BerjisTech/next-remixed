"use client";
import React, { useEffect } from "react";
import OpportunitiesDrawer from "../opportunitiesDrawer";
import { LANGUAGE_SERVICES_WITH_IDS, LANGUAGES } from "@/constants/common";
import { toast } from "sonner";
import StarRating from "@/components/shared/starRating";
import Image from "next/image";

const JobCard: React.FC<{ job: any; entity_id: any; force_open: boolean }> = ({
  job,
  entity_id,
  force_open,
}) => {
  const companyInfo = job?.contact_info;
  const [canApply, setCanApply] = React.useState(false);
  const [quotes, setQuotes] = React.useState(0);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // "Nov"
      day: "numeric", // "6"
    };

    return date.toLocaleDateString("en-US", options);
  };

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(force_open ? true : false);

  const getLanguageByCode = (code: string): string | undefined => {
    const language = LANGUAGES.find((l) => l.language_code === code);
    return language?.language_name;
  };

  const GetLanguagePairName = (pair: string): string => {
    const languagePair = pair.split("_");

    if (languagePair[0] == "spa") {
      languagePair[0] = "esl";
    }

    if (languagePair[1] == "spa") {
      languagePair[1] = "esl";
    }

    const sourceLanguage = getLanguageByCode(languagePair[0]);
    const targetLanguage = getLanguageByCode(languagePair[1]);
    return `${sourceLanguage} to ${targetLanguage}`;
  };

  const getServiceNameById = (serviceId: number): string | undefined => {
    const service = LANGUAGE_SERVICES_WITH_IDS.find((s) => s.service_id === serviceId);
    return service?.service_name;
  };

  const setQuotesForJob = async (job: any) => {
    if (job.type == "probono") {
      let applicantsArray = [];
      if (job.applicants == "") {
        if (job.applicants && typeof job.applicants === "string") {
          applicantsArray = job.applicants.split(",").map(Number);
        }
      }
      setQuotes(applicantsArray.length);
    } else {
      let quotesArray = job.quotes > 0 ? job.quotes : job.possible_quoters;
      setQuotes(quotesArray);
    }
  };

  useEffect(() => {
    setQuotesForJob(job);
  }, [job]);

  useEffect(() => {
    setCanApply(job.type == "interpreting_call" ? false : job.canApply);
  }, [companyInfo]);

  const handleOpportunityOpen = () => {
    if (job.type != "interpreting_call") {
      setDrawerIsOpen(!drawerIsOpen);
    } else {
      setDrawerIsOpen(false);
      toast.info(
        "The interpreting call opportunities are not available for this version of the platform. You will be redirected!."
      );
      setTimeout(() => {
        window.open("https://go.proz.com/interpreter-apply", "_blank");
      }, 4000);
    }
  };

  const getJobTypeForCards = (jobType: string): string => {
    if (jobType == "probono") {
      return "Pro Bono";
    } else if (jobType == "paid") {
      return "Managed services";
    } else if (jobType == "interpreting_call") {
      return "Interpreting Call";
    } else {
      return jobType;
    }
  };

  return (
    <>
      <div
        onClick={() => handleOpportunityOpen()}
        className={`self-stretch grow w-full lg:w-[45%] lg:max-w-[45%] xl:max-w-[50%] cursor-pointer p-4 ${job.status == "pending" ? "dark:bg-transparent bg-gray-300" : "dark:bg-black bg-[#f8f7f1]"} rounded-3xl border-2 flex-col justify-start items-start gap-4 flex ${canApply ? "border-[#88bdbd]" : job.type == "interpreting_call" ? "border-[#A85191]" : "border-[#efede3]"}`}
      >
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="px-2 py-0.5 bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
              <div className="text-center text-[#344053] dark:text-black text-xs font-normal leading-[18px]">
                Job offer (<span className="capitalize">{getJobTypeForCards(job.type)}</span>)
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-1 flex flex-wrap">
            <div className="px-2 py-0.5 bg-[#ebfdf2] rounded-2xl justify-start items-center flex">
              <div className="text-center text-[#027A48] text-xs dark:text-primary font-normal leading-[18px]">
                {job.status}
              </div>
            </div>
            <div className="px-2 py-0.5 bg-[#f2f3f6] rounded-2xl justify-start items-center flex">
              <div className="text-center text-[#344053] text-xs font-normal f</div>ont-['Poppins'] leading-[18px]">
                {quotes} quotes
              </div>
            </div>
          </div>
          {canApply && job.already_applied ? (
            <div className="px-2 py-0.5 bg-[#ebfdf2] rounded-2xl justify-start items-center flex">
              <div className="text-center text-[#027A48] text-xs dark:text-primary font-normal leading-[18px]">
                Applied
              </div>
            </div>
          ) : (
            <></>
          )}
          {canApply && !job.already_applied ? (
            <div className="px-2 py-0.5 bg-[#ebfdf2] rounded-2xl justify-start items-center flex">
              <div className="text-center text-[#027A48] text-xs dark:text-primary font-normal leading-[18px]">
                You can apply.
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {!canApply && job.messages && job.messages.length > 0 && (
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex w-full">
              {job.messages.map((message: string, index: number) => (
                <div
                  key={index}
                  className="text-[#ff0000] text-sm font-normal dark:text-red-500 leading-tight"
                  dangerouslySetInnerHTML={{ __html: message }}
                ></div>
              ))}
            </div>
          </div>
        )}
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-[#1d2939] text-base dark:text-white font-semibold leading-normal">
            {job.summary}
          </div>
          <div className="pl-3 flex-col justify-start items-start gap-1 flex w-full">
            <div className="w-full" style={{ wordWrap: "break-word" }}>
              {/* <span className="text-[#344054] text-sm font-normal dark:text-white leading-tight">English to German</span> */}
              {job.language_pairs.map((pair: string, index: number) => (
                <React.Fragment key={index}>
                  {index < 3 && (
                    <span className="text-[#344054] text-sm font-normal dark:text-white leading-tight">
                      {GetLanguagePairName(pair)}
                      {index < 2 && index < job.language_pairs.length - 1 && ","}{" "}
                      {/* Agrega la coma solo si no es el último elemento visible */}
                    </span>
                  )}
                  {index === 3 && <span>...</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="w-full" style={{ wordWrap: "break-word" }}>
              {Array.isArray(job.language_service_ids) && (
                <>
                  {job.language_service_ids.map((serviceId: number, index: number) => (
                    <React.Fragment key={index}>
                      {index < 3 && (
                        <span className="text-[#344054] text-sm font-normal dark:text-white leading-tight">
                          {getServiceNameById(serviceId)}
                          {index < 2 && index < job.language_service_ids.length - 1 && ","}{" "}
                          {/* Agrega la coma solo si no es el último elemento visible */}
                        </span>
                      )}
                      {index === 3 && <span>...</span>}
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-6 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-1 h-1 bg-[#4d9d9d] rounded-full"></div>
            <div className="text-[#344054] text-sm font-medium dark:text-white leading-tight">
              Posted: {formatDate(job.time_posted)}
            </div>
            <div className="w-1 h-1 bg-[#4d9d9d] rounded-full"></div>
            {job.time_expires && (
              <div className="text-[#344054] text-sm font-medium dark:text-white leading-tight">
                Closes: {formatDate(job.time_expires)}
              </div>
            )}
          </div>
          {job.delivery_deadline && job.delivery_deadline != "0000-00-00 00:00:00" && (
            <div className="justify-start items-center gap-1 flex">
              <div className="w-1 h-1 bg-[#4d9d9d] rounded-full"></div>
              <div className="text-[#344054] text-sm font-medium dark:text-white leading-tight">
                Delivery: {formatDate(job.delivery_deadline)}
              </div>
            </div>
          )}
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          {!companyInfo?.contact_hidden && (
            <div className="rounded-[9px] flex-col w-full justify-start items-center gap-2 flex">
              <div className="w-full rounded-3xl flex">
                {companyInfo.business_img != "" && (
                  <div className="w-full relative flex-col justify-start items-start flex rounded-3xl">
                    <div className="w-1/2 h-10 flex rounded-3xl text-white text-2xl">
                      <Image
                        className="h-full object-contain"
                        src={companyInfo.business_img}
                        alt="Company image"
                        width={100} // Adjust width as needed
                        height={40} // Adjust height as needed
                      />
                    </div>
                  </div>
                )}
                {companyInfo.business_img == "" && (
                  <div className="w-10 h-10 bg-gray-400 relative flex-col justify-start items-start flex rounded-3xl">
                    <div className="w-10 h-10 flex rounded-3xl justify-center items-center text-white text-2xl">
                      <span>B</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-col w-full justify-center items-start gap-px inline-flex">
                {companyInfo.company && (
                  <>
                    <div className="justify-start items-center gap-px inline-flex">
                      <div className="text-primary text-sm dark:text-primary font-semibold leading-tight flex flex-row gap-1">
                        {companyInfo.bus_membership &&
                          companyInfo.bus_membership == "enterprise" && (
                            <Image
                              src="/next/next_assets/images/bus-enterprise-ribbon.svg"
                              alt="Membership"
                              width={16}
                              height={16}
                              className="cursor-pointer"
                            />
                          )}
                        {companyInfo.bus_membership && companyInfo.bus_membership == "plus" && (
                          <Image
                            src="/next/next_assets/images/bus-plus-ribbon.png"
                            alt="Membership"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                          />
                        )}
                        {companyInfo.bus_membership && companyInfo.bus_membership == "standard" && (
                          <Image
                            src="/next/next_assets/images/business-member-ribbon.svg"
                            alt="Membership"
                            width={16}
                            height={16}
                            className="cursor-pointer"
                          />
                        )}
                        <a
                          href={"/business/" + companyInfo.business_id}
                          role="button"
                          target="_blank"
                        >
                          {companyInfo.company}
                        </a>
                      </div>
                    </div>
                    <div className="rounded justify-start items-center gap-6 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        {job.blueboard_avg_lwa > 0 && (
                          <StarRating size="small" rating={job.blueboard_avg_lwa}></StarRating>
                        )}
                        <div className="text-[#344054] dark:text-white font-normal font-['Poppins']">
                          {job.blueboard_avg_lwa}
                          {job.blueboard_entries &&
                            job.blueboard_entries > 0 &&
                            `(${job.blueboard_entries})`}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {companyInfo?.contact_hidden && (
            <div className="rounded-[9px] justify-start items-center gap-2 flex">
              <div className="w-10 h-10 rounded-3xl border border-[#d0d5dd] justify-center items-center flex">
                <div className="w-10 h-10 bg-gray-400 relative flex-col justify-start items-start flex rounded-3xl">
                  {companyInfo.type == "company" && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-3xl text-white text-2xl">
                      B
                    </div>
                  )}
                  {companyInfo.type != "company" && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-3xl text-white text-2xl">
                      F
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="justify-start items-start gap-px inline-flex">
                  <div className="text-primary text-sm dark:text-primary font-semibold leading-tight">
                    {companyInfo.type == "company" ? "Company" : "Freelancer"}
                  </div>
                </div>
                <div className="rounded justify-start items-center gap-6 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    {job.blueboard_avg_lwa > 0 && (
                      <StarRating size="small" rating={job.blueboard_avg_lwa}></StarRating>
                    )}
                    <div className="text-[#344054] dark:text-white font-normal font-['Poppins']">
                      {job.blueboard_avg_lwa}
                      {job.blueboard_entries &&
                        job.blueboard_entries > 0 &&
                        `(${job.blueboard_entries})
                                    `}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="justify-start items-center gap-1 flex">
            <div className="w-4 h-4 px-[1.33px] py-[2.67px] justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26c.26.17.58.17.84 0L19 8m2 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m16-4H5a2 2 0 00-2 2v.6l9 6 9-6V8a2 2 0 00-2-2z"
                ></path>
              </svg>
            </div>
            <div className="text-[#344054] text-sm font-normal dark:text-white leading-tight capitalize">
              {job.contact_method == "proz" && <span>Quoting form</span>}
              {job.contact_method != "proz" && <span>{job.contact_method}</span>}
            </div>
          </div>
        </div>
      </div>
      <OpportunitiesDrawer
        selectedJob={job}
        isOpen={drawerIsOpen}
        entity_id={entity_id}
      ></OpportunitiesDrawer>
    </>
  );
};

export default JobCard;
