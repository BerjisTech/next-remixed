"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { ProzUser } from "@/interfaces/account";
import { useGetUserBbEntriesQuery } from "@/lib/store/features/profile/profileApiSlice";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import Link from "next/link";
import { useContentHook } from "@/hooks/useContentHook";

const RatingsGiven = ({ user }: { user: ProzUser }) => {
  const { getCountryNameCountryCode } = useContentHook();
  const { data: bbEntries, isLoading: bbEntriesLoading } = useGetUserBbEntriesQuery(
    user.entity_id,
    { skip: !user.entity_id }
  );
  const [showAll, setShowAll] = useState(false);

  const MAX_VISIBLE_ROWS = 3;

  return (
    <React.Fragment>
      {bbEntriesLoading && (
        <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />
      )}
      {!bbEntriesLoading && (
        <div
          id="ratings-given"
          className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-xl bg-accent"
        >
          <div className="flex flex-row justify-between w-full">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-dark-blue-hue">
              Reviews given
            </p>
            {user.is_owner && (
              <div className="flex flex-row gap-3">
                <PersonalPrefs
                  prefName="show_bb_tab"
                  value={user.prof_prefs.show_bb_tab}
                  entityId={user.entity_id}
                />
              </div>
            )}
          </div>
          {bbEntries && bbEntries?.length > 0 ? (
            <div className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Outsourcer name</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>LWA</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead>Outsourcer feedback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(showAll ? bbEntries : bbEntries.slice(0, MAX_VISIBLE_ROWS)).map(
                    (item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Link
                            className="text-primary hover:underline"
                            href={`/blueboard/${item.agency_id}`}
                          >
                            {item.name}
                          </Link>
                        </TableCell>
                        <TableCell>{getCountryNameCountryCode(item.country)}</TableCell>
                        <TableCell>{item.would_work_for}</TableCell>
                        <TableCell>{item.comment}</TableCell>
                        <TableCell>{item.comment_reply}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
              {bbEntries.length > MAX_VISIBLE_ROWS && (
                <div className="flex justify-end">
                  <button
                    className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    {showAll ? `Show Less` : `Show All (${bbEntries.length})`}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No blueboard entries found!
              </span>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default RatingsGiven;
