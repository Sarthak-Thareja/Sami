"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 80, className = "" }: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplay("");
    setDone(false);
    const id = setInterval(() => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

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
