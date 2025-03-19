import { Metadata } from "next";
import Image from "next/image";
import _hubspotForm from "@/app/managed-services/_hubspotForm";
import _scrollToHero from "@/app/managed-services/_scrollToHero";

export const metadata: Metadata = {
  title: "ProZ Managed Services",
  description: "Access ProZ Managed Services to streamline your back office operations.",
};

const ManagedServices = () => {
  return (
    <div>
      {/*Hero section*/}
      <div className="relative bg-[#005C51] py-12 overflow-hidden" id="hero-section">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
          {/* <!-- Left Column --> */}
          <div className="lg:w-2/3 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h1 className="text-white text-5xl font-bold font-merriweather leading-[60px] tracking-tight mb-3 text-center lg:text-left">
              ProZ{" "}
              <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-[#FADA6D]">
                Managed Services
              </span>
            </h1>
            <p className="font-poppins text-xl text-center lg:text-left text-grey-200 dark:text-grey-200">
              Running an LSP is hard. Access ProZ Managed Services to streamline your back office
              operations.
              <br /> <br />
              The ProZ team will draw from the ProZ community of over 1.4m language professionals to
              access the services your company requires.
            </p>
          </div>

          {/* <!-- Right Column -->
                     TO DO: Integrate form in place of the image below
                 */}
          <div className="lg:w-1/3 w-full h-auto">
            {/*<Image*/}
            {/*     src="/next/next_assets/images/form-placeholder.png"*/}
            {/*     alt="Probono hero image"*/}
            {/*     width={800}*/}
            {/*     height={500}*/}
            {/*     className="object-contain w-full h-auto"*/}
            {/*/>*/}

            {/* HubSpot Form */}
            <div className="bg-grey-50 p-6 rounded-2xl shadow-2xl">
              <_hubspotForm></_hubspotForm>
            </div>
          </div>
        </div>
      </div>

      {/*What we offer*/}
      <div className="max-w-5xl mx-auto flex flex-col gap-2 py-16">
        <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200 mb-4">
          What we offer
        </h2>

        {/* Rows */}
        <div className="flex flex-col gap-8">
          {/*Interpreter pool*/}
          <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
            {/* <!-- Left Column --> */}
            <div className="lg:w-1/2 lg:mb-0 flex flex-col">
              <h3 className="text-left text-grey-700 text-2xl font-semibold leading-[44px]">
                Pre-screened professionals
              </h3>
              <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
                The ProZ interpreter network is available on demand in over 60 languages. Recruit
                from it or use it to back your own network. Pools are available also for subtitlers.
              </p>
            </div>
            {/* <!-- Right Column --> */}
            <div className="lg:w-1/2 w-full h-auto">
              <Image
                src="/next/next_assets/images/managed-services/pools.png"
                alt="Probono hero image"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>

          {/*Project management*/}
          <div className="flex flex-col lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
            {/* <!-- Left Column --> */}
            <div className="lg:w-1/2 w-full h-auto">
              <Image
                src="/next/next_assets/images/managed-services/project-management.png"
                alt="Probono hero image"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* <!-- Right Column --> */}
            <div className="lg:w-1/2 lg:mb-0 flex flex-col">
              <h3 className="text-left text-grey-700 text-2xl font-semibold leading-[44px]">
                Project management
              </h3>
              <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
                Let the ProZ team get the job done for you so that you concentrate on getting the
                next one.
              </p>
            </div>
          </div>

          {/*Recruitment*/}
          <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
            {/* <!-- Left Column --> */}
            <div className="lg:w-1/2 lg:mb-0 flex flex-col">
              <h3 className="text-left text-grey-700 text-2xl font-semibold leading-[44px]">
                Recruitment
              </h3>
              <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
                Help in finding the best talent, according to your requirements.
              </p>
            </div>
            {/* <!-- Right Column --> */}
            <div className="lg:w-1/2 w-full h-auto">
              <Image
                src="/next/next_assets/images/managed-services/recruitment.png"
                alt="Probono hero image"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>

          {/*More*/}
          <div className="flex flex-col lg:flex-row items-center px-6 gap-3 md:gap-6 mb-6">
            {/* <!-- Left Column --> */}
            <div className="lg:w-1/2 w-full h-auto">
              <Image
                src="/next/next_assets/images/managed-services/compliance.png"
                alt="Probono hero image"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* <!-- Right Column --> */}
            <div className="lg:w-1/2 lg:mb-0 flex flex-col">
              <h3 className="text-left text-grey-700 text-2xl font-semibold leading-[44px]">
                More...
              </h3>
              <p className="font-poppins text-base text-grey-700 dark:text-grey-200">
                ProZ can help with on-demand localization services, compliance and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Why choose ProZ Managed Services*/}
      <div className="flex flex-col max-w-7xl mx-auto gap-6 px-3 pb-24">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Why choose ProZ Managed Services?
          </h2>
        </div>
        {/*Boxes*/}
        <div className="grid grid-cols-4 justify-start items-start gap-5">
          <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#FADA6D] rounded-custom flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-3 flex">
              <p className="self-stretch text-[#344054] dark:text-grey-800 text-lg font-semibold font-poppins leading-7">
                Part of ProZ
              </p>
              <p className="self-stretch text-grey-900 dark:text-grey-800 text-base font-normal font-['Poppins'] leading-relaxed">
                Access to a global network of over 1.4 million language professionals.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#FADA6D] rounded-custom flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-3 flex">
              <p className="self-stretch text-[#344054] dark:text-grey-800 text-lg font-semibold font-['Poppins'] leading-7">
                API connectivity
              </p>
              <p className="self-stretch text-grey-900 dark:text-grey-800 text-base font-normal leading-relaxed">
                ProZ Managed Services can be accessed from within your applications.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#FADA6D] rounded-custom flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-3 flex">
              <p className="self-stretch text-[#344054] dark:text-grey-800 text-lg font-semibold font-['Poppins'] leading-7">
                Global reach
              </p>
              <p className="self-stretch text-grey-900 dark:text-grey-800 text-base font-normal font-['Poppins'] leading-relaxed">
                ProZ translators, interpreters, subtitlers and other service providers work in all
                of the world's major languages and fields of expertise.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 col-span-4 grow shrink basis-0 self-stretch p-6 bg-[#FADA6D] rounded-custom flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-3 flex">
              <p className="self-stretch text-[#344054] dark:text-grey-800 text-lg font-semibold font-['Poppins'] leading-7">
                Tailored solutions
              </p>
              <p className="self-stretch text-grey-900 dark:text-grey-800 text-base font-normal font-['Poppins'] leading-relaxed">
                ProZ.com Managed Services has the flexibility to adapt to your needs and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-50 dark:bg-primary-900 flex flex-col mx-auto items-center gap-2 py-8">
        <h2 className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] mb-4">
          Partner with ProZ.com Managed Services
        </h2>
        <div className="">
          <_scrollToHero />
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;
