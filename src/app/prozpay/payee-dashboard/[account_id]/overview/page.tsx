import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";
import ProzPayOverview from "@/app/prozpay/payee-dashboard/[account_id]/overview/_prozPayOverview";
import { prozPayMetadata } from "@/constants/prozpay";
import { Metadata } from "next";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <ProzPayOverview />
    </PayeeDashboard>
  );
};
export default page;
