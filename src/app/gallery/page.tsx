"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoCard from "@/components/PhotoCard";
import LoveLetterIcon from "@/components/LoveLetterIcon";
import { photos } from "@/lib/data";

type SortOption = "newest" | "oldest";

export default function GalleryPage() {
  const [sort, setSort] = useState<SortOption>("newest");
  const [locationFilter, setLocationFilter] = useState<string>("all");

  const locations = useMemo(() => Array.from(new Set(photos.map((p) => p.location))), [photos]);

  const filteredAndSorted = useMemo(() => {
    let list = photos.filter(
      (p) => locationFilter === "all" || p.location === locationFilter
    );
    list = [...list].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sort === "newest" ? db - da : da - db;
    });
    return list;
  }, [sort, locationFilter]);

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Love Letter sticker - decorative corner */}
      <motion.div
        className="absolute top-0 right-0 opacity-30 sm:opacity-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.3 }}
        aria-hidden
      >
        <LoveLetterIcon className="w-12 h-12 sm:w-14 sm:h-14 text-blush-pink" />
      </motion.div>
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl text-rose-900">Our Gallery</h1>
        <p className="text-rose-gold/80 mt-2">Every moment with you</p>
      </motion.header>

      {/* Sort / Filter bar */}
      <motion.div
        className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-3xl bg-creamy-white/80 backdrop-blur-md border border-rose-gold/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="text-deep-berry font-medium text-sm">Sort:</span>
        <div className="flex gap-2">
          {(["newest", "oldest"] as const).map((opt) => (
            <motion.button
              key={opt}
              onClick={() => setSort(opt)}
              className={`px-4 py-2 rounded-2xl text-sm font-medium capitalize ${
                sort === opt
                  ? "bg-rose-gold text-creamy-white"
                  : "bg-soft-blush/30 text-deep-berry border border-rose-gold/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {opt === "newest" ? "Newest first" : "Oldest first"}
            </motion.button>
          ))}
        </div>
        <span className="text-deep-berry font-medium text-sm ml-4 sm:ml-0">Location:</span>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-4 py-2 rounded-2xl bg-soft-blush/30 border border-rose-gold/20 text-deep-berry text-sm font-medium focus:outline-none focus:ring-2 focus:ring-rose-gold/50"
        >
          <option value="all">All</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Masonry grid with layout animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredAndSorted.map((photo, index) => (
            <motion.div
              key={`${photo.id}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <PhotoCard photo={photo} layout index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filteredAndSorted.length === 0 && (
        <p className="text-center text-rose-gold/80 py-12">No photos found for this location.</p>
      )}
    </div>
  );
}
