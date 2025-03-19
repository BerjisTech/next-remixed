// app/api/asi/route.ts

export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getAsiAccrualData } from "@/server/data/membershipAsi";

/**
 * This route expects query parameters to replicate the old inc_admin_asi.php form:
 *
 *  - show_year
 *  - max_payment_year
 *  - only_include_payments_this_year
 *  - exclude_payments_in_current_year
 *  - include_pre_2004
 *
 * Example:
 *   /api/asi?show_year=2010&max_payment_year=2012&only_include_payments_this_year=1
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const showYear = parseInt(searchParams.get("show_year") || "2010", 10);
    const maxPaymentYear = parseInt(searchParams.get("max_payment_year") || "", 10) || undefined;
    const onlyIncludePaymentsThisYear = !!searchParams.get("only_include_payments_this_year");
    const excludePaymentsInCurrentYear = !!searchParams.get("exclude_payments_in_current_year");
    const includePre2004 = !!searchParams.get("include_pre_2004");

    const data = await getAsiAccrualData(
      showYear,
      maxPaymentYear,
      onlyIncludePaymentsThisYear,
      excludePaymentsInCurrentYear,
      includePre2004
    );

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Error in GET /api/asi:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
