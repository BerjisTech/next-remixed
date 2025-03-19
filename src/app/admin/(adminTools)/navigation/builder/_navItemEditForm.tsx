"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { NavItem } from "@/interfaces/navigation/menu-items";
import clsx from "clsx";
import { useNavigationHook } from "@/hooks/useNavigationHook";

interface NavItemEditFormProps {
  navItem: NavItem;
  onEditComplete: () => void; // Callback to refresh or close form after editing
  floating?: boolean;
}

const NavItemEditForm: React.FC<NavItemEditFormProps> = ({
  navItem,
  onEditComplete,
  floating = false,
}) => {
  const { fetchNavLinks, updateNavLink } = useNavigationHook();
  const [localNavItem, setLocalNavItem] = useState(navItem);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof NavItem) => {
    setLocalNavItem({ ...localNavItem, [key]: event.target.value });
  };

  const handleUpdateNavItem = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!confirm("Are you sure you want to update this item?")) return;

    setIsSubmitting(true);
    try {
      const response = await updateNavLink(localNavItem);
      if (response.success) {
        toast.success(`Successfully updated ${localNavItem.name}`);
        await fetchNavLinks(); // Refresh the navigation items if needed
        onEditComplete(); // Close the edit form or refresh list
      } else {
        toast.error(`Failed to update ${localNavItem.name}`);
      }
    } catch (error: any) {
      toast.error(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleUpdateNavItem}
      className={`flex ${
        floating
          ? "bg-white dark:bg-black z-[500000] fixed bottom-5 right-5 flex-col w-[300px] h-[500px] overflow-y-auto p-2 shadow-md items-start justify-start"
          : "items-center justify-start w-full h-full flex-wrap"
      }`}
    >
      {/* Close icon if floating is true */}
      {floating && (
        <div className="w-full flex items-center justify-end">
          <span
            className="material-symbols-outlined text-primary dark:text-primary px-3"
            role="button"
            onClick={onEditComplete}
          >
            close
          </span>
        </div>
      )}
      {Object.entries(localNavItem).map(([key, value]) => (
        <label
          key={key}
          className={clsx("flex flex-col items-start p-2 border border-gray-300", {
            hidden: key === "nav_item_id",
          })}
        >
          <p className="capitalize text-sm text-gray-400">{key}</p>
          <input
            type={key === "nav_item_id" ? "hidden" : "text"}
            name={key}
            title={key}
            placeholder={key}
            value={value as string}
            onChange={(e) => handleInputChange(e, key as keyof NavItem)}
            className="h-full w-full outline-none focus:outline-none dark:bg-dark dark:text-accent-foreground"
          />
        </label>
      ))}
      <button
        type="submit"
        className="bg-primary text-accent-foreground dark:bg-primary p-2 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default NavItemEditForm;
