"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGetPaymentFeedDataQuery } from "@/lib/store/features/prozpay/prozpayApiSlice";

export default function PaymentFeed() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const [payments, setPayments] = useState([]);
  const [currentPagePayments, setCurrentPagePayments] = useState([]);
  const totalPages = Math.ceil(payments.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage((prev) => {
      loadPageData(payments as [], page);
      return page;
    });
  };

  const loadPageData = (paymentArray: [], pageNumber: number) => {
    const start = (pageNumber - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const sliced = paymentArray.slice(start, end);
    setCurrentPagePayments(sliced);
  };

  const { data: paymentFeedData, isLoading, error } = useGetPaymentFeedDataQuery();

  useEffect(() => {
    if (!isLoading && !error) {
      setPayments(paymentFeedData);
      loadPageData(paymentFeedData, currentPage);
    }
  }, [paymentFeedData]);

  return (
    <div className="w-full bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden p-4">
      <h2 className="text-lg text-primary font-semibold mb-3">Recent Transactions</h2>
      <div className="space-y-3 overflow-hidden">
        {isLoading && (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}
        <>
          {currentPagePayments.map((item, index) => (
            <div
              key={index}
              className="w-full bg-gray-100 dark:bg-gray-200 p-3 rounded-md shadow-sm flex items-center space-x-3"
            >
              <Image
                src={`/next/next_assets/images/flags/${item["payee_country_code"]}.svg`}
                alt={item["payee_country"]}
                width={24}
                height={16}
                className="rounded-sm"
              />
              <div className="dark:text-primary">
                <p>
                  {item["payer"]} has paid <strong>{item["amount"]}</strong> to {item["payee"]}{" "}
                  {item["description"]}
                </p>
                <p className="text-sm text-gray-500">{item["time"]}</p>
              </div>
            </div>
          ))}
        </>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 dark:text-primary disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-primary text-white" : "dark:text-primary bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 dark:text-primary disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
