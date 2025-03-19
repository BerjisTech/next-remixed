import ProzRadioButton from "@/components/general/prozRadio";
import ProzSwitch from "@/components/general/prozSwitch";
import ProzNotification from "@/components/shared/prozNotification";
import React from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { KudozNotificationPreference } from "@/interfaces/kudoz";
interface KudozNotificationsProps {
  kudozNotificationPreferences: KudozNotificationPreference;
}
const KudozNotifications: React.FC<KudozNotificationsProps> = ({
  kudozNotificationPreferences,
}) => {
  const { user } = useAppSelector((state) => state.profile);
  const pairs = {};

  return (
    <React.Fragment>
      <ProzNotification
        className="my-5"
        type="warning"
        title="You have not specified any language pairs."
        message="Without reported language pairs, you will not be able to receive targeted notifications."
        link_text="Edit your languages"
        link_url="/next/profile/overview"
      ></ProzNotification>
      <div className="my-5 text-lg md:text-2xl text-primary font-semibold">
        KudoZ email notifications
      </div>
      <div className="my-5 text-primary">General settings for all language pairs</div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary flex flex-col md:flex-row items-start justify-start bg-white dark:bg-black">
        <ProzSwitch
          label="KudoZ notifications"
          name="kudoz_email_notification_notifications"
          value={
            kudozNotificationPreferences ? kudozNotificationPreferences.global_notifications : "n"
          }
        ></ProzSwitch>
      </div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary flex flex-col md:flex-row items-start justify-start bg-white dark:bg-black">
        <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
          <p className="font-semibold">Notification types</p>
          <p>
            Control what updates
            <br />
            you will be notified about
          </p>
        </div>
        <div className="flex flex-grow items-start justify-start gap-3 flex-col">
          <ProzSwitch
            name="kudoz_email_notification_notifications_on"
            label="New KudoZ questions"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.notifications_on : "n"
            }
          ></ProzSwitch>
          <ProzSwitch
            name="kudoz_email_notification_question_asked"
            label="Updates to questions I have asked"
            value={kudozNotificationPreferences ? kudozNotificationPreferences.question_asked : "n"}
          ></ProzSwitch>
          <ProzSwitch
            name="kudoz_email_notification_question_contributed"
            label="Updates to questions I have contributed to"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.question_contributed : "n"
            }
          ></ProzSwitch>
          <ProzSwitch
            name="kudoz_email_notification_peer_comments"
            label="Peer comments to my KudoZ answers"
            value={kudozNotificationPreferences ? kudozNotificationPreferences.peer_comments : "n"}
          ></ProzSwitch>
        </div>
      </div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary flex flex-col md:flex-row items-start justify-start bg-white dark:bg-black">
        <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
          <p className="font-semibold">Asker types</p>
          <p>
            Control whose questions
            <br />
            you will be notified about
          </p>
        </div>
        <div className="flex flex-grow items-start justify-start gap-3 flex-col">
          <ProzRadioButton
            name="kudoz_email_notification_asker_type"
            label="Any asker"
            value="any"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.asker_type == "any"
                ? true
                : false
            }
          ></ProzRadioButton>
          <ProzRadioButton
            name="kudoz_email_notification_asker_type"
            label="Askers registered at ProZ"
            value="plat"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.asker_type == "plat"
                ? true
                : false
            }
          ></ProzRadioButton>
          <ProzRadioButton
            name="kudoz_email_notification_asker_type"
            label="Askers who are ProZ members"
            value="member"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.asker_type == "member"
                ? true
                : false
            }
          ></ProzRadioButton>
          <ProzRadioButton
            name="kudoz_email_notification_asker_type"
            label="Glossary-building questions only"
            value="kog_team"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.asker_type == "kog_team"
                ? true
                : false
            }
          ></ProzRadioButton>
          <ProzSwitch
            name="kudoz_email_notification_ignore_neophytes"
            label="Questions from non-translators"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.ignore_neophytes : "n"
            }
          ></ProzSwitch>
        </div>
      </div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary flex flex-col md:flex-row items-start justify-start bg-white dark:bg-black">
        <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
          <p className="font-semibold">Question types</p>
          <p>
            Control what kind of questions
            <br />
            you will be notified about
          </p>
        </div>
        <div className="flex flex-grow items-start justify-start gap-3 flex-col">
          <ProzRadioButton
            name="kudoz_email_notification_point_types"
            label="Any question type"
            value="both"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.point_types == "both"
            }
          ></ProzRadioButton>
          <ProzRadioButton
            name="kudoz_email_notification_point_types"
            label="For-points questions only"
            value="points"
            checked={
              kudozNotificationPreferences && kudozNotificationPreferences.point_types == "points"
            }
          ></ProzRadioButton>
          <ProzRadioButton
            name="kudoz_email_notification_point_types"
            label="Not-for-points questions only"
            value="no_points"
            checked={
              kudozNotificationPreferences &&
              kudozNotificationPreferences.point_types == "no_points"
            }
          ></ProzRadioButton>
          <ProzSwitch
            label="Questions from homework or test translations"
            name="kudoz_email_notification_ignore_homework"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.ignore_homework : "n"
            }
          ></ProzSwitch>
          <ProzSwitch
            label="Questions that may offend"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.ignore_offensive : "n"
            }
            name="kudoz_email_notification_ignore_offensive"
          ></ProzSwitch>
          <ProzSwitch
            label="Glossary-building questions"
            name="kudoz_email_notification_ignore_kog_team"
            value={
              kudozNotificationPreferences ? kudozNotificationPreferences.ignore_kog_team : "n"
            }
          ></ProzSwitch>
        </div>
      </div>

      <div className="my-5 text-lg md:text-2xl text-primary font-semibold">
        Pair-specific preferences
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2">
        <span>Pair specific preferences</span>
        <select className="flex-grow outline-none focus:outline-none border-[1px] border-solid border-accent dark:border-primary rounded-xl p-3">
          <option>By language pair</option>
        </select>
      </div>

      {pairs && (
        <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
          {/* <p className="text-primary text-md md:text-2xl">{languagePairMap[pair.key]}</p> */}
          <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
            <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
              <p className="font-semibold">KudoZ notification delivery</p>
            </div>
            <div className="flex flex-grow items-start justify-start gap-3 flex-col">
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_delivery"
                value="immediate_alerts"
                label="Immediate alerts"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_delivery"
                value="daily_digest"
                label="Daily digests"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_delivery"
                value="alerts_and_digest"
                label="Both alerts and digests"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_delivery"
                value="none"
                label="None"
              ></ProzRadioButton>
            </div>
          </div>
          <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
            <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
              <p className="font-semibold">GBK questions notifications</p>
            </div>
            {/* <ProzSwitch name="kudoz_email_notification_{{ pair.key }}_gbk_notifications"></ProzSwitch> */}
          </div>
          <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
            <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
              <p className="font-semibold">KudoZ notification categories</p>
            </div>
            <div className="flex flex-grow items-start justify-start gap-3 flex-col">
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_categories"
                value="pro_and_non_pro"
                label="Both Pro and Non-Pro"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_categories"
                value="only_pro"
                label="Only Pro"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_notification_{{ pair.key }}_categories"
                value="only_non_pro"
                label="Only Non-Pro"
              ></ProzRadioButton>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-start mt-4">
            <div className="w-[300px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
              <p className="font-semibold">Fields</p>
            </div>
            <div className="flex flex-grow items-start justify-start gap-3 flex-col">
              <ProzRadioButton
                name="kudoz_email_notification_{{ pair.key }}_fields"
                value="my_specialties"
                label="My specialties"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_{{ pair.key }}_fields"
                value="my_working_fields"
                label="My working fields"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_{{ pair.key }}_fields"
                value="my_interest_fields"
                label="My interest fields"
              ></ProzRadioButton>
              <ProzRadioButton
                name="kudoz_email_notification_{{ pair.key }}_fields"
                value="all_fields"
                label="All fields"
              ></ProzRadioButton>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <p className="text-primary text-md md:text-2xl">KudoZ QuiZ</p>
        <ProzSwitch
          name="kudoz_email_notification_receive_quiz_invitations"
          label="I want to receive invitations or notifications about KudoZ QuiZ"
        ></ProzSwitch>
      </div>

      <button className="h-[40px] w-full md:w-[300px] text-accent-foreground bg-green-gradient dark:bg-green-gradient-dark rounded-lg mt-5">
        Save settings
      </button>
    </React.Fragment>
  );
};

export default KudozNotifications;
