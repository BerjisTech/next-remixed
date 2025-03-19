"use client";
import VerticalTabs from "@/components/shared/verticalTabs";

const CpnTabs = () => {
  const tabs = [
    {
      id: 0,
      label: "Requirements for freelancers",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg">
            <div className="flex w-8 h-8 p-6 justify-center items-center bg-accent rounded-full mb-2">
              <span className="items-center justify-center">01</span>
            </div>
            <h3 className="text-xl font-semibold text-grey-700 dark:text-primary-200">
              Translation ability
            </h3>
            <p className="mt-4">
              A screening process has been developed in accordance with the guidelines set forth in
              the EN 15038 standard for quality in translation. For translators, various means are
              used to confirm the "competences" called for in EN 15038, including verification of
              credentials that applicants have earned from associations around the world, such as
              the American Translator Association (USA), the Chartered Institute of Linguists (UK).
              (Sample translation, peer/client review and other data may be considered in the review
              process, especially in language pairs and areas in which tested credentials may not be
              as readily accessible.)
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <div className="flex w-8 h-8 p-6 justify-center items-center bg-accent rounded-full mb-2">
              <span className="items-center justify-center">02</span>
            </div>
            <h3 className="text-xl font-semibold text-grey-700 dark:text-primary-200">
              Business reliability
            </h3>
            <p className="mt-4">
              The second requirement for admittance into the program is business reliability. This
              is assessed through a combination of peer review, client review and consideration of
              relevant data from the ProZ.com database. In the case of companies, track record both
              as a supplier and as a buyer may be considered. Once admitted to the program,
              participants must maintain good track records in order to remain in the program.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <div className="flex w-8 h-8 p-6 justify-center items-center bg-accent rounded-full mb-2">
              <span className="items-center justify-center">03</span>
            </div>
            <h3 className="text-xl font-semibold text-grey-700 dark:text-primary-200">
              Good citizenship
            </h3>
            <p className="mt-4">
              The third requirement for admittance into the program is "good citizenship".
              Participants must endorse and act in a manner consistent with the ProZ.com
              professional guidelines, they must accept the terms and conditions of program
              participation, and they must contribute to the upkeep of the program by remaining in
              good standing as members, in terms of membership fees, profile data, and adherence
              with site and program rules and regulations.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      label: "Requirements for translation companies",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg">
            <div className="flex w-8 h-8 p-6 justify-center items-center bg-accent rounded-full mb-2">
              <span className="items-center justify-center">02</span>
            </div>
            <h3 className="text-xl font-semibold text-grey-700 dark:text-primary-200">
              Business reliability
            </h3>
            <p className="mt-4">
              The first requirement for admittance into the program is business reliability. This is
              assessed through a combination of language service provider and client feedback, and
              consideration of relevant data from the ProZ.com database. Once admitted to the
              program, participants must maintain good track records in order to remain in the
              program.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <div className="flex w-8 h-8 p-6 justify-center items-center bg-accent rounded-full mb-2">
              <span className="items-center justify-center">02</span>
            </div>
            <h3 className="text-xl font-semibold text-grey-700 dark:text-primary-200">
              Good citizenship
            </h3>
            <p className="mt-4">
              The second requirement for admittance into the program is "good citizenship".
              Participants must endorse and act in a manner consistent with the ProZ.com
              professional guidelines, they must accept the terms and conditions of program
              participation, and they must contribute to the upkeep of the program by remaining in
              good standing as members, in terms of membership fees, profile data, and adherence
              with site and program rules and regulations.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <VerticalTabs tabs={tabs} />
    </div>
  );
};
export default CpnTabs;
