import { fetchAccessToken } from "@/server/php-api/apiAuth";
import { getApiBaseUrl } from "@/utils/helpers";
import { entityGetMembershipType } from "@/server/data/membership";
import { executeQuery } from "@/server/database/mysql/queryHelper";
import { formatCurrency, timeAgo } from "@/constants/prozpay";
import { COUNTRIES } from "@/constants/common";

export const getServiceFeePercentApi = async (
  payerEid: number = 0,
  payeeEid: number = 0
): Promise<number | null> => {
  //
  // Fees for specific payees
  //

  // Removal requested on https://github.com/ProZcom/web-app/issues/15084 <May 20th, 2024>
  // Nitin Goyal, from Krishna Translations, https://www.proz.com/translator/129766
  // if (payeeEid == 129766 || payerEid == 129766) {
  //   return 0;
  // }

  // CPN members, who have promised to get an overall payments of more than $12k in payments over a year.
  if ([2264117].includes(payeeEid)) {
    return 0.01;
  }

  // Default, if no payer or payee discount
  if (!payerEid) {
    return 0.05;
  }

  //
  // 1% fee for:
  //
  if ([3253154 /* Jeenie (Whitney Shane) */].includes(payerEid)) {
    return 0.01;
  }

  //
  // 1.5% fee for:
  //
  if (
    [
      611252, // Zhonghe Wei, MultiLingualTec https://www.proz.com/profile/611252
    ].includes(payerEid)
  ) {
    return 0.015;
  }

  //
  // 2% fee for:
  //
  if (
    [
      2950160, // Kala Liebe, Hands Up Communications, https://www.proz.com/profile/2950160
      1701608, // Effectiff, https://www.proz.com/profile/1701608
      2564719, // Boostlingo, https://www.proz.com/profile/2564719
      3105419, // Menna Kamel, Nagwa Limited, https://www.proz.com/profile/3105419
      3183385, // Melvin Perez, Allied Language Services, Inc. https://www.proz.com/profile/3183385
      3150458, // Global Interpreting Network (Favio Estevez)
    ].includes(payerEid)
  ) {
    return 0.02;
  }

  //
  // 3% fee for:
  //
  if (
    [
      3042466, // DC Language Solutions (Shahla Mostafavi)
      3424868, // LifeOmic (Kazuo Suzuki)
      3558652, // PPD Translate (Nasrin Mulla - Project Assistant)
      3426949, // PPD Translate (Mary Hough - Senior Talent Sourcer)
      3713963, // PPD Translate (Manuel Iglesias - Associate Director)
    ].includes(payerEid)
  ) {
    return 0.03;
  }

  let payerMembership = await entityGetMembershipType(payerEid);
  let payeeMembership = await entityGetMembershipType(payeeEid);

  if (payerMembership.includes("enterprise")) {
    return 0.0;
  }

  if (["plus", "standard", "starter"].includes(payerMembership)) {
    return 0.02;
  }

  // After clearing special cases, calculate fees for everyone else
  /*
   *
   * https://github.com/ProZcom/web-app/issues/10879#issue-1966655927
   *
   * Non-member payer, and non-member payee: 5%
   * Non-member payer, and member payee: 3.9%
   * Member payer, and non-member payee: 2%
   * Member payer, and member payee: 2%
   *
   */

  // Both are members
  if (payerMembership != "" && payeeMembership != "") {
    return 0.02;
  }

  // Payer is a member and payee is not
  if (payerMembership != "" && payeeMembership == "") {
    return 0.02;
  }

  // Payee is a member and payer is not
  if (payerMembership == "" && payeeMembership != "") {
    return 0.039;
  }

  // Neither is a member
  if (payerMembership == "" && payeeMembership == "") {
    return 0.05;
  }
  return 0.05;
};

export const getPaymentMethodFeesAPi = async (): Promise<object | null> => {
  return {
    bank_transfer: 0,
    credit_card: 0.0375,
    paypal: 0.0375,
    advance_payment: 0,
  };
};

export const getPaymentsReceivedAPi = async (payeeEid: number): Promise<any> => {
  try {
    const url = getApiBaseUrl(`pay/payments-received/${payeeEid}`, true);
    let accessToken = await fetchAccessToken(payeeEid.toString());
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getPaymentsWithdrawnAPi = async (payeeEid: number): Promise<any> => {
  try {
    const url = getApiBaseUrl(`pay/payments-withdrawn/${payeeEid}`, true);
    let accessToken = await fetchAccessToken(payeeEid.toString());
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getCustomerDebitsAPi = async (payeeEid: number): Promise<any> => {
  try {
    const url = getApiBaseUrl(`pay/customer-debits/${payeeEid}`, true);
    let accessToken = await fetchAccessToken(payeeEid.toString());
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getProzPayOverviewAPi = async (payeeEid: number): Promise<any> => {
  try {
    const url = getApiBaseUrl(`pay/overview/${payeeEid}`, true);
    let accessToken = await fetchAccessToken(payeeEid.toString());
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getProzPaySettingsAPi = async (payeeEid: number): Promise<any> => {
  try {
    const url = getApiBaseUrl(`pay/settings/${payeeEid}`, true);
    let accessToken = await fetchAccessToken(payeeEid.toString());
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await res.json();
  } catch (error) {
    return error;
  }
};

export const findUser = async (searchQuery: string) => {
  // TODO clean to prevent XSS
  const cleanQuery = searchQuery;
  const entitySearchUrl = `https://www.proz.com/ajax/ajax_find_entity.php?query=${cleanQuery}`;
  let res = await fetch(entitySearchUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};

export async function getEntityBusinesses(entityId: number): Promise<any> {
  const sqlQuery = `SELECT bd.common_name, ben.business_id
                      FROM business.business_entities_new as ben
                               JOIN business.business_data as bd ON bd.business_id = ben.business_id
                      WHERE ben.entity_id = ?
                        AND ben.is_active = 'y'
                        AND ben.is_confirmed = 'y'
                        AND ben.is_removed = 'n'`;

  return await executeQuery(sqlQuery, "slave", [entityId]);
}

export const getPaymentFeedData = async () => {
  const sqlQuery = `SELECT pp.time_created,
                             pp.payout_amount,
                             pp.payout_currency,
                             pp.business_id,
                             MIN(ps.service_name) AS service_name,
                             pes.entity_id,
                             pp.payout_id,
                             pe.contact_country_code
                      FROM prozpay.payouts pp
                               JOIN proz.entity_services pes ON pp.payee_eid = pes.entity_id
                               JOIN proz.services ps ON pes.service_id = ps.service_id
                               JOIN proz.entities as pe ON pes.entity_id = pe.entity_id
                      GROUP BY pp.payout_id, pp.time_created, pp.payout_amount, pp.payout_currency, pes.entity_id
                      ORDER BY pp.payout_id DESC LIMIT 28;
    `;

  const records = (await executeQuery(sqlQuery, "slave")) as any[];

  return records.map((record, i) => ({
    amount: `${formatCurrency(Math.ceil(record.payout_amount), record.payout_currency)}`,
    payee: getPayeeName(record.service_name.toLowerCase()),
    payee_country_code: record.contact_country_code,
    payee_country: record.contact_country,
    description: `in ${
      COUNTRIES.find((c) => c.code.toLowerCase() === record.contact_country_code.toLowerCase())
        ?.name
    }`,
    payer: getPayerTitle(parseInt(record.business_id)),
    time: `${timeAgo(record.time_created)}`,
  }));
};

function getPayeeName(service: string): string {
  switch (service) {
    case "interpretation":
    case "interpreting":
      return "an interpreter";
    case "translation":
      return "a translator";
    case "editing/proofreading":
      return "a proofreader";
    default:
      return "a freelancer";
  }
}

function getPayerTitle(business_id: number): string {
  if (business_id > 0) {
    return "A business";
  }

  const payers = ["A member", "A user"];
  return payers[Math.floor(Math.random() * (payers.length - 1) + 1)];
}
