import { NextRequest, NextResponse } from "next/server";
import { getAllJobs, newJob, getJobRequirements } from "@/server/data/careers";

export async function GET(request: NextRequest) {
  let jobs = await getAllJobs();

  jobs = await Promise.all(
    jobs.map(async (job: any) => {
      job.requirements = await getJobRequirements(job.career_job_id);
      return job;
    })
  );

  let response = jobs;
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const params = await request.json();
  let response = await newJob(params);
  return NextResponse.json({ Response: response }, { status: 200 });
}
