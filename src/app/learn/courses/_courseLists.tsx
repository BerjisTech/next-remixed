"use client";
import React, { useEffect, useState, FC } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";
import TagsCarousel from "@/app/learn/_tagsSidebar";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/shadcn/button";
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
}

const CourseList: FC = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams?.get("search") || "");

  const { entityId } = useAppSelector((state) => state.profile);
  const [courses, setCourses] = useState<Course[]>([]);
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingTags, setLoadingTags] = useState(true);
  const [tags, setTags] = useState<any[]>([]);

  const fetchMoodleCourses = async (search: string = "") => {
    setLoading(true);

    const response = await fetch(
      `/next/api/learn/mdl-courses?entityId=${entityId}&dbCourses=1&isActive=y&tags=${encodeURIComponent(JSON.stringify(tags))}&search=${search}`
    );
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
      }));
      console.log("formattedCourses", formattedCourses);
      setCourses(formattedCourses);
    } else {
      setCourses([]);
    }
    setLoading(false);
    setLoadingTags(false);
    // Remove "search" button animation
    document.getElementById("searchButton")?.classList.remove("animate-pulse", "cursor-wait");
  };

  const fetchCourse = async (courseId: number, entity_id: number) => {
    try {
      const response = await fetch(
        `/next/api/learn/mdl-courses?entityId=${entity_id}&courseId=${courseId}&dbCourses=1`
      );
      const dbDataResult = await response.json();

      const courseData = {
        id: dbDataResult.course.mdl_course_id,
        title: dbDataResult.course.title,
        description: dbDataResult.course.description,
        course_content: dbDataResult.course.course_content,
        duration_total: dbDataResult.course.duration_total,
        duration_unit: dbDataResult.course.duration_unit,
        imageUrl: dbDataResult.course.image_link
          ? dbDataResult.course.image_link
          : "/next/next_assets/images/learn/courses_thumbnail.png", // course image
        timecreated: new Date(dbDataResult.course.date).getTime(),
        pricing: dbDataResult.pricing,
        trainer_id: dbDataResult.course.trainer_id,
      };

      return courseData;
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // function to check if courses is cached
  const getCoursesFromCache = () => {
    const cachedCourses = sessionStorage.getItem("courses");
    console.log("cachedCourses", cachedCourses);
    if (cachedCourses && cachedCourses != "[]") {
      setCourses(JSON.parse(cachedCourses));
      setLoading(false);
      return true;
    }
    return false;
  };

  const handleTagsData = (newTags: any[]) => {
    console.log("newTags", newTags);
    setTags(newTags.length > 0 ? newTags : []);
  };

  const loadMoreCourses = () => {
    // Load courses when user scrolls to the bottom of the page
    // Mobile: 900, Tablet: 500, Desktop: 300
    const windowWidth = window.innerWidth <= 425 ? 100 : window.innerWidth <= 768 ? 600 : 300;
    if (
      window.innerHeight + document.documentElement.scrollTop + windowWidth >=
      document.documentElement.offsetHeight
    ) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleCourses((prevVisible) => prevVisible + 6); // Show 6 more courses
        setLoadingMore(false);
      }, 1000); // Simulate a network request delay
    }
  };

  useEffect(() => {
    const handleSearchChange = () => {
      const searchValue = searchParams?.get("search") || "";
      console.log("Search:", searchValue);
      if (searchValue !== search) {
        setSearch(searchValue); // Update the search value
      }
    };

    handleSearchChange(); // Initial call to set the search value
    window.addEventListener("popstate", handleSearchChange); // Listen for URL changes

    return () => {
      window.removeEventListener("popstate", handleSearchChange); // Cleanup
    };
  }, [searchParams, search]);

  useEffect(() => {
    fetchMoodleCourses(search);
  }, [search, tags]);

  // Load more courses when user scrolls to the bottom
  useEffect(() => {
    // Set the scroll up when load the page.
    window.scrollTo(0, 0);
    window.addEventListener("scroll", loadMoreCourses);
    return () => window.removeEventListener("scroll", loadMoreCourses); // Cleanup
  }, []);

  // useEffect(() => {
  //   // cache the courses on sessionstorage, before cache, remove if already exist
  //   sessionStorage.removeItem('courses');
  //   sessionStorage.setItem('courses', JSON.stringify(courses));
  //   console.log('courses', courses);
  // }, [courses]);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto my-8 gap-6 px-4 md:px-8 xl:px-0">
      {/* Site under construction box */}
      {/*<div className="col-span-12 lg:col-span-8 w-full">*/}
      {/*  <div className="inline-flex px-6 py-4 gap-3 rounded-2xl bg-secondary dark:bg-gray-700">*/}
      {/*    <Image*/}
      {/*      src="/next/next_assets/images/icons/puzzle-piece-01.svg"*/}
      {/*      alt="Puzzle icon"*/}
      {/*      width="24"*/}
      {/*      height="24" */}
      {/*    />*/}
      {/*    /!*<p className="text-base font-medium leading-normal text-gray-900 dark:text-gray-100">You are visiting a new version of the ProZ site, currently under construction! You can browse and take training courses here. If you have a moment, your input in*!/*/}
      {/*    /!*  {" "}*!/*/}
      {/*    /!*  <span className="text-primary font-semibold hover:underline">*!/*/}
      {/*    /!*    <Link href="https://www.surveymonkey.com/r/proz_alpha" target="_blank" rel="noopener noreferrer">this short survey</Link>*!/*/}
      {/*    /!*  </span>*!/*/}
      {/*    /!*  {" "}*!/*/}
      {/*    /!*  would be appreciated!*!/*/}
      {/*    /!*  <br></br><br></br>*!/*/}
      {/*    /!*  {" "}*!/*/}
      {/*    /!*  <span className="text-primary font-semibold hover:underline">*!/*/}
      {/*    /!*    <Link href="https://www.proz.com/" target="_blank" rel="noopener noreferrer">Return to the classic ProZ.com site »</Link>*!/*/}
      {/*    /!*  </span>*!/*/}
      {/*    /!*  {" "}*!/*/}
      {/*    /!*</p>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Become a member for desktop */}
      <div className="col-span-12 text-center mx-auto max-w-2xl w-full">
        <div className="flex flex-col justify-center items-center w-full relative overflow-hidden gap-4 px-6 py-4 h-full rounded-3xl bg-accent dark:bg-black border border-accent dark:border-black">
          <div className="flex flex-col justify-center items-start w-full relative gap-2.5">
            <p className="w-full text-md font-semibold text-primary dark:text-primary">
              Plus members have access to exclusive content
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-primary dark:bg-primary border border-primary shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]">
            <Link
              href="https://www.proz.com/professional-membership#pricing"
              className="text-sm font-semibold text-center text-white"
            >
              Become a Plus member today!
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar tags */}
      <div className="col-span-12 lg:col-span-3 w-full">
        {!loadingTags && <TagsCarousel sendDataToParent={handleTagsData} />}
      </div>

      {/* Load courses */}
      {loading && (
        <div className={`col-span-12 ${!loadingTags ? "lg:col-span-9" : ""} w-full`}>
          <div className="flex justify-center items-center w-full py-10">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Getting courses...
            </p>
          </div>
        </div>
      )}

      {!loading && courses.length > 0 && (
        <>
          {/* Courses */}
          <div className="col-span-12 lg:col-span-9 w-full">
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 w-full">
                  <div className="flex justify-start items-center w-full relative gap-[26px]">
                    <p className="flex-grow w-full text-xl font-semibold text-left text-dark dark:text-white-blue-hue dark:text-accent-foreground">
                      {search
                        ? `${courses.length} courses found for "${search}"`
                        : "You may be interested in"}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.slice(0, visibleCourses).map((course) => (
                      <div
                        key={course.id}
                        className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl hover:border-primary-300 hover:border-2 dark:bg-gray-800 overflow-hidden transition-all"
                      >
                        <div className="aspect-[19/9]">
                          <Image
                            src={
                              course?.imageUrl?.startsWith("http")
                                ? course.imageUrl
                                : course?.imageUrl?.startsWith("/")
                                  ? course.imageUrl
                                  : `/${course.imageUrl}`
                            }
                            alt={`${course.title} image`}
                            width={160}
                            height={640}
                            className="w-full h-40 object-cover cursor-pointer"
                            onClick={() =>
                              (window.location.href = `/next/learn/course/${course.id}`)
                            }
                          />
                        </div>
                        <div className="p-4">
                          <Link href={`/learn/course/${course.id}`}>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                              {course.title}
                            </h3>
                          </Link>
                          <p
                            className="mt-2 text-sm text-gray-600 dark:text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html:
                                course.description && course.description.length > 300
                                  ? course.description.substring(0, 300) + "..."
                                  : course.description || "",
                            }}
                          />
                        </div>
                        <div className="mt-auto p-4">
                          <Link
                            href={`/learn/course/${course.id}`}
                            className="py-2 text-sm font-medium text-white"
                          >
                            <Button variant="default" size="sm">
                              Learn more
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {visibleCourses < courses.length && loadingMore && (
                    // Load more button
                    <div className="flex justify-center w-full mt-6 animate-pulse">
                      <div className="loader rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!loading && courses.length === 0 && (
        // In case there are no courses
        <div className="col-span-12 lg:col-span-9 w-full">
          <div className="flex justify-center items-center w-full py-10">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              No courses available at the moment.
            </p>
          </div>
        </div>
      )}
      {/* Finish load courses */}
    </div>
  );
};

export default CourseList;
