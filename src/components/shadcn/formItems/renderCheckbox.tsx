import { FormControl, FormField, FormItem, FormLabel } from "../form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Checkbox } from "../checkbox";

interface RenderInputProps {
  name: string;
  disabled?: boolean;
  label: string;
  form: UseFormReturn<any>;
}

export const RenderCheckbox: React.FC<RenderInputProps> = ({
  form,
  name,
  label = "",
  disabled = false,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
          <FormControl>
            <Checkbox
              disabled={disabled}
              checked={field.value === "y"}
              onCheckedChange={(checked) => field.onChange(checked ? "y" : "n")}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};
