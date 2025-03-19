"use client";
import React, { useState, useEffect } from "react";
import OpportunitiesInterpretersNetworkDrawer from "@/components/shared/opportunitiesInterpretersNetworkDrawer";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { ADMINS } from "@/constants/common";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";

const InterpretersNetwork: React.FC = () => {
  const adminIds = ADMINS.map(Number);
  const { entityId } = useAppSelector((state) => state.profile);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const dispatch = useAppDispatch();
  const [missedCalls, setMissedCalls] = useState<{ language: string; total_calls: number }[]>([]);

  useEffect(() => {
    fetch("/next/api/opportunities/missed-calls")
      .then((response) => response.json())
      .then((data) => {
        setMissedCalls(data);
        setIsDataLoaded(true);
      })
      .catch((error) => console.error("Error fetching missed calls:", error));
  }, []);

  const showMissedCallsDrawer = false;

  const toggleDrawer = () => {
    dispatch(
      setContentSliceBits({ bitToSet: "showMissedCallsDrawer", value: !showMissedCallsDrawer })
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-end gap-4">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">Missed calls</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Missed calls last week</p>
          </div>
          {adminIds.includes(entityId) && (
            <Button className="text-xs px-2 py-1 h-6" onClick={() => toggleDrawer()}>
              Edit stats (admin only)
            </Button>
          )}
        </div>

        {/* Missed calls list */}
        <div className="flex flex-wrap gap-4">
          {isDataLoaded ? (
            missedCalls.map((call, index) => (
              <div
                key={index}
                className="bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {call.language}: {call.total_calls} calls
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Loading...</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Want to start taking calls?</p>
          <Link
            href="https://www.proz.com/pools/interpreters/apply"
            className="bg-teal-600 dark:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 dark:hover:bg-teal-800"
          >
            Apply to the interpreters network
          </Link>
        </div>
      </div>
      {adminIds.includes(entityId) && (
        <OpportunitiesInterpretersNetworkDrawer></OpportunitiesInterpretersNetworkDrawer>
      )}
    </>
  );
};

export default InterpretersNetwork;
