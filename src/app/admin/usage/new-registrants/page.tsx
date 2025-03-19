"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { Button } from "@/components/shadcn/button";
import { DataTablePagination } from "@/components/shadcn/dataTablePartials/pagination";
import { Input } from "@/components/shadcn/input";
import { Registrant } from "@/interfaces/admin/admin";
import Image from "next/image";

// set the default date range to today
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Formats as "YYYY-MM-DD"
};

const RegistrantsPage = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(15); // Default rows per page
  const [totalRegistrants, setTotalRegistrants] = useState<number>(0);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [registrants, setRegistrants] = useState<Registrant[]>([]); // define registrants
  const [completedProfiles, setCompletedProfiles] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState("0.00");

  // Fetch registrants
  const fetchRegistrants = async () => {
    try {
      //console.log("Fetching registrants...");
      const response = await fetch(
        `/next/api/admin/reports/new-registrants?start_date=${startDate}&end_date=${endDate}&page=${page + 1}&limit=${pageSize}`
      );
      //console.log("Response received:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      //console.log("Data received:", data); // log data received
      //console.log(`Total registrants fetched: ${data.registrants.length} / ${data.totalRegistrants}`); // log number of registrants fetched
      console.log(`Profiles completed: ${data.completedProfiles}`); //log number of completed profiles
      setRegistrants(data.registrants);
      setTotalRegistrants(data.totalRegistrants);
      setCompletedProfiles(data.completedProfiles);
      setCompletionPercentage(data.completionPercentage);
    } catch (error) {
      console.error("Error fetching registrants:", error);
    }
  };

  useEffect(() => {
    setRegistrants([]);
    setTotalRegistrants(0);
    fetchRegistrants();
  }, [startDate, endDate, page, pageSize]);

  // Define table columns
  const columns: ColumnDef<Registrant>[] = [
    {
      accessorKey: "registered_date",
      header: "Registered",
      cell: ({ getValue }) => (
        <span>
          {new Date(getValue() as string)
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(",", "")}
        </span>
      ),
    },
    {
      accessorKey: "contact_first",
      header: "Name",
      cell: ({ row }) => (
        <span>
          {row.original.contact_first} {row.original.contact_last}
        </span>
      ),
    },
    {
      accessorKey: "picture",
      header: "Picture",
      cell: ({ getValue }) => {
        const imageUrl = getValue() as string;
        return (
          <Image
            src={imageUrl || "next/next_assets/images/user-avatar.png"}
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        );
      },
    },
    {
      accessorKey: "tagline",
      header: "Tagline",
      cell: ({ getValue }) => <span>{String(getValue() ?? "No Tagline")}</span>,
    },
  ];

  // Initialize TanStack table
  const table = useReactTable({
    data: registrants,
    columns,
    pageCount: Math.ceil(totalRegistrants / pageSize),
    manualPagination: true,
    state: { pagination: { pageIndex: page, pageSize } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function" ? updater({ pageIndex: page, pageSize }) : updater;
      setPage(newPagination.pageIndex);
      setPageSize(newPagination.pageSize); //dynamically get the page size
    },
  });

  //const completedProfiles = 9;
  const becameMembers = 1;
  const subscribedNewsletters = 101;

  const freelancerCount = 87;
  const studentCount = 19;
  const bothCount = 6;
  const employeeCount = 6;
  const endClientCount = 2;
  const vendorCount = 1;
  const otherCount = 1;

  const realNameHave = 92.62;
  const realNameShow = 96.72;
  const taglines = 26.79;
  const photo = 21.31;
  const nativeLang = 81.25;
  const services = 20.54;
  const pairs = 36.61;
  const fieldsOfExpertise = 19.64;
  const bio = 7.14;
  const cvs = 0.89;

  return (
    <div className="w-full min-h-screen p-6">
      {/* Header & Filter */}
      <div className="shadow-md p-4 rounded-md w-[70%] mb-6">
        <h1 className="text-2xl font-bold mb-4">Registrants</h1>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 w-full">
          <label className="text-grey-700 font-semibold">Date Range:</label>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Start Date:</span>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded w-[150px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">End Date:</span>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded w-[150px]"
            />
          </div>
          <Button
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            onClick={fetchRegistrants}
          >
            Find Users
          </Button>
          <Button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            onClick={() => {
              setStartDate(getTodayDate());
              setEndDate(getTodayDate());
              fetchRegistrants();
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Statistics */}
        <div className="p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg">Total registrants: {totalRegistrants}</h2>
          <p>
            Profile Completeness: {completedProfiles}({completionPercentage}%)
          </p>
          <p>
            Became member: {becameMembers} (
            {totalRegistrants > 0 ? ((becameMembers / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>

          <h2 className="font-semibold mt-4">Types:</h2>
          <p>
            Freelancer: {freelancerCount} (
            {totalRegistrants > 0 ? ((freelancerCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            Student: {studentCount} (
            {totalRegistrants > 0 ? ((studentCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            Both: {bothCount} (
            {totalRegistrants > 0 ? ((bothCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            Employee: {employeeCount} (
            {totalRegistrants > 0 ? ((employeeCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            End client: {endClientCount} (
            {totalRegistrants > 0 ? ((endClientCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            Vendor: {vendorCount} (
            {totalRegistrants > 0 ? ((vendorCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>
          <p>
            Other: {otherCount} (
            {totalRegistrants > 0 ? ((otherCount / totalRegistrants) * 100).toFixed(2) : "0"}%)
          </p>

          <h2 className="font-semibold mt-4">Additional Stats:</h2>
          <p>
            Subscribed to newsletters: {subscribedNewsletters} (
            {totalRegistrants > 0
              ? ((subscribedNewsletters / totalRegistrants) * 100).toFixed(2)
              : "0"}
            %)
          </p>
        </div>

        {/* Detailed Statistics */}
        <div className="p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg">Detailed Statistics</h2>
          <p>
            Real name (have/show): {realNameHave}% / {realNameShow}%
          </p>
          <p>Taglines: {taglines}%</p>
          <p>Photo: {photo}%</p>
          <p>Native language: {nativeLang}%</p>
          <p>Services: {services}%</p>
          <p>Pairs: {pairs}%</p>
          <p>Fields of expertise: {fieldsOfExpertise}%</p>
          <p>Bio: {bio}%</p>
          <p>CVs: {cvs}%</p>
        </div>
      </div>

      {/* Notes Section */}
      <div className="w-full p-4 rounded-md shadow-md mt-6">
        <h2 className="font-semibold">Notes:</h2>
        <p className="text-grey-600">
          - Given a possible large number of results, filtering over long time periods may not be
          successfully executed (the page may crash). If that's the case, try using shorter time
          ranges.
        </p>
      </div>

      {/* Registrants Table */}
      <div className="w-full mt-6">
        <h2 className="font-semibold text-lg">Recent registrants</h2>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No registrants found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <DataTablePagination table={table} />
    </div>
  );
};

export default RegistrantsPage;
