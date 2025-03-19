import ProzCheckbox from "@/components/general/prozCheckbox";
import ProzRadioButton from "@/components/general/prozRadio";
import ProzSwitch from "@/components/general/prozSwitch";
import ProzNotification from "@/components/shared/prozNotification";
import Image from "next/image";
import React from "react";

const JobsNotifications = () => {
  return (
    <React.Fragment>
      <ProzNotification
        className="my-5"
        type="error"
        title="You have not specified any language pairs."
        message="Without reported language pairs, you will not be able to receive targeted notifications."
        link_text="Edit your languages"
        link_url="/next/profile/overview"
      ></ProzNotification>

      <ProzNotification
        className="my-5"
        type="warning"
        title="You have not specified any fields of expertise."
        message="Without reported specialty fields, you will not be able to receive targeted notifications."
        link_text="Edit your specialties"
        link_url="/next/profile/overview"
      ></ProzNotification>

      <p className="text-md md:text-2xl text-primary mt-5">Job email notifications</p>
      <p className="text-md md:text-lg text-primary mt-5">
        General preferences for all language pairs
      </p>
      <p className="dark:text-primary mt-5">Jobs email notifications</p>
      <p className="dark:text-primary mt-5">Jobs notifications for employees</p>
      <p className="rounded-lg bg-purple-950 text-accent-foreground flex items-center justify-center p-3 gap-3 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <g clipPath="url(#clip0_4250_13739)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.18134 0.14615C4.71857 0.124571 4.25482 0.138211 3.79411 0.186951C3.6761 0.271081 3.56676 0.366755 3.46771 0.472557C3.36332 0.587535 3.26785 0.710293 3.1821 0.839765L3.0393 1.16617C3.01163 1.2657 3.00468 1.36985 3.0189 1.47218C3.02786 1.61638 3.04832 1.75964 3.0801 1.90059C3.0952 1.97673 3.11565 2.05172 3.1413 2.12499C4.50813 1.96179 5.69135 1.90059 7.03778 2.12499C7.06343 2.05172 7.08388 1.97673 7.09898 1.90059C7.13931 1.76833 7.15993 1.63085 7.16018 1.49258C7.16491 1.38336 7.15807 1.27395 7.13978 1.16617L6.99698 0.839765C6.91123 0.710293 6.81576 0.587535 6.71137 0.472557L6.36457 0.166551L5.18134 0.14615Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.87608 7.75537L0 13.1207L1.24443 15.8543L4.7125 11.0194C4.15919 10.1767 3.86161 9.19189 3.85568 8.18378C3.85568 8.04098 3.87608 7.89817 3.87608 7.75537Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.7546 0.798828C2.69574 0.858205 2.64744 0.927198 2.6118 1.00283C0.755362 3.67529 1.02057 4.81771 1.89779 6.10294L3.06061 7.69417L4.46824 5.75613L4.65184 5.45013C4.03983 4.61371 2.3058 2.10446 2.571 1.18644C2.60718 1.0468 2.66948 0.915281 2.7546 0.798828Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.71169 3.0429C8.42687 2.40576 8.09264 1.79187 7.71207 1.20686C7.63047 1.06406 7.52847 0.962056 7.38567 0.737652C7.24286 0.513247 7.56927 1.02326 7.61007 1.18646C7.67963 1.52842 7.62158 1.88401 7.44687 2.18608C7.24286 2.63489 7.05926 3.1041 6.81445 3.53251C7.41113 3.25335 8.05444 3.08733 8.71169 3.0429Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.73242 12.7944L8.93567 15.8545L10.1393 13.2024C9.77094 13.2845 9.39465 13.3255 9.01727 13.3248C8.22445 13.331 7.44145 13.1492 6.73242 12.7944Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.01719 12.8964C9.94923 12.8964 10.8603 12.6201 11.6353 12.1022C12.4103 11.5844 13.0143 10.8484 13.371 9.98733C13.7276 9.12624 13.821 8.17871 13.6391 7.26457C13.4573 6.35044 13.0085 5.51075 12.3494 4.8517C11.6904 4.19264 10.8507 3.74382 9.93655 3.56199C9.02242 3.38015 8.07489 3.47348 7.21379 3.83016C6.35269 4.18683 5.6167 4.79085 5.09889 5.56581C4.58107 6.34078 4.30469 7.25189 4.30469 8.18394C4.30469 9.43377 4.80118 10.6324 5.68495 11.5162C6.56871 12.3999 7.76736 12.8964 9.01719 12.8964ZM10.8532 8.57155L12.2201 7.24552C12.2458 7.21606 12.2634 7.18039 12.2711 7.14204C12.2788 7.10368 12.2764 7.06398 12.264 7.02687C12.2516 6.98976 12.2298 6.95652 12.2006 6.93046C12.1714 6.9044 12.1359 6.88643 12.0977 6.87831L10.2208 6.6131C10.1533 6.58302 10.0964 6.53325 10.0576 6.4703L9.99641 6.3683L9.20079 4.75667C9.17131 4.71059 9.12602 4.67687 9.07342 4.66185C9.02083 4.64682 8.96456 4.65152 8.91519 4.67506C8.87316 4.69035 8.83732 4.71902 8.81318 4.75667L7.95637 6.4703C7.91758 6.53325 7.8607 6.58302 7.79316 6.6131L7.44635 6.65391H7.34435L7.05875 6.69471L6.14073 6.83751H5.93672C5.89973 6.84754 5.8656 6.86611 5.8371 6.89174C5.80859 6.91737 5.7865 6.94933 5.77261 6.98506C5.75872 7.02078 5.75341 7.05927 5.75711 7.09743C5.76081 7.13558 5.77342 7.17233 5.79392 7.20472L6.30393 7.69433L6.50793 7.89833L6.91594 8.30634L7.14035 8.51034H7.16075C7.18289 8.53518 7.19974 8.56427 7.21026 8.59584C7.22079 8.62741 7.22476 8.66079 7.22195 8.69395L7.09955 9.44876V9.59157L6.93634 10.5708V10.6728C6.94741 10.7017 6.96434 10.728 6.98606 10.7501C7.00778 10.7721 7.03384 10.7894 7.06258 10.8009C7.09132 10.8124 7.12212 10.8178 7.15306 10.8169C7.184 10.8159 7.2144 10.8085 7.24235 10.7952L7.75236 10.5912L8.52758 10.1832L8.91519 9.97918C8.94538 9.959 8.98088 9.94824 9.01719 9.94824C9.0535 9.94824 9.089 9.959 9.11919 9.97918L10.1188 10.5096L10.792 10.8564C10.8269 10.869 10.8642 10.8735 10.901 10.8695C10.9379 10.8656 10.9734 10.8533 11.0048 10.8337C11.0362 10.814 11.0628 10.7875 11.0825 10.7561C11.1022 10.7247 11.1145 10.6892 11.1184 10.6524L10.792 8.77555C10.7905 8.70281 10.8119 8.63144 10.8532 8.57155Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_4250_13739">
              <rect
                width="13.7091"
                height="15.7083"
                fill="white"
                transform="translate(0 0.145996)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>
          This feature is available only to employees of <strong>Business members.</strong>
        </span>
        <a href="#" className="flex items-center justify-center">
          Learn more <span className="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </p>
      <p className="text-md md:text-2xl text-primary mt-5">Job email notifications</p>
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2 mt-5">
        <span>Edit settings</span>
        <select className="flex-grow outline-none focus:outline-none border-[1px] border-solid border-accent dark:border-primary rounded-xl p-3">
          <option>By language pair</option>
        </select>
      </div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        {/* <p className="text-primary text-md md:text-2xl">{languagePairMap[pair.key]}</p> */}
        <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold">Notifications</p>
          </div>

          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_jobs"
              value="none"
              label="None"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_jobs"
              value="immediate_alerts"
              label="Immediate alerts"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_members_only"
              value="members_only"
              label="For members only"
            ></ProzRadioButton>
          </div>
        </div>
        <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold">Job types</p>
          </div>
          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            <ProzCheckbox
              name="job_email_notification_{{ pair.key }}_translation_jobs"
              label="Translation jobs"
            ></ProzCheckbox>
            <ProzCheckbox
              name="job_email_notification_{{ pair.key }}_intepreting_jobs"
              label="Interpreting jobs"
            ></ProzCheckbox>
            <ProzCheckbox
              name="job_email_notification_{{ pair.key }}_potential_jobs"
              label="Potential jobs"
            ></ProzCheckbox>
          </div>
        </div>
        <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold flex items-center justify-start gap-2">
              <span>Services</span>
              <Image
                src="/next/next_assets/images/edit.svg"
                alt="Edit icon"
                width={15}
                height={15}
              />
            </p>
          </div>
          <div className="flex items-start justify-start gap-3 flex-col text-primary dark:text-primary w-full md:w-[calc(100%-250px)]">
            <p>
              Checking/editing Copywriting Interpreting, Chuchotage/Whispering Interpreting,
              Consecutive Interpreting, Liaison Interpreting, Phone Interpreting, Simultaneous MT
              post-editing Subtitling, Captioning Subtitling, Checking/Editing/QC Subtitling,
              SDH/HOH Subtitling, Time Coding Subtitling,
            </p>
          </div>
        </div>
        <div className="border-b pb-3 flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold flex items-center justify-start gap-2">
              <span>Fields</span>
              <Image
                src="/next/next_assets/images/edit.svg"
                alt="Edit icon"
                width={15}
                height={15}
              />
            </p>
          </div>
          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_fields"
              value="my_specialties"
              label="My specialties"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_fields"
              value="my_working_fields"
              label="My working fields"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_fields"
              value="my_interest_fields"
              label="My interest fields"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_{{ pair.key }}_fields"
              value="all_fields"
              label="All fields"
            ></ProzRadioButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold flex items-center justify-start gap-2">
              <span>Minimum rates</span>
              <Image
                src="/next/next_assets/images/edit.svg"
                alt="Edit icon"
                width={15}
                height={15}
              />
            </p>
          </div>
          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            Unspecified
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl p-3 border-[1px] border-solid border-accent dark:border-primary bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold flex items-center justify-start gap-2">
              <span>Client type</span>
            </p>
          </div>
          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            <ProzRadioButton
              name="job_email_notification_client_type"
              value="from_all_clients"
              label="Send notifications from all clients"
            ></ProzRadioButton>
            <ProzRadioButton
              name="job_email_notification_client_type"
              value="only_my_clients"
              label="Send only notifications from end customers"
            ></ProzRadioButton>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start mt-4">
          <div className="w-[250px] flex items-start justify-start gap-3 flex-col dark:text-accent-foreground">
            <p className="font-semibold flex items-center justify-start gap-2">
              <span>Rates</span>
            </p>
          </div>
          <div className="flex w-full md:w-[calc(100%-250px)] items-start justify-start gap-3 flex-col">
            <ProzSwitch
              name="job_email_notification_rates"
              value="only_jobs_with_budgets"
              label="Only send notifications for jobs that have a budget"
            ></ProzSwitch>
            <ProzSwitch
              name="job_email_notification_rates"
              value="jobs_below_my_minimum_rates"
              label="Send me notifications of jobs that are below my minimum rates"
            ></ProzSwitch>
            <a href="#" className="text-primary font-semibold ms-2" target="_blank">
              Edit rates
            </a>
          </div>
        </div>
      </div>

      <button className="h-[40px] px-5 flex items-center justify-center text-accent-foreground bg-green-gradient dark:bg-green-gradient-dark rounded-xl mt-5">
        Save setiings
      </button>
    </React.Fragment>
  );
};

export default JobsNotifications;
