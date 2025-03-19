import React from "react";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

const PricingTable = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all">
        <div className="bg-grey-50 dark:bg-grey-900 border border-[#6daabf] rounded-2xl p-[24px] hover:shadow-md group">
          <h3 className="text-primary-600 text-xl font-bold mb-2 text-left">
            One-page brochure website
          </h3>
          <ul className="list-none mb-4 text-left">
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Premium members:</span> $0 (Annual)
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Plus & Standard members:</span> $99/year
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">ProZ Users (No active membership):</span>{" "}
              $139/year
            </li>
            <li className="py-2">
              <span className="text-grey-700 font-bold">Non-ProZ users:</span> $189/year
            </li>
          </ul>
          <p className="text-grey-700 text-sm text-left">Multipage upgrades available.</p>
          <Link
            href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
            className="hidden group-hover:block mt-3 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm">
              Book a free consultation
            </Button>
          </Link>
        </div>

        <div className="bg-grey-50 dark:bg-grey-900 border border-[#6daabf] rounded-2xl p-[24px] group hover:shadow-md">
          <h3 className="text-primary-600 text-xl font-bold mb-2 text-left">Advanced Branding</h3>
          <ul className="list-none mb-4 text-left">
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Premium members:</span> $149
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Plus & Standard members:</span> $219
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">ProZ Users (No active membership):</span>{" "}
              $249
            </li>
            <li className="py-2">
              <span className="text-grey-700 font-bold">Non-ProZ users:</span> $289
            </li>
          </ul>
          <p className="text-grey-700 text-sm text-left">Conditions apply.</p>
          <Link
            href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
            className="hidden group-hover:block mt-3 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm">
              Book a free consultation
            </Button>
          </Link>
        </div>

        <div className="bg-grey-50 dark:bg-grey-900 border border-[#6daabf] rounded-2xl p-[24px] hover:shadow-md group">
          <h3 className="text-primary-600 text-xl font-bold mb-2 text-left">SEO packages</h3>
          <ul className="list-none mb-4 text-left">
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Premium members:</span> $159
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Plus & Standard members:</span> $189
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">ProZ Users (No active membership):</span>{" "}
              $219
            </li>
            <li className="py-2">
              <span className="text-grey-700 font-bold">Non-ProZ users:</span> $249
            </li>
          </ul>
          <p className="text-grey-700 text-sm text-left">
            Local or global, depending on your goals.
          </p>
          <Link
            href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
            className="hidden group-hover:block mt-3 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm">
              Book a free consultation
            </Button>
          </Link>
        </div>

        <div className="bg-grey-50 dark:bg-grey-900 border border-[#6daabf] rounded-2xl p-[24px] hover:shadow-md group">
          <h3 className="text-primary-600 text-xl font-bold mb-2 text-left">Marketing materials</h3>
          <ul className="list-none mb-4 text-left">
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Premium members:</span> $99
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Plus & Standard Members:</span> $129
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">ProZ users (No active membership):</span>{" "}
              $159
            </li>
            <li className="py-2 border-b border-gray-200">
              <span className="text-grey-700 font-bold">Non-ProZ users:</span> $199
            </li>
          </ul>
          <Link
            href="https://calendar.app.google/HNkuL8YW1u8ckP3x7"
            className="hidden group-hover:block mt-3 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm">
              Book a free consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
