"use client";
import { Button } from "@/components/shadcn/button";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const activeTab = useSearchParams()?.get("tab");
  const [headerData, setHeaderData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (activeTab === "user-stories") {
      setHeaderData({
        title: "Success stories from ProZ.com members",
        description: "Testimonials and kind words from ProZ.com paying members..",
      });
    } else if (activeTab === "comments") {
      setHeaderData({
        title: "Comments from new ProZ.com members",
        description: "Testimonials and success stories from ProZ.com paying members.",
      });
    } else {
      setHeaderData({
        title: "Testimonials from ProZ.com members",
        description: "Testimonials and success stories from ProZ.com paying members.",
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col justify-start items-center w-full overflow-hidden gap-4 py-10 bg-accent dark:bg-black">
      <h1 className="flex-grow-0 text-3xl font-semibold text-center text-primary">
        {headerData.title}
      </h1>
      <p>{headerData.description}</p>
      <Button>
        Become a member! &nbsp;
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9688 15.8246L17.1407 21.6453L18.6646 18.2727L14.9173 13.1016L12.9688 15.8246Z"
            fill="#172591"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.19922 18.2722L7.74808 21.6197C10.571 17.6726 13.4189 13.7255 16.2168 9.77846C17.391 8.02975 17.5908 6.80565 15.6423 3.68295C15.4588 3.36836 15.2409 3.07512 14.9927 2.80859L15.2426 3.10837C15.3634 3.27543 15.4562 3.46106 15.5173 3.65797C15.9171 4.95701 13.219 8.55436 12.4446 9.65355C10.3711 12.5514 8.29767 15.3743 6.19922 18.2722Z"
            fill="#4C62E5"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8954 8.92936C11.2459 7.98006 10.5214 6.98079 10.0468 5.95655C9.87193 5.60681 9.42226 4.70747 9.34731 4.28278C9.29751 4.07758 9.29751 3.86345 9.34731 3.65824C9.40531 3.48796 9.4896 3.32781 9.59713 3.18359C9.533 3.26262 9.47456 3.3461 9.42226 3.43341C7.14893 6.706 7.44871 8.10496 8.52292 9.70379L9.94687 11.6274L11.8954 8.92936Z"
            fill="#4C62E5"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5436 2.38324C11.9769 2.35682 11.409 2.37352 10.8448 2.4332L10.4451 2.78295C10.3173 2.92374 10.2004 3.07407 10.0954 3.23261L9.92049 3.63232C9.88661 3.7542 9.8781 3.88174 9.89551 4.00704C9.90648 4.18363 9.93154 4.35906 9.97045 4.53166C9.98946 4.63298 10.0145 4.73309 10.0454 4.83144C11.6248 4.57344 13.2349 4.56501 14.8169 4.80645C14.8483 4.71673 14.8733 4.6249 14.8918 4.53166C14.9412 4.3697 14.9665 4.20135 14.9668 4.03203C14.9865 3.90682 14.978 3.77878 14.9418 3.6573C14.9007 3.50926 14.842 3.36669 14.7669 3.23261C14.6619 3.07407 14.545 2.92374 14.4172 2.78295L13.9925 2.40822L12.5436 2.38324Z"
            fill="#172591"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default Header;
