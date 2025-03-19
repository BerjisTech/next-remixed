import EditButton from "@/app/profile/(partialsCommon)/_editButton";
import { ProzUser } from "@/interfaces/account";
import React from "react";

const Compliance = ({ user }: { user: ProzUser }) => {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col justify-start items-start flex-grow gap-4 p-6 rounded-custom bg-accent dark:bg-black min-h-[150px]">
        <div className="w-full flex justify-between items-center relative">
          <p className="w-full text-lg font-semibold text-left text-dark-blue-hue dark:text-white">
            Compliance & verification
          </p>
          {user.can_edit && <EditButton drawerName="verification" />}
        </div>
        <div className="w-full flex justify-center items-center relative gap-2.5 px-4 py-2 rounded-lg bg-secondary dark:bg-dark">
          <p className="flex-grow w-[390px] text-sm text-left text-primary">
            Here we will show internet speed, HIPAA certification, and other data related to
            compliance
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Compliance;
