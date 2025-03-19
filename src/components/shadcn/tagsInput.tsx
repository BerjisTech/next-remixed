import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XCircle } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Command } from "./command";
import { cn } from "@/utils/helpers";
import { Button } from "./button";
import { Badge } from "./badge";
import { Input } from "./input";

// Variants for tag input component
const tagInputVariants = cva(
  "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
  {
    variants: {
      variant: {
        default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
        secondary:
          "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Props for the TagInput component
 */
interface TagInputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagInputVariants> {
  /**
   * The tags that are selected and will be shown in the input button.
   */
  tags: string[];

  /**
   * Callback function triggered when the tags change.
   */
  onTagsChange: (tags: string[]) => void;

  /**
   * Placeholder text for the input.
   */
  placeholder?: string;

  /**
   * The maximum number of tags to display.
   */
  maxCount?: number;

  /**
   * Modal behavior for the popover.
   */
  modalPopover?: boolean;

  /**
   * If true, the input will appear as a child of another component.
   */
  asChild?: boolean;

  /**
   * Additional class names for custom styles.
   */
  className?: string;
}

export const TagsInput = React.forwardRef<HTMLButtonElement, TagInputProps>(
  (
    {
      tags,
      onTagsChange,
      placeholder = "Add tags",
      maxCount = 5,
      modalPopover = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [localTags, setLocalTags] = React.useState<string[]>(tags);

    const handleAddTag = () => {
      if (inputValue.trim() && !localTags.includes(inputValue.trim())) {
        const newTags = [...localTags, inputValue.trim()];
        setLocalTags(newTags);
        onTagsChange(newTags);
        setInputValue(""); // Clear input after adding the tag
        setIsPopoverOpen(false); // Close popover
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleAddTag();
      }
    };

    const handleTagRemove = (tag: string) => {
      const newTags = localTags.filter((t) => t !== tag);
      setLocalTags(newTags);
      onTagsChange(newTags);
    };

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            {...props}
            onClick={() => setIsPopoverOpen(true)}
            className={cn(
              "flex h-10 w-full rounded-md border border-input min-h-10 items-center ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto",
              className
            )}
          >
            {localTags.length > 0 ? (
              <div className="flex flex-wrap items-center">
                {localTags.slice(0, maxCount).map((tag, index) => (
                  <Badge key={index} className="mr-2">
                    {tag}
                    <XCircle
                      className="ml-2 h-4 w-4 cursor-pointer"
                      onClick={() => handleTagRemove(tag)}
                    />
                  </Badge>
                ))}
                {localTags.length > maxCount && (
                  <Badge className="bg-transparent text-foreground border-foreground/1 hover:bg-transparent">
                    {`+ ${localTags.length - maxCount} more`}
                  </Badge>
                )}
              </div>
            ) : (
              <span className="text-sm">{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command className="p-2">
            <Input
              placeholder="Enter term"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

TagsInput.displayName = "TagsInput";
