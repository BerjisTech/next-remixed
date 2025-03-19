"use client";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/shadcn/table";

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState([]);

  // fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/next/api/career/jobs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      return Array.isArray(data) ? data : [];
    };

    let jobs = fetchJobs();
    jobs.then((data: any) => {
      setJobs(data);
    });
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Full Time</TableCell>
            <TableCell>Date Posted</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.is_full_time == "y" ? "Yes" : "No"}</TableCell>
              <TableCell>{job.date_posted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Jobs;
