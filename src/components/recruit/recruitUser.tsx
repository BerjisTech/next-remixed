import Image from "next/image";
import React from "react";

interface RecruitUserProps {
  recruitUser: any;
}
const RecruitUser: React.FC<RecruitUserProps> = ({ recruitUser }) => {
  return (
    <div className="self-stretch h-min p-2 bg-[#efede3] rounded-xl justify-start items-center gap-2 inline-flex">
      <div className="justify-start items-start gap-2 flex">
        <div className="rounded-xl border border-[#d0d5dd] justify-center items-center flex">
          <div className="w-12 h-12 relative flex-col justify-start items-start flex">
            <Image
              src={recruitUser.photo}
              alt="User photo"
              width={48}
              height={48}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-px inline-flex">
          <div className="w-max justify-start items-center gap-px inline-flex">
            <div className="w-4 h-4 pl-[3.02px] pr-[3.33px] pt-[0.55px] pb-[0.54px] justify-center items-center flex">
              <div className="w-[9.64px] h-[14.91px] relative">
                <Image
                  src="/next/next_assets/images/icons/membership-ribbon.svg"
                  alt="Membership Ribbon"
                  width={9.64}
                  height={14.91}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="grow shrink basis-0 text-primary text-sm font-semibold leading-tight">
              {recruitUser.name}
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-6 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-dark text-xs font-normal">{recruitUser.country}</div>
              <div className="w-4 h-3 relative">
                <Image
                  src="/next/next_assets/images/icons/country.svg"
                  alt="Country flag"
                  width={16} // w-4 = 16px
                  height={12} // h-3 = 12px
                />
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-3 h-3 relative">
                  <Image
                    src="/next/next_assets/images/icons/ph_star-fill.svg"
                    alt="Star rating"
                    width={12} // w-3 = 12px
                    height={12} // h-3 = 12px
                    className="rounded-xl"
                  />
                </div>
              ))}
              <div className="text-primary text-sm font-normal">5.0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-4 flex">
        <div className="w-4 h-4 relative"></div>
        <div className="w-4 h-4 relative"></div>
      </div>
    </div>
  );
};

export default RecruitUser;
