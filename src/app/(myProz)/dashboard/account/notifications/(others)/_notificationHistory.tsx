import React from "react";

const NotificationHistory = () => {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-semibold text-primary px-0">
        Read the email and notification FAQ
      </h1>
      <hr></hr>
      <p className="text-primary my-2">Are your email preferences configured correctly?</p>
      <div className="p-3 bg-accent dark:bg-dark border border-solid border-secondary dark:border-primary rounded-lg">
        If you do not receive any email from ProZ, or if you receive some types of email messages
        but not others (and your email preferences are configured correctly), one of the following
        problems may be preventing reliable mail delivery.
        <ul className="p-4">
          <li>
            <strong>Email filters in your mail program</strong> - If you use any type of spam
            blocker or other email filter, please confirm that you are not accidentally filtering
            ProZ email notifications.
          </li>
          <li>
            <strong>Filtering by your ISP</strong> - Your ISP may employ various types of spam
            filtering which may be blocking ProZ messages. Some spam blacklists incur a large amount
            of collateral damage, requiring manual "white-listing" of some innocent sites.
          </li>
          <li>
            <strong>Transient Internet connectivity problems</strong> - There may be problems on the
            network somewhere between ProZ and your ISP that are preventing mail delivery. If so,
            chances are your ISP is already aware of the problem and is working to correct it.
          </li>
        </ul>
        If you still need help with your notifications,
        <a href="/next/site-team" className="text-primary font-semibold">
          submit a support request about email delivery problems »
        </a>
      </div>
    </React.Fragment>
  );
};

export default NotificationHistory;
