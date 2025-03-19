import { useEffect } from "react";
import Image from "next/image";

// Declare 'hbspt'
declare global {
  interface Window {
    hbspt: any;
  }
}

const GetInvolved = () => {
  // Load HubSpot form when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "YOUR_PORTAL_ID", // Replace with your actual portal ID
          formId: "YOUR_FORM_ID", // Replace with your actual form ID
          target: "#hubspot-form",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col justify-start items-start max-w-[1062px] mx-auto gap-5">
      <div className="flex mx-auto flex-col lg:flex-row items-center gap-6 mt-3">
        {/* Left Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start gap-3">
          <h3 className="text-[#344054] dark:text-gray-300 text-4xl font-semibold leading-[44px] text-center lg:text-left">
            Get involved
          </h3>
          <p className="text-center lg:text-left text-[#344054] dark:text-gray-200 text-base font-medium leading-normal">
            As a participant in the Women in translation Initiative, you can contribute in various
            meaningful ways, depending on your skills, interests, financial goals, and availability.
            Here are some tasks and activities you might engage in:
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 lg:mb-0 flex flex-col items-center lg:items-start gap-3">
          <Image
            src="/next/next_assets/images/wit/get-involved-img.png"
            alt="Woman looking at screen"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Boxes (Add box content here) */}
      <div className="justify-start items-start gap-5 inline-flex">
        {/* Add your boxes content here */}
      </div>

      {/* Get Involved Form Section */}
      <section className="max-w-7xl mx-auto py-[15px]">
        <h2 className="text-4xl font-bold text-[#2B6B6F] mb-4">Get involved</h2>
        <p className="text-base text-[#4B5563] leading-relaxed mb-4">
          As a participant in the Women in translation initiative, you can contribute in various
          meaningful ways depending on your skills, interests, and availability.
        </p>

        {/* HubSpot Form */}
        <div
          id="hubspot-form"
          className="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md"
        >
          {/* HubSpot form will be injected here */}
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
