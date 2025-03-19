import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Image from "next/image";

const alertVariants = cva(
  "flex w-full p-4 items-start gap-3 rounded-[12px] border", // Main style
  {
    variants: {
      variant: {
        error: "border-[1px] border-[#FDA29B] bg-[#FFFBFA]",
        warn: "border-[1px] border-[#FEC84B] bg-[#FFFCF5]",
        success: "border-[1px] border-[#6CE9A6] bg-[#F6FEF9]",
        info: "border-[1px] border-[#D0D5DD] bg-[#FFF]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const titleStyles = cva("font-poppins text-[14px] font-semibold leading-[20px]", {
  variants: {
    variant: {
      error: "text-[#B42318]",
      warn: "text-[#B54708]",
      success: "text-[#027A48]",
      info: "text-[#344054]",
    },
  },
});

const descriptionStyles = cva("font-dm-sans text-[14px] font-normal leading-[20px]", {
  variants: {
    variant: {
      error: "text-[#B42318]",
      warn: "text-[#B54708]",
      success: "text-[#027A48]",
      info: "text-[#344054]",
    },
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  title: string;
  description: string | string[];
  className?: string;
}

const iconMap = {
  error: "error-icon.svg",
  warn: "warning-icon.svg",
  success: "success-icon.svg",
  info: "warning-icon.svg",
};

const Alert: React.FC<AlertProps> = ({ variant, title, description, className }) => {
  const defaultIcon = iconMap[variant || "error"];

  return (
    <div className={clsx(alertVariants({ variant }), className)}>
      {defaultIcon && (
        <div className="flex-shrink-0">
          <Image
            src={"/next/next_assets/images/svg/" + defaultIcon}
            alt={defaultIcon}
            width={30}
            height={30}
          />
        </div>
      )}
      <div className="flex flex-col">
        <div className={clsx(titleStyles({ variant }))}>{title}</div>
        <div className={clsx(descriptionStyles({ variant }))}>
          {Array.isArray(description) ? (
            <React.Fragment>
              {description.map((item, index) => (
                <p key={index}>
                  {index + 1} - {item}
                </p>
              ))}
            </React.Fragment>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
