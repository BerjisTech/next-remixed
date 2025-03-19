"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Applications from "./_applications";
import Jobs from "./_jobs";
import { Button } from "@/components/shadcn/button";

const CareerAdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [selectedMenu, setSelectedMenu] = useState("applications");

  const renderSubMenu = () => {
    switch (selectedMenu) {
      case "applications":
        return <Applications />;
      case "jobs":
        return <Jobs />;
      default:
        return <p>Default</p>;
    }
  };

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Update selectedMenu based on the current path
    if (currentPath === "/next/admin/careers") {
      setSelectedMenu("applications");
    }

    // Simulate loading for demonstration purposes
    setLoading(false);
  }, []);

  const changeTab = (tab: string) => {
    if (tab === selectedMenu) return;
    setSelectedMenu(tab);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Sub menu */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold dark:text-white">Careers</h1>
        <nav>
          <ul className="flex gap-4 border-b-2 pb-2 dark:border-gray-700">
            <li>
              <Button
                onClick={() => changeTab("applications")}
                className={`px-4 py-2 ${
                  selectedMenu === "applications"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Applications
              </Button>
            </li>
            <li>
              <Button
                onClick={() => changeTab("jobs")}
                className={`px-4 py-2 ${
                  selectedMenu === "jobs"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Jobs
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dynamic content */}
      {loading && <p>Loading...</p>}
      {!loading && <main>{renderSubMenu()}</main>}
    </div>
  );
};

export default CareerAdminPage;
