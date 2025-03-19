"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

interface SideNavProps {
  navs: { name: string; link: string }[];
}

const SideNav: React.FC<SideNavProps> = ({ navs }) => {
  const [activeSubNav, setActiveSubNav] = useState<string>();

  const handleLinkClick = (link: string) => {
    setActiveSubNav(link);

    // Extract the fragment identifier from the link
    const hash = link.split("#")[1]; // Get the part after the # symbol (e.g., 'project-history')

    if (hash) {
      const targetElement = document.getElementById(hash); // Use getElementById instead of querySelector
      if (targetElement) {
        // Calculate the offset to account for the fixed card
        const offset = 1280; // Adjust this value based on your fixed card height

        // Ensure that the scroll is adjusted correctly
        window.scrollTo({
          top: targetElement.offsetTop - offset, // Subtract the offset to account for the fixed card
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <React.Fragment>
      {navs.map((item, index) => (
        <Link
          key={index}
          onClick={() => handleLinkClick(item.link)} // Use custom scroll behavior
          className={clsx(
            "flex justify-start items-center w-full h-11 text-sm relative gap-2.5 pl-4 pr-2.5 py-2.5 rounded-xl bg-accent",
            { "bg-primary text-white": activeSubNav === item.link }
          )}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </React.Fragment>
  );
};

export default SideNav;
