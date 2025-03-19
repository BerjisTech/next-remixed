import Bio from "@/app/profile/(partialsCommon)/_bio";
import ServiceVerification from "@/app/profile/(partialsCommon)/_serviceVerification";
import { ProzUser } from "@/interfaces/account";
import React from "react";

export default function SubtitlingPage({ user }: { user: ProzUser }) {
  return (
    <div className="flex flex-col justify-start items-start self-stretch  gap-8 mt-5">
      <ServiceVerification user={user} service="subtitling" />
      <Bio user={user} />
    </div>
  );
}
