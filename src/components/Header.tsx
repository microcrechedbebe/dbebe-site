"use client";

import { motion } from "framer-motion";
import { Baby, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CRECHE_INFO } from "@/app/lib/constants";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="bubble"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
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

      {/* Main header */}
      <div className="relative bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white">
        {/* Contact bar */}
        <div className="bg-ocean-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm">
            <a
              href={`tel:${CRECHE_INFO.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-coral-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CRECHE_INFO.phone}
            </a>
            <a
              href={`mailto:${CRECHE_INFO.email}`}
              className="flex items-center gap-2 hover:text-coral-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CRECHE_INFO.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {CRECHE_INFO.hours}
            </span>
          </div>
        </div>

        {/* Logo and title */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center shadow-2xl">
                <Baby className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              {/* Floating elements around logo */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-sun-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-lg">🌊</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-3 w-7 h-7 bg-sand-300 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-sm">🌸</span>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <div className="text-center md:text-left">
              <motion.h1
                className="text-3xl md:text-5xl font-bold font-poppins tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {CRECHE_INFO.name}
              </motion.h1>
              <motion.p
                className="mt-3 text-lg md:text-xl text-ocean-100 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {CRECHE_INFO.tagline}
              </motion.p>
              <motion.div
                className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-ocean-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {CRECHE_INFO.address}, {CRECHE_INFO.city}
                </span>
                {CRECHE_INFO.pmiVerified && (
                  <span className="flex items-center gap-2 bg-coral-500/20 px-3 py-1 rounded-full">
                    ✅ Structure agréée PMI
                  </span>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 42C1248 44 1344 58 1392 65L1440 72V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="#faf8f5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
