"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../shadcn/button";
import ProzTooltip from "../prozTooltip";
import axios from "axios";
import { toast } from "sonner";
import { Spin } from "../../shadcn/spin";

interface PersonalPrefsProps {
  category?: string;
  prefName: string;
  value: "y" | "n";
  entityId: number;
  defaultSetting?: string;
}

const PersonalPrefs: React.FC<PersonalPrefsProps> = ({
  category,
  prefName,
  value,
  entityId,
  defaultSetting,
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
    <div>
      <ProzTooltip
        message={
          <div>
            <p>Toggle visibility</p>
            <p>Current visibility : {preference === "y" ? "Visible" : "Hidden"}</p>
          </div>
        }
      >
        {preference === "y" ? (
          <Button size="icon" onClick={() => handlePreference("n")} disabled={loading}>
            {loading ? <Spin size="sm" /> : <Eye />}
          </Button>
        ) : (
          <Button size="icon" onClick={() => handlePreference("y")} disabled={loading}>
            {loading ? <Spin size="sm" /> : <EyeOff />}{" "}
          </Button>
        )}
      </ProzTooltip>
    </div>
  );
};

export default PersonalPrefs;
