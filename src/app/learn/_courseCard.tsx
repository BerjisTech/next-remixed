// proz-next/pages/learn/course/[id]/CourseCard.tsx

import { mdl_course } from "@/interfaces/learning";
import Image from "next/image";
import React from "react";

interface CoursesProps {
  course: mdl_course;
  width: string;
  show_details?: boolean;
  card_direcion?: "row" | "col";
  show_description?: boolean;
}

const CourseCard: React.FC<CoursesProps> = ({
  course,
  width = "320px", // default value for width
  show_details = true,
  show_description = false,
  card_direcion = "col",
}) => {
  return (
    <a
      href={`/next/course/${course.id}`}
      target="_blank"
      // Default width: full for small screens, 320px for medium, custom for lg and above
      className="block w-[320px] rounded-3xl bg-accent-light dark:bg-black"
      style={{
        width: `auto`,
        maxWidth: `100%`,
        ...(width ? { width: `${width} !important` } : {}),
      }}
    >
      <div className={`flex flex-col md:flex-${card_direcion} justify-start items-start gap-4 p-4`}>
        <div className="flex flex-col justify-start items-start overflow-hidden rounded-custom bg-[url('/next/next_assets/images/fixed-aspect-ratio-spacer.png')] h-[150px] w-[95%] max-w-[400px] min-w-[310px] bg-cover bg-no-repeat bg-center"></div>
        {show_details && (
          <div className="flex flex-col justify-start items-start relative gap-1">
            <p className="w-full text-base font-medium text-left text-black dark:text-accent-foreground">
              {course.fullname}
            </p>
            {show_description && (
              <div className="text-dark dark:text-slate-400 min-w-[400px]">{course.summary}</div>
            )}
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-2 p-2 rounded-custom">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <div className="flex-grow-0 flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-primary">
                    <Image
                      src="/next/next_assets/images/image-1-1.png"
                      alt="image-1-1"
                      width={51}
                      height={49.5}
                      className="w-[51px] h-[49.5px] absolute left-[-2.79px] top-[-2.78px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#3a7878]">
                      Creator name should be here?
                    </p>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                      {/* Rest of the content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default CourseCard;
