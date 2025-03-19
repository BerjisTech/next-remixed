import React from "react";
import ProzPayLayout from "@/app/prozpay/_prozPayLayout";
import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import Payroll from "@/app/prozpay/bulk/_payrollPage";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <ProzPayLayout subpage={"payroll"}>
      <Payroll />
    </ProzPayLayout>
  );
};
export default page;
