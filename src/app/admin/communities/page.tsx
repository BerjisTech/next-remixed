"use client";

import React, { useEffect, useState } from "react";
import CommunityUsers from "./_users";
import CommunityRequests from "./_requests";

const AdminCommunities: React.FC = () => {
  const [communities, setCommunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("communities");

  const renderSubMenu = () => {
    switch (selectedMenu) {
      case "communities":
        return (
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b dark:border-gray-700">ID</th>
                <th className="py-2 px-4 border-b dark:border-gray-700">Name</th>
                <th className="py-2 px-4 border-b dark:border-gray-700">Description</th>
                <th className="py-2 px-4 border-b dark:border-gray-700">Created By</th>
                <th className="py-2 px-4 border-b dark:border-gray-700">Created At</th>
                <th className="py-2 px-4 border-b dark:border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {communities.map((community) => (
                <tr
                  key={community.community_id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="py-2 px-4 border-b dark:border-gray-700">
                    {community.community_id}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-gray-700">{community.name}</td>
                  <td className="py-2 px-4 border-b dark:border-gray-700">
                    {community.description || "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-gray-700">
                    {community.created_by_eid}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-gray-700">
                    {new Date(community.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-gray-700">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2 cursor-not-allowed"
                      disabled
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded cursor-not-allowed"
                      disabled
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "users":
        return <CommunityUsers />;
      case "requests":
        return <CommunityRequests />;
      default:
        return <p>Seleccione una opción del menú.</p>;
    }
  };

  useEffect(() => {
    if (selectedMenu === "communities") {
      const fetchCommunities = async () => {
        try {
          const response = await fetch("/next/api/communities");
          const data = await response.json();
          setCommunities(data);
        } catch (error) {
          console.error("Error fetching communities:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCommunities();
    }
  }, [selectedMenu]);

  if (loading && selectedMenu === "communities") {
    return <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Sub menu */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold dark:text-white">Admin Communities</h1>
        <nav>
          <ul className="flex gap-4 border-b-2 pb-2 dark:border-gray-700">
            <li>
              <button
                onClick={() => setSelectedMenu("communities")}
                className={`px-4 py-2 ${
                  selectedMenu === "communities"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Communities
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedMenu("users")}
                className={`px-4 py-2 ${
                  selectedMenu === "users"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedMenu("requests")}
                className={`px-4 py-2 ${
                  selectedMenu === "requests"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Requests
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

export default AdminCommunities;
