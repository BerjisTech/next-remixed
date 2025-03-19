"use client";
import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "@/components/shared/searchBar";
import DirectoryBusinessCard from "@/components/shared/cards/directoryBusinessCard";
import { useParams } from "next/navigation";
import utf8 from "utf8";
import DirectoryCard from "@/components/shared/cards/directoryCards";
import HeroSection from "../_heroSection";

const DirectoryPage: React.FC = () => {
  const urlParams = useParams();
  let [service, setService] = useState("");

  // Helper function to convert a JSON object to UTF-8
  const utf8ize = useCallback((data: any): any => {
    if (Array.isArray(data)) {
      // If it's an array, process each element recursively
      return data.map((item) => utf8ize(item));
    } else if (typeof data === "object" && data !== null) {
      // If it's an object, process each value recursively
      const result: any = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          result[key] = utf8ize(data[key]);
        }
      }
      return result;
    } else if (typeof data === "string") {
      try {
        // use utf8 library
        return utf8.decode(data);
      } catch (e) {
        console.error("Error decoding string to UTF-8:", e);
        return data; // Return the original string in case of error
      }
    }

    // Return the data if it's already UTF-8 or not a string
    return data;
  }, []);

  // Async functions
  const fetchUsers = async (params: any) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`/next/api/users?${queryString}`);
      let data = await response.json();
      data = utf8ize(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBusinesses = useCallback(
    async (params: any) => {
      try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`/next/api/businesses?${queryString}`);
        let data = await response.json();
        data = utf8ize(data);
        setBusinesses(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setLoading(false);
      }
    },
    [utf8ize]
  );

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input change
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file select
  };

  const removeTag = (index: number) => {
    // Remove tag
  };

  let tags: any[] = []; // Example tags
  let filteringOptions: any = [];
  let showTemplate = true;
  let provider_loading_error = false;

  const [showFilterForm, setShowFilterForm] = React.useState(false);
  let progress = 10; // Example value
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"]; // Example steps
  let [currentStep, setCurrentStep] = useState(0);
  let [page, setPage] = useState(1);
  let [reload, setReload] = useState(false); // State to trigger re-fetch

  const commonLanguages = [
    { key: "eng", value: "English" },
    { key: "esl", value: "Spanish" },
    // Add more languages as needed
  ];
  const language_unidirectional = false; // Example value
  const translationSpecialties = ["Legal", "Medical", "Technical"]; // Example specialties
  const units = [
    { key: "word", value: "Word" },
    { key: "hour", value: "Hour" },
    // Add more units as needed
  ];
  const currencies = [
    { key: "usd", value: "USD" },
    { key: "eur", value: "EUR" },
    // Add more currencies as needed
  ];

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const updateFilterFormSteps = (index: number) => {
    // Function to update the current step
  };

  const updateFilteringOptions = (value: string, key: string) => {
    if (key === "service") {
      setService(value);
      setCurrentStep(1);
    }
  };

  const updatePage = (newPage: number) => {
    setLoading(true);
    setPage(newPage);
    setReload((prev) => !prev);
  };

  const [users, setUsers] = useState<any>();
  const [businesses, setBusinesses] = useState<any>();
  const [loadingProviders, setLoading] = useState(true);
  const [providerType, setProviderType] = useState("freelancers");

  useEffect(() => {
    if (urlParams?.service) {
      setService(Array.isArray(urlParams?.service) ? urlParams?.service[0] : urlParams?.service);
    }
    console.log("urlParams?.service:", urlParams?.service);
  }, [urlParams?.service]);

  useEffect(() => {
    if (service) {
      setReload((prev) => !prev);
    }
    console.log("service:", service);
  }, [service]);

  // Fetch users
  useEffect(() => {
    let showFreelancers = true;
    if (["lscs", "clients", "businesses", "outsourcers"].includes(service)) {
      setProviderType("businesses");
      showFreelancers = false;
    }

    const params = { service_id: "1", lang_pair: ["eng_esl"], page: page?.toString() };
    if (showFreelancers) {
      fetchUsers(params);
    } else {
      fetchBusinesses(params);
    }
  }, [page, reload, fetchUsers, fetchBusinesses, service]);

  // Helper function to check if a string is already UTF-8
  function isUtf8(str: string): boolean {
    try {
      // Decode and compare the original string with the decoded one
      return str === new TextDecoder("utf-8").decode(new TextEncoder().encode(str));
    } catch (e) {
      return false;
    }
  }

  const [searchInputValue, setSearchInputValue] = useState("");

  const handleInputChange = (value: any) => {
    setSearchInputValue(value);
  };

  return (
    <div>
      <HeroSection />
      <div className="md:container flex flex-col md:flex-row items-start justify-start gap-3 py-[30px]">
        <div className="w-full md:w-[calc(100%-0px)] flex flex-col gap-4">
          <div className="flex flex-row">
            <a className="text-primary" href="/next/">
              Home
            </a>
            <span className="text-black dark:text-white"> {">"} Directory</span>
          </div>
          <div className="justify-between items-center md:inline-flex">
            <div className="justify-start items-center gap-6 flex w-1/2">
              <SearchBar
                onInputChange={handleInputChange}
                defaultDimensions={false}
                placeholder="Search directory..."
              />
            </div>
            <div className="justify-start items-center gap-6 xl:pr-6 flex">
              <div className="justify-start items-center gap-3 flex">
                {/* <div className="flex items-center justify-start flex-wrap gap-3 whitespace-nowrap">
                <a href="/next/call" className="whitespace-nowrap flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border border-accent">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative" preserveAspectRatio="xMidYMid meet">
                    <path d="M18.3332 7.44216C18.3332 6.93731 18.3332 6.68489 18.2333 6.568C18.1467 6.46658 18.0168 6.41276 17.8838 6.42322C17.7306 6.43528 17.5521 6.61377 17.1951 6.97075L14.1665 9.99935L17.1951 13.0279C17.5521 13.3849 17.7306 13.5634 17.8838 13.5755C18.0168 13.5859 18.1467 13.5321 18.2333 13.4307C18.3332 13.3138 18.3332 13.0614 18.3332 12.5565V7.44216Z" stroke="#4D9D9D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.6665 8.16602C1.6665 6.76588 1.6665 6.06582 1.93899 5.53104C2.17867 5.06063 2.56112 4.67818 3.03153 4.4385C3.56631 4.16602 4.26637 4.16602 5.6665 4.16602H10.1665C11.5666 4.16602 12.2667 4.16602 12.8015 4.4385C13.2719 4.67818 13.6543 5.06063 13.894 5.53104C14.1665 6.06582 14.1665 6.76588 14.1665 8.16602V11.8327C14.1665 13.2328 14.1665 13.9329 13.894 14.4677C13.6543 14.9381 13.2719 15.3205 12.8015 15.5602C12.2667 15.8327 11.5666 15.8327 10.1665 15.8327H5.6665C4.26637 15.8327 3.56631 15.8327 3.03153 15.5602C2.56112 15.3205 1.93899 14.9381 1.93899 14.4677C1.6665 13.9329 1.6665 13.2328 1.6665 11.8327V8.16602Z" stroke="#4D9D9D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <p className="text-sm font-semibold text-left text-primary">Call now</p>
                </a>
              </div> */}
                <input
                  type="file"
                  className="hidden"
                  accept=".doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.txt,.rtf,.odt,.ods,.odp,.odg"
                />
                <div className="flex items-center justify-start flex-wrap gap-3 whitespace-nowrap">
                  <label className="cursor-pointer whitespace-nowrap flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border border-accent text-primary">
                    <p className="text-sm font-semibold text-left">Upload file</p>
                  </label>
                </div>
                {/* <div className="flex items-center justify-start flex-wrap gap-3 whitespace-nowrap">
                <label className="whitespace-nowrap cursor-pointer flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-accent border border-accent text-primary">
                  <p className="text-sm font-semibold text-left">Post project</p>
                </label>
              </div> */}
              </div>
              <div
                className="justify-start items-center gap-6 flex cursor-pointer"
                onClick={() => setShowFilterForm(!showFilterForm)}
              >
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-dark-blue-hue text-sm font-medium font-['Poppins'] leading-tight">
                    Filters
                  </div>
                  <div className="w-6 h-6 px-[3px] py-1.5 justify-center items-center flex">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    >
                      <path
                        d="M6.5 12H18.5M3.5 6H21.5M9.5 18H15.5"
                        stroke="#74c3c2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`flex flex-wrap justify-start items-start gap-2 pl-3 pr-1 py-1 rounded-[100px] bg-accent ${["Freelancers", "Businesses"].includes(tag) ? "pr-3" : ""}`}
              >
                <p className="text-xs font-medium text-left text-primary cursor-pointer">{tag}</p>
                {!["Freelancers", "Businesses"].includes(tag) && (
                  <span className="cursor-pointer" onClick={() => removeTag(i)}>
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
            {filteringOptions.language_one ||
            filteringOptions.language_two ||
            filteringOptions.specialty ? (
              <span className="text-gray-400 text-xs" style={{ alignSelf: "flex-end" }}>
                *Filtering by additional criteria is not available at the moment.
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap justify-center xl:justify-start gap-7 mt-3">
            {showTemplate && (
              <>
                {loadingProviders ? (
                  <div className="h-full w-full flex items-center justify-center flex-col">
                    <div>Loading....</div>
                  </div>
                ) : provider_loading_error ? (
                  <div className="h-full w-full flex items-center justify-center flex-col">
                    Error loading providers
                  </div>
                ) : (
                  <>
                    {providerType != "freelancers" && businesses
                      ? businesses?.data.map((business: any, index: any) => (
                          <div
                            key={index}
                            className="grow w-full md:w-[45%] md:max-w-[45%] lg:w-[45%] lg:max-w-[45%] xl:w-[31%] xl:max-w-[31%]"
                          >
                            <DirectoryBusinessCard provider={business}></DirectoryBusinessCard>
                          </div>
                        ))
                      : users?.map((provider: any, index: number) => (
                          <div
                            key={index}
                            className="grow w-full md:w-[45%] md:max-w-[45%] lg:w-[45%] lg:max-w-[45%] xl:w-[31%] xl:max-w-[31%]"
                          >
                            <DirectoryCard user={provider}></DirectoryCard>
                          </div>
                        ))}
                  </>
                )}
              </>
            )}
          </div>
          {!loadingProviders && (
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <span
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer"
                  onClick={() => updatePage(page - 1)}
                >
                  Previous
                </span>
                <span
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer"
                  onClick={() => updatePage(page + 1)}
                >
                  Next
                </span>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <span
                      className="cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500"
                      onClick={() => updatePage(page - 1)}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </span>
                    <span
                      className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 cursor-pointer"
                      onClick={() => updatePage(1)}
                    >
                      1
                    </span>
                    <span
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer"
                      onClick={() => updatePage(2)}
                    >
                      2
                    </span>
                    <span
                      className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer"
                      onClick={() => updatePage(3)}
                    >
                      3
                    </span>
                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer">
                      ...
                    </span>
                    {/* <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer" onClick={() => updatePage(1)}>
                    8
                  </span>
                  <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer" onClick={() => updatePage(1)}>
                    9
                  </span>
                  <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer" onClick={() => updatePage(1)}>
                    10
                  </span> */}
                    <span
                      className="cursor-pointer relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500"
                      onClick={() => updatePage(page + 1)}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showFilterForm && (
        <div
          className="bg-black bg-opacity-40 fixed z-50 top-[70px] left-[0] right-[0] w-screen py-16 h-[calc(100vh-70px)] flex items-center justify-center"
          onClick={() => setShowFilterForm(!showFilterForm)}
        >
          <div
            className="w-full h-full lg:w-[70vw] py-2 flex px-4 items-start flex-row justify-start bg-white dark:bg-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full flex">
              <div className="bg-gray-200 w-1 rounded-full h-full">
                <div
                  className="bg-primary w-1 rounded-full transition-all duration-300"
                  style={{ height: `${progress}%` }}
                ></div>
              </div>

              <div className="flex-col flex justify-between text-sm ml-4 h-full w-full ">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="text-center cursor-pointer"
                    onClick={() => updateFilterFormSteps(i)}
                  >
                    <div
                      className={`mt-1 text-xs ${
                        currentStep === i ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* First step */}
            {currentStep === 0 && (
              <div className="md:container self-stretch justify-start items-start gap-4 flex flex-col w-full p-5">
                <div className="justify-center items-center gap-2.5 inline-flex w-full ">
                  <div className="text-center text-dark-blue-hue text-lg font-semibold font-['Poppins'] leading-7 dark:text-white">
                    Choose a service:
                  </div>
                </div>
                <div className="self-stretch flex-wrap shrink basis-0 justify-start items-start gap-6 w-full flex flex-col px-20 lg:flex-row lg:inline-flex lg:px-[0]">
                  {["Translation", "Interpreting", "Subtitling", "Copywriting"].map((item) => (
                    <div
                      key={item}
                      className={`dark:bg-black hover:border-[#12b669] hover:bg-[#fbfafa] grow cursor-pointer rounded-custom border-2 w-full lg:w-[40%] flex-col p-8 justify-center items-center gap-4 inline-flex ${
                        service === item ? "border-[#12b669] bg-[#fbfafa]" : ""
                      }`}
                      onClick={() => updateFilteringOptions(item, "service")}
                    >
                      <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                        <div className="flex flex-col items-center justify-center w-full ">
                          <span className="self-stretch text-center text-black text-2xl font-medium font-['Poppins'] leading-loose dark:text-white">
                            {item}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Second step */}
            {Number(currentStep) === 1 && (
              <div className="md:container self-stretch justify-start items-start gap-4 flex flex-col w-full p-5">
                {service === "Translation" && <div className="w-full "></div>}
                {service === "Interpreting" && (
                  <div className="w-full ">
                    <div className="self-stretch justify-center items-center gap-6 w-full flex flex-col lg:flex-row lg:inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex w-full ">
                        <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                            Language one
                          </div>
                          <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                              <select className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base font-normal font-['Poppins'] leading-relaxed focus:outline-none">
                                {commonLanguages.map((item, i) => (
                                  <option key={i} value={item.key} selected={item.key === "eng"}>
                                    {item.value}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex"></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl hidden lg:block">
                        {language_unidirectional ? "→" : "⇆"}
                      </span>
                      <span className="text-2xl block lg:hidden">
                        {language_unidirectional ? "↓" : "⇅"}
                      </span>
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex w-full ">
                        <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                          <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                            Language two
                          </div>
                          <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                              <select className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base font-normal font-['Poppins'] leading-relaxed focus:outline-none">
                                {commonLanguages.map((item, i) => (
                                  <option key={i} value={item.key}>
                                    {item.value}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="w-5 h-5 px-[5px] justify-center items-center flex"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex w-full ">
                      {/* <proz-checkbox
                  label="Unidirectional"
                  checkboxValueChange={updateLanguageDirection}
                  checked={language_unidirectional}
                /> */}
                    </div>
                  </div>
                )}
                {service === "Subtitling" && <div className="w-full"></div>}
                {service === "Copywriting" && <div className="w-full"></div>}
              </div>
            )}

            {/* Third step */}
            {Number(currentStep) === 2 && (
              <div className="md:container self-stretch justify-start items-start gap-4 flex flex-col w-full p-5">
                {service === "Translation" && <div className="w-full"></div>}
                {service === "Interpreting" && (
                  <div className="w-full">
                    <div className="self-stretch flex-col justify-start items-center gap-6 flex">
                      <div className="self-stretch px-[100px] w-full flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch justify-start items-start gap-6 flex flex-col lg:flex-row lg:inline-flex">
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex w-full ">
                            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                              <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                                Specialty fields
                              </div>
                              <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                                  <select className="dark:bg-dark dark:text-white w-full text-dark-blue-hue text-base font-normal font-['Poppins'] leading-relaxed focus:outline-none">
                                    {translationSpecialties.map((item, i) => (
                                      <option key={i} value={i}>
                                        {item}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {service === "Subtitling" && <div className="w-full"></div>}
                {service === "Copywriting" && <div className="w-full"></div>}
              </div>
            )}

            {/* Fourth step */}
            {Number(currentStep) === 3 && (
              <div className="md:container self-stretch justify-start items-start gap-4 flex flex-col w-full p-5">
                {service === "Translation" && <div className="w-full"></div>}
                {service === "Interpreting" && (
                  <div className="w-full">
                    <div className="self-stretch px-[100px] w-full flex-col justify-start items-start gap-6 flex">
                      <div className="self-stretch justify-start items-start gap-6 flex flex-col lg:flex-row lg:inline-flex">
                        <div className="grow shrink basis-0 lg:flex-row flex-col justify-between items-start gap-2 inline-flex w-full ">
                          <div className="w-full self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                              Unit
                            </div>
                            <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                                <select className="dark:bg-dark dark:text-white w-full text-dark-blue-hue text-base font-normal font-['Poppins'] leading-relaxed focus:outline-none">
                                  {units.map((item, i) => (
                                    <option key={i} value={item.key}>
                                      {item.value}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="w-full self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                              Currencies
                            </div>
                            <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                                <select className="dark:bg-dark dark:text-white w-full text-dark-blue-hue text-base font-normal font-['Poppins'] leading-relaxed focus:outline-none">
                                  {currencies.map((item, i) => (
                                    <option key={i} value={item.key}>
                                      {item.value}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                              From
                            </div>
                            <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                                <input
                                  type="number"
                                  placeholder="0.9"
                                  className="focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-dark text-sm font-medium font-['Poppins'] leading-tight dark:text-white">
                              To
                            </div>
                            <div className="self-stretch px-3.5 py-2.5 bg-white dark:bg-dark rounded-xl shadow border border-accent justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                                <input
                                  type="number"
                                  placeholder="1.4"
                                  className="focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {service === "Subtitling" && <div className="w-full"></div>}
                {service === "Copywriting" && <div className="w-full"></div>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectoryPage;
