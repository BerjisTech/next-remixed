import React from "react";

const Discussions = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-6 p-6 rounded-3xl bg-accent">
      <div className="flex flex-col justify-start items-center w-full gap-1">
        <p className="text-base text-center text-dark-blue-hue">
          A private forum has been set up for beta testers to discuss the prototype and planned new
          site. See:{" "}
          <a href="https://www.proz.com/forum/2267" className="text-blue-500 underline">
            https://www.proz.com/forum/2267
          </a>
          <br />
          (If you don't have access, add yourself to that private forum here:{" "}
          <a
            href="https://www.proz.com/?sp=lists&mode=edit&group_list_id=4202"
            className="text-blue-500 underline"
          >
            https://www.proz.com/?sp=lists&mode=edit&group_list_id=4202
          </a>
          )
        </p>
      </div>
    </div>
  );
};

export default Discussions;
