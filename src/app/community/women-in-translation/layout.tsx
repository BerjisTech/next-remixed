// /src/app/women-in-translation/layout.tsx
import { Metadata } from "next";

// Metadata for the page
export const metadata: Metadata = {
  title: "Women in translation",
  description:
    "Get involved in the Women in Translation initiative and learn more about empowering women in translation work.",
  keywords: ["translation", "women in translation", "empowerment", "linguistics"],
  openGraph: {
    title: "Women in translation",
    description:
      "Join the Women in translation initiative for empowering women in the world of translation.",
    images: [
      {
        url: "/assets/images/wit/hero-image.png",
        width: 800,
        height: 600,
        alt: "Women in translation",
      },
    ],
    type: "website",
  },
};

// Layout component that wraps the client-side content
export default function WomenInTranslationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
