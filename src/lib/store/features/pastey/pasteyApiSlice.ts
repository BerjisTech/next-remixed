import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/utils/helpers";

export const pasteyApiSlice = createApi({
  reducerPath: "pasteyApi", // Unique key to identify this API
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
    getPasteyReviews: builder.query<any, number>({
      query: (softwareId: number) => ({
        url: getApiBaseUrl("pastey/reviews", false, { softwareId }),
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPasteyReviewsQuery } = pasteyApiSlice;
