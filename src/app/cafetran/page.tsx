import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import _cafetranTestimonials from "@/app/cafetran/_cafetranTestimonials";
import { Button } from "@/components/shadcn/button";
import _features from "@/app/cafetran/_features";

export const metadata: Metadata = {
  title: "CafeTran Espresso",
  description: "A feature-rich, easy-to-use CAT tool. Now with CafeTran Linguist AI!",
};

const CafeTranEspresso = () => {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#6a3e2e] via-[#5f4f3d] to-[#5e9b9a]">
        <div className="max-w-6xl mx-auto my-8 px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left items-center md:items-start">
              <h1 className="text-6xl font-semibold text-white mb-4">CafeTran Espresso</h1>
              <p className="text-base leading-relaxed mb-4 text-white">
                The feature-rich CAT tool that is fun to use now with CafeTran Linguist AI
              </p>
              {/* Download Button with Inline SVG */}
              <Link href="#download-section">
                <Button variant="default" size="xl" className="bg-white hover:bg-grey-300">
                  <span className="text-primary-600 font-semibold">Download now</span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8 12.5L12 16.5M12 16.5L16 12.5M12 16.5V8.5M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z"
                      stroke="#4D9D9D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 w-full h-auto">
              <Image
                src="/next/next_assets/images/cafetran-banner.jpeg"
                alt="CafeTran Banner"
                width={500}
                height={500}
                className="object-contain w-full h-auto rounded-3xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Feature Card */}
          <div className="flex flex-col justify-start items-start relative gap-6 p-6 rounded-3xl bg-secondary border border-accent">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[90px] h-[90px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width="90" height="90" rx="12" fill="#C8E1E1"></rect>
              <path
                d="M46.5204 53.3333H58.477M46.5204 53.3333L43.332 60M46.5204 53.3333L51.2959 43.3484C51.6807 42.5438 51.8731 42.1415 52.1363 42.0144C52.3653 41.9038 52.6321 41.9038 52.8611 42.0144C53.1243 42.1415 53.3167 42.5438 53.7015 43.3484L58.477 53.3333M58.477 53.3333L61.6654 60M28.332 33.3333H38.332M38.332 33.3333H44.1654M38.332 33.3333V30M44.1654 33.3333H48.332M44.1654 33.3333C43.3385 38.2621 41.4197 42.727 38.6079 46.474M41.6654 48.3333C40.6445 47.8747 39.6031 47.2368 38.6079 46.474M38.6079 46.474C36.3537 44.7463 34.3366 42.3777 33.332 40M38.6079 46.474C35.9335 50.0382 32.4511 52.953 28.332 55"
                stroke="#4D9D9D"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-primary-600 dark:text-primary-25">
                Translate
              </p>
              <p className="text-base text-dark-blue-hue dark:text-grey-25">
                Translate faster and easier, using a CAT tool built lovingly — from the ground up —
                by a translator/developer.
              </p>
            </div>
          </div>

          {/* Second Feature Card */}
          <div className="flex flex-col justify-start items-start relative gap-6 p-6 rounded-3xl bg-secondary border border-accent">
            <svg
              width="91"
              height="90"
              viewBox="0 0 91 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[90px] h-[90px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_6098_68049)">
                <rect x="0.667969" width="90" height="90" rx="12" fill="#C8E1E1"></rect>
                <path
                  d="M59.1268 40.0003H47.2518V44.3753C47.2518 47.4768 44.7283 50.0003 41.6268 50.0003C38.5252 50.0003 36.0018 47.4768 36.0018 44.3753V34.8753L30.9315 37.9221C29.4237 38.8206 28.5018 40.4534 28.5018 42.2034V45.8987L22.2518 49.5081C21.0565 50.1956 20.6424 51.7268 21.3377 52.9221L27.5877 63.7503C28.2752 64.9456 29.8065 65.3518 31.0018 64.6643L39.0799 60.0003H49.7518C52.5096 60.0003 54.7518 57.7581 54.7518 55.0003H56.0018C57.3846 55.0003 58.5018 53.8831 58.5018 52.5003V47.5003H59.1268C60.1658 47.5003 61.0018 46.6643 61.0018 45.6253V41.8753C61.0018 40.8362 60.1658 40.0003 59.1268 40.0003Z"
                  fill="#4D9D9D"
                ></path>
              </g>
            </svg>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-primary-600 dark:text-primary-25">
                Inter-operate
              </p>
              <p className="text-base text-dark-blue-hue dark:text-grey-25">
                CafeTran Espresso allows you to accept jobs from clients who use SDL Trados, MemoQ,
                Wordfast, and major CAT tools.
              </p>
            </div>
          </div>

          {/* Third Feature Card */}
          <div className="flex flex-col justify-start items-start relative gap-6 p-6 rounded-3xl bg-secondary border border-accent">
            <svg
              width="91"
              height="90"
              viewBox="0 0 91 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[90px] h-[90px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect x="0.332031" width="90" height="90" rx="12" fill="#C8E1E1"></rect>
              <path
                d="M38.332 48.333C38.332 48.333 40.832 51.6663 44.9987 51.6663C49.1654 51.6663 51.6654 48.333 51.6654 48.333M53.332 40.3997C52.6737 41.208 51.7737 41.6663 50.832 41.6663C49.8904 41.6663 49.0154 41.208 48.332 40.3997M41.6654 40.3997C41.007 41.208 40.107 41.6663 39.1654 41.6663C38.2237 41.6663 37.3487 41.208 36.6654 40.3997M61.6654 44.9997C61.6654 54.2044 54.2034 61.6663 44.9987 61.6663C35.794 61.6663 28.332 54.2044 28.332 44.9997C28.332 35.7949 35.794 28.333 44.9987 28.333C54.2034 28.333 61.6654 35.7949 61.6654 44.9997Z"
                stroke="#4D9D9D"
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-primary-600 dark:text-primary-25">Enjoy!</p>
              <p className="text-base text-dark-blue-hue dark:text-grey-25">
                CafeTran Espresso provides the features you need, without unnecessary hassle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-12 mt-20 px-6">
        <div className="w-full flex flex-col justify-start items-center gap-8">
          <p className="w-full text-5xl font-semibold text-center text-dark-blue-hue dark:text-primary">
            Features
          </p>
          <_features />
        </div>

        {/* Purchase Section */}
        <div className="max-w-7xl w-full flex flex-col items-center gap-10">
          <div className="flex flex-col justify-start items-center bg-primary relative overflow-hidden gap-8 px-8 py-16 rounded-[45px]">
            <div className="flex flex-col justify-start items-center relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-5xl font-semibold text-center text-white">
                Purchase CafeTran Espresso
              </p>
              <div className="w-full text-base text-center text-white">
                <p>
                  The free version of CafeTran Espresso you download will never expire, but it comes
                  with a few limitations: translation memory (TM) files are capped at 1,000
                  translation units (TUs), and glossaries are limited to 500 terms in total. To
                  unlock unlimited access to TMs and glossaries, you'll need a license file tailored
                  to your computer.
                </p>
                <br />
                <p className="font-semibold text-primary-900">
                  Explore the purchase options below.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-start items-start">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 my-2">
                {/* MacOS (Intel) Button with Inline SVG */}
                <div className="flex flex-col">
                  <p className="text-white mb-4 text-center">
                    Annual subscription <br /> €80/year{" "}
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.cafetran.com/cart/?add-to-cart=162"
                    className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-grey-100 hover:bg-gray-300"
                  >
                    <p className="text-xl font-semibold text-primary-700">Subscribe</p>
                  </Link>
                </div>

                {/* Windows Button with Inline SVG */}
                <div className="flex flex-col">
                  <p className="text-white mb-4 text-center">
                    One-time purchase <br /> lifetime license
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.cafetran.com/cart/?add-to-cart=212"
                    className="flex items-center gap-3 py-4 px-6 rounded-full bg-grey-100 hover:bg-gray-300"
                  >
                    <p className="text-xl text-center font-semibold text-primary-700">
                      One-time purchase
                    </p>
                  </Link>
                </div>

                {/* Linux Button with Inline SVG */}
                <div className="flex flex-col">
                  <p className="text-white mb-4 text-center">
                    ProZ Plus membership with <br /> CafeTran Espresso included
                  </p>
                  <Link
                    target="_blank"
                    href="/membership/professional"
                    className="flex items-center gap-3 py-4 px-6 rounded-full bg-grey-100 hover:bg-gray-300"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8008 15.8246L16.9727 21.6453L18.4966 18.2727L14.7493 13.1016L12.8008 15.8246Z"
                        fill="#344054"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.03125 18.2722L7.58011 21.6197C10.403 17.6726 13.2509 13.7255 16.0489 9.77846C17.223 8.02975 17.4229 6.80565 15.4743 3.68295C15.2908 3.36836 15.073 3.07512 14.8248 2.80859L15.0746 3.10837C15.1954 3.27543 15.2882 3.46106 15.3494 3.65797C15.7491 4.95701 13.0511 8.55436 12.2766 9.65355C10.2032 12.5514 8.1297 15.3743 6.03125 18.2722Z"
                        fill="#344054"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7275 8.92936C11.0779 7.98006 10.3535 6.98079 9.87883 5.95655C9.70396 5.60681 9.25429 4.70747 9.17935 4.28278C9.12954 4.07758 9.12954 3.86345 9.17935 3.65824C9.23734 3.48796 9.32163 3.32781 9.42916 3.18359C9.36503 3.26262 9.30659 3.3461 9.25429 3.43341C6.98097 6.706 7.28075 8.10496 8.35495 9.70379L9.7789 11.6274L11.7275 8.92936Z"
                        fill="#344054"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3756 2.38324C11.8089 2.35682 11.241 2.37352 10.6768 2.4332L10.2771 2.78295C10.1493 2.92374 10.0324 3.07407 9.92739 3.23261L9.75252 3.63232C9.71864 3.7542 9.71014 3.88174 9.72754 4.00704C9.73851 4.18363 9.76357 4.35906 9.80248 4.53166C9.8215 4.63298 9.84652 4.73309 9.87743 4.83144C11.4568 4.57344 13.0669 4.56501 14.6489 4.80645C14.6803 4.71673 14.7054 4.6249 14.7239 4.53166C14.7732 4.3697 14.7985 4.20135 14.7988 4.03203C14.8185 3.90682 14.81 3.77878 14.7738 3.6573C14.7327 3.50926 14.674 3.36669 14.5989 3.23261C14.4939 3.07407 14.377 2.92374 14.2492 2.78295L13.8245 2.40822L12.3756 2.38324Z"
                        fill="#344054"
                      />
                    </svg>
                    <p className="text-xl font-semibold text-primary-700">Become a member</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div id="download-section" className="max-w-7xl w-full flex flex-col items-center gap-10">
          <div
            className="flex flex-col justify-start items-center relative overflow-hidden gap-8 px-14 py-16 rounded-[45px]"
            style={{
              background: "linear-gradient(58.36deg, #69432e 3.4%, #74c3c2 88.77%)",
            }}
          >
            <div className="flex flex-col justify-start items-center relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-5xl font-semibold text-center text-white">
                Free Download / Trial
              </p>
              <div className="w-full text-base text-center text-accent-foreground">
                <p className="text-grey-25">
                  CafeTran Espresso is free to download and use indefinitely, giving you plenty of
                  time to explore its features and determine if it’s the right fit for your needs.
                  While you can work with translation memories and glossaries for free up to a
                  certain size, selecting a licensing option unlocks the ability to use them without
                  any size limits.
                </p>
                <br />
                <p className="font-semibold text-white">
                  Try CafeTran Espresso today and discover why so many translators love it!
                </p>
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-start items-start">
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                {/* MacOS (Intel) Button with Inline SVG */}
                <Link
                  target="_blank"
                  href="https://www.cafetran.com/download-for-mac/"
                  className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.4559 23.3203C28.7199 24.9498 28.3679 25.6784 27.4226 27.1184C26.102 29.1295 24.2374 31.639 21.9322 31.6563C19.8817 31.6735 19.3525 30.3184 16.5697 30.3406C13.7869 30.3541 13.2072 31.6809 11.1543 31.66C8.84909 31.639 7.08417 29.3781 5.76232 27.3707C2.06632 21.74 1.67617 15.1406 3.96048 11.6292C5.57648 9.13933 8.13402 7.67718 10.5352 7.67718C12.9808 7.67718 14.518 9.02118 16.5402 9.02118C18.502 9.02118 19.6971 7.67349 22.5254 7.67349C24.6645 7.67349 26.9266 8.83903 28.5426 10.8501C23.2552 13.7473 24.1143 21.2993 29.4559 23.3203ZM20.3789 5.42611C21.4079 4.10549 22.1882 2.2421 21.9051 0.341797C20.2263 0.456258 18.2632 1.52826 17.1162 2.91657C16.0774 4.18057 15.2159 6.05872 15.5519 7.87534C17.3832 7.93441 19.2786 6.84272 20.3789 5.42611Z"
                      fill="black"
                    />
                  </svg>
                  <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                    MacOS (Intel)
                  </p>
                </Link>

                {/* Windows Button with Inline SVG */}
                <Link
                  target="_blank"
                  href="https://www.cafetran.com/download-for-windows-pc/"
                  className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 13V20.434C21 20.6354 20.9594 20.8348 20.8807 21.0202C20.8019 21.2056 20.6867 21.3733 20.5417 21.5132C20.3968 21.6531 20.2252 21.7623 20.0371 21.8345C19.849 21.9066 19.6483 21.9401 19.447 21.933L19.314 21.922L12 21.008V13H21ZM10 13V20.758L4.752 20.102C4.26821 20.0415 3.82316 19.8064 3.50052 19.4409C3.17789 19.0753 2.99989 18.6045 3 18.117V13H10ZM19.314 2.07798C19.5139 2.05301 19.7167 2.06855 19.9105 2.12368C20.1042 2.1788 20.2849 2.27239 20.4416 2.39884C20.5984 2.5253 20.7281 2.68204 20.823 2.85971C20.9179 3.03738 20.9761 3.23235 20.994 3.43298L21 3.56598V11H12V2.99198L19.314 2.07798ZM10 3.24198V11H3V5.88298C2.99989 5.39542 3.17789 4.92461 3.50052 4.55907C3.82316 4.19353 4.26821 3.95843 4.752 3.89798L10 3.24198Z"
                      fill="black"
                    />
                  </svg>
                  <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                    Windows
                  </p>
                </Link>

                {/* Linux Button with Inline SVG */}
                <Link
                  target="_blank"
                  href="https://www.cafetran.com/download-for-linux/"
                  className="flex items-center gap-3 py-4 px-6 rounded-full bg-gray-100 hover:bg-gray-300"
                >
                  <svg
                    width="26"
                    height="29"
                    viewBox="0 0 26 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.48588 27.4397C5.01533 27.6224 6.73378 28.6131 8.1719 28.7881C9.61775 28.9706 10.0652 27.8034 10.0652 27.8034C10.0652 27.8034 11.6922 27.4397 13.4027 27.3978C15.1149 27.3499 16.7357 27.7539 16.7357 27.7539C16.7357 27.7539 17.05 28.4738 17.6367 28.7881C18.2234 29.1084 19.4866 29.1518 20.2963 28.2988C21.1074 27.4397 23.2716 26.3575 24.4869 25.681C25.7098 25.003 25.4854 23.9689 24.7176 23.6546C23.9498 23.3404 23.3213 22.845 23.3692 21.8945C23.411 20.9517 22.6912 20.3232 22.6912 20.3232C22.6912 20.3232 23.3213 18.2489 22.7345 16.5305C22.1478 14.82 20.2128 12.069 18.7251 10.0008C17.2375 7.92646 18.5006 5.53162 17.1461 2.47107C15.7915 -0.594083 12.279 -0.412902 10.3857 0.893566C8.49246 2.20013 9.07292 5.4402 9.16425 6.97747C9.25558 8.50691 9.20605 9.60136 9.03113 9.99466C8.8562 10.394 7.6348 11.8446 6.82363 13.0598C6.01403 14.2812 5.42722 16.803 4.83433 17.8433C4.25378 18.8775 4.65941 19.8202 4.65941 19.8202C4.65941 19.8202 4.25387 19.9595 3.9334 20.6376C3.6191 21.3079 2.99058 21.6283 1.85894 21.8467C0.735035 22.0773 0.735035 22.8018 1.00598 23.613C1.27839 24.4226 1.00598 24.8762 0.691673 25.9104C0.377461 26.9443 1.95027 27.2585 3.48588 27.4397ZM19.3845 22.7227C20.1879 23.0741 21.3427 22.5849 21.6941 22.2334C22.0441 21.8836 22.2917 21.3634 22.2917 21.3634C22.2917 21.3634 22.6431 21.5384 22.6075 22.0941C22.5703 22.6576 22.849 23.461 23.3753 23.7397C23.9016 24.0168 24.7051 24.4037 24.2887 24.7908C23.8644 25.1778 21.5177 26.1221 20.8164 26.859C20.1213 27.5912 19.208 28.1903 18.6522 28.0138C18.0903 27.8389 17.5995 27.0711 17.8411 25.9472C18.0903 24.828 18.3009 23.6003 18.2652 22.8991C18.2281 22.1978 18.0903 21.2535 18.2652 21.1141C18.4402 20.9763 18.7188 21.0429 18.7188 21.0429C18.7188 21.0429 18.5794 22.3729 19.3845 22.7227ZM14.1706 3.77763C14.9446 3.77763 15.5685 4.54544 15.5685 5.48973C15.5685 6.16004 15.2542 6.74059 14.7945 7.01927C14.6784 6.9713 14.5576 6.91708 14.4245 6.86129C14.7031 6.72356 14.8966 6.37215 14.8966 5.96652C14.8966 5.4356 14.57 4.99903 14.1597 4.99903C13.7603 4.99903 13.4274 5.4355 13.4274 5.96652C13.4274 6.16013 13.4755 6.35356 13.5544 6.50528C13.3129 6.40769 13.0946 6.32419 12.9197 6.25763C12.8284 6.02692 12.7741 5.76684 12.7741 5.48982C12.7742 4.54553 13.3965 3.77763 14.1706 3.77763ZM12.2541 6.72825C12.6349 6.79482 13.6813 7.24841 14.0685 7.3877C14.4555 7.52083 14.8842 7.76848 14.8424 8.01622C14.7945 8.2716 14.5948 8.2716 14.0685 8.59207C13.5483 8.90638 12.4121 9.60762 12.0482 9.65559C11.686 9.70355 11.4801 9.49917 11.093 9.24996C10.7059 8.99605 9.98002 8.40316 10.1626 8.08895C10.1626 8.08895 10.7307 7.65395 10.9784 7.43106C11.2262 7.20035 11.867 6.657 12.2541 6.72825ZM10.5852 4.05014C11.1952 4.05014 11.6921 4.77615 11.6921 5.67091C11.6921 5.83349 11.6735 5.98512 11.6442 6.13684C11.4924 6.1848 11.3408 6.2638 11.1952 6.39075C11.124 6.45114 11.0573 6.50528 10.997 6.56567C11.093 6.38458 11.1302 6.1245 11.0868 5.852C11.0032 5.36903 10.6766 5.01146 10.3561 5.05942C10.0341 5.11365 9.84211 5.55638 9.91953 6.04561C10.0047 6.541 10.3251 6.89848 10.6517 6.84435C10.6703 6.83818 10.6873 6.83201 10.7059 6.82575C10.5496 6.97747 10.4041 7.11059 10.2523 7.21895C9.81118 7.01301 9.48454 6.39692 9.48454 5.67091C9.48463 4.76998 9.97376 4.05014 10.5852 4.05014ZM7.18728 15.7627C7.8158 14.772 8.22134 12.6062 8.84985 11.8864C9.48463 11.1681 9.97376 9.63708 9.75087 8.9606C9.75087 8.9606 11.1054 10.5814 12.0482 10.3151C12.9925 10.0426 15.1149 8.46521 15.4291 8.73615C15.7435 9.00857 18.4463 14.9531 18.7188 16.8464C18.9913 18.7381 18.5377 20.184 18.5377 20.184C18.5377 20.184 17.5036 19.9115 17.3704 20.54C17.2373 21.1747 17.2373 23.4736 17.2373 23.4736C17.2373 23.4736 15.8394 25.4087 13.6752 25.7291C11.5109 26.0434 10.4273 25.8142 10.4273 25.8142L9.21203 24.4225C9.21203 24.4225 10.1564 24.2832 10.0232 23.3342C9.89007 22.3915 7.13757 21.0849 6.64218 19.9114C6.14697 18.738 6.55103 16.7549 7.18728 15.7627ZM1.83565 22.862C1.94401 22.3977 3.3465 22.3977 3.88525 22.071C4.42401 21.7444 4.53227 20.8063 4.96736 20.5586C5.3961 20.3047 6.18877 21.2057 6.51541 21.7134C6.83588 22.2088 8.06354 24.3746 8.5651 24.9132C9.07283 25.4566 9.53885 26.1764 9.3933 26.8235C9.25558 27.4705 8.49237 27.9427 8.49237 27.9427C7.80972 28.1533 5.90558 27.3313 5.04028 26.969C4.17498 26.6052 1.97356 26.4968 1.69028 26.1764C1.39927 25.8498 1.82957 25.1299 1.9441 24.4472C2.0462 23.7568 1.72582 23.328 1.83565 22.862Z"
                      fill="black"
                    />
                  </svg>
                  <p className="text-xl font-semibold text-dark-blue-hue dark:text-grey-900">
                    Linux
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-6 flex-col lg:flex-row">
          <Link
            target="_blank"
            href="https://cafetran.freshdesk.com/support/solutions/"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-xl bg-primary-50 hover:border-primary-200 border border-primary-50"
          >
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-primary">
              CafeTran Knowledge Base
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            target="_blank"
            href="https://groups.google.com/forum/?pli=1#!forum/cafetranslators"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-xl bg-primary-50 hover:border-primary-200 border border-primary-50"
          >
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-primary">
              CafeTran Group
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            target="_blank"
            href="https://www.proz.com/forum/1154"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 px-7 py-4 rounded-xl bg-primary-50 hover:border-primary-200 border border-primary-50"
          >
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-primary">
              CafeTran Forum
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#4D9D9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="max-w-7xl flex justify-center items-start flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 h-full p-6 bg-accent rounded-2xl border border-accent flex-col justify-center items-start gap-6 inline-flex overflow-hidden">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-primary text-lg font-bold">
                  Getting started with CafeTran course
                </div>
                <div className="self-stretch text-[#344054] dark:text-grey-200 text-base font-normal leading-snug">
                  In just 2 hours, this self-paced course will teach you how to use CafeTran
                  Espresso from scratch. By the end, you'll be ready to create your first
                  translation project with confidence.
                </div>
              </div>
            </div>
            <Link
              href="/learn/courses"
              className="px-4 py-2.5 bg-primary rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-primary justify-center items-center gap-2 inline-flex overflow-hidden"
            >
              <div className="text-white text-sm font-semibold leading-tight">Learn more</div>
              <div className="w-5 h-5 relative overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="arrow-right">
                    <path
                      id="Icon"
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex w-full lg:w-1/2 h-full p-6 bg-accent rounded-2xl border border-accent flex-col justify-between items-start gap-4 overflow-hidden">
            <div className="w-max h-[35px] justify-start items-center gap-4 inline-flex">
              <Link
                href="/cpn"
                className="w-max flex-col justify-start hover:underline items-start gap-2 inline-flex"
              >
                <div className="self-stretch text-primary text-lg font-bold">Get your badge</div>
              </Link>
            </div>
            <div className="self-stretch text-[#344054] dark:text-grey-200 text-base font-normal leading-snug">
              <p>
                Add these badges to your email signature, profile, or website to show clients you’re
                ready to handle their projects with CafeTran Espresso!
              </p>
              <p>Click on your favorite badge to download it in full resolution.</p>
            </div>
            <div className="w-full justify-around items-center gap-4 flex flex-row">
              <a
                href="/next_assets/images/cafetran-badge-1.png"
                download="cafetran-badge-1.png"
                title="CafeTran cafetran-badge-1.png"
              >
                <Image
                  alt="CafeTran badge"
                  width={120}
                  height={120}
                  src="/next/next_assets/images/cafetran-badge-1.png"
                />
              </a>
              <a
                href="/next_assets/images/cafetran-badge-2.png"
                download="cafetran-badge-2.png"
                title="CafeTran cafetran-badge-2.png"
              >
                <Image
                  alt="CafeTran badge"
                  width={120}
                  height={120}
                  src="/next/next_assets/images/cafetran-badge-2.png"
                />
              </a>
              <a
                href="/next_assets/images/cafetran-badge-3.png"
                download="cafetran-badge-3.png"
                title="CafeTran cafetran-badge-3.png"
              >
                <Image
                  alt="CafeTran badge"
                  width={120}
                  height={120}
                  src="/next/next_assets/images/cafetran-badge-3.png"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <_cafetranTestimonials />
      </div>
    </div>
  );
};

export default CafeTranEspresso;
