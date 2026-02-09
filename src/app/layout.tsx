import type { Metadata } from "next";
import { DM_Serif_Display, Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";
import ValentineModal from "@/components/ValentineModal";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import FloatingHearts from "@/components/FloatingHearts";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Sami | Valentine's 2026",
  description: "A special place for our memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${quicksand.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <FloatingHearts />
        <Navbar />
        <main className="pt-40 pb-24 px-4 min-h-screen relative z-10">
          <PageTransition>{children}</PageTransition>
          <footer className="mt-10 text-center text-rose-900">
            <p className="font-dancing text-lg sm:text-xl tracking-wide">
              Created with love, by Sarthak
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
