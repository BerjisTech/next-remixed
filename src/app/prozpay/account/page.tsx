"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProzpayAccount = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const entity_id = session?.user?.entity_id;

  useEffect(() => {
    if (entity_id) {
      router.replace(`/prozpay/payee-dashboard/${entity_id}`);
    }
  }, [entity_id, router]);

  return (
    <div>
      <h1>ProZ*Pay Account</h1>
    </div>
  );
};
export default ProzpayAccount;
