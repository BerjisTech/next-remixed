import ProzRadioButton from "@/components/general/prozRadio";
import Image from "next/image";
import React from "react";

const AnswerTracking = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">Answerer tracking</h1>
      </div>
      <p className="mt-2 text-gray-600 dark:text-primary">
        Here you can choose to be notified when a KudoZ contributor posts an answer or reference to
        a question.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-3">
          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow">
            <h3 className="text-primary text-lg font-semibold mb-4">Colleagues you are tracking</h3>
            <p className="text-gray-600 dark:text-primary mb-4">
              You are not currently tracking any answerers.
            </p>
          </div>
          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow">
            <h3 className="text-primary text-lg font-semibold mb-4">Track other answerers</h3>
            <p className="text-gray-600 dark:text-primary mb-4">
              If you wish to be alerted when a particular person answers or comments on a KudoZ
              question, you may request permission to track them.
            </p>
            <div className="mb-4 flex items-center justify-start w-full gap-2">
              <div className="flex flex-grow border rounded-lg px-3">
                <Image
                  src="/next/next_assets/images/search.svg"
                  alt="Search icon"
                  width={24} // Default size, adjust as needed
                  height={24}
                />

                <input
                  type="text"
                  placeholder="Enter ID"
                  className="w-full p-2 dark:bg-dark dark:text-primary rounded-lg outline-none focus:outline-none"
                />
              </div>
              <button className="text-accent-foreground py-2 px-4 rounded-lg bg-primary">
                Search
              </button>
            </div>
            <textarea
              placeholder="Message to answerer (optional)"
              className="w-full dark:bg-dark dark:text-primary p-2 border rounded-lg mb-4 outline-none focus:outline-none"
            ></textarea>
            <button className="text-accent-foreground py-2 px-4 rounded-lg bg-primary">
              Track answerer
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow">
            <h3 className="text-primary text-lg font-semibold mb-4 mt-5">
              Colleagues tracking you
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Andrew</p>
                  <p className="text-gray-600 dark:text-primary">23 Jun '09 - Accepted</p>
                </div>
                <button className="ml-auto">
                  Accepted <span className="text-red-500">[Revoke]</span>
                </button>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Andrew</p>
                  <p className="text-gray-600 dark:text-primary">23 Jun '09 - Accepted</p>
                </div>
                <button className="ml-auto">
                  Accepted <span className="text-red-500">[Revoke]</span>
                </button>
              </div>
              <div className="flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />

                <div>
                  <p className="font-semibold">Andrew</p>
                  <p className="text-gray-600 dark:text-primary">23 Jun '09 - Accepted</p>
                </div>
                <button className="ml-auto">
                  Accepted <span className="text-red-500">[Revoke]</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow">
            <h3 className="text-primary text-lg font-semibold mb-4">Who can track you?</h3>
            <p className="text-gray-600 dark:text-primary mb-4">
              Colleagues who wish to be notified when you post a new KudoZ answer or reference
              comments may request your permission to do so.
            </p>
            <ProzRadioButton
              label="Allow anyone to track my answers"
              name="kudoz_answerer_tracking_notification_who_can_track"
              value="anyone"
            ></ProzRadioButton>
            <ProzRadioButton
              label="Allow anyone to track my answers"
              name="kudoz_answerer_tracking_notification_who_can_track"
              value="case_by_case"
            ></ProzRadioButton>
            <ProzRadioButton
              label="Allow anyone to track my answers"
              name="kudoz_answerer_tracking_notification_who_can_track"
              value="no_one"
              note="Note: No notifications will be sent to accepted trackers"
            ></ProzRadioButton>
            <button className="text-accent-foreground bg-primary py-2 px-4 rounded-lg mt-4">
              Save settings
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnswerTracking;
