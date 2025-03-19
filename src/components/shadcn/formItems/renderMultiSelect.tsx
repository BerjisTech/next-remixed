import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { UseFormReturn } from "react-hook-form";
import { MultiSelect } from "../multi-select";
import HelpTooltip from "@/components/shared/helpTooltip";

interface Option {
  value: string;
  label: string;
}

interface RenderMultiSelectProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  options: Option[];
  helpText?: string;
  placeholder?: string;
  maxCount?: number; // Optional: Maximum number of selectable items
  animation?: number; // Optional: Animation type for the MultiSelect
  variant?: "default" | "secondary" | "destructive" | "inverted"; // Optional: Variant styling
}
export const RenderMultiSelect = ({
  form,
  name,
  label = "",
  options,
  helpText = "",
  placeholder = "",
  maxCount = 3,
  animation = 2,
  variant = "inverted",
}: RenderMultiSelectProps) => {
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
            <FormControl>
              <MultiSelect
                options={options}
                onValueChange={(selectedValues) => {
                  field.onChange(selectedValues); // Update form state
                }}
                value={field.value} // Bind value from react-hook-form
                defaultValue={field.value}
                placeholder={placeholder}
                maxCount={maxCount}
                animation={animation}
                variant={variant}
              />
            </FormControl>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
