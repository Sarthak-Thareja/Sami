"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PhotoCard from "@/components/PhotoCard";
import { places, photos } from "@/lib/data";

export default function PlaceAlbumPage() {
  const params = useParams();
  const id = params.id as string;
  const place = places.find((p) => p.id === id);
  const locationPhotos = place ? photos.filter((p) => p.location === place.name) : [];

  if (!place) {
    return (
      <PageTransition>
        <main className="pt-40 px-6 max-w-6xl mx-auto">
          <Link
            href="/places"
            className="inline-flex items-center gap-2 text-rose-gold hover:text-rose-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Timeline
          </Link>
          <p className="text-rose-gold/80">Place not found.</p>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="pt-40 px-6 max-w-6xl mx-auto pb-24">
        <Link
          href="/places"
          className="inline-flex items-center gap-2 text-rose-gold hover:text-rose-900 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Timeline
        </Link>

        {/* Hero header with place image */}
        <motion.header
          className="relative rounded-3xl overflow-hidden mb-12 aspect-[21/9] min-h-[200px] bg-soft-blush/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={place.imageUrl}
            alt={place.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-berry/80 via-deep-berry/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-creamy-white">
            <div className="flex items-center gap-2 text-creamy-white/90 mb-2">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{place.location}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-white">{place.name}</h1>
            <p className="mt-2 text-creamy-white/90 max-w-2xl">{place.description}</p>
          </div>
        </motion.header>

        {/* Photo grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {locationPhotos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} layout index={index} />
          ))}
        </motion.div>

        {locationPhotos.length === 0 && (
          <p className="text-rose-gold/80 text-center py-12">No photos at this place yet.</p>
        )}
      </main>
    </PageTransition>
  );
}
