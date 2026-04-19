"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart, Baby, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-900 via-ocean-700 to-ocean-500">
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="#faf8f5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
            <Image
              src="/logo.png"
              alt="D'BEBE Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
        >
          Là où les petits{" "}
          <span className="text-coral-300">grandissent</span>{" "}
          en confiance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Micro-crèche D&apos;BEBE à Besançon — Un cocon d&apos;éveil où chaque sens
          est sollicité pour révéler le plein potentiel de votre enfant.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#familles"
            className="px-8 py-4 bg-coral-500 text-white rounded-xl font-semibold text-lg hover:bg-coral-600 transition-all shadow-lg shadow-coral-500/30 hover:shadow-xl hover:shadow-coral-500/40 hover:-translate-y-0.5"
          >
            Demander une place
          </a>
          <a
            href="#projet"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Découvrir notre projet
          </a>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Baby, label: "Dès 10 sem", value: "Accueil" },
            { icon: Heart, label: "6h-19h", value: "Horaires" },
            { icon: Sparkles, label: "12 places", value: "Capacité" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70">
              <stat.icon size={20} className="text-coral-300" />
              <div className="text-left">
                <div className="text-white font-bold text-sm">{stat.value}</div>
                <div className="text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
