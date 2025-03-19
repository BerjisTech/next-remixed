/**
 * Layout component for the ProZ Learn application.
 * This component sets the metadata for the page and wraps the children components.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} The rendered layout component.
 * @author Denis Maingi
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProZ Learn: Online training & events for language professionals",
  description:
    "Boost your translation career with expert-led training, certifications, and events at ProZ Learn. Learn at your own pace and grow professionally!",
  openGraph: {
    title:
      "Advance your career with ProZ Learn - Online training & events for translators & interpreters",
    description:
      "Join ProZ Learn for high-quality training and events designed for language professionals. Improve your skills, earn certifications, and stay ahead in the industry!",
    images: [
      {
        url: "https://www.canva.com/design/DAGgZcmLKSM/TSE-PnLjacJvQL3lwzyrhQ/edit",
        width: 1200,
        height: 630,
        alt: "ProZ Learn",
      },
    ],
  },
  twitter: {
    title: "Boost your translation career with ProZ Learn training & events",
    description:
      "Learn from the best! ProZ Learn offers expert-led training & events for translators & interpreters. Stay competitive in the language industry!",
    images: [
      {
        url: "https://www.canva.com/design/DAGgZcmLKSM/TSE-PnLjacJvQL3lwzyrhQ/edit",
        width: 1200,
        height: 675,
        alt: "ProZ Learn",
      },
    ],
  },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
