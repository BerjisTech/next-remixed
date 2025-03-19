import { WixWebsites } from "@/interfaces/websites";
import Image from "next/image";

interface WebsiteCardProps {
  websites: WixWebsites[];
}
export default function WebsiteCard({ websites }: WebsiteCardProps) {
  const getWebsiteCardText = () => {
    return websites.length > 0
      ? "As a Premium subscriber, you get your own website designed by experts, at your own domain, included in the monthly fee for your first year."
      : "ProZ.com members with a Premium subscription get their own website designed by experts, at their own domain, included in the monthly fee for the first year.";
  };

  return (
    <div className="sm:w-[100%] md:w-[48%] mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/fluent-mdl2_website.svg"
          alt="Website"
          height="30"
          width="30"
          className="w-[30px] h-[30px]"
        />
        <h3 className="text-primary dark:text-primary  text-[20px]">Website</h3>
      </div>
      <p className="text-[16px] dark:text-primary">{getWebsiteCardText()}</p>
      {websites.length === 0 ? (
        <a
          href="#"
          target="_blank"
          className="inline-table text-white dark:text-primary text-center text-[14px] font-semibold bg-green-gradient dark:bg-green-gradient-dark p-3 rounded-xl"
        >
          Get started
        </a>
      ) : (
        <a
          href="#"
          target="_blank"
          className="inline-table text-white dark:text-primary text-center text-[14px] font-semibold bg-green-gradient dark:bg-green-gradient-dark p-3 rounded-xl"
        >
          {websites[0].website_name ? "Get started" : "Manage website"}
        </a>
      )}
    </div>
  );
}
