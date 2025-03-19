import React from "react";
import OutsourcerFeedback from "../../../(partialsCommon)/_clientsFeedback";
import ConsiderMembers from "../../../(partialsCommon)/_considerMembers";
import ProbonoWork from "../../../(partialsCommon)/_probonoWork";
import Pairs from "./_pairs";
import { ProzUser } from "@/interfaces/account";
import ServiceVerification from "@/app/profile/(partialsCommon)/_serviceVerification";
import Bio from "@/app/profile/(partialsCommon)/_bio";

export default function InterpretingPage({ user }: { user: ProzUser }) {
  return (
    <div className="flex flex-col justify-start items-start self-stretch  gap-8 mt-5">
      <div className="w-full flex flex-row justify-start items-start gap-4">
        <Pairs entityId={user?.entity_id} />
        <div className="basis-1/2"></div>
      </div>
      <ServiceVerification user={user} service="interpreting" />

      <div className="flex flex-col justify-start items-start self-stretch  gap-6">
        {(user.can_edit || user.prof_prefs.show_wwa_ratings === "y") && (
          <OutsourcerFeedback user={user} />
        )}

        <div className="flex flex-col justify-start items-start self-stretch  gap-4 p-6 rounded-custom bg-accent dark:bg-black">
          <div className="flex justify-start items-center self-stretch  relative gap-2">
            <p className=" text-lg font-semibold text-left text-dark-blue-hue dark:text-accent-foreground">
              Prior interpreting work
            </p>
          </div>
          <div className="flex justify-start items-center  relative gap-1 px-3 py-2 rounded-[9px] bg-accent dark:bg-black">
            <p className=" text-sm font-medium text-left text-primary">
              Here we'll show your interpreting specific work
            </p>
          </div>
        </div>
        <Bio user={user} />
        <ProbonoWork user={user} />
      </div>
      {(!user.is_professional_member || user.is_owner) && <ConsiderMembers user={user} />}
    </div>
  );
}
