"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { places } from "@/lib/data";

export default function PlacesPage() {
  return (
    <div className="max-w-5xl mx-auto relative">
      <motion.header
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl text-rose-900">Our Places</h1>
        <p className="text-rose-gold/80 mt-2">A journey we shared</p>
      </motion.header>

      {/* Central spine */}
      <div className="absolute left-1/2 top-24 bottom-24 w-1 -translate-x-1/2 bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200 rounded-full hidden md:block" />

      <div className="relative space-y-16 md:space-y-24">
        {places.map((place, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={place.id}
              className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {/* Spacer for layout: left card takes left half, right card takes right half */}
              {isLeft ? (
                <>
                  <motion.div
                    className="w-full md:w-[calc(50%-2rem)] md:pr-8 flex justify-center md:justify-end"
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    <Link href={`/places/${place.id}`} className="block w-full max-w-md">
                      <PlaceCard place={place} />
                    </Link>
                  </motion.div>
                  {/* MapPin on spine */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-creamy-white border-2 border-rose-400 shadow-lg flex items-center justify-center z-10 hidden md:flex"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <MapPin className="w-5 h-5 text-rose-600" />
                  </motion.div>
                  <div className="w-full md:w-[calc(50%-2rem)] md:pl-8 hidden md:block" />
                </>
              ) : (
                <>
                  <div className="w-full md:w-[calc(50%-2rem)] md:pr-8 hidden md:block" />
                  {/* MapPin on spine */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-creamy-white border-2 border-rose-400 shadow-lg flex items-center justify-center z-10 hidden md:flex"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <MapPin className="w-5 h-5 text-rose-600" />
                  </motion.div>
                  <motion.div
                    className="w-full md:w-[calc(50%-2rem)] md:pl-8 flex justify-center md:justify-start"
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    <Link href={`/places/${place.id}`} className="block w-full max-w-md">
                      <PlaceCard place={place} />
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function PlaceCard({
  place,
}: {
  place: { name: string; location: string; description: string; imageUrl: string; date: string };
}) {
  return (
    <motion.article
      className="relative w-full max-w-md rounded-3xl overflow-hidden bg-creamy-white/90 backdrop-blur-md border border-rose-gold/20 shadow-lg group"
      whileHover={{
        boxShadow: "0 20px 40px -12px rgba(183, 110, 121, 0.25), 0 0 0 1px rgba(183, 110, 121, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Date badge */}
      <div className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-xl bg-rose-900/90 text-creamy-white text-xs font-medium backdrop-blur-sm">
        {place.date}
      </div>
      <div className="relative aspect-video bg-soft-blush/20">
        <Image
          src={place.imageUrl}
          alt={place.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-rose-gold mb-2">
          <MapPin className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{place.location}</span>
        </div>
        <h2 className="font-serif text-xl text-rose-900">{place.name}</h2>
        <p className="text-deep-berry/80 mt-2 text-sm">{place.description}</p>
      </div>
    </motion.article>
  );
}
