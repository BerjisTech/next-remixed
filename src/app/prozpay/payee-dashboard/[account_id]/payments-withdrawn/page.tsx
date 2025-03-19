import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";
import PaymentsWithdrawn from "@/app/prozpay/payee-dashboard/[account_id]/payments-withdrawn/_paymentsWithdrawn";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <PaymentsWithdrawn />
    </PayeeDashboard>
  );
};
export default page;
