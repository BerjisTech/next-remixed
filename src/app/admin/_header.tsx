import React from "react";

interface AdminHeaderProps {
  title: string;
  description: string;
}
const AdminHeader: React.FC<AdminHeaderProps> = ({ title, description }) => {
  return (
    <div className="p-5 bg-primary text-primary-foreground rounded-lg mb-5">
      <h3 className="font-bold">{title}</h3>
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  );
};

export default AdminHeader;
