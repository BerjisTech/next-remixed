import { useState } from "react";
import { getApiBaseUrl } from "@/utils/helpers";
import { useSession } from "next-auth/react";

interface VoteResponse {
  success: boolean;
  error?: string;
}

export const useVote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  const vote = async (pollId: number, optionId: number): Promise<VoteResponse> => {
    setLoading(true);
    setError(null);

    try {
      const url = getApiBaseUrl("polls/vote", false);
      const requestBody = {
        pollId,
        optionId,
        ipAddr: window.location.hostname,
        host: window.location.host,
        agent: navigator.userAgent,
        entityId: session?.user?.entity_id ?? 0,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to vote");
      }

      return data;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to vote";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { vote, loading, error };
};
