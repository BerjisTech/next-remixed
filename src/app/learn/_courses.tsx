import { courses } from "@/server/data/learning";
import React from "react";
import CourseCard from "./_courseCard";

interface CoursesProps {
  limit: number;
  show_details?: boolean;
  direction?: "row" | "column"; // Add direction prop with default value
  card_direcion?: "row" | "col";
  show_description?: boolean;
  width?: string;
  wrap?: "wrap" | "no-wrap";
}

const Courses: React.FC<CoursesProps> = async ({
  limit,
  direction = "row",
  card_direcion = "col",
  show_details = true,
  show_description = false,
  width = "0",
  wrap = "wrap",
}) => {
  const course = await courses(limit);
  const custom_width = width !== "0" ? width : limit > 3 ? "32%" : `${100 / (limit + 0.2)}%`;
  return (
    <div className={`flex flex-${direction} gap-2 flex-${wrap}`}>
      {course.map((c, index) => (
        <CourseCard
          key={index}
          course={c}
          width={custom_width}
          card_direcion={card_direcion}
          show_details={show_details}
          show_description={show_description}
        />
      ))}
    </div>
  );
};

export default Courses;
