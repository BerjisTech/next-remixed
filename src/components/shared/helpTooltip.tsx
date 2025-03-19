import { CircleHelp } from "lucide-react";
import ProzTooltip from "./prozTooltip";

interface HelpTooltipProps {
  helpText?: string;
}

const HelpTooltip: React.FC<HelpTooltipProps> = ({ helpText }) => {
  if (!helpText) return null;

  return (
    <ProzTooltip message={helpText}>
      <CircleHelp className="inline !text-primary h-[14px] w-[14px] mb-[1px] cursor-pointer" />
    </ProzTooltip>
  );
};

export default HelpTooltip;
