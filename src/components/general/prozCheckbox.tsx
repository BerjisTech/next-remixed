import { updatedSettings } from "@/lib/store/features/accountSlice/accountSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useState, ChangeEvent } from "react";

interface ProzCheckboxProps {
  name: string;
  value?: string;
  label?: string;
  note?: string;
  checked?: boolean;
  updateInPlace?: boolean;
  disabled?: boolean;
  onCheckboxValueChange?: (checked: boolean) => void;
}

const ProzCheckbox: React.FC<ProzCheckboxProps> = ({
  name,
  value,
  label,
  note,
  checked: initialChecked = false,
  updateInPlace = true,
  onCheckboxValueChange,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const dispatch = useAppDispatch();
  const { entityId } = useAppSelector((state) => state.profile);

  const updateSetting = (event: ChangeEvent<HTMLInputElement>) => {
    const targetChecked = event.target.checked ? 1 : 0;
    if (!updateInPlace) {
      return;
    }
    dispatch(
      updatedSettings({
        action: "update_settings",
        settings_area: name,
        value: value ?? "n",
        entity_id: entityId,
        checked: targetChecked,
      })
    );
    setChecked(targetChecked === 1);
    if (onCheckboxValueChange) {
      onCheckboxValueChange(targetChecked === 1);
    }
  };

  return (
    <label className="inline-flex items-center">
      <div className="relative flex items-center p-4 rounded-md cursor-pointer">
        <input
          disabled={disabled}
          name={name}
          type="checkbox"
          className="before:content-[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 text-teal-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-md before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-900 checked:before:bg-teal-900 hover:before:opacity-10"
          id={name}
          value={value}
          checked={checked}
          onChange={updateSetting}
        />
        <span className="absolute text-teal-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8" />
          </svg>
        </span>
      </div>
      <div className="mt-px font-light text-gray-700 dark:text-primary cursor-pointer select-none flex flex-col items-start justify-start">
        <span>{label}</span>
        <span className="text-gray-200">{note}</span>
      </div>
    </label>
  );
};

export default ProzCheckbox;
