"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/shadcn/dialog";
import { Trash2 } from "lucide-react";

type Popup = {
  promotion_id: number;
  title: string;
  message: string;
  video_url?: string;
  image_url?: string;
};

const PromotionsPage = () => {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [newPopup, setNewPopup] = useState({
    title: "",
    message: "",
    video_url: "",
    image_url: "",
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentPopup, setCurrentPopup] = useState<Popup | null>(null);

  // Fetch all popups
  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    try {
      const response = await fetch("/next/api/admin/popups", { method: "GET" });
      const data = await response.json();
      setPopups(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching pop-ups:", error);
    }
  };

  const handleCreateOrUpdatePopup = async () => {
    try {
      //console.log("Creating/Updating popup...");
      const method = isEditMode ? "PUT" : "POST";
      //console.log("Method:", method);
      const endpoint = "/next/api/admin/popups";
      const body = isEditMode ? { ...currentPopup } : { ...newPopup };

      //console.log("Body:", body);
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      //console.log("Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "An error occurred while updating the popup");
      }

      // Reset form and fetch updated list
      setNewPopup({ title: "", message: "", video_url: "", image_url: "" });
      setIsEditMode(false);
      setCurrentPopup(null);
      fetchPopups();
    } catch (error) {
      console.error("Error creating/updating popup:", error);
    }
  };

  const handleDeletePopup = async (promotion_id: number) => {
    try {
      await fetch("/next/api/admin/popups", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ promotion_id }),
      });
      fetchPopups();
    } catch (error) {
      console.error("Error deleting pop-up:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Popups</h1>

      {/* Button to trigger the "Create New Popup" modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New Popup</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Popup" : "Create New Popup"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Title"
              value={isEditMode && currentPopup ? currentPopup.title : newPopup.title}
              onChange={(e) => {
                if (isEditMode && currentPopup) {
                  setCurrentPopup({ ...currentPopup, title: e.target.value });
                } else {
                  setNewPopup({ ...newPopup, title: e.target.value });
                }
              }}
            />
            <Textarea
              placeholder="Message"
              value={isEditMode && currentPopup ? currentPopup.message : newPopup.message}
              onChange={(e) => {
                if (isEditMode && currentPopup) {
                  setCurrentPopup({ ...currentPopup, message: e.target.value });
                } else {
                  setNewPopup({ ...newPopup, message: e.target.value });
                }
              }}
            />
            <Input
              placeholder="Video URL"
              value={isEditMode && currentPopup ? currentPopup.video_url || "" : newPopup.video_url}
              onChange={(e) => {
                if (isEditMode && currentPopup) {
                  setCurrentPopup({ ...currentPopup, video_url: e.target.value });
                } else {
                  setNewPopup({ ...newPopup, video_url: e.target.value });
                }
              }}
            />
            <Input
              placeholder="Image URL"
              value={isEditMode && currentPopup ? currentPopup.image_url || "" : newPopup.image_url}
              onChange={(e) => {
                if (isEditMode && currentPopup) {
                  setCurrentPopup({ ...currentPopup, image_url: e.target.value });
                } else {
                  setNewPopup({ ...newPopup, image_url: e.target.value });
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleCreateOrUpdatePopup}>
              {isEditMode ? "Update Popup" : "Create Popup"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Displaying Existing Popups */}
      <div className="mt-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-4">Title</th>
              <th className="border-b p-4">Message</th>
              <th className="border-b p-4">Video URL</th>
              <th className="border-b p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {popups.map((popup) => (
              <tr key={popup.promotion_id}>
                <td className="border-b p-4">{popup.title}</td>
                <td className="border-b p-4">{popup.message}</td>
                <td className="border-b p-4">{popup.video_url || "N/A"}</td>
                <td className="border-b p-4 flex items-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setCurrentPopup(popup);
                          setIsEditMode(true);
                        }}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Popup</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Title"
                          value={currentPopup?.title || ""}
                          onChange={(e) =>
                            setCurrentPopup((prev) => prev && { ...prev, title: e.target.value })
                          }
                        />
                        <Textarea
                          placeholder="Message"
                          value={currentPopup?.message || ""}
                          onChange={(e) =>
                            setCurrentPopup((prev) => prev && { ...prev, message: e.target.value })
                          }
                        />
                        <Input
                          placeholder="Video URL"
                          value={currentPopup?.video_url || ""}
                          onChange={(e) =>
                            setCurrentPopup(
                              (prev) => prev && { ...prev, video_url: e.target.value }
                            )
                          }
                        />
                        <Input
                          placeholder="Image URL"
                          value={currentPopup?.image_url || ""}
                          onChange={(e) =>
                            setCurrentPopup(
                              (prev) => prev && { ...prev, image_url: e.target.value }
                            )
                          }
                        />
                      </div>
                      <DialogFooter>
                        <Button onClick={handleCreateOrUpdatePopup}>Update</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Delete Button */}
                  <Button
                    variant="destructive"
                    onClick={() => handleDeletePopup(popup.promotion_id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionsPage;
