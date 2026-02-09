"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "lucide-react";
import MusicCard from "@/components/MusicCard";
import { music } from "@/lib/data";

type TabId = "Soumi's Favs" | "Sarthak's Favs" | "Our Favs";

const tabs: { id: TabId; label: string }[] = [
  { id: "Soumi's Favs", label: "Soumi's" },
  { id: "Sarthak's Favs", label: "Sarthak's" },
  { id: "Our Favs", label: "Ours" },
];

export default function MusicPage() {
  const [activeTab, setActiveTab] = useState<TabId>("Our Favs");
  const filtered = music.filter((t) => t.category === activeTab);

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Music Note sticker - decorative near categories */}
      <motion.div
        className="absolute top-0 right-0 opacity-30 sm:opacity-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.3 }}
        aria-hidden
      >
        <Music className="w-12 h-12 sm:w-14 sm:h-14 text-blush-pink" />
      </motion.div>
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl text-rose-900">Our Jam</h1>
        <p className="text-rose-gold/80 mt-2">Songs that remind us of us</p>
      </motion.header>

      {/* Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 rounded-3xl text-sm font-medium ${
              activeTab === tab.id
                ? "text-creamy-white"
                : "text-deep-berry bg-creamy-white/80 border border-rose-gold/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab.id && (
              <motion.span
                className="absolute inset-0 rounded-3xl bg-rose-gold -z-10"
                layoutId="music-tab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence mode="wait">
          {filtered.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 25 }}
              layout
            >
              <MusicCard track={track} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          className="text-center text-rose-gold/80 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No tracks in this category yet.
        </motion.p>
      )}
    </div>
  );
}
