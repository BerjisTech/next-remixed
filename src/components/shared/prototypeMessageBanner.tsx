import React from "react";
import Image from "next/image";
import Link from "next/link";

const StillPrototype = () => {
  return (
    <div className="inline-flex px-6 py-4 gap-3 rounded-2xl bg-secondary">
      <Image
        src="/next/next_assets/images/icons/puzzle-piece-01.svg"
        alt="Puzzle icon"
        width="24"
        height="24"
      />
      <p className="text-base font-medium leading-normal">
        This page is a preview and isn’t fully functional yet. Feel free to explore, and if you have
        a moment, share your thoughts with us through{" "}
        <span className="text-primary font-semibold hover:underline">
          <Link
            href="https://www.surveymonkey.com/r/proz_alpha"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short survey.
          </Link>
        </span>{" "}
        Your feedback helps us improve —Thank you!
      </p>
    </div>
  );
};

export default StillPrototype;
