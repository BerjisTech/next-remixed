"use client";
import React, { useState } from "react";
import HeroSection from "../../_heroSection";
import SidebarLayout from "../../_sidebarLayout";

type Section = {
  id: string;
  title: string;
  content?: string;
  children?: { id: string; title: string; content?: string }[];
};
const ProZPayPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeSubAccordion, setActiveSubAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const toggleSubAccordion = (id: string) => {
    setActiveSubAccordion((prev) => (prev === id ? null : id));
  };

  const sections: Section[] = [
    {
      id: "prozpay",
      title: "ProZ*Pay",
      children: [
        {
          id: "prozpay-whatis",
          title: "What is ProZ*Pay?",
          content: `
                    <p><a href="https://go.proz.com/proz-pay-lsp">ProZ*Pay</a> is a payment service for LSPs that speeds up payments from language businesses to language professionals.</p>
                    <p>Need more information? See more articles or <a href="https://www.proz.com/support?mode=ask&type=proz_pay">submit a support request</a>.</p>
                    `,
        },
        {
          id: "prozpay-glossary",
          title: "Glossary of ProZ*Pay terms",
          content: `
                    <p><strong>Payer, customer, client:</strong> 'Company' or 'LSP' funding the payment.</p>
                    <p><strong>Payee, vendor:</strong> Language professional ('freelancer', 'service provider' etc.) who receives payment.</p>
                    <p><strong>Payout, payment:</strong> Payment of money to be delivered to the payee.</p>
                    <p><strong>Advance payout (payment):</strong> Payout scheduled by the payer before funds are transferred to ProZ*Pay.</p>
                    <p><strong>Payment request:</strong> The email sent to the payer <a href="https://www.proz.com/pay/request" class="underline">requesting to be paid via ProZ*Pay</a>.</p>
                    <p><strong>Funds:</strong> Payment amount transferred to ProZ*Pay by the payer.</p>
                    <p><strong>Payouts/withdrawal:</strong> Amount of money requested by the payee to be withdrawn.</p>
                    <p><strong>Payout/withdrawal settings:</strong> <a href="https://www.proz.com/pay/account/settings" class="underline">Settings</a> set by the payee to withdraw funds from ProZ*Pay account.</p>
                    <p><strong>Preferred payout method:</strong> <a href="https://help.proz.com/en/what-withdrawal-methods-can-be-used" class="underline">Method</a> set by the payee to receive the payout (funds).</p>
                `,
        },
        {
          id: "fastest-way-start-prozpay",
          title: "What is the fastest way to start with ProZ*Pay?",
          content: `
                    <p><strong>For Payee:</strong></p>
                    <p>Request faster payment from your client at <a href="https://www.proz.com/pay/request" class="underline">https://www.proz.com/pay/request</a>.</p>
            
                    <p><strong>For Payer:</strong></p>
                    <p>To pay many, email <a href="mailto:mike@proz.com" class="underline">mike@proz.com</a>. Have your spreadsheet or output ready.</p>
                    <p>Fund the payment for your freelancers via <a href="https://www.proz.com/pay/" class="underline">https://www.proz.com/pay/</a>.</p>
                    <p>Choose <a href="https://www.proz.com/pay/" class="underline">FUND LATER</a> to set this up if your freelancers are interested in getting paid prior to the due date. Business members with a Blue Board over 4.2 are eligible for payment advances.</p>
            
                    <div class="my-4">
                        <iframe src="https://drive.google.com/file/d/1iLV3G1PvzFN7lsygPsZhU3upfunxh54c/preview" 
                                width="100%" 
                                height="480" 
                                allow="autoplay" 
                                class="rounded-md border border-gray-200">
                        </iframe>
                    </div>
            
                    <p>You can find more information also via the links provided below:</p>
                    <p><strong>For Payer:</strong></p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/how-do-i-fund-the-payment-to-my-payee" class="underline">How do I fund the payment to my payee?</a></li>
                        <li><a href="https://help.proz.com/en/can-i-fund-the-payment-later" class="underline">Can I fund the payment later?</a></li>
                        <li><a href="https://help.proz.com/en/how-do-monthly-payrolls" class="underline">How can I pay many freelancers quickly?</a></li>
                        <li><a href="https://help.proz.com/en/how-do-i-fund-payment-via-a-bank-transfer" class="underline">How do I fund payment via a bank transfer?</a></li>
                    </ul>
            
                    <p><strong>For Payee:</strong></p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/how-do-i-request-for-someone-to-pay-me-via-prozpay" class="underline">How do I request for someone to pay me via ProZ*Pay?</a></li>
                    </ul>
                `,
        },
        {
          id: "methods-payment-available",
          title: "What methods of payment are available to fund (send) a payment?",
          content: `
                    <p>The following payment methods are provided for the <strong>payer</strong>:</p>
                    <ul class="list-disc list-inside">
                        <li>Bank transfer</li>
                        <li>PayPal</li>
                        <li>Credit card</li>
                        <li>Wise (formerly TransferWise)</li>
                        <li>Skrill</li>
                        <li>Check</li>
                    </ul>
                    <p>Contact ProZ*Pay Team <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline">by submitting a support request</a> if you would like to use any other payment method to fund your payment.</p>
                    
                    <p>Please see also:</p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/how-do-i-fund-the-payment-to-my-payee" class="underline">How do I fund the payment to my payee?</a></li>
                        <li><a href="https://help.proz.com/en/what-payment-funding-methods-are-accepted-for-prozpay" class="underline">What payment funding methods are accepted for ProZ*Pay?</a></li>
                        <li><a href="https://go.proz.com/blog/how-to-use-paypal-for-individual-prozpay-payments" class="underline">How to use PayPal for individual ProZ*Pay payments</a></li>
                        <li><a href="https://help.proz.com/en/how-do-i-fund-payment-via-a-bank-transfer" class="underline">How do I fund payment via a bank transfer?</a></li>
                    </ul>
                `,
        },
        {
          id: "withdrawal-methods",
          title: "What withdrawal methods are supported?",
          content: `
                    <p>Withdrawal methods to send a payout to the payee:</p>
                    <ul class="list-disc list-inside">
                        <li>Bank transfer</li>
                        <li>PayPal</li>
                        <li>Payoneer</li>
                        <li>Skrill</li>
                        <li>Wise (formerly TransferWise)</li>
                        <li>Venmo (only for payees in the US)</li>
                        <li>Cryptocurrency via BitPay</li>
                        <li>Revolut</li>
                        <li>Check (only for payees in the US)</li>
                    </ul>
                    <p>Check details about withdrawal methods in <a href="https://www.proz.com/pay/withdrawal-preferences" target="_blank" class="underline">ProZ*Pay withdrawal preferences</a>.</p>
                    <div class="mt-4">
                        <img src="/next/next_assets/images/help/items/payout-method.png" alt="Preferred payout method" class="rounded shadow-lg">
                    </div>
                    <p>Contact ProZ.com Staff <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">by submitting a support request</a> if you would like to use any other payment methods not listed. Your request will be checked to establish a new withdrawal method even for a single payment!</p>
                    <p>To find more information about withdrawal methods, please check:</p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/how-can-i-add-my-withdrawal-preferences" target="_blank" class="underline">How can I add my withdrawal preferences?</a></li>
                        <li><a href="https://help.proz.com/en/how-do-i-add-bank-transfer-as-my-payout-method" target="_blank" class="underline">How do I add bank transfer as my payout method?</a></li>
                    </ul>
                `,
        },
        {
          id: "prozpay-fees",
          title: "Information about Fees: What fees does ProZ.com charge for ProZ*Pay service?",
          content: `
                    <p>ProZ*Pay has a fee called the "convenience (service) fee" which is added to cover the services provided by ProZ*Pay. The fee varies depending on whether the payer is a Business client or not. Business members pay 2% and all others 5% for payments.</p>
                    <p>If the payment is funded via PayPal or credit card, there is an additional 3.75% fee added to the convenience fee.</p>
                    <p><em>Please note fees are subject to change.</em></p>
                    <div class="mt-4">
                        <img src="/next/next_assets/images/help/items/prozpay-fee.png" alt="ProZ*Pay Fees Information" class="rounded shadow-lg">
                    </div>
                    <div class="mt-4">
                        <img src="/next/next_assets/images/help/items/prozpay-fee2.png" alt="ProZ*Pay Fees Information" class="rounded shadow-lg">
                    </div>
                    <p>More information about fees can be found here:</p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/what-fee-is-applied-to-each-payment-method-selected" target="_blank" class="underline">What fee is applied to each payment method selected?</a></li>
                        <li><a href="https://help.proz.com/en/what-is-a-convenience-fee" target="_blank" class="underline">What is a convenience fee?</a></li>
                        <li><a href="https://help.proz.com/en/why-do-the-convenience-fees-differ" target="_blank" class="underline">Why do the convenience fees differ?</a></li>
                        <li><a href="https://help.proz.com/en/why-are-there-fees-for-prozpay" target="_blank" class="underline">Why are there fees for ProZ*Pay?</a></li>
                    </ul>
                `,
        },
        {
          id: "prozpay-convenience-fee",
          title: "What is a convenience fee?",
          content: `
                    <p><strong>Convenience (service) fee</strong> is a fee paid by the payer or payee for making payments via ProZ*Pay.</p>
                    <p>Convenience fee includes:</p>
                    <ul class="list-disc list-inside">
                        <li>customer support</li>
                        <li>payments fees</li>
                        <li>onboarding payees</li>
                    </ul>
                `,
        },
        {
          id: "why-prozpay-fees",
          title: "Why are there fees for ProZ*Pay?",
          content: `
                    <p>Fees are charged for <a href="https://go.proz.com/proz-pay-lsp" class="underline">ProZ*Pay service</a> because there are fees related to transferring money between financial institutions involved in processing sent and received payments. The fees are based on how your client funds the ProZ*Pay payment and if they have a <a href="https://www.proz.com/business-membership" class="underline">business membership</a> with ProZ.com. If your client has a business membership, then the base fee is 2%. If your client does not have a business membership, then the base fee is 5%.</p>
                `,
        },
        {
          id: "prozpay-convenience-fees",
          title: "Why do the convenience fees differ?",
          content: `
                    <p><a href="https://help.proz.com/en/what-is-a-convenience-fee" class="underline">The convenience fee</a> is charged based on the payer's membership status. <a href="https://www.proz.com/business-membership" class="underline">Business members</a> will pay the lowest fees.</p>
                    
                    <p>Those who complete payment instructions ahead of time may pay less or no fees.</p>
                    
                    <p>Moreover, convenience fees also include a fee for the use of PayPal or credit card payment methods, if such methods are selected (additional 3.75% fee added).</p>
                    
                    <p>If you have any doubt about the fee you are charged, please contact ProZ*Pay Team <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline">by submitting a support request</a>.</p>
                `,
        },
        {
          id: "who-pays-prozpay-fees",
          title: "Who pays ProZ*Pay fees? Payer or payee?",
          content: `
                    <p>Fees are defaulted to the payer. If the freelancer has agreed to pay fees for receiving money, choose <strong>"Recipient is paying fees."</strong></p>
                    <h4 class="text-lg font-bold mt-4">Fees are defaulted to the payer.</h4>
                    <p>While fees are defaulted to the payer, they can be passed to the payee (the freelancer getting paid).</p>
                    <p>Best client/freelancer relationships start with an understanding of who is going to cover the cost (if any) involved with getting paid. ProZ*Pay is not involved in whatever agreements client and freelancer might come to regarding who pays the fees.</p>
                    <p>If the freelancer has agreed to pay fees for receiving money, choose <strong>"Recipient is paying fees"</strong> when completing the ProZ*Pay payment instruction.</p>
                    <p>ProZ.com does not take a commission on work that passes through the site.</p>
                    <p>For more information about fees please check the following FAQs:</p>
                    <h5 class="text-md font-bold mt-4">For Payer:</h5>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/information-about-fees-what-fees-does-proz.com-charge-for-prozpay-service" class="underline">What fees does ProZ.com charge for ProZ*Pay service?</a></li>
                        <li><a href="https://help.proz.com/en/why-are-there-fees-for-prozpay" class="underline">Why are there fees for ProZ*Pay?</a></li>
                        <li><a href="https://help.proz.com/en/what-fee-is-applied-to-each-payment-method-selected" class="underline">What fee is applied to each payment method selected to fund the payment?</a></li>
                    </ul>
                    <h5 class="text-md font-bold mt-4">For Payee:</h5>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/is-there-any-fee-for-using-prozpay-service" class="underline">Is there any fee for using ProZ*Pay service?</a></li>
                        <li><a href="https://help.proz.com/en/why-was-the-fee-charged-for-my-payout/payment-received" class="underline">Why was the fee charged for my payout/payment received?</a></li>
                    </ul>
                `,
        },
        {
          id: "fee-applied-payment-method",
          title: "What fee is applied to each payment method selected to fund the payment?",
          content: `
                    <p>When <strong>bank transfer</strong> is used to fund the ProZ*Pay payment, there is no additional fee charged.</p>
                    <p>If <strong>PayPal or credit card</strong> is used, then there is an additional 3.75% fee since there is a fee charged to receive payments via either method.</p>
                    <p>You can find more information about the convenience fee <a href="https://help.proz.com/en/information-about-fees-what-fees-does-proz.com-charge-for-prozpay-service" class="underline">here</a>.</p>
                    <div>
                        <img src="/next/next_assets/images/help/items/fee2.png" alt="Fee details for payment methods - example 1" class="mb-4"/>
                        <img src="/next/next_assets/images/help/items/fee3.png" alt="Fee details for payment methods - example 2" class="mb-4"/>
                    </div>
                    <p>More information about fees can be found here:</p>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/information-about-fees-what-fees-does-proz.com-charge-for-prozpay-service" class="underline">What fees does ProZ.com charge for ProZ*Pay service?</a></li>
                        <li><a href="https://help.proz.com/en/what-is-a-convenience-fee" class="underline">What is a convenience fee?</a></li>
                        <li><a href="https://help.proz.com/en/why-do-the-convenience-fees-differ" class="underline">Why do the convenience fees differ?</a></li>
                        <li><a href="https://help.proz.com/en/why-are-there-fees-for-prozpay" class="underline">Why are there fees for ProZ*Pay?</a></li>
                    </ul>
                `,
        },
        {
          id: "prozpay-no-fee",
          title: "What if the payer does not want to pay a fee?",
          content: `
                    <p>If the payer does not pay the convenience fee, the fee will be deducted from the recipient's (payee) payout. In such cases, a 5%-8.75% fee would be deducted from the transferred amount.</p>
                    <p>Best client/freelancer relationships start with an understanding of who is going to cover the cost (if any) involved with getting paid. ProZ*Pay is not involved in whatever agreements client and freelancer might come to regarding who pays the fees.</p>
                `,
        },
        {
          id: "advanced-payout",
          title: "What is advanced payout?",
          content: `
                    <p>ProZ*Pay facilitates payments to language professionals from their clients.</p>
                    <p>As an additional service, ProZ*Pay offers <strong>the possibility to withdraw a payment on advance</strong>, before your client has paid. This service is offered in exchange for a modest fee.</p>
                    <h4 class="text-lg font-semibold mt-4">Related articles</h4>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/what-are-the-fees-associated-with-an-advance-payout" class="underline">What are the fees associated with an advance payout?</a></li>
                    </ul>
                `,
        },
        {
          id: "advance-payout-fees",
          title: "What are the fees associated with an advance payout?",
          content: `
                    <p>ProZ.com offers an advance on pending earnings. Advance withdrawals come with a moderate fee of 4.9% (as of December 2023), which is discounted to 2.0% for <a href="https://www.proz.com/professional-membership" class="underline">ProZ.com members</a>.</p>
                    <p>When an advance payout is available, you will be able to request it through the main page of <a href="https://www.proz.com/pay/account/overview" class="underline">your ProZ*Pay account</a>. Before confirming the request, you will be allowed to review the fee associated with the advance.</p>
                    <h4 class="text-lg font-semibold mt-4">Related articles</h4>
                    <ul class="list-disc list-inside">
                        <li><a href="https://help.proz.com/en/what-is-advanced-payout" class="underline">What is advanced payout?</a></li>
                    </ul>
                `,
        },
        {
          id: "restricted-countries",
          title: "What countries might not be available for ProZ*Pay payments?",
          content: `
                    <p><strong>Paying freelancers in certain nations may not be possible.</strong></p>
                    <p>Any language professional or business in good standing can use ProZ*Pay. Certain conditions may apply based on membership, Blue Board ratings, and other factors.</p>
                    <p>There may be issues with sending or receiving money in some countries due to international laws or banking regulations. Funding and payout methods might be limited for professionals in Afghanistan, Belarus, Central African Republic, Democratic Republic of the Congo, Eritrea, Ethiopia, Iraq, Ivory Coast, Lebanon, Liberia, Libya, Mali, Myanmar (Burma), Republic of the Congo, Russia, Somalia, South Sudan, Sudan, Turkey, Venezuela, Yemen, and Zimbabwe.</p>
                    <p><strong>Payment setup for professionals in Cuba, Iran, North Korea, and Syria is not possible at this time.</strong></p>
                    <p>These lists are subject to change and only limited by law. If you have any questions, please reach out <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline">by submitting a support request</a>.</p>
                `,
        },
        {
          id: "prozpay-terms-conditions",
          title: "What are the terms and conditions to use ProZ*Pay service?",
          content: `
                    <p>You can find ProZ*Pay terms and conditions here <a href="https://www.proz.com/pay/terms" class="underline">https://www.proz.com/pay/terms</a>.</p>
                    `,
        },
        {
          id: "prozpay-transfer-between-accounts",
          title: "Can I use ProZ*Pay to transfer funds between my accounts?",
          content: `
                    <p>ProZ*Pay should not be used to transfer money from one individual financial account to another.</p>
                    `,
        },
        {
          id: "prozpay-help",
          title: "How do I get ProZ*Pay help?",
          content: `
                    <p><strong>ProZ*Pay help is available through the ProZ.com support system.</strong></p>
                    <p>ProZ*Pay understands the importance of transmitting payment to you as efficiently as possible. There will be questions and concerns that come about during the process.</p>
                    <p>To help support all payers and payees at ProZ*Pay, all requests are being moved into the ProZ.com support system.</p>
                    <p>The help center and support tickets are available to help solve your problem quickly. More site staff helping will multiply the personal resources available to you.</p>
                    <p>Many of your questions can be answered immediately through the <a href="https://help.proz.com/en/prozpay" class="underline">ProZ*Pay knowledge base</a>.</p>
                    <p><a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline">ProZ*Pay support tickets can be submitted directly here</a></p>
                    <p><strong>For help with payroll uploads, contact <a href="mailto:mike@proz.com" class="underline">mike@proz.com</a>.</strong></p>
                `,
        },
        {
          id: "prozpay-self-payment",
          title: "Can I pay myself with ProZ*Pay?",
          content: `
                    <p><strong>No. Paying yourself is not allowed with the ProZ*Pay service.</strong></p>
                    <p>Paying yourself is not an allowed use of the ProZ*Pay service.</p>
                    <p>Any payments found to be created for the purpose of sending to the same person will be refunded and may impact future use of the service.</p>
                `,
        },
        {
          id: "prozpay-status-information",
          title: "Can I request information about the status of the money sent?",
          content: `
                    <p><strong>ProZ*Pay staff can help provide information about your payout.</strong></p>
                    <p>Information on the date your money is sent is available in the Payouts/withdrawals tabs in your <a href="https://www.proz.com/pay/account" class="underline">ProZ*Pay account settings</a>.</p>
                    <p>Payments are sent on the date of payment. This means they are sent, but there can be additional processing time based on your chosen way of receiving the money. Bank transfers may need to pass international compliance reviews, for example.</p>
                `,
        },
      ],
    },
    {
      id: "prozpay-for-payer",
      title: "ProZ*Pay for Payer",
      children: [
        {
          id: "fund-payment",
          title: "How do I fund the payment to my payee?",
          content: `
            <p>Go to <a href="https://www.proz.com/pay" target="_blank" class="underline">https://www.proz.com/pay</a></p>
            <ul class="list-disc list-inside">
                <li>choose your language professional (payee)</li>
                <li>add the amount to be paid and currency</li>
                <li>add additional information for payment (invoice number or any further additional information necessary for payment)</li>
                <li>select your preferred funding method</li>
                <li>select and check convenience fee</li>
                <li>press the “Pay” button</li>
            </ul>
            <p>The payment may be funded immediately (via credit card, PayPal, etc.) after pressing the “Pay” button or it can be paid later via other payment options (such as bank transfer).</p>
            <p>You will receive an invoice if the payment is not funded immediately.</p>
            <p>Please see also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/what-is-the-fastest-way-to-start-with-prozpay" target="_blank" class="underline">What is the fastest way to start with ProZ*Pay?</a></li>
                <li><a href="https://help.proz.com/en/what-payment-funding-methods-are-accepted-for-prozpay" target="_blank" class="underline">What payment funding methods are accepted for ProZ*Pay?</a></li>
                <li><a href="https://go.proz.com/blog/how-to-use-paypal-for-individual-prozpay-payments" target="_blank" class="underline">How to use PayPal for individual ProZ*Pay payments</a></li>
                <li><a href="https://help.proz.com/en/how-do-i-fund-payment-via-a-bank-transfer" target="_blank" class="underline">How do I fund payments via a bank transfer?</a></li>
            </ul>
        `,
        },
        {
          id: "accepted-payment-methods",
          title: "What payment funding methods are accepted for ProZ*Pay?",
          content: `
            <p>Most ways of sending money are accepted for funding payments.</p>
            <p>ProZ*Pay can accept many methods of funding for payments.</p>
            <p>There are two available methods to fund a payment immediately: <strong>credit card</strong> and <strong>PayPal</strong>. These methods have an additional 3.75% fee added to the payment.</p>
            <p>The other available method is <strong>bank transfer</strong>. There is no additional fee when choosing bank transfer. Once you have set up a payment using bank transfer as the funding method, you need to head to your bank account and make a transfer to ProZ.com's bank account. Learn more here: <a href="https://help.proz.com/en/how-do-i-fund-payment-via-a-bank-transfer" target="_blank" class="underline">How do I fund a payment via bank transfer?</a></p>
            <p>If you would like to fund the payment using a different method, please choose bank transfer and contact the ProZ*Pay staff. They will help. ProZ*Pay works with many different options to make funding more convenient. <strong>Mailing a check, Payoneer, Skrill, Wise (Transferwise)</strong>, and more may be available. Please <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">submit a support request</a> to find out more.</p>
            <p>Please see also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/what-methods-of-payment-are-available-to-fund-send-a-payment" target="_blank" class="underline">What methods of payment are available to fund (send) a payment?</a></li>
                <li><a href="https://go.proz.com/blog/how-to-use-paypal-for-individual-prozpay-payments" target="_blank" class="underline">How to use PayPal for individual ProZ*Pay payments</a></li>
                <li><a href="https://help.proz.com/en/how-do-i-fund-payment-via-a-bank-transfer" target="_blank" class="underline">How do I fund payment via a bank transfer?</a></li>
            </ul>
        `,
        },
        {
          id: "fund-payment-bank-transfer",
          title: "How do I fund payment via a bank transfer?",
          content: `
            <p>Go to <a href="https://www.proz.com/pay/" target="_blank" class="underline">https://www.proz.com/pay/</a> and set up a payment choosing "bank transfer" as the funding method.</p>
            <p>When you press the "Pay" button, an email confirmation will be sent to you and to the recipient for your reference. <strong>You won't have funded the payment yet.</strong> You will be redirected to the next page with the bank information to send your funding to ProZ*Pay.</p>
            <img src="/next/next_assets/images/help/items/bank-transfer.png" alt="Bank transfer funding" class="my-4">
            <svg 
                fill="#000000" 
                height="200px" 
                width="200px" 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <path id="XMLID_337_" d="M253.858,234.26c-2.322-5.605-7.792-9.26-13.858-9.26h-60V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v210H90c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l75,75 C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l75-75C254.896,246.316,256.18,239.865,253.858,234.26z M165,293.787 L126.213,255h77.573L165,293.787z"></path> </g></svg>
            <img src="/next/next_assets/images/help/items/bank-transfer2.png" alt="Bank transfer funding" class="my-4">
            <p><strong>You need to open your bank account and send a transfer using the information provided before.</strong></p>
            <p>As needed, <strong>please</strong><a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">submit a support request</a> <strong>to confirm receipt</strong>. International transfers can take more time. Share a receipt to help speed up the payment process for your freelancers.</p>
            <p>More information about the bank transfer option can be found also via:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/how-do-i-fund-a-prozpay-payment-via-bank-transfer" target="_blank" class="underline">Where do I find banking details for sending money to ProZ*Pay?</a></li>
            </ul>
            `,
        },
        {
          id: "banking-details",
          title: "Where do I find banking details for sending money to ProZ*Pay?",
          content: `
            <p><strong>Banking details for sending money to ProZ*Pay</strong></p>
            <p>Bank details for ProZ*Pay are included in your funding notification.</p>
            <p>Here is the information to send a bank transfer or wire transfer from your bank to ProZ*Pay:</p>
            <p><strong>Bank and Wire Transfer:</strong><br>
            Account Holder: <a href="https://www.proz.com" class="underline" target="_blank">ProZ.com</a><br>
            Bank: J.P. Morgan Chase<br>
            Routing Number (ABA): 022300173<br>
            Swiftcode - CHASUS33<br>
            Account Number: 483500460665</p>
            <p><strong>Wise Euros:</strong><br>
            Account Holder: <a href="https://www.proz.com" class="underline" target="_blank">ProZ.com</a>, Inc.<br>
            BIC: TRWIBEB1XXX<br>
            IBAN: BE97 9672 1415 5249<br>
            Wise's Address:<br>
            Avenue Louise 54, Room S52<br>
            Brussels<br>
            1050<br>
            Belgium</p>
            <p>As needed, please <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">submit a support request</a> to confirm receipt. International transfers can take more time. Share a receipt to help speed up the payment process for your freelancers.</p>
            <p><strong>Note:</strong> If you are arriving here for a membership or other payment, please be sure to let ProZ.com know about your payment via <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">a support request</a> or by sending your message at <a href="mailto:membership@proz.com" class="underline">membership@proz.com</a>.</p>
            <p>Please see also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/how-do-i-fund-a-prozpay-payment-via-bank-transfer" target="_blank" class="underline">How do I fund payment via a bank transfer?</a></li>
            </ul>`,
        },
        {
          id: "fees-information",
          title: "Where do I find information about fees?",
          content: `
            <p>Please check the following FAQs:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/information-about-fees-what-fees-does-proz.com-charge-for-prozpay-service" target="_blank" class="underline">What fees does ProZ.com charge for ProZ*Pay service?</a></li>
                <li><a href="https://help.proz.com/en/what-fee-is-applied-to-each-payment-method-selected" target="_blank" class="underline">What fee is applied to each payment method selected?</a></li>
                <li><a href="https://help.proz.com/en/what-is-a-convenience-fee" target="_blank" class="underline">What is a convenience fee?</a></li>
                <li><a href="https://help.proz.com/en/why-do-the-convenience-fees-differ" target="_blank" class="underline">Why do the convenience fees differ?</a></li>
                <li><a href="https://help.proz.com/en/why-are-there-fees-for-prozpay" target="_blank" class="underline">Why are there fees for ProZ*Pay?</a></li>
            </ul>
            <p>If you have any questions you can contact ProZ*Pay Team via <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">support request</a>.</p>
        `,
        },
        {
          id: "missing-payment-instructions",
          title: "I did not receive payment instructions to send funds. What should I do?",
          content: `
            <p>If you are looking for bank details to fund a ProZ*Pay payment, please read <a href="https://help.proz.com/en/how-do-i-fund-a-prozpay-payment-via-bank-transfer" target="_blank" class="underline">this FAQs article</a>.</p>
            <p>Please contact ProZ*Pay Team by <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">submitting a support request</a> if you need further assistance.</p>
        `,
        },
        {
          id: "no-preferred-payment-method",
          title: "There is no payment method I would like to use to fund the payment.",
          content: `
            <p>ProZ*Pay works with many different options to make funding more convenient, such as Payoneer, Skrill, Transferwise, and more may be available.</p>
            <p>If you would like to fund the payment in a different way, please follow this link 
            <a href="https://www.proz.com/pay" target="_blank" class="underline">https://www.proz.com/pay</a> > 
            <strong>choose "bank transfer"</strong> as the payment method > follow the steps to create the payment. 
            Once the payment is scheduled, the ProZ*Pay Staff will review it and send you an invoice with more payment options available to fund your payment.</p>
            <img src="/next/next_assets/images/help/items/fund-payment.png" alt="Payment options example" />
            <p>You can see all methods of payments already available to fund (send) a payment 
            <a href="https://help.proz.com/en/what-methods-of-payment-are-available-to-fund-send-a-payment" target="_blank" class="underline">here</a>.</p>
            <p>You may also contact ProZ*Pay Team directly via 
            <a href="https://www.proz.com/support?mode=ask&type=proz_pay" target="_blank" class="underline">a support request</a> 
            and provide the information about the payment method you would like to use.</p>
            <p>Please check also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/what-payment-funding-methods-are-accepted-for-prozpay" target="_blank" class="underline">What payment funding methods are accepted for ProZ*Pay?</a></li>
                <li><a href="https://help.proz.com/en/what-methods-of-payment-are-available-to-fund-send-a-payment" target="_blank" class="underline">What methods of payment are available to fund (send) a payment?</a></li>
            </ul>
        `,
        },
        {
          id: "available-currencies",
          title: "What currencies are available for payments?",
          content: `
            <p><strong>Presently payments can be entered in USD, EUR and GBP.</strong></p>
            <p>Your payees can receive payment in their local currency.</p>
        `,
        },
        {
          id: "payment-on-behalf",
          title: "Who is payment on behalf of?",
          content: `
            <p>A payment might be set up on behalf of you personally or on behalf of a business with which you are associated. Use the drop-down to adjust this information.</p>
            <img src="/next/next_assets/images/help/items/payment-on-behalf.png" alt="Payment on behalf example" class="my-4"/>
            <p>If you are not a confirmed employee of a business, ask your business page admin to confirm you as an employee or email 
            <a href="mailto:business@proz.com" class="underline">business@proz.com</a> to gain access.</p>
        `,
        },
        {
          id: "fund-payment-later",
          title: "Can I fund the payment later?",
          content: `
            <p>The option to fund the payment later is provided <strong>under certain conditions</strong>.</p>
            <p>The goal of ProZ*Pay is to help freelancers get paid faster. When you use the "Fund later" option, your payment intentions will be shared with the payee. The payee can choose to get the money sooner – before you have actually funded the payment. ProZ*Pay will fund this payment ahead of time for the payee.</p>
            <p>Please go to <a href="https://www.proz.com/pay/" class="underline" target="_blank">https://www.proz.com/pay/</a>, choose the "Fund later" tab at the top of the interface, and set up a payment as you would usually do.</p>
            <div>
                <img src="/next/next_assets/images/help/items/prozpay-fund-later.png" alt="ProZ*Pay fund later image" class="mt-4">
            </div>
            <p>Please contact ProZ*Pay Team <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline" target="_blank">via a support request</a> with any additional questions.</p>
            <p>Please check also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/what-is-the-fastest-way-to-start-with-prozpay" class="underline" target="_blank">What is the fastest way to start with ProZ*Pay?</a></li>
            </ul>
        `,
        },
        {
          id: "cancel-payment-request",
          title: "I have sent a payment request to fund money. How can I cancel it?",
          content: `
            <p>Please contact ProZ*Pay Staff <a href="https://www.proz.com/support?mode=ask&type=proz_pay">by submitting a support request</a> and provide the information about the payment request (date of the request and amount)  to have it canceled.</p>
        `,
        },
        {
          id: "select-payee",
          title: "How do I select the payee?",
          content: `
            <p>You can find the payee from the payment page <a href="https://www.proz.com/pay">https://www.proz.com/pay</a> via email address, full name or ProZ.com profile ID.</p>
            <div class="my-4">
                <img src="/next/next_assets/images/help/items/select-payee.png" alt="Select Payee" class="rounded shadow-lg">
            </div>
            <p>Please see also:</p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/what-if-i-cannot-find-the-payee-to-pay-in-prozpay" class="underline" target="_blank">What if I cannot find the payee to pay in ProZ*Pay?</a></li>
                <li><a href="https://help.proz.com/en/how-do-i-fund-the-payment-to-my-payee" class="underline" target="_blank">How do I fund the payment to my payee?</a></li>
            </ul>
        `,
        },
        {
          id: "cannot-find-payee",
          title: "What if I cannot find the payee to pay in ProZ*Pay?",
          content: `
            <p><strong>How to pay someone that is not appearing in the search</strong></p>
            <p>Please <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline" target="_blank">submit a support request</a> and provide the information about the payee and payment itself, which includes:</p>
            <ul class="list-disc list-inside">
                <li>email address and name of the payee</li>
                <li>when the payment should be made (date)</li>
                <li>the amount to be sent</li>
            </ul>
            <p>ProZ*Pay staff will check the information and help you to send your payment.</p>
            <p><strong>Please make sure to check also:</strong></p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/how-do-i-select-the-payee" class="underline" target="_blank">How do I select the payee?</a></li>
                <li><a href="https://help.proz.com/en/how-do-i-fund-the-payment-to-my-payee" class="underline" target="_blank">How do I fund the payment to my payee?</a></li>
            </ul>
        `,
        },
        {
          id: "pay-many-freelancers",
          title: "What if I want to pay many freelancers?",
          content: `
            <p><strong>ProZ*Pay allows you to pay many professionals at once through its bulk payment option.</strong></p>
            <p>ProZ*Pay offers better deals for bulk payments (monthly, weekly, etc.). Also, the bulk payment option includes the service of onboarding (arranging payout preferences) for the freelancers you are working with—meaning you won't have to do it yourself. The ProZ*Pay team will be supporting you and your freelancers every step of the way.</p>
            <p><strong>For more information about bulk payments, please check the following pages:</strong></p>
            <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/how-do-monthly-payrolls" target="_blank" class="underline">How can I pay many freelancers quickly?</a></li>
                <li><a href="https://go.proz.com/blog/paying-your-crowd-freelancers" target="_blank" class="underline">Paying your crowd, how to pay crowdsourced freelancers quickly</a></li>
                <li><a href="https://go.proz.com/blog/save-hours-unload-bulk-payments" target="_blank" class="underline">Save hours this month, unload bulk payments to freelancers to ProZ*Pay</a></li>
            </ul>
        `,
        },
        {
          id: "start-payroll-payments",
          title: "How do I start my entire payroll payments?",
          content: `
            <p><strong>Paying a crowd of language professionals such as your payroll through ProZ*Pay or a bulk payment option</strong></p>
            <p>Please email <a href="mailto:mike@proz.com" class="underline">mike@proz.com</a> with your intention to start making bulk payments. Your very first bulk payment can be set up today if you know who to pay, when, and how much.</p>
            <p>Here is a sample spreadsheet of your payroll that you can share with ProZ*Pay:</p>
            <div class="my-4">
                <img src="/next/next_assets/images/help/items/prozpay-template.png" alt="Sample payroll spreadsheet for ProZ*Pay" class="border rounded shadow">
            </div>
            <p><strong>Additional reading:</strong></p>
            <ul class="list-disc list-inside">
                <li><a href="https://go.proz.com/blog/paying-your-crowd-freelancers" target="_blank" class="underline">Paying your crowd, how to pay crowdsourced freelancers quickly</a></li>
                <li><a href="https://go.proz.com/blog/save-hours-unload-bulk-payments" target="_blank" class="underline">Save hours this month, unload bulk payments to freelancers to ProZ*Pay</a></li>
            </ul>
        `,
        },
        {
          id: "close-blue-board-reports",
          title: "How to use ProZ*Pay to close Blue Board non-payment reports",
          content: `
            <h2>Immediately fund payments to freelancers who opened non-payment reports</h2>
            <p>In many cases, non-payments result from miscommunication and conflicting payment methods: for example, outsourcers have policies of using PayPal, and their service providers don't have an account or PayPal doesn't operate in their countries.</p>
            <p>For cases like these, <strong>ProZ*Pay</strong> may prove valuable to outsourcers and help them save time and efforts.</p>
            <p>Once a non-payment is entered, outsourcers can see a direct link to ProZ*Pay in the entry to solve the issue right away. Click the linked ProZ*Pay image from your Blue Board to ProZ*Pay and fund your freelancer's payment. ProZ*Pay will make sure the money gets to the recipient.</p>
            <img src="/next/next_assets/images/help/items/blueboard-report.png" alt="ProZ*Pay Blue Board Report Example" />
            <p>Your business can set up the pending payment on ProZ*Pay and fund it, solving the non-payment complaint. With the money already in their ProZ*Pay account, the freelancers can arrange with the ProZ*Pay team the most appropriate way to receive their money.</p>
            <h3>Read more on ProZ.com blog</h3>
            <ul>
                <li><a href="https://go.proz.com/blog/non-payment-reports-paid-immediately" target="_blank" class="underline">Outsourcers see ProZ*Pay links to help clear Blue Board non-payment reports</a></li>
                <li><a href="https://go.proz.com/blog/solve-non-payments-faster" target="_blank" class="underline">Solve non-payments on your Blue Board record faster</a></li>
            </ul>
        `,
        },
        {
          id: "blue-board-nonpayment-active",
          title:
            "I made a payment via ProZ*Pay for a Blue Board non-payment report but the non-payment is still active. What should I do?",
          content: `
            <p>Please contact ProZ.com site staff via <a href="https://www.proz.com/support?mode=ask" target="_blank" class="underline">this support link</a> with the request to check the non-payment report paid via ProZ*Pay.</p>
            <p>You can find more information about the non-payment report via the following links:</p>
                    <ul class="list-disc list-inside">
                <li><a href="https://help.proz.com/en/how-to-use-prozpay-to-close-blue-board-non-payment-reports" target="_blank" class="underline">How to use ProZ*Pay to close Blue Board non-payment reports</a></li>
                <li><a href="https://go.proz.com/blog/non-payment-reports-paid-immediately" target="_blank" class="underline">Outsourcers see ProZ*Pay links to help clear Blue Board non-payment reports</a></li>
                <li><a href="https://go.proz.com/blog/solve-non-payments-faster" target="_blank" class="underline">Solve non-payments on your Blue Board record faster</a></li>
            </ul>
        `,
        },
        {
          id: "how-payee-receive-funds",
          title: "How will the payee receive funds?",
          content: `
            <p>The payee chooses to receive the payout in the way that works best for them.</p>
            <p>Most choose to receive via Bank transfers, Payoneer, PayPal, Skrill, and Wise (formerly Transferwise).</p>
            <p>More information about payout withdrawal methods is provided <a href="https://help.proz.com/en/what-withdrawal-methods-are-supported" target="_blank" class="underline">here</a>.</p>
        `,
        },
        {
          id: "payee-money",
          title: "When will the payee see the money?",
          content: `
            <p>By default, payouts are sent <strong>within one business day (often immediately)</strong> of the pay day and are only limited by the speed of the banking systems.</p>
            <p>For example: PayPal is almost immediate, while bank transfers can take from 1-10 days depending on its destination.</p>
        `,
        },
        {
          id: "payout-not-received",
          title: "My freelancer (payee) has communicated that the payout was not received?",
          content: `
            <p>Please ask the freelancer (payee) to contact ProZ*Pay Team <a href="https://www.proz.com/support?mode=ask&type=proz_pay" class="underline" target="_blank">by submitting a support request</a> with the payout information to have it checked.</p>
        `,
        },
        {
          id: "anyone-cannot-pay",
          title: "Is there anyone I cannot pay?",
          content: `
            <p>However, there are times that someone is not payable. If this is the case, money will be returned.</p>
            <p>Please also check the list of countries of which payments may not be allowed at this time:</p>
            <p><a href="https://help.proz.com/en/what-countries-are-not-available-for-prozpay" class="underline" target="_blank">What freelancers are not available for ProZ*Pay?</a></p>
        `,
        },
        {
          id: "translators-not-using-prozpay",
          title:
            "How can we use ProZ*Pay if translators don't have ProZ*Pay as an accepted payment method in their profiles?",
          content: `
            <p>Once your payees are chosen, ProZ*Pay staff will connect with them to get payment in a way that works the best for them.</p>
            <p>Some do not have ProZ*Pay chosen as an option because it is new in the last few years or they have not encountered a reason to add it.</p>
        `,
        },
      ],
    },
    {
      id: "prozpay-for-payee",
      title: "ProZ*Pay for Payee",
      children: [
        {
          id: "prozpay-how-do-i-get-paid",
          title: "How do I get paid?",
          content: ``,
        },
        {
          id: "prozpay-when-do-i-get-paid",
          title: "When do I get paid?",
          content: ``,
        },
        {
          id: "prozpay-bank-holidays",
          title: "Bank holidays",
          content: ``,
        },
        {
          id: "prozpay-what-withdrawal-methods-can-be-used",
          title: "What withdrawal methods can be used?",
          content: ``,
        },
        {
          id: "prozpay-is-there-any-fee-for-using-service",
          title: "Is there any fee for using ProZ*Pay service?",
          content: ``,
        },
        {
          id: "prozpay-why-fee-charged-payout",
          title: "Why was the fee charged for my payout/payment received?",
          content: ``,
        },
        {
          id: "prozpay-why-customer-pay-prozpay",
          title: "Why did the customer pay to ProZ*Pay and not directly into my bank account?",
          content: ``,
        },
        {
          id: "prozpay-how-find-account",
          title: "How can I find my ProZ*Pay account?",
          content: ``,
        },
        {
          id: "prozpay-how-check-balance",
          title: "How can I check my available ProZ*Pay balance?",
          content: ``,
        },
        {
          id: "prozpay-how-often-earnings-updated",
          title: "How often are earnings updated?",
          content: ``,
        },
        {
          id: "prozpay-what-pending-balance",
          title: "What is the pending balance?",
          content: ``,
        },
        {
          id: "prozpay-why-earnings-pending",
          title: 'Why are my earnings still "pending" instead of "available"?',
          content: ``,
        },
        {
          id: "prozpay-what-if-client-doesnt-pay",
          title:
            "What if I don't want to wait for my client to pay? Can I receive my 'pending' payouts now?",
          content: ``,
        },
        {
          id: "prozpay-what-fees-associated-advance-payout",
          title: "What are the fees associated with receiving an advance on a pending payout?",
          content: ``,
        },
        {
          id: "prozpay-how-add-withdrawal-preferences",
          title: "How can I add my withdrawal preferences?",
          content: ``,
        },
        {
          id: "prozpay-how-add-bank-transfer",
          title: "How do I add bank transfer as my payout method?",
          content: ``,
        },
        {
          id: "prozpay-dont-see-payout-method",
          title: "I do not see my payout method in the list",
          content: ``,
        },
        {
          id: "prozpay-immediate-vs-manual-payout",
          title: "What is the difference between immediate and manual payout schedules?",
          content: ``,
        },
        {
          id: "prozpay-when-receive-payment",
          title: "When will I receive payment in my account?",
          content: ``,
        },
        {
          id: "prozpay-how-add-payment-preferences",
          title: "I do not have a ProZ*Pay account. How do I add my payment (payout) preferences?",
          content: ``,
        },
        {
          id: "prozpay-hold-funds-account",
          title: "Can I hold the fund on my ProZ*Pay account?",
          content: ``,
        },
        {
          id: "prozpay-how-long-hold-funds",
          title: "How long can I hold funds in my account?",
          content: ``,
        },
        {
          id: "prozpay-payouts-and-requests",
          title:
            "ProZ*Pay payouts (payments) and requests: Where can I see all payments sent to me?",
          content: ``,
        },
        {
          id: "prozpay-how-check-payment-status",
          title: "How can I check the status of payments?",
          content: ``,
        },
        {
          id: "prozpay-do-i-pay-costs-receive-payout",
          title: "Do I pay for the costs to receive my payout?",
          content: ``,
        },
        {
          id: "prozpay-how-withdraw-funds",
          title: "How do I withdraw the funds from the ProZ*Pay account?",
          content: ``,
        },
        {
          id: "prozpay-balance-no-withdraw-option",
          title: "I see a balance on my ProZ*Pay account, but there is no option to withdraw, why?",
          content: ``,
        },
        {
          id: "prozpay-payment-problem",
          title: "I was informed that I may be having a problem with my payment",
          content: ``,
        },
        {
          id: "prozpay-connect-payment-profile",
          title: "How to connect my payment with ProZ.com profile and ProZ*Pay account?",
          content: ``,
        },
        {
          id: "prozpay-no-withdraw-button",
          title: "Why is there no option/button to request a withdrawal?",
          content: ``,
        },
        {
          id: "prozpay-no-payout-received",
          title: "I did not receive my payout. What should I do?",
          content: ``,
        },
        {
          id: "prozpay-currency-for-payout",
          title: "In what currency will I receive my payout?",
          content: ``,
        },
        {
          id: "prozpay-account-i-dont-own",
          title: "Is it possible to enter an account that I don't own?",
          content: ``,
        },
        {
          id: "prozpay-withdraw-to-usd",
          title: "How can I withdraw my ProZ*Pay balance to a bank account in American dollars?",
          content: ``,
        },
        {
          id: "prozpay-credit-card-request",
          title: "Credit card: Can I request a direct deposit to my credit card?",
          content: ``,
        },
        {
          id: "prozpay-payoneer-fees",
          title: "Payoneer: Will I be charged for the Payoneer transfer?",
          content: ``,
        },
        {
          id: "prozpay-paypal-multiple-accounts",
          title:
            "PayPal: Is it okay to receive my payouts to different PayPal accounts occasionally?",
          content: ``,
        },
        {
          id: "prozpay-paypal-payment-reverse",
          title: "PayPal: I received a payment through PayPal but I'd like to reverse it.",
          content: ``,
        },
        {
          id: "prozpay-boostlingo-payout-amount",
          title:
            "Boostlingo payouts: How much is the amount that I should expect to receive in my account?",
          content: ``,
        },
        {
          id: "prozpay-boostlingo-payout-discrepancy",
          title:
            "Boostlingo payouts: The funds added to my ProZ*Pay account do not correspond to the amount earned.",
          content: ``,
        },
        {
          id: "prozpay-boostlingo-request-payout",
          title: "Boostlingo payouts: Can I request my payment in advance?",
          content: ``,
        },
        {
          id: "prozpay-interpreter-payouts",
          title: "Interpreter payouts: I did not receive my payment from my client.",
          content: ``,
        },
        {
          id: "prozpay-tax-copy-earnings",
          title: "Can you please help in obtaining a copy of my earnings for my taxes?",
          content: ``,
        },
        {
          id: "prozpay-invoice-payout",
          title: "Do I need to invoice the payment/payout?",
          content: ``,
        },
        {
          id: "prozpay-payment-request",
          title: "What is a payment request?",
          content: ``,
        },
        {
          id: "prozpay-request-payment-procedure",
          title: "How do I request for someone to pay me via ProZ*Pay?",
          content: ``,
        },
        {
          id: "prozpay-cancel-payment-request",
          title: "How do I cancel the payment request?",
          content: ``,
        },
        {
          id: "prozpay-payment-request-not-received",
          title: "My client did not receive my payment request, why?",
          content: ``,
        },
        {
          id: "prozpay-buy-proz-products",
          title:
            "Is it possible to buy Proz.com products (trainings/features/services) with my ProZ*Pay account earnings?",
          content: ``,
        },
        {
          id: "prozpay-membership-advantages",
          title: "What are the advantages of professional membership for ProZ*Pay payees?",
          content: ``,
        },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarLayout activeItem="ProZ*Pay" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <HeroSection breadcrumbs={["Help Center", "ProZ*Pay", "Payer/Payee"]} />

        {/* Content */}
        <div className="p-6" id="prozpay">
          <h2 className="text-2xl font-bold mb-6">ProZ*Pay</h2>
          <p className="mb-6">The fastest way to pay freelance language professionals</p>
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border rounded-md ${
                  activeAccordion === section.id
                    ? "border-primary bg-primary text-white"
                    : "border-primary bg-white text-gray-800"
                }`}
              >
                {/* Main Accordion */}
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full text-left p-4 rounded-md font-bold"
                >
                  {section.title}
                </button>
                {activeAccordion === section.id && (
                  <div className="p-4">
                    {section.content && (
                      <div dangerouslySetInnerHTML={{ __html: section.content }} className="p-6" />
                    )}
                    {section.children?.map((child) => (
                      <div
                        key={child.id}
                        className={`border rounded-md mb-2 ${
                          activeSubAccordion === child.id
                            ? "border-primary bg-primary text-white"
                            : "border-primary bg-white text-gray-800"
                        }`}
                      >
                        {/* Sub Accordion */}
                        <button
                          onClick={() => toggleSubAccordion(child.id)}
                          className="w-full text-left p-3 rounded-md font-medium"
                        >
                          {child.title}
                        </button>
                        {activeSubAccordion === child.id && (
                          <div
                            dangerouslySetInnerHTML={{ __html: child.content || "" }}
                            className="p-3 bg-gray-50 text-gray-800"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProZPayPage;
