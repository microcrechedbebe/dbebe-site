import type { Metadata } from "next";
import { Quicksand, Baloo_2 } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'BEBE | Micro-crèche Besançon — Là où les petits grandissent",
  description: "Micro-crèche D'BEBE à Besançon. Un cocon d'éveil chaleureux pour votre enfant, dès 10 semaines. Horaires 6h-19h.",
  keywords: ["micro-crèche", "crèche Besançon", "garde d'enfants", "petite enfance", "D'BEBE"],
  authors: [{ name: "Micro-crèche D'BEBE" }],
  openGraph: {
    title: "D'BEBE | Micro-crèche Besançon",
    description: "Là où les petits grandissent en confiance.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${quicksand.variable} ${baloo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-quicksand antialiased">{children}</body>
    </html>
  );
}
