"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Interface for business data
interface Business {
  business_id: number;
  business_name: string;
  business_membership_package: string;
  business_membership_expiration_date: string;
  lwa_avg_five_year: number;
  lwa_num_entries_five_year: number;
  jobs_posted_12_months: number;
  business_link: string;
  self_link: string;
  is_employee: boolean;
  employee_title: string;
  employee_is_admin: boolean;
}

// Service to fetch businesses
const fetchBusinesses = async (): Promise<Business[]> => {
  try {
    const response = await fetch("/api/businesses"); // Replace with your actual API endpoint
    if (!response.ok) throw new Error("Failed to fetch businesses");
    return await response.json();
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};

const Page = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("reviews");
  const [membershipFilter, setMembershipFilter] = useState("Enterprise");

  useEffect(() => {
    const loadBusinesses = async () => {
      setIsLoading(true);
      const data = await fetchBusinesses();
      setBusinesses(data);
      setIsLoading(false);
    };

    loadBusinesses();
  }, []);

  // Filter and sort businesses
  const filteredBusinesses = businesses
    .filter((business) => {
      const matchesSearch = business.business_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMembership =
        membershipFilter === "all" || business.business_membership_package === membershipFilter;
      return matchesSearch && matchesMembership;
    })
    .sort((a, b) => {
      if (sortBy === "reviews") {
        return b.lwa_avg_five_year - a.lwa_avg_five_year;
      }
      return 0;
    });

  return (
    <>
      <div className="flex flex-col justify-start items-center relative overflow-hidden gap-4 px-20 py-8 bg-[#edf5f5]">
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 px-10">
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-bold text-center text-[#4d9d9d]">
            Find language industry outsourcers
          </p>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <Link
              href="/clients"
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-0.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#667085]">
                My clients
              </p>
            </Link>
            <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#1d2939]">|</p>
            <Link
              href="/applications"
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-0.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#667085]">
                My applications
              </p>
            </Link>
            <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#1d2939]">|</p>
            <Link
              href="/faqs"
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-0.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#667085]">FAQs</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="flex justify-start items-start gap-6 px-4">
        <div className="flex flex-col justify-start items-start flex-grow gap-3 w-[90%]">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 m-4">
            {/* Search Input */}
            <div className="flex justify-start items-center flex-grow gap-1">
              <input
                type="text"
                placeholder="Search by name or domain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow p-2.5 rounded-xl border border-[#eaeaea]"
              />
              <button className="px-5 py-3 rounded-xl bg-[#edf5f5] border border-[#edf5f5]">
                <p className="font-semibold text-[#4d9d9d]">Search</p>
              </button>
            </div>

            {/* Sort and Filter Options */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium text-[#344054]">Sort by:</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2.5 rounded-xl bg-white border border-[#f2f4f7]"
                >
                  <option value="reviews">Reviews</option>
                  <option value="name">Name</option>
                </select>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm font-medium text-[#344054]">Membership:</p>
                <select
                  value={membershipFilter}
                  onChange={(e) => setMembershipFilter(e.target.value)}
                  className="p-2.5 rounded-xl bg-white border border-[#f2f4f7]"
                >
                  <option value="all">All</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
            </div>
          </div>

          {/* Business Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              filteredBusinesses.map((business) => (
                <div
                  key={business.business_id}
                  className="flex flex-col gap-3 p-4 rounded-3xl bg-[#f8f7f1] border border-[#f2f4f7]"
                >
                  <div className="flex gap-3">
                    <div className="w-[102px] h-[102px] rounded-[13.6px] bg-white border-2 border-[#eaeaea] overflow-hidden">
                      <Image
                        src="/next/next_assets/images/avatar-outsourcer.png"
                        alt={business.business_name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                      <div className="pb-1 border-b border-[#eaecf0]">
                        <h3 className="text-lg font-semibold text-[#344054]">
                          {business.business_name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#344054]">
                          <span>Rating: {business.lwa_avg_five_year.toFixed(1)}</span>
                          <span>({business.lwa_num_entries_five_year} reviews)</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#667085]">
                        Jobs posted in last 12 months: {business.jobs_posted_12_months}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-[#FFB800]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={business.business_link}
                      className="px-3.5 py-2 rounded-lg bg-[#edf5f5] border border-[#edf5f5]"
                    >
                      <span className="text-sm font-semibold text-[#4d9d9d]">View Profile</span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
