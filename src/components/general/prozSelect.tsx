import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";

interface Option {
  key: string;
  value: string;
}

interface ProzSelectProps {
  name: string;
  label?: string;
  extraCSS?: string;
  options: { [key: string]: string } | string[];
  defaultValue?: string;
  isMulti?: boolean;
  onSelectedOptionsChange: (selectedOptions: (string | Option)[]) => void;
  fullWidth?: boolean;
  placeholder?: string;
}

const ProzSelect: React.FC<ProzSelectProps> = ({
  name,
  label,
  extraCSS = "",
  options,
  defaultValue = "",
  isMulti = false,
  onSelectedOptionsChange,
  fullWidth = false,
  placeholder = "Search...",
}) => {
  const [isObject, setIsObject] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<(string | Option)[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<(string | Option)[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeOptions();
    if (defaultValue) {
      selectOption(defaultValue);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const initializeOptions = () => {
    if (!options) return;
    if (Array.isArray(options)) {
      setIsObject(false);
      const formattedOptions = options.map(
        (element) => element.charAt(0).toUpperCase() + element.slice(1).replace(/_/g, " ")
      );
      setFilteredOptions(formattedOptions);
    } else {
      setIsObject(true);
      setFilteredOptions(Object.entries(options).map(([key, value]) => ({ key, value })));
    }
    if (defaultValue && !isMulti) {
      setSearchValue(defaultValue);
    }
  };

  const filterOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowOptions(true);
    if (!options) return;

    if (isObject) {
      const filtered = Object.entries(options)
        .filter(([key, value]) => value.toLowerCase().includes(value.toLowerCase()))
        .map(([key, value]) => ({ key, value }));
      setFilteredOptions(filtered);
    } else {
      const filtered = (options as string[]).filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const selectOption = (option: string | Option) => {
    let updatedOptions;
    if (isMulti) {
      if (selectedOptions.some((selected) => compareOptions(selected, option))) {
        updatedOptions = selectedOptions.filter((selected) => !compareOptions(selected, option));
      } else {
        updatedOptions = [...selectedOptions, option];
      }
      setSearchValue("");
    } else {
      updatedOptions = [option];
      setSearchValue(typeof option === "string" ? option : option.value);
      setShowOptions(false);
    }
    setSelectedOptions(updatedOptions);
    onSelectedOptionsChange(updatedOptions);
    initializeOptions(); // reinitialize to reset options
  };

  const compareOptions = (a: string | Option, b: string | Option) =>
    typeof a === "string" ? a === b : a.key === (b as Option).key;

  const isSelected = (option: string | Option) =>
    selectedOptions.some((selected) => compareOptions(selected, option));

  const displayValue = selectedOptions
    .map((option) => (typeof option === "string" ? option : option.value))
    .join(", ");

  return (
    <div
      ref={dropdownRef}
      className={clsx("relative flex items-center justify-center", { "w-full ": fullWidth })}
    >
      {label && <label>{label}</label>}
      <div className={clsx("relative flex items-center justify-center", { "w-full ": fullWidth })}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 absolute right-3"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M5.5 7.5L10.5 12.5L15.5 7.5"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input type="hidden" name={isObject ? name : ""} value={isObject ? displayValue : ""} />
        <input type="hidden" name={!isObject ? name : ""} value={!isObject ? displayValue : ""} />
        <input
          type="text"
          value={displayValue}
          onFocus={() => setShowOptions(true)}
          onInput={filterOptions}
          className={`${extraCSS} dark:bg-dark dark:border-black w-full bg-white text-dark dark:text-accent-foreground px-4 py-2 rounded-xl border focus:outline-none`}
          placeholder={placeholder}
        />
        {showOptions && filteredOptions.length > 0 && (
          <ul className="absolute top-[110%] z-[200000] w-full bg-white dark:bg-black border border-gray-300 dark:border-black dark:text-accent-foreground rounded-md shadow-lg mt-1 max-h-48 overflow-auto">
            {filteredOptions.map((option) => (
              <li
                key={typeof option === "string" ? option : option.key}
                onClick={() => selectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark"
              >
                {typeof option === "string" ? option : option.value}
                {isSelected(option) && <span>&nbsp;✔</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProzSelect;
