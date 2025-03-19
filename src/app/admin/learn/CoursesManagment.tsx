import Courses from "@/app/learn/_courses";
import React from "react";

const CoursesManagment = () => {
  return (
    <div>
      <Courses limit={10} />
    </div>
  );
};

export default CoursesManagment;
