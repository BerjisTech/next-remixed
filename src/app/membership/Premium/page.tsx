import React from "react";

export default function PremiumPage() {
  return (
    <div className="min-h-screen font-['Work_Sans',Arial,sans-serif] text-[#444444]">
      {/* Hero Section */}
      <section className="relative mt-[70px] py-[120px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://4041721.fs1.hubspotusercontent-na1.net/hub/4041721/hubfs/iStock-1148091063.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-[1300px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left md:pr-8">
              <h1 className="text-4xl md:text-[2.5rem] font-bold mb-6 text-white leading-tight drop-shadow-lg">
                New premium monthly option with website hosting and AI
              </h1>
              <p className="text-lg drop-shadow">
                Unlock a world of possibilities with the new premium monthly membership option that
                includes all regular Plus membership benefits, plus personalized guidance with your
                online presence (including your own website and hosting) and an AI-based translation
                tool that comes with training and an exclusive user community.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col gap-6 max-w-[400px] mx-auto w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                <div className="text-5xl font-bold text-white drop-shadow-lg mb-1">$25</div>
                <div className="text-xl text-white mb-6">/month</div>
                <a
                  href="https://www.proz.com/store/34738"
                  className="inline-flex items-center justify-center w-full px-8 py-3 
                                bg-gradient-to-r from-[#1CD8D2] via-[#93EDC7] to-[#1CD8D2] 
                                text-white font-bold rounded-lg transition-all duration-300 
                                hover:bg-right hover:-translate-y-0.5 hover:shadow-lg 
                                uppercase tracking-wide text-sm"
                >
                  Start your premium membership
                </a>
              </div>

              <div
                className="relative bg-white/20 backdrop-blur-md p-8 rounded-xl 
                              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                              text-center border-2 border-white/30 overflow-hidden"
              >
                <div
                  className="absolute top-4 right-[-2rem] bg-[#1CD8D2] py-2 px-12 
                                  transform rotate-45 text-sm font-bold"
                >
                  Best Value
                </div>

                <div className="text-6xl font-bold text-[#1CD8D2] drop-shadow-lg mb-1">$260</div>
                <div className="text-xl text-white mb-2">/year</div>
                <div className="text-[#1CD8D2] font-bold text-lg mb-6">Save $40 per year!</div>
                <a
                  href="https://www.proz.com/store/34732"
                  className="inline-flex items-center justify-center w-full px-8 py-4 
                                bg-gradient-to-r from-[#1CD8D2] via-[#93EDC7] to-[#1CD8D2] 
                                text-white font-bold rounded-lg transition-all duration-300 
                                hover:bg-right hover:-translate-y-0.5 hover:shadow-lg 
                                uppercase tracking-wide"
                >
                  Start your premium membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-[#f8f9fa] py-20">
        <div className="max-w-[1300px] mx-auto px-5">
          <h2 className="text-center text-[#425b76] text-3xl font-bold mb-12">
            What is included in the new premium monthly option?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plus Package Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-[#2b98ad] text-xl font-bold mb-4">Plus package features</h3>
              <p className="mb-4">
                With the Plus Premium subscription, you get access to everything our Plus package
                has to offer, from identity and security validation, to +1,150 hours of training
                content, without the need to pay up front!
              </p>
              <a
                href="https://www.proz.com/professional-membership#comparison-table"
                className="text-[#2b98ad] hover:underline"
              >
                Full list of Plus package benefits »
              </a>
            </div>

            {/* Website Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-[#2b98ad] text-xl font-bold mb-4">Website and hosting</h3>
              <p className="mb-4">
                ProZ.com staff has been trained to work with you in taking your online presence to
                new heights. As a ProZ.com member with the premium subscription, you will get your
                own website designed by experts, at your own domain, included in the monthly fee for
                the first year.
              </p>
              <p>
                (Website hosting, alone, can cost $25/month elsewhere, and website design may cost
                thousands!)
              </p>
            </div>

            {/* AI Tool Card */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <h3 className="text-[#2b98ad] text-xl font-bold mb-4">AI tool and community</h3>
              <p className="mb-4">
                On average, 45% of linguists are using AI tools not just to complete projects, but
                also to generate glossaries, investigate terminology, generate their CVs and bios,
                and even for inspiration.
              </p>
              <p>
                This new Premium monthly option comes with an exclusive AI-based tool, together with
                training and a supporting community of users to help you boost your productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <div className="fixed bottom-0 w-full bg-[#2b98ad] text-white py-8 z-40">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-white m-0">
              Get your premium package today for $25/month
            </h2>
            <a
              href="https://www.proz.com/store/34738"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#1CD8D2] via-[#93EDC7] to-[#1CD8D2] text-white font-bold rounded-lg transition-all hover:bg-right hover:-translate-y-0.5 hover:shadow-lg uppercase tracking-wide min-w-[200px]"
            >
              Start your premium membership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
