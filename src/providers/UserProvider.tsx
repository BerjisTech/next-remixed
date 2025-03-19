"use client";
import { useStaffHook } from "@/hooks/useStaffHook";
import { ProzUser } from "@/interfaces/account";
import { setProfileSliceBits, setUserProfile } from "@/lib/store/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

const getUserIp = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
};

// Function to log page visit
const logVisit = async (entityId: number) => {
  const ip = await getUserIp(); // Get IP
  try {
    fetch("/next/api/page-visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entityId,
        page: window.location.pathname,
        browser: navigator.userAgent,
        ip,
      }),
    });
  } catch (error) {
    console.error("Error in logging request:", error); // Error log in request
  }
};

// Utility function to get a specific cookie by name
const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export function UserProvider({ children }: UserProviderProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, status } = useSession();
  const { pseudoId, isPseudo, forceReload } = useAppSelector((state) => state.profile);
  const { isStaff } = useStaffHook();
  let pathname = usePathname() ?? "";

  // Function to handle setting local state based on the user profile
  const setLocalData = useCallback(
    (user: ProzUser) => {
      console.log("Setting local data");
      dispatch(setUserProfile({ user }));
      dispatch(setProfileSliceBits({ bitToSet: "entityId", value: user?.entity_id }));
      dispatch(setProfileSliceBits({ bitToSet: "isAdmin", value: user.is_admin }));
      dispatch(setProfileSliceBits({ bitToSet: "isAllowedLinkEditors", value: user.is_admin }));
      dispatch(setProfileSliceBits({ bitToSet: "loggedIn", value: true }));
      dispatch(
        setProfileSliceBits({ bitToSet: "canEdit", value: user.is_admin || user.is_pseudo })
      );
      dispatch(
        setProfileSliceBits({ bitToSet: "pseudoId", value: user.is_pseudo ? user.pseudo_id : 0 })
      );
      dispatch(setProfileSliceBits({ bitToSet: "isPseudo", value: user.is_pseudo }));
    },
    [dispatch, isStaff]
  );

  // Function to fetch user profile data
  const fetchData = useCallback(async () => {
    dispatch(setProfileSliceBits({ bitToSet: "forceReload", value: false }));
    const phpSessionId =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? getCookie("devPHPSESSID")
        : getCookie("PHPSESSID");

    if (!phpSessionId) {
      return;
    }

    if (phpSessionId) {
      const reqObj = {
        redirect: false,
        email: "",
        password: "",
        phpSessionId,
        isPseudo, // Add additional key
        pseudoId, // Add additional key
      };

      const res = await signIn("credentials", {
        ...reqObj,
      });

      if (res?.ok && data) {
        setLocalData(data.user as ProzUser);
        router.refresh();
      }
    }
  }, [pseudoId, isPseudo, dispatch, setLocalData, data]);

  // Effect to trigger data fetching
  useEffect(() => {
    if (((!data || !data.user) && status === "unauthenticated") || forceReload) {
      fetchData();
    } else if (data && !data.user && status == "authenticated") {
      fetchData();
    } else if (data?.user) {
      setLocalData(data.user as ProzUser);
    }
  }, [status, forceReload, data, fetchData, setLocalData]);

  useEffect(() => {
    if (status === "authenticated" && data) {
      console.log("Path change triggered");
      if (process.env.NEXT_PUBLIC_NODE_ENV !== "development") {
        logVisit(data.user.entity_id);
      }
    }
  }, [pathname, status, data]);

  return <React.Fragment>{children}</React.Fragment>;
}
