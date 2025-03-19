import { TrainingData } from "@/interfaces/learning";
import Image from "next/image";
import React from "react";

interface CoursesProps {
  trainingData?: TrainingData;
}
const Courses: React.FC<CoursesProps> = ({ trainingData }) => {
  return (
    <div className="sm:w-full md:w-[48%] mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/check.svg"
          alt="Training & certification"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />

        <h3 className="text-primary text-[20px] dark:text-primary">Training & certification</h3>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Training courses
        </a>
        <span className="dark:text-primary">
          {trainingData
            ? trainingData.training_courses_count == 0
              ? "No courses yet"
              : trainingData.training_courses_count == 1
                ? "1 course"
                : trainingData.training_courses_count + "courses"
            : "No courses yet"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Training videos
        </a>
        <span className="dark:text-primary">
          {trainingData
            ? trainingData.video_purchase_count == 0
              ? "No videos yet"
              : trainingData.video_purchase_count == 1
                ? "1 video"
                : trainingData.video_purchase_count + " videos"
            : "No videos yet"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          PRO Certification
        </a>
        <span className="dark:text-primary">
          {trainingData
            ? trainingData.certification_count == 0
              ? "Not applied"
              : trainingData.certification_count == 1
                ? "Application submitted"
                : "Accepted"
            : "Not applied"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className=" text-primary bg-accent
                dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Native language verification
        </a>
        <span className="dark:text-primary">
          {trainingData
            ? trainingData.native_language_verification_count == 0
              ? "Not requested"
              : trainingData.native_language_verification_count == 1
                ? "Request pending"
                : "Verified"
            : "Not requested"}
        </span>
      </div>
    </div>
  );
};

export default Courses;
