import { cn } from "@/utils/helpers";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse bg-primary-300 rounded-custom", className)} {...props} />
  );
}

export { Skeleton };
