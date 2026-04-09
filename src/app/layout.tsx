import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micro-crèche D'BEBE | Besançon - Accueil dès 10 semaines",
  description:
    "Micro-crèche D'BEBE à Besançon : un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant. Accueil dès 10 semaines, horaires 6h-19h.",
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
    title: "Micro-crèche D'BEBE | Besançon",
    description:
      "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Micro-crèche D'BEBE | Besançon",
    description:
      "Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité pour révéler le plein potentiel de votre enfant.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${nunito.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-nunito antialiased">{children}</body>
    </html>
  );
}
