"use client";

import React, { useEffect, useState } from "react";
import MoodleCourses from "./_courses"; // Adjust the import path as necessary
import AdminTags from "./_tags"; // Adjust the import path as necessary
import LearnPage from "./[courseId]/page"; // Adjust the import path as necessary
import EnrolledUsers from "./_enrolled_users"; // Adjust the import path as necessary
import { useRouter } from "next/navigation";

const LearnAdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [selectedMenu, setSelectedMenu] = useState("courses"); // moodle courses, in the future could be "videos" or "webinars"

  const renderSubMenu = () => {
    switch (selectedMenu) {
      case "courses":
        return <MoodleCourses />;
      case "new":
        return <LearnPage />;
      case "tags":
        return <AdminTags />;
      case "enrolled_users":
        return <EnrolledUsers />;
      default:
        return <p>Default</p>;
    }
  };

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Update selectedMenu based on the current path
    if (currentPath === "/next/admin/learn") {
      setSelectedMenu("courses");
    }

    // Simulate loading for demonstration purposes
    setLoading(false);
  }, []);

  const changeTab = (tab: string) => {
    setSelectedMenu(tab);
  };

  if (loading) {
    return <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Sub menu */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold dark:text-white">Learn</h1>
        <nav>
          <ul className="flex gap-4 border-b-2 pb-2 dark:border-gray-700">
            <li>
              <button
                onClick={() => changeTab("courses")}
                className={`px-4 py-2 ${
                  selectedMenu === "courses"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                // onClick={() => router.push("/admin/learn/new")}
                onClick={() => changeTab("new")}
                className={`px-4 py-2 ${
                  selectedMenu === "new"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Add new course
              </button>
            </li>
            <li>
              <button
                onClick={() => changeTab("tags")}
                className={`px-4 py-2 ${
                  selectedMenu === "tags"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Tags
              </button>
            </li>
            <li>
              <button
                onClick={() => changeTab("enrolled_users")}
                className={`px-4 py-2 ${
                  selectedMenu === "enrolled_users"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Enrolled users
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dynamic content */}
      <main>{renderSubMenu()}</main>
    </div>
  );
};

export default LearnAdminPage;
