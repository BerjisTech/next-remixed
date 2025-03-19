"use client";
import ProzNotification from "@/components/shared/prozNotification";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";

const Unsubscribe = () => {
  const { user, canEdit } = useAppSelector((state) => state.profile);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-3 items-start justify-start mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">
          Unsubscribe from ProZ email notifications
        </p>
        <p className="text-primary">
          ProZ profile:
          <strong>
            {user?.username} {user?.entity_id}
          </strong>
        </p>
        <p className="text-primary">
          Email address: <strong>{user?.contact_email}</strong>
        </p>
        <button className="bg-primary dark:bg-primary text-white rounded-lg h-[40px] px-5">
          Unsubscribe from all email notifications
        </button>
        <ProzNotification
          title="Heads up!"
          message="This will stop notifications for all ProZ services, including jobs, KudoZ, forums, etc. To stop some notifications but not others, you can customize your email notifications instead."
          type="warning"
        ></ProzNotification>
        <p className="font-semibold dark:text-primary text-xl">Other options</p>
        <div className="p-3 bg-accent-alt dark:bg-black border border-solid border-secondary dark:border-primary rounded-xl w-full">
          <div className="p-3 bg-accent dark:bg-dark rounded-xl w-full">
            <p className="font-semibold dark:text-primary">Customize your email notifications</p>
            <p className="dark:text-primary">
              Adjust your email subscriptions, and other data and privacy settings.
            </p>
          </div>
          <div className="p-3 rounded-xl w-full">
            <p className="font-semibold dark:text-primary">Remove your ProZ account entirely</p>
            <p className="dark:text-primary">
              You will no longer appear in the directory, and you will not be able to log in.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Unsubscribe;
