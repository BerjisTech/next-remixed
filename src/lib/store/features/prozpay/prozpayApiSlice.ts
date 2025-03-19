import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/utils/helpers";

export const prozpayApiSlice = createApi({
  reducerPath: "prozpayApi", // Unique key to identify this API
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
    getPending: builder.query<any, number | undefined>({
      query: (entityId) => ({
        url: getApiBaseUrl("prozpay/pending", false, { entityId }),
        method: "GET",
      }),
    }),
    getProzPayUser: builder.query<any, string | undefined>({
      query: (searchQuery) => ({
        url: getApiBaseUrl("prozpay/get-user", false, { searchQuery }),
        method: "GET",
      }),
    }),
    getServiceFees: builder.query<any, { payerEid?: number; payeeEid?: number }>({
      query: ({ payerEid, payeeEid }) => ({
        url: getApiBaseUrl("prozpay/service-fees", false, { payerEid, payeeEid }),
        method: "GET",
      }),
    }),
    getPaymentMethodFees: builder.query<any, void>({
      query: () => ({
        url: getApiBaseUrl("prozpay/payment-method-fees", false),
        method: "GET",
      }),
    }),
    getPaymentsReceived: builder.query<any, string>({
      query: (payeeEid: string) => ({
        url: getApiBaseUrl("prozpay/payments-received", false, { payeeEid }),
        method: "GET",
      }),
    }),
    getPaymentsWithdrawn: builder.query<any, string>({
      query: (payeeEid: string) => ({
        url: getApiBaseUrl("prozpay/payments-withdrawn", false, { payeeEid }),
        method: "GET",
      }),
    }),
    getCustomerDebits: builder.query<any, string>({
      query: (payeeEid: string) => ({
        url: getApiBaseUrl("prozpay/customer-debits", false, { payeeEid }),
        method: "GET",
      }),
    }),
    getProzPayOverview: builder.query<any, string>({
      query: (payeeEid: string) => ({
        url: getApiBaseUrl("prozpay/overview", false, { payeeEid }),
        method: "GET",
      }),
    }),
    getProzPaySettings: builder.query<any, string>({
      query: (payeeEid: string) => ({
        url: getApiBaseUrl("prozpay/settings", false, { payeeEid }),
        method: "GET",
      }),
    }),
    getEntityBusinesses: builder.query<any, string>({
      query: (entityId: string) => ({
        url: getApiBaseUrl("prozpay/businesses", false, { entityId }),
        method: "GET",
      }),
    }),
    getPaymentFeedData: builder.query<any, void>({
      query: () => ({
        url: getApiBaseUrl("prozpay/payment-feed", false),
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPendingQuery,
  useGetProzPayUserQuery,
  useGetServiceFeesQuery,
  useGetPaymentMethodFeesQuery,
  useGetPaymentsReceivedQuery,
  useGetPaymentsWithdrawnQuery,
  useGetCustomerDebitsQuery,
  useGetProzPayOverviewQuery,
  useGetProzPaySettingsQuery,
  useGetEntityBusinessesQuery,
  useGetPaymentFeedDataQuery,
} = prozpayApiSlice;
