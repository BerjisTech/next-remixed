import { CommunityResourcesSummary } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

interface CommunityResourcesProps {
  communityResourcesSummary?: CommunityResourcesSummary;
}
const CommunityResources: React.FC<CommunityResourcesProps> = ({ communityResourcesSummary }) => {
  return (
    <div className="w-full mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/grommet-icons_resources.svg"
          alt="Community & resources"
          width={30}
          height={30}
        />

        <h3 className="text-primary text-[20px] dark:text-primary">Community & resources</h3>
      </div>
      <div className="xs:block md:flex items-center justify-between gap-3">
        <div className="md:w-1/2 sm:w-full mt-3 flex flex-col gap-3 mr-10">
          <div className="w-full flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              Invoices
            </span>
            <span className="dark:text-primary">
              {/* <!-- No invoices yet --> */}
              {communityResourcesSummary
                ? communityResourcesSummary.invoices == 0
                  ? "No invoices yet"
                  : communityResourcesSummary.invoices == 1
                    ? "1 invoice"
                    : communityResourcesSummary.invoices + " invoices"
                : "No invoices yet"}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              Service agreements
            </span>
            <span className="dark:text-primary">
              {/* <!-- 2 agreements --> */}
              {communityResourcesSummary
                ? communityResourcesSummary.service_agreement_count == 0
                  ? "No agreements yet"
                  : communityResourcesSummary.service_agreement_count == 1
                    ? "1 agreement"
                    : communityResourcesSummary.service_agreement_count + " agreements"
                : "No agreements yet"}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              Purchase orders lists
            </span>
            <span className="dark:text-primary">
              {/* <!-- No lists yet --> */}
              {communityResourcesSummary
                ? communityResourcesSummary.user_list_data == 0
                  ? "No POs yet"
                  : communityResourcesSummary.user_list_data == 1
                    ? "1 list"
                    : communityResourcesSummary.user_list_data + " lists"
                : "No POs yet"}
            </span>
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full mt-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              Terminology questions
            </span>
            <span className="dark:text-primary">
              {communityResourcesSummary
                ? communityResourcesSummary.user_terminology_questions_count == 0
                  ? "No open questions"
                  : communityResourcesSummary.user_terminology_questions_count == 1
                    ? "1 open question"
                    : communityResourcesSummary.user_terminology_questions_count + " open questions"
                : "No open questions"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              KudoZ points
            </span>
            <span className="dark:text-primary">
              {communityResourcesSummary
                ? communityResourcesSummary.kudoz_points == 0
                  ? "No KudoZ points yet"
                  : communityResourcesSummary.kudoz_points == 1
                    ? "1 KudoZ point"
                    : communityResourcesSummary.kudoz_points + " KudoZ points"
                : "No KudoZ points yet"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
              role="button"
            >
              Personal glossaries
            </span>
            <span className="dark:text-primary">
              {communityResourcesSummary
                ? communityResourcesSummary.user_glossaries_count == 0
                  ? "No glossaries yet"
                  : communityResourcesSummary.user_glossaries_count == 1
                    ? "1 glossary"
                    : communityResourcesSummary.user_glossaries_count + " glossaries"
                : "No glossaries yet"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityResources;
