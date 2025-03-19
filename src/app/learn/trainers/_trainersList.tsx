"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";

interface TrainerInfo {
  trainer_id: number;
  entity_id: number;
  square_resource_image_url: string;
  contact_first: string | null;
  contact_last: string | null;
  contact_middle: string | null;
  contact_country: string | null;
  contact_city: string | null;
}

const TrainersList = () => {
  const [trainers, setTrainers] = useState<TrainerInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const isFetching = useRef(false);
  const debounceTimeout = useRef<number | null>(null);
  const { data: session } = useSession();
  const isAdmin = session?.user?.is_admin === true;

  // Fetch trainers in batches
  const fetchTrainers = async (start: number, limit: number): Promise<void> => {
    if (isFetching.current || !hasMore) return;

    isFetching.current = true;
    setLoading(true);

    try {
      const response = await fetch(`/next/api/learn/trainers?start=${start}&limit=${limit}`);
      //console.log("Fetching trainers with:", { start, limit });

      if (!response.ok) {
        throw new Error(`Failed to fetch trainers: ${response.statusText}`);
      }

      const trainersData = await response.json();
      //console.log("Trainers Data:", trainersData);

      if (!Array.isArray(trainersData) || trainersData.length === 0) {
        setHasMore(false);
      } else {
        setTrainers((prev) => [...prev, ...trainersData]);
      }
    } catch (err) {
      console.error("Error fetching trainers:", err);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  // Trigger fetching when the `page` state changes.
  useEffect(() => {
    const currentStart = page * 20;
    //console.log("Fetching trainers with:", { start: currentStart, limit: 20 });
    fetchTrainers(currentStart, 20);
  }, [page]);

  // Scroll event handler with simple debounce logic.
  const loadMoreTrainers = () => {
    // Clear any existing timeout.
    if (debounceTimeout.current !== null) {
      clearTimeout(debounceTimeout.current);
    }
    // Set a new timeout.
    debounceTimeout.current = window.setTimeout(() => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !loading &&
        hasMore &&
        !isFetching.current
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 200);
  };

  // Set up the scroll listener on component mount.
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", loadMoreTrainers);

    return () => {
      window.removeEventListener("scroll", loadMoreTrainers);
      if (debounceTimeout.current !== null) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <div className="p-4">
      {/* Trainers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={`${trainer.trainer_id}-${index}`}
            className="dark:bg-dark bg-[#F8F7F1] p-6 rounded-2xl text-dark-blue-hue dark:text-white dark:border dark:border-white shadow-lg"
          >
            {/* Trainer Image */}
            <div className="flex items-center mb-4">
              <Image
                src={
                  trainer.square_resource_image_url && trainer.square_resource_image_url !== ""
                    ? trainer.square_resource_image_url
                    : "https://d30v1l0pe4hkha.cloudfront.net/908e52f68cb45c387a45e1332616c6fa.jpg"
                }
                alt="Trainer"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-4 border-[#88bdbd] mr-4"
              />

              <div>
                <h2 className="text-xl font-bold">
                  {trainer.contact_first && trainer.contact_last
                    ? `${trainer.contact_first} ${
                        trainer.contact_middle ? trainer.contact_middle + " " : ""
                      }${trainer.contact_last}`
                    : "Unknown Trainer"}
                </h2>
              </div>
            </div>

            {/* Location and Country */}
            {trainer.contact_country && trainer.contact_city && (
              <div className="text-sm flex items-center space-x-2 mb-3">
                <span>
                  {trainer.contact_city}, {trainer.contact_country}
                </span>
              </div>
            )}

            <a
              href={`/next/profile/${trainer.entity_id}`}
              className="text-sm underline text-[#88bdbd]"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {/* Loader / Status Message */}
      <div className="w-full flex justify-center items-center py-4">
        {loading ? (
          <p className="text-lg font-medium text-grey-600 dark:text-grey-300">
            {trainers.length === 0 ? "Loading trainers..." : "Loading more trainers..."}
          </p>
        ) : !hasMore ? (
          <p className="text-lg font-medium text-grey-600 dark:text-grey-300">
            No more trainers available.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TrainersList;
