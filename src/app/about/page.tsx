// import {useParams} from 'next/navigation';
// import {AccordionItem, Content, Service, StaffMember} from '@/interfaces/general';
// Assuming _currentPoll.tsx is in the same directory as _services.tsx or in src/app/about/overhaul
import ServicesSection from "./_services";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/constants/common";
import TestimonialCard from "@/components/shared/cards/testimonialCard";
import _team from "@/app/about/_team";
import { Metadata } from "next";
import { Button } from "@/components/shadcn/button";
import { SquareArrowOutUpRight } from "lucide-react";
export const metadata: Metadata = {
  title: "About",
  description:
    "Serving the world's largest community of translators, ProZ delivers a comprehensive network of essential services, resources and experiences that enhance the lives of its members.",
};
const About = () => {
  // const {page} = useParams<{ page: string }>();
  // const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
  //     {
  //         tab: 1,
  //         title: "ProZ's guiding principles",
  //         content: '',
  //         isOpen: false,
  //     },
  // ]);

  // const loadContent = () => {
  //     const files: Content[] = [
  //         {
  //             title: '1. ProZ is a "translation workplace"',
  //             body: "All services, activities and discussion on this site focus on the art and business of translation, as specified in the site's definition of scope. All areas of the site are structured in such a way as to facilitate results-oriented collaboration for mutual benefit, and to that end, there are clear rules which moderators and staff strive to enforce in a transparent, uniform and respectful manner.",
  //         },
  //         {
  //             title:
  //                 '2. A collaborative spirit is at the heart of ProZ and everything in it.',
  //             body: 'KudoZ, the Blue Board, powwows, the forums, articles, quick polls, Wikiwords, group buying, Glosspost, the exchange, our unique conferences... all of the great things available here can only exist because of our worldwide community of professionals who choose to cooperate for mutual benefit.',
  //         },
  //         {
  //             title: '3. The ProZ team has a clear mission.',
  //             body: 'The ProZ team works to "provide tools and opportunities that translators, translation companies, and others in the language industry use to (1) network, (2) expand their businesses, (3) improve their work, and (4) have more fun."',
  //         },
  //         {
  //             title:
  //                 '4. Relationships are based on mutual respect, fairness and professionalism.',
  //             body: 'These principles are embedded in the privacy policy, the structure of the site and the nature and application of our ground rules.',
  //         },
  //         {
  //             title: "5. ProZ provides 'tools and opportunities'.",
  //             body: 'This workplace is a venue, with tools for you to use (or not use) in the way that best suits you and your business. Opportunities are provided, onsite and in face-to-face powwows and conferences to network, exchange tips and socialize.',
  //         },
  //         {
  //             title: '6. The person with the need sets the parameters.',
  //             body: 'Whether it be KudoZ, the forums or the jobs system, the person who has the need is given options for setting parameters and directing the flow of an exchange. For example, KudoZ askers are given the option of making a question for-points or not, of directing the question to people who meet certain criteria, etc. The feeling is that this approach, which may be the one most likely to ensure that needs are met, is appropriate for our collaborative community and service industry.',
  //         },
  //     ];
  //     setContent(files);
  // };

  // const toggleAccordion = (item: AccordionItem) => {
  //     setAccordionItems((prevItems) =>
  //         prevItems.map((i) =>
  //             i.tab === item.tab ? {...i, isOpen: !i.isOpen} : i
  //         )
  //     );
  // };

  return (
    <div>
      <section className="">
        {/* <!--Hero--> */}
        <div className="relative bg-secondary py-12 overflow-hidden dark:bg-grey-900">
          <div className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"></div>
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-3 text-center">
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-bold font-merriweather leading-[60px] tracking-tight text-primary-500 dark:text-primary-300">
                  About ProZ
                </span>
              </h1>
              <p className="font-poppins text-xl text-center text-grey-700 dark:text-grey-200">
                Serving the world's largest community of translators, ProZ delivers a comprehensive
                network of essential services, resources and experiences that enhance the lives of
                its members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Mission statement*/}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 relative z-10 gap-4 py-8">
        {/* <!-- Left Column --> */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          <h2 className="text-center sm:text-left text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px] mb-2">
            ProZ's mission statement
          </h2>
          <p className="text-dark dark:text-slate-100 mb-3">
            ProZ's mission is to empower language industry professionals to achieve their business
            objectives and realize their full potential.
          </p>
          <p className="text-dark dark:text-slate-100 font-bold mb-3">ProZ does this by:</p>
          <ul className="text-dark dark:text-slate-100 list-disc pl-5 space-y-2 mt-0 mb-5">
            <li className="ms-2">being committed to member success,</li>
            <li className="ms-2">providing access to state-of-the-art tools,</li>
            <li className="ms-2">educating and inspiring,</li>
            <li className="ms-2">
              fostering collaboration among positive, like-minded professionals.
            </li>
          </ul>
          <Link href="/membership/professional" target={"_blank"}>
            <Button>
              Become a member
              <SquareArrowOutUpRight />
            </Button>
          </Link>
        </div>

        {/* <!-- Right Column --> */}
        <div className="lg:w-1/2 w-full h-auto">
          <Image
            src="/next/next_assets/images/about_1.png"
            alt="Probono hero image"
            width={500}
            height={500}
            className="object-contain w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/*Guiding principles*/}
      <section className="py-4 relative dark:text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          {/*<div className="grid">*/}
          {/*    {accordionItems.map((item) => (*/}
          {/*        <div key={item.tab} className="rounded-lg">*/}
          {/*            <button*/}
          {/*                onClick={() => toggleAccordion(item)}*/}
          {/*                className={`bg-gray-100 hover:bg-primary-50 w-full text-left font-medium px-4 py-3 flex rounded-xl justify-between items-center focus:outline-none transition-all ${item.isOpen ? ' bg-green-gradient dark:bg-green-gradient-dark text-white' : 'tertiary dark:bg-dark'} hover:bg-gradient`}*/}
          {/*            > ProZ's guiding principles*/}
          {/*                /!*<span className="font-semibold">{item.title}</span>*!/*/}
          {/*                <span*/}
          {/*                    className={`transition-transform duration-800 ease-in-out ${item.isOpen ? 'rotate-180' : ''}`}><i*/}
          {/*                    className={`uil uil-${item.isOpen ? 'minus' : 'plus'}`}></i></span>*/}
          {/*            </button>*/}
          {/*            <div className={`accordion-content ${item.isOpen ? 'accordion-content-open' : ''}`}>*/}
          {/*                <div className="mx-0 p-8 bg-tertiary dark:bg-dark rounded-lg">*/}
          {/*                    {content.map((cont, idx) => (*/}
          {/*                        <div key={idx} className="mb-5 pb-3 border-b border-gray-300">*/}
          {/*                            <h3 className="text-lg text-primary dark:text-slate-100 font-bold mb-3">*/}
          {/*                                {cont.title} <i className="uil uil-link"></i>*/}
          {/*                            </h3>*/}
          {/*                            <p className="text-md ms-4">{cont.body}</p>*/}
          {/*                        </div>*/}
          {/*                    ))}*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    ))}*/}
          {/*</div>*/}

          <div className="grid md:grid-cols-4 grid-cols-1 gap-x-[30px] mt-12 mb-10">
            <div className="col-span-4">
              <h2 className="text-center text-grey-700 dark:text-primary-200 text-3xl font-bold font-merriweather leading-[44px] mb-2">
                ProZ in numbers{" "}
              </h2>
            </div>
            <div className="col-span-4 mb-3 md:col-span-1 bg-tertiary p-6 rounded-xl font-light bg-grey-50 dark:bg-grey-900 dark:border dark:border-grey-800 dark:hover:bg-slate-900 light-primary-hover">
              <h1 className="text-primary dark:text-primary-100 font-merriweather text-2xl my-4 font-bold">
                1999
              </h1>
              <p className="text-dark dark:text-slate-100 text-thin mb-3">
                The year ProZ was founded
              </p>
            </div>
            <div className="col-span-4 mb-3 md:col-span-1 bg-tertiary p-6 rounded-xl font-light bg-grey-50 dark:bg-grey-900 dark:border dark:border-grey-800 dark:hover:bg-slate-900 light-primary-hover">
              <h1 className="text-primary dark:text-primary-100 font-merriweather text-2xl my-4 font-bold">
                1,441,143
              </h1>
              <p className="text-dark dark:text-slate-100 text-thin mb-3">Registered users</p>
            </div>
            <div className="col-span-4 mb-3 md:col-span-1 bg-tertiary p-6 rounded-xl font-light bg-grey-50 dark:bg-grey-900 dark:border dark:border-grey-800 dark:hover:bg-slate-900 light-primary-hover">
              <h1 className="text-primary dark:text-primary-100 font-merriweather text-2xl my-4 font-bold">
                48,429
              </h1>
              <p className="text-dark dark:text-slate-100 text-thin mb-3">Job offers posted</p>
            </div>
            <div className="col-span-4 mb-3 md:col-span-1 bg-tertiary p-6 rounded-xl font-light bg-grey-50 dark:bg-grey-900 dark:border dark:border-grey-800 dark:hover:bg-slate-900 light-primary-hover">
              <h1 className="text-primary dark:text-primary-100 font-merriweather text-2xl my-4 font-bold">
                3,893,881
              </h1>
              <p className="text-dark dark:text-slate-100 text-thin mb-3">
                Translation questions asked
              </p>
            </div>
          </div>

          {/*Services vertical tabs*/}
          <ServicesSection />
        </div>
      </section>

      {/*Testimonials*/}
      <div className="w-full pt-12 pb-20 bg-primary-50 dark:bg-grey-800 justify-start items-center gap-16 m-auto">
        <div className="max-w-screen-xl flex flex-col px-4 gap-4 mx-auto">
          <div className="text-center text-grey-700 text-3xl font-bold font-merriweather leading-[44px] dark:text-primary-200">
            Testimonials
          </div>
          <div className="flex flex-col lg:flex-row grow shrink basis-0 self-stretch justify-center items-start gap-5 w-full mx-auto">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto md:py-24 py-12 scroll-mt-32" id="meet-the-team">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] px-10 align-items-center items-center mb-4">
          <div className="md:col-span-8">
            <h2 className="text-center sm:text-left text-grey-700 dark:text-grey-100 text-3xl font-bold font-merriweather leading-[44px] mb-2">
              Meet the ProZ team
            </h2>
            <p className="text-dark mb-3 dark:text-slate-200">
              ProZ was created by a translator. It is maintained today by a team of 39 staff
              members, working from offices in the United States, Argentina and Ukraine, as well as
              remotely from around the world.
            </p>
          </div>
          <div className="md:col-span-4 text-center items-center justify-center">
            <div className="h-auto w-[300px] mx-auto">
              <Image
                src="/next/next_assets/images/henry_dotterer.jpg"
                alt="Probono hero image"
                width={500}
                height={500}
                className="object-contain w-full h-auto rounded-xl"
              />
            </div>
            <p className="font-merriweather text-2xl text-grey-700 dark:text-grey-100 mb-3 mt-2">
              <strong>Henry Dotterer</strong> - President
            </p>
          </div>
        </div>
        <_team />
      </div>

      {/*  Contact section  */}
      <div className="px-4 lg:px-8 pb-10">
        <div className="relative z-10 -mb-[18px] flex flex-col lg:flex-row justify-around items-start gap-8 px-6 lg:px-8 py-8 max-w-7xl mx-auto rounded-2xl bg-accent dark:bg-grey-800 shadow-lg">
          {/* Contact Us Section */}
          <div className="flex flex-col lg:w-1/4 gap-2">
            <h2 className="text-2xl font-semibold text-[#468f8f]">Contact us</h2>
            <p className="text-sm text-grey-700 dark:text-slate-100">
              Don’t hesitate to reach out to us. We’re always happy to help! The best way to contact
              the team is by submitting a support request. The support team's office hours are from
              6:00 to 21:00 GMT, Monday through Friday.
            </p>
            <Link href="#" target={"_blank"} className="mt-2">
              <Button>
                Contact support
                <SquareArrowOutUpRight />
              </Button>
            </Link>
          </div>

          {/* Office Locations Section */}
          <div className="lg:w-3/4 w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#468f8f]">Office locations</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="flex flex-col col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-base font-semibold text-[#151515] dark:text-primary-200">
                  ProZ headquarters
                </h3>
                <address className="text-sm text-grey-700 dark:text-slate-100 not-italic">
                  2509 James Street
                  <br />
                  P.O. Box 323
                  <br />
                  Syracuse, NY 13206-9277
                  <br />
                  USA
                  <br />
                  +1-315-463-7323
                </address>
              </div>
              <div className="flex flex-col col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-base font-semibold text-[#151515] dark:text-primary-200">
                  ProZ Argentina
                </h3>
                <address className="text-sm text-grey-700 dark:text-slate-100 not-italic">
                  Calle 14 nro. 622 1/2 entre 44 y 45
                  <br />
                  La Plata (B1900AND)
                  <br />
                  Buenos Aires, Argentina
                </address>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-base font-semibold text-[#151515] dark:text-primary-200">
                  ProZ Ukraine
                </h3>
                <address className="text-sm text-grey-700 dark:text-slate-100 not-italic">
                  6 Karazina St.
                  <br />
                  Kharkiv, 61002
                  <br />
                  Ukraine
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
