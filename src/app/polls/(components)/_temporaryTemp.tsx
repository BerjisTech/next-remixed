// src/app/(polls)/_currentPoll.tsx
"use client";

import React, { useEffect, useState } from "react";

interface Poll {
  poll_id: number;
  question: string;
  timestamp: number;
  status: number;
  // ... add additional fields as needed
}

const PollsPageTemp: React.FC = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const limit = 10;

  const fetchPolls = async (limit: number, offset: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/next/api/polls?limit=${limit}&offset=${offset}`);
      const data = await res.json();
      if (data.success) {
        setPolls(data.data);
      }
    } catch (error) {
      console.error("Error fetching polls:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolls(limit, offset);
  }, [offset]);

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  if (loading) return <div>Loading polls...</div>;

  return (
    <div>
      <h1>Polls</h1>
      <ul>
        {polls.map((poll) => (
          <li key={poll.poll_id}>{poll.question}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>Showing page {offset / limit + 1}</p>
    </div>
  );
};

export default PollsPageTemp;
