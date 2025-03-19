import { ProzUser } from "@/interfaces/account";
import React from "react";

export default function MoreServices({ user }: { user: ProzUser }) {
  return (
    <div className="mt-5 flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[9px] bg-accent">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-primary">
        Here we'll show extra services offered
      </p>
    </div>
  );
}
