"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  course_content: string;
  duration_total: number;
  duration_unit: string;
  imageUrl?: string;
  timecreated: number;
  pricing: any;
  trainer_id: number;
  certificate_url?: string;
}

const CompletedCourses = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams?.get("search") || "");

  const { entityId } = useAppSelector((state) => state.profile);

  const [coursesFinished, setCoursesFinished] = useState<Course[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchCourses = async (entity_id: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/next/api/learn/mdl-courses/dashboard?entityId=${entity_id}`);
      const data = await response.json();
      console.log(data);

      // Finished courses
      if (data.courses_finished.length > 0) {
        const coursesData = data.courses_finished.map((course: any) => ({
          id: course.mdl_course_id,
          title: course.title,
          description: course.description,
          course_content: course.course_content,
          duration_total: course.duration_total,
          duration_unit: course.duration_unit,
          imageUrl: course.image_link
            ? course.image_link
            : "/next/next_assets/images/learn/courses_thumbnail.png", // course image
          timecreated: new Date(course.date).getTime(),
          pricing: course.pricing,
          trainer_id: course.trainer_id,
          certificate_url: course.public_url,
        }));

        setCoursesFinished(coursesData);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (entityId) {
      fetchCourses(entityId);
    }
  }, [entityId]);

  return (
    <div className="w-full flex flex-col justify-start items-start flex-grow gap-16 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-start gap-10 overflow-hidden">
        <div className="grid grid-cols-12 max-w-7xl mx-auto gap-6">
          {/* Load courses ongoing */}
          {loading && (
            <div className="col-span-12 lg:col-span-9 w-full">
              <div className="flex justify-center items-center w-full py-10">
                <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  Getting courses...
                </p>
              </div>
            </div>
          )}

          {!loading && coursesFinished.length === 0 && (
            // In case there are no courses
            <div className="col-span-12 w-full">
              <div className="flex justify-center items-center w-full py-10">
                <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  No courses completed
                </p>
              </div>
            </div>
          )}

          {!loading && coursesFinished.length > 0 && (
            <>
              {/* Finished courses */}
              <div className="col-span-12">
                <p className="w-full text-2xl font-semibold text-left text-[#344054] dark:text-white-blue-hue dark:text-accent-foreground">
                  Courses you have completed
                </p>
              </div>
              <div className="col-span-12 w-full">
                <div className="flex flex-col justify-start items-start w-full gap-2">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coursesFinished.map((course) => (
                          <div
                            key={course.id}
                            className="flex flex-col bg-white rounded-lg shadow-md dark:bg-gray-800 overflow-hidden"
                          >
                            <div className="aspect-[19/9]">
                              <Image
                                src={course.imageUrl as string}
                                alt={`${course.title} image`}
                                width={160}
                                height={640}
                                className="w-full h-40 object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <a href={`/next/learn/course/${course.id}`}>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                  {course.title}
                                </h3>
                              </a>
                              <p
                                className="mt-2 text-sm text-gray-600 dark:text-gray-300"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    course.description.length > 300
                                      ? course.description.substring(0, 300) + "..."
                                      : course.description,
                                }}
                              />
                            </div>
                            <div className="flex items-center justify-between mt-auto p-4">
                              <a
                                href={`/next/learn/course/${course.id}`}
                                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
                              >
                                Go to course
                              </a>
                              {course.certificate_url && (
                                <a
                                  href={course.certificate_url}
                                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
                                >
                                  View certificate
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedCourses;
