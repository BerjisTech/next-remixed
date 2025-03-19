import { Metadata } from "next";
import BusinessList from "./_list";

export const metadata: Metadata = {
  title: {
    default: "Freelance translators & Translation companies | ProZ.com ",
    template: "%s | ProZ.com",
  },
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
};

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <BusinessList />
    </div>
  );
};

export default Page;
