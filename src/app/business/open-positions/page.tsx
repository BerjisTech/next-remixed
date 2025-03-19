import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center relative overflow-hidden bg-accent dark:bg-black">
        <div className="flex justify-center items-center container flex-col lg:flex-row gap-6 my-[100px]">
          <div className="flex flex-col justify-center items-start flex-grow gap-8">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-6xl font-semibold text-left text-primary">
                Recruit top language talent with ProZ.com
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 pl-3 pr-6 py-3 rounded-[100px] bg-[#dcefdc] dark:bg-dark dark:text-[#dcefdc]">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 space-x-[-12px]">
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[200px] bg-[url('/assets/images/avatar.jpeg')] bg-cover bg-no-repeat bg-center border-[1.5px] border-white"></div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[200px] bg-[url('/assets/images/avatar-4.jpeg')] bg-cover bg-no-repeat bg-center border-[1.5px] border-white"></div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[200px] bg-[url('/assets/images/avatar-2.jpeg')] bg-cover bg-no-repeat bg-center border-[1.5px] border-white"></div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[200px] bg-[url('/assets/images/avatar-3.jpeg')] bg-cover bg-no-repeat bg-center border-[1.5px] border-white"></div>
                  </div>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-dark-blue-hue dark:text-accent-foreground">
                  over 1M ProZ.com members
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/next/next_assets/images/6549-1.jpeg"
            alt=""
            width={800}
            height={800}
            className="self-stretch flex-grow rounded-3xl object-cover w-auto h-auto min-w-[40%] max-w-[80%] max-h-[80%]"
          />
        </div>
      </div>

      <p className="container text-2xl font-medium text-center text-dark-blue-hue dark:text-accent-foreground my-[100px]">
        Expand your team with the world's best translators, interpreters, and language
        professionals. At ProZ.com, business can advertise open positions and other ongoing vendor
        needs.
      </p>

      <div
        title="shown to non members"
        className="flex justify-center items-center container relative overflow-hidden gap-4 p-6 rounded-3xl my-[100px] bg-green-gradient dark:bg-green-gradient-dark"
      >
        <div className="flex-grow-0 flex-shrink-0"></div>
        <p className="flex-grow w-[633px] text-lg font-semibold text-left text-white">
          Upgrade to Business Membership to start using this feature
        </p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-accent border border-accent">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-primary">
            Upgrade now
          </p>
        </div>
      </div>

      <div
        title="Shown only to users with Business Membership"
        className="flex justify-center items-center container relative overflow-hidden gap-4 p-6 rounded-3xl bg-accent dark:bg-black my-[100px]"
      >
        <div className="flex-grow-0 flex-shrink-0"></div>
        <p className="flex-grow w-[637px] text-base italic text-left text-dark-blue-hue dark:text-accent-foreground">
          You don't have any open roles you are hiring for
        </p>
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-xl bg-primary dark:bg-primary border border-secondary dark:border-primary"
          style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05);" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="none"
          >
            <circle cx="9.9987" cy="10.0007" r="6.66667" fill="white"></circle>
            <path
              d="M10.0013 1.66602C5.3988 1.66602 1.66797 5.39685 1.66797 9.99935C1.66797 14.6018 5.3988 18.3327 10.0013 18.3327C14.6038 18.3327 18.3346 14.6018 18.3346 9.99935C18.3346 5.39685 14.6038 1.66602 10.0013 1.66602ZM14.168 10.8327H10.8346V14.166H9.16797V10.8327H5.83464V9.16602H9.16797V5.83268H10.8346V9.16602H14.168V10.8327Z"
              fill="url(#paint0_linear_8928_38648)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_8928_38648"
                x1="10.0013"
                y1="2.08268"
                x2="10.0013"
                y2="18.3327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CAFF8B"></stop>
                <stop offset="1" stopColor="#53992A"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
            List a role
          </p>
        </div>
      </div>
    </>
  );
};
export default page;
