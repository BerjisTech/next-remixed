"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { useGetPaymentsWithdrawnQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/constants/prozpay";
import Image from "next/image";

const PaymentsWithdrawn = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: paymentsWithdrawn,
    isLoading,
    error,
  } = useGetPaymentsWithdrawnQuery(`${entityId}`, { skip: !entityId });

  const [paginatedPayments, setPaginatedPayments] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getPaymentsForPage(currentPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getPaymentsForPage(currentPage);
    }
  };

  const getPaymentsForPage = (currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (paymentsWithdrawn) {
      let totalPagesRes = Math.ceil(paymentsWithdrawn.length / itemsPerPage);
      setTotalPages(totalPagesRes);
      let paginatedPaymentsRes = paymentsWithdrawn.slice(startIndex, endIndex);
      setPaginatedPayments(paginatedPaymentsRes);
    }
  };

  useEffect(() => {
    console.log(paymentsWithdrawn);
    if (paymentsWithdrawn) {
      getPaymentsForPage(currentPage);
    }
  }, [paymentsWithdrawn]);

  return (
    <>
      {!isLoading && !error && paymentsWithdrawn ? (
        <>
          {paymentsWithdrawn.length > 0 ? (
            <div className="space-y-2 w-full">
              {/* Header */}
              <div className="hidden lg:grid grid-cols-8 items-center text-sm font-semibold text-gray-600 bg-gray-100 py-2 px-4">
                <div className="flex items-center gap-1">
                  Requested
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
                  Withdrawal date
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
                  Debit
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
                  Fees
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
                  Net total
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
                  Send cost
                  <Image
                    src="/next/next_assets/images/icons/arrow-right.svg"
                    alt=""
                    width={24} // Adjust width as needed
                    height={24} // Adjust height as needed
                    className="rotate-90"
                  />
                </div>
              </div>

              {/* Rows */}
              {paginatedPayments.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-white p-4 border-b border-gray-200 hover:bg-gray-50"
                  >
                    <div className="grid grid-cols-8 gap-4 items-center text-sm">
                      <div>{item["time_requested"]}</div>
                      <div>
                        <div
                          className={`inline-block px-2 py-1 text-xs font-semibold ${item["status"] == "paid" ? "text-primary bg-primary-50" : "text-dark bg-grey-50"} rounded-full`}
                        >
                          {item["status"]}
                        </div>
                      </div>
                      <div>{item["time_paid"]}</div>
                      <div>{formatCurrency(parseFloat(item["amount_paid"]), item["currency"])}</div>
                      <div>-</div>
                      <div>{formatCurrency(parseFloat(item["fee"]), item["currency"])}</div>
                      <div>{formatCurrency(parseFloat(item["subtotal"]), item["currency"])}</div>
                      <div>
                        {formatCurrency(
                          parseFloat(item["withdrawal_cost_amount"]),
                          item["currency"]
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
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
            <div className="font-semibold text-xl">No payments found &hellip;</div>
          )}
        </>
      ) : (
        <div className="font-semibold text-lg">Loading &hellip;</div>
      )}
    </>
  );
};
export default PaymentsWithdrawn;
