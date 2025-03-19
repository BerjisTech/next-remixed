import { Jobs } from "@/interfaces/jobs";
import Image from "next/image";
import React from "react";

interface WorkHiringProps {
  jobsData?: Jobs;
}

const WorkHiring: React.FC<WorkHiringProps> = ({ jobsData }) => {
  const getJobQuotesText = () => {
    /**
     * "No quotes yet" if none have been submitted
     * "No open quotes"
     * "1 open quote"
     * "XX open quotes"
     */
    if (!jobsData) {
      return "No quotes yet";
    }

    const open_quotes = jobsData.open_quote_count;
    if (open_quotes === 0) {
      return "No open quotes";
    } else if (open_quotes === 1) {
      return "1 open quote";
    } else {
      return `${open_quotes} open quotes`;
    }
  };
  const getOpenJobsText = () => {
    /**
     * "No jobs yet" if none have been posted
     * "No open jobs"
     * "1 open job"
     * "XX open jobs"
     * */
    if (!jobsData) {
      return "No jobs yet";
    }

    const open_jobs = jobsData.open_job_count;
    if (open_jobs === 0) {
      return "No open jobs";
    } else if (open_jobs === 1) {
      return "1 open job";
    } else {
      return `${open_jobs} open jobs`;
    }
  };
  const getTeamsText = () => {
    /**
     * "No teams yet"
     * "Part of XX teams"
     * */

    if (!jobsData) {
      return "No teams yet";
    }

    const team_count = jobsData.translator_teams_count;
    if (team_count === 0) {
      return "No teams yet";
    } else {
      if (team_count === 1) {
        return "Part of 1 team";
      }
      return `Part of ${team_count} teams`;
    }
  };
  const getProjectHistoriesText = () => {
    /**
     * "No projects reported"
     * "1 project reported"
     * "XX projects reported"
     */

    if (!jobsData) {
      return "No projects reported";
    }

    const project_count = jobsData.reported_projects_count;
    if (project_count === 0) {
      return "No projects reported";
    } else if (project_count === 1) {
      return "1 project reported";
    } else {
      return `${project_count} projects reported`;
    }
  };

  return (
    <div className="sm:w-full md:w-[48%] mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/hugeicons_work-history.svg"
          alt="Work & hiring"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />

        <h3 className="text-primary text-[20px] dark:text-primary">Work & hiring</h3>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Job quotes
        </a>
        <span className="dark:text-primary">{getJobQuotesText()}</span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Posted jobs
        </a>
        <span className="dark:text-primary">{getOpenJobsText()}</span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Translator teams
        </a>
        <span className="dark:text-primary">{getTeamsText()}</span>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg"
          role="button"
        >
          Project history
        </a>
        <span className="dark:text-primary">{getProjectHistoriesText()}</span>
      </div>
    </div>
  );
};

export default WorkHiring;
