import React from "react";

const UserLogging = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-6 p-6 rounded-3xl bg-accent">
      <div className="flex flex-col justify-start items-center w-full gap-1">
        <p className="text-base text-center text-dark-blue-hue">
          Google analytics&nbsp;
          <a
            href="https://analytics.google.com/analytics/web/#/p455096347/realtime/overview"
            className="text-blue-500 underline"
          >
            https://analytics.google.com/analytics/web/#/p455096347/realtime/overview
          </a>
        </p>
      </div>
      <div className="flex flex-col justify-start items-center w-full gap-1">
        <p className="text-base text-center text-dark-blue-hue">
          MSClarity&nbsp;
          <a
            href="https://clarity.microsoft.com/projects/view/mwgwz0lrjq/dashboard?date=Last%203%20days"
            className="text-blue-500 underline"
          >
            https://clarity.microsoft.com/projects/view/mwgwz0lrjq/dashboard?date=Last%203%20days
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserLogging;
