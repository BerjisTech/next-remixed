import type { Metadata } from "next";
import MyProzSidebar from "./dashboard/_sidebar";

export const metadata: Metadata = {
  title: "Translator dashboard",
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between">
      <div className="sticky top-[70px] w-full lg:w-[300px]">
        <MyProzSidebar />
      </div>
      <div className="w-full lg:w-[calc(100vw-300px)] px-10 py-10">{children}</div>
    </div>
  );
}
