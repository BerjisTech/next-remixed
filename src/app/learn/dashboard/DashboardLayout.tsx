import React from "react";
import Certification from "./_certification";
import Overview from "./_overview";
import CompletedCourses from "./_completedCourses";
import Link from "next/link";
import clsx from "clsx";

interface DashboardLayoutProps {
  segments: string[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ segments }) => {
  console.log(segments);
  const tab = segments[1] || "overview";
  let current_segment = <Overview />;

  switch (tab) {
    case "overview":
      current_segment = <Overview />;
      break;
    // case "wishlist":
    //   current_segment = <Wishlist />;
    //   break;
    case "certificates":
      current_segment = <Certification />;
      break;
    case "completed_courses":
      current_segment = <CompletedCourses />;
      break;
    default:
      current_segment = <Overview />;
      break;
  }

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto gap-6 py-4">
      <div className="relative lg:sticky lg:top-[50px] col-span-12 lg:col-span-3 w-full">
        <div className="flex flex-col justify-start items-start w-full mb-4">
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <Link
              href="/learn/dashboard/overview"
              role="button"
              className={clsx(
                "flex justify-start items-center w-full overflow-hidden gap-2 px-4 py-3 rounded-xl",
                tab === "overview" ? "bg-[#4d9d9d] text-white" : "text-[#667085]"
              )}
            >
              <div className="flex justify-start items-center relative gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
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
                <p className="text-base font-medium text-left">In progress</p>
              </div>
            </Link>
            <Link
              href="/learn/dashboard/overview"
              role="button"
              className={clsx(
                "flex justify-start items-center w-full overflow-hidden gap-2 px-4 py-3 rounded-xl",
                tab === "overview" ? "bg-[#4d9d9d] text-white" : "text-[#667085]"
              )}
            >
              <div className="flex justify-start items-center relative gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#D0D5DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-base font-medium text-left ">Completed</p>
              </div>
            </Link>
            <Link
              href="/learn/dashboard/certificates"
              className={clsx(
                "flex justify-start items-center w-full overflow-hidden gap-2 px-4 py-3 rounded-xl",
                tab === "certificates" ? "bg-[#4d9d9d] text-white" : "text-[#667085]"
              )}
            >
              <div className="flex justify-start items-center relative gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M7.96668 14.7219L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.0343 14.7212M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
                    stroke="#D0D5DD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-base font-medium text-left ">Your certificates</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full relative overflow-hidden gap-6 p-6 rounded-3xl bg-[#edf5f5] border border-[#c8e1e1]">
          <div className="flex-grow-0 flex-shrink-0"></div>
          <p className="w-52 text-lg font-medium text-center text-[#344054]">
            Create your own training courses and offer them to all ProZ users.
          </p>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <div className="flex justify-center items-center w-full relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-[#4d9d9d] border border-[#4d9d9d] shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdFQwFR93_xU_rQJKi-UeciYjzLQ3GE5Ucbfk3yXmhgO7RsbQ/viewform?usp=send_form">
                <p className="text-base font-semibold text-left text-white">Become a trainer</p>
              </Link>
            </div>
            {/* <div className="flex justify-center items-center w-full relative overflow-hidden gap-2 px-5 py-3 rounded-xl">
              <p className="text-base font-semibold text-left text-[#475467]">
                Learn more
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9">{current_segment}</div>
    </div>
  );
};

export default DashboardLayout;
