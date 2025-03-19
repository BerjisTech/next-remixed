"use client";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/lib/store/hooks";

const PayeeDashboard = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  if (entityId && entityId > 0) {
    // Redirect to a dynamic account ID
    redirect(`/prozpay/payee-dashboard/${entityId}`);
  }
};

export default PayeeDashboard;
