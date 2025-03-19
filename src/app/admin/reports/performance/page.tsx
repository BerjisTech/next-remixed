"use client";

import React, { useEffect, useState } from "react";
import { client, v1 } from "@datadog/datadog-api-client";

const Page = () => {
  const [dashboards, setDashboards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const configuration = client.createConfiguration({
      authMethods: {
        apiKeyAuth: process.env.NEXT_PUBLIC_DATADOG_API_KEY!,
        appKeyAuth: process.env.NEXT_PUBLIC_DATADOG_APP_KEY!,
      },
    });
    const apiInstance = new v1.DashboardListsApi(configuration);

    apiInstance
      .listDashboardLists()
      .then((data: any) => {
        console.log("API called successfully. Returned data: ", data);
        setDashboards(data.dashboardLists || []);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to fetch dashboard lists");
      });
  }, []);

  console.log(dashboards);

  return (
    <div>
      <h1>Datadog Dashboards: bring</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {dashboards.map((dashboard: any) => (
            <li key={dashboard.id}>{dashboard.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
