"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Checkbox } from "@/components/shadcn/checkbox";

interface PersonalPrefsProps {
  category?: string;
  prefName: string;
  value: "y" | "n";
  entityId: number;
  defaultSetting?: string;
  label: string;
}

const PersonalPrefCheckbox: React.FC<PersonalPrefsProps> = ({
  category,
  prefName,
  value,
  entityId,
  defaultSetting,
  label,
}) => {
  const [preference, setPreference] = useState<"y" | "n">("n");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPreference(value);
  }, []);

  const handlePreference = async (value: "y" | "n"): Promise<void> => {
    setLoading(true);
    setPreference(value);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/preferences?entityId=${entityId}`,
        {
          prefName,
          value,
          category,
          defaultSetting,
        },
        { headers: { "Content-Type": "application/json", Accept: "application/json" } }
      );
      if (response.data) {
        toast.success("Preference updated successfully!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.success("Preference update failed!");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        disabled={loading}
        id={prefName}
        checked={preference === "y"}
        onCheckedChange={(checked) => handlePreference(checked ? "y" : "n")}
      />
      <label
        htmlFor={prefName}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default PersonalPrefCheckbox;
