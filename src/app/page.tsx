"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Camera, Music, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import PhotoCard from "@/components/PhotoCard";
import MusicCard from "@/components/MusicCard";
import LoveLetterIcon from "@/components/LoveLetterIcon";
import ValentineModal from "@/components/ValentineModal";
import { photos, music, places } from "@/lib/data";

const HERO_TEXT =
  "Dedicated to the love of my life, Soumi ❤️";

export default function HomePage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const displayPhotos = photos.filter((photo) => photo.group === "Home-Page");
  const displayMusic = music.slice(0, 3);

  const unlocked = isUnlocked;

  useEffect(() => {
    const t = HERO_TEXT.length * 70 + 600;
    const id = setTimeout(() => setTypewriterDone(true), t);
    return () => clearTimeout(id);
  }, []);

  const next = () => setCarouselIndex((i) => (i + 1) % displayPhotos.length);
  const prev = () => setCarouselIndex((i) => (i - 1 + displayPhotos.length) % displayPhotos.length);

  if (!unlocked) {
    return <ValentineModal onAccept={() => setIsUnlocked(true)} />;
  }

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
        <div className="max-w-fit mx-auto block" style={{ wordBreak: "keep-all" }}>
          <h1
            className="font-dancing text-2xl sm:text-4xl md:text-5xl text-rose-900 leading-loose tracking-widest min-h-[2em] whitespace-pre-line block"
          >
            <Typewriter text={HERO_TEXT} speed={70} fadeIn="letter" />
          </h1>
        </div>
        {typewriterDone && (
          <motion.p
            className="mt-4 text-blush-pink/90 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to our little corner of the world 💕
          </motion.p>
        )}
      </motion.section>

      {/* Our Gallery - Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {/* Love Letter sticker - decorative */}
        <motion.div
          className="absolute -top-2 -right-2 sm:top-0 sm:right-0 opacity-40 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.5 }}
          aria-hidden
        >
          <LoveLetterIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blush-pink" />
        </motion.div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-rose-900 flex items-center gap-2">
            <Camera className="w-6 h-6 text-rose-gold" />
            Our Gallery
          </h2>
          <Link 
            href="/gallery" 
            className="text-rose-gold font-medium text-sm inline-flex items-center gap-1 cursor-pointer relative z-10"
          >
            <motion.span
              className="inline-flex items-center gap-1"
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
        className="relative"
      >
        {/* Music Note sticker - decorative */}
        <motion.div
          className="absolute -top-2 -right-2 sm:top-0 sm:right-0 opacity-40 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.6 }}
          aria-hidden
        >
          <Music className="w-10 h-10 sm:w-12 sm:h-12 text-blush-pink" />
        </motion.div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-rose-900 flex items-center gap-2">
            <Music className="w-6 h-6 text-rose-gold" />
            Our Jam
          </h2>
          <Link 
            href="/music" 
            className="text-rose-gold font-medium text-sm inline-flex items-center gap-1 cursor-pointer relative z-10"
          >
            <motion.span
              className="inline-flex items-center gap-1"
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
          <h2 className="font-serif text-xl sm:text-2xl text-rose-900 flex items-center gap-2">
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
