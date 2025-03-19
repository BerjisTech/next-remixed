import PayeeDashboard from "@/app/prozpay/payee-dashboard/[account_id]/_payeeDashboard";
import PaymentsReceived from "@/app/prozpay/payee-dashboard/[account_id]/payments-received/_paymentsReceived";
import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <PayeeDashboard>
      <PaymentsReceived />
    </PayeeDashboard>
  );
};
export default page;
