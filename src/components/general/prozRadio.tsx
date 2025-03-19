import React, { useState } from "react";

interface ProzRadioButtonProps {
  name: string;
  value: string;
  label: string;
  note?: string;
  checked?: boolean;
  updateInPlace?: boolean;
}

const ProzRadioButton: React.FC<ProzRadioButtonProps> = ({
  name,
  value,
  label,
  note,
  checked,
  updateInPlace = true,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const updateSetting = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!updateInPlace) {
      return;
    }

    const newCheckedValue = event.target.checked ? 1 : 0;
    setIsChecked(event.target.checked);

    // try {
    //     const data = await accountService.updateSettings(name, value ?? 'n', newCheckedValue);
    //     if (data.success) {
    //         notificationService.notify('Notifications settings updated successfully', 'success');
    //     } else {
    //         notificationService.notify('Error updating notifications settings', 'error');
    //     }
    // } catch (error) {
    //     notificationService.notify('Error updating notifications settings', 'error');
    // }
  };

  return (
    <label className="inline-flex items-start">
      <div className="relative flex items-start p-3 rounded-full cursor-pointer">
        <input
          name={name}
          type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-200 text-teal-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-900 checked:before:bg-teal-900 hover:before:opacity-10"
          id={name}
          value={value}
          checked={isChecked}
          onChange={updateSetting}
        />
        <span className="absolute text-teal-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </div>
      <div className="mt-px font-light text-gray-700 pt-2 dark:text-primary cursor-pointer select-none flex flex-col items-start justify-start">
        <span>{label}</span>
        <span className="text-gray-200">{note}</span>
      </div>
    </label>
  );
};

export default ProzRadioButton;
