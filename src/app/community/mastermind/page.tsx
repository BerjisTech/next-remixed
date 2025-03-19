"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import WhosInSection from "@/components/shared/Community/WhosInSection";
import { Member, fetchMastermindMembers } from "@/interfaces/community/communityMembers";
import { Testimonial } from "@/interfaces/testimonial";
import { useAppSelector } from "@/lib/store/hooks";

// Types
type TabType = "overview" | "whos_in" | "whats_new" | "reports";

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface Report {
  title: string;
  description: string;
  date: string;
  url: string;
}

const MASTERMIND_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    type: "community",
    name: "Yuna-Aisha Guillamaut",
    message:
      "This group is full of the best people. First, wow, people here really pay attention and are genuine with their interest! But also, when the brains here get together and chat about things, amazing ideas come to light. I can't even put in words what this group has done for me, my confidence, my future. I'm certain it can be the same for you. We are not Translation Mastermind for nothing.",
    language: "French-English",
    country: "France",
  },
  {
    id: 2,
    type: "community",
    name: "Elisabeth Fuchs",
    message:
      "For me, Translation Mastermind is a very flexible way of getting to know and keeping in touch with wonderful colleagues from around the world. It helps me when I have technical questions, when I need support and when I'm looking for colleagues to collaborate with. The daily posts are a great way to start the day! I'd be lost without Translation Mastermind.",
    language: "German-English",
    country: "Germany",
  },
  {
    id: 3,
    type: "community",
    name: "Sara Tirabassi",
    message:
      "I've been following the Translation Mastermind group for almost 10 years, and it's taught me so much about the mindset needed to thrive as a translator. It's always been a safe space to discuss anything related to translator life—whether it's workstation setup, software tools, work-life balance, or negotiation strategies.",
    language: "Italian-English",
    country: "Italy",
  },
  {
    id: 4,
    type: "community",
    name: "Anne de R C",
    message:
      "I joined TM quite a while ago, and it's probably one of the best decisions I've ever made. This group has a rare quality, the people who are active there all have a positive attitude and are trying to get better and help others get better as translators. In this safe space, you can find advice on all sorts of topics.",
    language: "French-English",
    country: "France",
  },
];

const COMMUNITY_REPORTS: Report[] = [
  {
    title: "2024 Community Impact Report",
    description: "Annual overview of community achievements and growth",
    date: "March 2024",
    url: "/reports/tm-impact-2024.pdf",
  },
  {
    title: "Member Success Stories 2023",
    description: "Collection of case studies and success stories",
    date: "December 2023",
    url: "/reports/success-stories-2023.pdf",
  },
  {
    title: "Translation Industry Insights",
    description: "Market analysis and industry trends",
    date: "February 2024",
    url: "/reports/industry-insights-2024.pdf",
  },
];

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(MASTERMIND_TESTIMONIALS.length / testimonialsPerPage);

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return MASTERMIND_TESTIMONIALS.slice(start, start + testimonialsPerPage);
  };

  return (
    <div className="mt-20 bg-white dark:bg-gray-800 rounded-xl py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-merriweather text-grey-900 dark:text-primary-200 mb-4">
          Success stories from our members
        </h2>
        <p className="text-grey-600 dark:text-grey-300 text-lg max-w-2xl mx-auto">
          Hear from translators who have transformed their businesses through our mastermind
          community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {getCurrentTestimonials().map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          className="px-4 py-2 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          ←
        </button>
        <span className="text-sm">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          →
        </button>
      </div>
    </div>
  );
};

// Member Badge Component
const MemberBadge: React.FC = () => (
  <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-sm">
    <Image
      src="/next/next_assets/images/tm-badge.svg"
      alt="TM Member Badge"
      width={24}
      height={24}
      className="rounded-full"
    />
    <span className="text-sm font-medium">TM Member</span>
  </div>
);

// Feature Card Component
const FeatureCard: React.FC<{
  imageSrc: string;
  title: string;
  description: string;
}> = ({ imageSrc, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
    <Image
      src={imageSrc}
      alt={title}
      width={120}
      height={120}
      className="mx-auto mb-4 rounded-full"
    />
    <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
    <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

// Main Page Component
const MastermindPage: React.FC = () => {
  const { entityId } = useAppSelector((state) => state.profile);
  const [currentUserIsMember, setCurrentUserIsMember] = useState<boolean>(false);
  const [currentUserIsInCommunity, setCurrentUserIsInCommunity] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isMember, setIsMember] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [faqItems, setFaqItems] = useState<FaqItem[]>([
    {
      question: "What is the Translation Mastermind community?",
      answer:
        "The Translation Mastermind offers a supportive community where translators can share experiences, network, and advance in their careers through collaboration and mutual support.",
      isOpen: false,
    },
    {
      question: "How can I join the Translation Mastermind?",
      answer:
        "You can join by becoming a ProZ.com member with a Plus or Premium package, which gives you access to this exclusive community.",
      isOpen: false,
    },
    {
      question: "What are the benefits of joining?",
      answer:
        "Members get access to peer networking, professional development resources, community events, and a supportive environment for growing their translation business.",
      isOpen: false,
    },
  ]);
  const handleMemberStatusChange = async (memberId: number, action: "approved" | "removed") => {
    try {
      const response = await fetch(`/next/api/communities/members/${memberId}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: action,
          communityId: 2,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update member status");
      }

      // Update local state after successful API call
      setMembers((prevMembers) =>
        prevMembers.map((member) =>
          member.id === memberId ? { ...member, status: action } : member
        )
      );
    } catch (error) {
      console.error("Error updating member status:", error);
    }
  };

  // Check if user have a membership
  const userMembership = async (entity: number) => {
    if (entity) {
      try {
        const response = await fetch(`/next/api/user?entityId=${entity}&include_membership_data=1`);
        const data = await response.json();
        console.log(data[0].membership_type);
        if (
          ["premium", "pro_premium", "pro_premium_yearly", "pro_plus"].includes(
            data[0].membership_type
          )
        ) {
          setCurrentUserIsMember(data[0].is_professional_member);
          setIsMember(true);
        }
      } catch (err) {
        console.error("Error fetching membership:", err);
      }
    } else {
      setCurrentUserIsMember(false);
    }
  };

  // Check if user is in the Community: Translation Mastermind
  const checkUserIsInCommunity = async (entity: number) => {
    if (entity) {
      try {
        const response = await fetch(
          `/next/api/communities/users?entity_id=${entity}&community_id=2`
        );
        const data = await response.json();
        console.log(data.users.length);
        setCurrentUserIsInCommunity(data.users && data.users.length > 0);
      } catch (err) {
        console.error("Error fetching user communities:", err);
      }
    } else {
      setCurrentUserIsInCommunity(false);
    }
  };

  useEffect(() => {
    console.log(entityId);
    if (entityId > 0) {
      userMembership(entityId);
      checkUserIsInCommunity(entityId);
    }

    const loadMembers = async () => {
      try {
        setLoading(true);
        const fetchedMembers = await fetchMastermindMembers();
        setMembers(fetchedMembers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch members");
        console.error("Error loading members:", err);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "whos_in") {
      loadMembers();
    }
  }, [activeTab, entityId]);

  const toggleFaq = (index: number) => {
    setFaqItems((prevFaqs) =>
      prevFaqs.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item))
    );
  };

  const getTabName = (tab: TabType): string => {
    switch (tab) {
      case "whos_in":
        return "Who's In";
      case "whats_new":
        return "What's New";
      case "reports":
        return "Reports";
      default:
        return tab.charAt(0).toUpperCase() + tab.slice(1);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Full Width */}
      <div className="relative bg-white dark:bg-gray-800 w-full">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10 dark:opacity-5"></div>

        {/* Content container */}
        <div className="max-w-[1062px] mx-auto px-6 py-12 relative z-10">
          {/* Logo and content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column: Logo and text */}
            <div>
              {/* Logo container */}
              <div className="mb-6">
                <Image
                  src="/next/next_assets/images/svg/Translation mastermind logo.svg"
                  alt="Translation Mastermind"
                  width={300}
                  height={120}
                  className="h-auto"
                  priority
                />
              </div>

              {/* Text content */}
              <h1 className="text-4xl font-bold font-merriweather text-primary-500 dark:text-primary-200 mb-4">
                Translation Mastermind
              </h1>
              <p className="text-xl text-grey-700 dark:text-gray-100">
                A friendly, dynamic group of language professionals focusing on achieving greater
                success in freelance life through hard work, striving for excellence, and adopting
                the right mental and emotional approach!
              </p>
            </div>

            {/* Right column: Image */}
            <div className="flex justify-center">
              <Image
                src="/next/next_assets/images/community/proz-tm-hero.jpg"
                alt="Translation Mastermind Community"
                width={500}
                height={500}
                className="rounded-xl border-2 border-transparent dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-[1062px] mx-auto px-6">
          <div className="flex justify-center space-x-4 py-4 overflow-x-auto">
            {(["overview", "whos_in", "whats_new", "reports"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "hover:bg-accent text-dark dark:text-gray-200"
                }`}
              >
                {getTabName(tab)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-[1062px] mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xl text-[#344054] dark:text-gray-200">
                  The Translation Mastermind community, which meets both on Facebook and in real
                  life, offers a holistic perspective on freelancing and support from a global
                  network of like-minded translators and interpreters.
                </p>
                <p className="text-xl text-[#344054] dark:text-gray-200 mt-4">
                  In this positive, troll-free zone, you will have an opportunity to brainstorm with
                  peers, build professional friendships, share your successes, and find support and
                  encouragement.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/next/next_assets/images/community/interpreters-hero.jpeg"
                  alt="Mastermind Community Meeting"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <FeatureCard
                imageSrc="/next/next_assets/images/community/proz-tm-hero.jpg"
                title="Global Network"
                description="Connect with translators worldwide"
              />
              <FeatureCard
                imageSrc="/next/next_assets/images/community/proz-tm-hero.jpg"
                title="Professional Growth"
                description="Expand your skills and knowledge"
              />
              <FeatureCard
                imageSrc="/next/next_assets/images/community/proz-tm-hero.jpg"
                title="Community Events"
                description="Join exclusive meetups and workshops"
              />
            </div>

            <div className="flex flex-col items-center mt-8 space-y-2">
              {currentUserIsMember && currentUserIsInCommunity ? (
                <>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    You're in Translation Mastermind! Visit the exclusive group to connect with
                    other experts.
                  </p>
                  <a
                    href="https://www.facebook.com/groups/thetranslationmastermind/"
                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Group
                  </a>
                </>
              ) : currentUserIsMember && !currentUserIsInCommunity ? (
                <>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Join Translation Mastermind. This is a benefit included in your membership.
                  </p>
                  <a
                    href="https://www.facebook.com/groups/thetranslationmastermind/"
                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Group
                  </a>
                </>
              ) : (
                <>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Translation Mastermind is a Professional Plus or Premium member benefit. Upgrade
                    now to join and connect with top professionals in the field.
                  </p>
                  <a
                    href="https://www.proz.com/professional-membership"
                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upgrade Now
                  </a>
                </>
              )}
            </div>
            <TestimonialsSection />
          </div>
        )}

        {activeTab === "whos_in" && (
          <>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center py-10">{error}</div>
            ) : (
              <WhosInSection
                members={members}
                communityName="Translation Mastermind"
                membership="none"
                renewal_date=""
                communityType="mastermind"
                // isAdmin={false}
                // onMemberStatusChange={handleMemberStatusChange}
              />
            )}
            <TestimonialsSection />
          </>
        )}
        {activeTab === "whats_new" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 col-span-2">
                <Image
                  src="/next/next_assets/images/community/proz-tm-hero.jpg"
                  alt="Berlinaganza Event"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Berlinaganza 2025
                </h3>
                <div className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="font-medium text-primary mb-1">
                      Save the Date: April 25-27, 2025
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      In-person networking event in Berlin
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Join us for a special gathering where translators connect beyond the virtual
                    world. The Berlinaganza continues our tradition of successful "Ganza" events,
                    following in the footsteps of memorable gatherings in Prague, Calahonda (Spain),
                    and Barcelona.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">What to expect:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Casual networking opportunities</li>
                      <li>Dining at carefully selected, affordable restaurants</li>
                      <li>Low-key daytime activities</li>
                      <li>Special evening event at the host's home</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "Ganzas are a wonderful way to make friends and new connections. I can
                      honestly say I have met a number of people through the Ganzas who have
                      contributed in major ways to my personal and professional life."
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Note for introverts:</strong> We understand and accommodate different
                    comfort levels. There's no pressure to be constantly social - taking time for
                    yourself is absolutely welcome.
                  </p>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Community Activities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl">•</span>
                    <div>
                      <p className="text-gray-900 dark:text-gray-100 font-medium">
                        Monthly online get-togethers
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Regular virtual meetings to stay connected
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl">•</span>
                    <div>
                      <p className="text-gray-900 dark:text-gray-100 font-medium">
                        Virtual co-working space
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Collaborate and work together in our community
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary text-xl">•</span>
                    <div>
                      <p className="text-gray-900 dark:text-gray-100 font-medium">
                        Upcoming workshops
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Professional development opportunities
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <TestimonialsSection />
          </>
        )}

        {activeTab === "reports" && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Community Reports</h2>
              <div className="space-y-4">
                {COMMUNITY_REPORTS.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {report.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {report.description}
                      </p>
                      <span className="text-xs text-gray-500">{report.date}</span>
                    </div>
                    <button className="text-primary hover:text-primary-dark">Download PDF</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Dashboard Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Community Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-sm text-gray-600">Active Members</h4>
                  <p className="text-2xl font-bold">2,547</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-sm text-gray-600">Countries Represented</h4>
                  <p className="text-2xl font-bold">84</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-sm text-gray-600">Language Pairs</h4>
                  <p className="text-2xl font-bold">126</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={`border ${
                  faq.isOpen ? "border-primary" : "border-gray-200"
                } rounded-lg bg-white dark:bg-gray-800`}
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="text-2xl">{faq.isOpen ? "−" : "+"}</span>
                </button>
                {faq.isOpen && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MastermindPage;
