"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

interface MemberAvatarProps {
  name: string;
  profilePicture?: string;
  isOnline?: boolean;
  size?: "sm" | "md" | "lg";
}

const MemberAvatar: React.FC<MemberAvatarProps> = ({
  name,
  profilePicture,
  isOnline,
  size = "md",
}) => {
  const [imgError, setImgError] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Reset error state when profile picture changes
    setImgError(false);

    // Set image URL if profile picture exists
    if (profilePicture && profilePicture.trim() !== "") {
      setImageUrl(profilePicture);
      console.log("Setting profile picture for", name, ":", profilePicture);
    }
  }, [profilePicture, name]);

  const sizeClasses = {
    sm: "w-[40px] h-[40px] text-sm",
    md: "w-[60px] h-[60px] text-lg",
    lg: "w-[80px] h-[80px] text-xl",
  };

  const onlineIndicatorClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };
  const handleImageError = () => {
    console.error(`Failed to load image for ${name}:`, imageUrl);
    setImgError(true);
  };

  const showImage = imageUrl && !imgError;

  return (
    <div className="relative flex-shrink-0">
      <div className={`relative ${sizeClasses[size]}`}>
        {showImage ? (
          <Image
            src={imageUrl}
            alt={`${name}'s profile`}
            fill
            className="rounded-full border-2 border-secondary object-cover"
            onError={handleImageError}
            unoptimized // Add this if having issues with image optimization
            priority // Add this for images above the fold
          />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-secondary bg-primary flex items-center justify-center">
            <span className="font-semibold text-white">{getInitials(name)}</span>
          </div>
        )}
        {isOnline && (
          <span
            className={`absolute bottom-0 right-0 ${onlineIndicatorClasses[size]} bg-green-500 rounded-full border-2 border-white`}
            aria-label="Online"
          />
        )}
      </div>
    </div>
  );
};

export default MemberAvatar;
