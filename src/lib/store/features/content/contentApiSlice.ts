import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/utils/helpers";

export const contentApiSlice = createApi({
  reducerPath: "contentApi", // Unique key to identify this API
  baseQuery: fetchBaseQuery({
    baseUrl: "", // Base URL is dynamically created using getApiBaseUrl
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("credentials", "include"); // Add more headers if needed
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSpecificDisciplines: builder.query<Record<string, string>, "general" | "specific">({
      query: (category) => ({
        url: getApiBaseUrl("/disciplines", false, { category }),
        method: "GET",
      }),
    }),
    getSoftwares: builder.query<Record<string, string>, void>({
      query: () => ({
        url: getApiBaseUrl("/softwares", false),
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSpecificDisciplinesQuery, useGetSoftwaresQuery } = contentApiSlice;
