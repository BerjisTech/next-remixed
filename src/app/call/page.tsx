import React from "react";
import { Card, CardContent } from "@/components/shadcn/card";

export default async function CallPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-center bg-cover py-20 md:py-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://go.proz.com/hubfs/iStock-1448375964.jpg')",
            opacity: 0.9,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Meet a member of the ProZ.com team
            </h1>
            <p className="text-xl">
              and learn how to get the most out of your membership investment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl m-auto container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <Card className="p-6">
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#425b76]">
                  WE ARE COMMITTED TO YOUR SUCCESS
                </h3>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  At ProZ.com, we are dedicated to empowering language industry professionals like
                  you to reach your business goals and unlock your full potential.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-4">WHAT ARE CALLS ABOUT?</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      arrow_circle_right
                    </span>
                    <p>Learn about the benefits included in your membership</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      arrow_circle_right
                    </span>
                    <p>Receive help with profile building and the use of the site</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      arrow_circle_right
                    </span>
                    <p>Discuss the challenges you may be facing and find solutions together</p>
                  </div>
                </div>

                <div className="mt-8 p-4 border border-muted rounded-lg text-sm">
                  Personalized calls are available to{" "}
                  <a
                    href="https://www.proz.com/professional-membership"
                    className="text-primary hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ProZ.com paying members
                  </a>
                  &nbsp;only.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Booking Calendar */}
          <Card>
            <CardContent>
              <div className="meetings-iframe-container  flex items-center justify-center">
                <iframe
                  src="https://meetings.hubspot.com/lucia-leszinsky/prozcom-member-walkthrough?embed=true"
                  className="w-full  h-[610px] border-none"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <TestComponent /> */}
    </div>
  );
}
