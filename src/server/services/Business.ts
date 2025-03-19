import { Business } from "@/interfaces/business";
import { executeQuery } from "../database/mysql/queryHelper";

export class BusinessService {
  /**
   * Fetches employer businesses for a given entity.
   *
   * @param entityId - The ID of the entity to get businesses for.
   * @param options - Options for query customization:
   *   - `useMasterDb` (boolean): If true, uses the master database.
   *   - `includeUnconfirmed` (boolean): If true, includes unconfirmed employers.
   * @returns A promise that resolves to an array of `Business` objects.
   */
  public async getEmployerBusinesses(
    entityId: number,
    options: Record<string, any> = {}
  ): Promise<Business[]> {
    if (entityId < 1) {
      return [];
    }

    // Get business IDs for the entity
    const businessIds = await this.getEmployerBusinessIds(entityId, options);
    const businessIdArray = businessIds.map((item) => item.business_id) ?? [];
    // Get businesses by their IDs
    return this.getBusinessesByIds(businessIdArray, options);
  }

  /**
   * Fetches employer business IDs for a given entity.
   *
   * @param eid - The entity ID to fetch business IDs for.
   * @param options - Query options, including:
   *   - `useMasterDb` (boolean): If true, uses the master database.
   *   - `includeUnconfirmed` (boolean): If false, only confirmed businesses are included.
   *   - `isActive` (boolean): If true, filters for active businesses.
   *   - `useMemcache` (boolean): Enable caching (not implemented in this code).
   * @returns A promise that resolves to an array of business IDs.
   */
  private async getEmployerBusinessIds(
    entityId: number,
    options: Record<string, any> = {}
  ): Promise<Record<string, any>[]> {
    if (entityId <= 0) return [];

    // Determine which database to use
    const db = options.useMasterDb ? "master" : "slave";

    // Construct the SQL query
    let businessQuery = `
            SELECT business_id
            FROM business.business_entities_new
            WHERE entity_id = ?
            AND is_removed = 'n'
        `;
    const params: any[] = [entityId];

    // Include filters based on options
    if (options.isActive !== undefined) {
      businessQuery += " AND is_active = ?";
      params.push(options.isActive ? "y" : "n");
    }

    if (options.includeUnconfirmed === false) {
      businessQuery += ' AND is_confirmed = "y"';
    }

    // Execute the query
    const res: Record<string, any>[] = (await executeQuery(businessQuery, db, params)) as any[];
    return res;
  }

  /**
   * Fetches businesses by their IDs.
   *
   * @param businessIds - An array of business IDs to fetch.
   * @param options - Options for query customization.
   * @returns A promise that resolves to an array of business objects.
   */
  private async getBusinessesByIds(
    businessIds: number[],
    options: Record<string, any> = {}
  ): Promise<Business[]> {
    if (businessIds.length === 0) {
      return [];
    }

    // Construct the SQL query for fetching business details by IDs
    const businessQuery = `
            SELECT *
            FROM business.businesses
            WHERE business_id IN (${businessIds.join(", ")})
        `;

    // Execute the query
    return (await executeQuery(
      businessQuery,
      options.useMasterDb ? "master" : "slave",
      []
    )) as any[];
  }

  /**
   *
   * @param businessId
   * @returns
   */
  public async getBusinessCurrentMembership(businessId: number): Promise<string | null> {
    // Check if current membership package is already set
    let currentMembershipPackage: string | null = ""; // default to empty string if not set

    if (!currentMembershipPackage) {
      // Define the SQL query to fetch the `current_membership_package` for the given `business_id`
      const sqlQuery = `
            SELECT current_membership_package 
            FROM business.businesses 
            WHERE business_id = ?
            `;

      // Execute the query
      const result = (await executeQuery(sqlQuery, "slave", [businessId])) as any[];

      // Set `currentMembershipPackage` to the retrieved value or `null` if no value is found
      currentMembershipPackage = result.length > 0 ? result[0].current_membership_package : null;
    }

    return currentMembershipPackage;
  }

  /**
   * Convert the current membership package into the legacy "membership_type" value.
   *
   * @param businessId - The ID of the business to retrieve the current membership for.
   * @returns A promise that resolves to the legacy membership type as a string or null if no match is found.
   */
  public async getLegacyMembershipType(businessId: number): Promise<string | null> {
    const packageType = await this.getBusinessCurrentMembership(businessId);

    switch (packageType) {
      case "standard":
        return "corporate";
      case "plus":
        return "bus_plus";
      case "enterprise":
        return "bus_enterprise";
      case "starter":
        return "bus_starter";
      default:
        return null;
    }
  }
}
