import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="p-4 bg-white rounded-custom shadow border border-accent-light flex flex-col justify-start items-start gap-1 dark:bg-black">
      <div className="self-stretch h-[62px] flex flex-col justify-start items-start gap-1">
        <div className="self-stretch flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <div className="flex h-4 justify-center items-start gap-0.5">
              {/* <!-- Star SVGs --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.481 7.17766L12.6685 9.60453L13.5253 13.2339C13.5726 13.4309 13.5605 13.6375 13.4904 13.8276C13.4203 14.0178 13.2954 14.1828 13.1316 14.302C12.9677 14.4212 12.7722 14.4891 12.5698 14.4973C12.3673 14.5054 12.167 14.4533 11.9941 14.3477L8.83785 12.4052L5.67973 14.3477C5.50687 14.4527 5.30679 14.5043 5.10469 14.4959C4.90258 14.4874 4.70749 14.4194 4.54398 14.3003C4.38046 14.1812 4.25584 14.0164 4.18579 13.8267C4.11575 13.6369 4.10342 13.4307 4.15035 13.2339L5.01035 9.60453L2.19785 7.17766C2.04491 7.04548 1.9343 6.87117 1.87984 6.6765C1.82538 6.48183 1.82947 6.27543 1.89161 6.08307C1.95375 5.89072 2.07118 5.72093 2.22924 5.59492C2.3873 5.46891 2.57899 5.39225 2.78035 5.37453L6.46785 5.07703L7.89035 1.63453C7.96735 1.44692 8.09839 1.28644 8.26683 1.17349C8.43527 1.06055 8.63349 1.00024 8.83629 1.00024C9.03909 1.00024 9.23731 1.06055 9.40574 1.17349C9.57418 1.28644 9.70523 1.44692 9.78223 1.63453L11.2041 5.07703L14.8916 5.37453C15.0934 5.3916 15.2856 5.46782 15.4442 5.59366C15.6029 5.7195 15.7208 5.88935 15.7834 6.08194C15.8459 6.27453 15.8502 6.48129 15.7957 6.67631C15.7413 6.87134 15.6305 7.04595 15.4772 7.17828L15.481 7.17766Z"
                  fill="#FFB800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.481 7.17766L12.6685 9.60453L13.5253 13.2339C13.5726 13.4309 13.5605 13.6375 13.4904 13.8276C13.4203 14.0178 13.2954 14.1828 13.1316 14.302C12.9677 14.4212 12.7722 14.4891 12.5698 14.4973C12.3673 14.5054 12.167 14.4533 11.9941 14.3477L8.83785 12.4052L5.67973 14.3477C5.50687 14.4527 5.30679 14.5043 5.10469 14.4959C4.90258 14.4874 4.70749 14.4194 4.54398 14.3003C4.38046 14.1812 4.25584 14.0164 4.18579 13.8267C4.11575 13.6369 4.10342 13.4307 4.15035 13.2339L5.01035 9.60453L2.19785 7.17766C2.04491 7.04548 1.9343 6.87117 1.87984 6.6765C1.82538 6.48183 1.82947 6.27543 1.89161 6.08307C1.95375 5.89072 2.07118 5.72093 2.22924 5.59492C2.3873 5.46891 2.57899 5.39225 2.78035 5.37453L6.46785 5.07703L7.89035 1.63453C7.96735 1.44692 8.09839 1.28644 8.26683 1.17349C8.43527 1.06055 8.63349 1.00024 8.83629 1.00024C9.03909 1.00024 9.23731 1.06055 9.40574 1.17349C9.57418 1.28644 9.70523 1.44692 9.78223 1.63453L11.2041 5.07703L14.8916 5.37453C15.0934 5.3916 15.2856 5.46782 15.4442 5.59366C15.6029 5.7195 15.7208 5.88935 15.7834 6.08194C15.8459 6.27453 15.8502 6.48129 15.7957 6.67631C15.7413 6.87134 15.6305 7.04595 15.4772 7.17828L15.481 7.17766Z"
                  fill="#FFB800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.481 7.17766L12.6685 9.60453L13.5253 13.2339C13.5726 13.4309 13.5605 13.6375 13.4904 13.8276C13.4203 14.0178 13.2954 14.1828 13.1316 14.302C12.9677 14.4212 12.7722 14.4891 12.5698 14.4973C12.3673 14.5054 12.167 14.4533 11.9941 14.3477L8.83785 12.4052L5.67973 14.3477C5.50687 14.4527 5.30679 14.5043 5.10469 14.4959C4.90258 14.4874 4.70749 14.4194 4.54398 14.3003C4.38046 14.1812 4.25584 14.0164 4.18579 13.8267C4.11575 13.6369 4.10342 13.4307 4.15035 13.2339L5.01035 9.60453L2.19785 7.17766C2.04491 7.04548 1.9343 6.87117 1.87984 6.6765C1.82538 6.48183 1.82947 6.27543 1.89161 6.08307C1.95375 5.89072 2.07118 5.72093 2.22924 5.59492C2.3873 5.46891 2.57899 5.39225 2.78035 5.37453L6.46785 5.07703L7.89035 1.63453C7.96735 1.44692 8.09839 1.28644 8.26683 1.17349C8.43527 1.06055 8.63349 1.00024 8.83629 1.00024C9.03909 1.00024 9.23731 1.06055 9.40574 1.17349C9.57418 1.28644 9.70523 1.44692 9.78223 1.63453L11.2041 5.07703L14.8916 5.37453C15.0934 5.3916 15.2856 5.46782 15.4442 5.59366C15.6029 5.7195 15.7208 5.88935 15.7834 6.08194C15.8459 6.27453 15.8502 6.48129 15.7957 6.67631C15.7413 6.87134 15.6305 7.04595 15.4772 7.17828L15.481 7.17766Z"
                  fill="#FFB800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.481 7.17766L12.6685 9.60453L13.5253 13.2339C13.5726 13.4309 13.5605 13.6375 13.4904 13.8276C13.4203 14.0178 13.2954 14.1828 13.1316 14.302C12.9677 14.4212 12.7722 14.4891 12.5698 14.4973C12.3673 14.5054 12.167 14.4533 11.9941 14.3477L8.83785 12.4052L5.67973 14.3477C5.50687 14.4527 5.30679 14.5043 5.10469 14.4959C4.90258 14.4874 4.70749 14.4194 4.54398 14.3003C4.38046 14.1812 4.25584 14.0164 4.18579 13.8267C4.11575 13.6369 4.10342 13.4307 4.15035 13.2339L5.01035 9.60453L2.19785 7.17766C2.04491 7.04548 1.9343 6.87117 1.87984 6.6765C1.82538 6.48183 1.82947 6.27543 1.89161 6.08307C1.95375 5.89072 2.07118 5.72093 2.22924 5.59492C2.3873 5.46891 2.57899 5.39225 2.78035 5.37453L6.46785 5.07703L7.89035 1.63453C7.96735 1.44692 8.09839 1.28644 8.26683 1.17349C8.43527 1.06055 8.63349 1.00024 8.83629 1.00024C9.03909 1.00024 9.23731 1.06055 9.40574 1.17349C9.57418 1.28644 9.70523 1.44692 9.78223 1.63453L11.2041 5.07703L14.8916 5.37453C15.0934 5.3916 15.2856 5.46782 15.4442 5.59366C15.6029 5.7195 15.7208 5.88935 15.7834 6.08194C15.8459 6.27453 15.8502 6.48129 15.7957 6.67631C15.7413 6.87134 15.6305 7.04595 15.4772 7.17828L15.481 7.17766Z"
                  fill="#FFB800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.481 7.17766L12.6685 9.60453L13.5253 13.2339C13.5726 13.4309 13.5605 13.6375 13.4904 13.8276C13.4203 14.0178 13.2954 14.1828 13.1316 14.302C12.9677 14.4212 12.7722 14.4891 12.5698 14.4973C12.3673 14.5054 12.167 14.4533 11.9941 14.3477L8.83785 12.4052L5.67973 14.3477C5.50687 14.4527 5.30679 14.5043 5.10469 14.4959C4.90258 14.4874 4.70749 14.4194 4.54398 14.3003C4.38046 14.1812 4.25584 14.0164 4.18579 13.8267C4.11575 13.6369 4.10342 13.4307 4.15035 13.2339L5.01035 9.60453L2.19785 7.17766C2.04491 7.04548 1.9343 6.87117 1.87984 6.6765C1.82538 6.48183 1.82947 6.27543 1.89161 6.08307C1.95375 5.89072 2.07118 5.72093 2.22924 5.59492C2.3873 5.46891 2.57899 5.39225 2.78035 5.37453L6.46785 5.07703L7.89035 1.63453C7.96735 1.44692 8.09839 1.28644 8.26683 1.17349C8.43527 1.06055 8.63349 1.00024 8.83629 1.00024C9.03909 1.00024 9.23731 1.06055 9.40574 1.17349C9.57418 1.28644 9.70523 1.44692 9.78223 1.63453L11.2041 5.07703L14.8916 5.37453C15.0934 5.3916 15.2856 5.46782 15.4442 5.59366C15.6029 5.7195 15.7208 5.88935 15.7834 6.08194C15.8459 6.27453 15.8502 6.48129 15.7957 6.67631C15.7413 6.87134 15.6305 7.04595 15.4772 7.17828L15.481 7.17766Z"
                  fill="#FFB800"
                />
              </svg>
            </div>
            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px]">
              4.5
            </div>
          </div>
          <div className="text-dark text-xs font-normal font-['Poppins'] leading-[18px]">
            24th June 2024
          </div>
        </div>
        <div className="pl-1 pr-2 py-1 bg-[#fbfafa] rounded-[100px] flex justify-start items-center gap-2">
          <div className="w-8 h-8 rounded-[34.29px] border border-secondary flex justify-center items-center">
            <Image
              height={34}
              width={34}
              alt="cassandra.jpg"
              className="w-[34px] h-[33px] object-cover rounded-[50%]"
              src="/next/next_assets/images/cassandra.jpg"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-px">
            <div className="flex justify-start items-center gap-2">
              <div className="text-primary text-sm font-medium font-['Poppins'] leading-tight">
                Lorem Ipsum
              </div>
              <div className="flex justify-start items-center gap-1">
                {/* <!-- Additional Icons --> */}
                <div className="w-4 h-[16.24px] px-[1.33px] pt-[1.33px] pb-[1.57px] flex flex-col justify-center items-center">
                  <Image
                    height={13.33}
                    width={13.33}
                    alt="pstamp.png"
                    className="w-[13.33px] h-[13.33px]"
                    src="/next/next_assets/images/pstamp.png"
                  />
                </div>
                <div className="w-4 h-[16.24px] pl-[3.69px] pr-1 pt-[1.58px] pb-[1.57px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    {/* <!-- SVG content --> */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch p-2 flex justify-center items-center gap-2.5">
        <div className="grow shrink basis-0 text-dark text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
          "In less than a month, I have had more jobs than ever and I have already earned back the
          membership cost. If you are a quick learner, you will find more work than you can handle
          in a relatively short time!"
        </div>
      </div>
      <div className="self-stretch flex justify-start items-start gap-2">
        <div className="w-12 h-12 flex justify-center items-center">
          <div className="grow shrink basis-0 self-stretch px-[0.47px] py-[9.88px] bg-white rounded-lg border border-accent-light flex justify-center items-center">
            <Image
              height={13.33}
              width={13.33}
              alt="placeholder.png"
              className="w-[47.06px] h-[28.24px]"
              src="https://via.placeholder.com/47x28"
            />
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch text-dark-blue-hue text-sm font-semibold font-['Poppins'] leading-tight dark:text-white">
            Translation Agency Express
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-dark-blue-hue text-xs font-normal font-['Poppins'] leading-[18px] dark:text-white">
              Saudi Arabia
            </div>
            <div className="w-4 h-3 relative rounded-sm"></div>
          </div>
        </div>
        <div className="text-primary text-xs font-medium font-['Poppins'] leading-[18px]">
          See all
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
