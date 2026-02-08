"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

const STORAGE_KEY = "valentine-unlocked";

function getRandomPosition() {
  const padding = 120;
  const maxX = typeof window !== "undefined" ? window.innerWidth - padding : 300;
  const maxY = typeof window !== "undefined" ? window.innerHeight - padding : 200;
  return {
    x: Math.random() * (maxX - padding) + padding / 2,
    y: Math.random() * (maxY - padding) + padding / 2,
  };
}

export default function ValentineModal() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [initialNoPos, setInitialNoPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setIsUnlocked(true);
    setInitialNoPos({
      x: window.innerWidth / 2 + 90,
      y: window.innerHeight / 2 + 55,
    });
  }, []);

  const handleNoHover = useCallback(() => {
    const pos = getRandomPosition();
    setNoButtonPos(pos);
  }, []);

  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = { origin: { y: 0.6 }, colors: ["#ffc0cb", "#b76e79", "#722f37", "#fff8f5"] };
    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const handleYesClick = useCallback(() => {
    triggerConfetti();
    setIsUnlocked(true);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "true");
  }, [triggerConfetti]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-berry/30 backdrop-blur-sm p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-3xl bg-creamy-white/95 backdrop-blur-md shadow-2xl border border-rose-gold/20 p-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            exit={{ scale: 1.15, opacity: 0, transition: { duration: 0.4 } }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-flex mb-4"
            >
              <Heart className="w-14 h-14 text-rose-gold fill-soft-blush" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-deep-berry mb-2">
              Will you be my valentine?
            </h2>
            <p className="text-rose-gold/90 text-sm mb-8">Say yes and unlock the magic ✨</p>

            <div className="flex flex-wrap items-center justify-center gap-4 relative min-h-[48px]">
              <motion.button
                onClick={handleYesClick}
                className="px-8 py-3 rounded-3xl bg-rose-gold text-creamy-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                Yes!
              </motion.button>

              {initialNoPos && (
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="fixed px-6 py-2.5 rounded-3xl bg-deep-berry/10 text-deep-berry font-medium border border-rose-gold/30 z-[101]"
                  style={{ transform: "translate(-50%, -50%)" }}
                  initial={false}
                  animate={{
                    left: (noButtonPos ?? initialNoPos).x,
                    top: (noButtonPos ?? initialNoPos).y,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  whileTap={{ scale: 0.95 }}
                >
                  No
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
