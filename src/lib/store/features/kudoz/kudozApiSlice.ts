import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/utils/helpers";

export const kudozApiSlice = createApi({
  reducerPath: "kudozApi", // Unique key to identify this API
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
    getKudozPreferences: builder.query<any, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("kudoz/notification-preferences", false, { entityId }),
        method: "GET",
      }),
    }),
  }),
});

export const { useGetKudozPreferencesQuery } = kudozApiSlice;
