import Link from "next/link";
import React from "react";

const HeroSection: React.FC<{ breadcrumbs: string[] }> = ({ breadcrumbs }) => {
  return (
    <div className="bg-teal-700 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for answers"
            className="w-full p-3 rounded-md text-gray-800"
          />
        </div>

        {/* Breadcrumbs */}
        <nav className="text-sm">
          {breadcrumbs.map((crumb, index) => {
            const href =
              index === 0
                ? "/help-center"
                : `/help-center/${crumb.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <React.Fragment key={index}>
                <Link href={href} className="hover:underline">
                  {crumb}
                </Link>
                {index < breadcrumbs.length - 1 && " > "}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default HeroSection;
