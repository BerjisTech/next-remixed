import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import OpenAI from "openai";

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Scrape LinkedIn Jobs
async function scrapeLinkedInJobs() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.linkedin.com/jobs/search/?keywords=language%20industry");

  // Wait for the job listings to load
  await page.waitForSelector(".jobs-search__results-list");

  // Extract job data
  const jobs = await page.evaluate(() => {
    const jobElements = document.querySelectorAll(".jobs-search__results-list li");
    const jobData: { title: string; company: string; location: string; link: string }[] = [];
    jobElements.forEach((job) => {
      const title = job.querySelector(".job-result-card__title")?.textContent?.trim();
      const company = job.querySelector(".job-result-card__company")?.textContent?.trim();
      const location = job.querySelector(".job-result-card__location")?.textContent?.trim();
      const link = (job.querySelector(".job-result-card__link") as HTMLAnchorElement)?.href;
      if (title && company && location && link) {
        jobData.push({ title, company, location, link });
      }
    });
    return jobData;
  });

  await browser.close();
  return jobs;
}

// Filter Jobs Using AI
async function filterJobs(
  jobs: { title: string; company: string; location: string; link: string }[]
) {
  const validJobs = [];

  for (const job of jobs) {
    const prompt = `Is this job from a valid employer? Job Title: ${job.title}, Company: ${job.company}, Location: ${job.location}. Respond with "yes" or "no".`;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 5,
    });

    if (response.choices[0].message.content?.trim().toLowerCase() === "yes") {
      validJobs.push(job);
    }
  }

  return validJobs;
}

// API Route Handler
export async function GET() {
  try {
    // Scrape jobs from LinkedIn
    const scrapedJobs = await scrapeLinkedInJobs();

    // Filter jobs using AI
    const validJobs = await filterJobs(scrapedJobs);

    // Return JSON response
    return NextResponse.json({ jobs: validJobs }, { status: 200 });
  } catch (error) {
    console.error("Error scraping or filtering jobs:", error);
    return NextResponse.json({ error: `Failed to fetch jobs\n ${error}` }, { status: 500 });
  }
}
