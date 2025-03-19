import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { UseFormReturn } from "react-hook-form";
import HelpTooltip from "@/components/shared/helpTooltip";
import StarRating from "@/components/shared/starRating";

interface RenderStarRatingProps {
  name: string;
  label?: string;
  helpText?: string;
  form: UseFormReturn<any>;
}

const RenderStarRating: React.FC<RenderStarRatingProps> = ({
  form,
  name,
  label = "",
  helpText = "",
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
            <StarRating
              rating={Number(field.value) || 0}
              readonly={false}
              onChange={(val) => field.onChange(val)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RenderStarRating;
