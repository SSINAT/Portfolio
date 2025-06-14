"use client";

import { useEffect, useState } from "react";

interface TextPart {
  text: string;
  className?: string;
}

interface AnimatedTextProps {
  parts: TextPart[];
  className?: string;
}

export default function AnimatedText({
  parts,
  className = "",
}: AnimatedTextProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fullText = parts.map((part) => part.text).join("");

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 40); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [charIndex, fullText]);

  // Build visible text with style preserved
  let remaining = charIndex;
  const renderedParts = parts.map((part, index) => {
    if (remaining <= 0) return null;

    const visibleText = part.text.slice(0, remaining);
    remaining -= visibleText.length;

    return (
      <span key={index} className={part.className}>
        {visibleText}
      </span>
    );
  });

  return (
    <span className={className}>
      {renderedParts}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}
