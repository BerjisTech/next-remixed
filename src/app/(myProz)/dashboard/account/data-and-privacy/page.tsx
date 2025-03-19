import React from "react";
import SideNav from "./_sideNav";
import Link from "next/link";

const page = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row gap-2">
        <div>
          <section
            id="overview"
            className="dark:bg-black border-[1px] flex-grow rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Email</span>
            <span className="text-dark dark:text-primary">
              We use data to make ProZ services as useful as possible, but you decide what types of
              data we collect and use. See below for quick access to tools for controlling your
              personal data at ProZ.
            </span>
            <div className="bg-gray-100 dark:bg-dark text-black dark:text-primary p-5 rounded-xl gap-4 flex flex-col">
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">Profile messages</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Messages sent to you by other users through your ProZ profile, without disclosing
                your email address.
              </p>
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">News and announcements</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-dark text-black dark:text-primary p-5 rounded-xl gap-4 flex flex-col">
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">KudoZ notifications</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Notification of KudoZ questions that match your criteria.
              </p>
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">Job notifications</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Notification of job postings that match your criteria.
              </p>
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">Forum notifications</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">Notification of forum posts you are tracking.</p>
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">Blue Board notifications</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Notification of Blue Board "call for inquiry" requests.
              </p>
              <div className="flex items-center justify-centrer gap-2">
                <span className="flex-grow">Exchange notifications</span>
                <span className="text-primary">on</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.41036 3.25706H4.92198C3.92654 3.25706 3.42882 3.25707 3.04861 3.45079C2.71417 3.6212 2.44226 3.89311 2.27185 4.22755C2.07812 4.60776 2.07812 5.10548 2.07812 6.10092V11.0777C2.07812 12.0731 2.07812 12.5708 2.27185 12.9511C2.44226 13.2855 2.71417 13.5574 3.04861 13.7278C3.42882 13.9215 3.92654 13.9215 4.92198 13.9215H9.89874C10.8942 13.9215 11.3919 13.9215 11.7721 13.7278C12.1066 13.5574 12.3785 13.2855 12.5489 12.9511C12.7426 12.5708 12.7426 12.0731 12.7426 11.0777V8.5893M5.63293 10.3667H6.62505C6.91488 10.3667 7.05979 10.3667 7.19616 10.334C7.31707 10.3049 7.43265 10.2571 7.53867 10.1921C7.65825 10.1188 7.76072 10.0164 7.96566 9.81142L13.6313 4.14577C14.1221 3.65495 14.1221 2.85918 13.6313 2.36836C13.1405 1.87754 12.3447 1.87754 11.8539 2.36836L6.18823 8.034C5.98329 8.23894 5.88083 8.34141 5.80755 8.46099C5.74258 8.56701 5.6947 8.68259 5.66567 8.8035C5.63293 8.93987 5.63293 9.08479 5.63293 9.37461V10.3667Z"
                    stroke="#4D9D9D"
                    strokeWidth="1.18494"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Notification of posts in the ProZ Exchange that match your criteria.
              </p>
            </div>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Unsubscribe from all notifications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
          <section
            id="cookies"
            className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Cookies</span>
            <span className="text-dark dark:text-primary">
              Like most websites, ProZ uses "cookies" to help make the site work the way you expect
              it to. Some of these cookies are essential to the operation of the site, some help to
              improve your experience by providing insights into how the site is being used, and
              others may be set by advertising partners or social sharing tools to personalize your
              experience.
            </span>
            <div className="bg-gray-100 dark:bg-dark text-black dark:text-primary p-5 rounded-xl flex flex-col">
              <p>You are accepting the following types of cookies:</p>
              <ul className="px-4">
                <li>Necessary cookies</li>
                <li>Performance cookies</li>
                <li>Targeting cookies</li>
                <li>Social sharing cookies</li>
              </ul>
            </div>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Manage your cookies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
          <section
            id="profile_publishing"
            className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Profile data</span>
            <span className="text-dark dark:text-primary">
              Like most websites, ProZ uses "cookies" to help make the site work the way you expect
              it to. Some of these cookies are essential to the operation of the site, some help to
              improve your experience by providing insights into how the site is being used, and
              others may be set by advertising partners or social sharing tools to personalize your
              experience.
            </span>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              View or edit your profile data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <span className="text-black dark:text-primary">
              You can also control where your profile information is published. In addition to being
              visible on the ProZ website, profile data you have chosen to share publicly can be
              indexed by search engines and accessed via the ProZ API. But you can change that if
              you prefer.
            </span>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Control where your profile is published
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
          <section
            id="third_party_apps"
            className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Apps</span>
            <span className="text-dark dark:text-primary">
              Other companies create apps that you can optionally connect to your ProZ account, to
              integrate their tools with ProZ services or to allow you to log in to other sites
              using your ProZ account. You can control what information you share with these apps,
              or revoke their access to your account.
            </span>
            <span className="bg-accent-light p-3 rounded-md dark:bg-dark dark:text-accent-light">
              No apps are connected to your ProZ account.
            </span>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Manage your apps
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
          <section
            id="opt_out"
            className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Opt-out</span>
            <span className="text-dark dark:text-primary">
              You can choose to opt out of specific ProZ features, such as the Feedback network and
              the Follow function. In some cases, opting back into these features might require you
              to contact the support team.{" "}
            </span>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Opt out of ProZ features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
          <section
            id="download_data"
            className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
          >
            <span className="text-primary text-xl">Download or remove all personal data</span>
            <span className="text-dark dark:text-primary">
              You can request a copy of all of your personal data. Please note that it can take some
              time to process these requests (up to 30 days). You can also request that ProZ
              permanently delete all of your personal data.
            </span>
            <Link href="#" className="flex items-center justify-start gap-2 text-primary">
              Request access to or removal of personal data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12.0002H20M20 12.0002L14 6.00024M20 12.0002L14 18.0002"
                  stroke="#4D9D9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </section>
        </div>
        <SideNav />
      </div>
    </React.Fragment>
  );
};
export default page;
