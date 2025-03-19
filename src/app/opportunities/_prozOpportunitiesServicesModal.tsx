import { useState } from "react";
import { LANGUAGE_SERVICES_WITH_IDS } from "@/constants/common";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";

const Modal: React.FC<any> = ({
  isModalOpen,
  handleModalOpen,
  handleInputChange,
  saveCookieNoShowModal,
}) => {
  const [filteredServices, setFilteredServices] = useState(LANGUAGE_SERVICES_WITH_IDS);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Start your journey
        </h2>
        <Input
          type="text"
          placeholder="IE: Interpreting..."
          className="mt-4 p-2 border rounded w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
          onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            const filtered = LANGUAGE_SERVICES_WITH_IDS.filter((service) =>
              service.service_name.toLowerCase().includes(searchValue)
            );
            setFilteredServices(filtered);
          }}
        />
        <ul className="mt-4 h-60 overflow-y-auto">
          {filteredServices.map((service) => (
            <li
              key={service.service_id}
              className="p-2 cursor-pointer transition-all duration-100 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100"
              onClick={() => {
                handleInputChange(service.service_name);
                handleModalOpen();
              }}
            >
              {service.service_name}
            </li>
          ))}
        </ul>
        <Button
          onClick={handleModalOpen}
          className="w-full mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-alt hover:text-black dark:hover:text-gray-100"
        >
          Skip
        </Button>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:underline text-center">
          <a
            onClick={() => {
              handleModalOpen();
              saveCookieNoShowModal();
            }}
          >
            Don't show me this again
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
