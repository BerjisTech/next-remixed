"use client";
import { HUBSPOT_PAGES, PROZ_SOCIALS } from "@/constants/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FooterHubSpot from "./footerHubSpot";
import Image from "next/image";

const Footer = () => {
  let pathname = usePathname() ?? "";

  if (pathname.includes("/session/")) {
    return null;
  }
  if (HUBSPOT_PAGES.includes(pathname)) {
    return <FooterHubSpot />;
  }
  const year = new Date().getFullYear();
  return (
    <footer className="px-8 py-10 bg-primary dark:bg-dark-footer overflow-hidden">
      <div className="max-w-7xl mx-auto gap-2">
        {/*Menu items*/}
        <div className="grid grid-cols-1 md:grid-cols-5 sm:gap-1 pb-3">
          <div className="md:col-span-1 mb-3">
            <h3 className="w-full text-base font-semibold text-accent-light mb-3">
              Find freelance linguists
            </h3>
            <ul className="">
              <li className="text-white ms-0 mb-1 fw-light text-sm">Certified translators</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Interpreters</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Localizers</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Subtitlers</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">More</li>
            </ul>
          </div>
          <div className="md:col-span-1 mb-3">
            <h3 className="w-full text-base font-semibold text-accent-light mb-3">
              Find language companies
            </h3>
            <ul className="">
              <li className="text-white ms-0 mb-1 fw-light text-sm">Business directory</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Blue board</li>
            </ul>
          </div>
          <div className="md:col-span-1 mb-3">
            <h3 className="w-full text-base font-semibold text-accent-light mb-3">
              Tools for language professionals
            </h3>
            <ul className="">
              <li className="text-white ms-0 mb-1 fw-light text-sm">Training & certification</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Invoicing & payments</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Software & AI</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Terminology</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Events</li>
            </ul>
          </div>
          <div className="md:col-span-1 mb-3">
            <h3 className="w-full text-base font-semibold text-accent-light mb-3">About ProZ</h3>
            <ul className="">
              <li className="text-white ms-0 mb-1 fw-light text-sm">Contact information</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">Advertise with us</li>
              <li className="text-white ms-0 mb-1 fw-light text-sm">On the web</li>
            </ul>
          </div>
          <div className="md:col-span-1 mt-3">
            <ul className="list-none flex flex-col xl:flex-row gap-6 xl:gap-2">
              <li className="ms-0 mb-3 fw-light text-sm">
                <Link
                  className="text-primary text-md bg-white p-3 rounded-2xl whitespace-nowrap"
                  href="https://www.proz.com/support?mode=ask"
                >
                  Contact Support
                </Link>
              </li>
              <li className="ms-0 mb-3 fw-light text-sm">
                <Link
                  className="text-primary text-md bg-white p-3 rounded-2xl whitespace-nowrap"
                  href="#"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*Copyright*/}
        <hr className="border-1 mb-2" />
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center mt-3 gap-3 ">
          <div className="">
            <Link href="#" className="logo-footer">
              <Image
                src="/next/next_assets/images/logo.svg"
                className="h-8 w-auto"
                alt=""
                width={10}
                height={10}
              />
            </Link>
          </div>

          <div className="">
            <p className="text-white text-center dark:text-gray-400">
              Copyright © 1999 - {year} ProZ - All rights reserved.{" "}
            </p>
          </div>

          <div className="">
            <ul className="flex flex-row list-none foot-icon ltr:md:text-right  gap-4">
              <li className="inline">
                <Link href={PROZ_SOCIALS.twitter} target="_blank">
                  <Image
                    src="/next/next_assets/images/svg/facebook-transparent.svg"
                    alt="social-logo"
                    height={25}
                    width={25}
                  />
                </Link>
              </li>
              <li className="inline">
                <Link href={PROZ_SOCIALS.linkedin} target="_blank">
                  <Image
                    src="/next/next_assets/images/svg/linkedin-transparent.svg"
                    alt="social-logo"
                    height={25}
                    width={25}
                  />
                </Link>
              </li>
              <li className="inline">
                <Link href={PROZ_SOCIALS.twitter} target="_blank">
                  <Image
                    src="/next/next_assets/images/svg/twitter-transparent.svg"
                    alt="social-logo"
                    height={25}
                    width={25}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
