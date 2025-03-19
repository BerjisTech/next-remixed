import React from "react";

interface DirectoryCardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userData: any;
}

const DirectoryCardDrawer: React.FC<DirectoryCardDrawerProps> = ({ isOpen, onClose, userData }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-80 h-full bg-white shadow-xl pt-[75px] ml-auto">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          Close
        </button>
        <div className="p-4">
          {/* <h2 className="text-xl font-semibold mb-4">{userData.contact_first + ' ' + userData.contact_last }</h2> */}
          <h4 className="text-xl font-semibold mb-4">
            The user summary is not available yet. To close this tab{" "}
            <a className="cursor-pointer text-primary" onClick={onClose}>
              Click here
            </a>
            .
          </h4>
          {/* Add your drawer content here */}
        </div>
      </div>
    </div>
  );
};

export default DirectoryCardDrawer;
