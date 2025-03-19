"use client";
import { useGetPaymentsReceivedQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";
import { useAppSelector } from "@/lib/store/hooks";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/constants/prozpay";

const PaymentsReceived = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const {
    data: paymentsReceived,
    isLoading,
    error,
  } = useGetPaymentsReceivedQuery(`${entityId}`, { skip: !entityId });

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

    if (paymentsReceived.payments) {
      let totalPagesRes = Math.ceil(paymentsReceived.num_results / itemsPerPage);
      setTotalPages(totalPagesRes);
      let paginatedPaymentsRes = paymentsReceived.payments.slice(startIndex, endIndex);
      setPaginatedPayments(paginatedPaymentsRes);
    }
  };

  useEffect(() => {
    if (paymentsReceived) {
      console.log(paymentsReceived);
      getPaymentsForPage(currentPage);
    }
  }, [paymentsReceived]);

  return (
    <>
      {!isLoading && !error && paymentsReceived ? (
        <>
          {paymentsReceived.num_results > 0 && paginatedPayments ? (
            <div className="space-y-2 w-full">
              {/* Table */}
              <table className="table-auto w-full text-sm">
                {/* Header */}
                <thead className="bg-gray-100 text-gray-600 font-semibold">
                  <tr>
                    <th className="py-2 px-4 text-left">Created</th>
                    <th className="py-2 px-4 text-left">Payer</th>
                    <th className="py-2 px-4 text-left">Due date</th>
                    <th className="py-2 px-4 text-left">Status</th>
                    <th className="py-2 px-4 text-left">Amount</th>
                    <th className="py-2 px-4 text-left">Fees</th>
                    <th className="py-2 px-4 text-left">Net total</th>
                  </tr>
                </thead>
                {/* Rows */}
                <tbody>
                  {paginatedPayments.map((item: any, index: number) => (
                    <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-2 px-4">{item["time_created"]}</td>
                      <td className="py-2 px-4">
                        <Link
                          href={`/profile/${item["payer_eid"]}`}
                          className="text-primary hover:underline"
                          target="_blank"
                        >
                          {item["payer_name"]}
                        </Link>
                      </td>
                      <td className="py-2 px-4">{item["date_to_pay"]}</td>
                      <td className="py-2 px-4">
                        <div className="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                          Pending
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        {formatCurrency(parseFloat(item["payout_amount"]), item["payout_currency"])}
                      </td>
                      <td className="py-2 px-4">
                        {formatCurrency(
                          parseFloat(item["payer_fee_amount"]),
                          item["payout_currency"]
                        )}
                      </td>
                      <td className="py-2 px-4">
                        {formatCurrency(parseFloat(item["payout_amount"]), item["payout_currency"])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

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
export default PaymentsReceived;
