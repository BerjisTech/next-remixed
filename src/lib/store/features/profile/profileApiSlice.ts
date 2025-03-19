import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/utils/helpers";
import { LanguageKnown, StarRating } from "@/interfaces/content";
import { Service } from "@/interfaces/general";
import {
  Article,
  DiscSpec,
  Glossary,
  PortfolioEntry,
  ProjectHistoryData,
  ProjectSummary,
} from "@/interfaces/account";
import { KudozActivity } from "@/interfaces/kudoz";
import { Wiwo } from "@/interfaces/wiwo";
import { AgencyRating } from "@/interfaces/blueboard";
import { WixWebsites } from "@/interfaces/websites";

export const profileApiSlice = createApi({
  reducerPath: "profileApi", // Unique key to identify this API
  baseQuery: fetchBaseQuery({
    baseUrl: "", // Base URL is dynamically created using getApiBaseUrl
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("credentials", "include"); // Add more headers if needed
      // Add Basic Authorization header
      // const encodedCredentials = btoa(`${process.env.NEXT_API_USER}:${process.env.NEXT_API_PASSWORD}`);
      // headers.set('Authorization', `Basic ${encodedCredentials}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProzProfile: builder.query<any, { isPseudo: boolean; pseudoId?: number }>({
      query: ({ isPseudo = true, pseudoId }) => {
        const reqObj = isPseudo && pseudoId ? { pseudo_id: pseudoId, pseudo_action: "start" } : {};
        return {
          url: getApiBaseUrl(
            isPseudo && pseudoId ? "fetch_pseudo_user" : "fetch_user",
            true,
            reqObj
          ),
          method: "GET",
        };
      },
    }),
    logoutUser: builder.query<any, void>({
      query: () => ({
        url: getApiBaseUrl("/", true, { logout: 1 }),
        method: "GET",
      }),
    }),
    getUserKnownLanguages: builder.query<Record<string, LanguageKnown>, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/known-languages", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserCalendarEvents: builder.query<any, { entityId?: number; currentMonth?: number }>({
      query: ({ entityId, currentMonth }) => ({
        url: getApiBaseUrl("user/calendar-events", false, { entityId, currentMonth }),
        method: "GET",
      }),
    }),

    getUserServices: builder.query<Service, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/services", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserFeedback: builder.query<any, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/feedback", false, { entityId }),
        method: "GET",
      }),
    }),
    updateGenderPronouns: builder.mutation<any, any>({
      query: (params) => ({
        url: getApiBaseUrl("user/gender-pronouns", false),
        method: "POST",
        body: params,
      }),
    }),
    fetchUserGenderPronouns: builder.query<string[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/gender-pronouns", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserStarRating: builder.query<StarRating[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/star-rating", false, { entityId }),
        method: "GET",
      }),
    }),
    fetchUserFieldOfExpertise: builder.query<DiscSpec[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("user/field-of-expertise", false, { entityId }),
        method: "GET",
      }),
    }),
    fetchUserWixWebsites: builder.query<WixWebsites[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/websites", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserPairs: builder.query<Record<string, string>, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/pairs", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserProjectSummary: builder.query<ProjectSummary, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/project-summary", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserProjectHistory: builder.query<ProjectHistoryData, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/project-history", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserKudozActivity: builder.query<KudozActivity, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/kudoz-activity", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserWiwos: builder.query<Wiwo[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/wiwo", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserBbEntries: builder.query<AgencyRating[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/bb-entries", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserEvents: builder.query<Record<string, any>, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/events", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserCommunityParticipation: builder.query<Record<string, any>, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/community-participation", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserGlossaries: builder.query<Glossary[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/glossaries", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserArticles: builder.query<Article[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/articles", false, { entityId }),
        method: "GET",
      }),
    }),
    getUserPortfolio: builder.query<PortfolioEntry[], number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("/user/portfolio", false, { entityId }),
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProzProfileQuery,
  useLogoutUserQuery,
  useGetUserKnownLanguagesQuery,
  useGetUserServicesQuery,
  useGetUserFeedbackQuery,
  useGetUserCalendarEventsQuery,
  useUpdateGenderPronounsMutation,
  useFetchUserGenderPronounsQuery,
  useFetchUserFieldOfExpertiseQuery,
  useFetchUserWixWebsitesQuery,
  useGetUserPairsQuery,
  useGetUserStarRatingQuery,
  useGetUserProjectSummaryQuery,
  useGetUserProjectHistoryQuery,
  useGetUserKudozActivityQuery,
  useGetUserWiwosQuery,
  useGetUserBbEntriesQuery,
  useGetUserEventsQuery,
  useGetUserCommunityParticipationQuery,
  useGetUserGlossariesQuery,
  useGetUserArticlesQuery,
  useGetUserPortfolioQuery,
} = profileApiSlice;
