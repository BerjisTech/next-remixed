"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SideMenuDropdownProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SideMenuDropdown: React.FC<SideMenuDropdownProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen); // Initialize state based on defaultOpen

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(defaultOpen); // If defaultOpen changes, update the state accordingly
  }, [defaultOpen]);

  return (
    <div className="flex flex-col gap-2">
      {/* Dropdown Trigger */}
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
        <p className="text-primary font-semibold">{title}</p>
        <ChevronDown
          className={`text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size="20"
        />
      </div>

      {/* Dropdown Content */}
      <div
        className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideMenuDropdown;
