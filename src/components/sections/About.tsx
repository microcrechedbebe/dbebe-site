"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PEDAGOGICAL_AXES } from "@/app/lib/constants";
import {
  Heart, Baby, Sparkles, Eye, MessageCircle, Globe, Leaf, Activity, Handshake,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart, baby: Baby, sparkles: Sparkles, eye: Eye,
  "message-circle": MessageCircle, globe: Globe, leaf: Leaf,
  activity: Activity, handshake: Handshake,
};

const glowColors = [
  "from-[#4f9cf7] to-[#a855f7]",
  "from-[#a855f7] to-[#f472b6]",
  "from-[#f472b6] to-[#fb923c]",
  "from-[#fb923c] to-[#22d3ee]",
  "from-[#22d3ee] to-[#4f9cf7]",
  "from-[#4f9cf7] to-[#f472b6]",
  "from-[#a855f7] to-[#22d3ee]",
  "from-[#f472b6] to-[#4f9cf7]",
  "from-[#fb923c] to-[#a855f7]",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f9cf7]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-medium text-[#4f9cf7] tracking-wider uppercase mb-6">
              Notre monde
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold text-white mb-6">
              Un univers pensé pour{" "}
              <span className="text-gradient">s&apos;éveiller</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              9 piliers pédagogiques pour accompagner chaque enfant dans son développement.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PEDAGOGICAL_AXES.map((axe, i) => {
            const Icon = iconMap[axe.icon] || Heart;
            const glow = glowColors[i % glowColors.length];
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group p-6 rounded-2xl glass hover:glass-strong transition-all duration-500 cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${glow} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-space font-bold text-white text-lg mb-2">{axe.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-3">{axe.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
