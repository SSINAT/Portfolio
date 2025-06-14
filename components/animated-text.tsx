"use client";

import { useEffect, useState } from "react";

interface TextPart {
  text: string;
  className?: string;
}

interface AnimatedTextProps {
  parts: TextPart[];
  className?: string;
  typingSpeed?: number; // Speed in ms per character
  repeatInterval?: number; // Interval in ms for animation repeat
}

export default function AnimatedText({
  parts,
  className = "",
  typingSpeed = 40, // Default typing speed
  repeatInterval = 5000, // Default 5 seconds repeat
}: AnimatedTextProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [cycle, setCycle] = useState(0); // Track animation cycles for reset

  const fullText = parts.map((part) => part.text).join("");

  useEffect(() => {
    if (charIndex < fullText.length) {
      // Typing animation
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Text complete, wait for repeat
      setIsComplete(true);
      const resetTimeout = setTimeout(() => {
        setCharIndex(0);
        setIsComplete(false);
        setCycle((prev) => prev + 1); // Increment cycle for smooth reset
      }, repeatInterval - fullText.length * typingSpeed); // Adjust for typing duration

      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, fullText, typingSpeed, repeatInterval]);

  // Build visible text with style preserved
  let remaining = charIndex;
  const renderedParts = parts.map((part, index) => {
    if (remaining <= 0) return null;

    const visibleText = part.text.slice(0, remaining);
    remaining -= visibleText.length;

    return (
      <span key={`${index}-${cycle}`} className={part.className}>
        {visibleText}
      </span>
    );
  });

  return (
    <div className="min-h-[120px]">
      <span className={className}>
        {renderedParts}
        {!isComplete && <span className="animate-pulse">|</span>}
      </span>
    </div>
  );
}