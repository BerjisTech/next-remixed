"use client";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";
import ProfileUpdaterGender from "./_profileUpdaterGender";
import ProfileUpdaterIdentity from "./_profileUpdaterIdentity";
import ProfileUpdaterTagline from "./_profileUpdaterTagline";
import { ProzUser } from "@/interfaces/account";
import ProfileUpdaterBio from "./_profileUpdaterBio";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/shadcn/sheet";
import { X } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import AddReview from "@/app/reviews/_addReview";

const ProfileUpdaterDrawer = ({ user }: { user: ProzUser }) => {
  const { updaterSection, showDrawerProfile } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(setContentSliceBits({ bitToSet: "showDrawerProfile", value: !showDrawerProfile }));
  };
  return (
    <Sheet open={showDrawerProfile}>
      <SheetContent className="min-w-[50rem] sm:w-[540px] overflow-auto">
        <SheetHeader>
          <SheetTitle className="flex flex-row justify-between items-center">
            <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-primary capitalize">
              {updaterSection.split("_").join(" ")}
            </span>
            <X
              className="cursor-pointer"
              size="20"
              onClick={() => {
                toggleDrawer();
              }}
            />
          </SheetTitle>
          <SheetDescription>
            {/* This action cannot be undone. This will permanently delete your account */}
            {/* and remove your data from our servers. */}
          </SheetDescription>
        </SheetHeader>
        <Separator className="mb-5" />
        {updaterSection.toLowerCase() === "gender" && <ProfileUpdaterGender />}
        {updaterSection.toLowerCase() === "identity" && <ProfileUpdaterIdentity user={user} />}
        {updaterSection.toLowerCase() === "tagline_&_seo" && <ProfileUpdaterTagline user={user} />}
        {updaterSection.toLowerCase() === "bio" && <ProfileUpdaterBio user={user} />}
        {updaterSection.toLowerCase() === "review" && <AddReview />}
      </SheetContent>
    </Sheet>
  );
};

export default ProfileUpdaterDrawer;
