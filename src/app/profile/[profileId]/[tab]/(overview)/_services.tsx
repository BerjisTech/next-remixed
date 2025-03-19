"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { useGetUserServicesQuery } from "@/lib/store/features/profile/profileApiSlice";
import React, { useState } from "react";

const Services = ({ entityId }: { entityId: number | undefined }) => {
  const { getServicesStr } = useContentHook();
  const {
    data: userServices,
    error: servicesError,
    isLoading: servicesLoading,
  } = useGetUserServicesQuery(entityId, { skip: !entityId });

  const [showAllServices, setShowAllServices] = useState(false);

  // Get services as an array for easier manipulation
  const servicesArray = userServices ? Object.values(userServices) : [];
  const servicesToDisplay = showAllServices ? servicesArray : servicesArray.slice(0, 3);

  console.log("Setting user services");
  return (
    <React.Fragment>
      {servicesLoading && <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />}
      {!servicesLoading && (
        <div className="w-full flex flex-col justify-start items-start flex-grow gap-4 px-6 py-4 rounded-custom bg-accent dark:bg-black min-h-[150px]">
          <div className="w-full flex justify-start items-center relative gap-4">
            <p className="w-full text-lg font-semibold text-left text-dark-blue-hue dark:text-white">
              Services
            </p>
          </div>
          {servicesArray && servicesArray.length > 0 ? (
            <div className="w-full flex flex-col justify-center items-start relative gap-1.5">
              <p className="w-full text-base text-left text-black dark:text-accent-foreground">
                <span className="w-full flex justify-between items-start text-base text-left text-black dark:text-accent-foreground">
                  {servicesToDisplay.length > 0 && <span>{getServicesStr(servicesToDisplay)}</span>}
                  {servicesArray.length > 3 && (
                    <button
                      className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                      onClick={() => setShowAllServices((prev) => !prev)}
                    >
                      {showAllServices ? "Show less" : `Show all (${servicesArray.length})`}
                    </button>
                  )}
                </span>
              </p>
            </div>
          ) : (
            <span className="w-full text-sm font-medium text-left text-primary-900">
              No services reported yet.
            </span>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Services;
