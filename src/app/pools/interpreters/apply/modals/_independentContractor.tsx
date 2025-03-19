"use client";

import React from "react";
import { Button } from "@/components/shadcn/button";

interface IndependentContractorAgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: any;
}

export const IndependentContractorAgreementModal: React.FC<
  IndependentContractorAgreementModalProps
> = ({ isOpen, onClose, userInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-accent bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-accent rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-300">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-primary text-lg font-semibold">Independent Contractor Agreement</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-grey-700 text-sm">
          <h3 className="text-primary font-bold text-center text-lg mb-4">
            INDEPENDENT CONTRACTOR AGREEMENT
          </h3>

          <p>
            This Independent Contractor Agreement ("Agreement") is effective upon signing and is
            entered into by and between ProZ.com LLC and{" "}
            {userInfo.contact_first || "the Contractor"} ("Contractor"), a language interpreter in
            the business of providing freelance language interpretation services. As of the
            Effective Date, this Agreement supersedes any and all, if any, prior agreements between
            ProZ.com and Contractor pertaining to the interpretation services that are the subject
            of this Agreement (the “Prior Agreements”), and any such Prior Agreements shall be
            considered to be terminated as of the Effective Date.
          </p>
          <p>
            WHEREAS, ProZ.com is in the business of connecting language interpreters to third party
            individuals, business entities and interpretation platforms ("Clients") who have need
            for interpretation services; and
          </p>
          <p>
            WHEREAS, ProZ.com desires to, from time to time, connect Contractor on a non-exclusive
            basis to provide interpretation services to Clients, and Contractor is willing to render
            such services; and
          </p>
          <p>
            WHEREAS, the parties desire to reduce to writing their agreement outlining their
            relationship and their mutual rights and obligations.
          </p>
          <p>THEREFORE, ProZ.com and Contractor agree as follows:</p>

          <h4 className="text-primary font-semibold">DEFINITIONS</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              "Client" means the third party individual, business entity or institution, or
              interpretation platform which contracts with ProZ.com to arrange for the
              Interpretation Services to be provided by the ProZ.com Interpreter Pool.
            </li>
            <li>
              "ProZ.com Interpreter Pool" means a collection of all the pre-screened interpreters
              that ProZ.com makes available to Clients requiring interpretation services.
            </li>
            <li>
              "Contractor Information" means any information related to Contractor’s business and
              Contractor’s performance of Interpretation Services that is necessary to disclose to
              ProZ.com or a Client in the course of performing the Interpretation Services under
              this Agreement, including any information that is subject to Privacy Laws.
            </li>
            <li>
              "Interpretation Opportunity" means an offer by ProZ.com to Contractor to perform
              on-demand or pre-scheduled Interpretation Services for one or more Clients that may be
              offered to or requested by ProZ.com to be performed by Contractor from time to time
              and accepted or rejected by Contractor in Contractor’s sole and absolute discretion.
            </li>
            <li>
              "Personal Data" is defined as any information relating to an identified or
              identifiable natural person recorded in any form.
            </li>
            <li>
              “Personal Information” is defined as an individual's first name and last name or first
              initial and last name in combination with any one or more of the following data
              elements that relate to such individual: (i) Social Security number; (ii) driver's
              license number or state-issued identification card number; or (iii) financial account
              number, or credit or debit card number, with or without any required security code,
              access code, personal identification number or password, that would permit access to
              an individual’s financial account; provided, however, that “Personal Information”
              shall not include information that is lawfully obtained from publicly available
              information, or from federal, state or local government records lawfully made
              available to the general public.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">INTERPRETATION SERVICES</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Contractor will receive, from time to time, Referrals from ProZ.com to provide
              Interpretation Services to Clients as such Referrals may become available from time to
              time and some of these Referrals will occur on an on-demand basis.
            </li>
            <li>
              ProZ.com, in its sole discretion, may notify Contractor of available Interpretation
              Opportunities from time to time. Nothing in this Agreement shall be construed to
              require ProZ.com to make any minimum number of Referrals to Contractor. Nothing in
              this Agreement shall prevent ProZ.com from offering the same Interpretation
              Opportunity to the rest of the Interpreter Pool on a "first come, first served" or
              price bid basis.
            </li>
            <li>
              Whenever possible, at the time or before ProZ.com offers Contractor an Interpretation
              Opportunity, ProZ.com shall inform Contractor of any special requirements,
              limitations, or guidelines imposed by the Client, so that Contractor may be fully
              informed before deciding whether to accept or reject an Interpretation Opportunity.
            </li>
            <li>
              Contractor, in its sole discretion, is free to accept, reject or negotiate the terms
              (including proposed pricing) of any Interpretation Opportunity that may be offered by
              ProZ.com. On-demand calls as a whole are construed as an Interpretation Opportunity.
              In the event Contractor chooses to reject any Interpretation Opportunity, Contractor
              shall promptly notify ProZ.com of such rejection so that such Interpretation
              Opportunity may be offered to other contractors in a timely manner. Contractor shall
              have no obligation to accept any minimum number of Referrals from ProZ.com.
            </li>
            <li>
              Contractor acknowledges that ProZ.com’s continued ability to provide Referrals to
              Contractor and other providers of interpretation services rests on its reputation for
              referring interpreters to Clients who provide accurate, timely and professional
              interpretation services in accordance with such Clients’ needs. Therefore, Contractor
              understands that if Contractor accepts an assignment, it should perform such
              Interpretation Services for Client in an accurate, timely and professional manner and
              as reasonably required by the Client, and with due regard for the Client’s standards
              of conduct and decorum, and the ProZ.com Quality standards and ProZ.com privacy
              guidelines. Contractor understands that, in the event the Interpretation Services are
              not provided in this manner, Clients may demand that ProZ.com curtail a Referral.
              ProZ.com may, in such circumstances, remove the interpreter from the Interpreter Pool
              or revoke interpreter permissions to receive referrals.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">NON-DISCLOSURE</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              During the term of this Agreement and thereafter, Contractor shall protect and treat
              as confidential all confidential and/or proprietary information furnished, obtained or
              created pursuant to this Agreement (the "Confidential Information"), including,
              without limitation, items to be translated/interpreted, Client names and contact
              information, and all memoranda, correspondence, documents, data, and information
              related to the Interpretation Opportunities offered by ProZ.com or Interpretation
              Services provided by Contractor, and shall not disclose to any person any such
              information, except information which at the time is known generally to the public,
              and shall not use such Confidential Information other than as strictly required to
              perform the Services and shall otherwise safeguard the confidentiality of such
              Confidential Information using at least the same degree of effort used to protect its
              own confidential information, but in any event not less than a reasonable standard.
              Upon termination or expiration of this Agreement, Contractor shall return all property
              of ProZ.com or Client including, without limitation, Confidential Information and
              destroy any written material received by ProZ.com or Client containing any such
              Confidential Information. Contractor will take all necessary steps to ensure that no
              copies, electronic or otherwise, of such Confidential Information and materials are
              retained by Contractor. Contractor shall notify ProZ.com, in writing, of any
              unauthorized disclosure or use of any Confidential Information promptly upon such
              unauthorized disclosure or use coming to Contractor’s attention, and shall use
              commercially reasonable efforts to minimize the effect of any such disclosure or use.
            </li>
            <li>
              During the course of performing the Interpretation Services, Contractor may have
              access to Protected Health Information, Protected Personal Information, and/or Client
              Personal Information and Personal Data. Contractor will treat all such information as
              Confidential Information, in accordance with Section 7 of this Agreement. Contractor
              acknowledges that the performance of the Interpretation Services may require the
              processing of Protected Personal Information and Contractor shall comply with the
              obligations under applicable Privacy Laws when collecting, using, processing, sharing,
              or disposing of Protected Personal Information at all times, and will exercise at
              least the degree of care required by the applicable Privacy Laws. In particular and as
              a minimum, Contractor will collect, use, process, share and dispose of Protected
              Personal Information: (a) in a commercially reasonable manner designed to prevent
              unauthorized access to or use of Protected Personal Information; and (b) in accordance
              with all applicable Privacy Laws, and ProZ.com’s policies and procedures regarding
              privacy and information security (copies of which ProZ.com shall provide).
            </li>
            <li>
              (a) In the event of an actual or suspected Security Incident, Contractor shall
              immediately notify ProZ.com of the incident followed by a written notice within 48
              hours of the initial notice. The written report shall include, at a minimum subject to
              the availability of necessary information, the following: (i) a description of the
              incident; (ii) the date that the incident occurred; (iii) the date that the incident
              was discovered; (iv) the identity and last known mailing address of each affected
              individual; (v) the affected categories of information for each affected individual;
              (vi) an identification of any law enforcement agency that has been contacted about the
              incident and contact information for the relevant official; (vii) a description of the
              steps that have been, or will be, taken to mitigate the incident; (viii) a description
              of the steps that have been, or will be, taken to prevent a recurrence; and (ix)
              contact information for the person Contractor has designated as principally
              responsible for responding to the Security Incident. Contractor will update the
              written report periodically as material, new information becomes available. All
              reports required by this provision shall be made to interpreters@ProZ.com. (b) In
              addition to the notification referenced above, Contractor shall (i) with the written
              consent of the Client or ProZ.com, as appropriate, cooperate with ProZ.com and Client
              to immediately investigate, correct, mitigate, remediate and otherwise handle the
              Security Incident, including without limitation, by identifying Protected Personal
              Information affected by the Security Incident and taking reasonable steps to prevent
              the continuation and recurrence of the Security Incident; (ii) upon Client’s or
              ProZ.com’s requests, provide timely notices of the Security Incident to affected
              individuals to the extent and in the manner required by applicable Privacy Laws, and
              all information and assistance needed to enable ProZ.com or Client, as applicable, to
              provide timely notices disclosing a Security Incident; (iii) provide ProZ.com with all
              information and assistance needed to enable ProZ.com to evaluate the Security Incident
              including, without limitation, assistance to identify the names and contact
              information of affected individuals; and (iv) promptly reimburse ProZ.com and/or
              Client for all expenses (including attorneys’ fees) incurred by it in connection with
              its response to the Security Incident. (c) If Client requires that both Contractor and
              ProZ.com notify affected individuals following a Security Incident that constitutes a
              security breach as defined by applicable law, ProZ.com and Contractor will discuss
              whether it would be appropriate and feasible to provide a single form of notice. In
              addition, ProZ.com will have the right to approve (such approval not to be
              unreasonably withheld) notices provided by Contractor to the extent such notices
              identify ProZ.com or Client or could lead to a belief that ProZ.com or Client was
              involved in the Security Incident.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">DATA COLLECTION</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              By entering into this Agreement, Contractor consents to the collection, processing and
              storing of Contractor Information in the United States or a jurisdiction other than
              where Contractor resides. Access to Contractor Information will be limited to
              authorized persons. Contractor Information will be collected, processed and stored for
              business purposes related to the Interpretation Opportunities offered by ProZ.com,
              including payment of fees to Contractor for performance of the Interpretation
              Services. Contractor may exercise any rights conferred on Contractor by any Privacy
              Law with respect to Contractor Information by submitting a request to
              interpreters@proz.com.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">INDEPENDENTLY CONTRACTING PARTIES</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              (a) Contractor agrees, acknowledges and fully intends that Contractor and ProZ.com
              enter into this agreement as independently contracting parties. Contractor understands
              and agrees that it shall not be deemed an employee or agent of ProZ.com for any
              purposes. At no time may Contractor hold himself or herself out as being an officer or
              employee of ProZ.com or any Client. Contractor shall not participate in any employee
              benefit program of ProZ.com by reason of this Agreement or the relationship between
              the parties created by this Agreement. ProZ.com shall not be responsible for any
              state, federal or local payroll-related tax obligations related to the performance of
              the Interpretation Services by Contractor. Contractor shall be solely responsible for
              any and all federal, state and local income, self-employment and other taxes,
              including but not limited to contributions that may be required for social security,
              unemployment insurance or workers' compensation; and ProZ.com shall not withhold any
              sums from the payments to be made to Contractor for any such taxes or contributions.
              ProZ.com shall not and shall have no right to direct, supervise or control Contractor
              in the performance of Interpretation Services under this Agreement or the manner or
              means by which those Interpretation Services are performed. (b) Contractor is
              responsible in the conduct of its business, using its own methods and procedures, for
              complying with all applicable licensing requirements, laws, rules, ordinances and
              other requirements imposed by federal, state, county or municipal government
              authorities relating to and concerning the operation of Contractor’s business, and the
              provision of the Interpretation Services under this Agreement. (c) Contractor has the
              right to negotiate with ProZ.com regarding the terms of any Referral offered,
              including with respect to pricing, and is under no obligation to accept any Referral
              offered if the terms are not acceptable to Contractor. Any changes to the Referral
              negotiated between Contractor and Client are subject to approval by ProZ.com and by
              Client. In the event those changes are not accepted, Contractor is free to reject the
              Referral without penalty. Contractor acknowledges that ProZ.com has sole and complete
              discretion regarding which, if any, Referral to offer to Contractor, just as
              Contractor has the discretion whether to reject or accept any Referral offered. (d)
              With the exception of any technical glossary provided by ProZ.com, Contractor shall be
              solely responsible for all supplies, materials and equipment Contractor deems
              necessary for the performance of the Services, including but not limited to paper,
              pencils, dictionaries, laptop computers, internet service providers, "whisper systems"
              or otherwise.
            </li>
            <li>
              Nothing in this Agreement shall be construed to prevent Contractor from providing
              interpretation services – as a sole proprietor, as an employee, as an independent
              contractor, or in any other capacity – to any other entity or business, including but
              not limited to any competitor of ProZ.com. ProZ.com recognizes that Contractor is an
              independent contractor in the business of providing interpretation services.
              Therefore, nothing in this Agreement shall be construed to prevent Contractor from
              seeking or obtaining work directly from a Client of ProZ.com following termination of
              this Agreement for any reason or by either party.
            </li>
            <li>
              (b) In accordance with industry practice, Contractor acknowledges that the rates of
              payment represent the entire consideration payable to Contractor with respect any
              product (i.e., the interpretation, regardless of the medium in which it is recorded or
              maintained) produced as a result of Contractor's Interpretation Services (the "Work
              Product"), regardless of the nature or extent of its exploitation by Client, that it
              is fair and adequate and that in no event shall Contractor be entitled to any further
              compensation or consideration of any nature with regard to the Work Product or its
              exploitation.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">TERMINATION</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              This Agreement may be terminated at any time by either party, upon receipt of one (1)
              month’s prior written notice of termination; provided, however, that Contractor must
              complete the performance of any accepted Referrals outstanding at the time notice is
              given. Either party may terminate the agreement immediately upon written notice in the
              event of a material breach by the other party that cannot be cured by the breaching
              party. Written notice of termination based on a material breach must specify the
              breach relied upon.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">ESPECIAL PROVISIONS</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Contractor represents and warrants that neither it nor its representatives or agents
              has made, offered, promised or authorized, and will not make, offer, promise, or
              authorize, any offer or payment of anything of value to any person or organization,
              contrary to ProZ.com’s policies, the laws of the United States (including the U.S.
              Foreign Corrupt Practices Act) or the laws of any applicable country (including the UK
              Bribery Act 2010). This prohibition on the making of bribes applies equally to
              receiving or offering to receive bribes in relation to the performance of the Work. If
              Contractor learns of or has reason to know of any offer or payment of anything of
              value to any person or organization contrary to ProZ.com's policies, or the laws of
              any applicable country, then Contractor will promptly inform ProZ.com.
            </li>
            <li>
              Contractor acknowledges that it is not identified by OFAC (the U.S. Department of
              Treasury Office of Foreign Assets Control) as a “specially designated national”,
              designated, or blocked person, and that it is not a resident of a “blocked country” as
              identified by OFAC. If at any time Contractor’s status changes, such that Contractor
              become a “specially designated national”, designated, or blocked person, or resident
              of a "blocked country" by OFAC, Contractor will promptly inform ProZ.com and cease
              performing any Interpretation Services.
            </li>
            <li>
              Contractor represents and warrants that as of the Effective Date of this Agreement, it
              is not excluded, debarred, suspended, convicted or otherwise ineligible to participate
              in any government health care programs (e.g., Medicare, Medicaid, CHAMPUS) or
              government procurement and non-procurement programs (collectively, “Government
              Programs”). If during the term of this Agreement, Contractor becomes excluded,
              debarred, suspended, convicted or otherwise ineligible to participate in any
              Government Programs, Contractor shall disclose promptly by notice to ProZ.com details
              of such exclusion, debarment, suspension, conviction or other ineligibility, and this
              Agreement will terminate immediately. Upon the reasonable request of ProZ.com and from
              time to time, Contractor will certify to ProZ.com in writing Contractor’s compliance
              with the provisions of this Section 17.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">DATA SECURITY</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Contractor represents and warrants that: (a) it will comply with all security and
              network access requirements required by ProZ.com and Client, including but not limited
              to the secure transmission of e-mails and data, which requirements may be amended from
              time to time at the sole discretion of ProZ.com. ProZ.com agrees to provide reasonable
              written notice of any such amendments; (b) the Services, Work Product and any
              deliverables will not contain any computer virus or other similar harmful, malicious
              or hidden program, code or data; (c) any system that stores files must have current
              anti-virus software configured for automatic updates no less than once per week, and
              all systems that store Confidential Information, Services or Work Product must have
              reasonable up-to-date versions of system security agent software which must include
              malware protection and reasonably up-to-date patches and virus definitions; and (d) it
              will provide secure transmission and storage of Confidential Information, Services,
              Work Product and deliverables (whether by encryption or other equally protective
              measures), including but not limited to that such transmission and storage will not
              contain any computer virus or other similar harmful, malicious or hidden program, code
              or data.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">LIABILITIES</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ProZ.com shall not be liable to Contractor for any incidental, ancillary, indirect,
              special or consequential damages, including, but not limited to lost profits, whether
              in tort or contract and based on any theory of liability, even if it has been advised
              of the possibility of such loss or damages.
            </li>
            <li>
              Neither party will be liable for any delay or cancellation, or related damages or
              penalties, when such delay or cancellation is due to causes beyond its reasonable
              control, including without limitation, acts of God or of the public enemy, weather,
              acts of the government in either its sovereign or contractual capacity, acts of civil
              or military authority, fires, floods, epidemics, quarantine restrictions, strikes,
              freight embargoes, war or riots ("Force Majeure"). If such delay or cancellation
              occurs and persists for more than thirty (30) days, either party may, upon written
              notice to the other party, terminate this Agreement.
            </li>
            <li>
              Contractor acknowledges and agrees that Client for which it is performing Work under
              the terms of this Agreement is anintended third party beneficiary of this Agreement
              with the right to enforce the terms of this Agreement directly against Contractor.
            </li>
          </ul>

          <h4 className="text-primary font-semibold">GOVERNING LAW</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Except to the extent otherwise specifically provided in Section 24(b), if any one or
              more of the provisions contained in this Agreement shall be held illegal or
              unenforceable by a court, no other provision shall be affected.
            </li>
            <li>
              <p>
                (a) Governing Law. Except for the arbitration provision set forth in Section 24(b),
                below, and which is governed by the Federal Arbitration Act, this Agreement shall be
                governed by the laws of the state in which the majority of the Services under this
                Agreement are performed.
              </p>
              <p>
                (b) Arbitration—PLEASE READ. ProZ.com and Contractor mutually agree to resolve any
                disputes between them exclusively through final and binding arbitration instead of
                filing a lawsuit in court. This arbitration provision is governed by the Federal
                Arbitration Act (9 U.S.C. §§ 1-16) and shall apply, including, but not limited, to
                any and all claims arising out of or relating to this Agreement, the nature of the
                relationship between ProZ.com and Contractor, ProZ.com’s and/or Contractor’s
                provision of Services under this Agreement, the fees received by Contractor pursuant
                to this Agreement, the termination of this Agreement, and all other aspects of
                Contractor’s relationship with ProZ.com, past or present, whether arising under
                federal, state or local statutory and/or common law. Only an arbitrator, and not any
                federal, state, or local court or agency, shall have the exclusive authority to
                resolve any dispute relating to the interpretation, applicability, enforceability,
                or formation of this arbitration provision. However, as stated in Section 24(b)(4)
                below, the preceding clause shall not apply to the Class Action Waiver or
                Representative Action Waiver.
              </p>
              <p>
                BY AGREEING TO ARBITRATE ALL SUCH DISPUTES, THE PARTIES TO THIS AGREEMENT AGREE THAT
                ALL SUCH DISPUTES WILL BE RESOLVED THROUGH BINDING ARBITRATION BEFORE AN ARBITRATOR
                AND NOT BY WAY OF A COURT OR JURY TRIAL.
              </p>
              <p>
                (1) If either party wishes to initiate arbitration, the initiating party must notify
                the other party in writing via certified mail, return receipt requested, or hand
                delivery within the applicable statute of limitations period. This demand for
                arbitration must include (1) the name and address of the party seeking arbitration,
                (2) a statement of the legal and factual basis of the claim, and (3) a description
                of the remedy sought. Any demand for arbitration must be delivered by the initiating
                party to the other paty’s legal address or such other address identified in writing
                by the other party. Demands for arbitration may also be sent via email with the
                other party’s written consent.
              </p>
              <p>
                (2) CLASS ACTION WAIVER—PLEASE READ. ProZ.com and Contractor mutually agree that by
                entering into this agreement to arbitrate, both waive their right to have any
                dispute or claim brought, heard or arbitrated as a class action and/or collective
                action, and an arbitrator shall not have any authority to hear or arbitrate any
                class and/or collective action (“Class Action Waiver”).
              </p>
              <p>
                (3) REPRESENTATIVE ACTION WAIVER—PLEASE READ. ProZ.com and Contractor mutually agree
                that by entering into this agreement to arbitrate, both waive their right to have
                any dispute or claim brought, heard or arbitrated as a representative action, and an
                arbitrator shall not have any authority to arbitrate a representative action
                ("Representative Action Waiver"). This Representative Action Waiver does not apply
                to any representative claim brought pursuant to the California Private Attorneys
                General Act of 2004 (Labor Code section 2698, et seq.). All such claims must be
                brought in a Court of competent jurisdiction, not in arbitration.
              </p>
              <p>
                (4) Notwithstanding any other clause contained in this Agreement, this arbitration
                provision, or the AAA Rules, as defined below, any claim that all or part of this
                Class Action Waiver and/or Representative Action Waiver is unenforceable,
                unconscionable, void or voidable may be determined only by a court of competent
                jurisdiction and not by an arbitrator. As stated above, all other disputes regarding
                interpretation, applicability, enforceability, or formation of this arbitration
                provision shall be determined exclusively by an arbitrator.
              </p>
              <p>
                (5) Contractor agrees and acknowledges that entering into this arbitration provision
                does not change the parties’ status as independently contracting parties in fact and
                in law, that Contractor is not an employee of ProZ.com or any Client and that any
                disputes in this regard shall be subject to arbitration as provided in this
                arbitration provision.
              </p>
              <p>
                6) Any arbitration shall be governed by the American Arbitration Association
                Commercial Arbitration Rules (“AAA Rules”), except as follows: (1) The arbitration
                shall be heard by one arbitrator selected in accordance with the AAA Rules. The
                Arbitrator shall be an attorney or former judge with experience in the law
                underlying the dispute; (2) ProZ.com shall pay the Arbitrator’s fees and costs,
                unless applicable law requires otherwise; (3) The Arbitrator may issue orders
                (including subpoenas to third parties) allowing the parties to conduct discovery
                sufficient to allow each party to prepare that party’s claims and/or defenses,
                taking into consideration that arbitration is designed to be a speedy and efficient
                method for resolving disputes; (4) Notwithstanding any other term of this Agreement,
                and except as provided in the Class Action Waiver and Representative Action Waiver,
                the Arbitrator may award all remedies to which a party is entitled under applicable
                law and which would otherwise be available in a court of law, but shall not be
                empowered to award any remedies that would not have been available in a court of law
                for the claims presented in arbitration. The Arbitrator shall apply the state or
                federal substantive law, or both, as is applicable; (5) The Arbitrator may hear
                motions to dismiss and/or motions for summary judgment and will apply the standards
                of the Federal Rules of Civil Procedure governing such motions; (6) The Arbitrator’s
                decision or award shall be in writing with findings of fact and conclusions of law;
                (7) Either ProZ.com or Contractor may apply to a court of competent jurisdiction for
                temporary or preliminary injunctive relief on the ground that without such relief
                the arbitration provided in this Section may be rendered ineffectual.
              </p>
              <p>
                (7) Regardless of any other terms of this Agreement, nothing prevents Contractor
                from making a report to or filing a claim or charge with the Equal Employment
                Opportunity Commission, U.S. Department of Labor, Securities Exchange Commissions,
                National Labor Relations Board, or Office of Federal Contract Compliance Programs,
                and nothing in this Agreement or arbitration provision prevents the investigation by
                a government agency of any report, claim or charge otherwise covered by this
                arbitration provision. This arbitration provision also does not prevent federal
                administrative agencies from adjudicating claims and awarding remedies based on the
                claims addressed in this Section, even if the claims would otherwise be covered by
                this arbitration provision. Nothing in this arbitration provision prevents or
                excuses a party from satisfying any conditions precedent and/or exhausting
                administrative remedies under applicable law before bringing a claim in arbitration.
                ProZ.com will not retaliate against Contractor for filing a claim with an
                administrative agency or for exercising rights (individually or in concert with
                others) under Section 7 of the National Labor Relations Act.
              </p>
              <p>
                (8) Contractor has the right to consult with private counsel of Contractor’s choice
                with respect to any aspect of, or any claim that may be subject to, this arbitration
                provision.
              </p>
              <p>
                (9) In the event any portion of this arbitration provision is deemed unenforceable,
                the remainder of this arbitration provision will be enforceable. In any case in
                which (1) the dispute is filed as a class, collective, or representative action and
                (2) there is a final judicial determination that all or part of the Class Action
                Waiver and/or Representative Action Waiver is invalid or unenforceable, the class,
                collective, or representative action to that extent must be litigated in a civil
                court of competent jurisdiction, but the portion of the Class Action Waiver and
                Representative Action Waiver that is valid and enforceable shall be enforced in
                arbitration.
              </p>
            </li>
            <li>
              These terms and conditions constitute a legally binding contract between ProZ.com and
              Contractor regarding services rendered or to be rendered by Contractor. In the event
              of conflict with any other communications, proposals, contracts, or agreements, these
              terms and conditions shall control.
            </li>
            <li>
              Any changes or amendments to this Agreement must be in writing and must be approved,
              signed, and dated by both parties inorder to be valid.
            </li>
          </ul>
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

export default IndependentContractorAgreementModal;
