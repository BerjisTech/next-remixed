"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Button } from "../shadcn/button";
import { Label } from "../shadcn/label";

interface SearchBarProps {
  onInputChange: (value: string) => void;
  underConstructionAlert?: string;
  exampleTexts?: string;
  defaultDimensions?: boolean;
  placeholder?: string;
  defaultValue?: string;
  label?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  underConstructionAlert = "",
  exampleTexts = "",
  defaultDimensions = true,
  placeholder = "",
  defaultValue = "",
  label = "",
}) => {
  const handleChange = (event: any) => {
    setSearchValue(event.target?.value ? event.target?.value : "");
  };

  const [searchValue, setSearchValue] = useState(defaultValue || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearchValue(defaultValue);
  }, []);

  const handleClick = (event: any) => {
    event.preventDefault();
    onInputChange(searchValue);
  };

  useEffect(() => {
    setSearchValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={clsx("relative w-full ", { "md:w-[70vw] lg:w-[50vw]": defaultDimensions })}>
      <Label
        htmlFor="search-input"
        className="text-sm font-medium flex justify-center text-gray-700 dark:text-white"
      >
        {label}
      </Label>
      <form
        id="search_directory"
        className="h-[46px] pl-4 pr-1.5 bg-background dark:bg-grey-900 rounded-custom shadow hover:shadow-lg transition border border-secondary hover:border-primary-100 flex items-center"
      >
        <input
          id="search_directory_input"
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          className="appearance-none bg-transparent grow shrink basis-0 outline-none text-dark dark:text-white text-xs font-normal leading-[18px] italic-placeholder"
        />
        <Button
          type="submit"
          onClick={handleClick}
          className="py-2 px-4 bg-secondary rounded-lg flex justify-center items-center gap-2"
        >
          <span className="text-primary dark:text-white text-xs font-semibold leading-[18px]">
            Search
          </span>
        </Button>
      </form>

      {underConstructionAlert && (
        <div className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gray-800 text-white text-sm rounded py-2 px-4 shadow-lg">
          {underConstructionAlert}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-t-gray-800"></div>
        </div>
      )}
      <div className="mt-2 text-dark text-xs font-normal font-['Poppins'] leading-[18px]">
        {exampleTexts}
      </div>
    </div>
  );
};

export default SearchBar;
