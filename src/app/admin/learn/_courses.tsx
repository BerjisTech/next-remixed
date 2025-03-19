"use client";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/store/hooks";

interface Course {
  id: number;
  title: string;
  description: string;
  course_content: string;
  duration_total: number;
  duration_unit: string;
  imageUrl?: string;
  timecreated: any;
  pricing: any;
  trainer_id: number;
  visibility?: string;
}

const MoodleCourses: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { entityId } = useAppSelector((state) => state.profile);
  const [courses, setCourses] = useState<Course[]>([]);

  const handleVisibility = async (courseId: number, visibility: string) => {
    if (visibility === "y" || visibility === "n") {
      const message = visibility === "y" ? "show" : "hide";
      if (confirm(`Are you sure you want to ${message} this course?`)) {
        const formData = {
          action: "hideCourse",
          active: visibility,
          mdl_course_id: courseId,
        };

        // Remove course
        const response = await fetch(`/next/api/learn/mdl-courses`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then(() => {
          fetchMoodleCourses();
        });
      }
    }
  };

  const fetchMoodleCourses = async () => {
    setLoading(true);

    const response = await fetch(`/next/api/learn/mdl-courses?entityId=${entityId}&dbCourses=1`);
    const coursesInDb = await response.json();
    console.log("coursesInDb", coursesInDb);

    const coursesArray = coursesInDb.courses;

    if (coursesArray.length > 0) {
      const formattedCourses = coursesArray.map((course: any) => ({
        id: course.mdl_course_id,
        title: course.title,
        description: course.description,
        course_content: course.course_content,
        duration_total: course.duration_total,
        duration_unit: course.duration_unit,
        imageUrl: course.image_link
          ? course.image_link
          : "/next/next_assets/images/learn/courses_thumbnail.png",
        timecreated: course.date,
        pricing: course.pricing,
        trainer_id: course.trainer_id,
        visibility: course.active,
      }));
      console.log("formattedCourses", formattedCourses);
      setCourses(formattedCourses);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMoodleCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {!loading && courses.length > 0 && (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Time created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    <a
                      href={`/next/learn/course/${course.id}`}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600"
                    >
                      {course.id}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {course.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(course.timecreated).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => (window.location.href = `/next/admin/learn/${course.id}`)}
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM4 12v4h4v-4H4z" />
                      </svg>
                    </button>
                    <button
                      title={course.visibility === "y" ? "Visible" : "Hidden"}
                      onClick={() =>
                        handleVisibility(course.id, course.visibility === "y" ? "n" : "y")
                      }
                      className="ml-4 text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${course.visibility === "y" ? "text-green-600" : "text-gray-600"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {!loading && courses.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No courses available</p>
      )}
    </div>
  );
};

export default MoodleCourses;
