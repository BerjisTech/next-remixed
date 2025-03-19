import React from "react";
import _hero_section from "../_heroSection";
import DashboardLayout from "../dashboard/DashboardLayout";
import CoursesLayout from "../courses/_coursesLayout";
import EventsLayout from "../courses/_eventsLayout";
import TrainersLayout from "../trainers/_trainersLayout";

interface PageProps {
  params: {
    tab: string[];
  };
}

const page = ({ params }: PageProps) => {
  const { tab } = params;

  let content = <DashboardLayout segments={tab} />;
  switch (tab[0]) {
    case "dashboard":
      content = <DashboardLayout segments={tab} />;
      break;
    case "events":
      content = <EventsLayout />;
      break;
    case "trainers":
      content = <TrainersLayout />;
      break;
    default:
      content = <CoursesLayout />;
      break;
  }

  return (
    <section className="max-w-7xl mx-auto w-full py-8">
      <_hero_section tab={tab[0]} />
      {/* <div className="flex items-center justify-start">{tab.join(" > ")}</div> */}
      {content}
    </section>
  );
};

export default page;
