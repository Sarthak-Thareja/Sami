"use client";

import dynamic from "next/dynamic";

const FloatingHearts = dynamic(() => import("@/components/FloatingHearts"), { ssr: false });

export default function FloatingHeartsWrapper() {
  return <FloatingHearts />;
}
