import React from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

const NativePage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Native speaking conversation" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "Native speaking conversation"]} />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Native speaking conversation</h2>
          <div className="space-y-12">
            {/* Native Speaker Video Call FAQs */}
            <section id="native-speaker-faqs" className="mb-4">
              <h3 className="text-xl font-bold mb-2">Native Speaker Video Call FAQs</h3>
              <div className="mb-4">
                <p>
                  <strong>Q: What will happen if I click “call now”?</strong>
                </p>
                <p>
                  A: You will be connected by video call to a native speaker of a language of your
                  choice (English, French, or Spanish).
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: Will this cost me money?</strong>
                </p>
                <p>
                  A: At the moment, your first call is free. Following that first call, you will be
                  asked to pay next time you wish to make a call.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: How do I pay for a call?</strong>
                </p>
                <p>
                  A: Go through the motions like you are making a call. You will be prompted to pay
                  and will see a typical payment form so that you can pay before the second call
                  takes place.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>
                    Q: I am not learning any of those three languages, will others be available?
                  </strong>
                </p>
                <p>
                  A: This program is in its “pilot phase” and at the moment we only support English,
                  French, and Spanish, but we will expand in the future.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: What does “working languages” mean?</strong>
                </p>
                <p>
                  A: Many of our native speakers are language industry professionals such as
                  translators or interpreters. Their working languages are other languages they
                  provide services in, which are not their native language.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: Why can I see “working languages”?</strong>
                </p>
                <p>
                  A: If you so choose, you can look for people who work or have some background
                  knowledge of your native language or other languages you have some command of. If
                  the language you wish to practice in is new to you, the partner may be able to
                  help you if they know some of your language. This does not mean that they are
                  obligated to do work in this language or have an extended conversation in their
                  working language other than their native language.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: I want to practice but I do not know what to talk about.</strong>
                </p>
                <p>
                  A: Native speakers have a list of favorite topics of theirs which is a good
                  jumping-off point. That being said, you could have a short conversation about
                  anything you’d like. Native speakers are good at connecting and communicating with
                  language learners and have been in your shoes many times before.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: How can I myself apply to be a native speaker?</strong>
                </p>
                <p>
                  A: Our native speakers are from a professional pool at ProZ.com called the “Native
                  speaker conversation partner” pool. If you would like to submit an application to
                  be part of the pool, you can do so here:{" "}
                  <a
                    href="https://www.proz.com/pools/native-speaker-conversation-partners/apply"
                    className="text-primary underline"
                  >
                    Native Speaker Conversation Partner Application
                  </a>
                  .
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>
                    Q: What type of technology do I need to connect to a native speaker or to a
                    language learner using this platform?
                  </strong>
                </p>
                <p>
                  A: You will need a working webcam and microphone, and you will need to use a
                  computer or laptop. Though we hope to expand in the future, phones are not
                  supported by our site at this time.
                </p>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mb-4">
                <p>
                  <strong>Q: I am a native speaker, how will I be paid?</strong>
                </p>
                <p>A: Money will appear in your ProZ wallet after a period of time.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativePage;
