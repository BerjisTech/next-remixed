import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-6 p-6 rounded-3xl bg-accent">
      <div className="flex flex-col justify-start items-center w-full gap-1">
        <p className="text-base text-center text-dark-blue-hue">
          First survey for alpha testers:{" "}
          <a href="https://www.surveymonkey.com/r/GJFH987" className="text-blue-500 underline">
            https://www.surveymonkey.com/r/GJFH987
          </a>
          <br />
          Responses:{" "}
          <a
            href="https://www.surveymonkey.com/results/SM-ChtKyQGI7wyTjzlcgMGJ_2Bg_3D_3D/"
            className="text-blue-500 underline"
          >
            https://www.surveymonkey.com/results/SM-ChtKyQGI7wyTjzlcgMGJ_2Bg_3D_3D/
          </a>
          &nbsp;(Password: newsite2024)
          <br />
          <br />
          <strong>Updated survey for alpha testers (18 Sept): </strong>
          <a href="https://www.surveymonkey.com/r/WV9JZF6" className="text-blue-500 underline">
            https://www.surveymonkey.com/r/WV9JZF6
          </a>
          <br />
          Responses:{" "}
          <a
            href="https://www.surveymonkey.com/stories/SM-Q9KuIibuir8gvnLZv6kE4w_3D_3D/"
            className="text-blue-500 underline"
          >
            https://www.surveymonkey.com/stories/SM-Q9KuIibuir8gvnLZv6kE4w_3D_3D/
          </a>
          &nbsp;(Password: newsite2024)
        </p>
      </div>
    </div>
  );
};

export default Feedback;
