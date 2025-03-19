"use client";
import { ProzUser } from "@/interfaces/account";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
interface ClientDataProps {
  user: ProzUser;
}
const ClientData: React.FC<ClientDataProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const param = searchParams?.get("show-modal");
  useEffect(() => {
    if (param && param === "seo") {
      dispatch(setContentSliceBits({ bitToSet: "updaterSection", value: "tagline_&_seo" }));
      dispatch(setContentSliceBits({ bitToSet: "showDrawerProfile", value: true }));
    }
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default ClientData;
