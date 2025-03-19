import { useState } from "react";

interface ReadMoreProps {
  text: string;
  amountOfWords?: number;
}

export const ReadMore = ({ text, amountOfWords = 36 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(" ") : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: any) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span className={`${!isExpanded && "hidden"}`} aria-hidden={!isExpanded}>
            {endText}
          </span>
          <span
            className="text-violet-400 ml-2"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </span>
        </>
      )}
    </p>
  );
};
