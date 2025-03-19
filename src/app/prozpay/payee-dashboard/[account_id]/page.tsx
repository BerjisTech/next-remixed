import ProzPayOverview from "@/app/prozpay/payee-dashboard/[account_id]/overview/_prozPayOverview";
import React from "react";
import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <ProzPayOverview />
    </PayeeDashboard>
  );
};
export default page;
