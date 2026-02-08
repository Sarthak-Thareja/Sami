"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MusicTrack } from "@/lib/data";

interface MusicCardProps {
  track: MusicTrack;
  index?: number;
}

export default function MusicCard({ track, index = 0 }: MusicCardProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && track.spotifyUrl) {
      window.open(track.spotifyUrl, "_blank");
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="w-full text-left rounded-3xl overflow-hidden bg-creamy-white/80 backdrop-blur-md border border-rose-gold/20 shadow-lg group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 25 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative aspect-square bg-soft-blush/20">
        <Image
          src={track.coverImg}
          alt={`${track.title} by ${track.artist}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 200px"
        />
        <div className="absolute inset-0 bg-deep-berry/0 group-hover:bg-deep-berry/20 transition-colors flex items-center justify-center">
          <motion.span
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-creamy-white rounded-full p-3 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            {/* Spotify-style play icon */}
          <svg className="w-8 h-8 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301-.42-.921-.539-1.321-.24-3.239 1.98-8.159 2.58-11.939 1.38-.479-.12-1.02.12-1.14.6-.12.48.12 1.021.6 1.141C9.6 17.88 15 17.28 18.24 15 18.72 14.64 19.08 14.04 18.66 13.64zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          </motion.span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-deep-berry font-semibold truncate">{track.title}</p>
        <p className="text-rose-gold/80 text-sm truncate">{track.artist}</p>
      </div>
    </motion.button>
  );
}
