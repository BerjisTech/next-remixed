import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { UseFormReturn } from "react-hook-form";
import HelpTooltip from "@/components/shared/helpTooltip";

interface options {
  [key: string]: string;
}
interface RenderSelectProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  options: options;
  helpText?: string;
  placeholder?: string;
}
export const RenderSelect = ({
  form,
  name,
  label = "",
  options,
  helpText = "",
  placeholder = "",
}: RenderSelectProps) => {
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
          <Select defaultValue={field.value} onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={placeholder ? placeholder : "Select one of the options"}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Object.keys(options).map((item, index) => (
                <SelectItem key={index} value={item}>
                  {options[item]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
