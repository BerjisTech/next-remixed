import React from "react";

const stats = [
  {
    heading: "1,537,104",
    description: "People registered at ProZ.com",
    bgColor: "bg-cards-04",
  },
  {
    heading: "$1,856,291.42",
    description: "Earned by freelancers in paid jobs managed by ProZ.com",
    bgColor: "bg-cards-02",
  },
  {
    heading: "48,429",
    description: "Job postings in the last 12 months",
    bgColor: "bg-cards-03",
  },
  {
    heading: "158,376",
    description: "People registered at ProZ.com",
    bgColor: "bg-cards-07",
  },
  {
    heading: "28,047",
    description: "People attending events",
    bgColor: "bg-cards-01",
  },
  {
    heading: "247,236",
    description: "Calls to ProZ.com interpreters",
    bgColor: "bg-cards-04",
  },
];

const ProZStatsMembership = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-6 px-3 pb-12 w-full">
      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-start gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 ${stat.bgColor} dark:bg-black rounded-xl justify-start items-start gap-6 h-full w-full`}
          >
            <div className="flex-col justify-start gap-3 flex">
              <p className="text-grey-700 dark:text-gray-200 text-3xl font-bold font-merriweather leading-[38px]">
                {stat.heading}
              </p>
              <p className="text-grey-500 dark:text-gray-100 text-base font-medium font-poppins leading-normal">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProZStatsMembership;
