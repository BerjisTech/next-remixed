"use client";
import ProzSelect from "@/components/general/prozSelect";
import React from "react";

const Filters = () => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-2">
          <ProzSelect
            fullWidth={true}
            name="category"
            placeholder="Select category"
            options={["Outsourcer", "Interpreters"]}
            onSelectedOptionsChange={() => {}}
          />
        </div>
        <div className="col-span-2 col-start-3">
          <ProzSelect
            fullWidth={true}
            name="service"
            placeholder="Service type"
            options={["Outsourcer", "Interpreters"]}
            onSelectedOptionsChange={() => {}}
          />
        </div>
        <div className="col-span-2 col-start-5">{/* <div className="h-full w-full"></div> */}</div>
        <div className="col-span-2 col-start-7">{/* <div className="h-full w-full"></div> */}</div>
      </div>
    </div>
  );
};

export default Filters;
