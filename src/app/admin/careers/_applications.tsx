"use client";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/shadcn/table";

const Applications: React.FC = () => {
  const [applications, setApplications] = useState([]);

  // fetch applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch(`/next/api/career/applications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      return Array.isArray(data) ? data : [];
    };

    let applications = fetchApplications();
    applications.then((data: any) => {
      setApplications(data);
    });
  }, []);

  const restoreAndDownloadFile = (binaryStr: any, fileName: string, mimeType: string): void => {
    const buffer = Buffer.from(binaryStr.data);
    binaryStr = buffer.toString("binary");
    const binaryArray = new Uint8Array(
      binaryStr.split("").map((char: string) => char.charCodeAt(0))
    );
    const arrayBuffer = binaryArray.buffer;
    const blob = new Blob([arrayBuffer], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Applications</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>LinkedIn</TableCell>
            <TableCell>Other Link</TableCell>
            <TableCell>Why ProZ</TableCell>
            <TableCell>Why Hire</TableCell>
            {/* <TableCell>Background</TableCell> */}
            <TableCell>About</TableCell>
            <TableCell>Working From</TableCell>
            <TableCell>Compensation</TableCell>
            <TableCell>CV</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{application.full_name}</TableCell>
              <TableCell>
                <a href={`mailto:${application.email}`} className="text-primary">
                  {application.email}
                </a>
              </TableCell>
              <TableCell>{application.phone}</TableCell>
              <TableCell>
                <a
                  href={application.linkedin}
                  target="_blank"
                  className="text-primary"
                  rel="noopener noreferrer"
                >
                  {application.linkedin}
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={application.otherLink}
                  target="_blank"
                  className="text-primary"
                  rel="noopener noreferrer"
                >
                  {application.otherLink}
                </a>
              </TableCell>
              <TableCell>{application.reason_for_working}</TableCell>
              <TableCell>{application.why_hire_you}</TableCell>
              {/* <TableCell>{application.background}</TableCell> */}
              <TableCell>{application.about_yourself}</TableCell>
              <TableCell>{application.workingFrom}</TableCell>
              <TableCell>{application.compensation}</TableCell>
              <TableCell>
                <span
                  className="text-primary cursor-pointer"
                  onClick={() =>
                    restoreAndDownloadFile(application.cv, "cv", application.cv_file_type)
                  }
                >
                  Download
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applications;
