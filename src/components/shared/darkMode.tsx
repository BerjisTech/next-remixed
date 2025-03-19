"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <React.Fragment>
      {mounted && (
        <div className="flex items-center">
          {resolvedTheme === "dark" ? (
            <Sun className="text-yellow-600 cursor-pointer" onClick={(e) => setTheme("light")} />
          ) : (
            <Moon className="text-yellow-600 cursor-pointer" onClick={(e) => setTheme("dark")} />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default DarkMode;
