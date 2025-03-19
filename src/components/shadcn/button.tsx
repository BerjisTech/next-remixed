import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const buttonVariants = cva(
  "rounded-[12px] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-primary-foreground border-primary-500 hover:border-primary-700 hover:bg-primary-700 focus:shadow-[0px_0px_0px_4px_rgba(77,157,157,0.3)]",
        destructive:
          "text-destructive-foreground border border-[#D92D20] bg-[#D92D20] hover:border-[#B42318] hover:bg-[#B42318] focus:shadow-[0px_0px_0px_4px_rgba(217,45,32,0.3)]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        "outline-business":
          "border border-[#A061B3] bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-primary dark:text-primary-25 hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-accent text-primary hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 rounded-xl px-3 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-5",
        xl: "h-12 rounded-xl px-5",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
