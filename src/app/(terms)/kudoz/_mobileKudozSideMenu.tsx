"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import KudozSideMenu from "@/app/(terms)/kudoz/_kudozSideMenu";

export default function KudoZMobileSideMenu() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      {/* Menu Button (Visible on Mobile) */}
      <div className="h-6 w-6 md:hidden">
        <Menu className="text-primary cursor-pointer" onClick={() => setIsSheetOpen(true)} />
      </div>

      {/* Sliding Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <KudozSideMenu />
        </SheetContent>
      </Sheet>
    </>
  );
}
