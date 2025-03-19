"use client";
import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

const RemoteInterpreterPool: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: "#calls-recorded",
      title: "Are my calls being recorded?",
      content:
        "Yes, most calls are being recorded. ProZ.com carefully handles the recordings to ensure no PHI, PCI, or any other type of disclosure. The ProZ.com team listens to call recordings randomly every month for quality assurance purposes. Calls that last more than 1.5 hours are reviewed by ProZ.com partners and the ProZ.com team.",
    },
    {
      id: "#smaller-payment",
      title: "I see a smaller payment amount after the 25th",
      content: `
            <p>If your final payment on the 25th is smaller than what you were expecting, it's likely that some of your monthly calls weren't included in your payment.</p>
            <p>This may happen due to time zone differences. Boostlingo shows you your monthly total and your monthly call logs based on your local time zone. However, for payments, Boostlingo will apply the PST time zone. This means that there's a small chance that some calls will actually be paid to you in the month before or the month after. For this reason, if you are taking calls by the end of the month, you may want to check what time it is in the PST time zone. You may always reach out to <a href="mailto:interpreters@proz.com" class="text-primary underline">interpreters@proz.com</a> so that the team can provide you with a file containing all your monthly call logs.</p>
            <p>Another reason for not having a call included in your final payment is that calls may be disputed by clients. If the client sent a complaint and they demanded not to be charged for the call, it's likely that the platform will discount this call from your final payment.</p>
            <p>Finally, it's also possible that the ProZ.com partner has made a mistake when computing payments. In this case, you can contact the ProZ.com team at <a href="mailto:interpreters@proz.com" class="text-white underline">interpreters@proz.com</a>, but please check the other alternatives before reaching out.</p>`,
    },
    {
      id: "#different-payment",
      title: "Why do I see a different payment amount on ProZ*Pay?",
      content: `
                <p>If your payment was added to ProZ*Pay before the 25th of the month, you may be seeing a smaller amount because this is an advance payment.</p>
                <p>ProZ.com gives you the chance to request an advance payment (that is, before the 25th) for a small fee. In most cases, you can only request a portion of your earnings in advance, not the full amount. This is because ProZ.com won't have the final numbers until they are confirmed by the interpretation platform partner (by the 25th).</p>`,
    },
    {
      id: "#apply-pool",
      title: "How do I apply to the remote interpreter pool?",
      content:
        "You can fill in the form that appears on this page <a>https://go.proz.com/join-pool-now</a>",
    },
    {
      id: "#proz-pools",
      title: "What are the ProZ.com Pools?",
      content: `
            <p>ProZ.com Pools are teams of language experts. The ProZ.com staff reviews each individual application to determine whether a professional can be accepted into a pool. Pools are listed <a href="https://www.proz.com/pools">here</a>.</p>
            <p>Standard members can be part of up to three pools at the same time and Plus members up to five.</p>
            <p><a href="https://help.proz.com/jobs-and-directories?hsLang=en#pools">More info about pools</a></p>`,
    },
    {
      id: "#interpreter-network",
      title: "What is the ProZ.com Interpreter Network?",
      content: `<p>It's a special pool integrated with an on-demand remote interpreting service. That means that professionals in this pool can receive remote interpreting assignments as long as they are online on this platform. They carry out the interpretation remotely and they receive a payment for each assignment.</p>`,
    },
    {
      id: "#how-it-works",
      title: "How does it work?",
      content: `<p>Once you are accepted into the interpreter pool, you will receive an invitation to create an account on a special platform. In a few words, the platform consists of a web interface designed to let you take calls, keep track of your assignments, and see your performance.</p>
                    <p>Interpreters log in to this platform and put themselves online. Calls come in on-demand (that is to say, when a customer needs an interpreter). Usually, interpreters are not notified before an assignment. As long as you are online, you can start receiving calls. Calls are taken solely through this web interface using Google Chrome. Calls ring for all interpreters at the same time and they are connected to the interpreter that picks them up first.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/pMOo0XnQPro"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="mt-4 rounded-lg border border-gray-300 shadow-md"></iframe>`,
    },
    {
      id: "#bidding",
      title: "Do interpreters bid for projects or interpretation requests?",
      content: `<p>No, calls are received on an on-demand basis. You will receive a calls if you meet certain pre-established criteria (like medical, legal, or court permissions). You will see the call ringing on the platform and you will have the option to accept it or reject it. You won't be able to interpret in that call if another interpreter takes the call first.</p>`,
    },
    {
      id: "#join-requirements",
      title: "What do I need in order to join in?",
      content: `
                    <p>The minimum requirements are:</p>
                    <ul class="list-disc ml-6">
                        <li>Certificate or degree in interpreting, translation, or language.</li>
                        <li>Experience as an interpreter.</li>
                        <li>HIPAA-compliance certification (if you don't have this certification, ProZ.com will provide this training for you).</li>
                    </ul>
                    <p>Before applying, you need to watch the introductory video and read the code of conduct.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/n0OVijdsQYg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="mt-4 rounded-lg border border-gray-300 shadow-md"></iframe>
                    <p>
                        <a href="https://cfcdn.proz.com/file_resources/other/a35620946db1741b6522659dcdfa29a0_Code_of_Conduct.pdf" class="text-primary underline font-medium">
                            Read code of conduct here
                        </a>
                    </p>`,
    },
    {
      id: "#registered-interpreter",
      title: "Do I have to be a registered interpreter to join in?",
      content:
        'No, your application to the Interpreter Network can be accepted if you meet the minimum requirements to apply. See "What do I need to join in?" above.',
    },
    {
      id: "#non-member-apply",
      title: "I am not a standard/Plus member, can I still apply?",
      content:
        "Yes, the ProZ.com Interpreter Network is open for all ProZ.com users. Note that members still have benefits when it comes to advance payment fees.",
    },
    {
      id: "#rates",
      title: "What are the rates?",
      content:
        "The rate is 0.40 USD for each minute of interpretation. That is to say, 24 USD for each hour of remote interpretation. Rates can increase based on performance or if there's high demand for a particular language, however, rates won't decrease from 0.40 USD per minute. There's payment total for each call. All payments for a given month add up to a grand monthly total. If you are an ASL interpreter, then the applicable rate is 0.90 USD per minute.",
    },
    {
      id: "#payment-methods",
      title: "What payment methods are there?",
      content:
        "PayPal, Skrill, and bank transfer.\n" +
        "\n" +
        "You can set up your payment methods here: https://www.proz.com/get-paid",
    },
    {
      id: "#setup-payment-methods",
      title: "How do I set up my payment methods?",
      content: `
                <iframe
                        width="560"
                        height="315"
                        src="https://youtu.be/QdUnUJZ0QkU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="mt-4 rounded-lg border border-gray-300 shadow-md"></iframe>`,
    },
    {
      id: "#payment-process",
      title: "How does payment work?",
      content: `
            <p>Funds for a given month will be available on <a href="https://www.proz.com/get-paid/" class="text-white underline font-medium">ProZ*Pay</a> from the 25th of the following month onwards. On that day you will see a button that reads <strong>Request payout</strong>. Click on that button to transfer your funds via the payment method chosen previously. For example, if you started taking calls in January 2021, your payment for your January minutes will be available on February 25th.</p>
            <p>
                <a href="https://www.proz.com/?sp=proz_payment_preferences" class="text-white underline font-medium">Set up your payment methods</a>
            </p>
            <p>You can also request an advanced payment so that you don't have to wait until the 25th. Click on the button that reads <strong>Request an advance payment</strong>. Advance payments have an associated fee, and the fee is lower for those that have a paid ProZ.com Membership. The advance payment option will usually be available on the first week of the month (provided that you have taken calls the month before).</p>`,
    },
    {
      id: "#call-types",
      title: "What types of calls do interpreters receive?",
      content: `
            <p>There are two types of calls: <strong>general</strong> and <strong>specialized</strong>.</p>
            <p><strong>General calls</strong> include the following fields: business, community interpreting, government, education, customer service, emergencies, non-profits, and more. All active pool interpreters can receive these calls.</p>
            <p><strong>Specialized calls</strong> are only for interpreters with certain qualifications. There are three types: medical, legal, and court.</p>
            <p><strong>Medical calls</strong> represent 60-70% of the demand. In order to take these calls, interpreters need to pass a HIPAA-compliance course. This course is available for free to ProZ.com interpreters. You can access the course <a href="https://www.proz.com/translator-training/courses/180/view" class="text-white underline font-medium" target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      id: "#medical-calls",
      title: "Who can take medical calls?",
      content: `
            <p>Only interpreters who have medical interpreting training can take these calls. This usually means completion of a 60-hour medical interpreting course.</p><br>
            <p>See recommended courses <a href="https://go.proz.com/interpreter-training">here</a></p>`,
    },
    {
      id: "#likely-calls",
      title: "What is the likelihood of taking a call?",
      content: `
            <p>Remember that calls ring for all interpreters at the same time. That means that your chances of taking a call will depend on the number of interpreters online and the number of calls coming in.</p><br>
            <p>The call center manager (the person overseeing the whole service) will notify you when there's high demand for a certain language.</p>`,
    },
    {
      id: "#call-duration",
      title: "How long do calls usually last?",
      content: `
            <p>The average call duration for August 2019 is 14 minutes 26 seconds (this is a payment of 7.25 USD). Calls may be as short as five minutes or as long as two hours. Usually medical calls are the longest, and government calls the shortest.</p>`,
    },
    {
      id: "#normal-calls",
      title: "What is a normal call like?",
      content: `
            <p>You may receive voice or video calls. When the interpreter picks up the call, they must introduce themselves saying their name, their language and their ID number. The person on the other side briefly explains the context to the interpreter. This is short consecutive interpreting. You will have some time to note down data like numbers, dates, and names, and also look for terms in your glossary or on the internet (you won't have much time, though).</p><br>
            <p>Calls are not being recorded or monitored, but the customer may rate the quality of your interpretation service. When the call is over, the interpreter and the customer say goodbye courteously. Call information, as well as the corresponding payment, are recorded on the platform.</p>`,
    },
    {
      id: "#contract-sign",
      title: "Do you have a contract to sign?",
      content: `
            <p>No, ProZ.com doesn't have a contract to sign. However, site staff are working on that and it may be a possibility in the near future.</p>`,
    },
    {
      id: "#1099-form",
      title: "Does ProZ.com file my 1099 form?",
      content: `
            <p>Yes, site staff will file your 1099 form by the end of the year.</p>`,
    },
    {
      id: "#call-connect",
      title: "Do I have to stay connected for a certain number of hours?",
      content: `
            <p>Interpreters are needed from 8:30 AM to 2 PM Pacific Time. You should be available during these hours Monday through Friday. In order to be considered for this pool, you need to be available during those hours.</p>`,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Remote Interpreter Pool" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Remote Interpreter Pool"]} />

        {/* Content */}
        <div className="p-6" id="remote-interpreter-pool">
          <h2 className="text-2xl font-bold mb-6">Remote Interpreter Pool</h2>
          <p className="mb-6">
            Frequently asked questions for interpreters applying to the ProZ.com interpreter pool or
            already taking calls with ProZ.com.
          </p>
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border rounded-md ${
                  activeAccordion === section.id
                    ? "border-white bg-primary text-white"
                    : "border-primary bg-white text-gray-800"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full text-left p-4 rounded-md font-bold"
                >
                  {section.title}
                </button>
                {activeAccordion === section.id && (
                  <div
                    className="w-full p-4 prose prose-lg prose-invert"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteInterpreterPool;
