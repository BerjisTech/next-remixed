"use client";
import React, { useState, useEffect, useCallback } from "react";
import { getFindMainPrompt } from "@/constants/find";
import ResultCard from "./_resultCards";
import { LANGUAGE_SERVICES_WITH_IDS } from "@/constants/common";
import SearchBar from "@/components/shared/searchBar";

const SearchPage: React.FC = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [searchText, setSearchText] = useState("");
  const [reloadPlaceholder, setReloadPlaceholder] = useState(1);
  const [results, setResults] = useState<any>([]);
  const [didSearch, setDidSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneralLoading, setIsGeneralLoading] = useState(true);
  const [filters, setFilters] = useState<any>({
    service_id: "",
    lang_pair: "",
    page: 1,
    rates: "",
    gen_spec: "",
  });

  const [tags, setTags] = useState<any>({
    searching_for: "",
    languages: "",
    service: "",
    rates: "",
    fields: "",
  });

  const getLanguageNameByCode = useCallback(async (code: string) => {
    if (code && code == "spa") code = "esl";
    if (code && code == "fre") code = "fra";
    if (code && code == "ger") code = "deu";

    let language = await fetch(`/next/api/languages?code=${code}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return language;
  }, []);

  useEffect(() => {
    let posibleTexts = [
      "Search for language professionals",
      "Translators english to spanish",
      "Interpreters for conferences",
      "Language teachers",
      "Gamelocalization",
      "Interpreters for medical appointments",
      "Law translation",
      "Interpreters for legal appointments",
      "Subtitling for movies",
      "Real time translation",
      "Interpreters for business meetings",
      "Reviewers for translations",
      "English to spanish",
      "French to english",
      "Chinese to english",
      "Spanish to french",
    ];

    const text = posibleTexts[Math.floor(Math.random() * posibleTexts.length)] + "...";
    let currentIndex = 0;
    const interval = setInterval(() => {
      setPlaceholder(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [reloadPlaceholder]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReloadPlaceholder(Math.random());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (filters) {
        let query = new URLSearchParams();
        if (filters.service_id > 0) query.append("service_id", filters.service_id);
        if (filters.services) query.append("services", filters.services);
        if (filters.lang_pairs) query.append("lang_pairs", filters.lang_pairs);
        if (filters.page) query.append("page", filters.page);
        if (filters.rates) query.append("rates", filters.rates);
        if (filters.gen_spec) query.append("gen_spec", filters.gen_spec);

        await fetch(`/next/api/users?${query}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              console.error("Error:", data.error);
              setIsGeneralLoading(false);
              return;
            } else {
              setResults(data);
              setIsGeneralLoading(false);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setIsGeneralLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  const handleSearchTextInput = (value: string) => {
    setSearchText(value);
  };

  const getDataFromJson = useCallback(
    async (jsonToFilterBy: any) => {
      if (jsonToFilterBy) {
        let languages =
          jsonToFilterBy.languages || jsonToFilterBy.lang_pairs
            ? await Promise.all(
                jsonToFilterBy.languages.map(async (lang: any) => {
                  const sourceLang = await getLanguageNameByCode(lang.source);
                  const targetLang = await getLanguageNameByCode(lang.target);
                  return `${sourceLang} to ${targetLang}`;
                })
              )
            : [];

        let services = jsonToFilterBy.services
          ? jsonToFilterBy.services.map((service: any) => service)
          : [];

        let fields = jsonToFilterBy.fields ? jsonToFilterBy.fields.map((field: any) => field) : [];

        languages = languages.filter((lang: any) => typeof lang === "string");
        services = services.filter((service: any) => typeof service === "string");
        fields = fields.filter((field: any) => typeof field === "string");

        setTags({
          searching_for: jsonToFilterBy.searching_for || "freelancer",
          languages: languages,
          service: services,
          rates: jsonToFilterBy.rates || "",
          fields: fields,
        });

        setFilters({
          searching_for: jsonToFilterBy.searching_for || "freelancer",
          services: jsonToFilterBy.services
            ?.map((service: string) => getServiceIdByName(service))
            .filter((id: string | null) => id !== null),
          lang_pairs: jsonToFilterBy.languages
            ? jsonToFilterBy.languages
                .map(
                  (lang: any) =>
                    `${checkLanguageIsoThree(lang.source)}_${checkLanguageIsoThree(lang.target)}`
                )
                .join(", ")
            : "",
          page: 1,
          rates: jsonToFilterBy.rates || "",
          gen_spec: jsonToFilterBy.fields || "",
        });
      }
    },
    [getLanguageNameByCode]
  );

  const sendUserSearch = useCallback(async () => {
    setIsLoading(true);
    setDidSearch(true);

    let prompt = getFindMainPrompt(searchText);

    const query = new URLSearchParams();
    query.append("prompt", prompt);
    const url = `/next/api/chatgpt?${query.toString()}`;

    const response = await fetch(url);
    const jsonToFilterBy = await response.json();
    await getDataFromJson(JSON.parse(jsonToFilterBy.content));
  }, [searchText, getDataFromJson]);

  const checkLanguageIsoThree = (code: string) => {
    if (code && code == "spa") code = "esl";
    if (code && code == "fre") code = "fra";
    if (code && code == "ger") code = "deu";
    return code;
  };

  const getServiceIdByName = (name: string) => {
    if (!name) return "";
    const service = LANGUAGE_SERVICES_WITH_IDS.find((service: any) =>
      service.service_name.toLowerCase().includes(name.toLowerCase())
    );
    return service ? service.service_id : null;
  };

  useEffect(() => {
    if (results.length > 0) {
      setIsLoading(false);
      setIsGeneralLoading(false);
    }
  }, [results]);

  useEffect(() => {
    if (searchText != "") sendUserSearch();
  }, [searchText, sendUserSearch]);

  useEffect(() => {
    const processContent = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const content = urlParams?.get("content");
      const search = urlParams?.get("search");

      // if (search != "") setSearchText(search || "");
      if (content) await getDataFromJson(JSON.parse(content));

      setTimeout(() => {
        setIsGeneralLoading(false);
      }, 1000);
    };

    processContent();
  }, [getDataFromJson]);

  return (
    <>
      {!isGeneralLoading ? (
        <>
          <div
            className={`flex justify-center mt-12 flex-col items-center transition-all duration-500 ${results.length > 0 ? "mt-4" : "mt-12"}`}
          >
            <h1
              className={`text-primary font-bold transition-all duration-500 ${results.length > 0 ? "text-3xl mb-4" : "text-6xl mb-8"}`}
            >
              Find <span className="text-sm">V1.0</span>
            </h1>

            <div className="flex items-center w-full justify-center">
              <SearchBar
                label={results.length == 0 ? "Proudly brought to you with AI" : ""}
                onInputChange={handleSearchTextInput}
                placeholder="Spanish medical translators , German to English..."
              />
            </div>
          </div>

          {results.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-primary text-left container mb-5">Results</h2>
              <div className="container mb-5 flex">
                {Object.keys(tags).map((key) =>
                  Array.isArray(tags[key])
                    ? tags[key].map((tag: string, index: number) => (
                        <div key={`${key}-${index}`}>
                          {typeof tag === "string" && (
                            <span
                              key={`${key}-${index}`}
                              className="capitalize inline-block bg-primary dark:bg-black text-white rounded-full text-sm px-2 py-2 font-semibold mr-2 mb-2"
                            >
                              {tag}
                            </span>
                          )}
                        </div>
                      ))
                    : tags[key] && (
                        <span
                          key={key}
                          className="capitalize inline-block bg-primary dark:bg-black text-white rounded-full text-sm px-2 py-2 font-semibold mr-2 mb-2"
                        >
                          {tags[key]}
                        </span>
                      )
                )}
              </div>
              <div className="flex flex-row gap-4 items-center flex-wrap justify-center">
                {results.map((result: any) => (
                  <ResultCard
                    key={result.entity_id}
                    entityId={result.entity_id}
                    title={result.contact_first + " " + result.contact_last}
                    description={result.tagline || result.tagline_option_two}
                    imageUrl={
                      result.image_url_option_two ||
                      (result.image_url.includes("www.proz.com/")
                        ? result.image_url
                        : "https://www.proz.com" + result.image_url)
                    }
                  />
                ))}
              </div>
            </>
          )}

          {results.length == 0 && didSearch && !isLoading && (
            <div className="flex justify-center mt-10">
              <div className="w-1/2 flex justify-center">
                <p className="text-gray-500 text-center">
                  No results found. Please try a different search term.
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center mt-12">
          <div className="w-1/2 flex justify-center">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
