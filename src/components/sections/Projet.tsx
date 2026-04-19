"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PEDAGOGICAL_AXES } from "@/app/lib/constants";
import {
  Heart, Baby, Sparkles, Eye, MessageCircle, Globe, Leaf, Activity, Handshake,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  baby: Baby,
  sparkles: Sparkles,
  eye: Eye,
  "message-circle": MessageCircle,
  globe: Globe,
  leaf: Leaf,
  activity: Activity,
  handshake: Handshake,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  coral: { bg: "bg-coral-50", text: "text-coral-600", border: "border-coral-200" },
  ocean: { bg: "bg-ocean-50", text: "text-ocean-600", border: "border-ocean-200" },
  sun: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200" },
  sand: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projet() {
  return (
    <section id="projet" className="py-20 sm:py-28 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-coral-100 text-coral-700 rounded-full text-sm font-semibold mb-4">
              Notre Projet
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-ocean-900 mb-6">
              9 piliers pour{" "}
              <span className="gradient-text">grandir ensemble</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un projet pédagogique pensé pour accompagner chaque enfant dans son développement,
              en respectant son rythme et sa personnalité.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PEDAGOGICAL_AXES.map((axe, i) => {
            const Icon = iconMap[axe.icon] || Heart;
            const colors = colorMap[axe.color] || colorMap.ocean;
            return (
              <AnimatedSection key={i}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 25px 50px rgba(12, 74, 110, 0.15)" }}
                  className={`p-6 rounded-2xl bg-white shadow-md border ${colors.border} transition-all duration-300 h-full`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colors.bg} ${colors.text}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-ocean-900 mb-2">{axe.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{axe.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
