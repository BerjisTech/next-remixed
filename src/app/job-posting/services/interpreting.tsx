"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import InterpreterCard from "./../interpreter-card";
import { useAppSelector } from "@/lib/store/hooks";

const commonLanguages = {
  spa: "Spanish",
  eng: "English",
  fra: "French",
  chi: "Chinese",
  por: "Portuguese",
  jpn: "Japanese",
};

const LanguageSelector: React.FC<{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, value, onChange }) => (
  <div className="flex-col w-full gap-2">
    <label className="text-dark text-sm font-medium dark:text-white">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="w-full text-dark-blue-hue dark:bg-dark dark:text-white text-base leading-relaxed focus:outline-none rounded-xl shadow border border-accent p-2.5"
    >
      {Object.entries(commonLanguages).map(([key, val]) => (
        <option key={key} value={key}>
          {val}
        </option>
      ))}
    </select>
  </div>
);

const InterpretingService: React.FC = () => {
  // Entity ID
  const { user, entityId } = useAppSelector((state) => state.profile);
  let [token, setToken] = useState<string | null>(null);
  const [languageUnidirectional, setLanguageUnidirectional] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState<string>("eng");
  const [targetLanguage, setTargetLanguage] = useState<string>("spa");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [availabilityToday, setAvailabilityToday] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 13;

  // Get token
  const fetchToken = async () => {
    try {
      const currentEntityId = entityId || "3512308"; // for testing
      const response = await fetch(
        `https://api.proz.com/v2/userLoginData?entity_id=${currentEntityId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer e411bb8919d81fc5f92e80acd33ef00155724312",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      setError("Error fetching token");
      console.error("Error fetching token:", error);
    }
  };

  const updateLanguageDirection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguageUnidirectional(e.target.checked);
  };

  const updateLanguages = (e: React.ChangeEvent<HTMLSelectElement>, type: "source" | "target") => {
    if (type === "source") {
      setSourceLanguage(e.target.value);
    } else {
      setTargetLanguage(e.target.value);
    }
  };

  const fetchFreelancersByLanguages = useCallback(
    async (availabilityToday = "") => {
      if (!token) {
        setError("Token not available");
        return;
      }

      setLoading(true);
      try {
        const languagePair = `${sourceLanguage}_${targetLanguage}`;
        const offset = (page - 1) * resultsPerPage;
        const availabilityQuery = availabilityToday
          ? `&availability_today=${availabilityToday}`
          : "";

        const response = await fetch(
          `https://api.proz.com/v2/freelancer-matches?language_pair=${languagePair}&limit=${resultsPerPage}&offset=${offset}&language_service_id=2${availabilityQuery}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setResults(data.data);
        setAvailabilityToday(availabilityToday === "y");
        setTotalResults(data.meta.num_results);
        setShowResults(true);
      } catch (error) {
        setError("Error fetching freelancers");
        console.error("Error fetching freelancers:", error);
      } finally {
        setLoading(false);
      }
    },
    [sourceLanguage, targetLanguage, page, token]
  );

  const callNow = async () => {
    fetchFreelancersByLanguages("y");
  };

  const scheduleCall = async () => {
    fetchFreelancersByLanguages("n");
  };

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (showResults) {
      fetchFreelancersByLanguages(availabilityToday ? "y" : "n");
    } else {
      setResults([]);
      setError(null);
      setTotalResults(0);
      setPage(1);
    }
  }, [showResults, fetchFreelancersByLanguages, availabilityToday]);

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const paginationButtons = useMemo(() => {
    const buttons = [];
    const maxPageDisplay = 5;

    if (totalPages <= maxPageDisplay) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);

      buttons.push(1);
      if (startPage > 2) buttons.push("...");

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }

      if (endPage < totalPages - 1) buttons.push("...");
      buttons.push(totalPages);
    }

    return buttons;
  }, [page, totalPages]);

  return (
    <div className="flex-col justify-start items-center gap-6 inline-flex w-full">
      {!showResults ? (
        <>
          <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white pt-3">
            Select languages:
          </div>

          <div className="self-stretch px-[100px] flex-col gap-6 flex">
            <div className="flex flex-col lg:flex-row lg:inline-flex w-full gap-6">
              <LanguageSelector
                label="Language one"
                value={sourceLanguage}
                onChange={(e) => updateLanguages(e, "source")}
              />

              <span className="text-2xl flex items-center justify-center lg:justify-start lg:pt-5">
                {!languageUnidirectional ? (
                  <span className="lg:hidden flex flex-col items-center">
                    <span>⇅</span>
                  </span>
                ) : (
                  <span className="lg:hidden flex flex-col items-center">
                    <span>↓</span>
                  </span>
                )}
                {!languageUnidirectional ? (
                  <span className="hidden lg:flex flex-col items-center">
                    <span>⇆</span>
                  </span>
                ) : (
                  <span className="hidden lg:flex flex-col items-center">
                    <span>→</span>
                  </span>
                )}
              </span>

              <LanguageSelector
                label="Language two"
                value={targetLanguage}
                onChange={(e) => updateLanguages(e, "target")}
              />
            </div>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                onChange={updateLanguageDirection}
                checked={languageUnidirectional}
                className="form-checkbox h-5 w-5 text-dark-blue-hue"
              />
              <span className="text-dark text-sm font-medium dark:text-white">Unidirectional</span>
            </label>
          </div>

          <div className="self-stretch px-[100px] flex justify-between items-center gap-6 mb-3">
            <button
              className="flex items-center gap-2 text-[#475466] text-base font-semibold dark:text-white hover:underline focus:outline-none"
              onClick={() => window.location.reload()}
              aria-label="Go to previous step"
            >
              &lt; Back
            </button>
            <button
              className="px-5 py-3 bg-primary rounded-xl shadow border border-secondary flex items-center gap-2 text-white text-base font-semibold hover:bg-primary-dark focus:outline-none"
              onClick={() => setShowResults(true)}
              aria-label="Go to next step"
            >
              Next &gt;
            </button>
          </div>
        </>
      ) : (
        <div className="results-section lg:px-[100px] w-full">
          <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white pt-3 mb-4">
            Confirm
          </div>

          <div className="self-stretch grow shrink basis-0 justify-start items-start gap-6 w-full flex flex-col px-20 lg:flex-row lg:inline-flex lg:px-0 mb-4">
            <div
              onClick={callNow}
              className="dark:bg-black hover:border-[#12b669] hover:bg-[#fbfafa] grow shrink basis-0 self-stretch cursor-pointer rounded-custom border-2 flex-col p-8 justify-center items-center gap-4 inline-flex transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                <div className="flex flex-col items-center justify-center w-full">
                  <span className="self-stretch text-center text-black text-2xl font-medium leading-loose dark:text-white">
                    Call now
                  </span>
                </div>
                <span className="text-gray-400 text-xs">
                  Pick up the first available interpreter
                </span>
              </div>
            </div>
            <div
              onClick={scheduleCall}
              className="dark:bg-black hover:border-[#12b669] hover:bg-[#fbfafa] grow shrink basis-0 self-stretch cursor-pointer rounded-custom border-2 flex-col p-8 justify-center items-center gap-4 inline-flex transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="self-stretch flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch text-center text-black text-2xl font-medium leading-loose dark:text-white">
                  Schedule a call
                </div>
                <span className="text-gray-400 text-xs">
                  You will be able to schedule a meeting with the first available interpreter
                </span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-dark-blue-hue text-lg font-semibold leading-7 dark:text-white pt-3">
              Searching...
            </div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 lg:px-0">
                {results.map((provider, index) => {
                  const cardType = provider.business_id ? "business" : "freelancer";

                  return (
                    <InterpreterCard
                      key={index}
                      provider={provider}
                      cardType={cardType}
                      availabilityToday={availabilityToday}
                    />
                  );
                })}
              </div>

              <div className="flex justify-center gap-2 items-center my-4">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
                >
                  &laquo;
                </button>

                <div className="flex items-center gap-2">
                  {paginationButtons.map((pageNumber, index) =>
                    typeof pageNumber === "number" ? (
                      <button
                        key={index}
                        onClick={() => setPage(pageNumber)}
                        className={`px-4 py-2 text-gray-800 rounded ${page === pageNumber ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
                      >
                        {pageNumber}
                      </button>
                    ) : (
                      <span key={index} className="px-2">
                        ...
                      </span>
                    )
                  )}
                </div>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
                >
                  &raquo;
                </button>
              </div>
            </>
          )}

          <div className="self-stretch px-4 flex justify-between items-center gap-6 mb-3">
            <button
              className="flex items-center gap-2 text-[#475466] text-base font-semibold dark:text-white hover:underline focus:outline-none"
              onClick={() => setShowResults(false)}
              aria-label="Go to previous step"
            >
              &lt; Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterpretingService;
