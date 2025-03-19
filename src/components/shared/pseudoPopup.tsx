"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import { useProfileHook } from "@/hooks/useProfileHook";
import { setNavigationSliceBits } from "@/lib/store/features/navigation/navigationSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useState } from "react";
import { PSEUDO_USERS } from "@/constants/common";
import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shadcn/select";

interface Option {
  key: string;
  value: string;
}

export function PseudoUserPopup() {
  const dispatch = useAppDispatch();
  const { isPseudo } = useAppSelector((state) => state.profile);
  const { startPseudoSession, stopPseudoSession } = useProfileHook();
  const [searchQuery, setSearchQuery] = useState("");

  const pseudoFromSelect = (event: any) => {
    const selectedUserId = event.target.value;
    // Handle user selection logic
  };

  const searchUserByNames = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Fetch or filter user search results based on query
    // Mock data for user search results
    const results = [
      { contact_first: "Yolanda", contact_last: "Broad" },
      { contact_first: "Natalie", contact_last: "" },
    ];
  };

  const handleSelectedOptionChange = (option: string): void => {
    startPseudoSession(parseInt(option));
  };

  const startPseudoFromSearchResults = (event: React.KeyboardEvent): void => {
    if (event.key.toLocaleLowerCase() === "enter") {
      const pseudoIdInput = event.target as HTMLInputElement;
      const pseudoId = parseInt(pseudoIdInput.value);
      if (!isNaN(pseudoId)) {
        startPseudoSession(pseudoId);
      }
    }
  };
  const { showPseudoPopup } = useAppSelector((state) => state.navigation);
  return (
    <Dialog
      open={showPseudoPopup}
      onOpenChange={(val) => {
        dispatch(setNavigationSliceBits({ bitToSet: "showPseudoPopup", value: val }));
      }}
    >
      <DialogContent
        className="sm:max-w-[425px] h-[400px] bg-accent text-center"
        onInteractOutside={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">Edit profile</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
          <span className="font-semibold text-primary">Impersonate a user</span>
          {isPseudo && (
            <div
              onClick={stopPseudoSession}
              role="button"
              className="bg-red-500 font-semibold text-white rounded-lg text-center w-full py-3"
            >
              Stop Pseudo
            </div>
          )}
          <div className="text-start">
            <Label className="text-dark-blue-hue">Select user:</Label>
            <Select
              onValueChange={(option) => handleSelectedOptionChange(option)}
              name="pseudo_eid"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select pseudo user" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(PSEUDO_USERS).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-start">
            <Label className="text-dark-blue-hue">Enter entity id:</Label>
            <Input
              type="number"
              onKeyDown={(e) => {
                startPseudoFromSearchResults(e);
              }}
              placeholder="Entity id of pseudo user"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
