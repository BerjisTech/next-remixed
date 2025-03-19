import React from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

const TerminologyPage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Terminology" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Terminology"]} />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Terminology</h2>
          <div className="space-y-12">
            {/* KudoZ: General */}
            <section id="kudoz-general" className="mb-4">
              <h3 className="text-xl font-bold mb-2">KudoZ: general</h3>
              <p>
                KudoZ is a platform feature designed to help translators share knowledge and
                collaborate on terminology questions.
              </p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* KudoZ: Asking */}
            <section id="kudoz-ask" className="mb-4">
              <h3 className="text-xl font-bold mb-2">KudoZ: asking</h3>
              <p>Learn how to ask terminology questions and receive answers from the community.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* KudoZ: Answering */}
            <section id="kudoz-answer" className="mb-4">
              <h3 className="text-xl font-bold mb-2">KudoZ: answering</h3>
              <p>
                Find out how to answer terminology questions and contribute to the knowledge-sharing
                process.
              </p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* KudoZ: Peer Commenting */}
            <section id="kudoz-peer" className="mb-4">
              <h3 className="text-xl font-bold mb-2">KudoZ: peer Commenting</h3>
              <p>
                Engage in peer commenting to refine answers and provide additional context to
                terminology questions.
              </p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* KudoZ: Editing */}
            <section id="kudoz-edit" className="mb-4">
              <h3 className="text-xl font-bold mb-2">KudoZ: editing</h3>
              <p>Learn about editing existing KudoZ entries to ensure accuracy and relevance.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Glossary-Building KudoZ */}
            <section id="kudoz-glossary" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Glossary-building KudoZ</h3>
              <p>Discover how to build glossaries from KudoZ entries and enhance your resources.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Glossaries */}
            <section id="glossaries" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Glossaries</h3>
              <p>Manage and search glossaries to improve your translation efficiency.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* GlossPost */}
            <section id="glosspost" className="mb-4">
              <h3 className="text-xl font-bold mb-2">GlossPost</h3>
              <p>Share and discover useful glossary links with the community.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Wikiwords */}
            <section id="wikiwords" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Wikiwords</h3>
              <p>Explore Wikiwords for collaborative terminology building and sharing.</p>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Term Search */}
            <section id="term-search" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Term Search</h3>
              <p>
                Use ProZ.com's term search to quickly find terminology translations and definitions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminologyPage;
