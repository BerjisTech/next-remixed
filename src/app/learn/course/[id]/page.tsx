"use client";
import React, { useEffect, useState, FC } from "react";
import { useAppSelector } from "@/lib/store/hooks";
// import { mdl_course } from "@/interfaces/learning";
// import { getCourseById } from "@/server/data/learning";
// import Courses from "../../_courses";
import { useSession } from "next-auth/react";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { Info } from "lucide-react";
import SocialShare from "@/components/socialshare/SocialShare";
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

const membershipTexts = [
  { key: "platinum", value: "Standard" },
  { key: "pro_plus", value: "Plus" },
  { key: "pro_premium", value: "Premium" },
  { key: "pro_premium_yearly", value: "Premium" },
  { key: "corporate", value: "Business Standard" },
  { key: "bus_plus", value: "Business Plus" },
  { key: "bus_enterprise", value: "Business Enterprise" },
  { key: "bus_starter", value: "Business Starter" },
];

const Course: FC<{ params: { id: string } }> = ({ params }) => {
  const courseId = Number(params?.id);
  const [course, setCourse] = useState<Course | null>(null);
  const [courseIsFree, setCourseIsFree] = useState<boolean>(false);
  const [coursePurchased, setCoursePurchased] = useState<boolean>(false);
  const [pageUrl, setPageUrl] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");

  const freeMemberships = course?.pricing
    .filter(
      (price: { store_item_id: number; membership: string }) =>
        price.store_item_id === 0 && price.membership !== "none"
    )
    .map(
      (price: { membership: string }) =>
        membershipTexts.find((text) => text.key === price.membership)?.value
    )
    .filter(
      (value: string | undefined, index: number, self: (string | undefined)[]) =>
        value && self.indexOf(value) === index
    );

  const [paidMemberships, setPaidMemberships] = useState(
    course?.pricing.filter((price: { store_item_id: number }) => price.store_item_id !== 0) || []
  );
  const [coursePrice, setCoursePrice] = useState<number | null>(null);
  const { data: session } = useSession();
  const { entityId } = useAppSelector((state) => state.profile);
  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false);
  const [userMembershipType, setUserMembershipType] = useState<string | null>(null);
  const [userCanAccessCourse, setUserCanAccessCourse] = useState<boolean>(false);
  const [trainerInfo, setTrainerInfo] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchMoodleCourse = async () => {
    try {
      // Testing with databse data
      const dbData = await fetch(
        `/next/api/learn/mdl-courses?entityId=${entityId}&courseId=${courseId}&dbCourses=1&isActive=y`
      );
      const dbDataResult = await dbData.json();

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
      setCourse(courseData);
    } catch (err) {
      console.error("Error fetching course data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Check if user have a membership
  const userMembership = async (entity: number) => {
    if (entity) {
      try {
        const response = await fetch(`/next/api/user?entityId=${entity}&include_membership_data=1`);
        const data = await response.json();
        console.log("Membership data:", data);
        if (data && data[0].is_professional_member) {
          if (data[0].membership_type == "pro_premium_yearly") {
            setUserMembershipType("pro_premium");
          } else {
            setUserMembershipType(data[0].membership_type);
          }
        }
      } catch (err) {
        console.error("Error fetching membership:", err);
      }
    } else {
      setUserMembershipType(null);
    }
  };

  // Get trainer info
  const getTrainerInfo = async (trainerId: number) => {
    if (trainerId) {
      try {
        const response = await fetch(
          `/next/api/user?entityId=${trainerId}&include_entity_resourses=1`
        );
        const data = await response.json();
        if (data[0]) {
          setTrainerInfo(data[0]);
        }
      } catch (err) {
        console.error("Error fetching membership:", err);
      }
    } else {
      setTrainerInfo(null);
    }
  };

  // Check if user purchased the course
  const checkCoursePurchased = async (store_item_id: number, entity_id: number): Promise<any> => {
    if (!store_item_id || !entity_id) return false;

    try {
      const response = await fetch(
        `/next/api/learn/purchases?entityId=${entity_id}&courseId=${courseId}&storeItemId=${store_item_id}`
      );
      const data = await response.json();
      console.log("Course purchased data:", data);
      return data;
    } catch (err) {
      console.error("Error fetching the purchase:", err);
      return false;
    }
  };

  // Handle the access to the course using pricing
  const handleCourseAccess = async () => {
    if (course && course.pricing.length > 0) {
      const hasAccess = await Promise.all(
        course.pricing.map(async (price: any) => {
          // Free course
          if (price.membership === "none" && price.store_item_id === 0) {
            setCourseIsFree(true);
            console.log("Free course");
            return true;
          }

          // Have access by membership
          if (price.membership === userMembershipType && price.store_item_id == 0) {
            console.log("Membership access");
            return true;
          }

          // check access by store item purchased
          if (price.store_item_id > 0 && entityId > 0) {
            const coursePurchasedData = await checkCoursePurchased(price.store_item_id, entityId);
            if (coursePurchasedData.is_purchased) {
              setCoursePurchased(true);
              console.log("course purchased");
              return coursePurchasedData.is_purchased;
            }

            if (coursePurchasedData.is_enrolled) {
              console.log("course has access");
              return coursePurchasedData.is_enrolled;
            }
          }

          return false; // No have access
        })
      );

      // Evalúa si al menos una de las condiciones permite acceso
      setUserCanAccessCourse(hasAccess.includes(true));
    } else {
      // Free course
      setCourseIsFree(true);
      setUserCanAccessCourse(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (entityId > 0) {
        setUserIsAdmin(session?.user?.is_admin ?? false);
        await userMembership(entityId);
      }
      await fetchMoodleCourse();
    };

    fetchData();
  }, [entityId]);

  useEffect(() => {
    if (course) {
      handleCourseAccess();
      // social share parameters
      setPageUrl(window.location.href);
      setPageTitle(course.title);

      if (course.trainer_id > 0) {
        getTrainerInfo(course.trainer_id);
      }
      setPaidMemberships(
        course.pricing.filter((price: { store_item_id: number }) => price.store_item_id !== 0)
      );
    }
  }, [course, userMembershipType, pageUrl, pageTitle]);

  useEffect(() => {
    if (userMembershipType === null) {
      setUserMembershipType("none");
      return;
    }

    if (paidMemberships.length > 0) {
      setCoursePrice(
        paidMemberships.find(
          (price: any) => price.store_item_id !== 0 && price.membership == userMembershipType
        )?.price
      );
    }
  }, [paidMemberships, userMembershipType]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20">
        <h2 className="text-2xl font-semibold text-[#1d2939] dark:text-white">Loading...</h2>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-semibold text-[#1d2939] dark:text-white">Course Not Found</h2>
        <p className="text-sm text-[#667085] mt-4 dark:text-gray-400">
          We couldn't find the course you're looking for. Please check the URL or return to the
          courses page.
        </p>
        <Link
          href="/learn/courses"
          className="mt-6 px-4 py-2 bg-primary text-white rounded-lg dark:text-gray-200"
        >
          See all courses
        </Link>
      </div>
    );
  }

  return (
    <div className="flex max-w-7xl mx-auto gap-8 pb-4 pt-8 px-6 lg:px-4">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col flex-grow md:w-2/3 gap-4 w-full">
            <div className="relative w-full h-full aspect-[19/9] bg-center bg-cover bg-no-repeat rounded-2xl overflow-hidden">
              <Image
                src={course.imageUrl || "/next/next_assets/images/courses_thumbnail.png"}
                alt={course.title}
                width={800} // Adjust as needed
                height={400} // Adjust as needed
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <p className="text-3xl lg:text-4xl font-merriweather leading-[38px] font-semibold text-grey-700 dark:text-grey-200">
                {course.title}
              </p>
              <p
                className="text-lg text-grey-700 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: course.description }}
              ></p>
            </div>
            {course.course_content && (
              <div className="dark:bg-dark py-4 rounded-lg">
                <p className="text-2xl font-merriweather font-semibold text-grey-700">Content</p>
                <p
                  className="text-lg text-grey-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: course.course_content }}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col flex-grow-0 md:w-1/3 gap-8 w-full">
            <div className="flex justify-between items-center gap-2.5">
              <Link href="/learn/courses" className="flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M2 5.99967H11C12.6569 5.99967 14 7.34282 14 8.99967C14 10.6565 12.6569 11.9997 11 11.9997H8M2 5.99967L4.66667 3.33301M2 5.99967L4.66667 8.66634"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm font-medium text-grey-700 hover:text-primary dark:text-gray-200 transition">
                  See all courses
                </p>
              </Link>
            </div>
            {userIsAdmin && (
              <div className="flex flex-col gap-4 p-6 bg-accent dark:bg-gray-800 rounded-2xl">
                <h3 className="text-lg font-semibold text-[#1d2939] dark:text-white">Admin</h3>
                <div className="flex flex-col lg:flex-row gap-3">
                  <Link href={`/admin/learn/${courseId}`}>
                    <Button variant="default" size="sm">
                      Edit this course
                    </Button>
                  </Link>
                  <Link href={`https://lms.proz.com/course/view.php?id=${courseId}`}>
                    <Button variant="default" size="sm">
                      Edit on Moodle
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-8">
              {userCanAccessCourse ? (
                <div className="flex justify-center items-center bg-green-100 text-green-700 p-4 rounded-lg">
                  <p className="text-center">
                    {courseIsFree
                      ? "You have access to this course."
                      : coursePurchased
                        ? "You have already purchased access to this course."
                        : "You have access to this course."}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <>
                    {freeMemberships.length > 0 && (
                      <div className="flex flex-col items-center bg-yellow-100 text-yellow-700 gap-3 p-6 rounded-2xl">
                        <p className="font-merriweather font-semibold text-xl mt-2 text-center">
                          Access to this course is free for {freeMemberships.join(", ")} members.
                        </p>
                        <Link href="https://www.proz.com/membership">
                          <Button variant="default" size="lg" className="bg-yellow-600 text-white">
                            Upgrade your membership
                          </Button>
                        </Link>
                      </div>
                    )}

                    {paidMemberships.length > 0 && !userCanAccessCourse && (
                      <>
                        {paidMemberships.length > 0 && freeMemberships.length > 0 && (
                          <p className="text-center">or</p>
                        )}
                        <div className="flex flex-col items-center bg-accent text-primary-600 p-6 gap-3 rounded-2xl">
                          {["mcis", "MCIS"].some((word) => course?.title?.includes(word)) &&
                          !["pro_plus", "pro_premium"].includes(userMembershipType || "none") ? (
                            <div className="mt-2 text-md">
                              <p className="dark:text-white text-[#3a7878]">
                                Premium members save 15% and pay just $
                                {paidMemberships.find(
                                  (price: any) => price.membership == "pro_premium"
                                )?.price || (coursePrice ? (coursePrice * 0.85).toFixed(2) : "N/A")}
                                !
                              </p>
                              <p className="dark:text-white text-[#3a7878]">
                                Plus members save 15% and pay just $
                                {paidMemberships.find(
                                  (price: any) => price.membership == "pro_plus"
                                )?.price || (coursePrice ? (coursePrice * 0.85).toFixed(2) : "N/A")}
                                !
                              </p>
                              <p className="dark:text-white text-[#3a7878]">
                                <a
                                  href="https://www.proz.com/professional-membership"
                                  className="dark:text-primary text-blue-600"
                                >
                                  Upgrade to Plus
                                </a>{" "}
                                to get this course for $
                                {paidMemberships.find(
                                  (price: any) => price.membership == "pro_plus"
                                )?.price ||
                                  (coursePrice ? (coursePrice * 0.85).toFixed(2) : "N/A")}{" "}
                                (15% off) plus more discounts and free access to other courses!
                              </p>
                            </div>
                          ) : (
                            <p className="text-primary-500 dark:text-primary-300 font-merriweather font-semibold text-xl mt-2 text-center">
                              Purchase the course separately to get started!
                            </p>
                          )}
                          {paidMemberships.find(
                            (price: any) =>
                              price.store_item_id !== 0 && price.membership == userMembershipType
                          ) && (
                            <Link
                              href={`https://www.proz.com/store/${paidMemberships.find((price: any) => price.store_item_id !== 0 && price.membership == userMembershipType)?.store_item_id}`}
                            >
                              <Button variant="default" size="lg">
                                ${coursePrice} USD
                              </Button>
                            </Link>
                          )}
                        </div>
                      </>
                    )}
                  </>
                </div>
              )}

              {trainerInfo ? (
                <div>
                  <div className="text-sm text-grey-500 dark:text-gray-400 mb-2">
                    Meet your trainer
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-[#2e6969] to-[#629a9b] p-4 rounded-2xl text-white">
                    <Image
                      src={
                        trainerInfo.square_resource_image_url !== ""
                          ? trainerInfo.square_resource_image_url
                          : "https://d30v1l0pe4hkha.cloudfront.net/908e52f68cb45c387a45e1332616c6fa.jpg"
                      }
                      alt="Trainer"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-2 border-[#88bdbd] mr-4"
                    />

                    <Link href={`/profile/${trainerInfo.entity_id}`}>
                      <div className="text-lg font-semibold">
                        {trainerInfo.contact_first && trainerInfo.contact_last
                          ? `${decodeURIComponent(escape(trainerInfo.contact_first))} ${decodeURIComponent(escape(trainerInfo.contact_last))}`
                          : ""}
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center bg-[#f8f7f1] dark:bg-gray-800 p-6 gap-2 rounded-2xl">
                  <Info className="text-grey-500" />
                  <p className="text-grey-700 dark:text-white">Trainer information not available</p>
                </div>
              )}

              <div className="flex flex-col">
                {course.duration_total > 0 && (
                  <div className="dark:bg-dark py-2 rounded-lg">
                    <div className="text-lg font-semibold text-[#1d2939] dark:text-white">
                      Duration
                    </div>
                    <div className="text-sm text-[#667085] dark:text-gray-400 mt-2">
                      {course.duration_total}{" "}
                      {course.duration_unit === "hour"
                        ? course.duration_total === 1
                          ? "hour"
                          : "hours"
                        : course.duration_total === 1
                          ? "minute"
                          : "minutes"}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <div className="dark:bg-dark py-4 rounded-lg">
                  {/* Social Share Component */}
                  <SocialShare url={pageUrl} title={pageTitle} />
                </div>
              </div>

              {userCanAccessCourse && (
                <div className="flex justify-center items-center w-full relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-primary border border-primary shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)] dark:bg-gray-700 dark:border-gray-700">
                  <a
                    href={`https://www.proz.com/training/to-mdl/${courseId}`}
                    target="_blank"
                    className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
                  >
                    Start course
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-5 h-5 inline-block ml-2"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M3.83325 10H17.1666M17.1666 10L12.1666 5M17.1666 10L12.1666 15"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
