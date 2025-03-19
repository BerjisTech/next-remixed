import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { CalendarIcon } from "lucide-react";
import { Button } from "../button";
import { format } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import React from "react";
import { cn } from "@/utils/helpers";
import { Calendar } from "../calendar";
import HelpTooltip from "@/components/shared/helpTooltip";

interface RenderInputProps {
  name: string;
  type?: "text" | "number";
  helpText?: string;
  disabled?: boolean;
  label: string;
  form: UseFormReturn<any>;
}

export const RenderDatePicker: React.FC<RenderInputProps> = ({
  form,
  name,
  label,
  disabled = false,
  helpText = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col mt-[10px]">
          <FormLabel>
            {label}&nbsp;
            {helpText && <HelpTooltip helpText={helpText} />}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  disabled={disabled}
                  variant={"outline"}
                  className={cn(
                    "h-10  pl-3 text-left font-normal rounded",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
