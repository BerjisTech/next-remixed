import ProzPayLayout from "@/app/prozpay/_prozPayLayout";
import React from "react";
import { Metadata } from "next";
import { prozPayMetadata } from "@/constants/prozpay";
import RequestAPayment from "@/app/prozpay/getpaid/_requestPaymentPage";

export const metadata: Metadata = prozPayMetadata;

const page = () => {
  return (
    <ProzPayLayout subpage={"getpaid"}>
      <RequestAPayment />
    </ProzPayLayout>
  );
};

export default page;
