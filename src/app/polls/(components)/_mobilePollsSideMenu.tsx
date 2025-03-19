"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import _pollsSideMenu from "@/app/polls/(components)/_pollsSideMenu";

export default function PollsMobileSideMenu() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      {/* Menu Button (Visible on Mobile) */}
      <div className="flex items-center justify-center p-5 bg-secondary rounded-full h-12 w-12 md:hidden shadow-lg">
        <div>
          <Menu
            className="text-primary dark:text-primary-50 cursor-pointer"
            onClick={() => setIsSheetOpen(true)}
          />
        </div>
      </div>

      {/* Sliding Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Polls menu</SheetTitle>
          </SheetHeader>
          <_pollsSideMenu />
        </SheetContent>
      </Sheet>
    </>
  );
}
