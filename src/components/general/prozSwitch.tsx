import { useState } from "react";

interface SwitchProps {
  label: string;
  name?: string;
  value?: string;
  variableText?: string[];
  updateSetting?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateInPlace?: boolean;
  reverse?: boolean;
  updateValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProzSwitch: React.FC<SwitchProps> = ({
  label,
  name,
  value,
  variableText,
  updateInPlace = true,
  reverse = false,
  updateValue,
}) => {
  const [currentValue, setCurrentValue] = useState(value === "1" || value === "y");
  const [currentText, setCurrentText] = useState(variableText ? variableText[0] : label);

  const changeVariableText = () => {
    if (variableText) {
      setCurrentText(variableText[1] || variableText[0]); // Toggle between texts
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked ? 1 : 0;
    setCurrentValue(!!checked);
    changeVariableText();
    if (updateValue) {
      updateValue(event);
    }

    if (updateInPlace) {
      //     try {
      //         const data = await accountService.updateSettings(name, value ?? 'n', checked);
      //         if (data.success) {
      //             notificationService.notify('Notifications settings updated successfully', 'success');
      //         } else {
      //             notificationService.notify('Error updating notifications settings', 'error');
      //         }
      //     } catch (error) {
      //         notificationService.notify('Error updating notifications settings', 'error');
      //     }
    }
  };

  return (
    <label
      className={`w-full flex gap-2 items-center ${reverse ? "flex-row-reverse justify-end" : "flex-row justify-between"}`}
    >
      <span
        className={`${reverse ? "w-full" : "w-[calc(100%-100px)] ms-3"} text-wrap text-sm font-medium text-gray-900 dark:text-gray-300`}
      >
        {currentText}
      </span>
      <div className="w-[50px] flex items-end">
        <input
          checked={currentValue}
          type="checkbox"
          name={name}
          className="sr-only peer"
          onChange={handleChange}
        />
        <div className="relative w-[50px] h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[25px] rtl:peer-checked:after:-translate-x-[25px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600" />
      </div>
    </label>
  );
};

export default ProzSwitch;
