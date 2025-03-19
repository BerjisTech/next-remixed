"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cva, VariantProps } from "class-variance-authority";

const paginationStyles = cva("flex items-center justify-center space-x-2", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const buttonStyles = cva("rounded-full flex items-center justify-center transition-colors", {
  variants: {
    variant: {
      default: "bg-primary-50 hover:bg-primary-200",
      active: "bg-primary-500 text-white hover:bg-primary-600",
      disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const buttonSizeStyles = "h-10 w-10";

interface PaginationProps extends VariantProps<typeof paginationStyles> {
  totalItems: number;
  itemsPerPage: number;
  currentPage?: number;
  children?: ReactNode;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, children, size }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const page = searchParams?.get("page");
    const parsedPage = page ? Number(page) : 1;
    if (parsedPage >= 1 && parsedPage <= totalPages) {
      setCurrentPage(parsedPage);
    } else {
      router.replace("?page=1");
    }
  }, [searchParams, router, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      newSearchParams.set("page", page.toString());
      router.push(`?${newSearchParams.toString()}`);
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child) // Pass props only if necessary
          : child
      )}
      <nav className={`${paginationStyles({ size })} space-x-8`}>
        <button
          className={`${buttonStyles({ variant: currentPage === 1 ? "disabled" : "default" })} ${buttonSizeStyles}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M11.25 13.5L6.75 9L11.25 4.5"
              stroke="#4D9D9D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`${buttonStyles({
                variant: currentPage === number ? "active" : "default",
              })} ${buttonSizeStyles}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          className={`${buttonStyles({ variant: currentPage === totalPages ? "disabled" : "default" })} ${buttonSizeStyles}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M6.75 13.5L11.25 9L6.75 4.5"
              stroke="#4D9D9D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
