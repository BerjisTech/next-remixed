import React from "react";

interface NavItemEditIconProps {
  onEditIconClick: () => void;
}
const NavItemEditIcon: React.FC<NavItemEditIconProps> = ({ onEditIconClick }) => {
  const triggerNavItemEditForm = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    onEditIconClick();
  };

  return (
    <>
      <span
        className="material-symbols-outlined text-primary dark:text-primary px-3"
        role="button"
        onClick={(event) => triggerNavItemEditForm(event)}
      >
        edit
      </span>
    </>
  );
};

export default NavItemEditIcon;
