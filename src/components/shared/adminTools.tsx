import React, { useState, useRef } from "react";
import ModsDropdown from "./modsDropdown";
import AdminDropdown from "./adminDropdown";

const AdminTools = () => {
  const [showModsDropdown, setShowModsDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  const modsDropdownRef = useRef<HTMLDivElement>(null);
  const adminDropdownRef = useRef<HTMLDivElement>(null);

  const hideAllDropDowns = (event: MouseEvent | React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (modsDropdownRef.current && !modsDropdownRef.current.contains(event.target as Node)) {
      setShowModsDropdown(false);
    }
    if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target as Node)) {
      setShowAdminDropdown(false);
    }
    if (!modsDropdownRef.current && !adminDropdownRef.current) {
      setShowModsDropdown(false);
      setShowAdminDropdown(false);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div
        id="switch_nav_and_footer"
        className="flex items-center justify-center text-xs dark:text-white hover:text-gray-300 dark:hover:bg-primary dark:hover:text-primary hover:bg-primary rounded-md p-2"
        role="button"
      >
        <span>Old menu</span>
        <span className="font-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#2E6969"
          >
            <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"></path>
          </svg>
        </span>
      </div>
      <span
        className="dark:text-white hover:text-gray-300 dark:hover:bg-primary dark:hover:text-primary hover:bg-primary rounded-md p-2 pseudo_menu"
        role="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.66671 8.66667C8.50766 8.66667 10 7.17428 10 5.33333C10 3.49238 8.50766 2 6.66671 2C4.82576 2 3.33337 3.49238 3.33337 5.33333C3.33337 7.17428 4.82576 8.66667 6.66671 8.66667Z"
            stroke="#2E6969"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.33337 14.0003C1.33345 13.161 1.53164 12.3335 1.91181 11.5852C2.29199 10.8368 2.84342 10.1888 3.52126 9.69378C4.1991 9.19875 4.9842 8.87069 5.81273 8.73629C6.64126 8.6019 7.48981 8.66495 8.28937 8.92032"
            stroke="#2E6969"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.0001 14C13.1046 14 14.0001 13.1046 14.0001 12C14.0001 10.8954 13.1046 10 12.0001 10C10.8955 10 10.0001 10.8954 10.0001 12C10.0001 13.1046 10.8955 14 12.0001 14Z"
            stroke="#2E6969"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.6667 14.6666L13.4 13.3999"
            stroke="#2E6969"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
      <span
        ref={modsDropdownRef}
        onClick={(e) => {
          hideAllDropDowns(e);
          setShowModsDropdown(!showModsDropdown);
        }}
        className="dark:text-white hover:text-gray-300 dark:hover:bg-primary dark:hover:text-primary hover:bg-primary rounded-md p-2 mod_menu"
        role="button"
      >
        Mod
        <ModsDropdown hideMenu={!showModsDropdown} />
      </span>
      <span
        ref={adminDropdownRef}
        className="dark:text-white hover:text-gray-300 dark:hover:bg-primary dark:hover:text-primary hover:bg-primary rounded-md p-2 admin_menu"
        role="button"
        onClick={(e) => {
          hideAllDropDowns(e);
          setShowAdminDropdown(!showAdminDropdown);
        }}
      >
        Admin
        <AdminDropdown hideMenu={!showAdminDropdown} />
      </span>
    </div>
  );
};

export default AdminTools;
