import React from "react";
import Image from "next/image";

const ResultCard: React.FC<any> = ({ entityId, title, description, imageUrl }) => {
  return (
    <div className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden w-1/5 min-w-[200px] h-80 transform transition-transform hover:scale-105 dark:bg-black border border-gray-300">
      <Image
        width="20"
        height="20"
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover p-4"
      />
      <div className="p-4 w-full">
        <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
