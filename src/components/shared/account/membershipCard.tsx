import Image from "next/image";
import React from "react";

interface MembershipCardProps {
  test_with_membership?: boolean;
  membership?: string;
  renewal_date?: string;
}
const MembershipCard: React.FC<MembershipCardProps> = ({
  test_with_membership = false,
  membership = "none",
  renewal_date = "",
}) => {
  return (
    <React.Fragment>
      {false ? (
        <div className="w-full flex flex-col justify-center items-start gap-2 p-4 rounded-custom bg-accent dark:bg-black border border-accent">
          <div className="w-full flex justify-start items-center relative gap-3">
            <Image
              src="/next/next_assets/images/ellipse-1.png"
              alt="Ellipse"
              width={100}
              height={100}
            />
            <div className="w-full flex flex-col justify-center items-start relative gap-2">
              <p className="w-full text-lg font-medium text-left text-primary">
                ProZ paying member for 7 years
              </p>
            </div>
          </div>
        </div>
      ) : (
        <section className="h-full rounded-xl h-[{{membership != 'none' || test_with_membership ? '' : '245px'}}]  bg-green-gradient dark:bg-green-gradient-dark p-5 w-auto flex flex-col gap-4 items-center justify-between">
          {membership != "none" || test_with_membership ? (
            <div>
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/next/next_assets/images/membership-icon.svg"
                  alt="Membership"
                  width={30}
                  height={30}
                />
                <span className="text-white text-[30px]">Membership</span>
              </div>

              <p className="text-white mt-3">
                Your {test_with_membership ? "premium" : membership} Membership is scheduled for
                automatic renewal on {renewal_date}.
              </p>
            </div>
          ) : (
            <React.Fragment>
              <div className="flex-grow flex items-center justify-center text-white dark:text-primary text-center xs:text-sm md:text-2xl leading-7">
                Join the world's largest community of translators.
              </div>
              <a
                href="#"
                target="_blank"
                className="text-primary font-semibold bg-white w-full p-3 rounded-xl dark:bg-primary text-center dark:text-accent-foreground"
              >
                {membership == "none" ? "Become a member" : "Manage"}
              </a>
            </React.Fragment>
          )}
        </section>
      )}
    </React.Fragment>
  );
};

export default MembershipCard;
