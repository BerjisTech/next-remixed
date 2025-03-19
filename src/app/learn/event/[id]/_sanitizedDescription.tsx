"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

const SanitizedDescription = ({ description }: { description: string }) => {
  const [sanitizedHTML, setSanitizedHTML] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sanitized = DOMPurify.sanitize(description);
      setSanitizedHTML(sanitized);
    }
  }, [description]);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} className="sanitized-description" />
  );
};

export default SanitizedDescription;
