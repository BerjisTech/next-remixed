"use client";
import { BadgeInfo, X } from "lucide-react";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/popover";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useSession } from "next-auth/react";
import { Button } from "@/components/shadcn/button";
import clsx from "clsx";
import { getRedirectBaseUrl } from "@/utils/helpers";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { Separator } from "@/components/shadcn/separator";
import Link from "next/link";

// Url map key:new-site value:old-site url
const urlMap: Record<string, string> = {
  // '/': '/',
  // Membership pages
  // '/membership/professional': '/professional-membership',
  // '/membership/business': '/business-membership',
  // Help
  // '/help-center': '/help',
  // '/site-team': '/help',
  // About
  // '/about/overhaul': '/about',
  // '/about': '/about',
  // Testimonials
  // '/testimonials': '/testimonials',
  // '/reviews': '/wwa',
  // Kudoz
  // '/kudoz': '/kudoz',
  // Glossaries
  // '/glossaries': '/personal-glossaries',
  // Community
  // '/community/women-in-translation': '/womenintranslation',
  // ProzPay
  // '/prozpay/about/payer': '/pay/about',
  // '/prozpay/about/payee': '/pay/about',
  // '/prozpay/payer-dashboard': '/pay/dashboard',
  // '/prozpay/pay': '/pay',
  // '/prozpay/bulk': '/pay/upload',
  // '/prozpay/getpaid': '/pay/request',
  // '/prozpay/payee-dashboard': '/pay/account',
  // Jobs
  // '/opportunities': '/jobs',
  // '/job-posting': '/post-translation-job',
  // '/recruit': '/lists',
  // BB
  // '/outsourcers': '/blueboard',
  // '/business/open-positions': '/blueboard/?sp_mode=application',
  // Find
  // '/providers': '/find',
  // Businss
  // '/providers/lscs': '/business',
  // Invoices
  // '/invoicing': '/invoice',
  // Pools
  // '/providers/translators': '/pools/certified-pros',
  // '/providers/interpreters': '/pools/interpreters',
  // '/providers/subtitlers': '/pools/subtitlers',
};

const FloatingBtn = () => {
  const { showFeedbackModal } = useAppSelector((state) => state.content);
  let pathname = usePathname() ?? "";
  const dispatch = useAppDispatch();
  const { data, status } = useSession();
  const [showHelp, setShowHelp] = useState(false);

  if (pathname.includes("profile")) {
    const profileUrlArr = pathname.split("/");
    const profileUrl = "/profile" + (profileUrlArr[2] ? "/" + profileUrlArr[2] : "");
    urlMap[pathname] = profileUrl;
  }
  const redirectUrl = urlMap[pathname] ? getRedirectBaseUrl() + urlMap[pathname] : "/";

  return (
    <React.Fragment>
      {status === "authenticated" && urlMap[pathname] && (
        <Popover open={showHelp} onOpenChange={setShowHelp}>
          <PopoverTrigger asChild>
            <div
              className={clsx(
                "fixed bottom-6 left-6 bg-blue-300 shadow-custom rounded-[50%] min-h-14 min-w-14 flex items-center justify-center cursor-pointer z-999"
              )}
              onClick={() => {
                setShowHelp(true);
              }}
            >
              <BadgeInfo className="h-8 w-8 text-white" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 ml-5 rounded-xl border border-blue-300"
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex justify-between items-center relative">
              <h3 className="text-lg font-semibold">Hi {data?.user.site_name?.trim()}!</h3>
              <div className="absolute right-0 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X onClick={() => setShowHelp(false)} className="h-4 w-4 cursor-pointer" />
                <span className="sr-only">Close</span>
              </div>
            </div>
            <Separator className="my-3" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You are exploring the prototype of the ProZ website, which is still under development.
              We value your feedback and would love to hear your thoughts on how we can make it
              better!
            </p>
            <Separator className="my-3" />
            <div className="mt-4 flex justify-between items-center gap-5">
              <Link href={redirectUrl}>
                <span className="text-primary hover:underline text-sm cursor-pointer">
                  Return to classic site
                </span>
              </Link>
              <Button
                onClick={() =>
                  dispatch(
                    setContentSliceBits({
                      bitToSet: "showFeedbackModal",
                      value: !showFeedbackModal,
                    })
                  )
                }
              >
                Leave feedback
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </React.Fragment>
  );
};

export default FloatingBtn;
