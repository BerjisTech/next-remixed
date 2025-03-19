import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const fetchMoodleCourse = async () => {
    try {
      // Testing with databse data
      const dbData = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/learn/mdl-courses?courseId=${params.id}&dbCourses=1&isActive=y`
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
      return courseData;
    } catch (err) {
      console.error("Error fetching course data:", err);
    }
  };

  const course = await fetchMoodleCourse();

  return {
    title: course ? course.title : `ProZ Learn: Course ${params.id}`,
    description: course ? course.description : "Expert training and events for translators.",
    openGraph: {
      title: course ? course.title : `ProZ Learn: Course ${params.id}`,
      description: course ? course.description : "Expert training and events for translators.",
      images: [
        {
          url: course ? course.imageUrl : "/next/next_assets/images/learn/courses_thumbnail.png",
        },
      ],
      url: typeof window !== "undefined" ? window.location.href : "",
      type: "website",
    },
  };
}

// export const metadata: Metadata = generateMetadata({ params: { id: "1" } });

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
