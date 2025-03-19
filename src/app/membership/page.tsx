import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row gap-10 justify-center items-center min-h-[40vh] flex-wrap">
      <Link href="/membership/business">
        <div className="max-w-sm rounded-xl overflow-hidden border border-gray-300 hover:shadow hover:shadow-purple-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Business membership</div>
            <p className="text-gray-700 text-base">
              Scale your translation business with enterprise features and team management tools.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/membership/professional">
        <div className="max-w-sm rounded-xl overflow-hidden border border-gray-300 hover:shadow hover:shadow-blue-600">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Professional membership</div>
            <p className="text-gray-700 text-base">
              Enhance your freelance translation career with professional tools and visibility.
            </p>
          </div>
        </div>
      </Link>
      {/* <Link href="/membership/premium">
                <div className="max-w-sm rounded-xl overflow-hidden border border-gray-300 hover:shadow hover:shadow-green-500">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Premium membership</div>
                        <p className="text-gray-700 text-base">
                            Get personalized support and premium features to maximize your success.
                        </p>
                    </div>
                </div>
            </Link> */}
    </div>
  );
};

export default page;
