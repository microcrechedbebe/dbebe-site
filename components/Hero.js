'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5E6D3] via-[#E6F3FA] to-white pt-20 overflow-hidden">
      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(87,140,180,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(87,140,180,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(87,140,180,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
        >
          Micro-Crèche <span className="text-[#578CB4]">D'BEBE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
        >
          « Plus qu'un mode de garde, un cocon d'éveil où chaque sens est sollicité
          pour révéler le plein potentiel de votre enfant. »
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#infos" className="px-8 py-4 bg-[#578CB4] text-white rounded-full font-bold shadow-lg hover:bg-[#3E6A91] hover:shadow-xl transition-all">
            Nous contacter
          </a>
          <a href="#projet" className="px-8 py-4 bg-white text-[#578CB4] border-2 border-[#578CB4] rounded-full font-bold hover:bg-[#E6F3FA] transition-all">
            Notre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}