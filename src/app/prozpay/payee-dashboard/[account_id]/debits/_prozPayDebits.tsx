"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { useGetCustomerDebitsQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";
import { useEffect, useState } from "react";

const ProzPayDebits = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: customerDebits,
    isLoading,
    error,
  } = useGetCustomerDebitsQuery(`${entityId}`, { skip: !entityId });

  const [paginatedDebits, setPaginatedDebits] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePreviousPage = () => {
    // if (currentPage > 1) {
    //     setCurrentPage(currentPage - 1);
    //     getDebitsForPage(currentPage);
    // }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getDebitsForPage(currentPage);
    }
  };

  const getDebitsForPage = (currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let totalPagesRes = Math.ceil(customerDebits.length / itemsPerPage);
    setTotalPages(totalPagesRes);
    // let paginatedDebitsRes = customerDebits.slice(startIndex, endIndex);
    // setPaginatedDebits(paginatedDebitsRes);
  };

  useEffect(() => {
    if (customerDebits) {
      getDebitsForPage(currentPage);
    }
  }, [customerDebits]);

  return (
    <>
      {!isLoading && !error && customerDebits ? (
        <>
          {customerDebits.length > 0 ? (
            <div className="space-y-2">
              {/* Header */}
              <div className="hidden lg:grid grid-cols-6 items-center text-sm font-semibold text-gray-600 bg-gray-100 py-2 px-4">
                <div className="flex items-center gap-1">
                  Creation date
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  Status
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  Settlement date
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  Amount
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  Purpose
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  Description
                  <svg
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Rows */}
              {paginatedDebits.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-white p-4 border-b border-gray-200 hover:bg-gray-50"
                  >
                    <div className="grid grid-cols-6 gap-4 items-center text-sm">
                      <div>28 Feb 2009</div>
                      <div>
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                          Pending
                        </span>
                      </div>
                      <div>-</div>
                      <div>99 USD</div>
                      <div>Membership purchase</div>
                      <div>Annual Standard Professional membership</div>
                    </div>
                  </div>
                );
              })}
              ;{/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePreviousPage}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  &larr; Previous
                </button>
                <div className="text-gray-500 text-sm">
                  Page <span className="font-semibold">{currentPage}</span> of {totalPages}
                </div>
                <button
                  onClick={handleNextPage}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          ) : (
            <div className="font-semibold text-xl">No active debits found &hellip;</div>
          )}
        </>
      ) : (
        <div className="font-semibold text-lg">Loading &hellip;</div>
      )}
    </>
  );
};
export default ProzPayDebits;
