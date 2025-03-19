"use client";

import StarRating from "@/components/shared/starRating";
import React, { useState } from "react";

const TestComponent = () => {
  const [first, setfirst] = useState("0");

  return (
    <div className="my-20">
      <StarRating rating={first} readonly={false} onChange={(val) => setfirst(val.toString())} />
    </div>
  );
};

export default TestComponent;
