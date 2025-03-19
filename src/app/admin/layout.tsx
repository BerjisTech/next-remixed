import React, { ReactNode } from "react";
import AdminSidebar from "./_adminSidebar";

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex items-start justify-between">
      <div className="sticky top-[70px]">
        <AdminSidebar />
      </div>
      <div className="w-full px-5 py-5">{children}</div>
    </div>
  );
};

export default AdminLayout;
