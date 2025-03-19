// src/server/data/membershipAsi.ts
import { executeQuery } from "@/server/database/mysql/queryHelper";

/**
 * Interface for the final "accrued" row (Professional or Business).
 */
export interface AccruedDataRow {
  accrued_paid_usd?: number;
  accrued_paid_euro?: number;
  accrued_usd_cash_to_proz?: number;
  accrued_euro_cash_to_proz?: number;
  usd_refunded?: number;
  euro_refunded?: number;
}

/**
 * Interface for the aggregated monthly breakdown
 */
export interface MonthlyBreakdown {
  [month: string]: Partial<AccruedDataRow>;
}

/**
 * Interface for the total "paid" row
 */
export interface TotalPaidYear {
  paid_usd?: number;
  paid_euro?: number;
  usd_to_proz?: number;
  usd_refunded?: number;
  euro_to_proz?: number;
  euro_refunded?: number;
}

/**
 * The overall data structure returned by getAsiAccrualData
 */
export interface AsiAccrualResult {
  data: MonthlyBreakdown; // Professional membership monthly breakdown
  total_accrued: AccruedDataRow; // Professional membership total accrued
  bus_data: MonthlyBreakdown; // Business membership monthly breakdown
  bus_total_accrued: AccruedDataRow; // Business membership total accrued
  total_paid_this_year: TotalPaidYear; // Professional membership total paid in year
  bus_total_paid_this_year: TotalPaidYear; // Business membership total paid in year
}

/**
 * This function replicates the logic from inc_admin_asi.php to calculate:
 * 1) Accrued (or accruable) subscription income for each month
 * 2) Total membership payments made in a given year
 *
 * @param showYear Which year to show
 * @param maxPaymentYear Whether to limit to payments up to the end of a particular year
 * @param onlyIncludePaymentsThisYear Whether to only include payments in showYear
 * @param excludePaymentsInCurrentYear Whether to exclude payments in the current system year
 * @param includePre2004 Whether to include or exclude anything before 2004
 * @returns Data structure with monthly breakdown, totals, etc.
 */
export async function getAsiAccrualData(
  showYear: number,
  maxPaymentYear?: number,
  onlyIncludePaymentsThisYear: boolean = false,
  excludePaymentsInCurrentYear: boolean = false,
  includePre2004: boolean = false
): Promise<AsiAccrualResult> {
  // Current system year
  const currentYear = new Date().getFullYear();

  // For monthly breakdown iteration
  const startMonthString = `${showYear}-01`; // e.g. "2010-01"
  const endMonthString = `${showYear}-12`; // e.g. "2010-12"

  // Build minPaymentDate if we're excluding pre-2004 or restricting to showYear
  let minPaymentDate = "";
  let maxPaymentDate = "";

  if (!includePre2004) {
    // Exclude any payments made before 2004
    minPaymentDate = "2004-01-01 00:00:00";
  }

  // Only include payments made in showYear
  if (onlyIncludePaymentsThisYear) {
    minPaymentDate = `${showYear}-01-01 00:00:00`;
    maxPaymentDate = `${showYear}-12-31 23:59:59`;
  } else if (maxPaymentYear) {
    maxPaymentDate = `${maxPaymentYear}-12-31 23:59:59`;
  }

  // Exclude payments in the current year
  if (excludePaymentsInCurrentYear) {
    maxPaymentDate = `${currentYear - 1}-12-31 23:59:59`;
  }

  // Accrued data placeholders
  const data: MonthlyBreakdown = {};
  const bus_data: MonthlyBreakdown = {};
  const total_accrued: AccruedDataRow = {
    accrued_paid_usd: 0,
    accrued_paid_euro: 0,
    accrued_usd_cash_to_proz: 0,
    accrued_euro_cash_to_proz: 0,
    usd_refunded: 0,
    euro_refunded: 0,
  };
  const bus_total_accrued: AccruedDataRow = {
    accrued_paid_usd: 0,
    accrued_usd_cash_to_proz: 0,
  };

  // 1) -------------------------------
  // Get accrued income for each month
  //  - Professional membership
  //  - Business membership
  //  (We do a for loop from 1..12 in the given showYear)

  for (let m = 1; m <= 12; m++) {
    // Build month strings
    const monthString = `${showYear}-${String(m).padStart(2, "0")}`;
    const timeStartOfThisMonth = `${monthString}-01 00:00:00`;
    const dateObj = new Date(showYear, m, 0); // Last day of that month
    const lastDay = String(dateObj.getDate()).padStart(2, "0");
    const timeEndOfThisMonth = `${showYear}-${String(m).padStart(2, "0")}-${lastDay} 23:59:59`;

    // --- Query for professional membership ---
    /* 
      -- {{Get accruable income for a single month (Professional membership)}} 
      -- Author : @BerjisTech <ben@proz.com> 
      -- Date : {{2025-02-04}}
    */
    let sqlPro = `
      SELECT 
        SUM(paid_cash / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_paid_usd,
        SUM(paid_cash_EURO / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_paid_euro,
        SUM(cash_to_proz / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_usd_cash_to_proz,
        SUM(cash_refunded / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS usd_refunded,
        SUM(cash_to_proz_EURO / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_euro_cash_to_proz,
        SUM(cash_refunded_EURO / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS euro_refunded
      FROM proz.entity_memberships
      WHERE time_start < ? 
        AND time_end > ? 
        AND membership_type NOT IN ("corporate", "bus_plus", "bus_enterprise")
    `;

    const proParams: any[] = [timeEndOfThisMonth, timeStartOfThisMonth];

    if (minPaymentDate) {
      sqlPro += ` AND time_paid > ? `;
      proParams.push(minPaymentDate);
    }
    if (maxPaymentDate) {
      sqlPro += ` AND time_paid < ? `;
      proParams.push(maxPaymentDate);
    }

    const proRows = (await executeQuery(sqlPro, "slave", proParams)) as any[];
    if (proRows && proRows.length > 0 && proRows[0].accrued_paid_usd != null) {
      data[monthString] = proRows[0];
      // Accumulate totals
      Object.keys(proRows[0]).forEach((key) => {
        if (typeof proRows[0][key] === "number") {
          total_accrued[key as keyof AccruedDataRow] =
            (total_accrued[key as keyof AccruedDataRow] || 0) + proRows[0][key];
        }
      });
    } else {
      data[monthString] = {};
    }

    // --- Query for business membership ---
    /*
      -- {{Get accruable income for a single month (Business membership)}} 
      -- Author : @BerjisTech <ben@proz.com> 
      -- Date : {{2025-02-04}}
    */
    let sqlBus = `
      SELECT 
        SUM(paid_cash / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_paid_usd,
        SUM(cash_to_proz / PERIOD_DIFF(DATE_FORMAT(time_end, "%Y%m"), DATE_FORMAT(time_start, "%Y%m"))) AS accrued_usd_cash_to_proz
      FROM business.business_memberships
      WHERE time_start < ? 
        AND time_end > ?
    `;

    const busParams: any[] = [timeEndOfThisMonth, timeStartOfThisMonth];

    if (minPaymentDate) {
      sqlBus += ` AND time_paid > ? `;
      busParams.push(minPaymentDate);
    }
    if (maxPaymentDate) {
      sqlBus += ` AND time_paid < ? `;
      busParams.push(maxPaymentDate);
    }

    const busRows = (await executeQuery(sqlBus, "slave", busParams)) as any[];
    if (busRows && busRows.length > 0 && busRows[0].accrued_paid_usd != null) {
      bus_data[monthString] = busRows[0];
      // Accumulate totals
      Object.keys(busRows[0]).forEach((key) => {
        if (typeof busRows[0][key] === "number") {
          bus_total_accrued[key as keyof AccruedDataRow] =
            (bus_total_accrued[key as keyof AccruedDataRow] || 0) + busRows[0][key];
        }
      });
    } else {
      bus_data[monthString] = {};
    }
  }

  // 2) -------------------------------
  // Total payments made in that year (Professional membership)
  /*
    -- {{Get total membership payments made that year (Professional)}} 
    -- Author : @BerjisTech <ben@proz.com> 
    -- Date : {{2025-02-04}}
  */
  let sqlPaidYearPro = `
    SELECT 
      SUM(paid_cash) AS paid_usd,
      SUM(paid_cash_EURO) AS paid_euro,
      SUM(cash_to_proz) AS usd_to_proz,
      SUM(cash_refunded) AS usd_refunded,
      SUM(cash_to_proz_EURO) AS euro_to_proz,
      SUM(cash_refunded_EURO) AS euro_refunded
    FROM proz.entity_memberships
    WHERE time_paid >= ? 
      AND time_paid <= ?
      AND membership_type NOT IN ("corporate", "bus_plus", "bus_enterprise")
  `;
  const proPaidParams = [`${showYear}-01-01 00:00:00`, `${showYear}-12-31 23:59:59`];
  const proPaidRows = (await executeQuery(sqlPaidYearPro, "slave", proPaidParams)) as any[];
  const total_paid_this_year: TotalPaidYear =
    proPaidRows && proPaidRows.length > 0 ? proPaidRows[0] : {};

  // 3) -------------------------------
  // Total payments made in that year (Business membership)
  /*
    -- {{Get total membership payments made that year (Business)}} 
    -- Author : @BerjisTech <ben@proz.com> 
    -- Date : {{2025-02-04}}
  */
  let sqlPaidYearBus = `
    SELECT 
      SUM(paid_cash) AS paid_usd,
      SUM(cash_to_proz) AS usd_to_proz
    FROM business.business_memberships
    WHERE time_paid >= ? 
      AND time_paid <= ?
  `;
  const busPaidParams = [`${showYear}-01-01 00:00:00`, `${showYear}-12-31 23:59:59`];
  const busPaidRows = (await executeQuery(sqlPaidYearBus, "slave", busPaidParams)) as any[];
  const bus_total_paid_this_year: TotalPaidYear =
    busPaidRows && busPaidRows.length > 0 ? busPaidRows[0] : {};

  return {
    data,
    total_accrued,
    bus_data,
    bus_total_accrued,
    total_paid_this_year,
    bus_total_paid_this_year,
  };
}
