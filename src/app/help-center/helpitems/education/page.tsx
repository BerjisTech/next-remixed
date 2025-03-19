"use client";

import React from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

const EducationPage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Education" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Education"]} />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-12">
            {/* Training: General */}
            <section id="training-general" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Training: General</h3>
              <p className="mb-4">Information about ProZ.com training sessions and packages.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-are-training-sessions"
                    className="text-primary hover:text-primary-dark"
                  >
                    What are ProZ.com training sessions?
                  </a>
                  <a
                    href="/topics-training-sessions"
                    className="text-primary hover:text-primary-dark"
                  >
                    On what topics are training sessions held?
                  </a>
                  <a
                    href="/what-are-training-packages"
                    className="text-primary hover:text-primary-dark"
                  >
                    What are training packages?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* In-person Conferences */}
            <section id="in-person-conferences" className="mb-4">
              <h3 className="text-xl font-bold mb-2">In-person Conferences</h3>
              <p className="mb-4">
                Professional development through physical conferences and events.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-a-proz.com-conference"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is a ProZ.com conference?
                  </a>
                  <a
                    href="/what-is-the-difference-between-regional-and-international-conferences"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the difference between regional and international conferences?
                  </a>
                  <a
                    href="/what-is-a-proz.com-seminar"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is a ProZ.com Seminar?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Virtual Conferences */}
            <section id="virtual-conferences" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Virtual Conferences</h3>
              <p className="mb-4">Online professional development events and ProZ.com/TV.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a href="/what-is-proz.com/tv" className="text-primary hover:text-primary-dark">
                    What is ProZ.com/TV?
                  </a>
                  <a
                    href="/are-proz.com/tv-events-free-to-attend"
                    className="text-primary hover:text-primary-dark"
                  >
                    Are ProZ.com/TV events free to attend?
                  </a>
                  <a
                    href="/do-i-have-to-be-there-for-the-whole-event"
                    className="text-primary hover:text-primary-dark"
                  >
                    Do I have to be there for the whole event?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Online Training */}
            <section id="online-training" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Online Training</h3>
              <p className="mb-4">Professional development through online courses and sessions.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-are-online-training-sesssions"
                    className="text-primary hover:text-primary-dark"
                  >
                    What are ProZ.com online training sessions?
                  </a>
                  <a
                    href="/book-online-training-sessions"
                    className="text-primary hover:text-primary-dark"
                  >
                    How can I book a place in a ProZ.com online training session?
                  </a>
                  <a
                    href="/when-does-the-session-start"
                    className="text-primary hover:text-primary-dark"
                  >
                    When does the online training session start?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* SDL Trados Certification */}
            <section id="sdl-trados-certification" className="mb-4">
              <h3 className="text-xl font-bold mb-2">SDL Trados Certification</h3>
              <p className="mb-4">Professional certification program for SDL Trados.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/sdl-certification-training-sessions"
                    className="text-primary hover:text-primary-dark"
                  >
                    SDL Certification Training Sessions
                  </a>
                  <a
                    href="/what-is-sdl-trados-certification"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is SDL Trados Certification?
                  </a>
                  <a
                    href="/steps-to-sdl-certification"
                    className="text-primary hover:text-primary-dark"
                  >
                    What are the steps involved in achieving SDL Certification?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Webinars */}
            <section id="webinars" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Webinars</h3>
              <p className="mb-4">Online educational seminars and presentations.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-a-proz.com-webinar"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is a ProZ.com webinar?
                  </a>
                  <a
                    href="/how-can-i-book-a-place-in-a-proz.com-webinar"
                    className="text-primary hover:text-primary-dark"
                  >
                    How can I book a place in a ProZ.com webinar?
                  </a>
                  <a
                    href="/how-do-i-find-out-the-time-of-a-webinar-in-my-location"
                    className="text-primary hover:text-primary-dark"
                  >
                    How do I find out the time of a webinar in my location?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Self-paced Training */}
            <section id="self-paced-training" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Self-paced Training</h3>
              <p className="mb-4">Learn at your own pace with recorded content.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/proz.com-self-paced-training"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is ProZ.com self-paced training?
                  </a>
                  <a
                    href="/what-do-i-need-to-attend-proz.com-self-paced-training-sessions"
                    className="text-primary hover:text-primary-dark"
                  >
                    What do I need to attend ProZ.com self-paced training sessions?
                  </a>
                  <a
                    href="/how-is-self-paced-training-delivered"
                    className="text-primary hover:text-primary-dark"
                  >
                    How is self-paced training delivered?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Articles */}
            <section id="articles" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Articles</h3>
              <p className="mb-4">Professional articles and knowledge sharing.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-the-proz.com-articles-knowledgebase"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the ProZ.com "Articles Knowledgebase"?
                  </a>
                  <a
                    href="/what-are-knowledgebase-contributions"
                    className="text-primary hover:text-primary-dark"
                  >
                    What are knowledgebase "contributions"?
                  </a>
                  <a
                    href="/why-is-a-recommendation-bar-shown-with-some-articles"
                    className="text-primary hover:text-primary-dark"
                  >
                    Why is a "recommendation" bar shown with some articles?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Dictionary and Reference Board */}
            <section id="dictionary-and-reference-board" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Dictionary and Reference Board</h3>
              <p className="mb-4">Access translation reference materials and resources.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-the-dictionary-and-reference-board"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the Dictionary and reference board?
                  </a>
                  <a
                    href="/what-is-the-purpose-of-the-dictionary-and-reference-board-team"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the purpose of the Dictionary and reference board team?
                  </a>
                  <a
                    href="/who-can-make-a-record-on-the-board"
                    className="text-primary hover:text-primary-dark"
                  >
                    Who can make a record on the board?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Translation News */}
            <section id="translation-news" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Translation News</h3>
              <p className="mb-4">Industry news and updates.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-the-proz.com-translation-news-feature"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the ProZ.com Translation news feature?
                  </a>
                  <a
                    href="/how-many-categories-are-there"
                    className="text-primary hover:text-primary-dark"
                  >
                    How many categories are available?
                  </a>
                  <a
                    href="/which-type-of-translation-news-appears-on-the-homepage"
                    className="text-primary hover:text-primary-dark"
                  >
                    Which type of translation news appears on the homepage?
                  </a>
                </div>
              </div>
            </section>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Translation Industry Wiki */}
            <section id="translation-industry-wiki" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Translation Industry Wiki</h3>
              <p className="mb-4">Collaborative knowledge base for the translation industry.</p>
              <div className="space-y-2">
                <div className="flex flex-col space-y-1">
                  <a
                    href="/what-is-the-translation-industry-wiki"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the Translation industry wiki?
                  </a>
                  <a
                    href="/what-is-the-purpose-of-the-wiki"
                    className="text-primary hover:text-primary-dark"
                  >
                    What is the purpose of the wiki?
                  </a>
                  <a
                    href="/who-can-contribute-to-the-wiki"
                    className="text-primary hover:text-primary-dark"
                  >
                    Who can contribute to the wiki?
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
