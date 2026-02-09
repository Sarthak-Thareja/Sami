"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Camera, Music, MapPin } from "lucide-react";

const navItems = [
  { href: "/", icon: Heart, label: "Home" },
  { href: "/gallery", icon: Camera, label: "Gallery" },
  { href: "/music", icon: Music, label: "Music" },
  { href: "/places", icon: MapPin, label: "Places" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col pt-2 pb-2 gap-2">
      <div className="fixed left-4 top-3 z-[60] font-serif font-bold text-rose-900 text-3xl sm:text-4xl">
        Sami ❤️
      </div>
      <motion.nav
        className="w-[calc(100%-2rem)] max-w-lg rounded-3xl bg-creamy-white/70 backdrop-blur-md border border-rose-gold/20 shadow-lg px-2 py-2 mx-auto mt-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <ul className="flex items-center justify-around gap-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link href={href} className="relative block p-3 rounded-2xl" aria-label={label}>
                  <motion.span
                    className="flex flex-col items-center gap-0.5 text-deep-berry"
                    whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 8px rgba(183, 110, 121, 0.5))" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 transition-[filter] duration-200 ${isActive ? "text-rose-gold fill-soft-blush" : "text-deep-berry/80"}`}
                    />
                    <span className="text-[10px] sm:text-xs font-medium hidden sm:block">{label}</span>
                  </motion.span>
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-2xl bg-soft-blush/30 border border-rose-gold/20 -z-10"
                      layoutId="navbar-active"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
