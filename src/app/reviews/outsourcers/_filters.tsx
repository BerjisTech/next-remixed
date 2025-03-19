"use client";
import ProzSelect from "@/components/general/prozSelect";
import { Button } from "@/components/shadcn/button";
import React from "react";

interface FiltersProps {
  onSearch: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Filters = ({ onSearch, searchTerm, setSearchTerm }: FiltersProps) => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-2 self-stretch justify-start items-start gap-1.5 flex flex-row">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            className="self-stretch px-3.5 bg-white rounded-xl shadow border border-accent-light justify-start items-center gap-2 inline-flex flex-1"
          />
          <Button onClick={onSearch}>Search</Button>
        </div>
        <div className="col-span-2 col-start-3">
          <ProzSelect
            fullWidth={true}
            name="service"
            placeholder="Select service"
            options={["Outsourcer", "Interpreters"]}
            onSelectedOptionsChange={() => {}}
          />
        </div>
        <div className="col-span-2 col-start-5">
          <ProzSelect
            fullWidth={true}
            name="industry"
            placeholder="Select industry"
            options={["Language", "Translation"]}
            onSelectedOptionsChange={() => {}}
          />
        </div>
        <div className="col-span-2 col-start-7">
          <ProzSelect
            fullWidth={true}
            name="country"
            placeholder="Select country"
            options={["Australia", "Pakistan"]}
            onSelectedOptionsChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
