"use client";
import { Skeleton } from "@/components/shadcn/skeleton";
import { ProzUser } from "@/interfaces/account";
import { useGetUserGlossariesQuery } from "@/lib/store/features/profile/profileApiSlice";
import Link from "next/link";
import React, { useState } from "react";

const Glossaries = ({ user }: { user: ProzUser }) => {
  const { data: glossaries, isLoading: glossariesLoading } = useGetUserGlossariesQuery(
    user.entity_id,
    { skip: !user.entity_id }
  );
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <React.Fragment>
      {glossariesLoading && (
        <Skeleton className="block mx-1 !h-[10rem] w-full px-6 rounded-custom" />
      )}
      {!glossariesLoading && (
        <div
          id="community"
          className="flex flex-col justify-start items-start w-full relative gap-4 p-6 rounded-xl bg-accent"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-dark-blue-hue">
            Glossaries
          </p>
          {glossaries && glossaries?.length > 0 ? (
            <React.Fragment>
              <ul className="flex flex-col gap-1">
                {(showAll ? glossaries : glossaries.slice(0, 3)).map((item, index) => {
                  return (
                    <li key={index} className="py-2 rounded-md text-sm">
                      <Link
                        href={`/personal-glossary/${user.entity_id}?glossary=${item.glossary_id}`}
                        className="text-primary hover:underline"
                        target="_blank"
                      >
                        {item.glossary_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {glossaries.length > 3 && (
                <div className="flex justify-end w-full">
                  <button
                    className="min-w-20 text-sm text-primary hover:underline hover:text-primary"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? `Show Less` : `Show All (${glossaries.length})`}
                  </button>
                </div>
              )}
            </React.Fragment>
          ) : (
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-secondary dark:bg-dark">
              <span className="w-full text-sm font-medium text-left text-primary">
                {" "}
                No glossaries found!
              </span>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Glossaries;
