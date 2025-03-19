import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "../textarea";
import HelpTooltip from "@/components/shared/helpTooltip";

interface RenderTextAreaProps {
  name: string;
  type?: "text" | "number";
  helpText?: string;
  disabled?: boolean;
  label?: string;
  form: UseFormReturn<any>;
  placeholder?: string;
  maxLength?: number;
}

export const RenderTextArea: React.FC<RenderTextAreaProps> = ({
  form,
  name,
  label = "",
  disabled = false,
  type = "text",
  helpText = "",
  placeholder = "",
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
              <Textarea
                rows={5}
                cols={10}
                disabled={disabled}
                maxLength={maxLength ?? undefined}
                {...field}
                placeholder={placeholder}
                className="pr-16"
              />
              {maxLength && (
                <span className="absolute right-2 bottom-2 text-gray-500 text-sm">
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
