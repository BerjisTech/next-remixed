// File: src/app/api/datadog/rum/route.ts

import { NextResponse } from "next/server";
import { client, v2 } from "@datadog/datadog-api-client";

/**
 * Helper function that searches RUM events using the Datadog API client.
 * It uses default search parameters (last 15 minutes for env:production).
 */
async function searchRUMEvents() {
  // console.log("Starting request to search RUM events");

  // 1) Create configuration with your keys
  const configuration = client.createConfiguration({
    authMethods: {
      // You can rely on environment variables: DD_API_KEY and DD_APP_KEY.
      apiKeyAuth: process.env.DATADOG_API_KEY || "",
      appKeyAuth: process.env.DATADOG_APP_KEY || "",
    },
  });
  // console.log("Configuration created with keys", configuration.authMethods);

  // 2) Set the server variables (for US1, default is "datadoghq.com")
  configuration.setServerVariables({
    site: "datadoghq.com",
  });
  // Enable the unstable RUM endpoint
  configuration.unstableOperations["v2.searchRUMEvents"] = true;
  // console.log("Server variables set and unstable RUM API endpoint enabled");

  // 3) Instantiate the RUMApi
  const rumApi = new v2.RUMApi(configuration);
  // console.log("RUMApi instantiated");

  // 4) Define search parameters: last 15 minutes for env:production
  const now = new Date();
  const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60 * 1000);
  const params: v2.RUMApiSearchRUMEventsRequest = {
    body: {
      filter: {
        from: fifteenMinutesAgo.toISOString(),
        to: now.toISOString(),
        query: "env:production", // Adjust your filter as needed
      },
      options: {
        timezone: "UTC",
      },
      page: {
        limit: 5000,
      },
    },
  };
  // console.log("Search parameters defined:", params);

  // 5) Perform the request
  const response = await rumApi.searchRUMEvents(params);
  // console.log("RUM events data:", JSON.stringify(response, null, 2));

  return response;
}

/**
 * GET handler: allows you to visit /api/datadog/rum in the browser to see JSON.
 */
export async function GET() {
  try {
    const response = await searchRUMEvents();
    return NextResponse.json({
      success: true,
      totalReturned: response.data?.length || 0,
      raw: response,
    });
  } catch (err: any) {
    // console.error("Error searching RUM events (GET):", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}

/**
 * POST handler: for API clients that prefer sending a POST.
 */
export async function POST() {
  try {
    const response = await searchRUMEvents();
    return NextResponse.json({
      success: true,
      totalReturned: response.data?.length || 0,
      raw: response,
    });
  } catch (err: any) {
    // console.error("Error searching RUM events (POST):", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
