import Image from "next/image";
import React from "react";

const PremiumOnboardingPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#050533] font-['Work_Sans',Arial,sans-serif]">
      {/* Header with background image */}
      <header
        className="relative bg-center bg-cover text-white text-center py-[250px]"
        style={{
          backgroundImage:
            "url('https://4041721.fs1.hubspotusercontent-na1.net/hub/4041721/hubfs/iStock-1312529688.jpg?width=2000&height=971.2399811409713')",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-5">
          <h1 className="text-4xl md:text-[2.5rem] font-bold mb-4 text-white">
            Welcome to ProZ.com Premium
          </h1>
          <p className="text-2xl mb-8">
            To start your new monthly premium membership, talk to a member of the ProZ.com team
          </p>
          <a
            href="#bookcall"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-white text-[#2b98ad] 
                                font-bold text-lg border-2 border-white rounded-md transition-all duration-300 
                                hover:bg-transparent hover:text-white hover:-translate-y-0.5 
                                hover:shadow-lg active:translate-y-0 active:shadow-md"
          >
            BOOK A CALL NOW
          </a>
        </div>
      </header>

      <main>
        <div className="max-w-[1300px] mx-auto px-5">
          {/* Booking Section */}
          <section id="bookcall" className="mt-8">
            <h3 className="text-[#2b98ad] text-2xl font-bold mb-4">
              Are you ready to get the most out of your $25/month investment?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Book time for a one-on-one 15-minute call with a ProZ.com success partner (staff
              member). Staff would like to know you and your expectations for this investment, also
              explain how this membership works, what it includes and support you in getting the
              most out of it.
            </p>
          </section>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {/* Charlotte */}
            <div className="bg-[#eff7ff] p-8 text-center rounded-lg shadow-md">
              <Image
                src="next/next_assets/images/staff/charlotte.png"
                alt="Charlotte"
                width={120}
                height={120}
                className="w-[120px] h-[120px] rounded-full mx-auto mb-4"
              />

              <h2 className="text-[#2b98ad] text-xl font-bold mb-2">Charlotte</h2>
              <div className="text-[#444444] mb-4">ProZ.com success partner</div>
              <p className="text-sm text-[#444444] mb-4">
                Charlotte is one of ProZ.com's experts in customer service and support. She joined
                the team in 2023 and she has been helping members with making use of ProZ.com tools
                and opportunities while they learn to get the best out of their membership.
              </p>
              <a
                href="https://calendar.app.google/nLgUZ3UyQ5gFLzj86"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-2 
                                        bg-[#2b98ad] text-white font-bold rounded-md transition-all duration-300 
                                        hover:bg-white hover:text-[#2b98ad] hover:border-[#2b98ad] border-2 
                                        hover:-translate-y-0.5 hover:shadow-lg"
              >
                BOOK CALL WITH CHARLOTTE
              </a>
              <p className="text-xs text-[#666666] mt-4">
                Available: Mon-Fri, 5:30 AM - 2:30 PM GMT
              </p>
            </div>

            {/* Laura */}
            <div className="bg-[#eff7ff] p-8 text-center rounded-lg shadow-md">
              <Image
                src="next/next_assets/images/staff/laura.png"
                alt="Laura"
                width={120}
                height={120}
                className="w-[120px] h-[120px] rounded-full mx-auto mb-4"
              />

              <h2 className="text-[#2b98ad] text-xl font-bold mb-2">Laura</h2>
              <div className="text-[#444444] mb-4">ProZ.com success partner</div>
              <p className="text-sm text-[#444444] mb-4">
                Laura is an English-Spanish translator and a ProZ.com staff member since 2023. María
                Laura --or Laura-- has been helping Premium subscribers since she started working at
                ProZ.com, and she is the site's expert on professional website building.
              </p>
              <a
                href="https://calendar.app.google/R6qNJR5x4Z6saMm57"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-2 
                                        bg-[#2b98ad] text-white font-bold rounded-md transition-all duration-300 
                                        hover:bg-white hover:text-[#2b98ad] hover:border-[#2b98ad] border-2 
                                        hover:-translate-y-0.5 hover:shadow-lg"
              >
                BOOK CALL WITH LAURA
              </a>
              <p className="text-xs text-[#666666] mt-4">
                Available: Mon-Fri, 11:30 AM - 2:00 PM GMT
              </p>
            </div>

            {/* Erika */}
            <div className="bg-[#eff7ff] p-8 text-center rounded-lg shadow-md">
              <Image
                src="next/next_assets/images/staff/erika.png"
                alt="Erika"
                width={120}
                height={120}
                className="w-[120px] h-[120px] rounded-full mx-auto mb-4"
              />

              <h2 className="text-[#2b98ad] text-xl font-bold mb-2">Erika</h2>
              <div className="text-[#444444] mb-4">ProZ.com success partner</div>
              <p className="text-sm text-[#444444] mb-4">
                Erika is an English to Spanish translator. She has been partnering for success with
                Premium subscribers since 2023, and is helping Premium members design freelancer
                websites that speak to their areas of expertise and what makes them different.
              </p>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1NAqeGZ98Va_CIChuGsIUtKXJ0NwE56YTkm-mT1TkYr9uBI62vnKOWu2CDmmzxpLAXhcq8LZWp"
                className="inline-flex items-center justify-center w-full min-h-[48px] px-6 py-2 
                                        bg-[#2b98ad] text-white font-bold rounded-md transition-all duration-300 
                                        hover:bg-white hover:text-[#2b98ad] hover:border-[#2b98ad] border-2 
                                        hover:-translate-y-0.5 hover:shadow-lg"
              >
                BOOK CALL WITH ERIKA
              </a>
              <p className="text-xs text-[#666666] mt-4">
                Available Mon-Fri, 12:00 PM - 7:00 PM GMT
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-8">
            <p className="mb-4">
              The sooner you schedule a call with any of them, the sooner you'll start enjoying the
              benefits of your membership investment.
            </p>
            <p className="mb-4">Looking forward to e-meeting to you!</p>
            <Image
              src="https://go.proz.com/hs-fs/hubfs/fonts-signature.png"
              alt="Signature"
              width={396}
              height={396}
              className="float-right max-w-[396px]"
            />
          </section>

          <hr className="w-1/2 mx-auto my-8 border-[#2b98ad]" />

          {/* Alternatives Section */}
          <section className="my-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="text-[#2b98ad] text-xl font-bold mb-4">
                  Not interested in personalized help? Your own website? AI training and tools?
                </h4>
                <p className="text-base mb-4">
                  No problem! You can still be a member of this great community.
                </p>
                <a
                  href="https://www.proz.com/professional-membership"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 
                                            bg-[#2b98ad] text-white font-bold text-base rounded-md transition-all duration-300 
                                            hover:bg-white hover:text-[#2b98ad] hover:border-[#2b98ad] border-2 
                                            hover:-translate-y-0.5 hover:shadow-lg"
                >
                  CHECK OUT OTHER MEMBERSHIP OPTIONS
                </a>
              </div>
              <div className="flex-1">
                <Image
                  src="https://go.proz.com/hs-fs/hubfs/Team_tile.jpg"
                  alt="ProZ.com team"
                  width={800} // Adjust width based on expected display size
                  height={600} // Adjust height based on expected display size
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Testimonials Link */}
          <div className="text-center my-8">
            <a
              href="https://www.proz.com/testimonials"
              className="text-[#2b98ad] text-lg hover:underline"
            >
              Click here to read what members themselves say about ProZ.com membership
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center gap-8 my-8">
            <a href="https://www.proz.com/" className="text-[#336666] hover:underline">
              ProZ.com home »
            </a>
            <a href="/help" className="text-[#336666] hover:underline">
              ProZ.com support »
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default PremiumOnboardingPage;
