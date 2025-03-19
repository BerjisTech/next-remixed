import { executeQuery } from "@/server/database/mysql/queryHelper";

/**
 * Repository class for accessing translated strings.
 */
export class StringRepository {
  protected strings: Record<string, Record<string, Record<string, string>>> = {};

  /**
   * Constructs a StringRepository instance.
   */

  /**
   * Get a string with the given ID in the given area, translated into the given language.
   * If no translation is available, the English version is returned.
   *
   * @param area - The area of the string.
   * @param stringId - The ID of the string.
   * @param lang - The language code (default is 'eng').
   * @returns The localized string.
   */
  public async get(area: string, stringId: string, lang: string = "eng"): Promise<string> {
    await this.loadStringsIfNeeded(area, lang);

    const string = this.strings[area]?.[lang]?.[stringId];
    return string ?? this.strings[area]?.["eng"]?.[stringId] ?? ""; // Fallback to English or return an empty string
  }

  /**
   * Substitute variables in a localized string.
   *
   * @param string - The string with variables to substitute.
   * @param var1 - The first variable to substitute.
   * @param var2 - Additional variables.
   * @returns The new string with variables substituted.
   */
  public strSub(string: string, ...vars: any[]): string {
    let str = string;

    vars.forEach((arg, i) => {
      str = str.replace(new RegExp(`%${i + 1}([^\\d]|$)`), `${arg}$1`); // Variables cannot be immediately followed by a digit
    });

    return str;
  }

  /**
   * Load all strings from a given area in a given language if they haven't already been loaded.
   *
   * @param area - The area of the strings.
   * @param lang - The language code.
   */
  protected async loadStringsIfNeeded(area: string, lang: string): Promise<void> {
    if (this.strings[area]?.[lang]) {
      return;
    }

    await this.loadStrings(area, lang);

    if (lang !== "eng" && !this.strings[area]?.["eng"]) {
      await this.loadStrings(area, "eng");
    }
  }

  protected async loadStrings(area: string, lang: string): Promise<void> {
    if (!area || !lang) {
      return;
    }

    const sql = "SELECT sid, string FROM localization.strings WHERE area = ? AND lang = ?";
    const strings = (await executeQuery(sql, "slave", [area, lang], { useCache: true })) as any[];

    // Convert the result into a record format { [sid]: string }
    const stringRecord: Record<string, string> = {};
    strings.forEach(({ sid, string }) => {
      stringRecord[sid] = string;
    });

    this.addStrings(area, lang, stringRecord);
  }

  /**
   * Add strings for a given area and language.
   *
   * @param area - The area of the strings.
   * @param lang - The language code.
   * @param strings - An object of strings, keyed by string_id.
   */
  public addStrings(area: string, lang: string, strings: Record<string, string> = {}): void {
    if (!area || !lang) {
      return;
    }

    if (!this.strings[area]) {
      this.strings[area] = {};
    }

    this.strings[area][lang] = { ...strings, ...(this.strings[area][lang] || {}) }; // Merge new strings with existing ones
  }
}
