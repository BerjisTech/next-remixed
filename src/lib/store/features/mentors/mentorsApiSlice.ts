import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mentor } from "@/interfaces/pool";
import { getApiBaseUrl } from "@/utils/helpers";

/**
 * Redux API slice for managing mentor-related API requests.
 * Uses RTK Query to handle fetching mentors data from the backend.
 *
 * @remarks
 * - Configures headers for JSON communication with credentials
 * - Provides a getMentors endpoint to fetch all mentors
 */
export const mentorsApiSlice = createApi({
  reducerPath: "mentorsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("credentials", "include");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMentors: builder.query<Mentor[], void>({
      query: () => ({
        url: getApiBaseUrl("mentors", false),
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMentorsQuery } = mentorsApiSlice;
