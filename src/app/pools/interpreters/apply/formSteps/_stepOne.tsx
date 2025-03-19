import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";

interface StepOneProps {
  nextStep: () => void;
  userInfo: any;
}

const StepOne: React.FC<StepOneProps> = ({ nextStep, userInfo }) => {
  const { data: session } = useSession();
  const { entityId } = useAppSelector((state) => state.profile);

  return (
    <div className="p-8 bg-accent rounded-lg border-t-accent">
      <h2 className="text-primary font-semibold mb-4 text-2xl">
        What to expect during the application process
      </h2>
      <p className="text-grey-700 mb-4">
        Thank you for your interest in joining the interpreter pool.
      </p>
      <p className="text-grey-700 mb-4">
        Start by completing the application form below. This information will be used to create a
        pool profile for you, to represent you in the pool. Filling out more of the profile may
        positively affect your position in the pool.
      </p>
      <p className="text-grey-700 mb-4">
        After you submit your application, ProZ.com staff will review it and may contact you with
        additional questions.
      </p>
      <p className="text-grey-700 mb-4">
        If you are accepted into the interpreter pool, ProZ.com staff will follow up with you to
        help strengthen your profile and improve your placement in search results. As part of this
        process, you may be asked to provide information such as copies of credentials, invoices, or
        feedback from clients and colleagues.
      </p>

      <h3 className="font-semibold mb-2">Your interpreter profile</h3>
      <p className="text-grey-700 mb-4">
        Specify information for your interpreter profile, which will represent you in the pool. Some
        information has been filled out for you already based on your ProZ.com profile, but feel
        free to customize it as appropriate for the interpreter pool.
      </p>

      <h3 className="font-semibold mb-2">Requirements for interpreters</h3>
      <p className="text-grey-700 mb-4">
        You are required to meet these{" "}
        <Link
          href="https://go.proz.com/interpreter-apply"
          className="text-primary dark:text-primary underline"
        >
          requirements.
        </Link>
      </p>

      <h3 className="font-semibold mb-2">Your real name</h3>
      <p className="text-grey-700 mb-4">
        In order to participate in ProZ.com pools, you must agree to show your real name in the
        pool. Your full name will only be shown to authorized users (ex. business members and other
        pool members). Others will see your first name and last initial. You still have the option
        to keep your real name private on the rest of ProZ.com, if you choose.{" "}
        <Link
          href="https://www.proz.com/pools/faq#real-name"
          className="text-primary dark:text-primary underline"
        >
          Learn more.
        </Link>
      </p>
      <p className="text-grey-700 mb-4">
        {userInfo ? (
          <>
            <span className="pr-1.5">Your name will currently appear in pools like this:</span>
            {userInfo.contact_first && userInfo.contact_last
              ? `${userInfo.contact_first} ${userInfo.contact_last} or (${userInfo.contact_first} ${userInfo.contact_last.charAt(0)}.)`
              : userInfo.contact_first && userInfo.contact_middle
                ? `${userInfo.contact_first} ${userInfo.contact_middle} or (${userInfo.contact_first} ${userInfo.contact_middle.charAt(0)}.)`
                : "Your real name has not been provided."}
          </>
        ) : (
          "Your real name has not been provided."
        )}
      </p>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="realName" className="mr-2" />
        <label htmlFor="realName" className="text-grey-700">
          Allow my real name to be shown in ProZ.com pools
        </label>
      </div>

      <h3 className="font-semibold mb-2">Interpreter profile photo</h3>
      {userInfo ? (
        <div className="flex items-center">
          <Image
            src={
              userInfo.image_url !== ""
                ? userInfo.image_url
                : "https://d30v1l0pe4hkha.cloudfront.net/908e52f68cb45c387a45e1332616c6fa.jpg"
            }
            alt="Profile Picture"
            width={300}
            height={300}
            className="object-cover rounded-md mr-4"
          />
          <Button>Change your pool profile photo</Button>
        </div>
      ) : (
        <Button>Add your pool profile photo</Button>
      )}

      <Button
        onClick={nextStep}
        className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark"
      >
        Next
      </Button>
    </div>
  );
};

export default StepOne;
