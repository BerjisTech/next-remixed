"use client";

import { Button } from "@/components/shadcn/button";
interface HIPAAAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: any;
}

export const HIPAAAgreementModal: React.FC<HIPAAAgreementModalProps> = ({
  isOpen,
  onClose,
  userInfo,
}) => {
  // Now that all hooks have been called, conditionally render.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-accent rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-300">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-primary text-lg font-semibold">
            Business Associate Agreement (HIPAA)
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-grey-700 text-sm">
          <h3 className="text-primary font-bold text-center text-lg mb-4">
            BUSINESS ASSOCIATE AGREEMENT (HIPAA)
          </h3>

          <p>
            This Privacy Agreement ("Agreement") is effective upon signing this Agreement and is
            entered into by and between ProZ.com LLC ("Organization") and {userInfo?.contact_first}{" "}
            (the "Business Associate").
          </p>

          <h4 className="text-primary font-semibold">I. Term</h4>
          <p>
            This Agreement shall remain in effect for the duration of this Agreement and shall apply
            to all the Services and/or Supplies delivered by the Business Associate pursuant to this
            Agreement.
          </p>

          <h4 className="text-primary font-semibold">II. HIPAA Assurances</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Recognize that HITECH (the Health Information Technology for Economic and Clinical
              Health Act of 2009) and the regulations thereunder (including 45 C.F.R. Sections
              164.308, 164.310, 164.312, and 164.316), apply to a business associate of a covered
              entity in the same manner that such sections apply to the covered entity;
            </li>
            <li>Not disclose PHI except as permitted by law;</li>
            <li>
              Not use or further disclose the PHI in a manner that had the Organization done so,
              would violate the requirements of HIPAA;
            </li>
            <li>
              Use appropriate safeguards (including implementing administrative, physical, and
              technical safeguards for electronic PHI) to protect the confidentiality, integrity,
              and availability of and to prevent the use or disclosure of the PHI other than as
              provided for by this Agreement;
            </li>
            <li>
              Comply with each applicable requirements of 45 C.F.R. Part 162 if the Business
              Associate conducts Standard Transactions for or on behalf of the Organization;
            </li>
            <li>
              Report promptly to the Organization any security incident or other use or disclosure
              of PHI not provided for by this Agreement of which Business Associate becomes aware;
            </li>
            <li>
              Ensure that any subcontractors or agents who receive or are exposed to PHI (whether in
              electronic or other format) are explained the Business Associate obligations under
              this paragraph and agree to the same restrictions and conditions.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">
            III. Termination Upon Breach of Provisions.
          </h4>
          <p>
            Notwithstanding any other provision of this Agreement, the Organization may immediately
            terminate this Agreement if it determines that Business Associate breaches any term in
            this Agreement. Alternatively, the Organization may give written notice to Business
            Associate in the event of a breach and give Business Associate five (5) business days to
            cure such breach. The Organization shall also have the option to immediately stop all
            further disclosures of PHI to Business Associate if the Organization reasonably
            determines that Business Associate has breached its obligations under this Agreement. In
            the event that termination of this Agreement and the Agreement is not feasible, Business
            Associate hereby acknowledges that the Organization shall be required to report the
            breach to the Secretary of the U.S. Department of Health and Human Services,
            notwithstanding any other provision of this Agreement or Agreement to the contrary.
          </p>

          <h4 className="text-primary font-semibold">
            IV. Return or Destruction of Protected Health Information.
          </h4>
          <p>
            Upon the completion of any interpretation assignment, unless otherwise directed by the
            Organization, Business Associate shall either return or destroy all PHI received from
            the Organization or created or received by Business Associate on behalf of the
            Organization in which Business Associate maintains in any form. Business Associate shall
            not retain any copies of such PHI.
          </p>

          <h4 className="text-primary font-semibold">V. No Third-Party Beneficiaries.</h4>
          <p>
            The parties agree that the terms of this Agreement shall apply only to themselves and
            are not for the benefit of any third party beneficiaries.
          </p>

          <h4 className="text-primary font-semibold">VI. De-Identified Data.</h4>
          <p>
            Notwithstanding the provisions of this Agreement, Business Associate and its
            subcontractors may disclose non-personally identifiable information provided that the
            disclosed information does not include a key or other mechanism that would enable the
            information to be identified.
          </p>

          <h4 className="text-primary font-semibold">VII. Amendment</h4>
          <p>
            Business Associate and the Organization agree to amend this Agreement to the extent
            necessary to allow either party to comply with the Privacy Standards, the Standards for
            Electronic Transactions, the Security Standards, or other relevant state or federal laws
            or regulations created or amended to protect the privacy of patient information. All
            such amendments shall be made in a writing signed by both parties.
          </p>

          <h4 className="text-primary font-semibold">VIII. Interpretation.</h4>
          <p>
            Any ambiguity in this Agreement shall be resolved in favor of a meaning that permits the
            Organization to comply with the then most current version of HIPAA and the HIPAA privacy
            regulations.
          </p>

          <h4 className="text-primary font-semibold">IX. Definitions.</h4>
          <p>
            Capitalized terms used in this Agreement shall have the meanings assigned to them as
            outlined in HIPAA and its related regulations.
          </p>

          <h4 className="text-primary font-semibold">X. Survival.</h4>
          <p>
            The obligations imposed by this Agreement shall survive any expiration or termination of
            this Agreement.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-4 px-6 py-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose} className="bg-primary/10 text-primary">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HIPAAAgreementModal;
