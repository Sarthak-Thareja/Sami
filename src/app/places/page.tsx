"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { places } from "@/lib/data";

export default function PlacesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl text-deep-berry">Our Places</h1>
        <p className="text-rose-gold/80 mt-2">Spots that mean something</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {places.map((place, index) => (
          <motion.article
            key={place.id}
            className="rounded-3xl overflow-hidden bg-creamy-white/80 backdrop-blur-md border border-rose-gold/20 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 25 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative aspect-video bg-soft-blush/20">
              <Image
                src={place.imageUrl}
                alt={place.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-rose-gold mb-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{place.location}</span>
              </div>
              <h2 className="font-serif text-xl text-deep-berry">{place.name}</h2>
              <p className="text-deep-berry/80 mt-2 text-sm">{place.description}</p>
              <p className="text-rose-gold/70 text-xs mt-2">{place.date}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
