"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Photo } from "@/lib/data";

interface PhotoCardProps {
  photo: Photo;
  layout?: boolean;
  index?: number;
}

export default function PhotoCard({ photo, layout = false, index = 0 }: PhotoCardProps) {
  const formattedDate = new Date(photo.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.article
      className="rounded-3xl overflow-hidden bg-creamy-white/80 backdrop-blur-md border border-rose-gold/20 shadow-lg"
      layout={layout}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 25 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-[4/3] bg-soft-blush/20">
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <p className="text-deep-berry font-medium text-sm">{photo.caption}</p>
        <p className="text-rose-gold/80 text-xs mt-1">{photo.location} · {formattedDate}</p>
      </div>
    </motion.article>
  );
}
