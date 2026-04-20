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

const colorStyles = [
  { bg: "bg-ocean-50", icon: "bg-ocean-400", text: "text-ocean-700", sub: "text-ocean-500", border: "border-ocean-200" },
  { bg: "bg-gold-50", icon: "bg-gold-400", text: "text-gold-700", sub: "text-gold-500", border: "border-gold-200" },
  { bg: "bg-peach-50", icon: "bg-peach-300", text: "text-peach-600", sub: "text-peach-500", border: "border-peach-200" },
  { bg: "bg-ocean-50", icon: "bg-ocean-300", text: "text-ocean-600", sub: "text-ocean-400", border: "border-ocean-100" },
  { bg: "bg-gold-50", icon: "bg-gold-300", text: "text-gold-600", sub: "text-gold-400", border: "border-gold-100" },
  { bg: "bg-peach-50", icon: "bg-peach-400", text: "text-peach-700", sub: "text-peach-500", border: "border-peach-100" },
  { bg: "bg-ocean-50", icon: "bg-ocean-400", text: "text-ocean-600", sub: "text-ocean-400", border: "border-ocean-200" },
  { bg: "bg-gold-50", icon: "bg-gold-400", text: "text-gold-700", sub: "text-gold-500", border: "border-gold-200" },
  { bg: "bg-peach-50", icon: "bg-peach-300", text: "text-peach-600", sub: "text-peach-400", border: "border-peach-200" },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-ocean-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean-100 text-ocean-600 rounded-full text-xs sm:text-sm font-bold mb-3">
              ✨ Notre monde
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-bold text-ocean-800 mb-4">
              Un univers pensé pour{" "}
              <span className="text-gradient-brand">s&apos;éveiller</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              9 piliers pédagogiques pour accompagner chaque enfant dans son développement unique.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PEDAGOGICAL_AXES.map((axe, i) => {
            const Icon = iconMap[axe.icon] || Heart;
            const style = colorStyles[i % colorStyles.length];
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-5 sm:p-6 rounded-2xl ${style.bg} border ${style.border} card-playful cursor-default`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${style.icon} flex items-center justify-center mb-3`}>
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className={`font-baloo font-bold text-base sm:text-lg ${style.text} mb-0.5`}>{axe.title}</h3>
                  <p className={`text-xs font-semibold ${style.sub} mb-2 italic`}>{axe.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{axe.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
