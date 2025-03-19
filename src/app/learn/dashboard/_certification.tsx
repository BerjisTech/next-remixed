"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";

const Certification = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const [certs, setCerts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchCerts = async (entity_id: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/next/api/learn/mdl-courses/certificates?entityId=${entity_id}`
      );
      const data = await response.json();
      console.log(data);

      if (data.length > 0) {
        const certsData = data.map((cert: any) => ({
          id: cert.mdl_course_id,
          title: cert.title,
          description: cert.description,
          cert_file: cert.public_url, // course image
          time_completed: new Date(cert.time_created).getTime(),
        }));

        setCerts(certsData);
      } else {
        console.error("Certificates data is undefined");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    if (entityId) {
      fetchCerts(entityId);
    }
  }, [entityId]);

  return (
    <div className="container mx-auto p-4 dark:text-white">
      {loading ? (
        <p className="w-full text-lg text-center text-[#344054] dark:text-white-blue-hue dark:text-accent-foreground">
          Getting certificates...
        </p>
      ) : certs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              {/* Certification Image */}
              <div className="w-full h-48 relative">
                <iframe
                  src={cert.cert_file}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                ></iframe>
              </div>

              {/* Certification Details */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between text-xs dark:text-gray-400">
                  <span>Completed: {new Date(cert.time_completed).toLocaleDateString()}</span>
                  <span>
                    <a
                      href={`/next/learn/course/${cert.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View course
                    </a>
                  </span>
                </div>
                <h2 className="text-lg font-semibold dark:text-white">{cert.title}</h2>
              </div>

              {/* Download button */}
              <div className="p-4 flex justify-center items-center">
                <a
                  href={cert.cert_file}
                  download
                  className="bg-[#4d9d9d] text-white px-4 py-2 rounded-md w-full text-center"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="col-span-12 w-full">
          <div className="flex justify-center items-center w-full py-10">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              No certificates found
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
