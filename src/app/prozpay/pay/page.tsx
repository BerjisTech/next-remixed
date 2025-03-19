import React from "react";
import ProzPayLayout from "@/app/prozpay/_prozPayLayout";
import PayAFreelancer from "@/app/prozpay/pay/_payAFreelancerPage";
import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <ProzPayLayout subpage={"pay"}>
      <PayAFreelancer />
    </ProzPayLayout>
  );
};

export default page;
