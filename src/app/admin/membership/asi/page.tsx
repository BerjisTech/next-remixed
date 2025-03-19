"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";

// Currency formatter for USD
const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Currency formatter for EUR
const eurFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

// Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

interface AccruedDataRow {
  accrued_paid_usd?: number;
  accrued_paid_euro?: number;
  accrued_usd_cash_to_proz?: number;
  accrued_euro_cash_to_proz?: number;
  usd_refunded?: number;
  euro_refunded?: number;
}

interface MonthlyBreakdown {
  [month: string]: Partial<AccruedDataRow>;
}

interface TotalPaidYear {
  paid_usd?: number;
  paid_euro?: number;
  usd_to_proz?: number;
  usd_refunded?: number;
  euro_to_proz?: number;
  euro_refunded?: number;
}

interface AsiAccrualResult {
  data: MonthlyBreakdown;
  total_accrued: AccruedDataRow;
  bus_data: MonthlyBreakdown;
  bus_total_accrued: AccruedDataRow;
  total_paid_this_year: TotalPaidYear;
  bus_total_paid_this_year: TotalPaidYear;
}

interface PageVisitsData {
  date: string;
  totalUsers: number;
}

export default function AsiPage() {
  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: currentYear - 2003 + 11 }, (_, i) => 2004 + i);

  const [showYear, setShowYear] = useState<number>(currentYear);
  const [maxPaymentYear, setMaxPaymentYear] = useState<number>(0);
  const [onlyIncludePaymentsThisYear, setOnlyIncludePaymentsThisYear] = useState<boolean>(false);
  const [excludePaymentsInCurrentYear, setExcludePaymentsInCurrentYear] = useState<boolean>(false);
  const [includePre2004, setIncludePre2004] = useState<boolean>(false);
  const [apiData, setApiData] = useState<AsiAccrualResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [pageVisitsData, setPageVisitsData] = useState<PageVisitsData[]>([]);
  const [chartMode, setChartMode] = useState<"bar" | "line">("line");

  const membershipLoadData = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const params = new URLSearchParams({ show_year: showYear.toString() });
      if (maxPaymentYear) params.set("max_payment_year", maxPaymentYear.toString());
      if (onlyIncludePaymentsThisYear) params.set("only_include_payments_this_year", "1");
      if (excludePaymentsInCurrentYear) params.set("exclude_payments_in_current_year", "1");
      if (includePre2004) params.set("include_pre_2004", "1");

      const res = await fetch(`/next/api/asi?${params.toString()}`);
      const json = await res.json();

      if (json.success) {
        setApiData(json.data);
      } else {
        setErrorMsg(json.error || "Unknown error");
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadPageVisitsData = async () => {
    try {
      const res = await fetch(`/next/api/page-visits`);
      const json = await res.json();
      if (json.usersByDays) {
        setPageVisitsData(json.usersByDays);
      }
    } catch (err) {
      console.error("Failed to load page visits data", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    membershipLoadData();
  };

  useEffect(() => {
    membershipLoadData();
    loadPageVisitsData();
  }, []);

  const barChartData = apiData
    ? Object.keys(apiData.data)
        .sort()
        .map((month) => ({
          month,
          proUsd: apiData.data[month].accrued_paid_usd ?? 0,
          busUsd: apiData.bus_data[month].accrued_paid_usd ?? 0,
        }))
    : [];

  const visitsChartData = [...pageVisitsData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Deferred / Accrued Subscription Income Calculator</h1>

      <div style={{ margin: "10px 0" }}>
        <button
          onClick={() => setChartMode(chartMode === "bar" ? "line" : "bar")}
          style={{ padding: "6px 12px", cursor: "pointer" }}
        >
          Switch to {chartMode === "bar" ? "Line" : "Bar"} Charts
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="overflow-hidden flex items-center justify-center rounded-lg bg-slate-300 dark:bg-slate-700 h-[50px]"
      >
        <label className="h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center">
          <span>Show year: </span>
          <select value={showYear} onChange={(e) => setShowYear(Number(e.target.value))}>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label className="h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center">
          <span>Max year: </span>
          <select
            value={maxPaymentYear}
            onChange={(e) => setMaxPaymentYear(Number(e.target.value))}
          >
            <option value={0}>Any year</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label
          className={`h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center ${
            onlyIncludePaymentsThisYear ? "bg-red-500" : ""
          }`}
        >
          <input
            type="checkbox"
            className="peer hidden text-wrap"
            checked={onlyIncludePaymentsThisYear}
            onChange={(e) => setOnlyIncludePaymentsThisYear(e.target.checked)}
          />
          Selected year only
        </label>

        <label
          className={`h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center ${
            excludePaymentsInCurrentYear ? "bg-red-500" : ""
          }`}
        >
          <input
            type="checkbox"
            className="hidden text-wrap peer"
            checked={excludePaymentsInCurrentYear}
            onChange={(e) => setExcludePaymentsInCurrentYear(e.target.checked)}
          />
          Exclude current year
        </label>

        <label
          className={`h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center ${
            includePre2004 ? "bg-red-500" : ""
          }`}
        >
          <input
            type="checkbox"
            className="peer hidden text-wrap"
            checked={includePre2004}
            onChange={(e) => setIncludePre2004(e.target.checked)}
          />
          Include pre-2004
        </label>

        <button
          type="submit"
          className={`h-full min-w-[16.6667%] cursor-pointer flex-grow flex items-center justify-center ${
            loading ? "bg-red-400" : "bg-green-400"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}

      {loading && (
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
      )}

      {apiData && !loading && (
        <>
          <h2>Total Accrued in {showYear}</h2>
          <div className="w-full h-[500px]">
            <ResponsiveContainer>
              {chartMode === "bar" ? (
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => usdFormatter.format(value)} />
                  <Tooltip formatter={(value) => usdFormatter.format(Number(value))} />
                  <Legend />
                  <Bar dataKey="proUsd" name="Professional (USD)" fill="#8884d8" />
                  <Bar dataKey="busUsd" name="Business (USD)" fill="#82ca9d" />
                </BarChart>
              ) : (
                <LineChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => usdFormatter.format(value)} />
                  <Tooltip formatter={(value) => usdFormatter.format(Number(value))} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="proUsd"
                    name="Professional (USD)"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="busUsd"
                    name="Business (USD)"
                    stroke="#82ca9d"
                    strokeWidth={2}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </>
      )}

      <div className="flex flex-wrap gap-3 mt-[40px]">
        <div className="w-half min-w-[500px]">
          <h2>Google Analytics: Page Load Times (Last 28 Days)</h2>
          <div style={{ width: "500px", height: "500px" }}>
            <iframe
              width="500"
              height="450"
              src="https://lookerstudio.google.com/embed/reporting/22a61ce2-d98b-45f7-98f8-46f4e1d0b527/page/MxNwE"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        </div>

        <div className="w-half min-w-[500px]">
          {visitsChartData.length > 0 && (
            <div className="w-full">
              <h2>Page Visits (Last 7 Days)</h2>
              <div className="w-full min-w-[500px] h-[500px]">
                <ResponsiveContainer>
                  {chartMode === "bar" ? (
                    <BarChart data={visitsChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => dateFormatter.format(new Date(value))}
                      />
                      <YAxis />
                      <Tooltip labelFormatter={(value) => dateFormatter.format(new Date(value))} />
                      <Legend />
                      <Bar dataKey="totalUsers" name="Visitors" fill="#82ca9d" />
                    </BarChart>
                  ) : (
                    <LineChart data={visitsChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => dateFormatter.format(new Date(value))}
                      />
                      <YAxis />
                      <Tooltip labelFormatter={(value) => dateFormatter.format(new Date(value))} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="totalUsers"
                        name="Visitors"
                        stroke="#82ca9d"
                        strokeWidth={2}
                      />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
