import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { UseFormReturn } from "react-hook-form";
import { TagsInput } from "../tagsInput";
import HelpTooltip from "@/components/shared/helpTooltip";

interface Option {
  value: string;
  label: string;
}

interface RenderMultiSelectProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  helpText?: string;
  placeholder?: string;
  maxCount?: number; // Optional: Maximum number of selectable items
  animation?: number; // Optional: Animation type for the MultiSelect
  variant?: "default" | "secondary";
}
export const RenderTagInput = ({
  form,
  name,
  label = "",
  helpText = "",
  placeholder = "",
  maxCount = 3,
  animation = 2,
  variant = "default",
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
              <TagsInput
                onTagsChange={(selectedValues) => {
                  field.onChange(selectedValues); // Update form state
                }}
                tags={field.value} // Bind value from react-hook-form
                placeholder={placeholder}
                maxCount={maxCount}
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
