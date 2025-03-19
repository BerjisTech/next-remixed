import React from "react";
import ProzTooltip from "../shared/prozTooltip";
import { CircleHelp } from "lucide-react";
import clsx from "clsx";

interface CustomLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  helpText?: string;
  description?: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  label = "",
  helpText = "",
  description = "",
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-start items-start self-stretch relative gap-0.5",
        className
      )}
      {...rest}
    >
      <p className="text-lg font-semibold text-left text-dark-blue-hue dark:text-white">
        {label}
        {helpText && (
          <ProzTooltip message={helpText}>
            <CircleHelp className="inline text-primary h-3 w-3 mb-[2px] cursor-pointer" />
          </ProzTooltip>
        )}
      </p>
      {description && (
        <p className="self-stretch w-[649px] text-xs italic text-left text-dark-blue-hue dark:text-white">
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomLabel;
