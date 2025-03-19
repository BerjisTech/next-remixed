import { ReactNode } from "react";

export interface ProzPayFaqItem {
  question: string;
  answer: string | ReactNode;
  isOpen: boolean;
}

export interface ProzPayPendingData {
  pending_withdrawals: number;
  pending_requests: number;
}

export interface PaymentReceived {}
