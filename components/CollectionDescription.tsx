"use client";

import { useState, useRef, useEffect } from "react";

function CollectionDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * 3;
      setShowButton(el.scrollHeight > maxHeight + 1);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [description, expanded]);

  return (
    <div className="mt-4 w-full text-center mx-auto max-w-6xl">
      <p
        ref={textRef}
        className={`text-sm md:text-base text-foreground/70 leading-relaxed transition-all ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>

      {showButton && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-xs tracking-wide uppercase text-primary/80 hover:text-primary"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default CollectionDescription;