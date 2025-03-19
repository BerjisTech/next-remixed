import Image from "next/image";
import Link from "next/link";
import React from "react";

const Prototype = () => {
  return (
    <div className="w-full bg-primary flex items-center justify-center gap-2 p-2 dark:border-b dark:border-white">
      <Image
        src="/next/next_assets/images/icons/puzzle-piece-white.svg"
        alt="Puzzle icon"
        width="20"
        height="20"
      />
      <p className="text-primary-foreground text-sm">
        This page is a preview and isn’t fully functional yet. Feel free to explore, and if you have
        a moment, share your thoughts with us through{" "}
        <Link
          className="hover:underline"
          href="https://www.surveymonkey.com/r/proz_alpha"
          target="_blank"
          rel="noopener noreferrer"
        >
          this short survey.
        </Link>
        {/* </span> */} Your feedback helps us improve — Thank you!
      </p>
    </div>
  );
};

export default Prototype;
