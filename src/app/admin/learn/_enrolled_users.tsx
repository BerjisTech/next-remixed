"use client";
import React, { useState, useEffect } from "react";

interface Purchase {
  entity_id: number;
  contact_first: string;
  contact_last: string;
  mdl_course_id: number;
  time_purchased: string;
  wallet_txn_id: number;
  debited_from: number;
  title: string;
}

const EnrolledUsers: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [entityId, setEntityId] = useState<number | null>(null);
  const [courseId, setCourseId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(true);

  const fetchPurchases = async (entity_id: number | null = 0, course_id: number | null = 0) => {
    setLoading(true);

    const query = new URLSearchParams();
    if (entity_id !== null) query.append("entityId", entity_id.toString()); // entity ID filter
    if (course_id !== null) query.append("courseId", course_id.toString()); // course ID filter
    query.append("page", page.toString()); // Page number

    try {
      const response = await fetch(`/next/api/learn/purchases/admin?${query.toString()}`);
      const data = await response.json();

      const formattedData = data.map((item: any) => ({
        entity_id: item.entity_id,
        contact_first: item.contact_first,
        contact_last: item.contact_last,
        mdl_course_id: item.mdl_course_id,
        time_purchased: item.time_purchased,
        wallet_txn_id: item.wallet_txn_id,
        debited_from: item.debited_from,
        title: item.title,
      }));

      setPurchases(formattedData);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error("Error fetching purchases:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, [page]);

  return (
    <div className="p-0 max-w-xl">
      {/* Filters */}
      <div className="mb-4 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-4 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Entity ID
            </label>
            <input
              type="number"
              placeholder="Enter Entity ID"
              onChange={(e) => setEntityId(Number(e.target.value))}
              className="mt-1 px-4 py-2 border rounded-md w-full md:w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-4 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Course ID
            </label>
            <input
              type="number"
              placeholder="Enter Course ID"
              onChange={(e) => setCourseId(Number(e.target.value))}
              className="mt-1 px-4 py-2 border rounded-md w-full md:w-auto"
            />
          </div>
          <button
            onClick={() => {
              setPage(1); // Reset to first page on filter change
              fetchPurchases(entityId, courseId);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Course ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Time Purchased
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Wallet Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                Debited
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {purchases.map((purchase: Purchase) => (
              <tr key={purchase.entity_id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                  <a
                    href={`/next/profile/${purchase.entity_id}`}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {purchase.contact_first} {purchase.contact_last}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <a
                    href={`/next/learn/course/${purchase.mdl_course_id}`}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {purchase.mdl_course_id}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {purchase.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {new Date(purchase.time_purchased).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <a
                    href={`https://www.proz.com/?sp=wallet/h&view_details=1&transaction_id=${purchase.wallet_txn_id}&eid_s=${purchase.entity_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {purchase.wallet_txn_id}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  ${purchase.debited_from}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-between mt-5">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md ${page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"}`}
        >
          Previous Page
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={!hasMore}
          className={`px-4 py-2 rounded-md ${!hasMore ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"}`}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default EnrolledUsers;
