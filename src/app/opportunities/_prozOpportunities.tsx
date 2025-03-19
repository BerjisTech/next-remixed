"use client";
import React, { useEffect, useState } from "react";
import useInterpretingCallsHook from "@/hooks/useInterpretersCallsHook";
import { useFormatedLoopJobs } from "@/hooks/useLoopJobsHook";
import Modal from "./_prozOpportunitiesServicesModal";
import JobCard from "@/components/shared/cards/jobCards";
import SearchBar from "@/components/shared/searchBar";
import { useAppSelector } from "@/lib/store/hooks";
import { fetchAccessToken } from "@/server/php-api/apiAuth";
import { LANGUAGE_SERVICES_WITH_IDS, FIELDS_GENERAL } from "@/constants/common";
import { getApiBaseUrl } from "@/utils/helpers";
import Link from "next/link";
import ProzSwitch from "@/components/general/prozSwitch";

const ProzOpportunities: React.FC = () => {
  //
  // State area
  //

  const [tags, setTags] = useState<any>([]);
  const [opportunities, setOpportunities] = useState<any>([]);
  const [jobs, setJobs] = useState<any>([]);
  const [loopOpportunities, setLoopOpportunities] = useState<any>([]);
  const [opportunitiesMeta, setOpportunitiesMeta] = useState<any>([]);
  const [token, setToken] = useState<any>(null);
  const [filtersUpdated, setFiltersUpdated] = useState<boolean>(false);
  let { entityId } = useAppSelector((state) => state.profile);
  let { isAdmin } = useAppSelector((state) => state.profile);
  let [i_can_quote, set_i_can_quote] = useState<string>("true");
  const [langPairs, setLangPairs] = useState<string>("mine");
  const [status, set_status] = useState<string>("open");
  const [searchValue, setSearchValue] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [myGenFields, setMyGenFields] = useState<boolean>(true);
  const [mySpecFields, setMySpecFields] = useState<boolean>(false);
  const [includeProbono, setIncludeProbono] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const { interpretingCalls, getInterpretersCalls } = useInterpretingCallsHook();
  const { formatedloopJobs, getformatedLoopJobs } = useFormatedLoopJobs();
  const [jobId, setJobId] = useState<any>(null);
  const [jobIdIsFromLoop, setJobIdIsFromLoop] = useState<boolean>(false);

  const [visibleJobs, setVisibleJobs] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const saveCookieNoShowModal = () => {
    sessionStorage.setItem("hideModal", "true");
  };

  //
  // functions area
  //

  const addTag = (newTag: string) => {
    setTags((prevTags: any) => {
      if (!prevTags.includes(newTag)) {
        return [...prevTags, newTag];
      }
      return prevTags;
    });
  };

  const handleStatusFilter = () => {
    set_status(status == "all" ? "open" : "all");
    setFiltersUpdated(true);
  };

  const handleLangPairsFilter = () => {
    setLangPairs(langPairs === "mine" || entityId == 0 ? "all" : "mine");
    setFiltersUpdated(true);
  };

  const handleUseGenFields = () => {
    setFiltersUpdated(true);
    setMyGenFields(myGenFields ? false : true);
  };

  const handleUseSpecFields = () => {
    setFiltersUpdated(true);
    setMySpecFields(!mySpecFields);
  };

  const handleIncludeProbono = () => {
    setFiltersUpdated(true);
    setIncludeProbono(!includeProbono);
  };

  let handleInputChange = (value: any) => {
    setSearchValue(value);
    setFiltersUpdated(true);
  };

  const getAccessToken = async (entityId: any) => {
    fetchAccessToken(entityId).then((token) => {
      setToken(token);
    });
  };

  const getJobs = async (params: any) => {
    if (!token) return;
    let url = new URL(getApiBaseUrl("job-postings", true));
    Object.keys(params).forEach((key) => url.searchParams?.append(key, params[key]));
    await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the data to the state
        setJobs(data ? data.data : []);
      });
  };

  const fetchSpecificJob = async (job_id: any, from_loop: boolean) => {
    if (!from_loop) {
      let url = new URL(getApiBaseUrl("job-postings/" + job_id, true));
      await fetch(url.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } else {
      return getLoopJob(job_id);
    }
  };

  const getLoopJobs = async (type: string = "all") => {
    if (!token) return;

    const selectors: any = { "t1.job_status": "open", "t1.application_status": "open" };

    if (type == "probono") {
      selectors["t2.type"] = "probono";
    } else if (type == "paid") {
      selectors["t2.type"] = "paid";
    }

    await fetch(
      `https://nodeapi.proz.com/api/v1/getbyselectorsguest?table=jobs&selectors=${encodeURIComponent(JSON.stringify(selectors))}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (userData === null || langPairs === "all") {
          getformatedLoopJobs(data ? data.entries : []);
          return;
        }
        const updatedEntries = data.entries.filter((entry: any) => {
          return userData.language_pairs.includes(entry.language_pair.replace(/-/g, "_"));
        });

        getformatedLoopJobs(updatedEntries ? updatedEntries : []);
      });
  };

  const getLoopJob = async (job_id: number) => {
    if (!job_id) return;

    const selectors = { "t1.id": job_id };
    await fetch(
      `https://nodeapi.proz.com/api/v1/getbyselectorsguest?table=jobs&selectors=${encodeURIComponent(JSON.stringify(selectors))}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.entries[0];
      });
  };

  // Check if user have a membership
  const getUserData = async (entity: number) => {
    if (entity > 0 && !userData) {
      try {
        let url = new URL(getApiBaseUrl("user", false));
        let params: any = {
          entityId: entity,
          include_language_pairs: 1,
          include_field_of_expertise: 1,
          include_language_credentials: 1,
        };
        Object.keys(params).forEach((key) => url.searchParams?.append(key, params[key]));

        const response = await fetch(url);

        // const response = await fetch(`/next/api/user?entityId=${entityId}&include_language_pairs=1&include_field_of_expertise=1&include_language_credentials=1`);

        const data = await response.json();
        setUserData(data[0]);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    } else {
      console.error("No entity ID found");
    }
  };

  const checkCanApply = (job: any) => {
    const messages: string[] = [];

    // Allow probono jobs without restrictions
    if (job.is_probono) {
      return { canApply: true, messages };
    }

    // Check if the user is logged in
    if (!entityId) {
      messages.push("You need to be logged in to apply for this job.");
      return { canApply: false, messages };
    }

    // Check if contact information is available
    if (!job.contact_info) {
      messages.push("No contact information is available.");
      return { canApply: false, messages };
    }

    // Check if the user has already applied for the job
    if (job.already_applied) {
      messages.push("You have already applied for this job.");
    }

    // Check if the job has expired
    if (job.time_expires) {
      const expirationDate = new Date(job.time_expires);
      if (new Date() > expirationDate) {
        messages.push("This job posting has expired.");
      }
    }

    // Check if user met the language requirements
    const jobLanguagePairs = job.language_pairs.map((pair: string) => pair.replace("-", "_"));
    const userLanguagePairs = userData?.language_pairs || [];

    const normalizeLanguagePair = (pair: string) => {
      const [lang1, lang2] = pair.split("_");
      const normalize = (lang: string) => (lang === "spa" || lang === "esl" ? "es" : lang);
      return `${normalize(lang1)}_${normalize(lang2)}`;
    };
    const normalizedJobPairs = jobLanguagePairs.map(normalizeLanguagePair);
    const normalizedUserPairs = userLanguagePairs.map(normalizeLanguagePair);

    const hasMatchingLanguagePair = normalizedJobPairs.some((pair: string) =>
      normalizedUserPairs.includes(pair)
    );

    if (!hasMatchingLanguagePair) {
      messages.push(
        `You do not meet the language pair requirements for this job. <a href="https://www.proz.com/settings/languages" target="_blank" style="color: #007bff; text-decoration: underline;">[Update language pairs]</a>`
      );
    }

    // Check if user has the field of expertise required
    const jobGeneralFields = job.provider_requirements.disc_gen_ids || [];
    const userGeneralFields = userData?.field_of_expertise?.general_fields || [];
    const userFieldIds = userGeneralFields.map((userField: any) =>
      Object.keys(userField).find((key) => !isNaN(Number(key)))
    );

    const hasMatchingGeneralField = jobGeneralFields.some((jobFieldId: number) =>
      userFieldIds.includes(String(jobFieldId))
    );

    const requiredFields = jobGeneralFields
      .map((id: number) => {
        const field = FIELDS_GENERAL.find((field) => field.id === id);
        const userHasField = userFieldIds.includes(String(id));
        return field
          ? `<span style="color: ${userHasField ? "green" : "red"};">${field.name}</span>`
          : '<span style="color: red;">Unknown</span>';
      })
      .join(", ");

    if (job.provider_requirements.disc_gen_importance === "required" && !hasMatchingGeneralField) {
      messages.push(
        `You do not meet the general field of expertise required for this job: ${requiredFields} <a href="https://www.proz.com/settings/freelancer/services#fields" target="_blank" style="color: #007bff; text-decoration: underline;">[Edit]</a>`
      );
    }

    // Check restrictions for companies/agencies
    if (
      job.provider_requirements.account_type === "companies" &&
      job.provider_requirements.account_type_importance === "required" &&
      ![1, 3, 7].includes(userData?.account_type)
    ) {
      messages.push(
        "The outsourcer has restricted quoting on this job to companies or agencies only."
      );
    }

    // Check language certifications requirements
    if (job.provider_requirements.credentials === "reported") {
      if (
        job.provider_requirements.account_type === "freelancers" &&
        job.provider_requirements.account_type_importance === "required" &&
        ![1, 3, 7].includes(userData?.account_type)
      ) {
        const jobLanguagePairs = job.language_pairs;
        const userLanguageCredentials = userData?.language_credentials || [];

        const hasMatchingCredential = jobLanguagePairs.some((jobPair: string) =>
          userLanguageCredentials.some((credential: any) => credential.language_pair === jobPair)
        );

        if (!hasMatchingCredential) {
          messages.push(
            `You do not have the required credentials for this pairs. <a href="https://www.proz.com/settings/languages#credentials" target="_blank" style="color: #007bff; text-decoration: underline;">[Edit]</a>`
          );
        }
      }
    }

    // Check for valid contact methods
    const hasValidContact =
      (job.contact_info.url &&
        job.contact_info.url.trim() !== "" &&
        job.contact_method === "url") ||
      (job.contact_info.email &&
        job.contact_info.email.trim() !== "" &&
        job.contact_method === "email") ||
      job.contact_method === "proz";

    if (hasValidContact) {
      return { canApply: true, messages };
    }

    if (messages.length === 0) {
      return { canApply: true, messages };
    } else {
      return { canApply: false, messages };
    }
  };

  const loadMoreJobs = () => {
    // Load jobs when user scrolls to the bottom of the page
    // Mobile: 900, Tablet: 500, Desktop: 300
    const windowWidth = window.innerWidth <= 425 ? 100 : window.innerWidth <= 768 ? 600 : 300;
    if (
      window.innerHeight + document.documentElement.scrollTop + windowWidth >=
      document.documentElement.offsetHeight
    ) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleJobs((prevVisible: number) => prevVisible + 10); // Show 6 more courses
        setLoadingMore(false);
      }, 1000); // Simulate a network request delay
    }
  };

  const handleSetOpportunities = () => {
    let mergedJobs: any = [];
    if (loopOpportunities.length > 0) {
      mergedJobs = [
        ...jobs, // Include all objects from the second array
        ...loopOpportunities,
      ];
    } else {
      mergedJobs = jobs;
    }

    if (interpretingCalls.length > 0) mergedJobs = [...mergedJobs, ...interpretingCalls];

    let sortedJobs = mergedJobs
      .map((job: any) => ({ ...job, date: new Date(job.time_posted) }))
      .sort((a: any, b: any) => b.date - a.date)
      .map(({ date, ...job }: { date: Date; [key: string]: any }) => job); // Remove the temporary property

    if (isAdmin) {
      sortedJobs = sortedJobs.sort((a: any, b: any) => {
        if (a.status === "pending" && b.status !== "pending") return -1;
        if (a.status !== "pending" && b.status === "pending") return 1;
        return 0;
      });
    } else {
      sortedJobs = sortedJobs.filter((job: any) => job.status !== "pending");
    }

    sortedJobs = sortedJobs
      .map((job: any) => {
        const { canApply, messages } = checkCanApply(job);
        return {
          ...job,
          canApply,
          messages,
        };
      })
      .sort((a: any, b: any) => {
        if (a.canApply && !b.canApply) return -1;
        if (!a.canApply && b.canApply) return 1;
        return 0;
      });

    setOpportunities(sortedJobs);
    setOpportunitiesMeta({ total: mergedJobs.length });
  };

  //
  // Use effects area
  //

  // Get bearer token for user.
  useEffect(() => {
    if (!entityId) {
      set_i_can_quote("false");
      setLangPairs("all");
      setMyGenFields(false);
      // setMySpecFields(false);
      getAccessToken(3944);
    } else {
      set_i_can_quote("true");
      setLangPairs("mine");
      setMyGenFields(true);
      // setMySpecFields(true);
      getAccessToken(entityId);
    }
  }, [entityId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setJobId(searchParams?.get("jobId"));
      setJobIdIsFromLoop(searchParams?.get("from_loop") == "1");
    }
  }, []);

  useEffect(() => {
    if (formatedloopJobs.length > 0) setLoopOpportunities(formatedloopJobs);
  }, [formatedloopJobs]);

  // This loads the user data and probono jobs for first time
  useEffect(() => {
    if (entityId && !userData) getUserData(entityId);
    getLoopJobs();
  }, [userData, entityId]);

  // This loads the jobs on filtering
  useEffect(() => {
    if (!filtersUpdated) return;
    if (includeProbono) getLoopJobs();
    else getLoopJobs("paid");

    let service_id = null;
    LANGUAGE_SERVICES_WITH_IDS.forEach((service: any) => {
      if (service.service_name.toLowerCase() === searchValue.toLowerCase()) {
        service_id = service.service_id;
      }
    });
    let params: any = { status, language_pairs: langPairs, q: searchValue };

    if (service_id) {
      params = { ...params, language_service_id: service_id };
      delete params?.q;
      setIncludeProbono(false);
    }

    if (myGenFields) {
      params = { ...params, fields: "my_disc_gens" };
    }

    if (mySpecFields) {
      params = { ...params, fields: "my_disc_specs" };
    }

    if (status === "all") delete params?.status;

    getJobs(params);
  }, [searchValue, langPairs, includeProbono, myGenFields, mySpecFields, status]);

  useEffect(() => {
    if (jobId && opportunities.length > 0 && loading === false) {
      const selectedOpp = opportunities.find((opp: any) => opp.id == jobId);
      if (selectedOpp) {
        const updatedOpportunities = opportunities.filter((opp: any) => opp.id !== jobId);
        updatedOpportunities.unshift(selectedOpp);
        setOpportunities(updatedOpportunities);
      } else {
        let selectedOpp = fetchSpecificJob(jobId, jobIdIsFromLoop);
        if (selectedOpp) {
          setOpportunities([selectedOpp, ...opportunities]);
        }
      }
    }
  }, [loading]);

  // This sets the opportunities
  useEffect(() => {
    if (jobs.length === 0 && !filtersUpdated) return;
    handleSetOpportunities();
  }, [loopOpportunities, jobs, interpretingCalls]);

  // Load more courses when user scrolls to the bottom
  useEffect(() => {
    // Set the scroll up when load the page.
    window.scrollTo(0, 0);
    window.addEventListener("scroll", loadMoreJobs);
    return () => window.removeEventListener("scroll", loadMoreJobs); // Cleanup
  }, []);

  // This will set the loading to false after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (!sessionStorage.getItem("hideModal")) {
        handleModalOpen();
      }
    }, 5000);
  }, []);

  // This will set the loading to true when the page is loading and false after 2 seconds
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      // after 5 seconds the loading will be set to false, this works to prevent show different job lists when the page is loading
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [includeProbono, myGenFields, mySpecFields, searchValue, langPairs, status]);

  // This loads the jobs for first time
  useEffect(() => {
    if (entityId > 0) {
      setLangPairs("mine");
    }
    let lng_pair = entityId > 0 ? "mine" : "all";
    let params: any = { status, language_pairs: lng_pair, q: searchValue };

    if (myGenFields) {
      params = { ...params, fields: "my_disc_gens" };
    }

    if (mySpecFields) {
      params = { ...params, fields: "my_disc_specs" };
    }

    getJobs(params);

    getInterpretersCalls();
  }, [token, entityId]);

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleInputChange={handleInputChange}
        saveCookieNoShowModal={saveCookieNoShowModal}
      />

      <div className="">
        <div className="container flex flex-col md:flex-row items-start justify-start gap-3 py-[30px]">
          <div className="w-full md:w-[calc(100%-0px)] flex flex-col gap-4">
            <div className="flex flex-row">
              <Link className="text-primary" href="/next/">
                Home
              </Link>
              <span className="text-black dark:text-white"> {">"} Opportunities</span>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-3 gap-4">
              <div className="md:col-span-1 col-span-3">
                <div className="sticky top-[80px] bg-gray-100 border-2 border-t-primary dark:bg-black p-2 rounded-2xl text-white">
                  <h1 className="w-full text-center text-primary dark:text-white mb-4 text-lg">
                    Filter by{" "}
                  </h1>

                  <label className="inline-flex relative items-center cursor-pointer">
                    <ProzSwitch
                      label="Open only"
                      value={status === "open" ? "1" : "0"}
                      reverse={true}
                      updateValue={handleStatusFilter}
                    />
                  </label>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <ProzSwitch
                      label="My language pairs"
                      value={langPairs === "mine" ? "1" : "0"}
                      reverse={true}
                      updateValue={handleLangPairsFilter}
                    />
                  </label>

                  <label className="inline-flex relative items-center cursor-pointer">
                    <ProzSwitch
                      label="My general fields"
                      value={myGenFields ? "1" : "0"}
                      reverse={true}
                      updateValue={handleUseGenFields}
                    />
                  </label>

                  {/* <label className="inline-flex relative items-center cursor-pointer">
                    <Input
                      type="checkbox"
                      className="sr-only peer"
                      checked={mySpecFields}
                      onChange={() => handleUseSpecFields()}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      My Specific fields
                    </span>
                  </label> */}

                  <label className="inline-flex relative items-center cursor-pointer">
                    <ProzSwitch
                      label="Probono jobs"
                      value={includeProbono ? "1" : "0"}
                      reverse={true}
                      updateValue={handleIncludeProbono}
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <span className="cursor-not-allowed text-primary dark:text-white text-center block mt-4 ">
                    My quotes
                  </span>
                  <span className="cursor-not-allowed text-primary dark:text-white text-center block mt-4 ">
                    Update my profile
                  </span>
                </div>
              </div>
              <div className="col-span-3">
                <div className="items-center md:inline-flex w-full gap-4">
                  <div className="justify-start items-center gap-6 flex w-3/5 xl:w-1/2">
                    <SearchBar
                      onInputChange={handleInputChange}
                      defaultDimensions={false}
                      placeholder="Medical, game localization, interpreter, proofreading"
                    />
                  </div>
                  <div className="justify-start items-center gap-6 xl:pr-6 flex">
                    <div className="justify-start items-center gap-6 flex cursor-pointer">
                      <div className="justify-start items-center gap-2 flex">
                        {/* <div className="text-dark-blue-hue text-sm font-medium font-['Poppins'] leading-tight dark:text-white">Filters</div>
                          <div className="w-6 h-6 px-[3px] py-1.5 justify-center items-center flex">
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
                          <path d="M6.5 12H18.5M3.5 6H21.5M9.5 18H15.5" stroke="#74c3c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                          </div> */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-white">
                      {loading ? (
                        <>
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Showing</span>
                          <span className="font-medium"> {opportunitiesMeta.total} </span>
                          <span>results</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row">
                  {tags.map((tag: any, i: number) => (
                    <span
                      key={i}
                      className={`flex flex-wrap justify-start items-start gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent ${["Freelancers", "Businesses"].includes(tag) ? "pr-3" : ""}`}
                    >
                      <p className="text-xs font-medium text-left text-primary cursor-pointer">
                        {tag}
                      </p>
                      {!["Freelancers", "Businesses"].includes(tag) && (
                        <span className="cursor-pointer">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="w-[18px] h-[18px] relative"
                          >
                            <rect x="0.5" width="18" height="18" rx="9" fill="#3A9796"></rect>
                            <path
                              d="M11.75 6.74805L7.25 11.248M7.25 6.74805L11.75 11.248"
                              stroke="#D3ECEC"
                              strokeWidth="0.9"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center xl:justify-start gap-7 mt-3 w-full">
                  {loading ? (
                    <>
                      <span>Loading opportunities...</span>
                    </>
                  ) : (
                    <>
                      {opportunities.slice(0, visibleJobs).map((opp: any, index: any) => (
                        <JobCard
                          key={index}
                          job={opp}
                          entity_id={entityId}
                          force_open={jobId && opp.id == jobId}
                        ></JobCard>
                      ))}

                      {visibleJobs < opportunities.length && loadingMore && (
                        // Load more animation
                        <div className="flex justify-center w-full mt-6 mb-6 animate-pulse">
                          <div className="loader rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-pulse"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-transparent px-4 py-3 sm:px-6">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {" "}
                      Previous{" "}
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {" "}
                      Next{" "}
                    </a>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-white">
                        {loading ? (
                          <>
                            <span>Loading...</span>
                          </>
                        ) : (
                          <>
                            <span>Showing</span>
                            <span className="font-medium"> {opportunitiesMeta.total} </span>
                            <span>results</span>
                          </>
                        )}
                      </p>
                    </div>
                    <div>
                      {/* <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                          <a className="cursor-not-allowed relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          </a>
                          <a aria-current="page" className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 cursor-not-allowed">1</a>
                          <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">2</a>
                          <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">3</a>
                          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-not-allowed">...</span>
                          <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">8</a>
                          <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">9</a>
                          <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">10</a>
                          <a className="cursor-not-allowed relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-not-allowed">
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          </a>
                          </nav> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProzOpportunities;
