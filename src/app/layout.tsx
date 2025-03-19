import type { Metadata } from "next";
import Header from "@/components/navigation/header/header";
import Footer from "@/components/shared/footer/footer";
import { merriweather, poppins } from "@/utils/fonts";
import Metrics from "@/utils/metrices";
import { StoreProvider } from "@/providers/StoreProvider";
import AuthProvider from "@/providers/AuthProvider";
import { UserProvider } from "@/providers/UserProvider";
import { Provider, ErrorBoundary } from "@rollbar/react";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { PseudoUserPopup } from "@/components/shared/pseudoPopup";
import FloatingBtn from "./_floatingBtn";
import FeedbackModal from "./_feedbackModal";
// import PrototypeWrapper from "@/components/shared/prototypeWrapper";

export const metadata: Metadata = {
  metadataBase: process.env.METADATA_BASEURL
    ? new URL(process.env.METADATA_BASEURL as string)
    : new URL("https://proz.com"),
  title: {
    default: "Freelance translators & Translation companies | ProZ.com ",
    template: "%s | ProZ.com",
  },
  description:
    "Translation service and translation jobs for freelance translators and translation agencies.",
  authors: [{ name: "ProZ.com Translation Services", url: "https://www.proz.com/" }],
  keywords: ["translation", "translator", "freelance", "job", "service", "agency"],
  robots: "index, follow",
  openGraph: {
    title: "Freelance translators and translation companies | ProZ.com",
    description:
      "Translation service and translation jobs for freelance translators and translation agencies.",
    images: [
      {
        url: "/next/next_assets/images/ProzEllipseLogo.png",
      },
    ],
    url: "https://www.proz.com/",
    type: "website",
    siteName: "ProZ.com",
    locale: "en_US",
    alternateLocale: [
      "es_ES",
      "fr_FR",
      "de_DE",
      "it_IT",
      "pt_PT",
      "ja_JP",
      "zh_CN",
      "ko_KR",
      "ru_RU",
      "pl_PL",
      "nl_NL",
      "sv_SE",
      "da_DK",
      "fi_FI",
      "no_NO",
      "cs_CZ",
      "hu_HU",
      "ro_RO",
      "tr_TR",
      "ar_AR",
      "he_IL",
      "id_ID",
      "th_TH",
      "vi_VN",
      "el_GR",
      "bg_BG",
      "uk_UA",
      "hr_HR",
      "sr_RS",
      "sk_SK",
      "sl_SI",
      "et_EE",
      "lv_LV",
      "lt_LT",
      "mt_MT",
      "sq_AL",
      "mk_MK",
      "bs_BA",
      "is_IS",
      "cy_GB",
      "ga_IE",
      "eu_ES",
      "ca_ES",
      "gl_ES",
      "ast_ES",
      "sw_SW",
    ],
  },
};

const rollbarConfig = {
  accessToken: "c39922999ef14a03add3c8bbf862d9ed",
  environment: "production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <StoreProvider>
          <AuthProvider>
            <UserProvider>
              <html lang="en" suppressHydrationWarning={true}>
                <head>
                  {/* <meta charSet="utf-8" /> */}
                  <meta charSet="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta name="theme-color" content="#2e6969" />
                  <base href="/" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <link
                    rel="icon"
                    type="image/x-icon"
                    href="/next/next_assets/images/ProzEllipseLogo.png"
                  />
                </head>
                <body className={`${poppins} ${merriweather} antialiased bg-white dark:bg-black`}>
                  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header />
                    <main className="bg-white dark:bg-dark">
                      {/* <PrototypeWrapper /> */}
                      {children}
                      <FloatingBtn />
                      <FeedbackModal />
                    </main>
                    <Footer />
                    <Metrics />
                    <Toaster richColors />
                    <PseudoUserPopup />
                  </ThemeProvider>
                </body>
              </html>
            </UserProvider>
          </AuthProvider>
        </StoreProvider>
      </ErrorBoundary>
    </Provider>
  );
}
