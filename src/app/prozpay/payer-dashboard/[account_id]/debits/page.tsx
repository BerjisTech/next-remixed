import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";
import ProzPayDebits from "@/app/prozpay/payee-dashboard/[account_id]/debits/_prozPayDebits";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <ProzPayDebits />
    </PayeeDashboard>
  );
};
export default page;
