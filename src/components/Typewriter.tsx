"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  fadeIn?: "letter" | "word" | "none";
}

export default function Typewriter({
  text,
  speed = 80,
  className = "",
  fadeIn = "letter",
}: TypewriterProps) {
  const [displayLength, setDisplayLength] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayLength(0);
    setDone(false);
    const id = setInterval(() => {
      setDisplayLength((prev) => {
        if (prev >= text.length) {
          setDone(true);
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  const display = text.slice(0, displayLength);

  if (fadeIn === "letter") {
    const segments = display.split(/(\s+)/);
    return (
      <span className={className}>
        {segments.map((part, i) =>
          /\s+/.test(part) ? (
            <span key={i}>{part === " " ? "\u00A0" : part}</span>
          ) : (
            <span key={i} className="whitespace-nowrap inline">
              {part.split("").map((char, j) => (
                <motion.span
                  key={j}
                  className="inline-block"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          )
        )}
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="inline-block w-0.5 h-[1em] align-bottom bg-rose-gold ml-0.5"
          />
        )}
      </span>
    );
  }

  if (fadeIn === "word") {
    const words = display.split(/(\s+)/);
    return (
      <span className={className}>
        {words.map((part, i) =>
          /\s+/.test(part) ? (
            <span key={i}>{part === " " ? "\u00A0" : part}</span>
          ) : (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {part}
            </motion.span>
          )
        )}
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="inline-block w-0.5 h-[1em] align-bottom bg-rose-gold ml-0.5"
          />
        )}
      </span>
    );
  }

  return (
    <span className={className}>
      {display}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-0.5 h-[1em] align-bottom bg-rose-gold ml-0.5"
        />
      )}
    </span>
  );
}
