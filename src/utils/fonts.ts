import { Poppins, Inter, Allison, Merriweather } from "next/font/google";

const poppinsInit = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  preload: true,
});

const merriweatherInit = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
  preload: true,
});

const interInit = Inter({
  subsets: ["latin"],
  weight: [],
  variable: "--font-inter",
  display: "swap",
  // preload: true
});

const allisonInit = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
  display: "swap",
  // preload: true
});

export const poppins = poppinsInit.variable;
export const merriweather = merriweatherInit.variable;
export const inter = interInit.variable;
export const allison = allisonInit.variable;
