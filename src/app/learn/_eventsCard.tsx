import { Meetup } from "@/interfaces/events";
import React from "react";
import iconv from "iconv-lite";
import Link from "next/link";
import Image from "next/image";

interface EventsCardProps {
  event: Meetup;
  width?: string;
  admin?: boolean;
}

const EventsCard: React.FC<EventsCardProps> = ({ event, width = "320px", admin = false }) => {
  const utf8ize = (text: string) => {
    try {
      return iconv.decode(Buffer.from(text, "binary"), "utf-8");
    } catch (e) {
      console.error("Encoding conversion error:", e);
      return text;
    }
  };

  const event_name = iconv.decode(Buffer.from(event.description, "binary"), "utf-8");

  return (
    <div className="w-[300px] relative flex flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#fbfafa] ___group">
      <div
        className="flex flex-col justify-start items-start self-stretch overflow-hidden rounded-custom bg-[#cbcbcb] bg-center bg-cover bg-no-repeat h-[163.13px] w-full"
        style={{ backgroundImage: `url('${event.img_banner}')` }}
      ></div>
      <div className="flex flex-col justify-start items-start self-stretch gap-4">
        <div className="flex flex-col justify-start items-start self-stretch gap-2">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-start items-center relative gap-1 pr-2">
              <div className="flex justify-start items-center relative gap-[6.6666669845581055px]">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 relative"
                  preserveAspectRatio="none"
                >
                  <rect y="0.125" width="40" height="40" rx="10" fill="#EDF5F5"></rect>
                  <path
                    d="M28.0059 16.3556C28.4248 16.6643 28.942 16.8469 29.5022 16.8469C30.0626 16.8469 30.5796 16.6644 30.9985 16.3556C31.6235 15.8967 32.0295 15.155 32.0295 14.3194C32.0295 12.9235 30.898 11.792 29.502 11.792C28.1061 11.792 26.9746 12.9235 26.9746 14.3194C26.9748 15.155 27.3807 15.8967 28.0059 16.3556Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M23.1681 11.792C21.7721 11.792 20.6406 12.9235 20.6406 14.3194C20.6406 15.155 21.0466 15.8967 21.6717 16.3556C22.0906 16.6643 22.6079 16.8469 23.1681 16.8469C23.7284 16.8469 24.2455 16.6644 24.6644 16.3556C25.2894 15.8967 25.6955 15.155 25.6955 14.3194C25.6955 12.9235 24.564 11.792 23.1681 11.792Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M15.3358 16.3556C15.7547 16.6643 16.2719 16.8469 16.8321 16.8469C17.3925 16.8469 17.9095 16.6644 18.3284 16.3556C18.9536 15.8967 19.3596 15.155 19.3596 14.3194C19.3596 12.9235 18.2281 11.792 16.8321 11.792C15.4362 11.792 14.3047 12.9235 14.3047 14.3194C14.3049 15.155 14.7108 15.8967 15.3358 16.3556Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M9.00182 16.3556C9.42072 16.6643 9.93776 16.8469 10.4981 16.8469C11.0585 16.8469 11.5756 16.6644 11.9944 16.3556C12.6195 15.8967 13.0256 15.155 13.0256 14.3194C13.0256 12.9235 11.8941 11.792 10.4981 11.792C9.1022 11.792 7.9707 12.9235 7.9707 14.3194C7.9707 15.155 8.37663 15.8967 9.00182 16.3556Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M9.33008 20.0108C9.33008 20.8464 9.73601 21.5881 10.3612 22.047C10.7801 22.3557 11.2973 22.5383 11.8575 22.5383C12.4177 22.5383 12.9349 22.3559 13.3538 22.047C13.979 21.5881 14.3849 20.8464 14.3849 20.0108C14.3849 18.6149 13.2535 17.4834 11.8575 17.4834C10.4616 17.4834 9.33008 18.6149 9.33008 20.0108Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M13.1626 26.5516C13.3958 25.1155 14.0676 23.8162 15.0597 22.8112C14.8136 22.6482 14.5526 22.504 14.2806 22.3799C13.6643 23.0091 12.8056 23.4016 11.8561 23.4016C10.9085 23.4016 10.0498 23.0091 9.43352 22.3799C7.70313 23.1719 6.42979 24.7895 6.11515 26.7292C6.08552 26.916 6.23182 27.0846 6.42053 27.0846H13.1795C13.1387 26.9125 13.1332 26.7312 13.1626 26.5516Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M26.6464 22.047C27.0652 22.3557 27.5823 22.5383 28.1427 22.5383C28.703 22.5383 29.2201 22.3559 29.639 22.047C30.2642 21.5881 30.6701 20.8464 30.6701 20.0108C30.6701 18.6149 29.5386 17.4834 28.1427 17.4834C26.7467 17.4834 25.6152 18.6149 25.6152 20.0108C25.6152 20.8464 26.0212 21.5881 26.6464 22.047Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M33.8861 26.7302C33.5715 24.7905 32.2981 23.1731 30.5678 22.3809C29.9515 23.0101 29.0927 23.4025 28.1433 23.4025C27.1957 23.4025 26.337 23.0101 25.7207 22.3809C25.4486 22.5049 25.1896 22.6492 24.9414 22.8122C25.9335 23.8172 26.6051 25.1163 26.8385 26.5526C26.8681 26.732 26.8625 26.9135 26.8218 27.0855H33.5789C33.7676 27.0854 33.9156 26.917 33.8861 26.7302Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M17.4727 20.0108C17.4727 20.8464 17.8786 21.5881 18.5038 22.047C18.9227 22.3557 19.4397 22.5383 20.0001 22.5383C20.5605 22.5383 21.0775 22.3559 21.4964 22.047C22.1214 21.5881 22.5273 20.8464 22.5273 20.0108C22.5273 18.6149 21.3958 17.4834 19.9999 17.4834C18.6041 17.4836 17.4727 18.6149 17.4727 20.0108Z"
                    fill="#4D9D9D"
                  ></path>
                  <path
                    d="M22.4249 22.3799C21.8084 23.0093 20.9501 23.4012 20.0012 23.4012C19.0523 23.4012 18.1939 23.0093 17.5774 22.3799C15.8478 23.173 14.5741 24.7906 14.2598 26.7297C14.2296 26.9162 14.3767 27.0847 14.5657 27.0847H25.437C25.6258 27.0847 25.7731 26.9162 25.7429 26.7297C25.4282 24.7906 24.1545 23.173 22.4249 22.3799Z"
                    fill="#4D9D9D"
                  ></path>
                </svg>
              </div>
              <p className="text-xs font-medium text-left text-[#4d9d9d]">Meetup</p>
            </div>
            <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#f2f4f7]">
              <p className="text-xs font-medium text-center text-[#344054]">60 min</p>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch relative">
            <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#edf5f5]">
              <p className="text-xs font-medium text-center text-[#376f6f]">396 views</p>
            </div>
            <p className="text-sm font-semibold text-left text-[#344054]">
              3rd Dec 2024, 16:00 GMT
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch gap-2">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
            <p className="self-stretch w-[290px] text-lg font-medium text-left text-[#151515]">
              {event_name.slice(0, 50)}
            </p>
            {/* <p>{utf8ize(event.description)}</p> */}
          </div>
          <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#edf5f5]">
            <p className="text-xs font-medium text-center text-[#376f6f]">English</p>
          </div>
          <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex justify-center items-start gap-2 p-2 rounded-2xl">
              <div className="flex justify-start items-start relative gap-2">
                <div className="w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                  <Image
                    src="/next/next_assets/images/image-1.png"
                    alt="image-1"
                    width={51}
                    height={49.5}
                    className="w-[51px] h-[49.5px] absolute left-[-2.79px] top-[-2.78px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start relative gap-1">
                  <p className="text-base font-semibold text-left text-[#3a7878]">Claudia Brauer</p>
                  <p className="self-stretch w-[123px] text-sm text-left text-[#344054]">
                    Speaker title
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 w-full">
            <Link
              href={event.link ?? `/learn/event/${event.id}`}
              target="_blank"
              className={`${admin ? "w-full" : ""} flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#4d9d9d] border border-[#4d9d9d] shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]`}
            >
              <p className="text-sm font-semibold text-left text-white">Register now</p>
            </Link>

            {admin && (
              <div className="flex items-center justify-end gap-2">
                <Link
                  href={`/admin/event/${event.id}/edit`}
                  target="_blank"
                  className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#4d9d9d] border border-[#4d9d9d] shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]"
                >
                  <span className="text-sm font-semibold material-symbols-outlined text-white">
                    edit
                  </span>
                </Link>

                <Link
                  href={`/admin/event/${event.id}/delete`}
                  target="_blank"
                  className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-red-700 border border-red-700 shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]"
                >
                  <span className="text-sm font-semibold material-symbols-outlined text-white">
                    delete
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="group-hover:animate-slide-up group-hover:flex absolute top-0 left-0 right-0 bottom-0 w-full h-full hidden flex-col justify-start items-start flex-grow gap-4 p-4 rounded-custom bg-[#f8f7f1] border border-[#efede3] animate-slide-down">
        <div className="flex flex-col justify-start items-start self-stretch gap-4">
          <div className="flex flex-col justify-start items-start self-stretch gap-2">
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-start items-center relative gap-1 pr-2">
                <div className="flex justify-start items-center relative gap-[6.6666669845581055px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 relative"
                    preserveAspectRatio="none"
                  >
                    <rect width="40" height="40" rx="10" fill="#EDF5F5"></rect>
                    <path
                      d="M28.0059 16.2306C28.4248 16.5393 28.942 16.7219 29.5022 16.7219C30.0626 16.7219 30.5796 16.5394 30.9985 16.2306C31.6235 15.7717 32.0295 15.03 32.0295 14.1944C32.0295 12.7985 30.898 11.667 29.502 11.667C28.1061 11.667 26.9746 12.7985 26.9746 14.1944C26.9748 15.03 27.3807 15.7717 28.0059 16.2306Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M23.1681 11.667C21.7721 11.667 20.6406 12.7985 20.6406 14.1944C20.6406 15.03 21.0466 15.7717 21.6717 16.2306C22.0906 16.5393 22.6079 16.7219 23.1681 16.7219C23.7284 16.7219 24.2455 16.5394 24.6644 16.2306C25.2894 15.7717 25.6955 15.03 25.6955 14.1944C25.6955 12.7985 24.564 11.667 23.1681 11.667Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M15.3358 16.2306C15.7547 16.5393 16.2719 16.7219 16.8321 16.7219C17.3925 16.7219 17.9095 16.5394 18.3284 16.2306C18.9536 15.7717 19.3596 15.03 19.3596 14.1944C19.3596 12.7985 18.2281 11.667 16.8321 11.667C15.4362 11.667 14.3047 12.7985 14.3047 14.1944C14.3049 15.03 14.7108 15.7717 15.3358 16.2306Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M9.00182 16.2306C9.42072 16.5393 9.93776 16.7219 10.4981 16.7219C11.0585 16.7219 11.5756 16.5394 11.9944 16.2306C12.6195 15.7717 13.0256 15.03 13.0256 14.1944C13.0256 12.7985 11.8941 11.667 10.4981 11.667C9.1022 11.667 7.9707 12.7985 7.9707 14.1944C7.9707 15.03 8.37663 15.7717 9.00182 16.2306Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M9.33008 19.8858C9.33008 20.7214 9.73601 21.4631 10.3612 21.922C10.7801 22.2307 11.2973 22.4133 11.8575 22.4133C12.4177 22.4133 12.9349 22.2309 13.3538 21.922C13.979 21.4631 14.3849 20.7214 14.3849 19.8858C14.3849 18.4899 13.2535 17.3584 11.8575 17.3584C10.4616 17.3584 9.33008 18.4899 9.33008 19.8858Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M13.1626 26.4266C13.3958 24.9905 14.0676 23.6912 15.0597 22.6862C14.8136 22.5232 14.5526 22.379 14.2806 22.2549C13.6643 22.8841 12.8056 23.2766 11.8561 23.2766C10.9085 23.2766 10.0498 22.8841 9.43352 22.2549C7.70313 23.0469 6.42979 24.6645 6.11515 26.6042C6.08552 26.791 6.23182 26.9596 6.42053 26.9596H13.1795C13.1387 26.7875 13.1332 26.6062 13.1626 26.4266Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M26.6464 21.922C27.0652 22.2307 27.5823 22.4133 28.1427 22.4133C28.703 22.4133 29.2201 22.2309 29.639 21.922C30.2642 21.4631 30.6701 20.7214 30.6701 19.8858C30.6701 18.4899 29.5386 17.3584 28.1427 17.3584C26.7467 17.3584 25.6152 18.4899 25.6152 19.8858C25.6152 20.7214 26.0212 21.4631 26.6464 21.922Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M33.8861 26.6052C33.5715 24.6655 32.2981 23.0481 30.5678 22.2559C29.9515 22.8851 29.0927 23.2775 28.1433 23.2775C27.1957 23.2775 26.337 22.8851 25.7207 22.2559C25.4486 22.3799 25.1896 22.5242 24.9414 22.6872C25.9335 23.6922 26.6051 24.9913 26.8385 26.4276C26.8681 26.607 26.8625 26.7885 26.8218 26.9605H33.5789C33.7676 26.9604 33.9156 26.792 33.8861 26.6052Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M17.4727 19.8858C17.4727 20.7214 17.8786 21.4631 18.5038 21.922C18.9227 22.2307 19.4397 22.4133 20.0001 22.4133C20.5605 22.4133 21.0775 22.2309 21.4964 21.922C22.1214 21.4631 22.5273 20.7214 22.5273 19.8858C22.5273 18.4899 21.3958 17.3584 19.9999 17.3584C18.6041 17.3586 17.4727 18.4899 17.4727 19.8858Z"
                      fill="#4D9D9D"
                    ></path>
                    <path
                      d="M22.4249 22.2549C21.8084 22.8843 20.9501 23.2762 20.0012 23.2762C19.0523 23.2762 18.1939 22.8843 17.5774 22.2549C15.8478 23.048 14.5741 24.6656 14.2598 26.6047C14.2296 26.7912 14.3767 26.9597 14.5657 26.9597H25.437C25.6258 26.9597 25.7731 26.7912 25.7429 26.6047C25.4282 24.6656 24.1545 23.048 22.4249 22.2549Z"
                      fill="#4D9D9D"
                    ></path>
                  </svg>
                </div>
                <p className="text-xs font-medium text-left text-[#4d9d9d]">Meetup</p>
              </div>
              <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#f2f4f7]">
                <p className="text-xs font-medium text-center text-[#344054]">60 min</p>
              </div>
            </div>
            <div className="flex justify-between items-center self-stretch relative">
              <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#edf5f5]">
                <p className="text-xs font-medium text-center text-[#376f6f]">396 views</p>
              </div>
              <p className="text-sm font-semibold text-left text-[#344054]">
                3rd Dec 2024, 16:00 GMT
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch gap-2">
            <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
              <p className="self-stretch w-[290px] text-lg font-medium text-left text-[#151515]">
                Succeed at ProZ.com
              </p>

              {/* <p>{utf8ize(event.description)}</p> */}
              <div className="flex justify-start items-center relative px-2 py-0.5 rounded-2xl bg-[#edf5f5]">
                <p className="text-xs font-medium text-center text-[#376f6f]">English</p>
              </div>
            </div>
            <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-center items-start gap-2 p-2 rounded-2xl">
                <div className="flex justify-start items-start relative gap-2">
                  <div className="w-12 h-12 relative overflow-hidden rounded-custom border-[1.71px] border-[#4d9d9d]">
                    <Image
                      src="/next/next_assets/images/image-1.png"
                      alt="image-1"
                      width={51}
                      height={49.5}
                      className="w-[51px] h-[49.5px] absolute left-[-2.79px] top-[-2.78px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start relative gap-1">
                    <p className="text-base font-semibold text-left text-[#3a7878]">
                      Claudia Brauer
                    </p>
                    <p className="self-stretch w-[123px] text-sm text-left text-[#344054]">
                      Speaker title
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={event.link ?? `/learn/event/${event.id}`}
          target="_blank"
          className="flex justify-center items-center relative overflow-hidden gap-2 px-3.5 py-2 rounded-lg bg-[#4d9d9d] border border-[#4d9d9d] shadow-[0px 1px 2px 0 rgba(16,24,40,0.05)]"
        >
          <p className="text-sm font-semibold text-left text-white">Register now</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
