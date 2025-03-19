import { executeQuery } from "../database/mysql/queryHelper";
import { entityGetDatum, getUserGeneralInfo } from "./common";
import { UserGeneralInfo } from "@/interfaces/account";
import { PROFESSIONAL_PLAN_CATEGORIES } from "@/constants/common";
import { ProPlanFeature } from "@/interfaces/membership";

/**
 * Checks if the entity is a professional member.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the entity is a professional member.
 */
export async function entityIsProfessionalMember(entityId: number): Promise<boolean> {
  if (!entityId) {
    return false; // Invalid ID
  }

  // // Check if the user is a professional member in the global context (assuming `proz` is globally available)
  // if (proz.eid_v === entityId && proz.is_professional_member && !proz.is_pseudoed_admin) {
  //     return true;
  // }

  // SQL query to check the user membership status
  const sqlQuery = `
        SELECT entity_id
        FROM proz.entity_membership_summaries
        WHERE entity_id = ?
          AND membership_type IN ("platinum", "pro_plus", "pro_premium", "pro_premium_yearly")
          AND is_member = "y"
    `;

  // Execute the query
  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  // Return whether the user is a professional member based on query result
  return result.length > 0 ? true : false;
}

/**
 * Check if a user is a professional member with payment type "commission_based".
 * Includes professional members with either the standard or plus packages with payment type "commission-based".
 *
 * @param {number} entityId - The entity ID of the member.
 * @returns {Promise<boolean>} - True for professional members with payment type "commission-based", false for others.
 */
export const entityIsProfessionalMemberCommissionBased = async (
  entityId: number = 0
): Promise<boolean> => {
  if (entityId <= 0) {
    return false;
  }

  // Static cache for the current session
  const seenProMemsCommissionBased: Record<number, boolean> = {};

  // Check local cache
  if (seenProMemsCommissionBased[entityId] !== undefined) {
    return seenProMemsCommissionBased[entityId];
  }

  // Check DB
  const sqlQuery = `
        SELECT entity_id 
        FROM proz.entity_memberships 
        WHERE entity_id = ? 
        AND membership_type IN ("platinum", "pro_plus", "pro_premium", "pro_premium_yearly") 
        AND NOW() BETWEEN time_start AND time_end 
        AND payment_type = "commission_based"
    `;
  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any[];

  const isProfessional = result.length > 0;
  seenProMemsCommissionBased[entityId] = isProfessional;

  return isProfessional;
};

/**
 * Retrieves the membership type of the entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<any>} - A promise that resolves to the membership type of the entity.
 */
export async function entityGetMembershipType(entityId: number): Promise<any> {
  if (!entityId) {
    return "";
  }

  // SQL query to check the user membership status
  const sqlQuery = `
        SELECT membership_type
        FROM proz.entity_memberships
        WHERE entity_id = ?
          AND time_end > NOW() LIMIT 1
    `;

  // Execute the query
  const result = (await executeQuery(sqlQuery, "slave", [entityId])) as any;

  if (result.length > 0) {
    return result[0]["membership_type"];
  }
  return "";
}

/**
 * Retrieves the local payment information for memberships.
 * @async
 * @param {boolean} [useDb=false] - A flag indicating whether to use the database for retrieving the information.
 * @returns {Promise<any>} - A promise that resolves to the local payment information.
 */
export const membershipGetLocalPaymentInfo = async (useDb: boolean = false) => {
  const localeDefinitionsDb: Record<string, any> = {};
  const validLocales: string[] = [];

  const sqlQuery1 = `
        SELECT * 
        FROM proz.local_payment_contacts 
        JOIN proz.local_contact_agreements 
        ON local_payment_contacts.entity_id = local_contact_agreements.entity_id 
        WHERE local_payment_contacts.active = 'yes' 
        AND local_contact_agreements.decision = 'accept' 
        AND local_contact_agreements.removed = 'n' 
        AND local_payment_contacts.removed_by = 0 
        ORDER BY country
    `;

  const result1 = (await executeQuery(sqlQuery1, "slave", [])) as any[];

  if (result1.length > 0) {
    for (const data of result1) {
      const storeItems: any[] = [];
      validLocales.push(data.country);

      //         const sqlQuery2 = `
      //         SELECT *
      //         FROM proz.local_payment_items
      //         WHERE local_payment_contact_id = ?
      //         AND active = 'y'
      //         ${data.local_payment_contact_id === 58 ? 'ORDER BY type ASC' : ''}
      //         `;

      //         const result2 = await executeQuery(sqlQuery2, 'slave', [data.local_payment_contact_id]) as any[];

      //         if (result2.length > 0) {
      //             for (const row of result2) {
      //                 const canView =
      //                     (row.can_be_used_by_professional === 'yes' && data.isProfessionalMember) ||
      //                     (row.can_be_used_by_corporate === 'yes' && data.employerIsBusinessMember) ||
      //                     (row.can_be_used_by_user === 'yes' && !data.isProfessionalMember);

      //                 const browniz4000Items = [384, 382];
      //                 if (browniz4000Items.includes(row.item_id) && data.browniz < 4000) {
      //                     continue;
      //                 }

      //                 storeItems.push({
      //                     id: row.item_id,
      //                     campaignItemId: row.campaign_item_id,
      //                     currency: data.currency,
      //                     canView,
      //                     type: row.type !== 'professional' ? row.type : undefined,
      //                 });
      //             }
      //         }

      //         localeDefinitionsDb[data.country] = {
      //             contactInfo: data.contact_info,
      //             entityId: data.entity_id,
      //             paymentInfo: data.payment_info,
      //             currency: data.currency,
      //             storeItems,
      //         };
    }
  }

  const localeDefinitions = useDb ? localeDefinitionsDb : {};
  return { validLocales, localeDefinitions };
};

/**
 * Retrieves the local payment contact number based on the country code.
 * @async
 * @param {string} countryCode - The country code for which the payment contact is to be retrieved.
 * @returns {Promise<number | null>} - A promise that resolves to the payment contact number or null if not found.
 */
export const getLocalPaymentContact = async (countryCode: string): Promise<number | null> => {
  const sqlQuery = `
        SELECT entity_id 
        FROM proz.local_payment_contacts 
        WHERE country = ? AND active = ?
    `;

  const params = [countryCode, "yes"];

  const rows = (await executeQuery(sqlQuery, "slave", params)) as { entity_id: number }[];

  return rows.length > 0 ? rows[0].entity_id : null;
};

/**
 * Retrieves the local payment contact data for a specific entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @returns {Promise<UserGeneralInfo | null>} - A promise that resolves to the local payment contact data or null if not found.
 */
export const getLocalPaymentContactData = async (
  entityId: number
): Promise<UserGeneralInfo | null> => {
  let contactEid: number | null = null;
  const countyCode: string = await entityGetDatum(entityId, "contact_country_code");
  const localOptions = await membershipGetLocalPaymentInfo();

  if (localOptions.validLocales.length > 0 && localOptions.validLocales.includes(countyCode)) {
    contactEid = await getLocalPaymentContact(countyCode);
  }
  const data = contactEid ? await getUserGeneralInfo({ entityId: contactEid as number }) : null;

  return data ?? null;
};

/**
 * Retrieves the benefits of professional membership.
 * @async
 * @param {boolean} [useDb=false] - A flag indicating whether to use the database for retrieving the information.
 * @returns {Promise<any>} - A promise that resolves to the professional membership benefits.
 */
export const getProfessionalMembershipBenefits = async (useDb: boolean = false) => {
  const benefits: any[] = [];

  if (!useDb) {
    return PROFESSIONAL_PLAN_CATEGORIES; // Replace with the local predefined array if useDb is false.
  }

  const sqlQuery = `
        SELECT 
            c.category_name,
            f.feature_name,
            f.detail_url,
            p.plan_level,
            p.availability,
            p.value
        FROM 
            proz.membership_plan_categories c
        LEFT JOIN 
            proz.membership_plan_features f 
            ON c.category_id = f.category_id
        LEFT JOIN 
            proz.membership_plan_levels p 
            ON f.feature_id = p.feature_id
        WHERE 
            c.plan_type = 'professional'
        ORDER BY 
            c.category_name, f.feature_name, p.plan_level;
        `;

  const results = (await executeQuery(sqlQuery, "slave", [])) as any[];

  if (results.length > 0) {
    let currentCategory = "";
    let categoryFeatures: Record<string, any>[] = [];
    let category: Record<string, any> = {};

    for (const row of results) {
      if (row.category_name !== currentCategory) {
        // Push the previous category and reset variables
        if (currentCategory) {
          category.features = categoryFeatures;
          benefits.push(category);
        }

        // Start a new category
        currentCategory = row.category_name;
        categoryFeatures = [];
        category = {
          name: row.category_name,
          features: [],
        };
      }

      // Map availability to the correct value
      let availability = "unavailable"; // default to 'unavailable'
      if (row.availability === "available") {
        availability = "available";
      } else if (row.availability === "partial") {
        availability = "partial";
      }

      // Add feature details
      const existingFeature = categoryFeatures.find((feature) => feature.name === row.feature_name);

      if (existingFeature) {
        existingFeature[row.plan_level] = availability;
        if (row.value) {
          existingFeature.value = row.value;
        }
      } else {
        const newFeature: ProPlanFeature = {
          name: row.feature_name,
          free: row.plan_level === "free" ? availability : undefined,
          standard: row.plan_level === "standard" ? availability : undefined,
          plus: row.plan_level === "plus" ? availability : undefined,
          premium: row.plan_level === "premium" ? availability : undefined,
        };

        if (row.detail_url) {
          newFeature.detailUrl = row.detail_url;
        }

        if (row.value) {
          newFeature.value = row.value;
        }

        categoryFeatures.push(newFeature);
      }
    }

    // Push the last category
    if (currentCategory) {
      category.features = categoryFeatures;
      benefits.push(category);
    }
  }

  return benefits;
};
