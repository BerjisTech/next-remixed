import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const notificationVariants = cva(
  "my-5 text-[14px] flex flex-col md:flex-row items-start justify-between rounded-md p-3 border-[2px] border-solid",
  {
    variants: {
      type: {
        error: "bg-red-100 border-red-500 text-red-600",
        warning: "bg-yellow-100 border-yellow-500 text-yellow-600",
        success: "bg-green-100 border-green-500 text-green-600",
        info: "bg-blue-100 border-blue-500 text-blue-600",
        default: "bg-orange-100 border-orange-500 text-orange-600",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

interface ProzNotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title: string;
  message: string;
  link_text?: string;
  link_url?: string;
  icon?: React.ReactNode;
}

const ProzNotification: React.FC<ProzNotificationProps> = ({
  title,
  message,
  link_text,
  link_url,
  icon,
  type,
  className,
  ...props
}) => {
  return (
    <div className={clsx(notificationVariants({ type }), className)} {...props}>
      <div>
        <span className="material-symbols-outlined" role="button">
          {icon}
        </span>
      </div>
      <div className="flex-grow">
        <p
          className={clsx({
            "text-red-800": type === "error",
            "text-yellow-800": type === "warning",
            "text-green-800": type === "success",
            "text-blue-800": type === "info",
            "text-orange-800": type === "default",
          })}
        >
          {title}
        </p>
        <p
          className={clsx({
            "text-red-600": type === "error",
            "text-yellow-600": type === "warning",
            "text-green-600": type === "success",
            "text-blue-600": type === "info",
            "text-orange-600": type === "default",
          })}
        >
          {message}
        </p>
        {link_text && link_url && (
          <a
            href={link_url}
            className={clsx("flex flex-row items-start justify-start gap-2", {
              "text-red-800": type === "error",
              "text-yellow-800": type === "warning",
              "text-green-800": type === "success",
              "text-blue-800": type === "info",
              "text-orange-800": type === "default",
            })}
          >
            <span>{link_text}</span>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        )}
      </div>
      <div>
        <span
          className={clsx("material-symbols-outlined", {
            "text-red-800": type === "error",
            "text-yellow-800": type === "warning",
            "text-green-800": type === "success",
            "text-blue-800": type === "info",
            "text-orange-800": type === "default",
          })}
          role="button"
        >
          close
        </span>
      </div>
    </div>
  );
};

export default ProzNotification;
