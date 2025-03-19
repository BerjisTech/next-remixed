import { Discipline } from "@/interfaces/account";
import { executeQuery } from "../database/mysql/queryHelper";
import { StringRepository } from "@/i18n/Translation";

export class DisciplineService {
  private discGensCache: Record<number, string> | null = null;

  protected strings: StringRepository;

  /**
   * Constructs a DisciplineLookup instance.
   *
   * @param strings - The string repository for localization.
   */
  public constructor() {
    this.strings = new StringRepository();
  }

  /**
   * Get a list of the general discipline IDs defined in the ProZ.com domain.
   *
   * @returns Promise<number[]> An array of general discipline IDs
   */
  public async getDiscGenIds(): Promise<number[] | []> {
    const disciplines = await this.getDiscGens(); // Fetch general disciplines
    return disciplines ? Object.keys(disciplines).map(Number) : []; // Return IDs as an array of numbers
  }

  /**
   * Get the list of the general disciplines defined in the ProZ.com domain.
   *
   * @returns Promise<Record<number, string>> An array of general disciplines, in the format disc_gen_id => discipline name (in English)
   */
  public async getDiscGens(): Promise<Record<number, string> | null> {
    if (this.discGensCache === null) {
      const sql =
        "SELECT discipline_id, discipline_name FROM proz.disciplines ORDER BY discipline_name";
      const rows: Discipline[] = (await executeQuery(sql, "slave", [], {
        useCache: true,
      })) as any[];
      this.discGensCache = rows.reduce(
        (acc, { discipline_id, discipline_name }) => {
          acc[discipline_id] = discipline_name;
          return acc;
        },
        {} as Record<number, string>
      );
    }
    return this.discGensCache;
  }

  /**
   * Get the name of a general discipline.
   *
   * Uses the string repository service, so the name will be localized according to the string repo's configuration.
   *
   * @param discGenId - The ID of the general discipline.
   * @returns The name of the discipline as a string.
   */
  public async getDiscGenName(discGenId: string): Promise<string> {
    return await this.strings.get("_broad_fields", discGenId);
  }

  /**
   * Get the name of a sep discipline.
   *
   * Uses the string repository service, so the name will be localized according to the string repo's configuration.
   *
   * @param discSpecId - The ID of the general discipline.
   * @returns The name of the discipline as a string.
   */
  public async getDiscSpecName(discSpecId: string): Promise<string> {
    return await this.strings.get("_specific_fields", discSpecId);
  }
}
