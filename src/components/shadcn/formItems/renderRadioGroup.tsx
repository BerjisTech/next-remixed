import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import { Label } from "@/components/shadcn/label";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn/form";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import HelpTooltip from "@/components/shared/helpTooltip";

export interface RadioOption {
  value: number | string;
  label: string;
}

interface RenderRadioGroupProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: RadioOption[];
  helpText?: string; // Added optional helpText prop
}

export const RenderRadioGroup = <T extends FieldValues>({
  form,
  name,
  label,
  options,
  helpText, // Destructuring helpText prop
}: RenderRadioGroupProps<T>) => {
  const isNumber = typeof options[0].value == "number";
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            &nbsp;
            {helpText && <HelpTooltip helpText={helpText} />}
          </FormLabel>
          <FormControl>
            <RadioGroup
              value={isNumber ? field.value?.toString() : field.value}
              onValueChange={(e) => {
                field.onChange(isNumber ? Number(e) : e);
                console.log(e);
              }}
            >
              {options.map((option, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem value={option.value.toString()} id={`${name}-${index}`} />
                  <Label htmlFor={`${name}-${index}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
