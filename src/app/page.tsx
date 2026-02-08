"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Camera, Music, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import PhotoCard from "@/components/PhotoCard";
import MusicCard from "@/components/MusicCard";
import { photos, music, places } from "@/lib/data";

const HERO_TEXT = "To the most special person in my life...";

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.slice(0, 3);
  const displayMusic = music.slice(0, 3);

  useEffect(() => {
    const t = HERO_TEXT.length * 80 + 500;
    const id = setTimeout(() => setTypewriterDone(true), t);
    return () => clearTimeout(id);
  }, []);

  const next = () => setCarouselIndex((i) => (i + 1) % displayPhotos.length);
  const prev = () => setCarouselIndex((i) => (i - 1 + displayPhotos.length) % displayPhotos.length);

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero with typewriter */}
      <motion.section
        className="text-center py-8 sm:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex mb-6"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-rose-gold fill-soft-blush" />
        </motion.div>
        <h1 className="font-serif text-2xl sm:text-4xl text-deep-berry min-h-[1.2em]">
          <Typewriter text={HERO_TEXT} speed={80} />
        </h1>
        {typewriterDone && (
          <motion.p
            className="mt-4 text-rose-gold/90 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to our little corner of the world 💕
          </motion.p>
        )}
      </motion.section>

      {/* Our Photos - Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-deep-berry flex items-center gap-2">
            <Camera className="w-6 h-6 text-rose-gold" />
            Our Photos
          </h2>
          <Link href="/gallery">
            <motion.span
              className="text-rose-gold font-medium text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <PhotoCard photo={displayPhotos[carouselIndex]} index={0} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {displayPhotos.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`rounded-full h-2 transition-all ${i === carouselIndex ? "bg-rose-gold w-6" : "bg-rose-gold/40 w-2"}`}
                aria-label={`Go to photo ${i + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none sm:pointer-events-auto">
            <motion.button
              onClick={prev}
              className="rounded-full p-2 bg-creamy-white/80 backdrop-blur border border-rose-gold/20 shadow-lg text-deep-berry opacity-0 sm:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={next}
              className="rounded-full p-2 bg-creamy-white/80 backdrop-blur border border-rose-gold/20 shadow-lg text-deep-berry opacity-0 sm:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Our Jam */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-deep-berry flex items-center gap-2">
            <Music className="w-6 h-6 text-rose-gold" />
            Our Jam
          </h2>
          <Link href="/music">
            <motion.span
              className="text-rose-gold font-medium text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {displayMusic.map((track, i) => (
            <MusicCard key={track.id} track={track} index={i} />
          ))}
        </div>
      </motion.section>

      {/* Memories (Places) Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-deep-berry flex items-center gap-2">
            <MapPin className="w-6 h-6 text-rose-gold" />
            Memories
          </h2>
          <Link href="/places">
            <motion.span
              className="text-rose-gold font-medium text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
        <motion.div
          className="rounded-3xl bg-creamy-white/80 backdrop-blur-md border border-rose-gold/20 p-6 shadow-lg"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <p className="text-deep-berry/90">
            Our favorite spots and the moments we shared there...
          </p>
          <p className="text-rose-gold/80 text-sm mt-2">{places.length} special places</p>
        </motion.div>
      </motion.section>
    </div>
  );
}
