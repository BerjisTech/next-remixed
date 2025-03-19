"use client";

import { useContentHook } from "@/hooks/useContentHook";
import { PencilLine } from "lucide-react";
import React from "react";

interface DrawerToggleProps {
  drawerName: string;
}

const EditButton: React.FC<DrawerToggleProps> = ({ drawerName }) => {
  const { setDrawerVisibility } = useContentHook();

  return (
    <PencilLine
      className="text-primary cursor-pointer"
      onClick={() => setDrawerVisibility(drawerName)}
    />
  );
};

export default EditButton;
