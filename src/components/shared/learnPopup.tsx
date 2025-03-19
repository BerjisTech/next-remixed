import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Popup {
  promotion_id: number;
  title: string;
  message: string;
  video_url?: string;
  image_url?: string;
}

const LearnPopup: React.FC = () => {
  const [popup, setPopup] = useState<Popup | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // 1. Check Session Storage
    const popupSeen = sessionStorage.getItem("popupSeen");
    if (popupSeen) {
      setIsVisible(false);
      return;
    }

    // 2. Fetch pop-up if not seen yet
    const fetchPopup = async () => {
      try {
        const response = await fetch("/next/api/admin/popups", { method: "GET" });
        if (!response.ok) {
          throw new Error(`Error fetching pop-up: ${response.statusText}`);
        }
        const data = await response.json();
        setPopup(data.length > 0 ? data[0] : null);
      } catch (error) {
        console.error("Error fetching pop-up:", error);
      }
    };

    fetchPopup();
  }, []);

  const handleClose = () => {
    // Mark pop-up as seen in Session Storage
    sessionStorage.setItem("popupSeen", "true");
    setIsVisible(false);
  };

  if (!popup || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="dark:bg-black bg-white p-6 rounded-lg shadow-lg w-[70%] h-[70%] max-w-[100vw] max-h-[100vh] overflow-auto relative">
        <button
          className="absolute top-2 right-2 text-grey-700 dark:text-white text-2xl font-bold"
          onClick={handleClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">{popup.title}</h2>
        <p className="mb-4">{popup.message}</p>

        {popup.video_url && (
          <iframe
            src={popup.video_url}
            width="100%"
            height="70%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        )}

        {popup.image_url && (
          <Image
            src={popup.image_url}
            alt="Popup Banner"
            className="w-full mt-4 rounded-lg"
            width={500}
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default LearnPopup;
