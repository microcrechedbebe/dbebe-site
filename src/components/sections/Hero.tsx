"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4f9cf7]/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#a855f7]/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#f472b6]/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#fb923c]/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/5"
            style={{
              width: `${40 + i * 30}px`,
              height: `${40 + i * 30}px`,
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f9cf7] to-[#a855f7] rounded-full blur-2xl opacity-30 animate-pulse-glow" />
            <Image
              src="/logo.png"
              alt="D'BEBE"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-space font-bold text-white mb-6 leading-tight"
        >
          Là où les petits{" "}
          <span className="text-gradient">grandissent</span>
          <br />
          en confiance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light"
        >
          Micro-crèche D&apos;BEBE à Besançon — Un cocon d&apos;éveil innovant
          pour révéler le potentiel de votre enfant.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#4f9cf7] to-[#a855f7] text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#4f9cf7]/20"
          >
            <span className="relative z-10">Demander une place</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#f472b6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 glass text-white/80 rounded-2xl font-semibold text-lg hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Découvrir
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { icon: Sparkles, value: "Dès 10 sem", label: "Accueil" },
            { icon: Clock, value: "6h–19h", label: "Horaires" },
            { icon: Heart, value: "12 places", label: "Capacité" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <stat.icon size={18} className="text-[#4f9cf7]" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">{stat.value}</div>
                <div className="text-white/30 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
