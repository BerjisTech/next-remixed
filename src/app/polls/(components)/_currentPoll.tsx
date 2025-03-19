// "use client";
//
// import React, { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/shadcn/button";
// import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
// import { Label } from "@/components/shadcn/label";
// import { Flame } from "lucide-react";
// import { getApiBaseUrl } from "@/utils/helpers";
// import { Skeleton } from "@/components/shadcn/skeleton";
// import ProzTooltip from "@/components/shared/prozTooltip";
// import { useVote } from "@/hooks/useVoteHook";
// import Image from "next/image";
//
// interface PollData {
//   id: number;
//   poll_id: number;
//   option_id: number;
//   option_text: string;
//   color: string;
//   votes: number;
// }
//
// interface Poll {
//   poll_id: number;
//   question: string;
//   pollData: PollData[];
//   totalVotes: number;
// }
//
// const CurrentPoll = () => {
//   const { data: session } = useSession();
//   const [poll, setPoll] = useState<Poll | null>(null);
//   const [selectedOption, setSelectedOption] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [hasVoted, setHasVoted] = useState<boolean>(false);
//   const { vote, loading: voting, error } = useVote();
//   const [voteError, setVoteError] = useState<string | null>(null);
//
//   const fetchPollData = async (pollId: number) => {
//     try {
//       const checkVoteUrl = getApiBaseUrl(`polls/${pollId}/check-vote`, false);
//       const voteCheckResponse = await fetch(checkVoteUrl, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//
//       if (voteCheckResponse.ok) {
//         const voteStatus = await voteCheckResponse.json();
//         setHasVoted(voteStatus.hasVoted);
//       }
//     } catch (error) {
//       console.error("Error checking vote status:", error);
//     }
//   };
//
//   const fetchPoll = async () => {
//     try {
//       setLoading(true);
//       const url = getApiBaseUrl("polls/current", false);
//       const response = await fetch(url, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//
//       const result = await response.json();
//       if (!result.data) {
//         throw new Error("No poll data available");
//       }
//
//       setPoll(result.data);
//
//       // Check vote status only if user is logged in
//       if (result.data?.poll_id && session?.user?.entity_id) {
//         await fetchPollData(result.data.poll_id);
//       }
//     } catch (error) {
//       console.error("Error in fetchPoll:", error);
//       setVoteError(error instanceof Error ? error.message : "Failed to fetch poll");
//       setPoll(null);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   useEffect(() => {
//     let mounted = true;
//
//     if (mounted) {
//       fetchPoll();
//     }
//
//     return () => {
//       mounted = false;
//       setPoll(null);
//       setVoteError(null);
//       setHasVoted(false);
//       setSelectedOption("");
//     };
//   }, [session?.user?.entity_id]);
//
//   const handleVote = async () => {
//     if (!poll || !selectedOption || !session?.user?.entity_id) return;
//
//     try {
//       setVoteError(null);
//       const checkVoteUrl = getApiBaseUrl(`polls/${poll.poll_id}/check-vote`, false);
//       const voteCheckResponse = await fetch(checkVoteUrl, {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//
//       if (!voteCheckResponse.ok) {
//         throw new Error("Failed to check vote status");
//       }
//
//       const voteStatus = await voteCheckResponse.json();
//       if (voteStatus.hasVoted) {
//         setHasVoted(true);
//         setVoteError("You have already voted in this poll");
//         return;
//       }
//
//       const result = await vote(poll.poll_id, parseInt(selectedOption));
//
//       if (result.success) {
//         setHasVoted(true);
//         setSelectedOption("");
//         await fetchPoll();
//       } else {
//         setVoteError(result.error || "Failed to vote");
//       }
//     } catch (error) {
//       setVoteError(error instanceof Error ? error.message : "Failed to submit vote");
//     }
//   };
//
//   return (
//     <>
//       {loading && <Skeleton className="h-[300px] w-full" />}
//
//       {!loading && !poll && (
//         <div className="flex flex-col w-full gap-6">
//           <div className="p-6 text-center text-red-500">
//             {voteError || "No active poll available"}
//           </div>
//         </div>
//       )}
//
//       {!loading && poll && (
//         <div className="flex flex-col w-full gap-6">
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col md:flex-row bg-accent hover:border hover:border-accent-darker dark:hover:border-primary-700 rounded-3xl gap-6 p-6 transition-all">
//               <div className="flex w-full flex-col gap-5">
//                 <div className="inline-flex flex-row items-center gap-2">
//                   <div className="flex flex-row bg-yellow-200 dark:bg-yellow-700 py-2 px-3 rounded-full items-center justify-center gap-1">
//                     <Flame size={16} />
//                     <p className="text-sm">Current poll</p>
//                   </div>
//                 </div>
//
//                 <p className="font-merriweather text-xl text-grey-700 font-semibold">
//                   {poll.question}
//                 </p>
//
//                 <RadioGroup
//                   value={selectedOption}
//                   onValueChange={setSelectedOption}
//                   className="flex flex-col gap-4"
//                   disabled={hasVoted}
//                 >
//                   {poll.pollData
//                     .sort((a, b) => a.option_id - b.option_id)
//                     .map((option) => (
//                       <div key={option.id} className="flex items-center space-x-2">
//                         <RadioGroupItem
//                           value={String(option.option_id)}
//                           id={`option-${option.option_id}`}
//                         />
//                         <Label
//                           htmlFor={`option-${option.option_id}`}
//                           className="text-base text-grey-700"
//                         >
//                           {option.option_text}
//                         </Label>
//                       </div>
//                     ))}
//                 </RadioGroup>
//
//                 <div className="inline-flex flex-col gap-2">
//                   {session?.user ? (
//                     hasVoted ? (
//                       <div className="flex items-center gap-2">
//                         <span className="flex items-center justify-start">
//                           <Image
//                             src="/next/next_assets/images/avatar.jpeg"
//                             alt="translator"
//                             height={24}
//                             width={24}
//                             className="inline border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
//                           />
//                           <Image
//                             src="/next/next_assets/images/avatar-4.jpeg"
//                             alt="translator"
//                             height={24}
//                             width={24}
//                             className="inline ms-[-10px] border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
//                           />
//                           <Image
//                             src="/next/next_assets/images/avatar-3.jpeg"
//                             alt="translator"
//                             height={24}
//                             width={24}
//                             className="inline ms-[-10px] border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
//                           />
//                         </span>
//                         <p className="text-base font-medium text-muted-foreground">
//                           {poll.totalVotes} Total votes
//                         </p>
//                       </div>
//                     ) : (
//                       <div className="inline-flex">
//                         <Button
//                           variant="default"
//                           size="lg"
//                           onClick={handleVote}
//                           disabled={!selectedOption || voting}
//                         >
//                           {voting ? "Voting..." : "Vote"}
//                         </Button>
//                       </div>
//                     )
//                   ) : (
//                     <div className="inline-flex">
//                       <Button variant="default" size="lg" disabled={true}>
//                         Login to vote
//                       </Button>
//                     </div>
//                   )}
//                   {(error || voteError) && (
//                     <p className="text-red-500 text-sm">{error || voteError}</p>
//                   )}
//                 </div>
//               </div>
//
//               <div className="flex flex-row md:flex-col gap-3 md:p-3">
//                 <ProzTooltip message="Doesn't work yet" position="left">
//                   <Button variant="default" size="sm">
//                     View results
//                   </Button>
//                 </ProzTooltip>
//                 <ProzTooltip message="Doesn't work yet" position="left">
//                   <Button variant="default" size="sm">
//                     Discuss
//                   </Button>
//                 </ProzTooltip>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default CurrentPoll;

"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/shadcn/button";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import { Label } from "@/components/shadcn/label";
import { Flame, Check, Vote } from "lucide-react";
import { getApiBaseUrl } from "@/utils/helpers";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useVote } from "@/hooks/useVoteHook";
import Image from "next/image";

interface PollData {
  id: number;
  poll_id: number;
  option_id: number;
  option_text: string;
  color: string;
  votes: number;
  percentage: number; // Add percentage field
}

interface Poll {
  poll_id: number;
  question: string;
  pollData: PollData[];
  totalVotes: number;
}

const CurrentPoll = () => {
  const { data: session } = useSession();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const { vote, loading: voting, error } = useVote();
  const [voteError, setVoteError] = useState<string | null>(null);

  const fetchPollData = async (pollId: number) => {
    try {
      const checkVoteUrl = getApiBaseUrl(`polls/${pollId}/check-vote`, false);
      const voteCheckResponse = await fetch(checkVoteUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (voteCheckResponse.ok) {
        const voteStatus = await voteCheckResponse.json();
        setHasVoted(voteStatus.hasVoted);
      }
    } catch (error) {
      console.error("Error checking vote status:", error);
    }
  };

  const fetchPoll = async () => {
    try {
      setLoading(true);
      const url = getApiBaseUrl("polls/current", false);
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (!result.data) {
        throw new Error("No poll data available");
      }

      setPoll(result.data);

      // Check vote status only if user is logged in
      if (result.data?.poll_id && session?.user?.entity_id) {
        await fetchPollData(result.data.poll_id);
      }
    } catch (error) {
      console.error("Error in fetchPoll:", error);
      setVoteError(error instanceof Error ? error.message : "Failed to fetch poll");
      setPoll(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchPoll();
    }

    return () => {
      mounted = false;
      setPoll(null);
      setVoteError(null);
      setHasVoted(false);
      setSelectedOption("");
    };
  }, [session?.user?.entity_id]);

  const handleVote = async () => {
    if (!poll || !selectedOption || !session?.user?.entity_id) return;

    try {
      setVoteError(null);
      const checkVoteUrl = getApiBaseUrl(`polls/${poll.poll_id}/check-vote`, false);
      const voteCheckResponse = await fetch(checkVoteUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!voteCheckResponse.ok) {
        throw new Error("Failed to check vote status");
      }

      const voteStatus = await voteCheckResponse.json();
      if (voteStatus.hasVoted) {
        setHasVoted(true);
        setVoteError("You have already voted in this poll");
        return;
      }

      const result = await vote(poll.poll_id, parseInt(selectedOption));

      if (result.success) {
        setHasVoted(true);
        setSelectedOption("");
        await fetchPoll();
      } else {
        setVoteError(result.error || "Failed to vote");
      }
    } catch (error) {
      setVoteError(error instanceof Error ? error.message : "Failed to submit vote");
    }
  };

  const totalVotes = poll?.totalVotes || 0;

  return (
    <>
      {loading && <Skeleton className="h-[300px] w-full" />}

      {!loading && !poll && (
        <div className="flex flex-col w-full gap-6">
          <div className="p-6 text-center text-red-500">
            {voteError || "No active poll available"}
          </div>
        </div>
      )}

      {!loading && poll && (
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row bg-accent dark:bg-grey-900 shadow-md hover:shadow-lg border border-accent-dark dark:border-primary-800 dark:hover:shadow-lg rounded-3xl gap-6 p-5 md:p-6 transition-all">
              <div className="flex w-full flex-col gap-5">
                <div className="inline-flex flex-col md:flex-row items-start justify-between gap-2">
                  <div className="flex flex-row bg-yellow-200 dark:bg-yellow-700 py-2 px-3 rounded-full items-center justify-center gap-1">
                    <Flame size={16} />
                    <p className="text-sm">Current poll</p>
                  </div>
                  {hasVoted && (
                    <>
                      <p className="text-sm italic text-muted-foreground">
                        You have voted on this poll
                      </p>
                    </>
                  )}
                </div>

                <p className="font-merriweather text-xl text-grey-700 font-semibold py-2">
                  {poll.question}
                </p>

                {hasVoted ? (
                  <div className="space-y-3 animate-fade-in">
                    {poll.pollData.map((option) => {
                      const percentage =
                        totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;

                      return (
                        <div
                          key={option.id}
                          className="relative w-full rounded-2xl border border-border overflow-hidden"
                        >
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(to right, #EFEDE3 ${percentage}%, transparent ${percentage}%)`,
                            }}
                          />
                          <div className="relative w-full p-4">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-3">
                                {option.option_id === parseInt(selectedOption) && (
                                  <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                                    <Check className="h-3 w-3 text-white" />
                                  </div>
                                )}
                                <span
                                  className={
                                    option.option_id === parseInt(selectedOption)
                                      ? "font-medium"
                                      : ""
                                  }
                                >
                                  {option.option_text}
                                </span>
                              </div>
                              <span className="font-semibold text-grey-700 text-base md:text-lg">
                                {percentage}%
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // Has not voted yet
                  <>
                    <RadioGroup
                      value={selectedOption}
                      onValueChange={setSelectedOption}
                      className="space-y-2"
                    >
                      {poll.pollData.map((option) => (
                        <div
                          key={option.id}
                          className={`relative flex items-center gap-3 p-4 rounded-2xl border border-primary-200 transition-all duration-300 hover:border-primary-200 hover:bg-secondary ${selectedOption === String(option.option_id) ? "border-primary-200 bg-secondary" : ""}`}
                        >
                          <RadioGroupItem
                            value={String(option.option_id)}
                            id={`option-${option.option_id}`}
                            className="scale-105 items-center"
                          />
                          <Label
                            htmlFor={`option-${option.option_id}`}
                            className="flex-1 cursor-pointer font-medium pl-2 items-center"
                          >
                            {option.option_text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </>
                )}

                <div className="inline-flex flex-col gap-2">
                  {session?.user ? (
                    hasVoted ? (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-start">
                          <Image
                            src="/next/next_assets/images/avatar.jpeg"
                            alt="translator"
                            height={24}
                            width={24}
                            className="inline border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
                          />
                          <Image
                            src="/next/next_assets/images/avatar-4.jpeg"
                            alt="translator"
                            height={24}
                            width={24}
                            className="inline ms-[-10px] border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
                          />
                          <Image
                            src="/next/next_assets/images/avatar-3.jpeg"
                            alt="translator"
                            height={24}
                            width={24}
                            className="inline ms-[-10px] border-[3px] border-accent dark:border-black rounded-full w-[40px] h-[40px]"
                          />
                        </span>
                        <p className="text-base font-medium text-muted-foreground">
                          {poll.totalVotes} Total votes
                        </p>
                      </div>
                    ) : (
                      <div className="inline-flex">
                        <Button
                          variant="default"
                          size="lg"
                          onClick={handleVote}
                          disabled={!selectedOption || voting}
                          className="w-full sm:w-auto gap-2 transition-all"
                        >
                          <Vote className="h-4 w-4" />
                          {voting ? "Voting..." : "Vote"}
                        </Button>
                      </div>
                    )
                  ) : (
                    <div className="inline-flex">
                      <Button variant="default" size="lg" disabled={true}>
                        Login to vote
                      </Button>
                    </div>
                  )}
                  {(error || voteError) && (
                    <p className="text-red-500 text-sm">{error || voteError}</p>
                  )}
                </div>
              </div>

              {/*<div className="flex flex-row md:flex-col gap-3 md:p-3">*/}
              {/*  <ProzTooltip message="Doesn't work yet" position="left">*/}
              {/*    <Button variant="default" size="sm">*/}
              {/*      View results*/}
              {/*    </Button>*/}
              {/*  </ProzTooltip>*/}
              {/*  <ProzTooltip message="Doesn't work yet" position="left">*/}
              {/*    <Button variant="default" size="sm">*/}
              {/*      Discuss*/}
              {/*    </Button>*/}
              {/*  </ProzTooltip>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentPoll;
