import ProzSwitch from "@/components/general/prozSwitch";
import React from "react";

const GeneralNotifications = () => {
  return (
    <React.Fragment>
      {/* <div className="max-w-6xl mx-auto bg-white dark:bg-black p-6 rounded-lg shadow"> */}
      {/* <div className="flex justify-between items-center"> */}
      <h1 className="text-2xl font-semibold text-primary text-center">
        General email notifications
      </h1>
      {/* </div> */}
      {/* </div> */}
      <div className="flex flex-col gap-3 items-start justify-start mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">News and announcements</p>
        <ProzSwitch
          label="Newsletter: I want to receive the monthly ProZ newsletter"
          name="general_notification_newsletter_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Training: I want to receive training announcements."
          name="general_notification_training_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Events: I want to be notified about translation-related events (virtual and in my area)"
          name="general_notification_events_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Contests: I want to receive ProZ translation contest related announcements."
          name="general_notification_contests_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Discounts: I would like to receive announcements about discounts and other translation software opportunities through ProZ TGB."
          name="general_notification_discounts_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Advertisers: I want to receive special offers and communications from ProZ on behalf of select, approved translation industry advertisers."
          name="general_notification_advertisers_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Tech tips: I want to receive technical tips for translators."
          name="general_notification_tech_tips_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="Tips and suggestions: I want to receive tips and suggestions to get the most out of ProZ."
          name="general_notification_tips_and_suggestions_notifications"
        ></ProzSwitch>
        <ProzSwitch
          label="ProZ Mobile: I want to receive news and announcements about the ProZ mobile app."
          name="general_notification_proz_mobile_notifications"
        ></ProzSwitch>
      </div>
      <div className="flex flex-col gap-3 items-start justify-start mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">Blue Board notifications</p>
        <ProzSwitch
          label='I want to receive a notification for each "Call for Inquiry" request.'
          name="general_notification_call_for_inquiry"
          value="each"
        ></ProzSwitch>
        <ProzSwitch
          label='I want to receive a daily summarized notification of "Call for Inquiry" requests.'
          name="general_notification_call_for_inquiry_summary"
          value="daily"
        ></ProzSwitch>
      </div>
      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">Exchange notifications</p>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-3 items-start justify-start w-full md:w-1/2 bg-accent p-3 rounded-xl border border-solid border-secondary dark:bg-black dark:border-primary">
            <p className="text-primary">Notify me when the following are posted:</p>
            <ProzSwitch
              label="Language lessons"
              name="general_notification_language_lessons"
            ></ProzSwitch>
            <ProzSwitch
              label="Travel advice"
              name="general_notification_travel_advice"
            ></ProzSwitch>
            <ProzSwitch
              label="Translation memories (TM)"
              name="general_notification_translation_memories"
            ></ProzSwitch>
            <ProzSwitch label="Mentoring" name="general_notification_mentoring"></ProzSwitch>
            <ProzSwitch label="CAT Training" name="general_notification_cat_training"></ProzSwitch>
            <ProzSwitch label="CAT Tools" name="general_notification_cat_tools"></ProzSwitch>
            <ProzSwitch label="Books" name="general_notification_books"></ProzSwitch>
            <ProzSwitch
              label="Miscellaneous"
              name="general_notification_miscellaneous"
            ></ProzSwitch>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full md:w-1/2 bg-accent p-3 rounded-xl border border-solid border-secondary dark:bg-black dark:border-primary">
            <p className="text-primary">Limit notifications types to:</p>
            <ProzSwitch label="Offers" name="general_notification_offers"></ProzSwitch>
            <ProzSwitch label="Requests" name="general_notification_requests"></ProzSwitch>
            <p className="text-[13px] rounded-xl border border-secondary dark:border-primary dark:boirder-dark text-primary dark:text-accent-foreground p-3">
              You will receive a single email notification when a new post is made in each of the
              areas you select. If you do not wish to receive any updates, simply leave all the
              areas unchecked.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GeneralNotifications;
