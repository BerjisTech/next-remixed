import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proz.com Membership",
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

export default function MembershipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className=" dark:bg-dark">{children}</main>;
}
