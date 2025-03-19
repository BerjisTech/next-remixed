"use client";

import Link from "next/link";
import React, { useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number>(1);

  const services = [
    { id: 1, title: "Find language work and hire language professionals" },
    { id: 2, title: "Get training and industry-specific certifications" },
    { id: 3, title: "Join the world's largest community of language professionals" },
    { id: 4, title: "Make your work easier with ProZ's tools and resources" },
  ];

  const loadService = (serviceId: number) => {
    setActiveService(serviceId);
  };

  return (
    <div id="services" className="grid md:grid-cols-3 grid-cols-1 gap-x-[30px] mt-12 mb-10">
      <div className="col-span-3 bg-green-gradient dark:bg-green-gradient-dark rounded-2xl p-6 mb-5 text-center">
        <h2 className="text-center text-white text-3xl font-bold font-merriweather leading-[44px] mb-2">
          ProZ's services
        </h2>
        <p className="text-white font-light mb-3">
          ProZ enables language professionals to find and outsource translation and interpreting
          work, network with colleagues both face-to-face and online at ProZ events and meetups,
          offer and ask for help with translation questions and professional issues, get training
          and certifications in industry-specific skills, and much more.
        </p>
        <p className="text-white font-extrabold mb-0">With ProZ's services, you can...</p>
      </div>

      <div className="col-span-3 flex flex-col items-start justify-start gap-3 md:col-span-1">
        {services.map((serv) => (
          <div
            key={serv.id}
            onClick={() => loadService(serv.id)}
            className={`cursor-pointer py-3 px-4 rounded-xl font-light ${
              activeService === serv.id
                ? "bg-primary text-white dark:bg-primary"
                : "bg-gray-50 text-white hover:bg-primary-50 dark:bg-slate-800 dark:hover:bg-slate-900"
            }`}
          >
            <p
              className={`dark:text-white ${activeService === serv.id ? "text-white" : "text-dark"} font-light`}
            >
              {serv.title}
            </p>
          </div>
        ))}
      </div>

      <div className="col-span-3 mb-3 md:col-span-2 p-6 pb-0 rounded-xl font-light bg-gray-100 dark:bg-slate-700 xlight-primary">
        <div className="text-dark text-thin mb-3 dark:text-slate-100">
          {activeService === 1 && (
            <div className="rich_editable" id="val">
              <p>
                Translation, interpreting, and other language-related projects are posted on the{" "}
                <b>
                  <Link
                    href="/job-posting"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Jobs board
                  </Link>
                </b>{" "}
                and listed on the{" "}
                <b>
                  <Link
                    href="/opportunities"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Opportunities marketplace
                  </Link>
                </b>
                . Additionally, clients may browse <b>ProZ's directories</b> for{" "}
                <b>
                  <Link
                    href="/providers"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    freelancers
                  </Link>
                </b>{" "}
                and{" "}
                <b>
                  <Link
                    href="/outsourcers"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    companies
                  </Link>
                </b>
                , and reach out to them directly with a proposal.
              </p>
              <div>
                <br />
                ProZ also owns and operates{" "}
                <b>
                  <Link
                    href="https://www.tm-town.com/"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    TM-Town
                  </Link>
                </b>
                , a platform with a unique terminology-based technology to match clients to
                freelance professionals with experience in the specific subject matter of the text
                to be translated.
                <br />
              </div>
            </div>
          )}

          {activeService === 2 && (
            <div className="rich_editable" id="val">
              <p>
                ProZ hosts{" "}
                <b>
                  <Link
                    href="https://community.proz.com/upcoming-events"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    online conferences and events
                  </Link>
                </b>{" "}
                and{" "}
                <b>
                  <Link
                    href="/courses"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    live and on-demand training courses
                  </Link>
                </b>{" "}
                on a wide range of topics and fields related to the language industry, aimed at
                everyone from beginners to seasoned experts looking to continue their professional
                development.
              </p>
              <br />
              <p>
                You can also apply to join the{" "}
                <b>
                  <Link
                    href="/cpn"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Certified PRO Network
                  </Link>
                </b>
                , a pool of pre-screened language professionals who have verified their translation
                expertise and professionalism, fostering trust and excellence in translation
                services.
              </p>
            </div>
          )}

          {activeService === 3 && (
            <div className="rich_editable" id="val">
              <p>
                ProZ facilitates{" "}
                <b>
                  <Link
                    href="https://community.proz.com/upcoming-events"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    networking meetups
                  </Link>
                </b>
                , professional events, and{" "}
                <b>
                  <Link
                    href="https://community.proz.com/upcoming-events"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    powwows
                  </Link>
                </b>{" "}
                (informal get-togethers of groups of ProZ users living in close proximity) as well
                as{" "}
                <b>
                  <Link
                    href="/community/mastermind"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Translation Mastermind
                  </Link>
                </b>{" "}
                "Ganzas" (Get-togethers of members of the Translation Mastermind group) happening
                all over the world.
              </p>
              <br />
              <p>
                ProZ also hosts the{" "}
                <b>
                  <Link
                    href="https://community.proz.com"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    site forum
                  </Link>
                </b>{" "}
                and other means of engaging with colleagues, where you can discuss issues relevant
                to being a language professional, such as using CAT tools or getting established in
                the industry. ProZ communities extend beyond the site itself to go where they are
                most useful to members; for example, via the{" "}
                <Link
                  href="https://www.facebook.com/groups/ProZcom/"
                  className="text-primary dark:text-primary font-bold"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook group
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.linkedin.com/groups/138763/"
                  className="text-primary dark:text-primary font-bold"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn group
                </Link>
                , and the{" "}
                <b>
                  <Link
                    href="/community/mastermind"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Translation Mastermind
                  </Link>
                </b>{" "}
                community also operates on Facebook.
              </p>
              <br />
              <p>
                Additionally, the{" "}
                <b>
                  <Link
                    href="/kudoz"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    KudoZ help network
                  </Link>
                </b>{" "}
                provides a framework for linguists to offer and ask for help translating or defining
                terms and short phrases. From these questions and their suggested translations, a{" "}
                <b>
                  <Link
                    href="#"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    searchable archive
                  </Link>
                </b>{" "}
                has been compiled.
              </p>
            </div>
          )}

          {activeService === 4 && (
            <div className="rich_editable" id="val">
              <p>
                You can bill clients for your services with ProZ's{" "}
                <b>
                  <Link
                    href="/invoicing"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Invoicing tool
                  </Link>
                </b>
                , send and receive payments with{" "}
                <b>
                  <Link
                    href="/prozpay/about/payee"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ProZ*Pay
                  </Link>
                </b>
                , and organize the freelancers your company collaborates with using ProZ{" "}
                <b>
                  <Link
                    href="/recruit/about"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Recruit
                  </Link>
                </b>
                .
              </p>
              <p>
                Make your daily work easier with CAT tools like{" "}
                <b>
                  <Link
                    href="/cafetran-new"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CafeTran
                  </Link>
                </b>{" "}
                and AI technology like{" "}
                <b>
                  <Link
                    href="/pastey-new"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pastey
                  </Link>
                </b>
                .
              </p>
              <p>
                Evaluate potential new clients with the{" "}
                <b>
                  <Link
                    href="/outsourcers"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Blue Board
                  </Link>
                </b>
                , create and download{" "}
                <b>
                  <Link
                    href="/glossaries"
                    className="text-primary dark:text-primary font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    glossaries
                  </Link>
                </b>
                , and access many other resources to simplify your professional life.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
