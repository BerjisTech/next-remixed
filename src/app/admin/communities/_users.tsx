"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const CommunityUsers: React.FC = () => {
  const [communities, setCommunities] = useState<any[]>([]);
  const [entityIds, setEntityIds] = useState<string>(""); // Entity IDs
  const [communityId, setCommunityId] = useState<string>(""); // Community ID
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [usersCommunities, setUsersCommunities] = useState<any[]>([]);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [filter_entity_id, setFilterEntityId] = useState<number | "null">("null");
  const [filter_community_id, setFilterCommunityId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch("/next/api/communities");
        const data = await response.json();
        setCommunities(data);
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
    };
    fetchCommunities();

    fetchUserCommunities(currentPage);
  }, [currentPage]);

  const fetchUserCommunities = async (
    page: number = 1,
    criteria: any = [],
    download_csv: boolean = false
  ) => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      let url = `/next/api/communities/users?page=${page}`;
      if (criteria) {
        const params = new URLSearchParams();
        if (criteria.entity_id) params?.append("entity_id", criteria.entity_id);
        if (criteria.community_id) params?.append("community_id", criteria.community_id);
        if (download_csv) params?.append("download_csv", "true");
        url += `&${params?.toString()}`;
      }

      const response = await fetch(url);

      if (download_csv) {
        const csvData = await response.text();
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "user_communities.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        const { totalPages, totalUsers, users } = await response.json();
        setUsersCommunities(users);
        setTotalPages(totalPages);
        setTotalUsers(totalUsers);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error("Error fetching user communities:", error);
    } finally {
      setIsLoading(false); // Set loading to false once the request completes
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!entityIds || !communityId) {
      alert("Please, provide entity IDs and select a community.");
      return;
    }

    // Convert entityIds string into an array of numbers
    const entityIdsArray = entityIds
      .split(",")
      .map((id) => id.trim()) // Remove whitespace
      .filter((id) => id !== ""); // Remove empty strings

    if (entityIdsArray.length === 0) {
      alert("Please, provide valid entity IDs.");
      return;
    }

    setIsLoading(true); // Set loading to true before submitting the form

    try {
      const response = await fetch("/next/api/communities/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entityIds: entityIdsArray,
          communityId,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message based on result
        if (result.successfulInsertions.length > 0) {
          alert(`${result.successfulInsertions.length} users added successfully.`);
        }
        if (result.errors.length > 0) {
          alert(`Some users were already in the community: \n${result.errors.join("\n")}`);
        }
        // Refresh the user communities table
        fetchUserCommunities();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsLoading(false); // Set loading to false once the request completes
    }
  };

  // Remove user from community
  const removeUserFromCommunity = async (communityId: number, entityId: number) => {
    if (!confirm("Are you sure you want to remove this user from the community?")) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/next/api/communities/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ community_id: communityId, entity_id: entityId }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Refresh the user communities table
        fetchUserCommunities();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsLoading(false); // Set loading to false once the request completes
    }
  };

  // Handle filters
  const applyFilters = async () => {
    const criteria: any = {};
    if (filter_entity_id !== "null") criteria.entity_id = filter_entity_id;
    if (filter_community_id) criteria.community_id = filter_community_id;
    fetchUserCommunities(1, criteria);
  };

  const downloadCSV = async () => {
    const criteria: any = {};
    if (filter_entity_id !== "null") criteria.entity_id = filter_entity_id;
    if (filter_community_id) criteria.community_id = filter_community_id;
    fetchUserCommunities(1, criteria, true);
  };

  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300">Add Users</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 border-b-2 pb-4 dark:border-gray-700"
      >
        <div>
          <label
            htmlFor="entityIds"
            className="block text-sm text-gray-700 mb-1 dark:text-gray-300"
          >
            Entity IDs (comma separated)
          </label>
          <input
            type="text"
            id="entityIds"
            placeholder="Example: 123, 456, 789"
            value={entityIds}
            onChange={(e) => setEntityIds(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="communityId"
            className="block text-sm text-gray-700 mb-1 dark:text-gray-300"
          >
            Community
          </label>
          <select
            id="communityId"
            value={communityId}
            onChange={(e) => setCommunityId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          >
            <option value="">Select a community</option>
            {communities.map((community) => (
              <option key={community.community_id} value={community.community_id}>
                {community.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} dark:bg-blue-700 dark:hover:bg-blue-800`}
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? <span>Loading...</span> : "Add Users"}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300">Users added</h2>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
        <h4 className="text-lg font-semibold mb-4 dark:text-gray-300">Filters</h4>
        <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="filterEntityId"
                className="block text-sm text-gray-700 mb-1 dark:text-gray-300"
              >
                Entity ID
              </label>
              <input
                type="number"
                id="filterEntityId"
                placeholder="Enter Entity ID"
                value={filter_entity_id ?? ""}
                onChange={(e) =>
                  setFilterEntityId(e.target.value ? parseInt(e.target.value) : "null")
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="filterCommunityId"
                className="block text-sm text-gray-700 mb-1 dark:text-gray-300"
              >
                Community
              </label>
              <select
                id="filterCommunityId"
                value={filter_community_id ?? ""}
                onChange={(e) =>
                  setFilterCommunityId(e.target.value ? parseInt(e.target.value) : null)
                }
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value="">All</option>
                {communities.map((community) => (
                  <option key={community.community_id} value={community.community_id}>
                    {community.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => applyFilters()}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center mt-6">
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <button
            onClick={() => downloadCSV()}
            className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
          >
            Download CSV
          </button>
          <div></div>
          <p className="mt-2 text-sm dark:text-gray-300">Total Users: {totalUsers}</p>
          <table className="table-auto w-full mt-6 border-collapse shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm font-medium dark:border-gray-700 dark:text-gray-300">
                  User
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm font-medium dark:border-gray-700 dark:text-gray-300">
                  Country
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm font-medium dark:border-gray-700 dark:text-gray-300">
                  Communities
                </th>
              </tr>
            </thead>
            <tbody>
              {usersCommunities.map((user) => (
                <tr
                  key={user.entity_id}
                  className="hover:bg-blue-50 transition-colors duration-200 dark:hover:bg-gray-700"
                >
                  <td className="border-b border-gray-300 px-6 py-4 flex items-center space-x-3 dark:border-gray-700">
                    {user.image_url ? (
                      <Image
                        src={user.image_url}
                        alt={`${user.contact_first} profile`}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg dark:bg-gray-600">
                        {user.contact_first ? user.contact_first[0] : ""}
                      </div>
                    )}
                    <a
                      href={`/next/profile/${user.entity_id}`}
                      className="text-blue-600 hover:underline text-sm dark:text-blue-400"
                    >
                      {user.contact_first} {user.contact_last}
                    </a>
                  </td>
                  <td className="border-b border-gray-300 px-6 py-4 text-sm dark:border-gray-700">
                    {user.contact_country}
                  </td>
                  <td className="border-b border-gray-300 px-6 py-4 dark:border-gray-700">
                    {user.communities.split(",").map((communityId: string) => {
                      const community = communities.find(
                        (comm) => comm.community_id === parseInt(communityId)
                      );
                      return community ? (
                        <div
                          key={community.community_id}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs inline-block mr-2 mb-2 dark:bg-blue-900 dark:text-blue-300"
                        >
                          {community.name}
                          <button
                            onClick={() =>
                              removeUserFromCommunity(community.community_id, user.entity_id)
                            }
                            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                          >
                            &times;
                          </button>
                        </div>
                      ) : null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => fetchUserCommunities(currentPage - 1)}
              disabled={currentPage === 1 || isLoading}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300"
            >
              Previous
            </button>
            <span className="text-sm dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => fetchUserCommunities(currentPage + 1)}
              disabled={currentPage === totalPages || isLoading}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityUsers;
