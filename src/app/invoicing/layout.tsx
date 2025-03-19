import type { Metadata } from "next";
import InvoicingHeader from "./_header";
import Sidenav from "./_sidenav";
import Overview from "./_overview";

export const metadata: Metadata = {
  title: "Proz.com Invoicing",
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

export default function InvoicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" pb-[100px] dark:bg-dark">
      <InvoicingHeader />
      <div className=" mt-10 container grid grid-cols-12 grid-rows-5 gap-6">
        <div className="col-span-9">{children}</div>
        <div className="col-start-10 col-span-3">
          <Overview />
          <Sidenav />
        </div>
      </div>
    </main>
  );
}
