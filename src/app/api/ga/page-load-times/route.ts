import { BetaAnalyticsDataClient } from "@google-analytics/data";

const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const analyticsDataClient = credentials
  ? new BetaAnalyticsDataClient({
      credentials: JSON.parse(credentials),
    })
  : null;

export async function GET() {
  if (process.env.NEXT_NODE_ENV === "development" || !analyticsDataClient) {
    return new Response("Not available in development", {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA4_PROPERTY_ID}`,
    dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
    metrics: [{ name: "customEvent:page_load_time" }], // Replace with your custom metric name
    dimensions: [{ name: "date" }],
  });

  return new Response(JSON.stringify(response.rows), {
    headers: { "Content-Type": "application/json" },
  });
}
