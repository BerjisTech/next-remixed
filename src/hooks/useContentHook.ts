import { COUNTRIES, LANGUAGES } from "@/constants/common";
import { DiscSpec } from "@/interfaces/account";
import { LanguageKnown, Languages } from "@/interfaces/content";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useCallback } from "react";

export function useContentHook() {
  const dispatch = useAppDispatch();
  const { showDrawerProfile } = useAppSelector((state) => state.content);

  /**
   *
   * @param code
   * @returns
   */
  const getLanguageFromCode = (code: string | null | undefined): string => {
    if (code === null || code === undefined) {
      return "";
    }
    return LANGUAGES.find((language) => language.language_code === code)?.language_name || code;
  };

  /**
   *
   * @param code
   * @returns
   */
  const getLanguagePair = (code: string | null | undefined): string => {
    if (!code) {
      return "";
    }

    const langsArr: string[] = code.split("_");
    const pairStr: string = langsArr
      .map((item, index) => {
        const languageName = LANGUAGES.find(
          (language) => language.language_code === item
        )?.language_name;
        return languageName || "";
      })
      .filter(Boolean) // Remove empty values if no match is found
      .join(" to ");
    return pairStr;
  };

  /**
   *
   * @param country
   * @returns
   */
  const getFlagFromCountryCode = (country: string | null | undefined): string => {
    if (country === null || country === undefined) {
      return "";
    }
    return COUNTRIES.find((c) => c.code.toLowerCase() === country.toLowerCase())?.flag || "";
  };

  /**
   *
   * @param country
   * @returns
   */
  const getCountryNameCountryCode = (country: string | null | undefined): string => {
    if (country === null || country === undefined) {
      return "";
    }
    return COUNTRIES.find((c) => c.code.toLowerCase() === country.toLowerCase())?.name || "";
  };

  /**
   *
   * @param services
   * @returns
   */
  const getServicesStr = useCallback((services: { [key: number]: string }) => {
    let str = "";
    Object.values(services).map((item) => (str += item + ", "));
    return str ? str.trim().slice(0, -1) : "";
  }, []);

  /**
   *
   * @param visibility
   * @param type
   */
  const setDrawerVisibility = (type: string) => {
    dispatch(setContentSliceBits({ bitToSet: "showDrawerProfile", value: !showDrawerProfile }));
    dispatch(setContentSliceBits({ bitToSet: "updaterSection", value: type }));
  };

  /**
   * Get a string of languages (native or non-native), using cached filtered languages if provided.
   * @param languages
   * @param isNative Indicates if the function should handle native languages
   * @param languagesArray Optional array of filtered languages
   * @param limit Optional limit on the number of languages to display
   * @returns
   */
  const getLanguagesStr = (
    languages: Languages,
    isNative: boolean,
    languagesArray?: string[],
    limit?: number
  ) => {
    let str = "";

    // Use cached filtered languages if provided, otherwise get them using the appropriate helper function
    const filteredLanguages =
      languagesArray ||
      (isNative
        ? getFilteredNativeLanguages(languages, limit)
        : getFilteredNonNativeLanguages(languages, limit));

    filteredLanguages.forEach((item) => {
      const languageCode = isNative ? languages[item].language_code : item; // Use language_code for native
      str += getLanguageFromCode(languageCode)
        ? getLanguageFromCode(languageCode) + ", "
        : ": " + languageCode + ", ";
    });

    return str ? str.trim().slice(0, -1) : "";
  };

  /**
   * Truncate languages to the first 3 items using cached filtered languages.
   * @param languages
   * @param isNative Indicates if the function should handle native languages
   * @param languagesArray Optional array of filtered languages
   * @returns
   */
  const getLanguagesStrTruncated = (
    languages: Languages,
    isNative: boolean,
    languagesArray?: string[]
  ) => {
    const languagesToDisplay = languagesArray ? languagesArray.slice(0, 3) : [];
    return getLanguagesStr(languages, isNative, languagesToDisplay);
  };

  /**
   * Get filtered non-native languages up to a specified limit.
   * @param languages
   * @param limit Optional limit on the number of non-native languages to retrieve
   * @returns Array of non-native language codes up to the specified limit, or an empty array if none found
   */
  const getFilteredNonNativeLanguages = (
    languages: Record<string, LanguageKnown> | undefined,
    limit?: number
  ) => {
    // Early return if languages is undefined or falsy
    if (!languages) return [];

    const nonNativeLanguages = Object.keys(languages)
      .filter((item) => !languages[item].is_native)
      .slice(0, limit);

    return nonNativeLanguages.length > 0 ? nonNativeLanguages : [];
  };

  /**
   * Get filtered native languages up to a specified limit.
   * @param languages
   * @param limit Optional limit on the number of native languages to retrieve
   * @returns Array of native language codes up to the specified limit, or an empty array if none found
   */
  const getFilteredNativeLanguages = (
    languages: Record<string, LanguageKnown> | undefined,
    limit?: number
  ) => {
    // Early return if languages is undefined or falsy
    if (!languages) return [];

    const nativeLanguages = Object.keys(languages)
      .filter((item) => languages[item].is_native)
      .slice(0, limit);

    return nativeLanguages.length > 0 ? nativeLanguages : [];
  };

  /**
   * Generates a comma-separated string from an array of SpecDiscipline objects
   * @param disciplines - Array of SpecDiscipline objects
   * @returns Comma-separated string of discSpecNames
   */
  const getSpecDisciplinesStr = useCallback((disciplines: DiscSpec[]) => {
    let str = "";
    disciplines.map((discipline) => (str += discipline.disc_spec_name + ", "));
    return str ? str.trim().slice(0, -1) : "";
  }, []);

  return {
    getLanguageFromCode,
    getFlagFromCountryCode,
    getCountryNameCountryCode,
    getLanguagesStr,
    setDrawerVisibility,
    getServicesStr,
    getFilteredNonNativeLanguages,
    getFilteredNativeLanguages,
    getLanguagesStrTruncated,
    getSpecDisciplinesStr,
    getLanguagePair,
  };
}
