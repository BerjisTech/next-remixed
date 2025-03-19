"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Clock3, ArrowUpRight } from "lucide-react";
import ApplicationsDrawer from "./applicationDrawer";
import { Button } from "@/components/shadcn/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import Image from "next/image";

const CareersPage: React.FC = () => {
  const { showCareersDrawer } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<any>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/next/api/career/jobs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      return Array.isArray(data) ? data : [];
    };

    let jobs = fetchJobs();
    jobs.then((data: any) => {
      console.log(data);
      setJobs(data);
      setLoading(false);
    });
  }, []);

  const toggleDrawer = () => {
    dispatch(setContentSliceBits({ bitToSet: "showCareersDrawer", value: !showCareersDrawer }));
  };

  return (
    <>
      {/*<div className='flex justify-center py-4'>*/}
      {/*    <div className="w-full h-[299px] relative bg-[#edf5f5] rounded-3xl overflow-hidden max-w-5xl">*/}
      {/*        <img className="h-[343px] left-0 top-[-12px] absolute mix-blend-lighten"*/}
      {/*             src="https://cfcdn.proz.com/file_resources/other/47afae1d549e8b2ae72096375ca14fd7_27884383_white_linen_texture%201.png"/>*/}
      {/*        <div className="absolute h-[299px] top-0 w-[456px]" style={{insetInlineEnd: '0px'}}>*/}
      {/*            <img className="h-[317px] left-0 top-[-13px] absolute"*/}
      {/*                 src="https://cfcdn.proz.com/file_resources/other/d09b80728a08f0daefc0c6d3bee6da83_Frame_3161.png"/>*/}
      {/*        </div>*/}
      {/*        <div className="w-[50%] h-[124px] left-[48px] top-[88px] absolute flex-col justify-start items-start gap-2 inline-flex">*/}
      {/*            <div className="self-stretch text-[#4d9d9d] text-5xl font-bold font-['Merriweather'] leading-[60px]">ProZ.com*/}
      {/*                careers*/}
      {/*            </div>*/}
      {/*            <div className="self-stretch text-[#1d2939] text-base font-normal font-['Poppins'] leading-7">Empower*/}
      {/*                language industry professionals to achieve their business objectives and realize their full*/}
      {/*                potential.*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <header className="max-w-7xl mx-auto w-full rounded-3xl overflow-hidden px-4 md:px-8 xl:px-0">
        {/* Background Section */}
        <div className="relative bg-secondary py-6 lg:py-12 px-8 overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-[url('/next/next_assets/images/linen_texture.png')] bg-cover bg-no-repeat opacity-10"
            style={{
              borderRadius: "inherit", // Inherit border-radius from parent
            }}
          ></div>

          {/* Right image */}
          <div
            className="absolute right-0 top-0 h-full w-2/5 hidden md:block"
            style={{
              borderRadius: "inherit",
            }}
          >
            <Image
              src="/next/next_assets/images/careers/careers-hero.png"
              alt="Woman using a laptop"
              className="dark:mix-blend-multiply"
              layout="fill"
              objectFit="cover"
              objectPosition="left-bottom"
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col gap-2 w-2/3">
              <h1 className="text-5xl text-left font-bold font-merriweather leading-[60px] tracking-tight text-primary dark:text-primary-25">
                ProZ Careers
              </h1>
              <p className="w-full text-sm sm:text-base text-left text-black dark:text-accent-foreground">
                Empowering language industry professionals to achieve their business objectives and
                realize their full potential!
              </p>
            </div>
          </div>
        </div>
      </header>

      {loading && (
        <div className="w-full h-[500px] flex justify-center items-center">
          <div className="w-10 h-10 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
        </div>
      )}
      {!loading && (
        <div className="max-w-6xl mx-auto w-full pb-44 px-6 pt-8 flex-col gap-6">
          <div className="pb-4 self-stretch text-primary text-3xl font-bold font-merriweather leading-[38px]">
            Open roles
          </div>
          {jobs.map((job: any) => (
            <div key={job.career_job_id}>
              <div className="mx-auto self-stretch p-8 bg-accent dark:border dark:border-primary-700 rounded-[30px] flex-col justify-start items-start gap-8 flex mb-8">
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch justify-start items-center gap-6 inline-flex">
                    <div className=" text-3xl font-medium font-['Poppins'] leading-[38px]">
                      {job.title}
                    </div>
                  </div>
                  <div className="self-stretch">
                    <span className=" text-base font-normal font-['Poppins'] leading-7">
                      {job.description}
                    </span>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="px-3 py-2 rounded-[100px] border border-[#667085] justify-start items-center gap-2 flex">
                      <div className="w-4 h-4 px-[2.67px] py-[1.33px] justify-center items-center flex overflow-hidden">
                        <MapPin />
                      </div>
                      <div className="text-grey-700 text-xs font-medium leading-[18px]">
                        {job.type == "remote" ? "Remote" : "Hybrid"}
                      </div>
                    </div>
                    {job.is_full_time == "y" && (
                      <div className="px-3 py-2 rounded-[100px] border border-[#667085] justify-start items-center gap-2 flex">
                        <div className="w-4 h-4 p-[1.33px] justify-center items-center flex overflow-hidden">
                          <Clock3 />
                        </div>
                        <div className="text-grey-700 text-xs font-medium font-['Poppins'] leading-[18px]">
                          Full time
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                  <div className=" text-xl font-semibold font-['Poppins'] leading-[30px]">
                    Requirements
                  </div>
                  <div className="self-stretch  text-base font-normal font-['Poppins'] leading-7">
                    <ul className="list-disc pl-5">
                      {job.requirements.map((requirement: any, index: any) => (
                        <li key={index}>{requirement.requirement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                  <div className=" text-xl font-semibold font-['Poppins'] leading-[30px]">
                    Why Work at ProZ.com?
                  </div>
                  <div className="self-stretch">
                    <span className=" text-base font-semibold font-['Poppins'] leading-[30px]">
                      Impactful work:
                    </span>
                    <span className=" text-base font-normal font-['Poppins'] leading-7">
                      {" "}
                      Contribute to a platform that supports thousands of language professionals
                      globally.
                      <br />
                    </span>
                    <span className=" text-base font-semibold font-['Poppins'] leading-[30px]">
                      Inclusive culture:
                    </span>
                    <span className=" text-base font-normal font-['Poppins'] leading-7">
                      {" "}
                      Join a diverse team that values collaboration, creativity, and innovation.
                      <br />
                    </span>
                    <span className=" text-base font-semibold font-['Poppins'] leading-[30px]">
                      Professional development:
                    </span>
                    <span className=" text-base font-normal font-['Poppins'] leading-7">
                      {" "}
                      We prioritize your growth through ongoing training opportunities and access to
                      industry resources.
                    </span>
                  </div>
                </div>
                <Button
                  autoFocus
                  onClick={toggleDrawer}
                  type="button"
                  className="px-7 py-4 bg-[#4d9d9d] rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#4d9d9d] justify-center items-center gap-3 inline-flex overflow-hidden cursor-pointer"
                >
                  Apply now
                  <div className="w-8 h-8 p-1.5 justify-center items-center flex overflow-hidden">
                    <ArrowUpRight style={{ color: "white" }} />
                  </div>
                </Button>

                <ApplicationsDrawer job_id={job.career_job_id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CareersPage;
