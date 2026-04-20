"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-400 via-ocean-500 to-ocean-600">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-[10%] w-40 h-16 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-32 right-[15%] w-56 h-20 bg-white/15 rounded-full animate-float-reverse" />
        <div className="absolute bottom-32 left-[5%] w-32 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 right-[10%] w-20 h-20 bg-gold-300/30 rounded-full animate-bounce-gentle" />
        <div className="absolute bottom-1/3 left-[20%] w-16 h-16 bg-peach-200/30 rounded-full animate-bounce-gentle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-[30%] w-12 h-12 bg-white/20 rounded-full animate-bounce-gentle" style={{ animationDelay: "2s" }} />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gold-300/50 animate-pulse-soft"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${12 + i * 4}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C240,100 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#FFF8F0"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo with white background */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
            <div className="absolute inset-0 bg-white rounded-full shadow-lg p-2">
              <Image
                src="/logo.png"
                alt="D'BEBE"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-baloo font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Là où les petits{" "}
          <span className="text-gold-300">grandissent</span>
          <br />
          en confiance 💛
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium"
        >
          Micro-crèche D&apos;BEBE à Besançon — Un cocon d&apos;éveil chaleureux pour révéler le potentiel de votre enfant.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14"
        >
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gold-400 text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-gold-500 transition-all duration-300 shadow-xl shadow-gold-400/30 hover:shadow-2xl hover:-translate-y-1"
          >
            Demander une place 🌟
          </a>
          <a
            href="#about"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/30 transition-all duration-300"
          >
            Découvrir
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {[
            { icon: Sparkles, value: "Dès 10 sem", label: "Accueil" },
            { icon: Clock, value: "6h–19h", label: "Horaires" },
            { icon: Heart, value: "12 places", label: "Capacité" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white/15 px-3 sm:px-4 py-2 rounded-full">
              <stat.icon size={16} className="text-gold-300" />
              <div className="text-left">
                <div className="text-white font-bold text-xs sm:text-sm">{stat.value}</div>
                <div className="text-white/70 text-[10px] sm:text-xs">{stat.label}</div>
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
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
