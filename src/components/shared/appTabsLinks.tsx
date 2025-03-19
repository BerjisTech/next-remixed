import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface TabsData {
  name: string;
  link: string;
}

interface AppTabsLinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  index: number;
  centerText?: boolean;
  rounded?: boolean;
  tab: TabsData;
  isActive: boolean;
  roundedTop?: boolean;
}

const AppTabsLinks: React.FC<AppTabsLinksProps> = ({
  centerText = true,
  rounded = false,
  roundedTop = true,
  tab,
  isActive,
  ...rest
}) => {
  return (
    <Link href={tab.link} prefetch={true} {...rest}>
      <div
        className={clsx(
          "flex items-center flex-grow-0 flex-shrink-0 relative gap-1 text-[#525257] dark:text-accent-foreground",
          { "justify-center": centerText },
          { "justify-start": !centerText }
        )}
      >
        <p
          className={clsx(
            "flex-grow-0 flex-shrink-0 text-base text-left px-4 py-3 whitespace-nowrap",
            { "bg-green-gradient dark:bg-green-gradient-dark text-white": isActive },
            { "rounded-t-[9px]": roundedTop },
            { "rounded-[9px]": rounded }
          )}
        >
          {tab.name}
        </p>
      </div>
    </Link>
  );
};

export default AppTabsLinks;
