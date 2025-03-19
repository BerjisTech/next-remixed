import React from "react";

const AdminDashboardOverview = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full gap-6 p-6 rounded-3xl bg-accent">
        <div className="flex flex-col justify-start items-center w-full gap-1">
          <p className="text-base text-center text-dark-blue-hue">
            Common workroom&nbsp;
            <a href="https://meet.google.com/cpx-wkyt-idy" className="text-blue-500 underline">
              https://meet.google.com/cpx-wkyt-idy
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full gap-6 p-6 rounded-3xl bg-accent">
        <div className="flex flex-col justify-start items-center w-full gap-1">
          <p className="text-base text-center text-dark-blue-hue">
            Online office&nbsp;
            <a
              href="https://spotvirtual.com/@proz-5a3e165a6dafd746/@office/@boardroom"
              className="text-blue-500 underline"
            >
              https://spotvirtual.com/@proz-5a3e165a6dafd746/@office/@boardroom
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardOverview;
