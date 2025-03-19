"use client";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
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

const ReviewDrawer = () => {
  const { updaterSection, showDrawerReview } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(setContentSliceBits({ bitToSet: "showDrawerReview", value: !showDrawerReview }));
  };
  return (
    <Sheet open={showDrawerReview}>
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
        <AddReview />
      </SheetContent>
    </Sheet>
  );
};

export default ReviewDrawer;
