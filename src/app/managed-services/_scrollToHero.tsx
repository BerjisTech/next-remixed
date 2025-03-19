"use client";

import React from "react";
import { Button } from "@/components/shadcn/button";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={scrollToTop} variant="default" size="xl">
      Get started
    </Button>
  );
};

export default ScrollToTopButton;
