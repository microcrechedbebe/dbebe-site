import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'BEBE | Micro-crèche Besançon — Là où les petits grandissent",
  description:
    "Micro-crèche D'BEBE à Besançon. Un cocon d'éveil innovant pour votre enfant, dès 10 semaines. Horaires 6h-19h.",
  keywords: [
    "micro-crèche",
    "crèche Besançon",
    "garde d'enfants",
    "petite enfance",
    "D'BEBE",
    "accueil bébé",
    "éveil enfant",
  ],
  authors: [{ name: "Micro-crèche D'BEBE" }],
  openGraph: {
    title: "D'BEBE | Micro-crèche Besançon",
    description: "Là où les petits grandissent en confiance.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
