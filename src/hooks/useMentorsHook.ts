import { useGetMentorsQuery } from "@/lib/store/features/mentors/mentorsApiSlice";

/**
 * Hook to fetch and manage mentors data using RTK Query.
 *
 * @returns {Object} Object containing mentors data, loading state, and error if any
 * @property {Mentor[]} mentors - Array of mentor objects
 * @property {boolean} loading - Loading state indicator
 * @property {string|null} error - Error message if any
 */
export const useMentors = () => {
  const { data, isLoading, error } = useGetMentorsQuery();

  return {
    mentors: data ?? [],
    loading: isLoading,
    error: error ? ("error" in error ? error.error : "Unknown error") : null,
  };
};
