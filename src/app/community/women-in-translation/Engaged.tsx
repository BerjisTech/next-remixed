"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WhosInSection from "@/components/shared/Community/WhosInSection";
import { Member } from "@/interfaces/community/communityMembers";

interface Card {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqItemProps extends FaqItem {
  isOpen: boolean;
  onClick: () => void;
}

const cards: Card[] = [
  {
    title: "Article: Elevating each other: strategies for women to support women in translation",
    description:
      "Celebrate Women in Translation Month (#WITMonth) by discovering strategies for elevating women in the language industry through mentorship, networking, and advocacy.",
    imgUrl: "/next/next_assets/images/wit/wit-1.jpg",
    link: "https://go.proz.com/blog/elevating-each-other-strategies-for-women-to-support-women-in-translation",
  },
  {
    title: "Meetup: Imposter syndrome in the language industry: is it more common among women?",
    description:
      "Meet with colleagues to discuss imposter syndrome in the language industry, its cultural impacts on careers and lives, and strategies to break the cycle and build confidence.",
    imgUrl: "/next/next_assets/images/wit/wit-2.png",
    link: "https://live.remo.co/e/imposter-syndrome-in-the-languag/register",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the purpose of the Women in Translation initiative?",
    answer:
      "The purpose of the Women in Translation initiative is to create a supportive community where women in the language industry can connect, share experiences, and access resources that help them overcome challenges and advance in their careers.",
  },
  {
    question: "Who can participate in the Women in Translation initiative?",
    answer:
      "The initiative is open to all ProZ female members, including translators, interpreters, and other language professionals. We work hard to provide a safe space where every woman at any stage of their profesional career feels welcome, supported and respected regardless of their individual circumstances or personal journey.",
  },
  {
    question: "What activities and opportunities does the initiative offer?",
    answer:
      "The initiative offers various activities, including virtual meetings, workshops, mentorship programs, and opportunities to collaborate on projects. It also aims to provide resources and support networks to address the unique challenges women face in the language industry.",
  },
  {
    question: "How can I get involved with the Women in Translation initiative?",
    answer:
      "Getting involved is easy! You can participate by joining virtual meetings, attending workshops, becoming a mentor or mentee, or contributing to discussions and projects. To express your interest and learn more, click here.",
  },
  {
    question: "Is there a cost to join the Women in Translation initiative?",
    answer:
      "The Women in Translation program is made possible thanks to the support from ProZ members. The resources, tools, and the team behind the program are funded by membership fees, which help cover the costs of running such initiatives. Members of the Women in Translation initiative gain access to valuable benefits like training, mentoring, and resources at no additional cost. While the program offers personal fulfillment, it also provides professional growth opportunities, all made possible through the contributions of the ProZ member community. Join ProZ → (/professional-membership). If you are unable to start your membership now but would like to explore the possibilities for participation in Women in Translation, please contact the team at membership@proz.com.",
  },
  {
    question: "Can men support or participate in the Women in Translation initiative?",
    answer:
      "While the initiative is specifically designed to support women in the language industry, men are welcome to support the program by promoting it, encouraging participation, or even volunteering as allies in some of its activities. However, core participation and leadership roles are focused on women.",
  },
];

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-white mb-1">
    <button
      className={`w-full text-left py-4 px-6 font-semibold rounded-lg border ${
        isOpen ? "bg-primary text-white" : "bg-white text-gray-700 border-[#EAF5F4]"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="pr-4">{question}</span>
        <span className="flex-shrink-0">{isOpen ? "-" : "+"}</span>
      </div>
    </button>

    {isOpen && <div className="px-6 pb-4 text-gray-900 bg-[#EAF5F4] rounded-lg mt-2">{answer}</div>}
  </div>
);

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
        Frequently asked questions
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg py-4 divide-y divide-gray-100 dark:divide-gray-700">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            {...item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Engaged: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://docker-syr10.proz.com/next/api/communities/landing-members?community_id=1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debug log

        // No need to transform the profilePicture URLs since they're already complete
        setMembers(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching members:", err);
        setError("Failed to load members. Please try again later.");
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Members Section */}
      <div className="mb-16">
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <WhosInSection
            members={members}
            communityName="Women in Translation"
            membership="none"
            renewal_date=""
            communityType="womenInTranslation"
          />
        )}
      </div>

      {/* Events & Articles Section */}
      <div className="mb-16">
        <h2 className="text-[#344054] dark:text-gray-300 text-4xl font-semibold leading-[44px] text-center mb-4">
          Latest events & articles
        </h2>
        <p className="text-lg text-[#4B5563] dark:text-white mb-8 text-center">
          Explore the latest events, news, and resources from the Women in translation program.
        </p>

        <div className="flex flex-wrap gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <a
                href={card.link}
                className="flex flex-col h-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-[300px]">
                  <Image src={card.imgUrl} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold text-[#1F2937] dark:text-gray-200 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] dark:text-gray-300">{card.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </section>
  );
};

export default Engaged;
