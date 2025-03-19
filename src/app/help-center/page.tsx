"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelpCenter: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getUTCHours().toString().padStart(2, "0");
      const minutes = now.getUTCMinutes().toString().padStart(2, "0");
      const seconds = now.getUTCSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Help Center Header */}
      <section className="relative bg-[url('/next/next_assets/images/help/help_center.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center h-[500px] text-[#004040] text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl px-5">
          <h1 className="text-primary text-5xl font-bold mb-8">ProZ.com Help Center</h1>
          <form className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="I need help with..."
              className="w-full max-w-full px-4 py-3 border border-gray-300 rounded-md text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </form>
        </div>
      </section>

      {/* Help Grid Items */}
      <section className="py-8 bg-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl p-6">
          {/* Terminology */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link
              href="/help-center/helpitems/terminology/"
              className="text-purple-600 text-3xl mb-4"
            >
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Terminology */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Terminology</h3>
          </div>

          {/* Jobs & Directories */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link
              href="/help-center/helpitems/job-directories/"
              className="text-purple-600 text-3xl mb-4"
            >
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Jobs & Directories */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Jobs & Directories</h3>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link
              href="/help-center/helpitems/community/"
              className="text-purple-600 text-3xl mb-4"
            >
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Community */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Community</h3>
          </div>

          {/* Education */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link
              href="/help-center/helpitems/education/"
              className="text-purple-600 text-3xl mb-4"
            >
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Education */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Education</h3>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link href="/help-center/helpitems/tools/" className="text-purple-600 text-3xl mb-4">
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Tools */}
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Tools</h3>
          </div>

          {/* Getting Started */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link href="https://www.proz.com/forum/15" className="text-purple-600 text-3xl mb-4">
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Getting Started */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Getting Started</h3>
          </div>

          {/* Account & Profile */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link href="/help-center/helpitems/account/" className="text-purple-600 text-3xl mb-4">
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Account & Profile */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Account & Profile</h3>
          </div>

          {/* Email & Notifications */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link href="/help-center/helpitems/email/" className="text-purple-600 text-3xl mb-4">
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Email & Notifications */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">
              Email & Notifications
            </h3>
          </div>

          {/* Billing & Payment */}
          <div className="flex flex-col items-center p-5 transition-transform transform hover:-translate-y-2">
            <Link href="/help-center/helpitems/billing/" className="text-purple-600 text-3xl mb-4">
              <svg
                className="w-[48px] h-[48px] text-[#CC5DE8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                {/* SVG Path for Billing & Payment */}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                />
              </svg>
            </Link>
            <h3 className="text-xl font-semibold text-[#2d4f52] uppercase">Billing & Payment</h3>
          </div>
        </div>
      </section>

      {/* Support Button */}
      <section className="text-center py-8">
        <Link
          href="https://www.proz.com/support?mode=ask"
          className="inline-block px-6 py-3 bg-[#4d9d9d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-[#3a7878] hover:border hover:border-[#3a7878] transition-transform transform hover:-translate-y-1"
        >
          SUBMIT A SUPPORT REQUEST
        </Link>
        <hr className="my-10 w-3/4 mx-auto border-gray-300" />
      </section>

      {/* Video Call Section */}
      {/*<section className="py-8 bg-gray-50 text-center">*/}
      {/*  <div className="max-w-3xl mx-auto">*/}
      {/*    <p className="text-lg mb-8">*/}
      {/*      If you need help using the site, you can also have a quick face-to-face call with a*/}
      {/*      member of the ProZ.com team.*/}
      {/*    </p>*/}
      {/*    <div className="flex justify-center gap-8 mb-6">*/}
      {/*      {["Erika", "Charlotte"].map((name, index) => (*/}
      {/*        <div key={index} className="flex flex-col items-center">*/}
      {/*          <Image*/}
      {/*            src={`/next/next_assets/images/help/${name.toLowerCase()}.png`}*/}
      {/*            alt={name}*/}
      {/*            className="rounded-full object-cover"*/}
      {/*            width={120}*/}
      {/*            height={120}*/}
      {/*          />*/}
      {/*          <p className="mt-2 text-lg font-semibold">{name}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <p className="text-xl mb-6">*/}
      {/*      The ProZ.com team is available to talk Monday through Friday, from 8am - 7:30pm GMT.*/}
      {/*    </p>*/}
      {/*    <p className="text-xl mb-6">*/}
      {/*      Current time: <span className="font-semibold">{currentTime}</span> GMT*/}
      {/*    </p>*/}
      {/*    <a*/}
      {/*      href="https://meet.google.com/rur-zgwz-avs"*/}
      {/*      className="px-6 py-3 bg-[#4d9d9d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-[#3a7878] hover:border hover:border-[#3a7878] transition-transform transform hover:-translate-y-1"*/}
      {/*    >*/}
      {/*      Have a video call with the team now*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Support Team Section */}
      <section className="py-8 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#2d4f52] mb-10">ProZ.com support team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Yana Dovgopol",
              role: "Support Coordinator",
              country: "Ukraine",
              image: "yana",
            },
            {
              name: "Andrea Capuselli",
              role: "Support Provider",
              country: "Argentina",
              image: "andrea",
            },
            { name: "Karen", role: "Support Provider", country: "Philippines", image: "karen" },
            { name: "Joseph", role: "Support Provider", country: "Kenya", image: "joseph" },
            { name: "Naiara", role: "Support Provider", country: "Argentina", image: "naiara" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={`/next/next_assets/images/help/${member.image}.png`}
                alt={member.name}
                className="rounded-full object-cover mx-auto"
                width={120}
                height={120}
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{`${member.role} • ${member.country}`}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg">
          The ProZ.com support team is available 24 hours a day, Monday through Friday, and
          partially available on weekends.
        </p>
        <div className="flex justify-center mt-8 gap-4">
          <Link
            href="https://proz.com/?sp=site_status"
            className="px-6 py-3 bg-[#4d9d9d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-[#3a7878] hover:border hover:border-[#3a7878] transition-transform transform hover:-translate-y-1"
          >
            Site status
          </Link>
          <Link
            href="https://proz.com/guidance-freelancers"
            className="px-6 py-3 bg-[#4d9d9d] text-white font-bold rounded-md shadow-md hover:bg-white hover:text-[#3a7878] hover:border hover:border-[#3a7878] transition-transform transform hover:-translate-y-1"
          >
            Guidance center
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
