import React from "react";
import ReviewCard from "../_reviewCard";
import TabsSection from "../_tabsSection";
import Filters from "./_filters";

const page = () => {
  return (
    <div>
      <TabsSection>
        <Filters />
      </TabsSection>
      <div className="self-stretch grid gap-4 mt-5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
