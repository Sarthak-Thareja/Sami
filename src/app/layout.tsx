import type { Metadata } from "next";
import { DM_Serif_Display, Quicksand } from "next/font/google";
import "./globals.css";
import ValentineModal from "@/components/ValentineModal";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "For You 💕",
  description: "A special place for our memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <ValentineModal />
        <Navbar />
        <main className="pt-20 pb-24 px-4 min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      </body>
    </html>
  );
}
