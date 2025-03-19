import React from "react";

interface PageProps {
  category: string;
}

export default function HeroSection({ category }: PageProps) {
  return (
    <div className="bg-primary-50 dark:bg-black p-[50px_80px_50px_80px]">
      <div className="max-w-7xl flex flex-col items-center justify-center gap-8 m-auto text-center text-dark-blue-hue">
        {(!category ||
          !["discount", "pre-registration", "post-registration"].includes(category)) && (
          <React.Fragment>
            <h1 className="text-primary-600 font-merriweather text-4xl font-bold">
              ProZ professional membership
            </h1>
            <p className="text-2xl">Serving freelance language professionals since 1999.</p>
          </React.Fragment>
        )}
        {category === "pre-registration" && (
          <React.Fragment>
            <h1 className="text-primary-600 font-merriweather text-4xl font-bold">
              Special offers on ProZ membership for new registrants
            </h1>
            <p className=" text-2xl">
              Membership in the world's largest community of language professionals has its
              advantages.
            </p>
          </React.Fragment>
        )}
        {category === "post-registration" && (
          <React.Fragment>
            <p className=" text-2xl"> Now, where were we? </p>
            <h1 className="text-primary-600 font-merriweather text-4xl font-bold">
              Special offers on ProZ membership for new registrants
            </h1>
            <p className=" text-2xl">
              Membership in the world's largest community of language professionals has its
              advantages.
            </p>
          </React.Fragment>
        )}
        {category === "discount" && (
          <React.Fragment>
            <h1 className="text-primary-600 font-merriweather text-4xl font-bold">
              Special offers on ProZ membership
            </h1>
            <p className=" text-2xl">
              Membership in the world's largest community of language professionals has its
              advantages.
            </p>
            <p className="text-sm italic font-normal text-center">
              ProZ members have reported an average return on their membership investment of $4,000,{" "}
              <br /> in addition to the long-term income that comes from establishing lasting
              relationships with new clients who find them through ProZ.
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
