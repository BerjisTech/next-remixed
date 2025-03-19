import React, { Suspense } from "react";
import Header from "./_header";
import TabsSection from "./_tabsSection";
import Testimonials from "./_testimonials";
import Comments from "./_comments";
import SuccessStories from "./_successStories";

interface PageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  return (
    <React.Fragment>
      <Suspense>
        <Header />
        <TabsSection />
      </Suspense>
      {Object.keys(searchParams).length === 0 && <Testimonials />}
      {searchParams?.tab && searchParams?.tab === "user-stories" && <SuccessStories />}
      {searchParams?.tab && searchParams?.tab === "comments" && <Comments />}
    </React.Fragment>
  );
}
