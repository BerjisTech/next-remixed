"use client";

import React, { useState } from "react";
import { NavItem } from "@/interfaces/navigation/menu-items";
import { toast } from "sonner";
import NavItemEditForm from "./_navItemEditForm";
import { useNavigationHook } from "@/hooks/useNavigationHook";

interface NavItemComponentProps {
  navItem: NavItem;
  navItems: NavItem[];
}

const NavItemComponent: React.FC<NavItemComponentProps> = ({ navItem, navItems }) => {
  const { deleteNavLink, updateNavLink } = useNavigationHook();
  const [showChildren, setShowChildren] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [draggedNavItem, setDraggedNavItem] = useState<NavItem | null>(null);

  const getNavChildren = () =>
    navItems.filter((item) =>
      item.parent_ids.split(",").map(Number).includes(Number(navItem.nav_item_id))
    );

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${navItem.name}?`)) {
      try {
        await deleteNavLink(parseInt(navItem.nav_item_id));
        toast.success("Successfully deleted navigation item");
      } catch {
        toast.error("Failed to delete navigation item");
      }
    }
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const onDragStart = (event: React.DragEvent, navItem: NavItem) => {
    setDraggedNavItem(navItem);
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const onDrop = async (event: React.DragEvent, targetNavItem: NavItem) => {
    event.preventDefault();
    if (
      confirm(
        `Are you sure you want to make ${draggedNavItem?.name} a child of ${targetNavItem.name}?`
      )
    ) {
      if (draggedNavItem) {
        // Update the parent_ids of the dragged item
        draggedNavItem.parent_ids = targetNavItem.nav_item_id.toString();
        try {
          const response = await updateNavLink(draggedNavItem);
          if (response) {
            toast.success(`Successfully moved ${draggedNavItem.name} under ${targetNavItem.name}`);
            // Fetch updated nav items
          } else {
            toast.error(`Failed to move ${draggedNavItem.name}`);
          }
        } catch (error) {
          toast.error(`Failed to move ${draggedNavItem.name}`);
        }
      }
      setDraggedNavItem(null);
    }
  };

  return (
    <div
      className="border my-2 rounded-md p-3"
      draggable
      onDragStart={(event) => onDragStart(event, navItem)}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, navItem)}
    >
      <div className="p-3 flex items-start justify-between gap-2">
        <div className="text-primary flex gap-2">
          <span className="material-symbols-outlined cursor-move" role="button">
            more_vert
          </span>
        </div>
        <div
          onClick={() => setShowChildren(!showChildren)}
          className="relative flex items-start justify-between gap-2 flex-grow h-full cursor-pointer"
        >
          {editMode && <NavItemEditForm navItem={navItem} onEditComplete={handleEditComplete} />}
          <span className="text-black dark:text-white">
            <span className="text-sm">({navItem.nav_item_id})</span> {navItem.name}
          </span>
          <span className="text-gray-400 dark:text-gray-600 flex-grow">
            Navigation details (last edited on, by)
          </span>
        </div>
        <div className="text-primary flex gap-2">
          <button className="material-symbols-outlined" onClick={() => setEditMode(!editMode)}>
            Edit
          </button>
          <button className="material-symbols-outlined" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="ps-[30px]">
        {showChildren &&
          getNavChildren().map((child) => (
            <NavItemComponent key={child.nav_item_id} navItem={child} navItems={navItems} />
          ))}
      </div>
    </div>
  );
};

export default NavItemComponent;
