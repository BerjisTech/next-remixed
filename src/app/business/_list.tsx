"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { Button } from "@/components/shadcn/button";
import { BusinessProfile, BusinessFilters } from "@/interfaces/business";
import { useDebounceCallback } from "usehooks-ts";
import Image from "next/image";

const BusinessList = () => {
  const [debouncedValue, setValue] = useState("");
  const debounced = useDebounceCallback(setValue, 500);
  const router = useRouter();
  const [businesses, setBusinesses] = useState<BusinessProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<BusinessFilters>({
    business_id: 0,
    common_name: "",
    country_code: "",
    is_cpn: "",
    completeness_score_min: 0,
  });

  useEffect(() => {
    const fetchBusinesses = async () => {
      console.log("object");
      try {
        setLoading(true);
        const params: Record<string, string> = {
          page: currentPage.toString(),
          pageSize: "10",
        };

        if (debouncedValue) {
          params.common_name = debouncedValue;
        }

        if (filters.country_code) {
          params.country_code = filters.country_code;
        }
        if (filters.is_cpn) {
          params.is_cpn = filters.is_cpn;
        }

        const queryParams = new URLSearchParams(params);
        const response = await fetch(`/next/api/businesses?${queryParams}`);
        console.log("API Response Status:", response.status);

        if (!response.ok) {
          throw new Error("Failed to fetch businesses");
        }

        const result = await response.json();
        console.log("Fetched data:", result);

        if (result?.data?.data) {
          setBusinesses(result.data.data);
          setTotalPages(Math.ceil(result.data.total / 10));
        }
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [currentPage, filters, debouncedValue]);

  const handleFilterChange = (key: keyof BusinessFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="basis-3/5">
          <Input
            type="text"
            placeholder="Search directory..."
            defaultValue={debouncedValue}
            onChange={(event) => debounced(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between gap-3 w-full">
          <Select
            defaultValue=""
            onValueChange={(value) => handleFilterChange("country_code", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="gb">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="es">Spain</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="br">Brazil</SelectItem>
              <SelectItem value="in">India</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="" onValueChange={(value) => handleFilterChange("is_cpn", value)}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="y">CPN</SelectItem>
              <SelectItem value="n">Non-CPN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {businesses &&
          businesses.map((business) => (
            <div
              key={business.business_id}
              className="col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  {business.business_data?.logo_url ? (
                    <Image
                      src={business.business_data.logo_url}
                      alt={business.business_data.common_name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-400">No logo</span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {business.business_data?.common_name || "Unnamed Business"}
                      </h3>
                      {business.business_data?.country_code && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">
                            {business.business_data.city && `${business.business_data.city}, `}
                            {business.business_data.country_code.toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Contact
                    </Button>
                  </div>

                  {business.business_data?.slogan && (
                    <p className="text-sm text-gray-600 mt-2">{business.business_data.slogan}</p>
                  )}

                  <div className="mt-2 flex flex-wrap gap-2">
                    {business.current_membership_package && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {business.current_membership_package}
                      </span>
                    )}
                    {business.business_data?.size_employees && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {business.business_data.size_employees} employees
                      </span>
                    )}
                    {business.business_data?.year_established && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Est. {business.business_data.year_established}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {businesses.length === 0 && !loading && (
        <div className="text-center py-10">
          <p className="text-gray-600">No businesses found matching your criteria</p>
        </div>
      )}

      {businesses.length > 0 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default BusinessList;
