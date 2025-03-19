import { ProzPayFaqItem } from "@/interfaces/prozpay/prozpay";

export const prozPayMetadata = {
  title: "ProZ*Pay - A payment method optimized for Language Service Providers",
  description: "A payment method optimized for Language Service Providers",
};

// if this is changed, modify it in php too
// PaymentManager.php in getPaymentTypesFeesArray()
export const prozPayPaymentMethodFees = {
  bank_transfer: 0,
  credit_card: 0.0375,
  paypal: 0.0375,
  advance_payment: 0,
};

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const timeAgo = (dateString: string): string => {
  const date = new Date(dateString + "Z");
  const now = new Date();

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000); // Difference in seconds

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "seconds");
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, "minutes");
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return rtf.format(-diffInHours, "hours");
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return rtf.format(-diffInDays, "days");
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return rtf.format(-diffInMonths, "months");
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return rtf.format(-diffInYears, "years");
};

export const withdrawalMethods: { [key: string]: string } = {
  "bank-transfer": "Bank transfer",
  paypal: "Paypal",
  payoneer: "Payoneer",
  skrill: "Skrill",
  wise: "Wise",
  venmo: "Venmo",
  bitpay: "Cryptocurrency via BitPay",
  revolut: "Revolut",
  other: "Others (see notes)",
};

export const bankTransferTypes: { [key: string]: string } = {
  paymentrails: "Trolley (PaymentRails)",
  transferwise: "Wise",
  bank_direct: "Direct bank transfer (ACH/SWIFT)",
  local_argentina: "Local payment (Argentina)",
};

export const paymentMethods: { [key: string]: string } = {
  bank_transfer: "bank_transfer",
  paypal: "paypal",
  credit_card: "credit_card",
  advance_payment: "advance_payment",
};

export const PAYEE_FAQS: ProzPayFaqItem[] = [
  {
    question: "Is there any payment involved in pro bono work?",
    answer:
      "None at all. ProZ.com's Pro Bono Project is 100% cashless. Our volunteers freely donate their time and skills, and we never ask any of our clients for payment in any form. The only thing we ask is that our translators are credited where appropriate, for example on published materials. ",
    isOpen: false,
  },
  {
    question: "I'm a translator or interpreter. Do I need to be experienced to contribute?",
    answer:
      "We're happy to work with all willing volunteers. If you're right at the start of your career, we partner you with more experienced colleagues so that we can ensure professional quality for our clients, but apart from that, if you're eager to join, we're excited to have you on board. Be prepared to collaborate with others, and to receive feedback where appropriate. If you are experienced, also extremely welcome of course, and you can play a vital role in delivering quality work or supporting others. ",
    isOpen: false,
  },
  {
    question: "Do I have to be a paying member of proz.com to participate?",
    answer:
      "Not at all. We do encourage volunteers to look at the many benefits of membership but it's not a condition. Bear in mind that the entire program is supported by the paying contributions of members, so being a member is another way to contribute to the program's goals.",
    isOpen: false,
  },
  {
    question: "Is the program open all year-round?",
    answer:
      "Yes! There are busy periods and less busy periods as in any professional cycle, but we're always here. ",
    isOpen: false,
  },
  {
    question: "Is there a minimum monthly translation requirement?",
    answer:
      "No. The spirit of volunteering is about doing as much as you want, whenever you feel like it. There are no requirements of obligations, beyond the basic ground rules of professionalism such as communication and deadlines. ",
    isOpen: false,
  },
  {
    question:
      "How do we verify the legitimacy of clients to avoid potential misuse of translations for commercial purposes?",
    answer:
      "The Program Coordinator meets all clients for initial video conferences, and the first question we ask on the Client Onboarding Form  is whether they are a non-profit. In the unlikely chance anyone  slips through that process and proves to have commercial aims, we will of course stop working with them immediately. ",
    isOpen: false,
  },
  {
    question: "What does the program do for us? Is our work credited?",
    answer:
      "We are always happy to give social media reviews to translators, and recommendations to potential clients. Meanwhile, any translations that are published (books, films etc) always credit the translator. However, some of the work we do is for in-house documentation or forms, and clearly in such cases the translator is not mentioned.",
    isOpen: false,
  },
  {
    question: "Can I help in other ways if I have no time to translate?",
    answer:
      "There are many ways to help ProZ Pro Bono. By following us, sharing posts or even writing about it on social media, by helping us identify worthy non-profits in your area, and in a variety of other ways, including becoming an Ambassador, getting involved in admin tasks. Just drop us a line and tell us a little about yourself and we'll find a role for you.",

    isOpen: false,
  },
];
