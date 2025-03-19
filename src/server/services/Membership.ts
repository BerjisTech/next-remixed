import { executeQuery } from "../database/mysql/queryHelper";
import { BusinessService } from "./Business";

export class ProzMembershipManager {
  protected busman: BusinessService;

  /**
   * Constructor for ProzMembershipManager.
   *
   * @param busman - BusinessService instance
   */
  constructor(busman?: BusinessService) {
    // Automatically inject BusinessService if not provided
    this.busman = busman || new BusinessService();
  }

  /**
   * Get membership types for multiple entity IDs.
   *
   * @param entityIds Array of entity IDs to fetch memberships for.
   * @param options Options to configure query behavior
   * @returns An object mapping entity IDs to their membership types, or false if not found
   */
  public async getMembershipTypesByEntityIds(
    entityIds: number[],
    options: Record<string, any> = {}
  ): Promise<Record<number, string | null>> {
    const membershipTypes: Record<number, string | null> = {};

    // Initialize return values with `null` for each entity ID
    entityIds.forEach((id) => {
      membershipTypes[id] = null;
    });

    // Filter unique, sanitized IDs
    const uniqueEntityIds = Array.from(new Set(entityIds)).filter((id) => id > 0);

    if (!options.ignoreProfessional) {
      const professionalQuery = `
            SELECT entity_id, membership_type
            FROM proz.entity_memberships 
            WHERE entity_id IN (${uniqueEntityIds.map(() => "?").join(", ")}) 
            AND NOW() BETWEEN time_start AND time_end
            `;

      const rows = (await executeQuery(professionalQuery, "slave", uniqueEntityIds)) as any[];

      // Map professional memberships to their respective entity IDs
      rows.forEach((row) => {
        membershipTypes[row.entity_id] = this.maxMembershipType(
          row.membership_type,
          membershipTypes[row.entity_id] || ""
        );
      });
    }

    if (!options.ignoreBusiness) {
      // Get entities without a professional membership
      const entitiesWithoutProfessional = uniqueEntityIds.filter((id) => !membershipTypes[id]);

      for (const entityId of entitiesWithoutProfessional) {
        const employers = await this.busman.getEmployerBusinesses(entityId, options);
        for (const employer of employers) {
          const currentMembership = await this.busman.getBusinessCurrentMembership(
            employer.business_id
          );
          if (currentMembership) {
            membershipTypes[entityId] = await this.busman.getLegacyMembershipType(
              employer.business_id
            );
            break; // Stop after finding the first valid business membership
          }
        }
      }
    }

    return membershipTypes;
  }

  /**
   * Given two membership_type values from proz.entity_memberships, returns the "highest" one.
   * Used for resolving membership type of members with more than one overlapping entity_membership record.
   *
   * @param typeA - First membership type
   * @param typeB - Second membership type
   * @returns The higher-priority membership type
   */
  private maxMembershipType(typeA: string | null, typeB: string | null): string | null {
    if (!typeA) return typeB;
    if (!typeB) return typeA;

    const prefOrder = [
      "bus_enterprise",
      "bus_plus",
      "corporate",
      "bus_starter",
      "pro_premium",
      "pro_plus",
      "platinum",
      "jobs_platinum",
      "community_platinum",
      "student",
    ];

    const typeAIndex = prefOrder.indexOf(typeA);
    const typeBIndex = prefOrder.indexOf(typeB);

    // If either type is not found in the priority list, treat it as lowest priority.
    if (typeAIndex === -1) return typeB;
    if (typeBIndex === -1) return typeA;

    return typeAIndex < typeBIndex ? typeA : typeB;
  }
}
