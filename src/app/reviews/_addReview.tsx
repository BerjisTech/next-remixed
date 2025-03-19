import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import StarRating from "@/components/shared/starRating";
import Image from "next/image";
import React from "react";

const AddReview = () => {
  return (
    <React.Fragment>
      <div className="flex flow-row gap-4">
        <Input placeholder="Enter name to search..." />
        <Button variant="outline">Search</Button>
      </div>

      <div className="self-stretch h-44 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch text-dark-blue-hue text-sm font-medium font-['Poppins'] leading-tight mt-2">
          You are posting a review for:
        </div>
        <div className="self-stretch p-3 bg-[#fbfafa] rounded-custom border border-accent-light justify-end items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 self-stretch p-3 bg-white rounded-3xl shadow border border-[#f2f4f7] flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="w-[102px] h-[102px] justify-center items-center flex">
                <div className="w-[102px] h-[102px] relative bg-white rounded-[18.21px] border-2 border-accent flex-col justify-start items-start flex overflow-hidden">
                  <Image
                    className="w-[104.72px] h-[104.72px] object-cover"
                    src="/next/next_assets/images/cassandra.jpg"
                    alt="Cassandra"
                    width={104.72}
                    height={104.72}
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch h-[99px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch pb-1 border-b border-[#eaecf0] justify-start items-end gap-14 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-px inline-flex">
                      <div className="self-stretch justify-start items-center gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-dark-blue-hue text-2xl font-semibold font-['Poppins'] leading-loose">
                          Freda Tromp
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                            Saudi Arabia
                          </div>
                          <div className="w-4 h-3 relative rounded-sm"></div>
                        </div>
                      </div>
                      <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                        This is a cool tagline
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 flex-col justify-start items-start gap-0.5 flex">
                    <div className="self-stretch">
                      <span className="text-dark text-xs font-semibold font-['Poppins'] leading-[18px]">
                        German,
                      </span>
                      <span className="text-dark text-sm font-semibold font-['Poppins'] leading-tight">
                        {" "}
                      </span>
                      <span className="text-dark text-xs font-normal font-['Poppins'] leading-[18px]">
                        English
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-end gap-1.5 inline-flex">
            <div className="self-stretch h-20 flex-col justify-start items-end gap-1 flex">
              <div className="self-stretch text-right text-dark-blue-hue text-3xl font-medium font-['Poppins'] leading-[38px]">
                4.7/5
              </div>
              <StarRating rating="4.5" />
              <div className="text-right text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
                avg. rating
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Textarea placeholder="Write review..." className="w-full" />
        </div>
        <Button disabled>
          Post review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M14.8889 18.0153C15.3177 19.6157 14.368 21.2607 12.7676 21.6895C11.1672 22.1183 9.52218 21.1686 9.09336 19.5682M11.3894 5.74134C11.6937 5.19404 11.7939 4.53254 11.619 3.87994C11.2616 2.54627 9.8908 1.75482 8.55714 2.11217C7.22347 2.46953 6.43201 3.84037 6.78937 5.17404C6.96423 5.82663 7.38176 6.3494 7.91887 6.67128M16.7338 9.44578C16.3769 8.11364 15.424 6.99968 14.0847 6.34895C12.7454 5.69822 11.1295 5.56402 9.59241 5.97588C8.05534 6.38774 6.72301 7.31191 5.88853 8.5451C5.05405 9.77829 4.78577 11.2195 5.14272 12.5516C5.73329 14.7557 5.61861 16.514 5.24566 17.8502C4.82059 19.373 4.60806 20.1345 4.66548 20.2874C4.73117 20.4623 4.77869 20.5103 4.95292 20.5778C5.10521 20.6368 5.74498 20.4654 7.02453 20.1225L18.8896 16.9433C20.1691 16.6004 20.8089 16.429 20.9113 16.3018C21.0284 16.1562 21.0456 16.0909 21.015 15.9065C20.9883 15.7454 20.4235 15.1922 19.294 14.086C18.3029 13.1153 17.3244 11.6498 16.7338 9.44578Z"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AddReview;
