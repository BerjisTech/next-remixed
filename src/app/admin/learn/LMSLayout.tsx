import React from "react";
import LearningManagement from "./LearningManagement";
import CoursesManagment from "./CoursesManagment";
import CourseManagement from "./CourseManagement";
import EventsManagement from "./EventsManagement";
import CreatorManagement from "./CreatorManagement";
import CreatorAgreementManagement from "./CreatorAgreementManagement";
import WebinarManagement from "./WebinarManagement";

interface PageProps {
  params?: string[];
}

const LMSLayout = ({ params }: PageProps) => {
  switch (params?.[0]) {
    case "":
      return <LearningManagement />;
    case "courses":
      return <CoursesManagment />;
    case "course":
      return <CourseManagement />;
    case "events":
      return <EventsManagement />;
    case "creator":
      return <CreatorManagement />;
    case "agreements":
      return <CreatorAgreementManagement />;
    case "webinars":
      return <WebinarManagement />;
    case "categories":
      return <div>Categories</div>;
    case "lessons":
      return <div>Lessons</div>;
    case "quizzes":
      return <div>Quizzes</div>;
    case "questions":
      return <div>Questions</div>;
    case "answers":
      return <div>Answers</div>;
    default:
      return <LearningManagement />;
  }
};

export default LMSLayout;
