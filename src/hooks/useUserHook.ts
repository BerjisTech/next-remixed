"use client";
import { useAppDispatch } from "@/lib/store/hooks";

export const useProfileHook = () => {
  const dispatch = useAppDispatch();

  const createUserAccount = (data: any) => {
    fetch("/next/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user account");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User account created:", data);
        // Optionally dispatch an action with the response data
        // dispatch(yourAction(data));
      })
      .catch((error) => {
        console.error("Error creating user account:", error);
      });
  };

  return { createUserAccount };
};
