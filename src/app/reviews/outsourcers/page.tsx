"use client";

import React, { useEffect, useState } from "react";
import Filters from "./_filters";
import TabsSection from "../_tabsSection";
import type { AgencyRating } from "@/interfaces/blueboard";
import { EntryList } from "@/components/blueboard/EntryList";

const OutsourcersReviewPage = () => {
  const [entries, setEntries] = useState<AgencyRating[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        q: searchTerm,
      });

      const response = await fetch(`/next/api/blueboard/search?${params}`);
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to search entries");
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      setEntries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error searching entries:", error);
      setEntries([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []); // Initial load

  return (
    <div>
      <TabsSection>
        <Filters onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </TabsSection>

      <div className="self-stretch grid gap-4 mt-5">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : entries && entries.length > 0 ? (
          entries.map((entry, index) => (
            <div key={index} className="bg-white rounded-xl shadow border border-accent-light p-4">
              <EntryList entries={[entry]} />
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No entries found</p>
            {searchTerm && (
              <p className="text-sm text-gray-400 mt-2">Try adjusting your search terms</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutsourcersReviewPage;
