"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const EMOJIS = ["❤️", "💖", "✨"] as const;

function FloatingEmoji({
  emoji,
  delay,
  duration,
  startX,
  size,
}: {
  emoji: (typeof EMOJIS)[number];
  delay: number;
  duration: number;
  startX: number;
  size: number;
}) {
  return (
    <motion.span
      className="absolute pointer-events-none select-none"
      style={{
        left: `${startX}%`,
        bottom: "-2rem",
        fontSize: size,
        opacity: 0.7,
      }}
      animate={{
        y: ["0vh", "-105vh"],
        opacity: [0.7, 0.3],
        rotate: [0, 15, -10, 0],
      }}
      transition={{
        y: { duration, repeat: Infinity, delay, ease: "linear" },
        opacity: { duration, repeat: Infinity, delay },
        rotate: { duration: duration / 2, repeat: Infinity, delay, ease: "easeInOut" },
      }}
    >
      {emoji}
    </motion.span>
  );
}

export default function FloatingHearts() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const items = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[i % EMOJIS.length],
      delay: parseFloat((Math.random() * 8).toFixed(2)),
      duration: parseFloat((12 + Math.random() * 10).toFixed(2)),
      startX: parseFloat((Math.random() * 100).toFixed(2)),
      size: parseFloat((16 + Math.random() * 20).toFixed(2)),
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {hasMounted && items.map((item) => (
        <FloatingEmoji key={item.id} {...item} />
      ))}
    </div>
  );
}
