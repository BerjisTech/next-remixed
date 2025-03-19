import { mdl_course_categories } from "@/interfaces/learning";
import { getCategories, getCourseCountByCategories } from "@/server/data/learning";
import React from "react";

const CourseCategories = async () => {
  const course_categories: mdl_course_categories[] = await getCategories();
  const course_count_by_categories: { [key: number]: number } = await getCourseCountByCategories();
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      {course_categories.map((category, index) => (
        <div
          key={index}
          className="flex justify-start items-center w-full gap-2.5 pl-4 pr-2.5 py-2 rounded-xl bg-accent-light dark:bg-black"
        >
          <div className="flex justify-start items-center flex-grow relative opacity-80 gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7.52169 2.30205C7.67534 1.99076 7.75217 1.83511 7.85647 1.78538C7.94722 1.74211 8.05264 1.74211 8.14339 1.78538C8.24769 1.83511 8.32452 1.99076 8.47817 2.30205L9.93596 5.25536C9.98132 5.34726 10.004 5.39321 10.0372 5.42889C10.0665 5.46048 10.1017 5.48607 10.1408 5.50425C10.185 5.52479 10.2357 5.5322 10.3371 5.54702L13.5979 6.02364C13.9413 6.07383 14.113 6.09893 14.1924 6.1828C14.2616 6.25576 14.2941 6.35603 14.2809 6.45569C14.2658 6.57022 14.1415 6.69129 13.8929 6.93342L11.5342 9.23078C11.4607 9.3024 11.4239 9.33821 11.4002 9.38081C11.3792 9.41854 11.3657 9.45998 11.3605 9.50284C11.3547 9.55125 11.3633 9.60183 11.3807 9.703L11.9372 12.9479C11.9959 13.2902 12.0253 13.4613 11.9701 13.5628C11.9221 13.6512 11.8368 13.7132 11.738 13.7315C11.6243 13.7526 11.4707 13.6717 11.1633 13.5101L8.24817 11.9771C8.15734 11.9293 8.11193 11.9054 8.06408 11.896C8.02172 11.8877 7.97814 11.8877 7.93578 11.896C7.88793 11.9054 7.84252 11.9293 7.75169 11.9771L4.83653 13.5101C4.5292 13.6717 4.37553 13.7526 4.2619 13.7315C4.16304 13.7132 4.07773 13.6512 4.02974 13.5628C3.97459 13.4613 4.00394 13.2902 4.06263 12.9479L4.61918 9.703C4.63653 9.60183 4.6452 9.55125 4.63933 9.50284C4.63413 9.45998 4.62066 9.41854 4.59966 9.38081C4.57593 9.33821 4.53917 9.3024 4.46564 9.23078L2.10696 6.93342C1.85836 6.69129 1.73406 6.57022 1.71894 6.45569C1.70578 6.35603 1.73829 6.25576 1.80742 6.1828C1.88688 6.09893 2.05857 6.07383 2.40195 6.02364L5.66279 5.54702C5.7642 5.5322 5.81491 5.52479 5.85906 5.50425C5.89816 5.48607 5.93336 5.46048 5.96271 5.42889C5.99586 5.39321 6.01854 5.34726 6.0639 5.25536L7.52169 2.30205Z"
                fill="#4D9D9D"
              ></path>
            </svg>
            <p className="flex-grow w-[170px] text-sm text-left text-dark dark:text-white">
              {category.name}
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative px-2 py-0.5 rounded-2xl bg-accent dark:bg-dark mix-blend-multiply dark:mix-blend-normal">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-center text-primary dark:text-primary">
              {course_count_by_categories[category.id]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCategories;
