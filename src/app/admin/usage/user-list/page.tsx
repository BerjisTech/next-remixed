"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const getPageVisits = async (
  includeAdmins = false,
  limit = 10,
  offset = 0,
  startDate = "",
  endDate = ""
) => {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
      includeAdmins: includeAdmins.toString(),
    });
    if (startDate) params?.append("startDate", startDate);
    if (endDate) params?.append("endDate", endDate);

    const response = await fetch(`/next/api/page-visits?${params}`);
    const data = await response.json();
    return {
      visits: data.pageVisits || [],
      totalRecords: data.pageVisitCounts || 0,
      dailyUserCount: data.dailyUserCount || 0,
      usersByDays: data.usersByDays || [],
    };
  } catch (error) {
    console.error("Error fetching page visits:", error);
    return null;
  }
};

const extractPageName = (url: string): string => {
  if (url.includes("/next/")) {
    const segments = url.split("/next/");
    const pageParts = segments[1]?.split("/");

    return pageParts[0];
  }
  return "home";
};

interface PageVisit {
  entity_id: number;
  contact_first: string;
  contact_last: string;
  is_member?: boolean;
  total_pages_all_time: number;
  total_pages_today: number;
  total_pages_this_month: number;
  pages_visits_today: string;
}

const PageVisitList = () => {
  const [pageVisits, setPageVisits] = useState<PageVisit[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [dailyUserCount, setDailyUserCount] = useState(0);
  const [usersByDays, setUsersByDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [includeAdmins, setIncludeAdmins] = useState(false);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [activeDiscourseUsers, setActiveDiscourseUsers] = useState(0);
  const [activeDiscourseUsersDataForChart, setActiveDiscourseUsersDataForChart] = useState<any[]>(
    []
  );

  const fetchActiveDiscourseUsersData = async () => {
    try {
      const response = await fetch(`/next/api/admin/reports/discourse?type=activeUsers`);
      if (!response.ok) throw new Error("Failed to fetch active users");
      const data = await response.json();

      // Set active discourse users
      setActiveDiscourseUsers(data.filter((user: any) => user.admin === false).length);

      // Count users grouped by date
      const userCounts = {};
      data.forEach((user: { last_seen_at: string }) => {
        const date = new Date(user.last_seen_at).toISOString().split("T")[0];
        (userCounts as Record<string, number>)[date] =
          ((userCounts as Record<string, number>)[date] || 0) + 1;
      });

      // Set active discourse users data for chart
      setActiveDiscourseUsersDataForChart(
        Object.entries(userCounts).map(([date, count]) => ({
          date,
          activeUsers: count,
        }))
      );
    } catch (error) {
      console.error("Error fetching active users data:", error);
      setActiveDiscourseUsers(0);
      setActiveDiscourseUsersDataForChart([]);
    }
  };

  const formatPagesVisitedToday = (pages: string): string => {
    return Array.from(
      new Set(
        pages
          ?.split(", ")
          .map((url) => {
            if (url.includes("/next/learn/course/")) {
              const segments = url.split("/next/learn/course/");
              return `learn/course/${segments[1]?.split("_")[0]}`;
            }
            return extractPageName(url);
          })
          .filter((page) => page !== "")
      )
    ).join(", ");
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await getPageVisits(includeAdmins, limit, offset, startDate, endDate);
    if (result) {
      const { visits, totalRecords, dailyUserCount, usersByDays } = result;
      setPageVisits(visits);
      setTotalRecords(totalRecords);
      setDailyUserCount(dailyUserCount);
      fetchActiveDiscourseUsersData();
      setUsersByDays(usersByDays);
    } else {
      setPageVisits([]);
      setTotalRecords(0);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [limit, offset, startDate, endDate, includeAdmins]);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalRecords / limit);

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  const handleNextPage = () => {
    if (offset + limit < totalRecords) {
      setOffset(offset + limit);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User list</h1>
      {/* Box to show the unique daily users */}
      <div className="flex justify-around items-center">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold">Unique daily users</h2>
          <span className="text-3xl font-bold">{dailyUserCount}</span>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold">Active users of Communities (Discourse)</h2>
          <span className="text-3xl font-bold">{activeDiscourseUsers}</span>
        </div>
      </div>
      <div className="flex items-center">
        {/* Chart total users by day*/}
        <div className="mt-8 w-full">
          {/* <h2 className="text-xl font-semibold mb-4">Total users by day</h2> */}
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={usersByDays} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                }
                label={{ value: "Date", position: "insideBottom", offset: -5 }}
              />
              <YAxis label={{ value: "Total users", angle: -90, position: "insideLeft" }} />
              <Tooltip
                labelFormatter={(date) => {
                  const options = {
                    year: "numeric" as "numeric" | "2-digit",
                    month: "short" as "numeric" | "2-digit",
                    day: "numeric" as "numeric" | "2-digit",
                  };
                  return new Date(date).toLocaleDateString("en-GB", options);
                }}
                formatter={(value) => [value, "Total users"]}
              />
              <Legend />
              <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Chart Discourse active users by day */}
        <div className="mt-8 w-full">
          {/* <h2 className="text-xl font-semibold mb-4">Communities users by day</h2> */}
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={activeDiscourseUsersDataForChart}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                }
                label={{ value: "Date", position: "insideBottom", offset: -5 }}
                reversed={true}
              />
              <YAxis label={{ value: "Active Users", angle: -90, position: "insideLeft" }} />
              <Tooltip
                labelFormatter={(date) => {
                  const options = {
                    year: "numeric" as const,
                    month: "short" as const,
                    day: "numeric" as const,
                  };
                  return new Date(date).toLocaleDateString("en-GB", options);
                }}
                formatter={(value) => [value, "Active Users"]}
              />
              <Legend />
              <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Filter by date</h2>
        <div className="flex space-x-4">
          <div>
            <label className="block text-gray-700">Start date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border py-2 px-4 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">End date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border py-2 px-4 rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-gray-700 mr-2">Include admins</label>
          <input
            type="checkbox"
            checked={includeAdmins}
            onChange={(e) => {
              setIncludeAdmins(e.target.checked);
              setOffset(0); // Reset offset when filter changes
            }}
            className="border py-2 px-4 rounded"
          />
        </div>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="mb-2">
            <span>Total new site users: {totalRecords}</span>
            <span className="ml-4">
              Showing {offset + 1} - {Math.min(offset + limit, totalRecords)} of {totalRecords}
            </span>
          </div>

          <div>
            <table className="bg-white border w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">User</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                  <th className="py-2 px-4 border-b">Actions this month</th>
                  <th className="py-2 px-4 border-b">Actions today</th>
                </tr>
              </thead>
              <tbody>
                {pageVisits.map((visit, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b flex items-center space-x-2">
                      <a
                        href={`/next/profile/${visit.entity_id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {visit.contact_first} {visit.contact_last} ({visit.entity_id})
                      </a>
                      {visit.is_member && (
                        <Image
                          src="/next/next_assets/images/svg/plus-member.svg"
                          alt="image-24.png"
                          height={20}
                          width={20}
                        />
                      )}
                    </td>
                    <td className="py-2 px-4 border-b text-center">{visit.total_pages_all_time}</td>
                    <td className="py-2 px-4 border-b text-center">
                      {visit.total_pages_this_month}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {visit.total_pages_today}{" "}
                      {formatPagesVisitedToday(visit.pages_visits_today) && (
                        <span>({formatPagesVisitedToday(visit.pages_visits_today)})</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={offset === 0}
              className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={offset + limit >= totalRecords}
              className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PageVisitList;
