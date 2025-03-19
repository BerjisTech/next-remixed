"use client";
import React, { useEffect, useState } from "react";
import { LANGUAGE_SERVICES_WITH_IDS, LANGUAGES } from "@/constants/common";
import { toast } from "sonner";
import { useAppDispatch } from "@/lib/store/hooks";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/shadcn/sheet";
import { X } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import StarRating from "@/components/shared/starRating";

interface OpportunitiesDrawerProps {
  selectedJob: any;
  isOpen: boolean;
  entity_id: any;
}

const OpportunitiesDrawer: React.FC<OpportunitiesDrawerProps> = ({
  selectedJob,
  isOpen,
  entity_id,
}) => {
  const [canApply, setCanApply] = React.useState(false);
  const companyInfo = selectedJob?.contact_info;
  // const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(isOpen);
  const dispatch = useAppDispatch();

  const getServiceNameById = (serviceId: number): string | undefined => {
    const service = LANGUAGE_SERVICES_WITH_IDS.find((s) => s.service_id === serviceId);
    return service?.service_name;
  };

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

  useEffect(() => {
    setDrawerIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setCanApply(selectedJob.canApply);
  }, [companyInfo]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // "Nov"
      day: "numeric", // "6"
    };

    return date.toLocaleDateString("en-US", options);
  };

  const [applyBoxIsOpen, setapplyBoxIsOpen] = useState(false);
  const [viewQuoteMessage, setViewQuoteMessage] = useState(false);
  const [quoteId, setQuoteId] = useState(0);

  const toggleDropdown = () => {
    setapplyBoxIsOpen(!applyBoxIsOpen);
  };

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPair, setSelectedPair] = useState("");
  const [ratePricing, setRatePricing] = useState("");
  const [rateUnit, setRateUnit] = useState("");

  const handleQuoteSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/next/api/opportunities/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entity_id: entity_id,
          job_id: selectedJob.id,
          subject: subject,
          description: description,
          selectedPair: selectedPair,
          ratePricing: ratePricing,
          rateUnit: rateUnit,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.message == "Quote added successfully") {
        toast.success("Quote added successfully");
        setapplyBoxIsOpen(false);
        setViewQuoteMessage(true);
        setQuoteId(data.quote_id);
        setCanApply(false);
      } else {
        toast.error("Error adding quote");
      }
    } catch (error) {
      console.error("Error on quoting.", error);
    }
  };

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const handleLinkCopy = () => {
    const url = new URL(window.location.href);
    const selectedJobIsFromLoop = selectedJob.type == "probono" || selectedJob.type == "paid";
    if (url.searchParams?.has("jobId")) {
      url.searchParams?.set("jobId", selectedJob.id);
      if (selectedJobIsFromLoop) url.searchParams?.set("from_loop", "1");
    } else {
      url.searchParams?.append("jobId", selectedJob.id);
      if (selectedJobIsFromLoop) url.searchParams?.append("from_loop", "1");
    }
    navigator.clipboard.writeText(`${url.origin}${url.pathname}${url.search}`);
    toast.success("Job link copied to clipboard!");
  };

  return (
    <>
      <Sheet open={drawerIsOpen} onOpenChange={toggleDrawer}>
        <SheetContent className="min-w-[50rem] sm:w-[540px] overflow-auto">
          <SheetHeader>
            <SheetTitle className="flex flex-row justify-between items-center">
              <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-primary capitalize">
                Job offer (
                <span
                  className={`capitalize ${selectedJob.status === "open" ? "text-primary" : "text-[red]"}`}
                >
                  {selectedJob.status}
                </span>
                )
                <button
                  onClick={handleLinkCopy}
                  className="ml-4 bg-gray-300 text-sm text-white dark:bg-dark rounded-lg py-1 px-2 hover:bg-gray-400 dark:hover:bg-gray-700"
                >
                  Copy Job Link
                </button>
              </span>
              <X
                className="cursor-pointer"
                size="20"
                onClick={() => {
                  toggleDrawer();
                }}
              />
            </SheetTitle>
            <SheetDescription>
              <hr className="my-2"></hr>
              {companyInfo.company && (
                <>
                  {companyInfo.business_img != "" && (
                    <div className="w-1/2 relative flex-col justify-start items-start flex rounded-3xl">
                      <div className="w-1/2 h-14 flex rounded-3xl text-white text-2xl">
                        <Image
                          className="h-full object-contain"
                          src={companyInfo.business_img}
                          alt="Business image"
                          width={56} // Based on the height of 14 units and approximate width
                          height={56} // To maintain aspect ratio
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-col w-full justify-center items-start gap-px inline-flex">
                    <div className="justify-start items-center gap-px inline-flex">
                      <div className="text-primary text-sm dark:text-primary font-semibold leading-tight">
                        <>
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
                          {companyInfo.bus_membership &&
                            companyInfo.bus_membership == "standard" && (
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
                        </>
                      </div>
                    </div>
                  </div>
                  <div className="rounded justify-start items-center gap-6 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                      {selectedJob.blueboard_avg_lwa > 0 && (
                        <StarRating
                          size="small"
                          rating={selectedJob.blueboard_avg_lwa}
                        ></StarRating>
                      )}
                      <div className="text-[#344054] dark:text-white font-normal font-['Poppins']">
                        {selectedJob.blueboard_avg_lwa}
                        {selectedJob.blueboard_entries &&
                          selectedJob.blueboard_entries > 0 &&
                          `(${selectedJob.blueboard_entries})`}
                      </div>
                    </div>
                  </div>
                </>
              )}
              <hr className="my-2"></hr>
              {selectedJob.summary.split("\r\n").map((line: string, index: number) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <p>
                {selectedJob.description.split("\r\n").map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </SheetDescription>
          </SheetHeader>
          <Separator className="mb-5" />
          <div>
            <div className="flex flex-row justify-between w-full">
              {selectedJob.time_posted && (
                <span className="w-full text-center">
                  Posted: {formatDate(selectedJob.time_posted)}
                </span>
              )}
              {selectedJob.time_expires && (
                <span className="w-full text-center">
                  Closes: {formatDate(selectedJob.time_expires)}
                </span>
              )}
              {selectedJob.delivery_deadline && (
                <span className="w-full text-center">
                  Delivery: {formatDate(selectedJob.delivery_deadline)}
                </span>
              )}
            </div>
            <hr className="w-full" />
            {selectedJob.volume_amount > 0 && (
              <>
                <span className="w-full text-center">Volume:</span>
                <div className="flex flex-row justify-between w-full">
                  <span className="w-full text-center">
                    Volume amount: {selectedJob.volume_amount}
                  </span>
                  <span className="w-full text-center">Volume unit: {selectedJob.volume_unit}</span>
                </div>
                <hr className="w-full" />
              </>
            )}
            <span className="w-full text-center">Languages</span>
            <div
              className="flex flex-row justify-between w-full flex-wrap"
              style={{ wordWrap: "break-word" }}
            >
              {selectedJob.language_pairs.map((pair: any, index: any) => (
                <span
                  key={index}
                  className="text-[#344054] w-1/2 text-sm font-normal dark:text-white font-['Poppins'] leading-tight"
                >
                  - {GetLanguagePairName(pair)}
                </span>
              ))}
            </div>
            <hr className="w-full" />
            <span className="w-full text-center">Services</span>
            <div
              className="flex flex-row justify-between w-full flex-wrap"
              style={{ wordWrap: "break-word" }}
            >
              {Array.isArray(selectedJob.language_service_ids) && (
                <>
                  {selectedJob.language_service_ids.map((serviceId: any, index: number) => (
                    <span
                      key={index}
                      className="text-[#344054] w-1/2 text-sm font-normal dark:text-white font-['Poppins'] leading-tight"
                    >
                      - {getServiceNameById(serviceId)}
                    </span>
                  ))}
                </>
              )}
            </div>
            <hr className="w-full" />
            <span className="w-full text-center">
              Contact method:
              {selectedJob.contact_method == "proz" && <span> Quoting form</span>}
              {selectedJob.contact_method != "proz" && <span> {selectedJob.contact_method}</span>}
            </span>
            <div className="relative w-full">
              {!canApply &&
              !selectedJob.already_applied &&
              quoteId == 0 &&
              selectedJob.type != "probono" ? (
                <span className="text-sm text-gray-500 top-full mt-1">
                  Your account does not meet the requirements set by the poster.
                </span>
              ) : (
                <></>
              )}

              {!canApply && selectedJob.already_applied && selectedJob.type != "probono" ? (
                <span className="text-sm text-gray-500 top-full mt-1">
                  You have already applied.{" "}
                  <a
                    className="text-primary"
                    href={`https://www.proz.com/job/?sp_mode=quotes&details=${selectedJob.quote_id}`}
                    target="_blank"
                  >
                    View your quote
                  </a>
                  .
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="relative w-full">
              {!canApply && (
                <button
                  disabled
                  className="w-full bg-primary text-white rounded-lg py-2 cursor-not-allowed opacity-50"
                >
                  Apply now
                </button>
              )}

              {canApply && (
                <button
                  onClick={toggleDropdown}
                  className="w-full bg-primary text-white rounded-lg py-2 mb-2 cursor-pointer"
                >
                  Apply now
                </button>
              )}
            </div>
            <div className="relative flex w-[100%] text-left">
              {viewQuoteMessage && (
                <span>
                  Your quote has been sent.{" "}
                  <a
                    className="text-primary"
                    href={`https://www.proz.com/job/?sp_mode=quotes&details=${quoteId}`}
                    target="_blank"
                  >
                    View your quote
                  </a>
                  .
                </span>
              )}
              {applyBoxIsOpen && canApply && (
                <div className="right-0 mt-2 w-[100%] p-4 bg-white border border-gray-200 rounded-md shadow-lg">
                  {/* <h3 className="text-lg font-semibold text-gray-800">Quoting form:</h3> */}

                  {selectedJob.contact_method === "email" && (
                    <a className="text-primary" href={`mailto:${companyInfo.email}`}>
                      {companyInfo.email}
                    </a>
                  )}
                  {selectedJob.contact_method === "url" && (
                    <a className="text-primary" href={`${companyInfo.url}`} target="_blank">
                      {companyInfo.url}
                    </a>
                  )}
                  {selectedJob.contact_method === "proz" && (
                    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                      <form>
                        {/* Subject Input */}
                        <div className="mb-4">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Ex: Application for Freelance Translator Role"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        {/* Description Input */}
                        <div className="mb-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Message
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Ex: I am a professional translator specializing in..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          ></textarea>
                        </div>

                        {/* Language pairs Input */}
                        <div className="mb-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Language pair
                          </label>
                          <select
                            id="language-pair"
                            name="language-pair"
                            value={selectedPair}
                            onChange={(e) => setSelectedPair(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            <option value="">Select a language pair</option>
                            {selectedJob.language_pairs.map((pair: any, index: any) => (
                              <option key={index} value={pair}>
                                {GetLanguagePairName(pair)}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* rates that are the pricing amount and the pricing unit  */}

                        <div className="mb-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Rates
                          </label>
                          <input
                            type="text"
                            id="rates"
                            name="rates"
                            placeholder="Ex: 0.10"
                            value={ratePricing}
                            onChange={(e) => setRatePricing(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          <select
                            id="unit"
                            name="unit"
                            value={rateUnit}
                            onChange={(e) => setRateUnit(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            <option value="">Select a unit</option>
                            <option value="word">Word</option>
                            <option value="hour">Hour</option>
                            <option value="total">Total</option>
                          </select>
                        </div>

                        {/* Submit Button */}
                        <div>
                          <button
                            type="submit"
                            className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-top focus:outline-none focus:ring-2"
                            onClick={(e) => handleQuoteSubmit(e)}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative w-full flex justify-center">
              {selectedJob.type != "probono" && selectedJob.type != "Managed services" && (
                <a
                  href={`https://www.proz.com/translation-jobs/${selectedJob.id}`}
                  className="w-full bg-primary text-white rounded-lg text-center py-2"
                  target="_blank"
                >
                  View full job
                </a>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OpportunitiesDrawer;
