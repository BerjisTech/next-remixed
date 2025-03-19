import React, { useState } from "react";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "react-share";

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Copy the URL to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset the copy state after 2 seconds
  };

  return (
    <div className="p-6 bg-white dark:bg-dark rounded-lg shadow-lg max-w-md mx-auto">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4 text-center">Share this page</h2>

      {/* URL Input Section */}
      <div className="flex items-center border border-grey-300 rounded-lg overflow-hidden">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-grow px-4 py-2 text-grey-800 dark:text-white bg-grey-100 dark:bg-grey-800 outline-none"
        />
        <button
          onClick={handleCopy}
          className="bg-primary text-white px-4 py-2 font-medium hover:bg-secondary transition"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-4">
        <FacebookShareButton url={`${url}?quote=${encodeURIComponent(title)}`} hashtag="#MyHashtag">
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
