import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";
import ProzPaySettings from "@/app/prozpay/payee-dashboard/[account_id]/settings/_prozPaySettings";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <ProzPaySettings />
    </PayeeDashboard>
  );
};
export default page;
