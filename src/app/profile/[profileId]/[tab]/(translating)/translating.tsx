import React from "react";
import { ProzUser } from "@/interfaces/account";
import ServiceVerification from "@/app/profile/(partialsCommon)/_serviceVerification";
import Bio from "@/app/profile/(partialsCommon)/_bio";

export default function TranslatingPage({ user }: { user: ProzUser }) {
  return (
    <div className="flex flex-col justify-start items-start self-stretch  gap-8 mt-5">
      <ServiceVerification user={user} service="translating" />
      <Bio user={user} />
    </div>
  );
}
