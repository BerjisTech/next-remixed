import ProzSwitch from "@/components/general/prozSwitch";
import React from "react";

const BrowserNotifications = () => {
  return (
    <React.Fragment>
      {/* <div className="max-w-6xl mx-auto bg-white dark:bg-black p-6 rounded-lg shadow"> */}
      <h1 className="text-2xl font-semibold text-primary px-2">Browser notifications from ProZ</h1>
      <hr></hr>
      {/* </div> */}
      <p className="dark:text-primary block my-3 px-2">
        This page allows you to enable browser push notifications for ProZ's services.
      </p>
      <ProzSwitch
        label="I want to receive browser notifications from ProZ"
        name="browser_notifications"
      ></ProzSwitch>
      <div className="flex flex-col gap-3 items-start justify-start mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">How it works</p>
        <p className="text-black dark:text-primary">
          A push notification is displayed by your browser and operating system when you are not on
          ProZ, but content you are interested in has been added or updated. To get started, click
          the switch to turn on the notifications, and then select “Allow” in your browser.
        </p>
        <button className="bg-primary dark:bg-primary text-white rounded-lg h-[40px] px-5">
          Save settings
        </button>
      </div>
    </React.Fragment>
  );
};

export default BrowserNotifications;
