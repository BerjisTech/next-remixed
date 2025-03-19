import React, { useState } from "react";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import { toast } from "sonner";
import { Pencil, Check, X } from "lucide-react";

interface EditableFieldProps {
  label: string;
  value: string;
  name: string;
  businessId: number;
  type?: "text" | "url" | "tel" | "textarea";
  onUpdate: (value: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  name,
  businessId,
  type = "text",
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/businesses/${businessId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [name]: currentValue }),
      });

      if (!response.ok) throw new Error("Failed to update field");

      toast.success(`${label} updated successfully`);
      onUpdate(currentValue);
      setIsEditing(false);
    } catch (error) {
      toast.error(`Failed to update ${label.toLowerCase()}`);
      setCurrentValue(value); // Reset to original value
    }
  };

  const handleCancel = () => {
    setCurrentValue(value);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="group relative flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <div className="flex items-center gap-2">
          <p className="mt-1 text-gray-900 dark:text-white">{value}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="opacity-0 group-hover:opacity-100 transition-opacity ml-2"
          >
            <Pencil className="h-4 w-4 text-primary" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <div className="flex items-center gap-2">
        {type === "textarea" ? (
          <Textarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="flex-1"
            rows={4}
          />
        ) : (
          <Input
            type={type}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="flex-1"
          />
        )}
        <div className="flex gap-1">
          <button onClick={handleSave} className="p-1 hover:bg-primary/10 rounded">
            <Check className="h-4 w-4 text-primary" />
          </button>
          <button onClick={handleCancel} className="p-1 hover:bg-destructive/10 rounded">
            <X className="h-4 w-4 text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableField;
