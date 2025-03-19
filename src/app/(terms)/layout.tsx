// src/app/terms/layout.tsx
import React from "react";
import TermsHeader from "./_termsHeader";

interface LayoutProps {
  children: React.ReactNode;
  params: { slug?: string }; // "slug" determines the route
}

export default function TermsLayout({ children, params }: LayoutProps) {
  return (
    <div className="">
      <div className="pt-8">
        <TermsHeader />
      </div>
      <main className="min-h-[calc(100vh-300px)] bg-white dark:bg-dark">
        {children} {/* Render child components/pages */}
      </main>
    </div>
  );
}
