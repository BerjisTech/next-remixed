import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import HelpTooltip from "@/components/shared/helpTooltip";

interface RenderInputProps {
  name: string;
  type?: "text" | "number";
  helpText?: string;
  disabled?: boolean;
  label?: string;
  form: UseFormReturn<any>;
  maxLength?: number;
}

export const RenderInput: React.FC<RenderInputProps> = ({
  form,
  name,
  label = "",
  disabled = false,
  type = "text",
  helpText = "",
  maxLength,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}&nbsp;
              {helpText && <HelpTooltip helpText={helpText} />}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                type={type === "number" ? "number" : "text"}
                disabled={disabled}
                maxLength={maxLength ?? undefined}
                {...field}
                className="pr-16"
              />
              {maxLength && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  {field.value.length}/{maxLength}
                </span>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
