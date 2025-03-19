"use client";
import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

type Section = {
  id: string;
  title: string;
  content?: string;
  children?: { id: string; title: string; content: string }[];
};

const EmailPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeSubAccordion, setActiveSubAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const toggleSubAccordion = (id: string) => {
    setActiveSubAccordion((prev) => (prev === id ? null : id));
  };

  const sections: Section[] = [
    {
      id: "general-information",
      title: "General information",
      children: [
        {
          id: "general-information",
          title: "General information",
          content: `
                    <strong>How to access your mail monitor for notification history, your KudoZ and Jobs notification dashboards and notifications troubleshooting.</strong><br>
                    <p>Using your mail monitor:</p>
                    <p>Mouse over your name in the site header, and on the drop-down menu, under My communication settings section, click on <a href="https://www.proz.com/?sp=mail_monitor" class="underline">Notification history.</a></p><br>
                    <strong>You may also be interested in:</strong>
                    <ul>
                    <li>your <a href="https://www.proz.com/dashboard/kudoz" class="underline">KudoZ dashboard</a> (notifications for KudoZ questions)</li>
                    <li>your <a href="https://www.proz.com/dashboard/jobs" class="underline">Jobs dashboard</a> (notifications for jobs)</li>
                    <li><a href="#notifications-kudoz" class="underline">troubleshooting your KudoZ notifications</a></li>
                    <li><a href="#notifications-jobs" class="underline">troubleshooting your Jobs notifications</a></li>
                    </ul>`,
        },
        {
          id: "email-xxx-start",
          title: "Why is there an xxx at the start of my email address?",
          content: `
                    <p>Too many emails from ProZ.com have bounced back and your email address has been marked as invalid. Your secondary email address is being used.</p><br>
                    <p>Because users sometimes change email addresses without changing their settings, ProZ.com needs to check in an automated way to see when emails start "bouncing" back to its servers.</p><br>
                    <p>When the system 'sees' bounces, it "marks" the (usually bad) emails by appending an "xxx " prefix to them, which tells the mailing program "don't even try sending to this one". In cases where a user has entered both primary and secondary emails, the system promotes the secondary address and from then on, attempts to mail to that one. Note that the system will *not* make a point of going back and restoring the old order if your secondary address gets better - if you want it back, you have to do it yourself.</p><br>
                    <p>The KudoZ asking page, and other pages, check for a valid email address format before allowing anyone to ask. If you try to ask a question, and you have an "xxx " at the start of your email, the system will tell you your email address is bad.</p><br>
                    <p>Then there is the notification in the login box. When an email has bounced, notice is given to the user there.</p>`,
        },
        {
          id: "email-headers",
          title: "How do I view the complete headers of an email message?",
          content: `<p>To view the complete headers of an email message, follow the instructions for your email client described on this page maintained by pobox.com: http://pobox.com/fullheaders.mhtml</p>`,
        },
        {
          id: "email-virus",
          title: "I got an email virus that appeared to come from ProZ.com",
          content: `
                    <p>ProZ.com email notifications do not allow attachments, so propagating viruses through them is very unlikely. The email virus you received probably did not come from ProZ.com.</p><br>
                    <p>An increasingly common technique used by viruses and worms is to scan the infected user's email client for email addresses, subject lines, and message bodies, and then compose an infected email out of a random collection of these. The infected message is then sent to everyone in the user's address book. So, while the email you received may have claimed to be from ProZ.com, or have the subject line of a KudoZ notification, for example, those features of the email were likely randomly selected from emails on the infected user's computer.</p><br>
                    <p>The only way to tell for certain where an infected message originated is to look at the complete headers attached to the message by the mail servers that delivered it. If, by examining these headers, you ever find that an infected message truly originated at ProZ.com, please submit a support request including the message with complete headers, and we will take immediate action to resolve the problem.</p><br>
                    `,
        },
        {
          id: "email-proz-virus",
          title: "I think I received an email virus from ProZ.com site, is that possible?",
          content: `
                    <p>Not really. Most email viruses exploit security holes in Microsoft software. As ProZ.com servers do not use any Microsoft software, it is extremely unlikely that a virus would be sent from ProZ.com. It is possible to receive viruses from other ProZ.com members, and it may even be possible for viruses to be attached to mail from ProZ.com, but only after it has left our servers and been processed by an infected machine. No virus has ever been spread by the ProZ.com site or servers.</p>
                    `,
        },
        {
          id: "email-proz",
          title: "How can I get a @proz.com email account?",
          content: `
                    <p>It is not possible to obtain a @proz.com email address as @proz.com addresses are reserved for ProZ.com staff.</p>
                    `,
        },
        {
          id: "email-group",
          title: 'What is a "group mail"',
          content: `
                    <p>If you are a ProZ.com member you can send 'group mails' to up to 100 colleagues.<br> To do so, search the directory, http://www.proz.com/translator-directory/ to select a group that meets certain parameters (for example, language pair, credentials, areas of expertise, etc.) Select the check boxes to the left of the translators in your search results who you wish to contact. Then click the "Mail all now" link at the bottom of the page. Your message will be sent to up to 100 people who met your criteria.</p><br>
                    <p>You can imagine many uses for this: finding someone to help you on a project, starting a team, etc. This feature is not to be used for advertising your own services, however.</p><br>
                    <p>You can restrict who is allowed to send you mail through your profile, or disable profile mailing altogether. See the <a href="#general-notifications" class="underline">email preferences FAQ</a> for more information.</p>
                    `,
        },
      ],
    },
    {
      id: "profile-email",
      title: "Profile email",
      children: [
        {
          id: "profile-messages",
          title: "What are profile messages and how are they sent?",
          content: `
                    <p>Profile messages are one of several ways by which <strong>ProZ.com</strong> members can be reached by outsourcers and colleagues. They were designed to allow site members to receive messages while maintaining the privacy of their email addresses.</p>
                    <p>There are two kinds of messages that can be received through your profile: <strong>profile email</strong> and <a href="https://www.proz.com/?sp=proz_message" class="text-primary underline">instant messages</a>.</p>
                    <p>In the case of <strong>profile email</strong>, the email you will receive will have a subject line like this:</p>
                    <strong>
                        [ProZ.com mail] (Subject line entered by sender)
                    </strong>
                    <p>The text entered by the sender will be in the email itself, and there is no need to visit the site to see it.</p>
                    <p>In the case of an <strong>instant message</strong> (sent via the icon at the top of a profile), the subject line is the following:</p>
                    <strong>
                        [ProZ.com] You have received an instant message from a ProZ.com member
                    </strong>
                    <p>The message body will ask you to log in to your ProZ.com profile and provide the link to visit your instant message inbox.</p>
                    <p>To send a profile message, you should visit the profile of your intended message recipient and click on the envelope icon at the top-center of the profile.</p>
                    <p>When you click on that icon, a window will open for a subject line and the body of the message. A drop-down menu will allow you to indicate the type of message. There is an option to send a copy of the message to yourself.</p>`,
        },
        {
          id: "profile-messages-rules",
          title: "What are the rules for sending profile messages?",
          content: `
                    <p>These messages have a few clear rules. Basically, they cannot be used for:</p>
                    <ul class="list-disc ml-6">
                        <li>Advertising of any product or service, including one's own translation services</li>
                        <li>Sending offensive or personal remarks</li>
                        <li>Scams or fraudulent business proposals</li>
                    </ul>
                    <p>Failure to observe these rules may result in the suspension or removal of the sender's right to use profile messaging.</p>`,
        },
        {
          id: "profile-messages-limit",
          title:
            "Is there a limit in the number of profile messages I can send to other ProZ.com users?",
          content: `
                    <p>Yes. <a href="https://www.proz.com/professional-membership">ProZ.com paying members</a> are allowed to send unlimited profile email messages to other ProZ.com members. Site users can only send 25 profile email messages per day. If you are a site user and you would like to have the ability to send an unlimited number of emails, consider <a href="https://www.proz.com/professional-membership">joining ProZ.com as a member</a>.</p>
                    `,
        },
        {
          id: "profile-message-settings",
          title: "How can I decide who can send me a message through my profile?",
          content: `
                    <p>Select your <a href="https://www.proz.com/?sp=profile&sp_mode=settings" class="text-primary underline">settings</a> tab in the profile. Then click on <a href="https://www.proz.com/?sp=profile&sp_mode=settings&sp_submode=ef" class="text-primary underline">Email preferences</a>.</p>
                    <p>You can select one of four possible levels of restriction for the profile messages sent to you:</p>
                    <p><strong>a)</strong> Allow anyone to send me messages via my profile page</p>
                    <p>When you select this option, all users will be able to send profile messages to you.</p>
                    <p><strong>b)</strong> Allow only ProZ.com users who are logged in to send me messages via my profile</p>
                    <p>When you select this option, non-logged-in visitors attempting to send a profile message to you will get the following error message:</p>
                    <p><strong>"You must be logged in to send a mail to this user"</strong></p>
                    <p><strong>c)</strong> Allow only logged-in ProZ.com members to send me email via my profile page</p>
                    <p>When you select this option, any non-member attempting to send you a profile message will get the following error message:</p>
                    <p><strong>"You must be ProZ.com member to send a mail to this user"</strong></p>
                    <p><strong>d)</strong> Allow no one to send me messages via my profile page</p>
                    <p>When you select this option, any user attempting to send you a profile message will get the following error message:</p>
                    <p><strong>"This user does not wish to receive mail through his or her profile"</strong></p>`,
        },
        {
          id: "contact-profile",
          title:
            "How can I enter a note that will be shown to those attempting to contact me via profile?",
          content: `
                    <p>You can leave a message of up to 255 characters in the "Email preferences" page of your profile.</p>
                    <p>When someone decides to send you a message through your profile, your note will show at the top of the profile message form.</p>
                    `,
        },
        {
          id: "profile-messages-vetting",
          title: "Are profile messages reviewed or vetted?",
          content: `
                    <p>In order to provide flexibility, an open format was adopted, where almost anyone can send a message to any site user who has <strong>not</strong> opted for not receiving messages.</p>
                    <p>A complication of this approach is increased risk of spam or other unwanted email. There is no way to keep all the required flexibility and control the entry point of the system.</p>
                    <p>To prevent the feature's usefulness from being hampered by a flood of spam and fraud emails, the following solution was found:</p>
                    <p><strong>An automatic filter</strong> whose algorithm identifies “secure” messages and allows them to go through, while a small minority of “potentially unsafe” messages are held for human control by staff members. This "vetting" by staff is periodically activated and deactivated.</p>
                    <p>This is complemented by a feature that requires the manual input of a numeric code by message senders who are not logged in the site.</p>
                    <p>You can set your profile messages vetting preferences in the top drop-down menu select "My ProZ.com" and then "My settings", or directly the "Settings" tab in the profile, and then by selecting the "Email preferences" option.</p>
                    <p>There are two optional, mutually exclusive possibilities:</p>
                    <p>* "Do not vet messages sent to me via my profile", for site users who may feel that this kind of control conflicts with their privacy.<br>
                       * "I want staff to vet messages sent to me via my profile", available to site members only, for those who want to ensure a spam-free channel. </p>
                `,
        },
        {
          id: "report-abuse",
          title: "How do I report abuse of the ProZ.com mail system? (Spam)",
          content: `
                    <p>To report any abuse or email spam/scams/phishing through your ProZ.com mail service, submit a <a href="https://www.proz.com/support" class="text-primary underline">support request</a> via the support system. Just remember to add a copy of the message received, including headers, to help support staff handle the problem more efficiently.</p>
                    <p>You can also do this in a quicker and more efficient way as follows:</p>
                    <p>If you are receiving Spam in the form of a profile message you simply have to click on the link next to:</p>
                    <p><strong>"Unsolicited advertising? Spam? click here:"</strong> line at the bottom of the email you received in your email inbox.</p>
                    <p>If you are receiving Spam as an instant message you simply have to click on the "Report Spam" button at the bottom of the message.</p>
                    <p>In both cases a support request will be automatically generated containing all the necessary information ProZ.com support staff needs to take appropriate action.</p>
                `,
        },

        {
          id: "block-site-user",
          title:
            "How can I block a particular site user from sending me messages through my profile?",
          content: `
                    <p>You can access your block list in the top drop-down menu select "My ProZ.com" and then "My settings", or directly the "Settings" tab in the profile, and then by selecting the "Email preferences" option.</p>
                    <p>You can block users in different ways: (1) username or user ID, (2) IP address, (3) Blue Boards, and (4) email domains. After entering the information, press "Update".</p>
                    <p>To block a specific site user, you should enter the username or user ID of the user you want to block.</p>
                    <p>ProZ.com users or IP addresses specified in your block lists will not be allowed to send messages to you through your profile page. Your block lists override the general profile message preferences above. Note that because a great many Internet users have dynamic IP addresses, IP addresses will expire from your block list after a few days. You can achieve the same results by clicking on the link after the line "Block profile messages from this sender: " in any profile message received from that user.</p>
                    <p>If you add a Blue Board record ID to your block list, all profiles associated to that Blue Board record will not be able to send your profile messages. If you add an email domain to your block list, any person using a specific email domain (for example someone<strong>@spammer</strong>) will be unable to send you a profile message.</p>
                    <p>Any user in your block list who tries to send you a profile message will get the following error notification:</p>
                    <p>"You're on this user's blocklist--he or she does not wish to receive mail from you"</p>
                    `,
        },
        {
          id: "message-priority",
          title: "What is priority messaging?",
          content: `
                    <p>Priority messaging is a feature that lets Plus subscribers give clients the ability to reach them quickly for urgent job-related communications.</p>
                    <p>When sending a profile email, eligible users can choose to mark it as a priority message. When a priority message is sent, an attempt will be made to contact the recipient instantly over a variety of channels (depending on the recipient's preferences)--for example, mobile notifications and/or browser push notifications.</p>
                    `,
        },
        {
          id: "send-receive-priority-messages",
          title: "Who can send and receive priority messages?",
          content: `
                    <p>In general, priority messaging is only available if the sender is a business member or the recipient is a Plus subscriber. Additionally, the recipient must not have disabled priority messages or blocked messages from the sender in his or her <a href="https://www.proz.com/?sp=ef">profile mail preferences</a>.</p>
                    <p>Senders with a poor Blue Board LWA (lower than 2.5), open non-payment reports, or administrative blocks are not allowed to send priority messages.</p>
                    `,
        },
        {
          id: "send-mail",
          title: "Who can send mail to more than one person at a time?",
          content: `
                    <p><strong>Only ProZ.com business members are allowed to send mail to more than one person at a time.</strong></p>
                    <p>Only ProZ.com business members are allowed to send mail to more than one person at a time.</p>
                    <p>This recruiting benefit is available to send batch recruiting messages for standard business members, plus business members, enterprise business members.</p>
                    `,
        },
      ],
    },
    {
      id: "general-notifications",
      title: "General notifications",
      children: [
        {
          id: "email-whitelist",
          title: "How to ensure you receive emails from ProZ.com",
          content: `
                    <p>To make sure you receive emails from us, please add <strong>@proz.com</strong> to your list of safe senders, following the instructions below or the FAQ from your email provider.</p>
                    <p>When an email from ProZ.com arrives in your Spam/Junk folder, you should see an option to mark it as <strong>safe</strong>, <strong>not spam</strong>, etc.</p>
                    <p>Alternatively, you can whitelist a domain, or mark it as safe. Most email providers have their settings on the top right corner of the screen. There, you should find a menu with a name such as <em>Filters and Blocked Addresses</em>, <em>Rules and filters</em>, <em>Mail and Spam Controls</em>, <em>Safe and Blocked Senders</em>, etc.</p>
                    <p>Enter the domain name you want to whitelist in the corresponding email. Add an <strong>@</strong> sign before the domain name to make the filter specific. For example, to whitelist all mail from the proz.com domain, type <strong>@proz.com</strong> into the field.</p>
                    <p>You can also whitelist specific ProZ.com email addresses. Profile messages and most notifications are sent from:</p>
                    <ul class="list-disc ml-6">
                        <li><strong>bounce-handler@proz.com</strong></li>
                        <li><strong>notifications@proz.com</strong></li>
                        <li><strong>support@proz.com</strong></li>
                        <li><strong>profiles@proz.com</strong></li>
                    </ul>
                `,
        },
        {
          id: "job-notifications",
          title: "I stopped receiving job notifications.",
          content: `
                    <p>If you have checked <a href="https://help.proz.com/i-dont-receive-any-email-from-proz.com" class="text-primary underline">these common issues</a> with email notifications and you are still not receiving job notifications, check the services offered in each language pair. 
                       To check these services, go to your <a href="https://www.proz.com/settings/freelancer" class="text-primary underline">profile updater</a> > <a href="https://www.proz.com/settings/languages">Languages</a> and click on the edit icon to the right of each language combination.
                    </p>
                    <p>A menu will unfold and you will be able to select the services you offer for each language combination. 
                       Take into account that you will not receive a notification for a job that requires a service that you are not offering in a certain language combination.
                    </p>
                `,
        },
        {
          id: "missing-notifications",
          title:
            "I receive some email from ProZ.com, but I don't receive all the email notifications that I should.",
          content: `
                    <p>First, ensure that your <a href="http://www.proz.com/?sp=dashboard&sp_mode=overview" class="text-primary underline">dashboard</a> is set appropriately. To receive more KudoZ notifications, select more notification subject areas, or accept both "pro" and "nonpro" questions.</p>
                    <p>For job notifications, select more fields and/or specialties in your dashboard, or check the "All fields" check box so you don't miss any notifications in that language pair. (Some job posters elect to restrict notifications based on more detailed criteria, such as geographic location, credentials, skill set, etc.)</p>                    
                    <p>If you are certain that your dashboard is set correctly and you are not getting all the emails you should be from ProZ.com, we may be having intermittent problems delivering mail to your domain.</p>                    
                    <p>See the <a href="https://help.proz.com/i-dont-receive-any-email-from-proz.com" class="text-primary underline">"I don't receive any email from ProZ.com" FAQ</a> for more information.</p>
                `,
        },
        {
          id: "no-email-received",
          title: "I don't receive any email from ProZ.com",
          content: `
                    <p>If you don't receive any email from ProZ.com, the problem might be caused by email filters in your mail program, spam filtering by your ISP, or transient Internet connectivity problems that can go away by themselves.</p>
                    <p>Please see the <a href="https://www.proz.com/?sp=mailprob" class="text-primary underline">mail delivery problems</a> page for more information.</p>
                `,
        },
        {
          id: "mail-monitor-notifications",
          title:
            "My Mail Monitor says that notifications are being sent but still I can't get them.",
          content: `
                    <p>If you check your mail monitor and it shows notifications that we have sent to you, it actually means that the servers of your email provider confirmed to us that the notifications have reached them.</p>
                    <p>In other words, it means that we are sending them but for some reasons not related to ProZ.com they are not reaching your mailbox.</p>
                    <p>If you don't get those messages, the problem is between those servers and your email account.</p>
                `,
        },
        {
          id: "email-notifications-delayed",
          title: "My email notifications are delayed. What can I do?",
          content: `
                    <p>All times shown on the site are in Greenwich Mean Time (GMT). Therefore, depending on your geographical location, it is possible that the time on your job notification compared to the job posting time will appear to be different.</p>
                    <p>However, if you take into consideration the difference between the time displayed by the site and your email client, you will see that the email notification was actually sent out minutes after the job was vetted and made public.</p>
                    <p>To help site staff track down the cause of email notification delays, submit a <a href="https://www.proz.com/support?mode=ask&type=email" class="text-primary underline">support request</a> including the complete headers of a late message. See <a href="https://www.proz.com/faq/email_and_notifications/email_and_notifications:_general.html#mail_headers" class="text-primary underline">this FAQ</a> for information about viewing the complete headers of an email message.</p>
                `,
        },
        {
          id: "get-different-email-notifications",
          title: "How can I get more, fewer, or different email notifications?",
          content: `
                    <p>To edit <a href="https://www.proz.com/?sp=ef" class="text-primary underline">your email notification preferences</a>, go to -> Settings -> Email Preferences in your profile page.</p>
                    <p>Select the <a href="https://www.proz.com/?sp=ef&show_mode=profmail" class="text-primary underline">Profile mail tab</a> to control the type of messages you receive through your profile page.</p>
                    <p>Select the <a href="https://www.proz.com/?sp=ef&show_mode=job" class="text-primary underline">Job notifications tab</a> to select more or fewer job notifications.</p>
                    <p>From the <a href="https://www.proz.com/?sp=ef&show_mode=kudoz" class="text-primary underline">KudoZ tab</a>, you can define your KudoZ notification preferences in detail.</p>
                `,
        },
        {
          id: "unsubscribe-all-notifications",
          title: "How can I unsubscribe from all ProZ.com email notifications?",
          content: `
                    <p>To remove all email notifications associated with your account, visit <a href="https://www.proz.com/?sp=unsubscribe" class="text-primary underline">the unsubscribe page</a>.</p>
                    <p>Select the second option, "Stop all email notifications to my address".</p>
                `,
        },
        {
          id: "kudoz-link-id-not-exist",
          title:
            "Why does the link in my KudoZ/job/forum email notification go to a page saying the ID does not exist?",
          content: `
                    <p>Sometimes a moderator will remove a KudoZ question, forum posting, or job from the site after email notifications have been sent out.</p>
                    <p>Anyone clicking the link in such an email notification will not see the expected job, KudoZ question, or forum posting, because it is no longer visible on the site.</p>
                `,
        },
        {
          id: "daily-digest",
          title: "What is a daily digest?",
          content: `
                    <p>It's a message that contains a brief summary of the questions that have been asked in the day, as well as a short listing of any answers to those questions so far.</p>    
                    `,
        },
      ],
    },
    {
      id: "notifications-kudoz",
      title: "Notifications: KudoZ",
      children: [
        {
          id: "not-getting-email",
          title: "Why am I not getting any KudoZ email notifications?",
          content: `
                    <p>If you are not getting KudoZ email alerts at all, and you have never gotten them, check the settings in your profile page. You will not get any notifications if:</p>
                    <ul>
                        <li>You have entered no language pairs.</li>
                        <li>You have entered no fields of expertise.</li>
                        <li>You have not selected KudoZ email notifications in your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">email preferences</a>.</li>
                    </ul>
                    <p>If you had been receiving notifications, and without anything changing stopped receiving them, there could be several causes:</p>
                    <ul>
                        <li>Previous messages to you bounced, and your <a href="#email-xxx-start" class="text-primary underline">email address was 'stamped' bad</a>. Check the <a href="https://www.proz.com/?sp=persedit" class="text-primary underline">personal data</a> in your profile page; the characters 'xxx' will have been added before your address.</li>
                        <li>There is a problem with ProZ.com email notifications. Check the <a href="https://www.proz.com/?sp=site_status" class="text-primary underline">site status</a> page for info.</li>
                        <li>You or your ISP has changed or added filtering, and that filtering is preventing the alerts from reaching you (there is a known problem with terra.es, for example).</li>
                    </ul>
                    <p>If, after checking the above, you cannot find the problem, enter a <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">support request</a> with a link to at least one KudoZ question of which you should have been alerted.</p>
                `,
        },
        {
          id: "not-getting-all",
          title: "Why am I not getting all the KudoZ notifications I should be?",
          content: `
                    <p>When email alerts go out for KudoZ questions, among the criteria considered are: language pair, subject area, and difficulty level. If you have not received email notification of a question, make sure that your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ notification settings</a> are such that you should have received it.</p>
                    <p>If you are convinced that they are, please submit a <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">support request</a>, including the URL(s) of one or more KudoZ questions of which you should have been notified. ProZ.com staff will check to see whether or not the alert email to you left the ProZ.com servers. (If it did, there may be a problem, or filtering, happening at your ISP or on your local computer.)</p>
                `,
        },
        {
          id: "too-many-notifications",
          title: "I am getting too many KudoZ email notifications.",
          content: `
                    <p>To reduce the volume of KudoZ email notifications you receive, try selecting fewer subject areas in your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ notification preferences</a>.</p>
                    <p>To stop receiving KudoZ email notifications altogether, select "I do not want to receive any KudoZ notifications of any kind" in your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a>.</p>
                `,
        },
        {
          id: "emailed-not-seen",
          title:
            "Why do I get emailed questions that I can't see on the site, or see questions but have not been emailed?",
          content: `
                    <p>This may be because of the way you set your email and/or viewing preferences, which are set separately.</p>
                    <p>Email preferences are set via your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a> and viewing preferences are set via the <a href="http://www.proz.com/kudoz" class="text-primary underline">KudoZ list page</a>.</p>
                `,
        },
        {
          id: "daily-digest",
          title: "What is a daily digest?",
          content: `
                    <p>It's a message that contains a brief summary of the questions that have been asked in the day, as well as a short listing of any answers to those questions so far.</p>
                    <p>You can opt-in or opt-out of daily digests using the <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a>.</p>
                `,
        },
        {
          id: "team-notifications",
          title: "How do I receive KudoZ notifications from my team?",
          content: `
                    <p>Any members of your team can post a KudoZ question private to your team.</p>
                    <p>To receive notifications for these types of questions all you need is to have your notifications turned on and the related language pair in your listed working or interest pairs.</p>
                    `,
        },
        {
          id: "track-kudoz-question",
          title: "Can I track a particular KudoZ question?",
          content: `
                    <p>Yes. If you are a <a href="https://www.proz.com/professional-membership" class="text-primary underline">member</a> you can track any KudoZ question. For each question, you will see a track setting box in the left navigation column of the page.</p>
                    <p>When you check this box and click on save, you will receive a notification each time a reference post or an answer is posted.</p>
                    <p>Also, there is a selection box in the discussion area that allows the tracking of the discussion entries of a particular question.</p>
                    <p>When you select the "track question" box, the "track discussion" will also be selected. You can then de-select any of them independently.</p>
                    <p>When you post a reference comment, an answer, or a discussion entry, the "track discussion" box is selected. If you de-select it once it will no longer be automatically selected again in this question.</p>
                `,
        },
        {
          id: "notifications-kudoz-answer",
          title:
            "How can I get notifications when a certain user posts a KudoZ answer or reference comment?",
          content: `
                    <p>In order to get a notification every time a certain registered user posts a KudoZ answer or reference comment, you must get this user's authorization to track their answers. To do so:</p>
                    <p>Hover over your username in the top right corner of ProZ.com's site header until you see a drop-down menu. Under the section <strong>My communication settings</strong>, select <strong>KudoZ email settings</strong> to go to your <a href="/kudoz-dashboard" class="text-primary underline">KudoZ dashboard</a>.</p>
                    <p>On your KudoZ dashboard, click on the <strong>"Answerer tracking"</strong> tab.</p>
                    <p>In the answerer tracking page, enter the user's ID in the corresponding box and press <strong>"Track answerer"</strong>. If you don't know this number, click on the <strong>"Search"</strong> link to open a search tool. Enter the corresponding information such as name, username, or profile number, then click on <strong>"Search"</strong> and, on the found profile, select the user.</p>
                    <p>At this point the dashboard will show the corresponding profile number and username. You may send a personalized message before sending the request by means of the "track answerer" button.</p>
                    <p>You can also start this procedure by clicking on the "track this answerer" in an answer or reference comment posted by a user.</p>
                    <p>After submitting the request, the dashboard will record it as pending. While the request is pending, you will see a special message in each answer or reference comment posted by the tracked user.</p>
                    <p>Once your request is accepted, the dashboard will show change its status from pending to Accepted, and give you the option to remove tracking.</p>
                    <p>You will receive a notification each time a tracked user posts an answer or a reference comment.</p>
                `,
        },
        {
          id: "filter-questions",
          title: "I don't want notifications of a particular person's questions. What can I do?",
          content: `
                    <p>If you become convinced that a certain member is not likely to ask questions that are of interest to you, you may opt to "filter" that member's questions, regardless of your notification settings.</p>
                    <p>To do so, go to your <a href="/kudoz-dashboard" class="text-primary underline">KudoZ dashboard</a>. Hover over your username on the top right corner of ProZ.com's site header until you see a drop-down menu. Under the section <strong>My communication settings</strong>, select <strong>KudoZ email settings</strong>.</p>
                    <p>On your KudoZ dashboard, click on the <strong>"Asker flags & filters"</strong> tab.</p>
                    <p>To filter an asker you should enter the user's ID in the corresponding box and press "Filter asker". If you don't know this number you should click on the "Search" link to open a search tool.</p>
                    <p>In this case a search by name brings the user's ID and username.</p>
                    <p>Notifications will <strong>not</strong> be sent to you of filtered askers' questions, even when they do match your notification settings. Also, these questions will <strong>not</strong> be shown to you when you select KudoZ - Answer questions, even when they match your selection criteria.</p>
                `,
        },
        {
          id: "notification-certain-person",
          title: "How can I get notifications when a certain person asks a KudoZ question?",
          content: `
                    <p>In order to get a notification every time a certain registered user asks a KudoZ question, you have to "flag" this asker as follows:</p>
                    <p>Hover over your username in the top right corner of ProZ.com's site header until you see a drop-down menu. Under the section <strong>My communication settings</strong>, select <strong>KudoZ email settings</strong> to go to your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a>.</p>
                    <p>On your KudoZ dashboard, click on the <strong>"Asker flags & filters"</strong> tab.</p>
                    <p>To flag an asker you should enter the user's ID in the corresponding box and press "Flag asker". If you don't know this number you should click on the "Search" link to open a search tool.</p>
                    <p>In this case a search by name brings the user's ID and username.</p>
                    <p><strong>Notifications will be sent to you of flagged askers' questions, even when they do not match your notification settings.</strong></p>
                    <p></p>
                `,
        },
        {
          id: "kudoz-tracking-options",
          title: "What are my options for the KudoZ tracking feature?",
          content: `
                    <p>There are three basic conditions that you can configure by hovering over your username, on the top right corner of ProZ.com's site header until you see a drop-down menu. Under the section <strong>My communication settings</strong>, select <strong>KudoZ email settings</strong> to go to your <a href="/kudoz-dashboard" class="text-primary underline">KudoZ dashboard</a>.</p>
                    <p>In the dashboard page, select the <strong>"Answerer tracking"</strong> tab.</p>
                    <p>In the box <strong>"Who can track you"</strong> on the right side of the dashboard, you can select the following options:</p>
                    <ul>
                        <li><strong>Allow anyone to track my answers:</strong> requests will be automatically approved.</li>
                        <li><strong>Ask me for permission on a case-by-case basis:</strong> you will be asked each time a request is received.</li>
                        <li><strong>Do not allow anyone to track my answers:</strong> all requests will be automatically rejected.</li>
                    </ul>
                    <img src="/next/next_assets/images/help/items/kudoz-tracking.png" alt="KudoZ tracking" class="my-4">
                `,
        },
        {
          id: "user-authorization",
          title:
            "A user asked for authorization to track my KudoZ answers. Why would someone want to do this?",
          content: `
                    <p>While the motives could be different for each user, two likely reasons to do so would be (a) to learn from someone who is good in a certain field of expertise or (b) to evaluate a translator for possible future collaborations.</p>
                    <p>Remember that you can revoke the right to track your answers at any time.</p>
                    `,
        },
        {
          id: "track-answers",
          title: "A site user would like to track my answers, what should I do?",
          content: `
                    <p>To work on your answer tracking options, mouse-hover over your username, on the top right corner of ProZ.com's site header until you see a drop-down menu. Under the section <strong>My communication settings</strong>, select <strong>KudoZ email settings</strong> to go to your <a href="https://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a>.</p>
                    <img src="/next/next_assets/images/help/items/my-communication-settings.png" alt="My communication settings" class="my-4">
                    <p>In the dashboard page, select the <strong>"Answerer tracking"</strong> tab.</p>
                    <p>On this page, you will see the notification that you have a pending request to be tracked by a colleague and, on the right side, the identity and message from the colleague who sent the request:</p>
                    <img src="/next/next_assets/images/help/items/pending-request.png" alt="Pending request notification" class="my-4">
                    <img src="/next/next_assets/images/help/items/colleagues-tracking.png" alt="Colleagues tracking panel" class="my-4">
                    <p>This right-side panel allows you to approve or decline the request. If you choose to approve it, you will be asked for a confirmation.</p>
                    <p>Note that you can at this point select the option "Allow anyone else who wants to track my answers to do so as well", so that further requests will be automatically approved.</p>
                    <p>Once you approved one or more users for tracking your answers, you will find them at the table of colleagues tracking you.</p>
                    <p>This panel allows you to revoke individually the permission to track your answers granted to any of those colleagues.</p>
                `,
        },
        {
          id: "kudoz-other-language-pairs",
          title: "How can I be notified of KudoZ questions in other language pairs?",
          content: `
                    <p>To be notified of questions asked in language pairs you do not want to list as working language pairs in your profile, just report the language pairs in question as interest language pairs.</p>
                    <p>To do so, go to your <a href="http://www.proz.com/settings/languages" class="text-primary underline">Profile Updater</a> and report your 'non-working' language pairs in the <strong>Languages</strong> section.</p>
                    <p>Once reported, click on <strong>Edit</strong> next to each language pair just added and select <em>I only have an interest in this pair, do not show it in my profile</em>. Remember to save all the changes you apply.</p>
                    <p>Finally, go to your <a href="http://www.proz.com/?sp=dashboard&sp_mode=kudoz" class="text-primary underline">KudoZ dashboard</a> and set your KudoZ notifications preferences for these language pairs as you have done for your working language pairs.</p>
                `,
        },
        {
          id: "kudoz-opposite-language-pairs",
          title:
            "How do I get KudoZ notifications for opposite language pairs to my working languages?",
          content: `
                    <p>First, indicate direct pairs as <strong>"working"</strong> and reverse pairs as <strong>"interest"</strong> in your <a href="http://www.proz.com/settings/languages?eid_s=1213228#pairs" class="text-primary underline">Profile Updater</a> (here's a <a href="https://help.proz.com/kudoz-notifications-in-other-languages" class="text-primary underline">step by step guide</a>).</p>
                    <p>Then, use these parameters to set up <a href="http://www.proz.com/?sp=dashboard&sp_mode=kudoz&eid_s=" class="text-primary underline">notifications settings</a>.</p>
                `,
        },
        {
          id: "receive-gbk-notifications",
          title: "I want to receive notifications about GBK questions, what should I do?",
          content: `
                    <p>To receive email notifications for GBK questions, go to your <a href="/kudoz-notifications-dashboard" class="text-primary underline">KudoZ notifications dashboard</a> and confirm that the option <strong>Ignore glossary-building questions</strong> is un-checked.</p>
                    <p><img src="/next/next_assets/images/help/items/question-types.png" alt="GBK notification preferences example"></p>
                    <p>Don't forget to save your preferences by clicking on <strong>"Save preferences"</strong> at the bottom of the page.</p>
                `,
        },
      ],
    },
    {
      id: "notifications-jobs",
      title: "Notifications: Jobs",
      children: [
        {
          id: "not-getting-email-jobs",
          title: "Why am I not getting any email notifications of jobs?",
          content: `
                    <p>If you are not getting job alerts at all, and you have never gotten them, check the settings in your profile page. You will not get any notifications if:</p>
                    <ul>
                        <li>You have entered no language pairs.</li>
                        <li>You have entered no fields of expertise.</li>
                        <li>You have not selected Job email notifications in your <a href="https://www.proz.com/dashboard/jobs" class="text-primary underline">email preferences</a>.</li>
                    </ul>
                    <p>If you had been receiving notifications, and without anything changing stopped receiving them, there could be several causes:</p>
                    <ul>
                        <li>Previous messages to you bounced, and <a href="#email-xxx-start" class="text-primary underline">your email address was 'stamped' bad</a>. Check the <a href="https://www.proz.com/?sp=persedit" class="text-primary underline">personal data</a> in your profile page; the characters 'xxx' will have been added before your address.</li>
                        <li>There is a problem with ProZ.com email notifications. Check the <a href="https://www.proz.com/?sp=site_status" class="text-primary underline">site status</a> page for info.</li>
                        <li>You or your ISP has changed or added filtering, and that filtering is preventing the alerts from reaching you (there is a known problem with terra.es, for example).</li>
                    </ul>
                    <p>If after checking the above you cannot find the problem, enter a <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">support request</a> with a link to at least one job of which you should have been alerted.</p>
                `,
        },
        {
          id: "classic-jobs-notifications-criteria",
          title: "What is the criteria taken into account for classic jobs notifications?",
          content: `
                    <p>Classic jobs notifications are sent taking into account the following fields in a job posting, apart from <a href="https://www.proz.com/dashboard/jobs" class="text-primary underline">jobs notifications preferences</a>:</p>
                    <ul>
                        <li>Language pair</li>
                        <li>Service type</li>
                        <li>Subject field</li>
                        <li>Rates</li>
                    </ul>
                    <p>However, note that outsourcers may also restrict their jobs using the following criteria:</p>
                    <ul>
                        <li>Membership</li>
                        <li>Account type</li>
                        <li>Native language</li>
                        <li>Software</li>
                        <li>Credentials</li>
                        <li>Location</li>
                        <li>Specific field</li>
                        <li>Expertise</li>
                    </ul>
                    <p>Thus, when receiving a job notification, what you are receiving is an alert that a job was posted in the language pair reported in your profile, in one of your fields, within your rates, and looking for one of the services you offer. But this is just an alert. To see the job's details, you must visit the job posting.</p>
                `,
        },
        {
          id: "not-getting-all-job-alerts",
          title: "Why am I not getting all the job email alerts I should be?",
          content: `
                    <p>When email alerts go out for jobs, among the criteria considered are: language pair, subject area, tools required, geographical specifications, credentials required, rate offered. If you have not received an email notification of a job, make sure that your <a href="https://www.proz.com/settings/" class="text-primary underline">profile settings</a> and <a href="https://www.proz.com/dashboard/jobs" class="text-primary underline">email preferences</a> are such that you should have received it. In particular, you should consider checking the following:</p>
                    <ul>
                        <li><strong>Subject area:</strong> make sure the subject field specified by the outsourcer for their job is one of the fields reported in your profile. Note that outsourcers sometimes specify more than one subject field for their jobs. Make sure you have reported all fields selected by the outsourcer, and not just one or two of them. You can report fields <a href="http://www.proz.com/settings/freelancer/services/#fields" class="text-primary underline">here</a>.</li>
                        <li><strong>Software:</strong> make sure the software required for the job is listed as software in your profile. You can edit the list of software you use from your <a href="http://www.proz.com/settings/freelancer/services/#softwares" class="text-primary underline">Profile Updater</a>.</li>
                        <li><strong>Rates:</strong> translators will <strong>not</strong> be notified of jobs where the offered rate (if any) is below the minimum rate declared in their profile. (If necessary, currency conversion is performed using exchange rates from <a href="https://www.xe.com/" target="_blank" rel="noopener" class="text-primary underline">xe.com</a>.) You can edit or enter the rates declared in your profile <a href="http://www.proz.com/settings/freelancer/financial/#rates" class="text-primary underline">here</a>.</li>
                        <li><strong>Services required:</strong> Note that jobs are classified into Potential, Interpreting and Translation/editing/proofing job. Check the services you have reported for the language pair in which you are interested from your <a href="http://www.proz.com/settings/languages">Profile Updater</a> by clicking on Edit next to each of the language pairs you reported.</li>
                        <li><strong>Credentials:</strong> Some outsourcers prefer to receive quotes from service providers who have reported credentials in their profiles for the language pair required for the job. To report your credentials go to your <a href="http://www.proz.com/settings/languages">Profile Updater</a> and click on 'Add credentials' next to the corresponding language pair declared in the 'Language pairs' section. A window will pop up allowing you to report any professional credentials, certifications or accreditations you have earned from recognized authorities.</li>
                        <li><strong>Location:</strong> make sure the location specified by the outsourcer matches the location reported in your profile. Remember you can enter your contact details in your <a href="http://www.proz.com/settings/languages">Profile Updater</a>.</li>
                        <li><strong>Native language:</strong> Note that some outsourcers prefer to receive quotes from service providers who have reported a specific native language. You can report your native language <a href="http://www.proz.com/settings/languages">here</a>.</li>
                        <p>Also, check your <a href="http://www.proz.com/?sp=dashboard&sp_mode=jobs" class="text-primary underline">jobs dashboard</a> to see your notification preferences are set correctly. Note that apart from turning on your Classic Notifications settings, you must choose to receive immediate alerts for each language pair.</p>
                        <p>Selecting working fields will include your specialty fields, selecting interest fields will include working and specialty fields, and selecting all fields will include all the fields reported in your profile and not all available fields.</p>
                        <p>In your <a href="http://www.proz.com/dashboard?sp_mode=jobs&sp_jobs_mode=flagsandfilters" class="text-primary underline">jobs dashboard</a>, make also sure you have not filtered any outsourcer or that you have not selected a higher average LWA than the average for the outsourcer that posted the job for which you were not notified.</p>
                        <p>Remember you can also check your <a href="http://www.proz.com/?sp=mail_monitor" class="text-primary underline">Mail monitor</a> for more information any time.</p>
                        <p>If you are unable to resolve the problem or need further help, please submit a <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">support request</a>, including the URL(s) of one or more jobs of which you should have been notified. Support staff will check to see whether or not the alert email to you left the ProZ.com servers. If it did, there may be a problem, or filtering, happening at your ISP or on your local computer.</p>
                    </ul>
                `,
        },
        {
          id: "notified-language-pair",
          title: "Why am I not notified of all jobs in my language pair?",
          content: `
                    <p>Even when your email preferences specify that you would like to be notified of "all" jobs in your language pair, there are a number of criteria used by the system to determine who to notify of new job postings. For example, outsourcers may specify that they only want to notify translators in a certain country, or those with certain software. Selecting "all notifications" only ensures that you will receive the job notification if the outsourcer did not specify any such detailed restrictions.</p>
                    `,
        },
        {
          id: "delayed-job-alerts",
          title: "Why are job alerts sent to me some time after they were posted?",
          content: `
                    <p>Some job posters are able to post jobs that appear immediately. Posting made by others require vetting. Email alerts can not be sent until the time such jobs are vetted. This is why the time you receive an email may be several hours later than the time the job was posted. When notifications are sent, they are sent to all users fairly; normally all notification emails leave our servers within 5 minutes.</p>
                    <p>Another factor to consider is the difference in timezones. By default, times are shown on the site in Greenwich Mean Time (GMT). Therefore, depending on your geographical location, it is possible that the time on your job notification compared to the job posting time will appear to be different; however, if you take into consideration the difference between the time displayed by the site and your email client, you will see that the email notification was actually sent out minutes after the job was vetted and made public. </p>
                    <p>If you are experiencing delays not explained by the above, please <a href="https://www.proz.com/support?mode=ask">submit a support request</a>, including the URL of the job for which your email was delayed. We will be able to look up the exact time the message left our servers.</p>
                    `,
        },
        {
          id: "classic-job-notifications",
          title: 'What are "Classic" job posting notifications for Business members?',
          content: `
                    <p>As of May 2016, <a href="https://www.proz.com/business-membership" class="text-primary underline">Business members</a> have the option to receive notifications based on the fields declared in their company profiles.</p>
                    <p>Company profiles are not bound by requirements that only make sense when the service provider is just one person, such as "Native language".</p>
                    <p>With this tool, Business members can choose to be notified of all the job postings that they can submit a quote on. This is done by comparing the requirements in the job posting with the <a href="https://www.proz.com/settings/company/services" class="text-primary underline">working languages</a> they have declared that their company provides services in.</p>
                `,
        },
        {
          id: "unexpected-job-notifications",
          title:
            "I received a job notification through ProZ.com that did not come through the directory, direct profile contact or from a ProZ.com job post, what is it?",
          content: `
                    <p>An interface ("API" or Application programming interface) is being developed which allows clients to search for and contact ProZ.com members for paid work from their own translation platforms. In essence, this interface represents a potential additional channel of client contact for ProZ.com members. The interface is currently being tested with a limited group of volunteers.</p>                
                    <p>Translation clients can use the interface to look for language professionals based on various search parameters, much in the way clients use the <a href="http://www.proz.com/translator-directory/" class="text-primary underline">ProZ.com directory</a>. Clients may then select candidates to contact for potential work through their translation platform. Initial contact is handled via an invitation which the language professional receives through email. The recipient is given information regarding the client and project and may respond by email. The recipient's contact email is not disclosed unless they choose to respond to the invitation.</p>                
                    <p>Potential clients who use this interface to search for language professionals will only see a sub-set of the information that you have chosen to make public in your ProZ.com profile, similar to the data that is shown in the <a href="http://www.proz.com/translator-directory/" class="text-primary underline">ProZ.com directory</a>. No information which you have not made expressly public in your ProZ.com profile is shared with potential clients unless you choose to do so.</p>                
                    <p>Work relations beyond the acceptance of an invitation to collaborate are the responsibility of the client and the service provider. When considering working with any new client, service providers are encouraged to perform adequate screening and risk management.</p>                
                    <p>Remember that, similarly to the ProZ.com directory and the jobs posting system, certain information you enter in your ProZ.com profile can help better connect you with the kind of potential clients you are seeking. Declaring your rates (even if you choose to keep them private) will help prevent client contact from those seeking translation services below your rates, for example.</p>                
                    <p>For more information on how this works, see:</p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/tools#proz-com-api" class="text-primary underline">ProZ.com API FAQs</a></li>
                        <li><a href="http://www.proz.com/api-docs" class="text-primary underline">ProZ.com 2.0 API documentation</a></li>
                    </ul>                
                    <p>If you have further questions about how this works, please <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">contact the ProZ.com site team via support request</a>.</p>
                  `,
        },
        {
          id: "rss-feed-jobs",
          title: "What is the RSS feed for jobs?",
          content: `
                    <p>RSS is an acronym for <strong>Really Simple Syndication</strong>, a family of Web formats used to publish frequently updated content such as news headlines or blog entries in a standardized format, allowing users to subscribe to it.</p>            
                
                    <p>A feed reader is client software or a web application that is used to subscribe to and collect syndicated web content in a single location for easy viewing.</p>           
                
                    <p>You can track job postings matching your preferences in your RSS feed reader by clicking the orange button in the <a href="http://www.proz.com/translation-jobs" class="text-primary underline">jobs page</a> to get started. Your feed will be based on your advanced search settings there. To see the complete job description and to quote, you will need to visit the full job page using the link in the feed item.</p>            
                
                    <p>The feed contains the basic information about the job, including the link to the job, the job title and short description, and the job requirements (including language pairs and fields of expertise). The feed updates once every five minutes.</p>            
                
                    <p>You will notice that the URL for the feed contains your entity_id and a unique token that allows you to view job summaries that match your preferences without logging in. You cannot use this token to log in or to access any part of the site. Additionally, the token and feed do not contain any personally identifiable information about the subscriber.</p>            
                
                    <p>You can subscribe using any news reader that you would like. If you encounter any encoding issues or have questions, comments, or concerns, please contact site staff via a <a href="https://www.proz.com/support?mode=ask" class="text-primary underline">support request</a>.</p>
                  `,
        },
        {
          id: "job-notifications-setup",
          title: "How do you set up your Job notifications effectively?",
          content: `
                    <p>In order to be sure that your job notifications are set up properly, please follow these steps:</p>
                    <ul class="list-disc list-inside">
                      <li>
                        Ensure your services for each language pair reflect the services you offer in that combination, here: <a href="https://www.proz.com/settings/languages" target="_blank" class="text-primary underline">Language Settings</a>. If you do not select the service for a language pair, you may not receive notifications for such a job.
                      </li>
                      <li>
                        Report the required field of expertise for the jobs you want to apply for. You can edit the <em>"Expertise"</em> area of your profile from the <em>"Services"</em> tab of the Profile updater: <a href="https://www.proz.com/settings/freelancer/services" target="_blank" class="text-primary underline">Freelancer Services</a>.
                      </li>
                      <li>
                        Edit your email notification preferences. Go to <em>Settings > Email Preferences</em> in your profile page: <a href="https://www.proz.com/?sp=ef" target="_blank" class="text-primary underline">Email Preferences</a>. Select the <em>Job Notifications tab</em> to adjust your job notifications: <a href="https://www.proz.com/dashboard/jobs" target="_blank" class="text-primary underline">Job Dashboard</a>.
                      </li>
                      <li>
                        Ensure the <em>"Classic"</em> job posting notifications for freelancers are set to "On" and the <em>"Pair-specific Preferences"</em> are set to <em>"Immediate alerts"</em>. Confirm your notifications for each language pair match the fields you wish to be notified of. For more details, check the blog post: <a href="https://go.proz.com/blog/language-job-notifications-settings" target="_blank" class="text-primary underline">Are you receiving language job notifications via ProZ.com?</a>.
                      </li>
                      <li>
                        If you tick the box <em>“Do not send me notifications of jobs that are below my minimum rates”</em>, you may receive fewer job notifications:
                        <img src="/next/next_assets/images/help/items/rates.png" alt="Do not send me notifications of jobs below my minimum rates">
                      </li>
                      <li>
                        If your settings appear correct, ensure emails from ProZ.com are not being spam-filtered. Add the domain <em>@proz.com</em> to your safe senders list. For more details, visit: <a href="https://clean.email/blog/email-security/how-to-whitelist-an-email" target="_blank" class="text-primary underline">How to whitelist an email</a>.
                      </li>
                      <li>
                        If you missed a notification for a job you believe you should have received, review these factors before contacting site staff:
                        <ul class="list-disc list-inside">
                          <li>Job poster restrictions</li>
                          <li>Language Pairs / Services</li>
                          <li>Native language required</li>
                          <li>Rates</li>
                          <li>Expertise/General Fields</li>
                          <li>Country</li>
                          <li>Credentials Verified</li>
                          <li>Style/Service of job</li>
                        </ul>
                      </li>
                      <li>
                        If you have verified your settings and still believe there’s an issue, submit a support request with the specific job URL(s): <a href="https://proz.com/help" target="_blank" class="text-primary underline">Support Request</a>.
                      </li>
                    </ul>
                  `,
        },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="Email and Notifications" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection
          breadcrumbs={["Help Center", "Email and Notifications", "General Information"]}
        />

        {/* Content */}
        <div className="p-6" id="email-general">
          <h2 className="text-2xl font-bold mb-6">Email and Notifications</h2>
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border rounded-md ${
                  activeAccordion === section.id
                    ? "border-primary bg-primary text-white"
                    : "border-primary bg-white text-gray-800"
                }`}
              >
                {/* Main Accordion */}
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full text-left p-4 rounded-md font-bold"
                >
                  {section.title}
                </button>
                {activeAccordion === section.id && (
                  <div className="p-4">
                    {section.content && (
                      <div dangerouslySetInnerHTML={{ __html: section.content }} className="p-6" />
                    )}
                    {section.children?.map((child) => (
                      <div
                        key={child.id}
                        className={`border rounded-md mb-2 ${
                          activeSubAccordion === child.id
                            ? "border-primary bg-primary text-white"
                            : "border-primary bg-white text-gray-800"
                        }`}
                      >
                        {/* Sub Accordion */}
                        <button
                          onClick={() => toggleSubAccordion(child.id)}
                          className="w-full text-left p-3 rounded-md font-medium"
                        >
                          {child.title}
                        </button>
                        {activeSubAccordion === child.id && (
                          <div
                            dangerouslySetInnerHTML={{ __html: child.content }}
                            className="p-3 bg-gray-50 text-gray-800"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
