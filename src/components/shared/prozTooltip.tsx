import React from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../shadcn/tooltip";

interface TooltipProps {
  message: string | React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const ProzTooltip: React.FC<TooltipProps> = ({ message, position = "top", children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={
            message && typeof message === "string" && (message as string).length > 100
              ? "right"
              : position
          }
          className="bg-black text-white border-none text-center max-w-60 test-sm"
        >
          <p>{message}</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProzTooltip;
