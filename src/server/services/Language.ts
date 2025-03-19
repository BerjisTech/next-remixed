import { StringRepository } from "@/i18n/Translation";
import { executeQuery } from "../database/mysql/queryHelper";
import { getCache, setCache } from "../persistent/cacheHelper";

export class LanguageService {
  private stringRepo: StringRepository;
  private cacheArray: Record<string, Record<string, string>> = {};
  private cacheIsActive = true;

  constructor() {
    this.stringRepo = new StringRepository();
  }

  private async getFromCache(pair: string, lang: string): Promise<string | undefined> {
    const cachedValue = this.cacheIsActive && this.cacheArray[pair]?.[lang];
    return typeof cachedValue === "string" ? cachedValue : undefined;
  }

  private async saveToCache(pair: string, lang: string, value: string): Promise<void> {
    if (this.cacheIsActive) {
      if (!this.cacheArray[pair]) {
        this.cacheArray[pair] = {};
      }
      this.cacheArray[pair][lang] = value;
    }
  }

  /**
   * Return the full, localized name of two languages. If the source and target are the same (e.g., eng_eng), it returns just one.
   * @param {string} pair - A 7-character code for the language pair (e.g., deu_esl).
   * @param {string} lang - The 3-character language code for localization. Defaults to site language.
   * @returns {string} - The localized name of the language pair (e.g., "German to Spanish").
   */
  async getLanguagePair(pair: string = "", lang: string = "eng"): Promise<string> {
    const cached = await this.getFromCache(pair, lang);
    if (cached) return cached;

    if (pair === "all" || pair === "%_%") {
      return await this.stringRepo.get("_languages", "all_langs", lang);
    }

    if (pair.startsWith("+")) {
      return await this.getLanguageName(pair, lang); // Language group codes
    }

    if (!pair) return "";

    const langs = pair.split("_");
    const from = await this.getLanguageName(langs[0], lang);
    const to = await this.getLanguageName(langs[1], lang);

    let pairString = from === to ? from : from && to ? `${from} to ${to}` : from || to;

    await this.saveToCache(pair, lang, pairString);
    return pairString;
  }

  /**
   * Get the localized name of a language
   *
   * @param languageCode - A 3-letter ISO code representing a language.
   * @param lang - An optional 3-letter language code into which the returned language name should be translated (defaults to 'eng').
   * @returns The name of the corresponding language.
   */
  async getLanguageName(languageCode: string = "", lang: string = "eng"): Promise<string> {
    if (languageCode.startsWith("+")) {
      const sqlQuery = "SELECT group_name FROM proz.langgroups WHERE group_code = ?";
      const result = (await executeQuery(sqlQuery, "slave", [languageCode], {
        useCache: true,
        ttl: 60 * 60 * 24,
      })) as any[];
      return result?.[0]?.group_name || "";
    }

    if (languageCode === "%") {
      return await this.stringRepo.get("_languages", "all_langs", lang);
    }

    const lNames = await this.getLanguageNamesAll(lang);
    return lNames[languageCode] || "";
  }

  /**
   * Get a localized list of all language names
   *
   * @param languageCode - The 3-letter code of the language into which to translate the language names
   * @returns A list of language names, keyed on both the 2-letter and 3-letter codes for the languages
   */
  async getLanguageNamesAll(languageCode: string = "eng"): Promise<Record<string, string>> {
    const cacheKey = `lang_names_all_${languageCode}`;
    const cachedNames = await getCache(cacheKey); // Retrieve cached names
    if (cachedNames) return cachedNames;

    // Query database if cache is not found
    let sqlQuery = "SELECT iso_three, proz_two_letter_code, iso_language FROM proz.iso_codes";
    let result = (await executeQuery(sqlQuery, "slave", [], { useCache: true })) as any[];

    const lNames: Record<string, string> = {};

    for (const data of result) {
      const translatedName = await this.stringRepo.get("_languages", data.iso_three, languageCode);
      lNames[data.iso_three] = translatedName;
      lNames[data.proz_two_letter_code] = translatedName;
      lNames[`${data.proz_two_letter_code}_to3`] = data.iso_three;
      lNames[`${data.iso_three}_full`] = data.iso_language;
    }

    // Set cache for 24 hours (TTL = 60 * 60 * 24 seconds)
    setCache(cacheKey, lNames, 60 * 60 * 24);

    return lNames;
  }
}
