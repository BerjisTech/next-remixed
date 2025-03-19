import React from "react";
import CourseList from "./_courseLists";

const CoursesLayout = () => {
  return (
    <div className="relative flex justify-start items-start w-full gap-6">
      {/* <div className="flex sticky top-[80px] flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] gap-6">
        <div className="flex justify-center items-center w-full relative gap-3">
          <p className="flex-grow w-[250px] h-8 text-2xl font-semibold text-left text-dark dark:text-white-blue-hue dark:text-accent-foreground">
            Categories
          </p>
        </div>
        <div className="flex flex-col justify-start items-start  gap-4">
          <div className="flex flex-col justify-start items-start  gap-6">
            <div className="flex justify-start items-center  overflow-hidden gap-2 px-4 py-2 rounded-xl bg-primary dark:bg-primary">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M8 16.9997H16M11.0177 2.76375L4.23539 8.03888C3.78202 8.3915 3.55534 8.56781 3.39203 8.78861C3.24737 8.9842 3.1396 9.20454 3.07403 9.43881C3 9.70327 3 9.99045 3 10.5648V17.7997C3 18.9198 3 19.4799 3.21799 19.9077C3.40973 20.284 3.71569 20.59 4.09202 20.7818C4.51984 20.9997 5.07989 20.9997 6.2 20.9997H17.8C18.9201 20.9997 19.4802 20.9997 19.908 20.7818C20.2843 20.59 20.5903 20.284 20.782 19.9077C21 19.4799 21 18.9198 21 17.7997V10.5648C21 9.99045 21 9.70327 20.926 9.43881C20.8604 9.20454 20.7526 8.9842 20.608 8.78861C20.4447 8.56781 20.218 8.3915 19.7646 8.03888L12.9823 2.76376C12.631 2.4905 12.4553 2.35388 12.2613 2.30136C12.0902 2.25502 11.9098 2.25502 11.7387 2.30136C11.5447 2.35388 11.369 2.4905 11.0177 2.76375Z"
                    stroke="#EDF5F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                  Courses
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start  relative gap-3">
              <p className=" w-[250px] text-base font-semibold text-left text-dark dark:text-white-blue-hue dark:text-accent-foreground">
                Popular
              </p>

            </div>
          </div>
        </div>
      </div> */}
      <CourseList />
    </div>
  );
};

export default CoursesLayout;
