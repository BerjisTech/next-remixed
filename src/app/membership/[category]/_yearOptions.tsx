import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/shadcn/badge";
import { Separator } from "@/components/shadcn/separator";
import { getRedirectBaseUrl } from "@/utils/helpers";

export function MultiYearOptions({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="lg:min-w-[50rem]">
        <DialogHeader>
          <DialogTitle className="text-center">Multi-year membership options</DialogTitle>
          <DialogDescription className="text-center">
            The following options are available for purchasing ProZ.com membership for multi-year
            periods.
          </DialogDescription>
        </DialogHeader>
        <Card>
          <CardHeader className="bg-primary rounded-t-lg p-3">
            <CardTitle className="text-lg font-semibold bg-primary text-white">
              Plus package multi-year options:
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Link
              href={getRedirectBaseUrl() + "/store/30497"}
              className="hover:bg-primary-100 dark:hover:bg-black flex flex-row justify-between items-center p-3"
            >
              <span>3 years, Plus package: $510</span>
              <Badge>Buy now</Badge>
            </Link>
            <Separator />
            <Link
              href={getRedirectBaseUrl() + "/store/30500"}
              className="hover:bg-primary-100 dark:hover:bg-black flex flex-row justify-between items-center p-3"
            >
              <span>5 years, Plus package: $820</span>
              <Badge>Buy now</Badge>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="bg-primary rounded-t-lg p-3">
            <CardTitle className="text-lg font-semibold bg-primary text-white">
              Standard package multi-year options:
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Link
              href={getRedirectBaseUrl() + "/store/33"}
              className="hover:bg-primary-100 dark:hover:bg-black flex flex-row justify-between items-center p-3"
            >
              <span>3 years, Standard package: $330</span>
              <Badge>Buy now</Badge>
            </Link>
            <Separator />
            <Link
              href={getRedirectBaseUrl() + "/store/34"}
              className="hover:bg-primary-100 dark:hover:bg-black flex flex-row justify-between items-center p-3"
            >
              <span>5 years, Standard package: $500</span>
              <Badge>Buy now</Badge>
            </Link>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
